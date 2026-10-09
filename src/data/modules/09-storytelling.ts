import type { Module } from '@/types/content'

export const storytelling: Module = {
  id: 'storytelling',
  title: 'Storytelling im Business',
  description:
    'Warum Geschichten überzeugen, wo Fakten abprallen: bewährte Story-Muster für Pitch und Präsentation – und wie du Zahlen so erzählst, dass sie hängen bleiben.',
  category: 'presentation',
  lessons: [
    {
      id: 'story-why',
      title: 'Warum Geschichten wirken',
      theory: [
        {
          kind: 'text',
          body: 'Stell dir zwei Präsentationen zum selben Thema vor. Die erste beginnt: „Unsere Kundenzufriedenheit liegt bei 73 %, der NPS bei 21." Die zweite beginnt: „Letzte Woche rief Frau Berger an – seit acht Jahren Kundin. Sie sagte: ‚Ich überlege zu kündigen, und ich erzähle Ihnen, warum.‘" Welche Eröffnung bleibt im Kopf?\n\nFakten informieren, Geschichten bewegen. Das ist keine Geschmacksfrage, sondern Neurobiologie: Bei reinen Fakten verarbeitet das Gehirn vor allem Sprachinformation. Bei einer Geschichte werden zusätzlich die Areale aktiv, die für Emotionen, Sinneseindrücke und eigenes Erleben zuständig sind – die Zuhörer erleben mit, statt nur zuzuhören. Deshalb erinnern sich Menschen an Geschichten um ein Vielfaches besser als an nackte Zahlen.',
        },
        {
          kind: 'text',
          heading: 'Was eine Geschichte ausmacht',
          body: 'Nicht jede Anekdote ist eine Geschichte. Eine Geschichte braucht drei Zutaten: einen Helden, einen Konflikt und eine Auflösung. Der Held ist eine konkrete Person, mit der sich das Publikum identifizieren kann – im Business oft ein Kunde, ein Kollege oder das Team selbst, fast nie das eigene Produkt. Der Konflikt ist das Hindernis, das Problem, der Moment, in dem etwas auf dem Spiel steht. Die Auflösung zeigt, wie der Konflikt überwunden wurde – und was sich dadurch verändert hat.\n\nOhne Konflikt keine Spannung: „Wir haben die Software eingeführt und alles lief gut" ist keine Geschichte, sondern ein Statusbericht. „Drei Wochen vor dem Go-live fiel der Datenimport komplett aus – und das Team hatte genau ein Wochenende Zeit" – jetzt will man wissen, wie es weitergeht.',
        },
        {
          kind: 'text',
          heading: 'Wann Storytelling passt – und wann nicht',
          body: 'Storytelling ist ein Werkzeug, kein Allheilmittel. Es passt immer dann, wenn du überzeugen, motivieren oder Veränderung anstoßen willst: im Pitch, im Kickoff, bei der Vision für ein Projekt, beim Einstieg in eine Präsentation. Es passt nicht, wenn dein Publikum eine schnelle Entscheidung auf Faktenbasis erwartet: Im Statusmeeting will die Geschäftsführung die Ampelfarbe und die drei kritischen Punkte – keine Heldenreise.\n\nDie Faustregel: Geschichten öffnen Türen, Fakten schließen den Deal. Die beste Business-Kommunikation kombiniert beides – die Geschichte schafft Relevanz und Emotion, die Zahlen liefern die Absicherung für den Verstand.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Geschichten aktivieren Emotion und eigenes Erleben – deshalb bleiben sie deutlich besser hängen als reine Fakten.',
            'Jede Geschichte braucht drei Elemente: Held, Konflikt, Auflösung – ohne Konflikt keine Spannung.',
            'Der Held ist eine Person (Kunde, Kollege, Team), nicht dein Produkt oder deine Firma.',
            'Storytelling passt zum Überzeugen und Motivieren – nicht ins Statusmeeting, wo schnelle Faktenentscheidungen gefragt sind.',
            'Die stärkste Wirkung entsteht aus der Kombination: Geschichte für das Herz, Zahlen für den Verstand.',
          ],
        },
        {
          kind: 'example',
          title: 'Einstieg in eine Präsentation zur Prozessverbesserung',
          good: '„Am Montag hat Herr Kaiser aus dem Vertrieb zum vierten Mal dieselben Kundendaten in drei Systeme getippt. Um 17:30 Uhr, nach seinem eigentlichen Feierabend. Er ist nicht allein: Genau das passiert bei uns jeden Tag, 40-mal. Heute zeige ich euch, wie wir das beenden."',
          bad: '„Herzlich willkommen zu meiner Präsentation über die Optimierung der Dateneingabeprozesse. Agenda: Erstens Ist-Analyse, zweitens Soll-Konzept, drittens Umsetzungsplanung, viertens nächste Schritte."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'story-why-q1',
          question: 'Warum bleiben Geschichten besser im Gedächtnis als reine Fakten?',
          options: [
            {
              text: 'Geschichten aktivieren zusätzlich zu den Sprachzentren auch die Gehirnareale für Emotionen und eigenes Erleben – die Zuhörer erleben mit.',
              correct: true,
              explanation:
                'Richtig. Bei Geschichten läuft im Kopf des Publikums ein eigener Film ab – diese Verknüpfung von Information mit Emotion und Vorstellung macht Inhalte deutlich merkfähiger.',
            },
            {
              text: 'Geschichten sind immer kürzer als Faktenpräsentationen und überfordern deshalb das Gehirn nicht.',
              correct: false,
              explanation:
                'Geschichten sind oft sogar länger als die nackte Faktenaussage. Ihre Wirkung kommt nicht von der Kürze, sondern von der emotionalen Aktivierung.',
            },
            {
              text: 'Geschichten enthalten keine Zahlen, und Zahlen kann sich niemand merken.',
              correct: false,
              explanation:
                'Gute Business-Geschichten enthalten durchaus Zahlen – entscheidend ist, dass die Zahl in einen erlebbaren Kontext eingebettet wird, statt isoliert zu stehen.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'story-why-q2',
          question: 'Welche drei Elemente machen aus einer Anekdote eine wirksame Geschichte?',
          options: [
            {
              text: 'Held, Konflikt, Auflösung',
              correct: true,
              explanation:
                'Genau. Eine konkrete Person, ein Hindernis, bei dem etwas auf dem Spiel steht, und eine Auflösung, die zeigt, was sich verändert hat – das ist der Kern jeder Geschichte.',
            },
            {
              text: 'Einleitung, Hauptteil, Schluss',
              correct: false,
              explanation:
                'Das ist die formale Gliederung jedes Textes – sie erzeugt aber keine Spannung. Ein Statusbericht hat auch Einleitung, Hauptteil und Schluss und ist trotzdem keine Geschichte.',
            },
            {
              text: 'Produkt, Features, Preis',
              correct: false,
              explanation:
                'Das ist eine Produktpräsentation, keine Geschichte. Im Storytelling ist der Held übrigens fast nie das Produkt, sondern der Mensch, dem es hilft.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'story-why-s1',
          situation:
            'Du präsentierst der Geschäftsführung dein Konzept für ein neues Onboarding-Programm. Du hast 15 Minuten. Deine Daten zeigen: 30 % der neuen Mitarbeitenden kündigen im ersten Jahr, eine Nachbesetzung kostet rund 25.000 Euro. Wie steigst du ein?',
          choices: [
            {
              text: 'Mit einer kurzen, echten Geschichte: „Lisa M. war unser Wunschkandidat – nach fünf Monaten war sie weg. In ihrem Austrittsgespräch sagte sie einen Satz, der mich nicht losgelassen hat …" Danach die Zahlen als Beleg, dass Lisa kein Einzelfall ist.',
              quality: 'best',
              feedback:
                'Sehr gut: Die Geschichte macht das abstrakte Problem konkret und emotional greifbar, die Zahlen liefern direkt danach die rationale Absicherung. Genau diese Kombination überzeugt Entscheider – Herz zuerst, Verstand direkt hinterher.',
            },
            {
              text: 'Direkt mit den Zahlen: „30 % Frühfluktuation, 25.000 Euro pro Nachbesetzung – das kostet uns jährlich rund 375.000 Euro. Mein Konzept senkt das."',
              quality: 'ok',
              feedback:
                'Solide und für ein zahlenorientiertes Publikum durchaus passend – die Botschaft kommt an. Aber du verschenkst Wirkung: Ohne ein konkretes Gesicht bleibt das Problem abstrakt und konkurriert mit allen anderen Kostenpositionen auf der Agenda. Eine kurze Geschichte davor hätte die Dringlichkeit fühlbar gemacht.',
            },
            {
              text: 'Mit einer ausführlichen, fiktiven Rahmenhandlung über einen erfundenen Mitarbeiter „Max Mustermann", die sich durch alle 15 Minuten zieht, inklusive ausgedachter Dialoge.',
              quality: 'bad',
              feedback:
                'Riskant: Erfundene Geschichten wirken vor erfahrenen Entscheidern schnell konstruiert – und wenn jemand nachfragt („Wer ist das?"), verlierst du Glaubwürdigkeit. Zudem frisst eine 15-minütige Dauererzählung die Zeit für dein eigentliches Konzept. Im Business gilt: echte, kurze Geschichten, dann zur Sache.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'story-why-f1',
          task: 'Verwandle diese Faktenaussage in einen kurzen Story-Einstieg (3-5 Sätze) mit Held, Konflikt und offener Spannung: „Unser Ticketsystem hat lange Antwortzeiten, durchschnittlich 4 Tage pro Kundenanfrage."',
          placeholder: 'Dein Story-Einstieg mit Held, Konflikt und Spannung …',
          sampleSolution:
            '„Vergangenen Dienstag schrieb uns Frau Steiner, Einkaufsleiterin bei unserem drittgrößten Kunden: Ihre Produktionslinie stand, sie brauchte dringend eine Ersatzteilnummer. Unsere Antwort kam – vier Tage später. Da lief die Linie längst wieder, dank eines Wettbewerbers, der innerhalb von zwei Stunden geantwortet hatte. Frau Steiner ist kein Einzelfall: Vier Tage Antwortzeit sind bei uns der Durchschnitt. Heute möchte ich euch zeigen, wie wir aus vier Tagen vier Stunden machen."',
          checklist: [
            'Ich habe einen konkreten Helden benannt (eine Person, kein Produkt und keine Abteilung).',
            'Ich habe einen echten Konflikt eingebaut, bei dem etwas auf dem Spiel steht.',
            'Ich habe die Zahl (4 Tage) in die Geschichte eingebettet statt sie isoliert zu nennen.',
            'Ich habe Spannung aufgebaut, die zum Weiterhören einlädt.',
            'Ich habe mich kurz gefasst (3-5 Sätze) und komme danach zur Sache.',
          ],
        },
      ],
    },
    {
      id: 'story-patterns',
      title: 'Story-Muster für den Business-Alltag',
      theory: [
        {
          kind: 'text',
          body: 'Du musst Geschichten nicht jedes Mal neu erfinden. Seit Jahrtausenden folgen wirksame Geschichten denselben Mustern – und die lassen sich direkt auf Pitch, Präsentation und Meeting übertragen. Wer drei, vier Muster beherrscht, findet für fast jede Business-Situation die passende Struktur.\n\nDer Vorteil von Mustern: Sie geben dir unter Druck Halt. Statt vor dem leeren Folienmaster zu grübeln, wählst du das Muster, das zu deinem Ziel passt, und füllst es mit deinem Inhalt.',
        },
        {
          kind: 'text',
          heading: 'Die Heldenreise – kompakt fürs Business',
          body: 'Die Heldenreise nach Joseph Campbell ist das Urmuster aller Geschichten: Ein Held verlässt seine gewohnte Welt, besteht Prüfungen, trifft einen Mentor, überwindet die entscheidende Krise und kehrt verwandelt zurück. Hollywood erzählt so fast jeden Blockbuster.\n\nFürs Business reicht die Kompaktversion in vier Schritten: gewohnte Welt („So arbeiten wir heute"), Ruf und Hindernis („Dann kam die neue Anforderung – und unser Prozess brach zusammen"), Kampf und Wendepunkt („Drei Anläufe scheiterten, beim vierten entdeckten wir …"), Rückkehr mit Gewinn („Heute schaffen wir das Doppelte in der halben Zeit"). Wichtig: Im Business ist der Held dein Kunde oder dein Team – du selbst bist höchstens der Mentor, der dem Helden hilft.',
        },
        {
          kind: 'text',
          heading: 'Vorher-Nachher, Problem-Lösung-Nutzen und STAR',
          body: 'Das Vorher-Nachher-Muster ist die einfachste Story-Struktur: Zeichne die Welt vor der Veränderung (konkret, mit fühlbaren Schmerzpunkten), dann die Welt danach – und lass den Kontrast wirken. Es eignet sich perfekt für Referenzen und Erfolgsberichte.\n\nFür Pitches hat sich Problem-Lösung-Nutzen bewährt: Erst das Problem so schildern, dass das Publikum nickt („Genau das kenne ich!"), dann die Lösung in einem Satz, dann den Nutzen konkret und möglichst beziffert. Der häufigste Fehler: zu schnell zur Lösung springen, bevor das Problem wirklich schmerzt.\n\nFür Beispiele aus eigener Erfahrung – etwa im Bewerbungsgespräch oder wenn du Kompetenz belegen willst – nutzt du die STAR-Struktur: Situation (Kontext in ein, zwei Sätzen), Task (deine Aufgabe oder Verantwortung), Action (was DU konkret getan hast), Result (das messbare Ergebnis). STAR zwingt dich zum Punkt und verhindert, dass Beispiele im Ungefähren versanden.',
        },
        {
          kind: 'table',
          headers: ['Muster', 'Struktur', 'Typischer Einsatz'],
          rows: [
            [
              'Heldenreise kompakt',
              'Gewohnte Welt → Hindernis → Wendepunkt → Rückkehr mit Gewinn',
              'Veränderungsprojekte, Keynotes, Teamgeschichten',
            ],
            [
              'Vorher-Nachher',
              'Welt vorher (Schmerz) → Welt nachher (Gewinn)',
              'Referenzen, Erfolgsberichte, Produktdemos',
            ],
            [
              'Problem-Lösung-Nutzen',
              'Problem spürbar machen → Lösung → bezifferter Nutzen',
              'Pitches, Entscheidungsvorlagen, Vertrieb',
            ],
            [
              'STAR',
              'Situation → Task → Action → Result',
              'Eigene Beispiele, Bewerbungsgespräche, Kompetenznachweise',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Story-Muster sind Schablonen: Muster wählen, mit eigenem Inhalt füllen – das spart Zeit und gibt Struktur.',
            'Heldenreise kompakt: gewohnte Welt, Hindernis, Wendepunkt, Rückkehr mit Gewinn – der Held ist Kunde oder Team, nicht du.',
            'Problem-Lösung-Nutzen: Das Problem muss erst schmerzen, bevor die Lösung kommt.',
            'STAR (Situation, Task, Action, Result) macht eigene Beispiele konkret und belegbar.',
            'Beim Nutzen immer konkret werden: beziffern statt behaupten.',
          ],
        },
        {
          kind: 'example',
          title: 'Eigenes Beispiel im Gespräch mit der Bereichsleitung (STAR)',
          good: '„Situation: Letztes Jahr verloren wir zwei Großkunden kurz hintereinander. Task: Ich sollte die Ursachen analysieren und Gegenmaßnahmen vorschlagen. Action: Ich habe mit beiden Kunden Exit-Gespräche geführt, die Reklamationshistorie ausgewertet und einen Frühwarn-Report aufgesetzt. Result: Seitdem haben wir drei gefährdete Kunden rechtzeitig erkannt und gehalten – zusammen rund 400.000 Euro Jahresumsatz."',
          bad: '„Ich habe da mal so ein Kundenprojekt gemacht, das lief eigentlich ganz gut. Wir haben einiges analysiert und verschiedene Sachen umgesetzt, und danach war die Situation deutlich besser."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'story-patterns-q1',
          question: 'Wer ist in einer Business-Heldenreise idealerweise der Held?',
          options: [
            {
              text: 'Der Kunde oder das Team – der Präsentierende selbst ist höchstens der Mentor, der dem Helden hilft.',
              correct: true,
              explanation:
                'Richtig. Das Publikum identifiziert sich mit dem Helden. Machst du dich selbst oder dein Produkt zum Helden, wirkt es wie Eigenlob – als Mentor dagegen bist du der, der den Erfolg möglich macht.',
            },
            {
              text: 'Der Präsentierende selbst – schließlich will er Kompetenz zeigen.',
              correct: false,
              explanation:
                'Verständlicher Impuls, aber kontraproduktiv: Wer sich selbst zum Helden macht, erzeugt Distanz statt Identifikation. Kompetenz zeigst du wirksamer in der Mentorrolle.',
            },
            {
              text: 'Das eigene Produkt, weil es im Mittelpunkt der Präsentation steht.',
              correct: false,
              explanation:
                'Ein Produkt kann kein Held sein – niemand identifiziert sich mit einer Software. Der Held ist der Mensch, dessen Problem das Produkt löst.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'story-patterns-q2',
          question: 'Was ist der häufigste Fehler beim Muster Problem-Lösung-Nutzen?',
          options: [
            {
              text: 'Zu schnell zur Lösung springen, bevor das Problem beim Publikum wirklich angekommen ist und schmerzt.',
              correct: true,
              explanation:
                'Genau. Eine Lösung wirkt nur so stark wie das Problem, das sie löst. Erst wenn das Publikum innerlich nickt („Ja, das kenne ich!"), entfaltet die Lösung ihre Kraft.',
            },
            {
              text: 'Das Problem zu ausführlich beschreiben – man sollte immer mit der Lösung beginnen.',
              correct: false,
              explanation:
                'Das Gegenteil ist das Risiko: Ohne spürbares Problem fehlt der Lösung die Relevanz. Natürlich darf die Problemschilderung nicht ausufern, aber sie kommt zuerst.',
            },
            {
              text: 'Den Nutzen mit Zahlen zu belegen – das wirkt zu technisch.',
              correct: false,
              explanation:
                'Im Gegenteil: Ein bezifferter Nutzen („spart 20 Stunden pro Monat") ist deutlich überzeugender als vage Behauptungen wie „macht uns effizienter".',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'story-patterns-s1',
          situation:
            'Im Jahresgespräch bittet dich deine Führungskraft, deinen wichtigsten Beitrag im letzten Jahr zu schildern – als Grundlage für die Gehaltsrunde. Du hast ein starkes Projekt vorzuweisen: Du hast die Reklamationsquote deutlich gesenkt.',
          choices: [
            {
              text: 'Du erzählst nach STAR: die Ausgangslage mit steigenden Reklamationen, deine Verantwortung, deine konkreten Maßnahmen – und das Ergebnis: „Reklamationsquote von 8 auf 3 Prozent, das entspricht etwa 60.000 Euro weniger Nacharbeitskosten pro Jahr."',
              quality: 'best',
              feedback:
                'Sehr gut: STAR macht deinen Beitrag konkret, nachvollziehbar und belegbar. Besonders das bezifferte Ergebnis gibt deiner Führungskraft genau das Argument an die Hand, das sie in der Gehaltsrunde selbst braucht.',
            },
            {
              text: 'Du zählst chronologisch alles auf, was du im letzten Jahr gemacht hast – vom Tagesgeschäft über Meetings bis zum Reklamationsprojekt, damit nichts unter den Tisch fällt.',
              quality: 'ok',
              feedback:
                'Vollständig, aber wirkungsarm: In der Aufzählung geht dein stärkstes Projekt unter wie eine Perle im Kies. Dein Gegenüber erinnert sich hinterher an nichts Konkretes. Besser: ein, zwei Highlights nach STAR erzählen und das Tagesgeschäft in einem Satz abdecken.',
            },
            {
              text: 'Du bleibst bescheiden: „Das Reklamationsprojekt lief ganz gut, aber das war ja Teamarbeit – ich habe da nur meinen Job gemacht."',
              quality: 'bad',
              feedback:
                'Bescheidenheit ehrt dich, aber hier schadet sie: Deine Führungskraft kann nur honorieren, was sie kennt und greifen kann. Teamleistung anzuerkennen und den eigenen Beitrag klar zu benennen schließt sich nicht aus – STAR hilft dir, genau das sauber zu trennen (Action: was DU getan hast).',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'story-patterns-f1',
          task: 'Baue aus diesen Stichpunkten einen kurzen Pitch nach dem Muster Problem-Lösung-Nutzen (4-6 Sätze): Das Team verliert Zeit, weil Meetingprotokolle fehlen oder unauffindbar sind; dein Vorschlag ist eine einheitliche Protokollvorlage plus zentraler Ablageort; geschätzte Ersparnis: 2 Stunden pro Person pro Woche.',
          placeholder: 'Problem: …\nLösung: …\nNutzen: …',
          sampleSolution:
            '„Kennt ihr das? Nach dem Meeting ist vor der Suche: Was wurde eigentlich beschlossen, wer macht was bis wann? Beschlüsse stehen in irgendwelchen Mails, in drei verschiedenen Notiz-Tools – oder nirgends. Jeder von uns verliert damit Zeit, und manche Aufgabe fällt komplett durchs Raster.\nMein Vorschlag: eine einheitliche Protokollvorlage mit Beschlüssen und Verantwortlichen – und ein einziger, zentraler Ablageort im Teamlaufwerk.\nDer Nutzen: Nach vorsichtiger Schätzung sparen wir damit 2 Stunden pro Person und Woche – im Team sind das über 80 Stunden im Monat. Und kein Beschluss geht mehr verloren."',
          checklist: [
            'Ich habe das Problem so geschildert, dass das Publikum es wiedererkennt und nickt.',
            'Ich habe die Lösung kurz und klar formuliert (ein bis zwei Sätze).',
            'Ich habe den Nutzen konkret beziffert statt nur behauptet.',
            'Ich habe die Reihenfolge eingehalten: erst Problem, dann Lösung, dann Nutzen.',
          ],
        },
      ],
    },
    {
      id: 'story-data',
      title: 'Zahlen erzählen',
      theory: [
        {
          kind: 'text',
          body: '„Unser Rechenzentrum verbraucht 4,2 Gigawattstunden pro Jahr." Die meisten Zuhörer nicken höflich – und haben keinerlei Vorstellung, ob das viel oder wenig ist. Zahlen allein transportieren keine Bedeutung. Erst der Vergleich macht sie erlebbar: „Das entspricht dem Jahresverbrauch von rund 1.000 Einfamilienhäusern."\n\nGenau das ist die Kunst des Zahlen-Erzählens: nicht mehr Zahlen zeigen, sondern wenigen Zahlen Bedeutung geben. Dein Publikum soll nicht rechnen müssen – du hast die Übersetzungsarbeit bereits erledigt.',
        },
        {
          kind: 'text',
          heading: 'Vergleiche und Analogien statt nackter Zahlen',
          body: 'Das menschliche Gehirn kann mit abstrakten Größen schlecht umgehen, mit Vergleichen dagegen hervorragend. Gute Übersetzungen docken an Alltagserfahrung an: Flächen in Fußballfeldern, Datenmengen in Spielfilmen, Zeiträume in Arbeitstagen, Geldbeträge in greifbaren Gegenwerten („Das sind zwei Vollzeitstellen").\n\nDrei Regeln für gute Vergleiche: Erstens, der Vergleich muss zur Zielgruppe passen – Controller denken in Personalkosten, Techniker in Serverkapazität. Zweitens, der Vergleich muss fair sein: Wer mit manipulativen Vergleichen erwischt wird, verliert dauerhaft Glaubwürdigkeit. Drittens, runde mutig: „knapp 40 %" ist merkfähiger als „39,7 %" – die Detailzahl gehört ins Backup, nicht in die Kernbotschaft.',
        },
        {
          kind: 'text',
          heading: 'Eine Zahl pro Botschaft – und immer mit Kontext',
          body: 'Der häufigste Fehler in Zahlenpräsentationen: zu viele Zahlen gleichzeitig. Wenn du acht Kennzahlen auf eine Folie packst, merkt sich dein Publikum keine einzige. Die Regel lautet: eine Zahl pro Botschaft. Wähle die eine Zahl, die deine Aussage trägt, und stelle sie groß und allein in den Mittelpunkt. Alle weiteren Zahlen gehören in den Anhang für Rückfragen.\n\nUnd jede Zahl braucht die Antwort auf die stille Frage des Publikums: „Was bedeutet das für uns?" Eine Umsatzsteigerung von 12 % ist erst dann eine Botschaft, wenn du sie einordnest: Ist das mehr als der Markt? Mehr als geplant? Was ermöglicht uns das? Erzähle die Konsequenz mit, nicht nur den Messwert – sonst überlässt du die Interpretation dem Zufall.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Zahlen allein haben keine Bedeutung – erst Vergleiche und Analogien machen sie erlebbar.',
            'Vergleiche müssen zur Zielgruppe passen und fair sein; unfaire Vergleiche kosten Glaubwürdigkeit.',
            'Eine Zahl pro Botschaft: Die eine tragende Zahl in den Mittelpunkt, der Rest ins Backup.',
            'Mutig runden: „knapp 40 %" bleibt hängen, „39,7 %" nicht.',
            'Jede Zahl braucht Kontext: Beantworte immer die Frage „Was bedeutet das für uns?".',
          ],
        },
        {
          kind: 'example',
          title: 'Kennzahl im Quartalsbericht präsentieren',
          good: '„Eine Zahl möchte ich herausgreifen: 14 Tage. So lange dauert bei uns im Schnitt eine Angebotserstellung – unser stärkster Wettbewerber braucht 5. Das heißt konkret: Bei jedem dritten Deal ist der Kunde schon versorgt, bevor unser Angebot ankommt. Deshalb schlage ich vor, dass wir hier zuerst ansetzen."',
          bad: '„Auf dieser Folie sehen Sie unsere KPIs: Angebotsdurchlaufzeit 14,3 Tage, Conversion 22,7 %, durchschnittliches Dealvolumen 48.350 Euro, Pipeline-Coverage 2,4, Win-Rate 31,2 %, Forecast-Genauigkeit 87 %. Wie Sie sehen, gibt es Licht und Schatten."',
        },
        {
          kind: 'table',
          headers: ['Nackte Zahl', 'Erzählte Zahl'],
          rows: [
            [
              '„Wir erhalten 4.800 Support-Tickets pro Monat."',
              '„Alle zwei Minuten meldet sich ein Kunde mit einem Problem – rund um die Uhr, auch nachts."',
            ],
            [
              '„Der Serverausfall kostete 180.000 Euro."',
              '„Der Ausfall hat den Gewinn von drei kompletten Verkaufswochen vernichtet."',
            ],
            [
              '„Die Durchlaufzeit sank um 35 %."',
              '„Was früher eine Arbeitswoche dauerte, schaffen wir heute bis Mittwochmittag."',
            ],
            [
              '„97,2 % Liefertreue."',
              '„Von 36 Lieferungen pro Tag kommt nur eine einzige zu spät – vor zwei Jahren waren es noch sechs."',
            ],
          ],
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'story-data-q1',
          question:
            'Warum solltest du in einer Präsentation pro Botschaft nur eine Zahl in den Mittelpunkt stellen?',
          options: [
            {
              text: 'Weil sich das Publikum bei vielen gleichzeitigen Zahlen keine einzige merkt – die eine tragende Zahl bleibt dagegen hängen.',
              correct: true,
              explanation:
                'Richtig. Aufmerksamkeit ist begrenzt: Eine groß und allein präsentierte Zahl wird erinnert, acht Kennzahlen auf einer Folie werden überflogen und vergessen. Details gehören ins Backup.',
            },
            {
              text: 'Weil mehr als eine Zahl pro Folie technisch schwer darstellbar ist.',
              correct: false,
              explanation:
                'Technisch ist das kein Problem – gerade deshalb sind überladene Zahlenfolien ja so verbreitet. Der Grund ist die begrenzte Aufnahmefähigkeit des Publikums, nicht die Technik.',
            },
            {
              text: 'Weil Zahlen in Präsentationen grundsätzlich unseriös wirken und man sie vermeiden sollte.',
              correct: false,
              explanation:
                'Im Gegenteil: Zahlen schaffen Glaubwürdigkeit. Es geht nicht um Vermeidung, sondern um Fokussierung – die richtige Zahl, gut übersetzt, ist dein stärkstes Argument.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'story-data-q2',
          question:
            'Du willst die Zahl „39,7 % weniger Rückfragen" in deiner Kernbotschaft verwenden. Was ist die beste Form?',
          options: [
            {
              text: '„Knapp 40 % weniger Rückfragen" – gerundet in der Botschaft, die exakte Zahl im Backup für Nachfragen.',
              correct: true,
              explanation:
                'Genau. Gerundete Zahlen sind merkfähiger und wirken souverän. Die Präzision geht nicht verloren – sie wandert ins Backup und steht bei Rückfragen bereit.',
            },
            {
              text: '„39,7 % weniger Rückfragen" – die exakte Zahl beweist, dass sauber gemessen wurde.',
              correct: false,
              explanation:
                'Die Nachkommastelle belegt keine Seriosität, sie kostet nur Merkfähigkeit. Niemand erinnert sich an 39,7 – an „knapp 40 %" dagegen schon. Exaktheit gehört in den Anhang.',
            },
            {
              text: '„Deutlich weniger Rückfragen" – ganz ohne Zahl, das versteht jeder.',
              correct: false,
              explanation:
                'Jetzt hast du zu viel weggerundet: „Deutlich" ist eine Behauptung, „knapp 40 %" ein Beleg. Die Zahl weglassen schwächt deine Botschaft unnötig.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'story-data-s1',
          situation:
            'Du präsentierst dem Vorstand das Ergebnis eures Automatisierungsprojekts: Die manuelle Dateneingabe wurde um 1.200 Stunden pro Jahr reduziert. Du überlegst, wie du diese Zahl rüberbringst.',
          choices: [
            {
              text: 'Du übersetzt die Zahl in die Welt des Vorstands: „1.200 Stunden pro Jahr – das ist Dreiviertel einer Vollzeitstelle. Diese Kapazität fließt jetzt in die Kundenbetreuung, wo uns bisher Zeit fehlte."',
              quality: 'best',
              feedback:
                'Sehr gut: Du übersetzt die abstrakte Stundenzahl in eine Größe, in der der Vorstand denkt (Personalkapazität), und beantwortest direkt die Frage „Was bedeutet das für uns?" – inklusive der Konsequenz, was mit der gewonnenen Zeit passiert.',
            },
            {
              text: 'Du nennst die Zahl exakt und belegst sie: „Wir haben 1.218,5 Stunden eingespart. Auf den nächsten Folien sehen Sie die detaillierte Herleitung pro Prozessschritt."',
              quality: 'ok',
              feedback:
                'Sauber gearbeitet, und die Herleitung im Backup zu haben ist richtig. Aber du lässt die Zahl unübersetzt: Der Vorstand muss selbst ausrechnen, was 1.218,5 Stunden bedeuten – und die Detailfolien verwässern deine Botschaft. Übersetzung zuerst, Herleitung nur auf Nachfrage.',
            },
            {
              text: 'Du zeigst zur Sicherheit alle Projektkennzahlen auf einer Folie: eingesparte Stunden, Fehlerquote vorher/nachher, Anzahl automatisierter Prozessschritte, Projektkosten, Durchlaufzeiten – damit der Vorstand das Gesamtbild hat.',
              quality: 'bad',
              feedback:
                'Gut gemeint, aber so geht deine Erfolgsgeschichte unter: Bei acht gleichberechtigten Zahlen merkt sich niemand eine. Der Vorstand bekommt kein Gesamtbild, sondern Zahlenrauschen. Wähle die eine tragende Zahl, übersetze sie – und halte den Rest für Rückfragen bereit.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'story-data-f1',
          task: 'Übersetze diese nackte Zahl in eine erzählte Zahl mit Vergleich und Kontext für eine Teampräsentation: „Unsere Website hatte letzten Monat 45.000 Besucher, davon haben 450 etwas gekauft."',
          placeholder: 'Deine erzählte Version mit Vergleich und „Was bedeutet das für uns?" …',
          sampleSolution:
            '„Stellt euch ein volles Fußballstadion mit 45.000 Menschen vor – so viele waren letzten Monat auf unserer Website. Gekauft haben davon 450. Das ist eine einzige Sitzreihe. Anders gesagt: Von 100 Interessenten gehen 99 wieder, ohne etwas zu kaufen. Genau da liegt unsere größte Chance: Wenn wir aus einer Sitzreihe nur zwei machen, verdoppeln wir den Umsatz – ohne einen Cent mehr für Werbung."',
          checklist: [
            'Ich habe einen anschaulichen Vergleich gewählt, der zur Zielgruppe passt.',
            'Ich habe nicht beide Zahlen gleichwertig nebeneinandergestellt, sondern eine Kernaussage daraus gemacht.',
            'Ich habe die Frage „Was bedeutet das für uns?" ausdrücklich beantwortet.',
            'Mein Vergleich ist fair und nicht manipulativ.',
          ],
        },
      ],
    },
  ],
}
