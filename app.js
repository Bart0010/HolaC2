const app = document.getElementById('app');
const STORAGE_KEY = 'hola-c2-progress-v1';
const themes = ['crema', 'oceano', 'bosque', 'lavanda', 'noche'];
const chapters = VOCABULARY.map((chapter, chapterIndex) => ({
  ...chapter,
  index: chapterIndex,
  entries: chapter.rows.map(([es, pl], index) => ({ id: `${chapterIndex}-${index}`, es, pl, chapter: chapterIndex }))
}));
const entries = chapters.flatMap(chapter => chapter.entries);
const byId = new Map(entries.map(entry => [entry.id, entry]));
const grammarTotal = GRAMMAR.reduce((count, chapter) => count + chapter.exercises.length, 0);
const defaultState = { theme: 'crema', known: {}, review: {}, grammar: {} };

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || 'null');
    if (saved && typeof saved === 'object') {
      return {
        theme: themes.includes(saved.theme) ? saved.theme : defaultState.theme,
        known: saved.known && typeof saved.known === 'object' ? saved.known : {},
        review: saved.review && typeof saved.review === 'object' ? saved.review : {},
        grammar: saved.grammar && typeof saved.grammar === 'object' ? saved.grammar : {}
      };
    }
  } catch (error) { console.warn('Nie można odczytać zapisu postępu.', error); }
  return { theme: 'crema', known: {}, review: {}, grammar: {} };
}

let state = loadState();
let session = null;
let currentTable = null;
let searchText = '';
let tableFilter = 'all';
let direction = 'es-pl';
let sessionLength = '10';

function saveState() {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); }
  catch (error) { console.warn('Nie można zapisać postępu w tej przeglądarce.', error); }
  updateNavigation();
}

function esc(value) {
  return String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
}

function stripAccents(value) {
  return value.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
}

function normalize(value) {
  return value.toLocaleLowerCase('es').normalize('NFC').replace(/[¿?¡!.,;:…()]/g, '').replace(/\s+/g, ' ').trim();
}

function withoutArticle(value) {
  return value.replace(/^(el|la|los|las|un|una|unos|unas)\s+/u, '');
}

function answerStatus(input, expected) {
  const given = normalize(input);
  const target = normalize(expected);
  if (given === target) return 'correct';
  if (expected.includes('algo/alguien') && (given === target.replace('algo/alguien', 'algo') || given === target.replace('algo/alguien', 'alguien'))) return 'correct';
  if (given && stripAccents(withoutArticle(given)) === stripAccents(withoutArticle(target))) return 'close';
  if (given && expected.includes('(a)') && given === normalize(expected.replace('(a)', ''))) return 'close';
  return 'incorrect';
}

