import type { Module } from '@/types/content'

export const communicationPitfalls: Module = {
  id: 'communication-pitfalls',
  title: 'Die größten Fehler im Gespräch',
  description:
    'Was Qualifizierungsgespräche wirklich scheitern lässt: die häufigsten inhaltlichen und sprachlichen Fehler in der Selbstpräsentation – und welche Fragen du (so) besser nicht stellst.',
  category: 'consulting',
  lessons: [
    {
      id: 'mistakes-content',
      title: 'Inhaltliche Fehler: Was deine Wirkung zerstört',
      theory: [
        {
          kind: 'text',
          body: 'Die meisten Qualifizierungsgespräche scheitern nicht an fehlender Kompetenz, sondern an vermeidbaren Fehlern in der Darstellung. Das ist bitter – und zugleich eine gute Nachricht: Diese Fehler sind bekannt, wiederholen sich bei fast allen Kandidaten und lassen sich gezielt abstellen.\n\nDie Grundursache ist fast immer dieselbe: Der Kandidat redet über sich, statt für den Zuhörer zu sprechen. Er erzählt, was er alles gemacht hat – statt zu zeigen, was davon für genau dieses Projekt relevant ist. Prüfe deshalb jede Antwort gegen eine einfache Frage: „Was hat mein Gegenüber davon, das zu wissen?"',
        },
        {
          kind: 'table',
          headers: ['Fehler', 'Warum er schadet', 'Gegenmittel'],
          rows: [
            [
              'Monolog: Antworten von 5+ Minuten',
              'Der Zuhörer steigt nach 90 Sekunden aus; du wirkst strukturlos – fatal für eine Workshop-Rolle',
              'Kernaussage in 2–3 Sätzen, dann anbieten: „Soll ich da tiefer einsteigen?"',
            ],
            [
              'Technik-Aufzählung statt Geschichte',
              '„Microflows, REST, XPath …" belegt nichts – jeder kann Begriffe aufzählen',
              'STAR: Situation, Aufgabe, DEIN Beitrag, messbares Ergebnis',
            ],
            [
              'Dauer-„wir" ohne eigenen Beitrag',
              'Der Prüfer weiß am Ende nicht, was DU kannst – nur, was dein Ex-Team konnte',
              '„Ich habe …" für deinen Anteil, „wir" nur für echte Teamleistung',
            ],
            [
              'Übertreiben und Bluffen',
              'Eine aufgeflogene Übertreibung entwertet ALLE anderen Aussagen',
              'Ehrlich einordnen + verwandte Stärke + Lernfähigkeit belegen',
            ],
            [
              'Schlecht über frühere Kunden reden',
              'Der Kunde denkt sofort: „So redet er später über uns"',
              'Neutral bleiben: Fakten statt Schuldige, Learnings statt Lästern',
            ],
            [
              'Keine Fragen, kein Bezug zum Projekt',
              'Wirkt wie Massenabfertigung: Du würdest JEDES Projekt nehmen',
              'Vorbereitete Bezüge („Ich habe gesehen, dass Sie …") und echte Rückfragen',
            ],
          ],
        },
        {
          kind: 'text',
          heading: 'Der unterschätzte Fehler: Widersprüche zum eigenen Profil',
          body: 'Dein CV bzw. Projektprofil ist die Gesprächsgrundlage – und wird oft wörtlich geprüft. Wer bei „sehr gute Kenntnisse in X" ins Schwimmen gerät oder Projektzeiträume anders erzählt als sie im Profil stehen, erzeugt ein Alarmsignal, das kaum noch zu löschen ist: Wenn das Profil geschönt ist, was dann noch?\n\nDeshalb: Vor jedem Gespräch das eigene Profil durchgehen, als wärst du der Prüfer. Zu jeder Zeile eine Frage erwarten. Alles, was du nicht souverän erklären kannst, gehört entschärft – vorher im Profil oder vorbereitet in der Antwort. Lücken und Wechsel sind fast nie das Problem; unerklärte Lücken sind es.',
        },
        {
          kind: 'text',
          heading: 'Bescheidenheit ist gut – Unsichtbarkeit nicht',
          body: 'Das Gegenstück zum Übertreiben ist genauso schädlich: das Kleinreden. Formulierungen wie „da habe ich nur zugearbeitet", „das war eigentlich nichts Besonderes" oder „das kann heute ja jeder" nehmen deinen Leistungen die Beweiskraft – und der Prüfer kann nicht einordnen, was du wirklich geleistet hast.\n\nDie professionelle Mitte: Fakten sprechen lassen. Nicht „Ich bin ein herausragender Mendix-Entwickler", sondern „Die App ist seit zwei Jahren produktiv, 800 Nutzer, seitdem zwei kleinere Bugfixes – darauf bin ich ehrlich gesagt stolz." Belegte Ergebnisse wirken selbstbewusst, ohne arrogant zu sein.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Jede Antwort gegen die Frage prüfen: „Was hat mein Gegenüber davon, das zu wissen?"',
            'Kernaussage zuerst, maximal 2–3 Sätze – Vertiefung nur bei Interesse. Monologe killen Workshop-Rollen.',
            'Nie bluffen, nie über frühere Kunden lästern, nie dem eigenen Profil widersprechen.',
            '„Ich" für deinen Beitrag, „wir" für Teamleistung – und Ergebnisse statt Eigenlob.',
            'Kleinreden ist so schädlich wie Übertreiben: Fakten und Ergebnisse sprechen lassen.',
          ],
        },
        {
          kind: 'example',
          title: 'Frage nach einem gescheiterten Projekt',
          good: '„Ja, ein Projekt ist tatsächlich schiefgelaufen: Ein Rollout wurde nach sechs Monaten gestoppt – die Anforderungen des Fachbereichs und das, was bestellt war, lagen zu weit auseinander. Mein Learning daraus: Ich bestehe seitdem auf einem gemeinsamen Anforderungs-Workshop vor Entwicklungsstart und einem klickbaren Prototyp in den ersten zwei Wochen. Seitdem ist mir das nicht wieder passiert."',
          bad: '„Also wenn ich ehrlich bin, lag das damals komplett am Projektleiter des Kunden – der hatte null Ahnung und hat ständig reingeredet. Mit solchen Leuten kann man nicht arbeiten. Die Firma war generell chaotisch, da war jeder froh, der da wegkam."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'mistakes-content-q1',
          question:
            'Warum ist Dauer-„wir" in Projektbeschreibungen ein ernstes Problem im Qualifizierungsgespräch?',
          options: [
            {
              text: 'Der Prüfer kann deinen persönlichen Beitrag nicht erkennen – er kauft aber dich, nicht dein früheres Team.',
              correct: true,
              explanation:
                'Richtig. „Wir haben ein Portal gebaut" kann alles heißen – vom Lead Developer bis zum Zuschauer. Benenne deinen Anteil mit „ich", und nutze „wir" dort, wo es wirklich Teamleistung war.',
            },
            {
              text: 'Weil „wir" grammatikalisch falsch ist, wenn man über abgeschlossene Projekte spricht.',
              correct: false,
              explanation:
                'Mit Grammatik hat das nichts zu tun. Das Problem ist inhaltlich: Dein individueller Beitrag – und genau der wird eingekauft – bleibt unsichtbar.',
            },
            {
              text: 'Es ist kein Problem – „wir" wirkt teamfähig und bescheiden, das kommt immer gut an.',
              correct: false,
              explanation:
                'Teamfähigkeit ist wichtig, aber ein Quali-Gespräch prüft DEINE Lieferfähigkeit. Wer nur „wir" sagt, zwingt den Prüfer zum Raten – und im Zweifel rät er gegen dich.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'mistakes-content-q2',
          question:
            'Du wirst nach einem Projekt gefragt, das unschön endete – der Kunde war schwierig. Was ist die beste Linie?',
          options: [
            {
              text: 'Sachlich den Fakt nennen, niemanden schlechtmachen und mit einem konkreten Learning abschließen, das du seitdem anwendest.',
              correct: true,
              explanation:
                'Richtig. Die Frage testet nicht das alte Projekt, sondern deine Professionalität und Lernfähigkeit. Wer neutral bleibt und ein Learning zeigt, gewinnt – wer lästert, disqualifiziert sich.',
            },
            {
              text: 'Offen und emotional schildern, was beim damaligen Kunden alles falsch lief – Authentizität kommt an.',
              correct: false,
              explanation:
                'Authentizität ja, Lästern nein: Dein Gegenüber überträgt das sofort auf sich („So redet er später über uns"). Loyalität gegenüber früheren Kunden ist ein Einstellungskriterium.',
            },
            {
              text: 'Solche Projekte besser verschweigen und behaupten, es sei immer alles glattgelaufen.',
              correct: false,
              explanation:
                'Unglaubwürdig – jeder erfahrene Prüfer weiß, dass es schwierige Projekte gibt. Eine souverän erzählte Scheiter-Geschichte mit Learning ist stärker als eine makellose Fassade.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'mistakes-content-s1',
          situation:
            'Der Interviewer fragt: „In Ihrem Profil steht ‚sehr gute Kenntnisse in Mendix Native Mobile‘. Erzählen Sie mal: Wie haben Sie Offline-Synchronisation gelöst?" Du merkst: Das Profil hat dein Vermittler aufgehübscht – du hast Native Mobile erst in einem kleinen Nebenprojekt genutzt und Offline-Sync nie selbst gebaut.',
          choices: [
            {
              text: '„Da muss ich das Profil ehrlich geraderücken: Native Mobile habe ich bisher in einem kleineren Projekt eingesetzt, Offline-Sync war dort nicht nötig – ich kenne das Konzept mit Nanoflows und lokaler Datenhaltung, habe es aber nicht produktiv gebaut. Mein Schwerpunkt liegt klar auf Web-Apps; wenn Native im Projekt wichtig ist, arbeite ich mich gezielt ein."',
              quality: 'best',
              feedback:
                'Stark: Du korrigierst die Übertreibung aktiv, bevor sie dich einholt, zeigst ehrliches Konzeptwissen und ordnest deinen echten Schwerpunkt ein. Kurzfristig unangenehm, langfristig der einzige Weg, der dein Vertrauen rettet. (Und: Kläre das danach mit deinem Vermittler.)',
            },
            {
              text: 'Du erklärst Offline-Sync so gut es geht aus der Theorie und hoffst, dass keine Detail-Nachfrage kommt.',
              quality: 'bad',
              feedback:
                'Hochriskant: Die Frage ist eine klassische Tiefenprüfung – der Fragende kennt die Antwort. Spätestens bei der zweiten Nachfrage fliegt der Bluff auf, und dann steht nicht Native Mobile in Frage, sondern dein gesamtes Profil.',
            },
            {
              text: '„Das hat mein Vermittler da reingeschrieben, das Profil habe ich so nie freigegeben."',
              quality: 'ok',
              feedback:
                'Immerhin ehrlich – aber du schiebst die Verantwortung ab und lässt die eigentliche Frage unbeantwortet. Dein Profil ist dein Dokument: Steh dazu, korrigiere es inhaltlich und biete an, was du wirklich kannst.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'mistakes-content-f1',
          task: 'Entschärfe diese typische Monolog-Antwort auf die Frage „Was haben Sie zuletzt gemacht?" – kürze sie auf 3–4 Sätze mit klarer Kernaussage und einem Angebot zur Vertiefung:\n\n„Also, zuletzt war ich bei einem Versicherer, da ging es erst um ein Schadenportal, da habe ich am Anfang viel mit dem Fachbereich gesprochen, dann haben wir das Domain Model gemacht, also eigentlich zweimal, weil die Anforderungen sich geändert haben, dann kamen die Microflows, da gab es auch Diskussionen wegen der Performance, und parallel lief noch ein zweites Thema mit einem Dashboard, da war ich auch involviert, und am Ende haben wir dann noch die SAP-Schnittstelle gebaut, die war eigentlich das Spannendste …"',
          placeholder: 'Deine gekürzte Version …',
          sampleSolution:
            '„Zuletzt habe ich bei einem Versicherer ein Schadenportal mit Mendix gebaut – von der Anforderungsaufnahme mit dem Fachbereich bis zum Go-live. Mein Schwerpunkt waren das Domain Model, die Prozesslogik und eine SAP-Schnittstelle, die technisch der spannendste Teil war. Das Portal ist produktiv und hat die Bearbeitungszeit der Schadenmeldungen etwa halbiert. Zur SAP-Anbindung oder zum Anforderungsprozess erzähle ich gern mehr – was interessiert Sie mehr?"',
          checklist: [
            'Meine Version hat maximal 4 Sätze.',
            'Die Kernaussage (was, für wen, mit welchem Ergebnis) kommt zuerst.',
            'Mein eigener Beitrag ist als „ich" erkennbar.',
            'Ich habe ein konkretes Ergebnis oder einen Nutzen genannt.',
            'Am Ende steht ein Vertiefungsangebot statt weiterer Details.',
          ],
        },
      ],
    },
    {
      id: 'mistakes-language',
      title: 'Sprachliche Fehler: Weichmacher, Buzzwords & Co.',
      theory: [
        {
          kind: 'text',
          body: 'Oft entscheidet nicht, WAS jemand sagt, sondern WIE. Zwei Kandidaten mit identischer Erfahrung können völlig unterschiedlich wirken – nur durch Sprache, Stimme und Haltung. Die gute Nachricht: Sprachliche Fehler sind die am schnellsten korrigierbaren, weil sie Gewohnheiten sind, keine Wissenslücken.\n\nDer größte Hebel sind Weichmacher: „eigentlich", „relativ", „ein bisschen", „vielleicht", „ich würde sagen", „ich denke mal". Einzeln harmlos, summieren sie sich zu einem Gesamteindruck von Unsicherheit. Aus „Ich würde sagen, dass ich eigentlich ganz gut mit Mendix umgehen kann" wird nach der Entschlackung: „Ich arbeite seit drei Jahren täglich mit Mendix." Gleicher Inhalt, doppelte Wirkung.',
        },
        {
          kind: 'table',
          headers: ['Schwach (Weichmacher)', 'Stark (klar & belegt)'],
          rows: [
            [
              '„Ich würde sagen, ich kenne mich da eigentlich ganz gut aus."',
              '„Damit arbeite ich seit drei Jahren täglich."',
            ],
            [
              '„Ich hatte da auch so ein bisschen die Projektleitung mit übernommen."',
              '„Ich habe das Teilprojekt mit vier Entwicklern geleitet."',
            ],
            [
              '„Das müsste eigentlich auch mit OData gehen, denke ich."',
              '„Das lässt sich mit OData lösen – geprüft habe ich es im Projekt X."',
            ],
            [
              '„Vielleicht könnte man da eventuell einen Workshop machen."',
              '„Ich würde mit einem halbtägigen Anforderungs-Workshop starten."',
            ],
            [
              '„Da bin ich jetzt nicht so der totale Experte, aber …"',
              '„Dazu kenne ich die Grundlagen; produktiv gebaut habe ich es noch nicht."',
            ],
          ],
        },
        {
          kind: 'text',
          heading: 'Buzzword-Bingo und Jargon beim falschen Publikum',
          body: 'Das Gegenteil der Weichmacher ist genauso schädlich: aufgeblasene Sprache ohne Substanz. Wer „synergetische End-to-End-Lösungen mit KI-getriebenem Mindset" anbietet, löst bei erfahrenen Prüfern Alarm aus – Buzzwords sind für sie ein Indikator für fehlende Tiefe. Die Regel: Jeder Fachbegriff, den du verwendest, muss einer Nachfrage standhalten („Was heißt das konkret bei Ihnen?").\n\nDie zweite Variante: richtiges Fachvokabular beim falschen Publikum. Wenn die Fachbereichsleiterin fragt, was du tun würdest, und du mit Entity Access, XPath-Constraints und OQL antwortest, verlierst du sie – und beweist gleichzeitig, dass du für Workshops mit Fachanwendern ungeeignet bist. Passe die Flughöhe ans Publikum an: Nutzen für den Fachbereich, Tiefe für die Techniker. Im Zweifel kurz fragen: „Wie technisch darf ich werden?"',
        },
        {
          kind: 'text',
          heading: 'Tempo, Pausen und der Umgang mit Nervosität',
          body: 'Unter Anspannung sprechen fast alle Menschen schneller und höher – und füllen jede Denkpause mit „ähm" oder Endlossätzen. Dabei ist die Pause dein stärkstes Werkzeug: Wer nach einer Frage zwei Sekunden schweigt und dann strukturiert antwortet, wirkt souveräner als jemand, der sofort losredet. Erlaubt und professionell ist auch: „Gute Frage – lassen Sie mich kurz sortieren."\n\nIm Remote-Gespräch kommen eigene Fehlerquellen dazu: in die Bildschirmmitte statt in die Kamera schauen, monotone Stimme (der Bildschirm „schluckt" Energie – sprich bewusst eine Stufe lebendiger), und Unterbrechungen durch Latenz. Gegenmittel: Kamera auf Augenhöhe, nach Antworten bewusst einen Moment warten, und die wichtigsten Aussagen langsamer und tiefer sprechen als den Rest.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Weichmacher streichen: „eigentlich", „relativ", „ich würde sagen" – Fakten und Belege statt Konjunktiv.',
            'Ehrliche Einordnung ist KEIN Weichmacher: „Grundlagen ja, produktiv noch nicht" ist stark, weil präzise.',
            'Jeder Buzzword-Satz muss die Nachfrage „Was heißt das konkret?" überleben – sonst weg damit.',
            'Flughöhe ans Publikum anpassen: Nutzen für den Fachbereich, Tiefe für Techniker. Im Zweifel fragen.',
            'Pausen statt Füllwörter: zwei Sekunden Denkpause wirken souverän, nicht unsicher.',
          ],
        },
        {
          kind: 'example',
          title: 'Antwort auf „Wie würden Sie unser Projekt angehen?" (Fachbereichsleiterin fragt)',
          good: '„In den ersten zwei Wochen würde ich vor allem zuhören: ein Workshop mit Ihren Key-Usern, um die drei wichtigsten Prozesse zu verstehen. Daraus baue ich einen klickbaren Prototyp – an dem diskutiert es sich viel konkreter als an Konzeptpapieren. Danach legen wir gemeinsam fest, was in die erste Ausbaustufe kommt. So sehen Sie nach vier Wochen etwas Greifbares statt eines Lastenhefts."',
          bad: '„Ich würde erstmal sagen, wir sollten da eventuell ein bisschen ins Refinement gehen, also quasi das Domain Model aufsetzen, Entity Access sauber durchdeklinieren, und dann halt agil iterieren, Sprint-wise, mit einem MVP-Mindset sozusagen – das ist eigentlich Best Practice."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'mistakes-language-q1',
          question:
            'Was ist der Unterschied zwischen einem schädlichen Weichmacher und einer professionellen ehrlichen Einordnung?',
          options: [
            {
              text: 'Weichmacher machen sichere Aussagen grundlos vage („eigentlich ganz gut") – eine ehrliche Einordnung ist dagegen präzise über den tatsächlichen Stand („Grundlagen ja, produktiv noch nicht").',
              correct: true,
              explanation:
                'Richtig. Es geht nicht darum, alles maximal selbstbewusst zu behaupten – sondern darum, Sicheres sicher zu sagen und Unsicheres präzise einzuordnen. Vage ist das Problem, nicht ehrlich.',
            },
            {
              text: 'Es gibt keinen – jede Einschränkung der eigenen Aussage wirkt im Gespräch unsicher und sollte vermieden werden.',
              correct: false,
              explanation:
                'Doch: Wer alles in Superlativen behauptet, wirkt unglaubwürdig und fällt bei der ersten Tiefenprüfung. Präzise Selbsteinschätzung ist ein Seniority-Signal – schwammige Formulierungen sind das Problem.',
            },
            {
              text: 'Weichmacher sind nur in schriftlicher Kommunikation ein Problem, im Gespräch fallen sie nicht auf.',
              correct: false,
              explanation:
                'Gerade im Gespräch summieren sie sich hörbar: Zehn „eigentlich" und „ich würde sagen" in fünf Minuten prägen den Gesamteindruck stärker als jeder Inhalt.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'mistakes-language-q2',
          question:
            'Die Fachbereichsleiterin (nicht technisch) fragt nach deinem Vorgehen. Welche sprachliche Flughöhe ist richtig?',
          options: [
            {
              text: 'Nutzen- und ablauforientiert antworten (Workshop, Prototyp, greifbares Ergebnis) – technische Tiefe nur, wenn sie nachfragt oder die Techniker übernehmen.',
              correct: true,
              explanation:
                'Richtig. Die Flughöhe ans Publikum anzupassen ist selbst eine Kernkompetenz der Rolle – wer die Fachbereichsleiterin mit XPath und Entity Access abhängt, fällt durch die Workshop-Eignung.',
            },
            {
              text: 'Maximal technisch antworten – schließlich soll sie sehen, dass du ein echter Experte bist.',
              correct: false,
              explanation:
                'Fachjargon beim falschen Publikum beweist keine Expertise, sondern fehlendes Adressaten-Gespür. Ihre unausgesprochene Frage ist: „Versteht der mich und meine Leute?"',
            },
            {
              text: 'Bewusst einfach bleiben und alle Fachbegriffe vermeiden – auch wenn später die Techniker nachfragen.',
              correct: false,
              explanation:
                'Fast richtig – aber die Flughöhe muss WECHSELN können: Wenn danach der Architekt fragt, braucht er die technische Tiefe. Die Kunst ist der Wechsel je nach Gegenüber, nicht die Einfachheit an sich.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'mistakes-language-s1',
          situation:
            'Remote-Gespräch. Mitten in deiner Antwort merkst du: Du redest seit einer Minute schneller und schneller, hast dich zweimal verhaspelt und gerade den Faden verloren. Die drei Gesichter im Call schauen neutral.',
          choices: [
            {
              text: 'Kurz innehalten, lächeln, einen Schluck Wasser nehmen: „Ich merke gerade, ich fange mittendrin an – lassen Sie mich den Punkt kurz sortieren." Dann die Kernaussage in einem ruhigen Satz neu aufsetzen.',
              quality: 'best',
              feedback:
                'Sehr gut: Du unterbrichst die Eskalationsspirale aktiv, statt weiterzurasen. Ein offen eingestandener Neustart wirkt menschlich und souverän – und die bewusste Pause senkt Tempo und Stimme automatisch.',
            },
            {
              text: 'Einfach weiterreden und hoffen, dass der rote Faden von selbst zurückkommt – bloß keine Schwäche zeigen.',
              quality: 'bad',
              feedback:
                'Die Spirale dreht sich weiter: schneller, fahriger, mehr Füllwörter. Die Zuhörer haben den Faden längst verloren und erinnern am Ende nur den Eindruck „wirkte nervös und unstrukturiert".',
            },
            {
              text: '„Entschuldigung, ich bin heute etwas nervös, das ist ein wichtiges Gespräch für mich …" – und dann weiterreden.',
              quality: 'ok',
              feedback:
                'Ehrlichkeit ist sympathisch, aber du lenkst den Fokus auf deine Nervosität statt auf den Inhalt – und lieferst die Kernaussage immer noch nicht. Besser: kurz neu sortieren und inhaltlich stark zurückkommen, ohne Meta-Kommentar über dein Befinden.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'mistakes-language-f1',
          task: 'Entschlacke diese Aussage: Streiche alle Weichmacher und Buzzwords und formuliere sie stark und belegt neu.\n\n„Also ich würde mal sagen, ich bin eigentlich relativ fit in Mendix, habe da auch schon so einige Projekte gemacht, und mit meinem agilen Mindset und KI-Tools bin ich da eigentlich auch immer ganz gut unterwegs gewesen, denke ich."',
          placeholder: 'Deine starke Version …',
          sampleSolution:
            '„Ich entwickle seit drei Jahren mit Mendix und habe vier Anwendungen produktiv gebracht, zuletzt ein Lieferantenportal mit 800 Nutzern. Dabei nutze ich Claude als KI-Werkzeug für Code-Reviews und Dokumentation – das macht mich messbar schneller, und jedes Ergebnis prüfe ich selbst."\n\n(Gestrichen: „ich würde mal sagen", „eigentlich", „relativ", „so einige", „denke ich", „agiles Mindset". Ersetzt durch: Zahlen, Projekte, konkrete Tools und Effekte.)',
          checklist: [
            'Ich habe alle Weichmacher gestrichen (eigentlich, relativ, ich würde sagen, denke ich …).',
            'Ich habe Buzzwords ohne Substanz („agiles Mindset") durch Konkretes ersetzt.',
            'Meine Version enthält mindestens eine Zahl oder ein überprüfbares Faktum.',
            'Die Aussage bleibt ehrlich – nichts ist übertrieben, nur präzisiert.',
          ],
        },
      ],
    },
    {
      id: 'mistakes-questions',
      title: 'Tabu-Fragen – und wie du Heikles richtig ansprichst',
      theory: [
        {
          kind: 'text',
          body: 'Deine Rückfragen verraten, wie du denkst. Gute Fragen zeigen Projektinteresse und Seniorität – die falschen Fragen können ein starkes Gespräch in den letzten fünf Minuten kippen. Dabei sind die wenigsten Themen wirklich tabu; meistens ist es eine Frage von Zeitpunkt und Formulierung.\n\nDie Faustregel: Im Fachgespräch zählt das Projekt. Alles, was primär deinen Komfort oder dein Absicherungsbedürfnis betrifft, gehört in den Vertragsprozess mit dem Vermittler oder in ein späteres Gespräch – nicht in die ersten Rückfragen vor dem Fachpublikum.',
        },
        {
          kind: 'table',
          headers: ['Nicht (so) fragen', 'Warum', 'Stattdessen'],
          rows: [
            [
              '„Was macht Ihre Firma eigentlich genau?"',
              'Beweist Null-Vorbereitung – das steht auf der Website',
              'Vorbereitetes Wissen zeigen: „Ich habe gesehen, dass Sie X – welche Rolle spielt das fürs Projekt?"',
            ],
            [
              '„Wie viel Urlaub/Spesen/Homeoffice bekomme ich?" (als erste Frage)',
              'Signal: Komfort vor Projekt – vor Fachpublikum fatal',
              'Konditionen über den Vermittler klären; Arbeitsmodell neutral erfragen: „Wie arbeitet das Team – remote, vor Ort, hybrid?"',
            ],
            [
              '„Kann die Rate später noch nachverhandelt werden?"',
              'Geldfragen gehören nicht ins Fachgespräch – und „später mehr" schreckt ab',
              'Rate vorab mit dem Vermittler festlegen; im Gespräch gar nicht anfassen',
            ],
            [
              '„Wie schnell kann man den Vertrag kündigen?"',
              'Klingt nach geplantem Absprung – Gift bei einem Langfrist-Engagement',
              '„Wie ist die Laufzeit geplant, und gibt es eine Verlängerungsoption?"',
            ],
            [
              '„Warum ist mein Vorgänger gegangen?" (frontal)',
              'Drängt den Kunden in die Defensive, klingt nach Misstrauen',
              '„Ist die Rolle neu geschaffen oder eine Nachbesetzung – und was soll diesmal anders laufen?"',
            ],
            [
              '„Habe ich den Auftrag denn jetzt?" (Druck)',
              'Erzeugt Druck und wirkt bedürftig',
              '„Wie geht es weiter – bis wann wollen Sie entscheiden, und was brauchen Sie noch von mir?"',
            ],
          ],
        },
        {
          kind: 'text',
          heading: 'Das Prinzip dahinter: Projektbrille statt Ich-Brille',
          body: 'Alle guten Umformulierungen folgen demselben Muster: Sie stellen dieselbe Frage aus der Projektperspektive statt aus der Ich-Perspektive. „Wie viel Homeoffice bekomme ich?" fragt nach deinem Vorteil. „Wie arbeitet das Team – remote, vor Ort, hybrid?" fragt nach der Zusammenarbeit – und liefert dir trotzdem die Antwort, die du brauchst.\n\nDas gilt auch für heikle Themen, die du ansprechen SOLLTEST: Wenn du z.B. nur vier Tage pro Woche verfügbar bist, gehört das auf den Tisch – aber als Rahmenbedingung mit Lösungsangebot („Ich bin vier Tage verfügbar und würde den Freitag als festen Fokus-Tag für Doku und Reviews vorschlagen"), nicht als Beichte am Ende oder Verschweigen bis zum Vertragsentwurf. Ehrlichkeit zu Rahmenbedingungen ist professionell; sie zu verstecken rächt sich immer.',
        },
        {
          kind: 'text',
          heading: 'Auch Antworten kennen Tabus',
          body: 'Neben Tabu-Fragen gibt es Tabu-Antworten – vor allem bei Standardfragen: Auf „Warum haben Sie Kapazität frei?" nie klagen („Der letzte Kunde hat alle Externen rausgeworfen"), sondern neutral-positiv („Das Projekt ist planmäßig ausgelaufen; ich suche gezielt ein längerfristiges Engagement – deshalb bin ich hier"). Auf „Was ist Ihre Schwäche?" nie die kokette Pseudo-Schwäche („Ich bin zu perfektionistisch") und nie Arroganz („Fällt mir keine ein").\n\nUnd bei Fragen nach Wettbewerbern oder anderen Kunden: Verschwiegenheit demonstrieren. „Da bin ich zur Vertraulichkeit verpflichtet – so würde ich später auch mit Ihren Informationen umgehen" ist keine verweigerte Antwort, sondern ein Vertrauensbeweis.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Kaum ein Thema ist tabu – aber Zeitpunkt und Formulierung entscheiden: Projektbrille statt Ich-Brille.',
            'Konditionen (Rate, Spesen, Urlaub) gehören zum Vermittler-/Vertragsprozess, nicht ins Fachgespräch.',
            'Nie fragen, was die Website beantwortet – Vorbereitung zeigen statt Grundlagen erfragen.',
            'Eigene Rahmenbedingungen (Verfügbarkeit, Remote-Bedarf) ehrlich UND mit Lösungsvorschlag ansprechen.',
            'Vertraulichkeit über frühere Kunden ist ein Vertrauensbeweis, keine Antwortverweigerung.',
          ],
        },
        {
          kind: 'example',
          title: 'Du willst wissen, wie viel Remote-Arbeit möglich ist',
          good: '„Wie arbeitet das Team heute – vor Ort, remote, hybrid? Und wie stellen Sie sich das für diese Rolle vor, gerade mit Blick auf Workshops und Pre-Sales-Termine? Für Workshops und wichtige Termine bin ich selbstverständlich gern vor Ort."',
          bad: '„Also, ich sage es mal direkt: Mehr als einen Tag pro Woche vor Ort mache ich grundsätzlich nicht, das lohnt sich für mich sonst nicht. Ist das ein Problem?"',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'mistakes-questions-q1',
          question:
            'Warum sollte die Rate im Qualifizierungsgespräch mit dem Fachbereich kein Thema sein?',
          options: [
            {
              text: 'Konditionen laufen über den Vermittler- bzw. Vertragsprozess – im Fachgespräch signalisiert das Thema „Geld vor Projekt" und beschädigt den fachlichen Eindruck.',
              correct: true,
              explanation:
                'Richtig. Das Fachgespräch soll die inhaltliche Passung klären. Die Rate ist idealerweise vorher über den Vermittler abgestimmt – wer sie im Fachtermin verhandelt, verschiebt den Fokus auf das Falsche.',
            },
            {
              text: 'Weil man über Geld grundsätzlich nie sprechen darf – das wäre in jedem Kontext unhöflich.',
              correct: false,
              explanation:
                'Über Geld wird selbstverständlich gesprochen – nur am richtigen Ort: im Vertrags- und Vermittlerprozess. Es ist eine Frage des Kanals, nicht des Anstands.',
            },
            {
              text: 'Weil der Fachbereich die Rate ohnehin nicht kennt und die Frage deshalb ins Leere läuft.',
              correct: false,
              explanation:
                'Oft kennt er sie sogar. Das Problem ist nicht fehlendes Wissen, sondern das Signal: Die erste Priorität des Kandidaten scheint der eigene Verdienst zu sein, nicht das Projekt.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'mistakes-questions-q2',
          question:
            'Du willst herausfinden, ob die Stelle eine riskante Nachbesetzung ist (Vorgänger im Streit gegangen?). Wie fragst du am besten?',
          options: [
            {
              text: '„Ist die Rolle neu geschaffen oder eine Nachbesetzung – und was soll diesmal anders laufen als bisher?"',
              correct: true,
              explanation:
                'Richtig. Die Frage ist offen, projektorientiert und nicht anklagend – und die Antwort (plus die Art, WIE geantwortet wird) verrät dir meist alles, was du über die Vorgeschichte wissen musst.',
            },
            {
              text: '„Warum ist mein Vorgänger gegangen? Gab es da Probleme mit dem Team oder mit der Bezahlung?"',
              correct: false,
              explanation:
                'Frontal und mit Unterstellung („Probleme") – das drängt den Kunden in die Defensive und du bekommst eine Schutzantwort statt der Wahrheit. Offene Formulierungen liefern mehr Information.',
            },
            {
              text: 'Gar nicht fragen – solche Themen findet man nach Vertragsunterschrift früh genug heraus.',
              correct: false,
              explanation:
                'Bei einem längerfristigen Vertrag ist die Vorgeschichte der Rolle eine legitime und wichtige Information. Nicht zu fragen heißt, ein vermeidbares Risiko einzugehen – es kommt nur auf die Formulierung an.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'mistakes-questions-s1',
          situation:
            'Gegen Ende des Gesprächs fragt der Interviewer freundlich: „Sie waren ja zuletzt bei einem unserer direkten Wettbewerber im Projekt. Wie machen die denn das Thema Portallösungen – da würde uns Ihre Einschätzung sehr interessieren."',
          choices: [
            {
              text: '„Da bitte ich um Verständnis: Zu Interna früherer Kunden sage ich nichts – genauso vertraulich würde ich später auch mit Ihren Informationen umgehen. Was ich gern teile, ist meine allgemeine Erfahrung, welche Portal-Architekturen sich in der Branche bewährt haben."',
              quality: 'best',
              feedback:
                'Sehr gut: Du lehnst höflich und klar ab, drehst die Vertraulichkeit in einen Vertrauensbeweis für den NEUEN Kunden und bietest einen legitimen Mehrwert (Branchenerfahrung) an. Viele Interviewer stellen diese Frage genau als diesen Test.',
            },
            {
              text: 'Ein paar unverfängliche Details erzählen – schließlich willst du den Auftrag, und ein bisschen Insiderwissen macht dich wertvoller.',
              quality: 'bad',
              feedback:
                'Kurzfristig interessant, langfristig fatal: Der Kunde lernt vor allem eines – dass du auch SEINE Interna beim nächsten Kunden ausplaudern wirst. Dazu kommen mögliche NDA-Verstöße. Diese „Wertsteigerung" disqualifiziert dich.',
            },
            {
              text: '„Dazu darf ich nichts sagen." – und du wechselst abrupt das Thema.',
              quality: 'ok',
              feedback:
                'Inhaltlich korrekt, aber verschenkt: Ohne die Brücke („so vertraulich wäre ich auch mit Ihren Daten") wirkt es schroff, und ohne das Alternativangebot bleibt die Chance ungenutzt, deine Branchenkompetenz zu zeigen.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'mistakes-questions-f1',
          task: 'Formuliere diese drei Ich-Brille-Fragen in starke Projektbrille-Fragen um:\n1. „Wie viel Homeoffice ist drin?"\n2. „Muss ich auch außerhalb der Projektzeit für Pre-Sales-Termine zur Verfügung stehen?"\n3. „Wie sicher ist es, dass der Vertrag nach sechs Monaten verlängert wird?"',
          placeholder: '1. …\n2. …\n3. …',
          sampleSolution:
            '1. „Wie arbeitet das Team heute – vor Ort, remote, hybrid? Und was wünschen Sie sich für diese Rolle, gerade bei Workshops und Pre-Sales-Terminen?"\n2. „Wie ist der Pre-Sales-Anteil organisatorisch eingeplant – ist das Teil des vereinbarten Kontingents, und mit welchem Vorlauf werden solche Termine üblicherweise angesetzt?"\n3. „Wie ist das Engagement langfristig gedacht – gibt es nach der ersten Laufzeit eine Verlängerungsoption, und wovon machen Sie die abhängig?"',
          checklist: [
            'Alle drei Fragen sind aus der Projekt-/Zusammenarbeitsperspektive formuliert.',
            'Keine Frage klingt nach Komfort-Maximierung oder Absprungplanung.',
            'Jede Frage liefert mir trotzdem die Information, die ich wirklich brauche.',
            'Mindestens eine Frage zeigt zusätzlich Engagement (z.B. Bereitschaft für Vor-Ort-Termine).',
          ],
        },
      ],
    },
  ],
}
