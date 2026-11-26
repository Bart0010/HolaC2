# Hola C2

Interaktywna aplikacja do nauki języka hiszpańskiego. Zawiera 218 słów i 54 frazy z zestawu PDF, dziesięć rozdziałów gramatyki z 50 ćwiczeniami, fiszki, testy wyboru, wpisywanie odpowiedzi oraz powtórki. Dostępnych jest pięć motywów wizualnych.

## Uruchomienie na komputerze

1. Rozpakuj plik ZIP do osobnego folderu, np. `hola-c2`.
2. Otwórz plik `index.html` w przeglądarce.
3. Aby edytować kod, otwórz Visual Studio Code i wybierz **File → Open Folder**, wskazując rozpakowany folder.

Projekt używa wyłącznie HTML, CSS i JavaScript. Nie wymaga instalowania dodatkowych bibliotek, Node.js ani budowania projektu. Możesz także uruchomić go za pomocą rozszerzenia Live Server w VS Code.

## Publikacja na GitHubie z poziomu VS Code

### 1. Utwórz repozytorium

1. Upewnij się, że masz zainstalowany Git. W terminalu VS Code wykonaj `git --version`.
2. Otwórz folder projektu w VS Code. W głównym katalogu musisz widzieć `index.html`, `styles.css`, `vocabulary.js`, `grammar.js` oraz `app.js`.
3. Otwórz panel **Source Control** (`Ctrl+Shift+G`) i wybierz **Initialize Repository**. Jeżeli pojawi się od razu opcja **Publish to GitHub**, możesz z niej skorzystać.
4. Dodaj pliki do zatwierdzenia, wpisz nazwę commita `Initial commit – Hola C2` i kliknij **Commit**. Jeżeli Git poprosi o dane autora, skonfiguruj `user.name` i `user.email`.
5. Otwórz paletę poleceń `Ctrl+Shift+P`, wybierz **Publish to GitHub**, zaloguj się, wpisz nazwę repozytorium `hola-c2` i wybierz repozytorium publiczne.

### 2. Włącz GitHub Pages

1. W nowym repozytorium na GitHubie otwórz **Settings → Pages**.
2. W sekcji **Build and deployment → Source** wybierz **Deploy from a branch**.
3. Wybierz gałąź `main` (lub nazwę faktycznej głównej gałęzi repozytorium) oraz folder `/(root)`.
4. Kliknij **Save**. Po zakończeniu publikacji GitHub wyświetli adres strony w ustawieniach Pages, zazwyczaj `https://TWOJ-NICK.github.io/hola-c2/`.

GitHub Pages jest dostępny w publicznych repozytoriach na planie GitHub Free. Po publikacji strona będzie publicznie dostępna pod swoim adresem.

### 3. Aktualizowanie i synchronizowanie

1. W VS Code zmień i zapisz wybrane pliki.
2. Otwórz **Source Control**, dodaj zmiany, wpisz opis commita, np. `Dodanie nowych słówek`, i kliknij **Commit**.
3. Wybierz **Push** lub **Sync Changes**. GitHub Pages automatycznie opublikuje nową wersję po wypchnięciu zmian do skonfigurowanej gałęzi.
4. Na innym komputerze użyj **Git: Clone** w palecie poleceń VS Code, wklej adres repozytorium i wybierz folder docelowy.

## Pliki projektu

| Plik | Zawartość |
|---|---|
| `index.html` | Struktura i nawigacja aplikacji |
| `styles.css` | Wygląd, pięć motywów i układ mobilny |
| `vocabulary.js` | Wszystkie słowa i frazy oraz działy z PDF-u |
| `grammar.js` | Teoria, przykłady i ćwiczenia gramatyczne |
| `app.js` | Fiszki, testy, pisanie, powtórki i zapisy postępów |
| `.nojekyll` | Bezpośrednia publikacja statycznych plików na GitHub Pages |

Postępy i wybrany motyw są zapisywane w pamięci lokalnej przeglądarki. Każde urządzenie i adres strony mają własny zapis. Przypomnij i napisz zawsze sprawdza tłumaczenie z polskiego na hiszpański. Odpowiedzi z pominięciem akcentu albo rodzajnika są oznaczane jako prawie poprawne.

## Dokumentacja

- [VS Code – Source Control](https://code.visualstudio.com/docs/sourcecontrol/quickstart)
- [GitHub Pages – wybór źródła publikacji](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Instituto Cervantes – przewodnik egzaminu DELE C2](https://examenes.cervantes.es/sites/default/files/Guia_examen_dele_C2_2024_2.pdf)

Ćwiczenia gramatyczne są autorskimi materiałami do przygotowania do egzaminu.