function shuffle(items) {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function percent(count, total) { return total ? Math.round(count / total * 100) : 0; }
function knownCount(list = entries) { return list.filter(entry => state.known[entry.id]).length; }
function reviewEntries() { return entries.filter(entry => state.review[entry.id]); }
function grammarCount(index) { return GRAMMAR[index].exercises.filter((_, i) => state.grammar[`${index}-${i}`]).length; }
function totalGrammarKnown() { return GRAMMAR.reduce((sum, _, i) => sum + grammarCount(i), 0); }
function progressBar(count, total, extra = '') { return `<div class="progress-track ${extra}" role="progressbar" aria-label="Postęp" aria-valuenow="${percent(count, total)}" aria-valuemin="0" aria-valuemax="100"><span style="width:${percent(count, total)}%"></span></div>`; }

function updateNavigation() {
  const known = knownCount();
  const pct = percent(known, entries.length);
  document.getElementById('sidebar-percent').textContent = `${pct}%`;
  document.getElementById('sidebar-progress').style.width = `${pct}%`;
  const count = reviewEntries().length;
  const badge = document.getElementById('review-badge');
  badge.textContent = count;
  badge.hidden = count === 0;
}

function applyTheme() {
  document.documentElement.dataset.theme = state.theme;
  document.getElementById('theme-select').value = state.theme;
  const background = getComputedStyle(document.documentElement).getPropertyValue('--bg').trim();
  document.querySelector('meta[name="theme-color"]').content = background;
}

function getRoute() {
  const [path, index] = (location.hash.slice(1) || 'home').split('/');
  const validIndex = /^\d+$/.test(index || '');
  if (path === 'chapter' && validIndex && chapters[Number(index)]) return { path, index: Number(index), active: Number(index) < 8 ? 'words' : 'phrases' };
  if (path === 'lesson' && validIndex && GRAMMAR[Number(index)]) return { path, index: Number(index), active: 'grammar' };
  if (['home','words','phrases','grammar','review'].includes(path)) return { path, active: path };
  return { path: 'home', active: 'home' };
}

const routeNames = { home: 'Start', words: 'Słownictwo', phrases: 'Frazy', grammar: 'Gramatyka', review: 'Powtórki' };

function updateActiveRoute(route) {
  for (const link of document.querySelectorAll('[data-route]')) {
    const active = link.dataset.route === route.active;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  document.getElementById('breadcrumb').textContent = routeNames[route.active];
}

function chapterCard(chapter) {
  const count = knownCount(chapter.entries);
  const total = chapter.entries.length;
  return `<a class="chapter-card" href="#chapter/${chapter.index}"><div class="card-meta"><span class="card-label">${total} ${chapter.index < 8 ? 'słów' : 'fraz'}</span><span>${count}/${total} znanych</span></div><h3>${esc(chapter.title)}</h3><p>${esc(chapter.desc)}</p>${progressBar(count, total)}</a>`;
}

function grammarCard(chapter, index) {
  const count = grammarCount(index);
  const total = chapter.exercises.length;
  return `<a class="chapter-card grammar-card" href="#lesson/${index}"><h3>${esc(chapter.title)}</h3><p>${esc(chapter.desc)}</p><div class="card-meta"><span class="card-label">Teoria · ${total} ćwiczeń</span><span>${count}/${total}</span></div>${progressBar(count,total)}</a>`;
}

function renderHome() {
  const known = knownCount();
  return `<section class="hero"><div><p class="eyebrow">Preparación DELE · C2</p><h1>Hiszpański na poziomie C2</h1><p class="subtitle">Ucz się słów i fraz z zestawu, powtarzaj je w ćwiczeniach i doskonal zaawansowaną gramatykę.</p><div class="hero-actions"><a class="btn" href="#words">Rozpocznij naukę</a><a class="btn secondary" href="#grammar">Gramatyka</a></div></div><div class="hero-progress"><strong>Twój postęp</strong><div class="score">${percent(known, entries.length)}%</div>${progressBar(known,entries.length)}<p>${known} z ${entries.length} słów i fraz opanowanych</p></div></section>
  <div class="stats"><div class="stat"><small>Słownictwo i frazy</small><strong>${entries.length}</strong><span>pozycji</span></div><a class="stat" href="#review"><small>Do powtórki</small><strong>${reviewEntries().length}</strong><span>pozycji</span></a><a class="stat" href="#grammar"><small>Gramatyka</small><strong>${totalGrammarKnown()}/${grammarTotal}</strong><span>ćwiczeń</span></a></div>
  <div class="section-heading"><h2>Działy słownictwa</h2><a href="#words">Wszystkie działy</a></div><div class="cards">${chapters.slice(0,8).map(chapterCard).join('')}</div>
  <div class="section-heading"><h2>Frazy</h2><a href="#phrases">Przejdź do fraz</a></div><div class="cards">${chapters.slice(8).map(chapterCard).join('')}</div>
  <div class="section-heading"><h2>Gramatyka</h2><a href="#grammar">Wszystkie zagadnienia</a></div><div class="cards">${GRAMMAR.slice(0,4).map(grammarCard).join('')}</div>`;
}

function renderCatalog(isPhrase) {
  const list = isPhrase ? chapters.slice(8) : chapters.slice(0,8);
  const items = list.flatMap(chapter => chapter.entries);
  return `<div class="page-head"><div><h1>${isPhrase ? 'Frazy i idiomy' : 'Słownictwo'}</h1><p class="subtitle">${items.length} ${isPhrase ? 'fraz w dwóch działach' : 'słów w ośmiu działach'} z Twojego zestawu DELE C2.</p></div></div><div class="cards">${list.map(chapterCard).join('')}</div>`;
}

function learningControls() {
  return `<div class="lesson-actions"><button class="btn" data-action="start" data-mode="flash">Fiszki</button><button class="btn secondary" data-action="start" data-mode="quiz">Test wyboru</button><button class="btn secondary" data-action="start" data-mode="write" title="Pisanie: polski → hiszpański">Przypomnij i napisz</button></div>
    <div class="settings-bar"><label>Kierunek <select id="direction"><option value="es-pl" ${direction === 'es-pl' ? 'selected' : ''}>Hiszpański → polski</option><option value="pl-es" ${direction === 'pl-es' ? 'selected' : ''}>Polski → hiszpański</option></select></label><label>Liczba pytań <select id="session-length"><option value="10" ${sessionLength === '10' ? 'selected' : ''}>10</option><option value="20" ${sessionLength === '20' ? 'selected' : ''}>20</option><option value="all" ${sessionLength === 'all' ? 'selected' : ''}>Wszystkie</option></select></label></div>`;
}

function tableMarkup(list, isReview = false) {
  currentTable = { list, isReview };
  return `<div class="toolbar"><input type="search" id="table-search" class="search" aria-label="Szukaj słowa lub frazy po hiszpańsku lub polsku" placeholder="Szukaj słów i fraz…" value="${esc(searchText)}"><select id="table-filter" aria-label="Filtr postępu"><option value="all" ${tableFilter === 'all' ? 'selected' : ''}>Wszystkie</option><option value="new" ${tableFilter === 'new' ? 'selected' : ''}>Do nauki</option><option value="known" ${tableFilter === 'known' ? 'selected' : ''}>Opanowane</option><option value="review" ${tableFilter === 'review' ? 'selected' : ''}>Do powtórki</option></select></div><div id="table-results"></div>`;
}

function filteredEntries() {
  if (!currentTable) return [];
  const query = stripAccents(searchText.trim().toLowerCase());
  return currentTable.list.filter(entry => {
    const matches = !query || stripAccents(`${entry.es} ${entry.pl}`.toLowerCase()).includes(query);
    const statusMatches = tableFilter === 'all' || (tableFilter === 'known' && state.known[entry.id]) || (tableFilter === 'new' && !state.known[entry.id]) || (tableFilter === 'review' && state.review[entry.id]);
    return matches && statusMatches;
  });
}

function renderTable() {
  const target = document.getElementById('table-results');
  if (!target) return;
  const list = filteredEntries();
  target.innerHTML = list.length ? `<div class="table-wrap"><table class="word-table"><thead><tr><th scope="col">Hiszpański</th><th scope="col">Polski</th><th scope="col">Umiem</th></tr></thead><tbody>${list.map(entry => `<tr><td lang="es">${esc(entry.es)}</td><td>${esc(entry.pl)}</td><td><button class="check-btn ${state.known[entry.id] ? 'checked' : ''}" type="button" data-action="toggle-known" data-id="${entry.id}" aria-pressed="${Boolean(state.known[entry.id])}" aria-label="${state.known[entry.id] ? 'Usuń oznaczenie' : 'Oznacz jako opanowane'}: ${esc(entry.es)}">${state.known[entry.id] ? '✓ Tak' : 'Umiem'}</button></td></tr>`).join('')}</tbody></table></div>` : '<div class="empty">Brak pozycji pasujących do filtra.</div>';
  const progress = document.getElementById('chapter-progress');
  if (progress) progress.innerHTML = `<p>${knownCount(currentTable.list)} z ${currentTable.list.length} opanowanych</p>${progressBar(knownCount(currentTable.list),currentTable.list.length)}`;
}

function renderChapter(index) {
  const chapter = chapters[index];
  const parent = index < 8 ? 'words' : 'phrases';
  return `<a class="back" href="#${parent}">‹ Wszystkie ${index < 8 ? 'działy' : 'frazy'}</a><div class="page-head"><div><h1>${esc(chapter.title)}</h1><p class="subtitle">${esc(chapter.desc)}</p><div id="chapter-progress" class="section-progress"></div></div></div>${learningControls()}${tableMarkup(chapter.entries)}`;
}

function renderReview() {
  const list = reviewEntries();
  return `<div class="page-head"><div><h1>Powtórki</h1><p class="subtitle">Tutaj trafiają pozycje, przy których pojawił się błąd lub które oznaczyłeś do powtórzenia.</p></div></div>${list.length ? `${learningControls()}${tableMarkup(list,true)}` : '<div class="panel"><h2>Wszystko nadrobione</h2><p class="subtitle">Rozwiąż test lub rozpocznij fiszki. Trudne słowa pojawią się tutaj automatycznie.</p><div class="lesson-actions"><a class="btn" href="#words">Przejdź do słownictwa</a></div></div>'}`;
}

function renderGrammar() {
  return `<div class="page-head"><div><h1>Gramatyka</h1><p class="subtitle">${GRAMMAR.length} zagadnień, objaśnienia po polsku, przykłady po hiszpańsku i ${grammarTotal} ćwiczeń z wyjaśnieniami.</p></div></div><div class="notice">Ćwiczenia rozwijają poprawność gramatyczną, precyzję wypowiedzi oraz spójność tekstu potrzebne w przygotowaniu do DELE C2.</div><div class="cards">${GRAMMAR.map(grammarCard).join('')}</div>`;
}

function renderLesson(index) {
  const chapter = GRAMMAR[index];
  const count = grammarCount(index);
  return `<a class="back" href="#grammar">‹ Wszystkie zagadnienia</a><div class="page-head"><div><h1>${esc(chapter.title)}</h1><p class="subtitle">${esc(chapter.desc)}</p><div class="section-progress"><p>${count} z ${chapter.exercises.length} ćwiczeń opanowanych</p>${progressBar(count,chapter.exercises.length)}</div></div></div><div class="lesson-actions"><button class="btn" data-action="start-grammar" data-index="${index}">Rozwiąż ćwiczenia</button></div><div class="theory">${chapter.theory.map(rule => `<section class="panel"><h2>${esc(rule.heading)}</h2><p>${esc(rule.body)}</p>${rule.examples.map(([es,pl]) => `<div class="example"><strong lang="es">${esc(es)}</strong><span>${esc(pl)}</span></div>`).join('')}</section>`).join('')}</div><button class="btn" data-action="start-grammar" data-index="${index}">Rozpocznij ćwiczenia</button>`;
}

function render() {
  session = null;
  currentTable = null;
  searchText = '';
  tableFilter = 'all';
  const route = getRoute();
  updateActiveRoute(route);
  updateNavigation();
  switch (route.path) {
    case 'words': app.innerHTML = renderCatalog(false); break;
    case 'phrases': app.innerHTML = renderCatalog(true); break;
    case 'chapter': app.innerHTML = renderChapter(route.index); break;
    case 'grammar': app.innerHTML = renderGrammar(); break;
    case 'lesson': app.innerHTML = renderLesson(route.index); break;
    case 'review': app.innerHTML = renderReview(); break;
    default: app.innerHTML = renderHome();
  }
  renderTable();
  window.scrollTo(0,0);
}

function markEntry(entry, status) {
  if (status === 'correct') { state.known[entry.id] = true; delete state.review[entry.id]; }
  else { delete state.known[entry.id]; state.review[entry.id] = true; }
  saveState();
}

function toggleKnown(id) {
  if (!byId.has(id)) return;
  if (state.known[id]) delete state.known[id];
  else { state.known[id] = true; delete state.review[id]; }
  saveState();
  if (currentTable?.isReview) {
    currentTable.list = reviewEntries();
    if (!currentTable.list.length) { render(); return; }
  }
  renderTable();
}

function createQuestion(entry, mode, dir, source) {
  const promptKey = dir === 'pl-es' ? 'pl' : 'es';
  const answerKey = dir === 'pl-es' ? 'es' : 'pl';
  const question = { entry, prompt: entry[promptKey], answer: entry[answerKey] };
  if (mode === 'quiz') {
    const sameChapter = entries.filter(item => item.chapter === entry.chapter && item.id !== entry.id);
    const otherChapters = entries.filter(item => item.chapter !== entry.chapter);
    const candidates = [...shuffle(source.filter(item => item.id !== entry.id)), ...shuffle(sameChapter), ...shuffle(otherChapters)];
    const choices = [question.answer];
    for (const candidate of candidates) {
      if (!choices.includes(candidate[answerKey])) choices.push(candidate[answerKey]);
      if (choices.length === 4) break;
    }
    question.options = shuffle(choices);
    question.correctIndex = question.options.indexOf(question.answer);
  }
  return question;
}

function startSession(mode) {
  if (!currentTable || !['flash','quiz','write'].includes(mode)) return;
  const list = filteredEntries();
  if (!list.length) { alert('W tym filtrze nie ma pozycji do nauki.'); return; }
  const dir = mode === 'write' ? 'pl-es' : direction;
  const length = sessionLength === 'all' ? list.length : Number(sessionLength);
  const title = getRoute().path === 'review' ? 'Powtórki' : chapters[list[0].chapter].title;
  const selected = shuffle(list).slice(0,length);
  session = { mode, dir, title, questions: selected.map(entry => createQuestion(entry, mode, dir, list)), index: 0, results: [], revealed: false, response: null, source: list, length: selected.length };
  renderSession();
  window.scrollTo(0,0);
}

function startGrammar(index) {
  const lesson = GRAMMAR[index];
  if (!lesson) return;
  const questions = shuffle(lesson.exercises.map((exercise, exerciseIndex) => {
    const answer = exercise.options[exercise.correct];
    const options = shuffle(exercise.options);
    return { prompt: exercise.q, options, correctIndex: options.indexOf(answer), why: exercise.why, key: `${index}-${exerciseIndex}`, answer };
  }));
  session = { mode: 'grammar', title: lesson.title, questions, index: 0, results: [], revealed: false, response: null, grammarIndex:index };
  renderSession();
  window.scrollTo(0,0);
}

const sessionNames = { flash: 'Fiszki', quiz: 'Test wyboru', write: 'Przypomnij i napisz', grammar: 'Ćwiczenia gramatyczne' };

function renderSession() {
  if (!session) return;
  const s = session;
  const total = s.questions.length;
  if (s.index >= total) { renderResult(); return; }
  const q = s.questions[s.index];
  const feedback = s.response ? renderFeedback(s.response, q) : '';
  const next = s.response ? `<div class="session-actions"><button class="btn" data-action="next">${s.index === total - 1 ? 'Zobacz wynik' : 'Następne pytanie'}</button></div>` : '';
  const promptLang = s.dir === 'pl-es' ? 'pl' : 'es';
  const answerLang = promptLang === 'es' ? 'pl' : 'es';
  let content;
  if (s.mode === 'flash') {
    content = `<button class="prompt-card flip" data-action="flip" aria-label="${s.revealed ? 'Ukryj tłumaczenie' : 'Pokaż tłumaczenie'}"><span class="card-tag">${promptLang === 'es' ? 'Hiszpański' : 'Polski'}</span><span class="prompt-text" lang="${promptLang}">${esc(q.prompt)}</span>${s.revealed ? `<span class="answer-text" lang="${answerLang}">${esc(q.answer)}</span>` : '<span class="card-hint">Dotknij karty, aby zobaczyć tłumaczenie</span>'}</button><div class="session-actions">${s.revealed ? '<button class="btn secondary" data-action="flash-rate" data-status="incorrect">Do powtórki</button><button class="btn" data-action="flash-rate" data-status="correct">Umiem</button>' : '<button class="btn" data-action="flip">Pokaż odpowiedź</button>'}</div>`;
  } else if (s.mode === 'write') {
    content = `<div class="prompt-card"><span class="card-tag">Przetłumacz na hiszpański</span><span class="prompt-text" lang="pl">${esc(q.prompt)}</span></div><form class="write-form" id="write-form"><input name="answer" id="writing-answer" aria-label="Odpowiedź po hiszpańsku" lang="es" autocomplete="off" autocapitalize="off" spellcheck="false" placeholder="Wpisz po hiszpańsku…" required ${s.response ? `disabled value="${esc(s.response.input)}"` : ''}><button class="btn" type="submit" ${s.response ? 'disabled' : ''}>Sprawdź</button></form>${feedback}${next}`;
  } else {
    const questionMarkup = s.mode === 'grammar' ? `<p class="grammar-prompt">Wybierz najlepsze uzupełnienie lub odpowiedź.</p><p class="grammar-question" lang="es">${esc(q.prompt)}</p>` : `<div class="prompt-card"><span class="card-tag">${promptLang === 'es' ? 'Hiszpański' : 'Polski'}</span><span class="prompt-text" lang="${promptLang}">${esc(q.prompt)}</span></div>`;
    content = `${questionMarkup}<div class="options">${q.options.map((option,i) => `<button data-action="choose" data-index="${i}" class="option ${s.response && i === q.correctIndex ? 'correct' : ''} ${s.response && i === s.response.index && i !== q.correctIndex ? 'incorrect' : ''}" ${s.response ? 'disabled' : ''}><span class="option-index">${String.fromCharCode(65+i)}</span><span lang="${s.mode === 'grammar' ? 'es' : answerLang}">${esc(option)}</span></button>`).join('')}</div>${feedback}${next}`;
  }
  app.innerHTML = `<section class="session-shell"><div class="session-top"><button class="back" style="margin-bottom:0" data-action="exit">‹ Wróć</button><span>${s.index+1} / ${total}</span></div>${progressBar(s.index,total,'session-progress')}<div class="session-title"><p class="eyebrow">${sessionNames[s.mode]}</p><h2>${esc(s.title)}</h2></div>${content}</section>`;
  if (s.mode === 'write' && !s.response) document.getElementById('writing-answer').focus();
}

function renderFeedback(response, question) {
  const label = { correct:'Dobrze!', close:'Prawie dobrze', incorrect:'Spróbuj zapamiętać' }[response.status];
  return `<div class="feedback ${response.status}" role="status"><strong>${label}</strong><p>${response.status === 'close' ? 'Sprawdź akcenty, rodzajnik lub przyimek. ' : ''}Poprawna odpowiedź: <b>${esc(question.answer)}</b></p>${question.why ? `<p>${esc(question.why)}</p>` : ''}</div>`;
}

function finishAnswer(status, input, index = null) {
  if (!session || session.response) return;
  const q = session.questions[session.index];
  const response = { status, input, index };
  session.response = response;
  session.results.push({ question: q, status });
  if (session.mode === 'grammar') {
    if (status === 'correct') state.grammar[q.key] = true;
    else delete state.grammar[q.key];
    saveState();
  } else markEntry(q.entry, status);
  renderSession();
}

function advance() {
  if (!session) return;
  session.index++;
  session.revealed = false;
  session.response = null;
  renderSession();
  window.scrollTo(0,0);
}

function renderResult() {
  const s = session;
  const correct = s.results.filter(result => result.status === 'correct').length;
  const missed = s.results.filter(result => result.status !== 'correct');
  const partial = s.results.filter(result => result.status === 'close').length;
  app.innerHTML = `<section class="session-shell"><div class="panel result-card"><p class="eyebrow">Sesja zakończona</p><h1>${correct === s.questions.length ? 'Świetna robota!' : 'Dobra praca'}</h1><div class="result-score">${correct}/${s.questions.length}</div><p class="subtitle">${correct} poprawnych${partial ? ` · ${partial} prawie poprawnych` : ''} · ${missed.length} do powtórzenia</p><div class="session-actions"><button class="btn" data-action="restart">Powtórz sesję</button><button class="btn secondary" data-action="exit">Wróć do działu</button></div>${s.mode !== 'grammar' && missed.length ? '<a class="back" href="#review">Przejdź do powtórek</a>' : ''}</div>${missed.length ? `<div class="section-heading"><h2>Do utrwalenia</h2></div><div class="theory">${missed.map(result => `<div class="panel"><strong>${esc(result.question.prompt)}</strong><p>${esc(result.question.answer)}</p>${result.question.why ? `<p>${esc(result.question.why)}</p>` : ''}</div>`).join('')}</div>` : ''}</section>`;
}

function restart() {
  if (!session) return;
  const s = session;
  if (s.mode === 'grammar') { startGrammar(s.grammarIndex); return; }
  const selected = shuffle(s.source).slice(0,s.length);
  session = { ...s, questions: selected.map(entry => createQuestion(entry,s.mode,s.dir,s.source)), index: 0, results: [], revealed: false, response: null };
  renderSession();
  window.scrollTo(0,0);
}

app.addEventListener('click', event => {
  const button = event.target.closest('[data-action]');
  if (!button || button.disabled) return;
  switch (button.dataset.action) {
    case 'start': startSession(button.dataset.mode); break;
    case 'start-grammar': startGrammar(Number(button.dataset.index)); break;
    case 'toggle-known': toggleKnown(button.dataset.id); break;
    case 'flip': if (session?.mode === 'flash') { session.revealed = !session.revealed; renderSession(); } break;
    case 'flash-rate':
      if (session?.mode === 'flash' && session.revealed) {
        const question = session.questions[session.index];
        const status = button.dataset.status;
        session.results.push({ question, status });
        markEntry(question.entry,status);
        advance();
      }
      break;
    case 'choose':
      if (session && !session.response) {
        const question = session.questions[session.index];
        const index = Number(button.dataset.index);
        finishAnswer(index === question.correctIndex ? 'correct' : 'incorrect', question.options[index], index);
      }
      break;
    case 'next': if (session?.response) advance(); break;
    case 'exit': render(); break;
    case 'restart': restart(); break;
  }
});

app.addEventListener('submit', event => {
  if (event.target.id !== 'write-form') return;
  event.preventDefault();
  if (session?.mode !== 'write' || session.response) return;
  const input = new FormData(event.target).get('answer').trim();
  if (!input) return;
  finishAnswer(answerStatus(input,session.questions[session.index].answer),input);
});

app.addEventListener('input', event => {
  if (event.target.id === 'table-search') { searchText = event.target.value; renderTable(); }
});

app.addEventListener('change', event => {
  if (event.target.id === 'table-filter') { tableFilter = event.target.value; renderTable(); }
  if (event.target.id === 'direction') direction = event.target.value;
  if (event.target.id === 'session-length') sessionLength = event.target.value;
});

document.getElementById('theme-select').addEventListener('change', event => {
  if (!themes.includes(event.target.value)) return;
  state.theme = event.target.value;
  applyTheme();
  saveState();
});

document.getElementById('nav').addEventListener('click', event => {
  const link = event.target.closest('a[data-route]');
  if (link && location.hash === link.hash) { event.preventDefault(); render(); }
});

window.addEventListener('hashchange', render);
applyTheme();
render();
