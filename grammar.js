// Autorskie objaśnienia i ćwiczenia do przygotowania do DELE C2.
const GRAMMAR = [
  {
    title: 'Subjuntivo i indicativo – zaawansowane użycie',
    desc: 'Ocena, wątpliwość, dystans wobec informacji i subiektywność.',
    theory: [
      { heading: 'Fakt a ocena faktu', body: 'Indicativo służy między innymi do przedstawiania informacji jako stwierdzenia. Subjuntivo pojawia się w zdaniach podrzędnych wyrażających ocenę, emocję, życzenie, wątpliwość lub zaprzeczenie przekonania. Informacja w subjuntivo może dotyczyć rzeczywistego faktu, np. po lamentar que.', examples: [['Es evidente que la situación ha empeorado.', 'Jest oczywiste, że sytuacja się pogorszyła.'], ['Lamento que la situación haya empeorado.', 'Ubolewam, że sytuacja się pogorszyła.']] },
      { heading: 'Dobór czasu w subjuntivo', body: 'Presente de subjuntivo odnosi się często do teraźniejszości lub przyszłości, perfecto do zdarzenia wcześniejszego powiązanego z teraźniejszością. Po czasowniku nadrzędnym w przeszłości typowy jest imperfecto lub pluscuamperfecto, zależnie od relacji czasowej.', examples: [['No es descartable que surjan nuevos obstáculos.', 'Nie można wykluczyć, że pojawią się nowe przeszkody.'], ['Dudaba que hubieran corroborado los datos antes de la reunión.', 'Wątpił, czy potwierdzili dane przed spotkaniem.']] },
      { heading: 'Różnica znaczenia po czasownikach komunikacji', body: 'Decir que z indicativo przekazuje treść informacji, a decir que z subjuntivo może wyrażać polecenie. W złożonych tekstach dobór trybu pomaga pokazać stanowisko mówiącego wobec treści.', examples: [['Dijo que los informes estaban listos.', 'Powiedział, że sprawozdania były gotowe.'], ['Dijo que preparáramos los informes.', 'Polecił nam przygotować sprawozdania.']] }
    ],
    exercises: [
      { q: 'Es imprescindible que los expertos ___ las conclusiones antes de publicarlas.', options: ['corroboran', 'corroboren', 'corroborarán'], correct: 1, why: 'Po es imprescindible que używamy subjuntivo. Corroboren to presente de subjuntivo.' },
      { q: 'Lamento que no ___ a tiempo. Ahora ya es tarde.', options: ['hayas intervenido', 'interviniste', 'intervendrás'], correct: 0, why: 'Lamentar que wymaga subjuntivo. Perfecto wskazuje wcześniejsze zdarzenie.' },
      { q: 'Era evidente que las medidas no ___ suficientes.', options: ['fueran', 'eran', 'sean'], correct: 1, why: 'Era evidente que przedstawia sąd jako fakt. W tym kontekście występuje indicativo.' },
      { q: 'Dudaban que la empresa ___ los datos antes de que se descubriera el error.', options: ['había rectificado', 'rectificará', 'hubiera rectificado'], correct: 2, why: 'Pluscuamperfecto de subjuntivo umieszcza niepewną czynność przed przeszłym punktem odniesienia.' },
      { q: 'El director les ordenó que ___ las responsabilidades de cada equipo.', options: ['delimitaran', 'delimitan', 'delimitarán'], correct: 0, why: 'Czasownik wyrażający polecenie w przeszłości łączy się tutaj z imperfecto de subjuntivo.' }
    ]
  },
  {
    title: 'Zdania przyzwalające i czasowe',
    desc: 'Aunque, por más que, a pesar de que, hasta que, en cuanto.',
    theory: [
      { heading: 'Przyzwolenie', body: 'Aunque z indicativo często przywołuje informację uznaną za fakt. Subjuntivo pozwala przedstawić okoliczność jako hipotetyczną, nieistotną dla wniosku lub już znaną rozmówcom. Por más que podkreśla, że przeszkoda nie zmienia rezultatu.', examples: [['Aunque los indicios son sólidos, conviene actuar con cautela.', 'Chociaż poszlaki są mocne, warto postępować ostrożnie.'], ['Aunque surjan nuevos obstáculos, seguiremos adelante.', 'Nawet jeśli pojawią się nowe przeszkody, pójdziemy dalej.']] },
      { heading: 'Czas i przyszłość', body: 'Po cuando, en cuanto, tan pronto como, hasta que i una vez que stosujemy subjuntivo, gdy mowa o przyszłej, jeszcze niezrealizowanej czynności. W zdaniach dotyczących zwyczajów i poznanych zdarzeń zwykle występuje indicativo.', examples: [['Te avisaré en cuanto se resuelva la discrepancia.', 'Dam ci znać, jak tylko rozbieżność zostanie rozwiązana.'], ['Siempre actúan en cuanto detectan un indicio.', 'Zawsze działają, gdy tylko wykryją oznakę.']] },
      { heading: 'Spójniki warunkowe', body: 'Siempre que, con tal de que, a condición de que i a menos que w znaczeniu warunkowym wymagają subjuntivo. Zwrot siempre que może również znaczyć „ilekroć”; wtedy dobór trybu zależy od odniesienia czasowego.', examples: [['Aceptaré la propuesta con tal de que se respeten los plazos.', 'Przyjmę propozycję pod warunkiem, że terminy zostaną dotrzymane.']] }
    ],
    exercises: [
      { q: 'Te enviaré el informe en cuanto ___ la revisión.', options: ['termine', 'termino', 'terminaré'], correct: 0, why: 'Czynność po en cuanto jest przyszła, więc stosujemy subjuntivo.' },
      { q: 'A menos que ___ nuevas pruebas, no se reabrirá el caso.', options: ['aparecerán', 'aparecen', 'aparezcan'], correct: 2, why: 'A menos que wprowadza warunek i wymaga subjuntivo.' },
      { q: 'Cada vez que ___ una contradicción, la anota en su cuaderno.', options: ['detecte', 'detecta', 'detectará'], correct: 1, why: 'Chodzi o regularny zwyczaj, zatem naturalny jest presente de indicativo.' },
      { q: 'Aceptaremos el acuerdo a condición de que ___ vinculante.', options: ['será', 'es', 'sea'], correct: 2, why: 'A condición de que wymaga subjuntivo.' },
      { q: 'Lo haré aunque aún no ___ si dará resultado. (Okoliczność hipotetyczna)', options: ['sepa', 'sabré', 'sabía'], correct: 0, why: 'Subjuntivo przedstawia niepewność jako potencjalną okoliczność, która nie zmienia zamiaru.' }
    ]
  },
  {
    title: 'Okresy warunkowe i hipotezy',
    desc: 'Warunki realne, nierealne, przeszłe i mieszane.',
    theory: [
      { heading: 'Warunek realny i potencjalny', body: 'W zdaniu warunkowym typu si + presente de indicativo zdarzenie jest przedstawione jako możliwe. Hipotetyczny warunek dotyczący teraźniejszości lub przyszłości ma zwykle si + imperfecto de subjuntivo i condicional simple w zdaniu głównym. W typowych zdaniach warunkowych nie używa się futuro ani condicional bezpośrednio po si.', examples: [['Si surge algún problema, lo resolveremos.', 'Jeśli pojawi się problem, rozwiążemy go.'], ['Si dispusiéramos de más recursos, agilizaríamos el procedimiento.', 'Gdybyśmy dysponowali większymi zasobami, usprawnilibyśmy procedurę.']] },
      { heading: 'Warunek nierzeczywisty w przeszłości', body: 'Si + pluscuamperfecto de subjuntivo wyraża warunek, który się nie spełnił. Skutek w przeszłości można wyrazić condicional compuesto, a w wielu kontekstach również pluscuamperfecto de subjuntivo.', examples: [['Si hubieran previsto el riesgo, habrían mitigado sus consecuencias.', 'Gdyby przewidzieli ryzyko, złagodziliby jego skutki.']] },
      { heading: 'Warunki mieszane i elipsa', body: 'Przeszły warunek może mieć skutek w teraźniejszości. W tekstach formalnych spotyka się skrócone konstrukcje de + infinitivo lub de haber + participio, które pozwalają zwięźle wyrazić hipotezę.', examples: [['Si hubiera aceptado la propuesta, ahora viviría en Madrid.', 'Gdybym przyjął propozycję, mieszkałbym teraz w Madrycie.'], ['De haberlo sabido, habría actuado de otra manera.', 'Gdybym był o tym wiedział, postąpiłbym inaczej.']] }
    ],
    exercises: [
      { q: 'Si la situación empeora, ___ medidas adicionales.', options: ['adoptaremos', 'adoptáramos', 'adoptaríamos'], correct: 0, why: 'Realny warunek w teraźniejszości może mieć skutek w futuro simple.' },
      { q: 'Si se ___ un consenso, el sistema funcionaría mejor.', options: ['alcanzará', 'alcanzara', 'alcanzaría'], correct: 1, why: 'Hipotetyczny warunek wymaga imperfecto de subjuntivo.' },
      { q: 'Si hubieran recopilado más datos, ___ un análisis más fiable entonces.', options: ['elaborarían', 'elaborarán', 'habrían elaborado'], correct: 2, why: 'Warunek i jego skutek należą do przeszłości, więc condicional compuesto pasuje do zdania głównego.' },
      { q: 'Si no hubiera abandonado sus estudios, ahora ___ la titulación.', options: ['tendría', 'tuviera', 'tuvo'], correct: 0, why: 'W warunku mieszanym wcześniejsze zdarzenie ma skutek w teraźniejszości.' },
      { q: '___ conocido las secuelas, habría tomado otra decisión.', options: ['Al haber', 'De haber', 'Para haber'], correct: 1, why: 'De haber + participio to skrócona konstrukcja warunkowa.' }
    ]
  },
  {
    title: 'Zdania względne i precyzyjne odniesienia',
    desc: 'Nieokreślony referent, cuyo, quien, lo que, el cual.',
    theory: [
      { heading: 'Znany a poszukiwany obiekt', body: 'W zdaniach względnych indicativo zwykle opisuje konkretny, zidentyfikowany obiekt. Subjuntivo jest typowy, gdy osoba lub rzecz jest poszukiwana, hipotetyczna, nieistniejąca lub nieokreślona.', examples: [['Conozco a alguien que domina el tema.', 'Znam kogoś, kto opanował temat.'], ['Busco a alguien que domine el tema.', 'Szukam kogoś, kto zna się na tym temacie.']] },
      { heading: 'Cuyo i el cual', body: 'Cuyo oznacza relację przynależności i uzgadnia rodzaj oraz liczbę z następującym po nim rzeczownikiem, czyli z posiadanym przedmiotem. El cual, la cual, los cuales i las cuales pozwalają jednoznacznie wskazać rzeczownik, zwłaszcza po przyimkach.', examples: [['Es una propuesta cuyos objetivos resultan viables.', 'To propozycja, której cele okazują się wykonalne.'], ['El informe, en el cual se basó la decisión, era incompleto.', 'Raport, na którym oparto decyzję, był niekompletny.']] },
      { heading: 'Lo que i lo cual', body: 'Lo que może odnosić się do treści, której nie nazywa konkretny rzeczownik. Lo cual często odnosi się do całego wcześniejszego zdania. Przecinki rozróżniają zdania względne wyjaśniające od ograniczających zakres odniesienia.', examples: [['No aclaró lo que pretendía demostrar.', 'Nie wyjaśnił, co zamierzał udowodnić.'], ['El acuerdo fracasó, lo cual agravó la situación.', 'Porozumienie upadło, co pogorszyło sytuację.']] }
    ],
    exercises: [
      { q: 'No existe ninguna medida que ___ todos los riesgos.', options: ['elimina', 'elimine', 'eliminó'], correct: 1, why: 'Po zanegowanym, nieistniejącym referencie używamy subjuntivo.' },
      { q: 'El investigador ___ conclusiones citamos ayer nos visitará mañana.', options: ['cuyo', 'cuyas', 'cuyos'], correct: 1, why: 'Cuyas uzgadnia się z rzeczownikiem conclusiones (rodzaj żeński, liczba mnoga).' },
      { q: 'Se aplazó la votación, ___ suscitó numerosas críticas.', options: ['cuyo', 'quien', 'lo cual'], correct: 2, why: 'Lo cual nawiązuje do całego wcześniejszego zdania.' },
      { q: 'Es la experta con ___ hemos negociado. (Wybierz zaimek w formalnym rejestrze.)', options: ['la cual', 'cuyo', 'lo cual'], correct: 0, why: 'La cual odnosi się do rzeczownika experta po przyimku con.' },
      { q: 'Buscamos una solución que ___ viable a largo plazo, sin saber aún cuál será.', options: ['es', 'fue', 'sea'], correct: 2, why: 'Poszukiwana i jeszcze nieokreślona rzecz jest opisana w subjuntivo.' }
    ]
  },
  {
    title: 'Następstwo czasów i mowa zależna',
    desc: 'Relacje czasowe, przesunięcia perspektywy, pytania i polecenia.',
    theory: [
      { heading: 'Zdarzenia równoczesne i wcześniejsze', body: 'W mowie zależnej po czasowniku w przeszłości imperfecto może wyrażać równoczesność, pluscuamperfecto wcześniejszość, a condicional przyszłość widzianą z perspektywy przeszłości. Przesunięcie czasu nie jest obowiązkowe w każdym kontekście, np. gdy twierdzenie nadal obowiązuje.', examples: [['Afirmó que conocía los antecedentes.', 'Stwierdził, że znał wcześniejsze okoliczności.'], ['Afirmó que ya había recopilado los datos.', 'Stwierdził, że już wcześniej zebrał dane.']] },
      { heading: 'Przyszłość z perspektywy przeszłości', body: 'Condicional simple może pełnić funkcję przyszłości w przeszłości. Zachowanie futuro bywa możliwe, gdy obietnica jest nadal aktualna z punktu widzenia mówiącego.', examples: [['Prometió que divulgaría los resultados el mes siguiente.', 'Obiecał, że rozpowszechni wyniki w następnym miesiącu.']] },
      { heading: 'Pytania i polecenia', body: 'Pytania rozstrzygnięte wprowadzamy przez si, a szczegółowe przez zaimek pytajny z akcentem. Polecenia przekazujemy często przez pedir, ordenar lub decir + que + subjuntivo.', examples: [['Preguntó cuándo se publicaría el informe.', 'Zapytał, kiedy raport zostanie opublikowany.'], ['Nos pidió que no divulgáramos los datos.', 'Poprosił nas, abyśmy nie rozpowszechniali danych.']] }
    ],
    exercises: [
      { q: 'En 2020 aseguró que ya ___ el documento en 2019.', options: ['había redactado', 'redactará', 'redacta'], correct: 0, why: 'Zdarzenie z 2019 było wcześniejsze od wypowiedzi z 2020, więc pluscuamperfecto.' },
      { q: 'En mayo prometió que ___ los resultados en junio de aquel año.', options: ['divulga', 'divulgaría', 'divulgue'], correct: 1, why: 'Condicional simple wyraża tutaj przyszłość z perspektywy przeszłości.' },
      { q: 'La periodista preguntó ___ se había ratificado el acuerdo.', options: ['qué', 'que', 'si'], correct: 2, why: 'Si wprowadza pytanie zależne o odpowiedź tak lub nie.' },
      { q: 'Nos exigió que ___ el plazo establecido.', options: ['cumpliéramos', 'cumplimos', 'cumpliremos'], correct: 0, why: 'Exigir que + subjuntivo, po przeszłym exigió naturalny jest imperfecto.' },
      { q: 'Quería saber ___ medidas pensaban adoptar.', options: ['que', 'qué', 'cuyas'], correct: 1, why: 'Qué zachowuje akcent w pytaniu zależnym.' }
    ]
  },
  {
    title: 'Peryfrazy czasownikowe i aspekt',
    desc: 'Proces, nagłość, powtarzalność, rezultat oraz stopień pewności.',
    theory: [
      { heading: 'Początek, trwanie i zakończenie', body: 'Poner(se) a + infinitivo oznacza rozpoczęcie działania. Seguir + gerundio wskazuje kontynuację, dejar de + infinitivo przerwanie, acabar de + infinitivo często niedawną czynność; estar a punto de oznacza bliskość początku.', examples: [['La situación sigue deteriorándose.', 'Sytuacja wciąż się pogarsza.'], ['Acabamos de recopilar los datos.', 'Właśnie zebraliśmy dane.']] },
      { heading: 'Proces rozciągnięty w czasie', body: 'Venir + gerundio podkreśla trwanie procesu od pewnego czasu, ir + gerundio stopniowy rozwój, llevar + okres + gerundio czas trwania, a volver a + infinitivo powtórzenie.', examples: [['La brecha viene agudizándose desde hace años.', 'Rozbieżność pogłębia się już od lat.'], ['Los investigadores llevan meses indagando en el asunto.', 'Badacze od miesięcy dociekają tej sprawy.']] },
      { heading: 'Modalność i rezultat', body: 'Haber de oraz tener que + infinitivo wyrażają zobowiązanie lub konieczność. Deber de + infinitivo zwykle wyraża przypuszczenie, choć współcześnie deber bez de również może mieć to znaczenie. Quedar + participio może wyrażać stan będący rezultatem działania.', examples: [['Debe de haber algún indicio que se nos escapa.', 'Prawdopodobnie istnieje jakaś wskazówka, którą przeoczyliśmy.'], ['Las dudas quedaron disipadas tras la explicación.', 'Po wyjaśnieniu wątpliwości zostały rozwiane.']] }
    ],
    exercises: [
      { q: 'El conflicto ___ agudizándose desde hace varios años.', options: ['viene', 'acaba de', 'se pone a'], correct: 0, why: 'Venir + gerundio podkreśla proces rozwijający się od przeszłości.' },
      { q: 'Llevamos tres meses ___ las consecuencias del cambio.', options: ['analizar', 'analizando', 'analizados'], correct: 1, why: 'Llevar + okres + gerundio wyraża długość trwającej czynności.' },
      { q: 'La portavoz acaba de ___ la noticia.', options: ['difundiendo', 'difundida', 'difundir'], correct: 2, why: 'Acabar de łączy się z infinitivo.' },
      { q: 'Tras varias semanas de calma, el precio volvió ___ subir.', options: ['de', 'a', 'por'], correct: 1, why: 'Volver a + infinitivo oznacza ponowienie czynności.' },
      { q: 'Poco a poco, la situación fue ___ mayor complejidad.', options: ['adquiriendo', 'adquirir', 'adquirida'], correct: 0, why: 'Ir + gerundio przedstawia stopniowy rozwój procesu.' }
    ]
  },
  {
    title: 'Ser, estar, strona bierna i konstrukcje z se',
    desc: 'Stany, zdarzenia, bezosobowość i zgodność podmiotu z orzeczeniem.',
    theory: [
      { heading: 'Stan a charakterystyka', body: 'Ser najczęściej służy do identyfikacji, klasyfikacji i charakterystyki. Estar wyraża stan, sytuację i rezultat, także w wielu znaczeniach, które mogą być trwałe. Niektóre przymiotniki zmieniają znaczenie w zależności od czasownika.', examples: [['La medida es perjudicial.', 'Środek jest szkodliwy.'], ['El sistema está deteriorado.', 'System jest w pogorszonym stanie.'], ['Es listo. / Está listo.', 'Jest bystry. / Jest gotowy.']] },
      { heading: 'Strona bierna i stan wynikowy', body: 'Ser + participio opisuje działanie w stronie biernej, estar + participio stan wynikający z działania. Imiesłów uzgadnia się z podmiotem.', examples: [['Las medidas fueron ratificadas ayer.', 'Środki zostały wczoraj zatwierdzone.'], ['Las medidas ya están ratificadas.', 'Środki są już zatwierdzone.']] },
      { heading: 'Pasiva refleja a se bezosobowe', body: 'W pasiva refleja rzeczownik pełni funkcję podmiotu i uzgadnia liczbę z czasownikiem. W konstrukcji bezosobowej z se czasownik pozostaje w trzeciej osobie liczby pojedynczej. Dopełnienie osobowe z przyimkiem a sygnalizuje często konstrukcję bezosobową.', examples: [['Se recopilaron los datos.', 'Zebrano dane.'], ['Se entrevistó a los expertos.', 'Przeprowadzono wywiad z ekspertami.']] }
    ],
    exercises: [
      { q: 'Se ___ nuevas medidas para paliar la escasez.', options: ['adoptó', 'adoptaron', 'adoptar'], correct: 1, why: 'Nuevas medidas to podmiot liczby mnogiej w pasiva refleja.' },
      { q: 'Se ___ a los candidatos por separado.', options: ['entrevistó', 'entrevistaron', 'entrevistadas'], correct: 0, why: 'Se bezosobowe ma czasownik w liczbie pojedynczej; los candidatos to dopełnienie osobowe.' },
      { q: 'El acuerdo ___ ratificado ayer por el comité. (Działanie)', options: ['estuvo', 'fuera', 'fue'], correct: 2, why: 'Ser + participio wprowadza stronę bierną opisującą zdarzenie.' },
      { q: 'Cuando llegamos, los documentos ya ___ preparados. (Stan wynikowy)', options: ['estaban', 'eran', 'fueran'], correct: 0, why: 'Estar + participio opisuje stan gotowych dokumentów.' },
      { q: 'El nuevo procedimiento ___ más eficaz que el anterior. (Cecha)', options: ['está', 'es', 'estaría'], correct: 1, why: 'Ser służy tu do charakterystyki i porównania procedur.' }
    ]
  },
  {
    title: 'Zaimki, przyimki i rekcja',
    desc: 'Lo, le, se, rekcja czasowników oraz queísmo i dequeísmo.',
    theory: [
      { heading: 'Dopełnienie bezpośrednie i pośrednie', body: 'Lo, la, los i las standardowo zastępują dopełnienie bezpośrednie, le i les pośrednie. Przed lo/la/los/las forma le/les przyjmuje postać se. W pewnych odmianach hiszpańskiego występuje akceptowany leísmo odnoszący się do pojedynczej osoby płci męskiej.', examples: [['Le entregué el informe. → Se lo entregué.', 'Wręczyłem mu raport. → Wręczyłem mu go.']] },
      { heading: 'Czasowniki z przyimkami', body: 'Wiele czasowników wymaga stałego przyimka. Na przykład centrarse en, aludir a, depender de, insistir en i carecer de. W formalnych wypowiedziach poprawna rekcja ma duże znaczenie.', examples: [['Se centró en los indicios y aludió a un precedente.', 'Skupił się na poszlakach i nawiązał do precedensu.']] },
      { heading: 'Que i de que', body: 'Użycie de zależy od rekcji. Porównaj estar convencido de algo → estar convencido de que oraz afirmar algo → afirmar que. Pomocne jest podstawienie za zdanie podrzędne zaimka eso.', examples: [['Estoy convencido de que la propuesta es viable.', 'Jestem przekonany, że propozycja jest wykonalna.'], ['Afirmo que los datos son fiables.', 'Twierdzę, że dane są wiarygodne.']] }
    ],
    exercises: [
      { q: 'Entregué las conclusiones a los expertos. → ___ entregué.', options: ['Les las', 'Se las', 'Se les'], correct: 1, why: 'Les zmienia się w se przed zaimkiem las.' },
      { q: 'La autora alude ___ los acontecimientos de aquella época.', options: ['a', 'de', 'en'], correct: 0, why: 'Rekcja czasownika aludir to aludir a.' },
      { q: 'Estamos convencidos ___ la medida será eficaz.', options: ['que', 'a que', 'de que'], correct: 2, why: 'Estar convencido wymaga przyimka de.' },
      { q: 'El experto aseveró ___ la hipótesis era falaz.', options: ['que', 'de que', 'en que'], correct: 0, why: 'Aseverar jest czasownikiem przechodnim; nie wymaga tutaj de.' },
      { q: 'El proyecto carece ___ fundamentos sólidos.', options: ['en', 'de', 'a'], correct: 1, why: 'Carecer de oznacza nie posiadać czegoś, brakować czegoś.' }
    ]
  },
  {
    title: 'Spójność tekstu i łączniki dyskursu',
    desc: 'Kontrast, uzasadnianie, wnioskowanie, doprecyzowanie i rejestr.',
    theory: [
      { heading: 'Przyczyna i wniosek', body: 'Dado que, puesto que i habida cuenta de que wprowadzają uzasadnienie. Por ende, por consiguiente i de ahí que wprowadzają konsekwencję; de ahí que wymaga subjuntivo.', examples: [['Los recursos son escasos, por ende, conviene optimizarlos.', 'Zasoby są ograniczone, a zatem warto je zoptymalizować.'], ['Los datos son incompletos; de ahí que no podamos concluir nada.', 'Dane są niekompletne, stąd nie możemy wyciągnąć wniosków.']] },
      { heading: 'Kontrast i ustępstwo', body: 'Sin embargo, no obstante i ahora bien pozwalają wprowadzić kontrast lub zastrzeżenie. En cambio podkreśla zestawienie przeciwstawnych elementów, a si bien wprowadza zdanie przyzwalające.', examples: [['La medida es viable. Ahora bien, plantea ciertos riesgos.', 'Środek jest wykonalny. Należy jednak pamiętać, że wiąże się z pewnym ryzykiem.']] },
      { heading: 'Reformulacja i porządkowanie', body: 'Es decir, esto es i dicho de otro modo doprecyzowują treść. En suma i en definitiva służą podsumowaniu, mientras que zestawia elementy. Trafny łącznik powinien odzwierciedlać rzeczywistą relację logiczną między zdaniami.', examples: [['La propuesta resulta inviable, es decir, no se puede llevar a cabo.', 'Propozycja jest niewykonalna, czyli nie można jej zrealizować.']] }
    ],
    exercises: [
      { q: 'Los costes son ingentes, ___ conviene replantear la estrategia. (Wniosek)', options: ['por ende', 'no obstante', 'en cambio'], correct: 0, why: 'Por ende wprowadza wniosek wynikający z poprzedniej informacji.' },
      { q: 'La evidencia es escasa, de ahí que no ___ establecer conclusiones firmes.', options: ['podemos', 'podremos', 'podamos'], correct: 2, why: 'De ahí que łączy się z subjuntivo.' },
      { q: 'La medida parece viable. ___, plantea una dificultad considerable. (Zastrzeżenie)', options: ['Asimismo', 'Ahora bien', 'Por consiguiente'], correct: 1, why: 'Ahora bien wprowadza zastrzeżenie lub ograniczenie poprzedniego stwierdzenia.' },
      { q: 'El resultado fue ínfimo, ___, prácticamente insignificante. (Doprecyzowanie)', options: ['es decir', 'aun así', 'en cambio'], correct: 0, why: 'Es decir reformułuje i objaśnia poprzednie określenie.' },
      { q: 'La primera propuesta es costosa, ___ la segunda apenas exige recursos. (Kontrast)', options: ['puesto que', 'por ende', 'mientras que'], correct: 2, why: 'Mientras que zestawia przeciwstawne cechy dwóch propozycji.' }
    ]
  },
  {
    title: 'Konstrukcje formalne i reformulacja',
    desc: 'Nominalizacje, akcentowanie informacji, bezokoliczniki i gerundio.',
    theory: [
      { heading: 'Nominalizacja', body: 'W tekstach formalnych nominalizacja pomaga skondensować treść, np. implementar → la implementación, deteriorarse → el deterioro. Używaj jej tam, gdzie zachowuje jasność i precyzję.', examples: [['Se deterioró la situación. → El deterioro de la situación fue evidente.', 'Sytuacja się pogorszyła. → Pogorszenie sytuacji było oczywiste.']] },
      { heading: 'Konstrukcje emfatyczne', body: 'Struktury lo que … es/son oraz fue … quien pozwalają wyróżnić fragment informacji. Lo + przymiotnik w rodzaju męskim pozwala ująć abstrakcyjną właściwość.', examples: [['Lo que preocupa es la falta de transparencia.', 'Tym, co niepokoi, jest brak przejrzystości.'], ['Fue la falta de recursos la que provocó el retraso.', 'To brak zasobów spowodował opóźnienie.']] },
      { heading: 'Skracanie i relacje czasowe', body: 'Al + infinitivo może wyrażać zbieżność czasową, a czasem przyczynę. Wcześniej zrealizowaną czynność wyrażamy przez tras haber + participio. Gerundio zwykle opisuje czynność równoczesną lub wcześniejszą, sposób albo okoliczność działania. W formalnym stylu unikaj gerundio oznaczającego wyłącznie odległe zdarzenie następcze.', examples: [['Tras haber cotejado los datos, el equipo rectificó el informe.', 'Po porównaniu danych zespół poprawił raport.'], ['Analizó el caso teniendo en cuenta todos los indicios.', 'Przeanalizował sprawę, uwzględniając wszystkie poszlaki.']] }
    ],
    exercises: [
      { q: 'El sistema se consolidó. → La ___ del sistema fue decisiva.', options: ['consolidar', 'consolidación', 'consolidado'], correct: 1, why: 'Consolidación jest rzeczownikiem utworzonym od consolidar.' },
      { q: '___ verdaderamente importante es que los datos sean fiables.', options: ['Lo', 'El', 'Los'], correct: 0, why: 'Lo + przymiotnik pozwala wyrazić właściwość w sensie abstrakcyjnym.' },
      { q: 'Fue la autora ___ aportó los indicios esenciales.', options: ['lo que', 'cuyo', 'quien'], correct: 2, why: 'Quien odnosi się do wyróżnionej osoby w konstrukcji emfatycznej.' },
      { q: '___ haber recopilado los documentos, redactó la reseña.', options: ['Tras', 'Mientras', 'A menos que'], correct: 0, why: 'Tras haber + participio podkreśla wcześniejsze zakończenie czynności.' },
      { q: 'Wybierz najprecyzyjniejsze zdanie opisujące dwa zdarzenia oddalone o rok.', options: ['Presentó el informe, recibiendo el premio un año después.', 'Presentó el informe y un año después recibió el premio.', 'Presentó el informe para haber recibido el premio.'], correct: 1, why: 'Spójrz na relację czasową: odrębna czynność następcza jest jasno wyrażona przez y un año después.' }
    ]
  }
];

