import type { Module } from '@/types/content'

export const slideDesign: Module = {
  id: 'slide-design',
  title: 'Foliendesign & Visualisierung',
  description:
    'Folien, die wirken statt erschlagen: eine Botschaft pro Folie, Daten klar visualisiert – und Publikumsfragen als Chance statt Bedrohung.',
  category: 'presentation',
  lessons: [
    {
      id: 'slides-less',
      title: 'Weniger ist mehr',
      theory: [
        {
          kind: 'text',
          body: 'Die meisten Business-Folien sind überladen: sieben Bullet-Points, drei Diagramme, eine Fußnote in Schriftgröße 10 – und vorne steht jemand, der genau diesen Text vorliest. Das Ergebnis kennt jeder: Das Publikum liest schneller, als der Redner spricht, hört auf zuzuhören und scrollt gedanklich schon zur nächsten Folie.\n\nDer Kern des Problems ist ein Missverständnis darüber, wofür Folien da sind. Folien sind nicht dein Teleprompter und nicht dein Protokoll – sie sind visuelle Verstärker deiner Botschaft. Du bist die Präsentation; die Folien sind die Unterstützung. Sobald eine Folie ohne dich funktioniert, ist sie keine Folie, sondern ein Dokument.',
        },
        {
          kind: 'text',
          heading: 'Eine Botschaft pro Folie – und Aussage-Titel statt Themen-Titel',
          body: 'Die wichtigste Design-Regel ist keine Design-Regel, sondern eine Denk-Regel: eine Botschaft pro Folie. Wenn du zwei Botschaften hast, mach zwei Folien – Folien kosten nichts. Der Test: Kannst du in einem Satz sagen, was das Publikum von dieser Folie mitnehmen soll? Wenn nicht, ist die Folie nicht fertig gedacht.\n\nDieser eine Satz gehört prominent auf die Folie – als Aussage-Titel. Statt des Themen-Titels „Umsatzentwicklung Q3" schreibst du die Erkenntnis in den Titel: „Umsatz wächst – aber nur noch im Online-Geschäft". Der Themen-Titel sagt, worüber die Folie redet; der Aussage-Titel sagt, was sie sagt. Wer nur die Titel deiner Präsentation liest, sollte deine komplette Argumentation verstehen – das ist zugleich der beste Qualitätscheck für deinen roten Faden.',
        },
        {
          kind: 'text',
          heading: 'Textmengen begrenzen – und das Handout trennen',
          body: 'Für die Textmenge gibt es bewährte Faustregeln: maximal sechs Zeilen pro Folie, maximal sechs Wörter pro Zeile – und Schriftgröße nie unter 24 Punkt, damit auch die letzte Reihe lesen kann. Das sind keine Dogmen, aber harte Warnsignale: Wer sie reißt, baut gerade ein Dokument, keine Folie. Noch besser als wenig Text ist oft gar keiner: ein starkes Bild, eine einzige Zahl, ein Diagramm mit klarer Aussage.\n\nDer häufigste Einwand lautet: „Aber die Folien werden danach verschickt – da muss alles draufstehen!" Die Antwort: Folien sind nicht das Handout. Was im Vortrag wirkt (wenig Text, große Bilder), ist als Leseunterlage unbrauchbar – und was als Leseunterlage taugt (vollständige Sätze, alle Details), erschlägt im Vortrag. Profis trennen deshalb beides: schlanke Folien für den Auftritt, ein separates Handout oder eine Dokumentenversion mit allen Details für danach. Wer Zeit sparen muss, nutzt den Notizenbereich der Folien für die Details – aber niemals die Folienfläche selbst.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Folien sind visuelle Verstärker, kein Teleprompter und kein Protokoll – du bist die Präsentation.',
            'Eine Botschaft pro Folie: Lieber zwei klare Folien als eine überladene.',
            'Aussage-Titel statt Themen-Titel: „Umsatz wächst nur noch online" statt „Umsatzentwicklung Q3".',
            'Textmenge begrenzen: Richtwert max. 6 Zeilen à 6 Wörter, Schrift nie unter 24 Punkt.',
            'Folien sind nicht das Handout: schlanke Folien für den Vortrag, Details in ein separates Dokument.',
          ],
        },
        {
          kind: 'example',
          title: 'Folie zur Projektlage im Lenkungskreis',
          good: 'Titel: „Go-live ist machbar – wenn wir jetzt zwei Tester nachbesetzen". Darunter eine einzige Grafik: der Zeitstrahl mit dem kritischen Pfad, die Testphase rot markiert. Mehr steht nicht auf der Folie – die Details erzählt der Projektleiter, und sie stehen im Handout.',
          bad: 'Titel: „Projektstatus". Darunter acht Bullet-Points über Teilprojekte, eine Ampel-Tabelle mit zwölf Zeilen, zwei Balkendiagramme und eine Fußnote mit Abkürzungsverzeichnis. Der Projektleiter liest alles vor; der Lenkungskreis liest schneller und diskutiert am Ende über ein Detail aus Zeile elf statt über die Tester-Entscheidung.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'slides-less-q1',
          question: 'Was unterscheidet einen Aussage-Titel von einem Themen-Titel?',
          options: [
            {
              text: 'Der Themen-Titel nennt nur das Thema („Umsatzentwicklung Q3"), der Aussage-Titel enthält die Kernbotschaft der Folie („Umsatz wächst nur noch online").',
              correct: true,
              explanation:
                'Richtig. Der Aussage-Titel transportiert die Erkenntnis sofort – und wer nur die Titel liest, versteht die gesamte Argumentation. Das ist zugleich der beste Check für den roten Faden.',
            },
            {
              text: 'Der Aussage-Titel ist länger und detaillierter, weil er möglichst viele Informationen der Folie zusammenfassen soll.',
              correct: false,
              explanation:
                'Länge ist nicht das Kriterium – ein guter Aussage-Titel ist ein prägnanter Satz. Entscheidend ist, dass er eine Botschaft formuliert statt nur ein Thema zu benennen.',
            },
            {
              text: 'Themen-Titel sind für interne Präsentationen, Aussage-Titel für Kundenpräsentationen.',
              correct: false,
              explanation:
                'Die Unterscheidung hat nichts mit dem Publikum zu tun: Aussage-Titel wirken intern wie extern besser, weil sie dem Publikum die Einordnung abnehmen.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'slides-less-q2',
          question: 'Warum sollten Vortragsfolien und Handout getrennt werden?',
          options: [
            {
              text: 'Weil sie verschiedene Aufgaben haben: Folien unterstützen den Live-Vortrag (wenig Text, visuell), ein Handout muss ohne Redner als Lesedokument funktionieren (vollständig, detailliert).',
              correct: true,
              explanation:
                'Genau. Eine Folie, die beides gleichzeitig sein will, scheitert an beidem: Im Vortrag erschlägt sie, als Leseunterlage fehlt ihr der Kontext des Gesprochenen.',
            },
            {
              text: 'Weil Handouts aus rechtlichen Gründen ein anderes Format haben müssen als Präsentationen.',
              correct: false,
              explanation:
                'Rechtliche Formatvorgaben gibt es dafür nicht. Der Grund ist funktional: Vortragsunterstützung und Lesedokument stellen entgegengesetzte Anforderungen an Textmenge und Aufbau.',
            },
            {
              text: 'Die Trennung ist nur bei externen Präsentationen nötig – intern darf alles auf die Folien.',
              correct: false,
              explanation:
                'Auch intern liest das Publikum schneller, als du sprichst, und hört auf zuzuhören. Überladene Folien kosten überall Wirkung – die Trennung lohnt sich bei jedem Vortrag, der wirken soll.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'slides-less-s1',
          situation:
            'Dein Bereichsleiter bittet dich, deine Präsentation für das Management-Meeting vorab zu schicken: „Pack bitte alles Wichtige auf die Folien, einige lesen das nur und kommen nicht ins Meeting." Du weißt: Überladene Folien ruinieren deinen Vortrag.',
          choices: [
            {
              text: 'Du erstellst zwei Versionen aus einem Guss: schlanke Vortragsfolien für das Meeting und eine Dokumentenversion mit allen Details (z.B. über ausformulierte Notizen-Seiten), die vorab verschickt wird. Dem Bereichsleiter erklärst du kurz das Vorgehen.',
              quality: 'best',
              feedback:
                'Sehr gut: Du erfüllst beide Anforderungen, ohne eine davon zu opfern – die Leser bekommen ein vollständiges Dokument, das Meeting bekommt einen wirksamen Vortrag. Der Mehraufwand ist überschaubar, wenn du von Anfang an beide Versionen mitdenkst.',
            },
            {
              text: 'Du machst, was der Bereichsleiter sagt: Alle Details kommen auf die Folien. Im Vortrag springst du dann eben schneller durch und sagst: „Die Details können Sie nachlesen."',
              quality: 'ok',
              feedback:
                'Verständlich – du erfüllst die Anweisung und die Leser sind versorgt. Aber dein Vortrag zahlt den Preis: Das anwesende Management liest statt zuzuhören, und deine Kernbotschaften gehen im Textmeer unter. Gerade bei wichtigen Entscheidungsvorlagen ist das ein teurer Kompromiss, den eine zweite Version vermieden hätte.',
            },
            {
              text: 'Du ignorierst die Bitte und schickst nur deine schlanken Vortragsfolien – wer nicht ins Meeting kommt, kann ja jemanden fragen, der dabei war.',
              quality: 'bad',
              feedback:
                'Damit verprellst du genau die Entscheider, die nicht teilnehmen können: Sie erhalten Folien mit drei Wörtern und einem Bild – ohne deinen Vortrag unverständlich. Schlimmer noch: Du hast eine klare Bitte deines Bereichsleiters übergangen, statt eine Lösung anzubieten, die beiden Bedürfnissen gerecht wird.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'slides-less-f1',
          task: 'Verwandle diese überladene Folie in eine wirksame Vortragsfolie: Titel „Kundenzufriedenheit" mit den Bullets „Umfrage unter 1.200 Kunden durchgeführt", „Rücklaufquote 34 %", „Zufriedenheit gesamt: 71 % (Vorjahr: 82 %)", „Hauptkritikpunkt: Erreichbarkeit des Supports (58 % der Nennungen)", „Zweitgrößter Punkt: Lieferzeiten (23 %)", „Maßnahmenplan folgt in Q1". Formuliere den neuen Aussage-Titel und beschreibe, was auf der Folie zu sehen ist und was du stattdessen mündlich oder im Handout bringst.',
          placeholder:
            'Neuer Aussage-Titel: …\nAuf der Folie zu sehen: …\nMündlich / ins Handout: …',
          sampleSolution:
            'Neuer Aussage-Titel: „Zufriedenheit fällt von 82 auf 71 % – Haupttreiber ist der Support".\nAuf der Folie zu sehen: Die Zahl „71 %" groß im Zentrum, daneben klein der Vorjahreswert 82 % mit einem Abwärtspfeil. Darunter ein einziger kurzer Hinweis: „58 % der Kritik: Erreichbarkeit des Supports".\nMündlich / ins Handout: Methodik (1.200 Befragte, 34 % Rücklauf) erwähne ich mündlich in einem Satz und lege sie ins Handout. Die Lieferzeiten-Kritik und der Ausblick auf den Maßnahmenplan bekommen je eine eigene Folie – das sind eigene Botschaften. Details und alle Zahlen stehen vollständig im Handout.',
          checklist: [
            'Ich habe einen Aussage-Titel formuliert, der die Kernbotschaft enthält.',
            'Ich habe genau eine Botschaft auf der Folie gelassen und den Rest verlagert.',
            'Ich habe entschieden, was mündlich kommt und was ins Handout gehört.',
            'Ich habe aus weiteren eigenständigen Botschaften eigene Folien gemacht statt sie zu stapeln.',
          ],
        },
      ],
    },
    {
      id: 'slides-data',
      title: 'Daten visualisieren',
      theory: [
        {
          kind: 'text',
          body: 'Ein gutes Diagramm beantwortet eine Frage auf einen Blick. Ein schlechtes Diagramm stellt neue Fragen: Was soll ich hier sehen? Welche der zwölf Linien ist wichtig? Warum ist das 3D? Datenvisualisierung im Vortrag hat nur ein Ziel: Deine Botschaft soll in Sekunden erfassbar sein – denn länger schaut das Publikum nicht hin, bevor es wieder dir zuhört (oder eben nicht).\n\nDer Weg dahin besteht aus drei Entscheidungen: das richtige Diagramm für die Botschaft wählen, alles Überflüssige entfernen und das Wichtige gezielt hervorheben.',
        },
        {
          kind: 'text',
          heading: 'Das richtige Diagramm für die Botschaft',
          body: 'Die Diagrammwahl folgt nicht dem Geschmack, sondern der Botschaft. Willst du Kategorien vergleichen („Region Süd verkauft doppelt so viel wie Nord"), nimm Balken – das Auge vergleicht Längen präziser als alles andere. Willst du eine Entwicklung über Zeit zeigen („Die Kosten steigen seit sechs Quartalen"), nimm eine Linie. Willst du Anteile eines Ganzen zeigen („Ein Produkt macht die Hälfte des Umsatzes"), kann ein Kreisdiagramm passen – aber nur mit wenigen Segmenten, idealerweise zwei bis vier; ab fünf Anteilen sind Balken fast immer die bessere Wahl, weil das Auge Winkel schlecht vergleicht.\n\nUnd manchmal ist das beste Diagramm gar keins: Wenn deine Botschaft eine einzige Zahl ist („Wir haben 40 % gespart"), dann zeig diese Zahl groß – ein Diagramm mit zwei Balken drumherum macht sie nicht klarer.',
        },
        {
          kind: 'text',
          heading: 'Entrümpeln und hervorheben',
          body: 'Alles, was nicht zur Botschaft beiträgt, lenkt von ihr ab – weg damit. Die üblichen Verdächtigen: Gitterlinien (weg oder auf hellgrau reduzieren), Rahmen und Hintergrundfüllungen (weg), Schatten und Verläufe (weg) und vor allem 3D-Effekte (immer weg – sie verzerren die Werte und machen Vergleiche unmöglich). Auch doppelte Information ist Müll: Wenn die Werte am Balken stehen, braucht es keine Y-Achse mit Gitternetz mehr. Dieses Prinzip ist als Reduktion des „Chart Junk" bekannt – im Zweifel fliegt alles raus, was keine Daten zeigt.\n\nNach dem Entrümpeln kommt das Hervorheben: Gib allen Elementen eine zurückhaltende Farbe (Grau ist dein Freund) und nur dem einen Element, um das es geht, eine Signalfarbe. Ein Balkendiagramm mit neun grauen und einem farbigen Balken lenkt den Blick in einer Sekunde auf die Botschaft. Der Regenbogen-Look – jeder Balken eine andere Farbe – signalisiert dagegen: Alles ist gleich wichtig, also ist nichts wichtig. Und zuletzt die Beschriftung: direkt ans Element statt in die Legende. Jede Legende zwingt das Auge zum Hin- und Herspringen zwischen Farbe und Bedeutung – schreib den Namen der Linie einfach an die Linie.',
        },
        {
          kind: 'table',
          headers: ['Botschaft', 'Diagrammtyp', 'Typischer Fehler'],
          rows: [
            [
              'Kategorien vergleichen („Süd verkauft doppelt so viel")',
              'Balkendiagramm',
              'Kreisdiagramm mit acht Segmenten',
            ],
            [
              'Entwicklung über Zeit („Kosten steigen seit 6 Quartalen")',
              'Liniendiagramm',
              'Balkenreihe, bei der der Trend untergeht',
            ],
            [
              'Anteile eines Ganzen („Ein Produkt = halber Umsatz")',
              'Kreisdiagramm (max. 2-4 Segmente)',
              '3D-Torte mit Explosions-Effekt',
            ],
            [
              'Eine einzige Kernzahl („40 % gespart")',
              'Große Zahl, kein Diagramm',
              'Diagramm als Deko um eine Zahl herum',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Erst die Botschaft, dann der Diagrammtyp: Balken für Vergleiche, Linie für Zeitverläufe, Kreis nur für wenige Anteile.',
            'Eine einzelne Kernzahl braucht kein Diagramm – zeig sie groß.',
            'Entrümpeln: Gitterlinien, Rahmen, Schatten und vor allem 3D-Effekte entfernen – alles, was keine Daten zeigt, fliegt raus.',
            'Hervorheben statt Regenbogen: alles grau, nur das eine wichtige Element in Signalfarbe.',
            'Beschriftung direkt ans Element statt in die Legende – das Auge soll nicht springen müssen.',
          ],
        },
        {
          kind: 'example',
          title: 'Umsatzvergleich der fünf Regionen',
          good: 'Aussage-Titel: „Nur Region Ost verliert Umsatz". Ein schlichtes Balkendiagramm, vier Balken grau, der Ost-Balken rot. Die Werte stehen direkt an den Balken, keine Gitterlinien, keine Legende. Die Botschaft ist in zwei Sekunden erfasst.',
          bad: 'Titel: „Umsätze nach Region". Eine 3D-Torte mit fünf Segmenten in fünf kräftigen Farben, dazu eine Legende am rechten Rand, Prozentwerte mit zwei Nachkommastellen in einer separaten Tabelle darunter. Das Publikum dreht gedanklich die Torte, vergleicht Winkel, springt zwischen Legende und Segmenten – und übersieht das Problem in Region Ost komplett.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'slides-data-q1',
          question:
            'Du willst zeigen, dass die Supportkosten seit sechs Quartalen kontinuierlich steigen. Welcher Diagrammtyp passt am besten?',
          options: [
            {
              text: 'Ein Liniendiagramm – es macht die Entwicklung über Zeit als Verlauf sichtbar.',
              correct: true,
              explanation:
                'Richtig. Zeitverläufe sind der klassische Fall für Linien: Der Trend ist als aufsteigende Linie auf einen Blick erkennbar – genau das ist die Botschaft.',
            },
            {
              text: 'Ein Kreisdiagramm – es zeigt die Verteilung der Kosten übersichtlich.',
              correct: false,
              explanation:
                'Ein Kreis zeigt Anteile an einem Ganzen zu einem Zeitpunkt – für eine Entwicklung über sechs Quartale ist er ungeeignet, der Trend wäre unsichtbar.',
            },
            {
              text: 'Sechs einzelne Kreisdiagramme, eines pro Quartal – so sieht man jedes Quartal im Detail.',
              correct: false,
              explanation:
                'Das Publikum müsste sechs Kreise vergleichen und den Trend im Kopf rekonstruieren – genau die Arbeit, die dir eine einzige Linie abnimmt. Mehr Detail ist hier weniger Botschaft.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'slides-data-q2',
          question:
            'Warum ist die Kombination „alles grau, ein Element in Signalfarbe" dem Regenbogen-Diagramm überlegen?',
          options: [
            {
              text: 'Weil sie den Blick sofort auf die Botschaft lenkt – bei lauter verschiedenen Farben wirkt alles gleich wichtig, also nichts.',
              correct: true,
              explanation:
                'Genau. Farbe ist ein Hervorhebungsmittel, kein Dekor: Setzt du sie nur auf das eine relevante Element, hast du die Aufmerksamkeit des Publikums in einer Sekunde dort, wo du sie brauchst.',
            },
            {
              text: 'Weil graue Folien seriöser wirken und besser zum Corporate Design der meisten Firmen passen.',
              correct: false,
              explanation:
                'Es geht nicht um Seriosität oder CI, sondern um Aufmerksamkeitslenkung: Das Grau tritt zurück, damit die eine Signalfarbe die Botschaft markieren kann.',
            },
            {
              text: 'Weil viele Farben die Dateigröße der Präsentation unnötig erhöhen.',
              correct: false,
              explanation:
                'Die Dateigröße spielt hier keine Rolle. Das Problem des Regenbogens ist visuell: Er verteilt die Aufmerksamkeit gleichmäßig – und damit geht die Hierarchie der Botschaft verloren.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'slides-data-s1',
          situation:
            'Eine Kollegin bittet dich um Feedback zu ihrer wichtigsten Folie: ein 3D-Kreisdiagramm mit neun Segmenten in neun Farben plus Legende, Titel „Ticketverteilung nach Kategorie". Ihre eigentliche Botschaft, sagt sie, ist: „Fast die Hälfte aller Tickets betrifft Passwort-Resets – die könnten wir automatisieren."',
          choices: [
            {
              text: 'Du schlägst vor, von der Botschaft her neu zu bauen: Aussage-Titel („Fast jedes zweite Ticket ist ein Passwort-Reset"), ein flaches Balkendiagramm, der Passwort-Balken in Signalfarbe, die acht kleinen Kategorien grau oder zu „Sonstige" gebündelt, Werte direkt an den Balken.',
              quality: 'best',
              feedback:
                'Sehr gut: Du setzt die komplette Werkzeugkette ein – Botschaft in den Titel, passender Diagrammtyp (Balken statt 3D-Torte mit neun Winkeln), Hervorhebung statt Regenbogen, direkte Beschriftung. Die Automatisierungs-Chance ist jetzt in zwei Sekunden erfassbar.',
            },
            {
              text: 'Du empfiehlst, den 3D-Effekt zu entfernen und die Prozentwerte direkt an die Segmente zu schreiben – der Rest kann bleiben, die Daten stimmen ja.',
              quality: 'ok',
              feedback:
                'Beides sind echte Verbesserungen – 3D weg und direkte Beschriftung helfen. Aber das Grundproblem bleibt: Neun Kreissegmente in neun Farben verstecken die Kernbotschaft weiterhin, und der Themen-Titel verrät sie nicht. Die Folie wird besser, aber ihre Aufgabe – die Automatisierungs-Chance zeigen – erfüllt sie noch nicht.',
            },
            {
              text: 'Du sagst: „Sieht doch professionell aus – die 3D-Optik wirkt modern, und die vielen Farben zeigen, wie vielfältig die Ticketlandschaft ist."',
              quality: 'bad',
              feedback:
                'Damit bestätigst du genau die Fehler, die ihre Botschaft begraben: 3D verzerrt die Anteile, neun Farben nivellieren die Hierarchie, und „Vielfalt zeigen" war nie die Botschaft. Höfliches Feedback, das Probleme verschweigt, hilft deiner Kollegin nicht – ihre wichtigste Erkenntnis bleibt unsichtbar.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'slides-data-f1',
          task: 'Entwirf eine Visualisierung (als Textbeschreibung) für diese Daten und Botschaft: Monatliche Bearbeitungszeit pro Antrag in Minuten – Jan: 45, Feb: 44, Mär: 46, Apr: 45, Mai: 31, Jun: 29. Im Mai wurde das neue Workflow-Tool eingeführt. Deine Botschaft: Das Tool wirkt. Beschreibe Diagrammtyp, Titel, Hervorhebung und Beschriftung.',
          placeholder: 'Diagrammtyp: …\nAussage-Titel: …\nHervorhebung: …\nBeschriftung: …',
          sampleSolution:
            'Diagrammtyp: Liniendiagramm über die sechs Monate – es geht um eine Entwicklung über Zeit.\nAussage-Titel: „Seit dem neuen Workflow-Tool: ein Drittel weniger Bearbeitungszeit".\nHervorhebung: Die Linie bis April in Grau, ab Mai in Signalfarbe. Am Übergang eine dezente vertikale Markierung mit der Anmerkung „Einführung Workflow-Tool". Keine Gitterlinien, kein Rahmen, kein 3D.\nBeschriftung: Nur zwei Werte direkt an der Linie: „45 Min." am Plateau vor der Einführung und „29 Min." am Ende – die Monatsachse bleibt schlicht, eine Legende gibt es nicht. Wer mag, ergänzt groß daneben: „−35 %".',
          checklist: [
            'Ich habe den Diagrammtyp aus der Botschaft abgeleitet (Zeitverlauf → Linie).',
            'Ich habe einen Aussage-Titel formuliert, der die Erkenntnis enthält.',
            'Ich habe genau ein Element hervorgehoben und den Rest zurückgenommen.',
            'Ich habe die Beschriftung direkt ans Element gesetzt statt in eine Legende.',
            'Ich habe bewusst entrümpelt (keine Gitterlinien, kein 3D, keine Deko).',
          ],
        },
      ],
    },
    {
      id: 'slides-questions',
      title: 'Publikumsfragen souverän meistern',
      theory: [
        {
          kind: 'text',
          body: 'Viele fürchten die Fragerunde mehr als den Vortrag selbst – dabei ist sie deine größte Chance: Hier zeigst du, dass du dein Thema wirklich beherrschst, hier erfährst du, was das Publikum tatsächlich bewegt, und hier werden Entscheidungen oft erst gemacht. Eine Präsentation überzeugt selten gegen offene Fragen – aber fast immer mit gut beantworteten.\n\nDer Schlüssel liegt in der Haltung: Fragen sind kein Angriff, sondern Interesse. Wer eine Frage stellt, hat zugehört und beschäftigt sich mit deinem Thema. Selbst die kritische Frage ist wertvoller als höfliches Schweigen – denn unausgesprochene Einwände entscheiden hinterher gegen dich, ohne dass du dich wehren konntest.',
        },
        {
          kind: 'text',
          heading: 'Vorbereitung und die Grundtechnik: Zuhören – Wertschätzen – Antworten',
          body: 'Souveränität in der Fragerunde beginnt vor dem Termin: Antizipiere Fragen. Schreibe die zehn wahrscheinlichsten Fragen auf – inklusive der drei unangenehmsten – und bereite Kernantworten vor. Für erwartbare Detailfragen lohnen Backup-Folien nach dem letzten Slide: „Gute Frage – dazu habe ich etwas vorbereitet" ist einer der stärksten Momente, die eine Fragerunde bieten kann.\n\nIn der Situation selbst trägt dich eine einfache Dreier-Routine: Zuhören – die Frage komplett ausreden lassen, nicht innerlich schon die Antwort bauen. Wertschätzen – kurz und echt („Wichtiger Punkt", „Danke, das klärt eine Lücke") oder die Frage für alle wiederholen, was zwei weitere Vorteile hat: Der ganze Raum kennt die Frage, und du gewinnst Denkzeit. Vorsicht nur vor dem inflationären „Gute Frage!" vor jeder Antwort – es nutzt sich ab. Antworten – kurz und zur Sache, idealerweise erst die Kernaussage, dann ein Satz Begründung. Nicht dozieren: Eine Frage ist keine Einladung zum zweiten Vortrag.',
        },
        {
          kind: 'text',
          heading: '„Ich weiß es nicht", schwierige Frager und die Brücke zurück',
          body: 'Was tun, wenn du die Antwort nicht kennst? Niemals bluffen – ein einziger ertappter Bluff kostet mehr Glaubwürdigkeit als zehn ehrliche Wissenslücken. Die souveräne Formel: zugeben, zusichern, liefern. „Das kann ich Ihnen jetzt nicht seriös beantworten. Ich kläre es und melde mich bis Freitag bei Ihnen." Und dann: wirklich liefern – daran wirst du gemessen.\n\nFür schwierige Frager gilt: Trenne die Person von der Frage. Beim aggressiv Fragenden beantwortest du den sachlichen Kern ruhig und ignorierst die Schärfe – meist entwaffnet genau das. Beim Vielredner, der ein Koreferat hält, hilft freundliches Unterbrechen mit Zusammenfassung: „Wenn ich Sie richtig verstehe, ist Ihre Frage, ob … – darauf antworte ich gern." Wiederholt sich jemand hartnäckig, verlagere das Gespräch: „Das Thema verdient mehr Zeit, als wir hier haben – lassen Sie uns das bilateral vertiefen." So bleibst du respektvoll und schützt zugleich die Zeit der anderen.\n\nUnd zuletzt die Königstechnik: die Brücke zurück zur Kernbotschaft. Jede Antwort darf dort enden, wo du hinwillst: „… und genau deshalb schlagen wir die schrittweise Einführung vor." Auch das Ende der gesamten Fragerunde gehört dir: Nicht mit einer zufälligen letzten Antwort schließen, sondern mit einem vorbereiteten Schlusssatz, der deine Kernbotschaft ein letztes Mal setzt.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Fragen sind Interesse, kein Angriff – unausgesprochene Einwände sind gefährlicher als kritische Fragen.',
            'Vorbereitung: die zehn wahrscheinlichsten Fragen antizipieren, Backup-Folien für erwartbare Details.',
            'Dreier-Routine: Zuhören (ausreden lassen) – Wertschätzen/Wiederholen (gibt Denkzeit) – kurz Antworten.',
            'Bei Wissenslücken: zugeben, Klärung zusichern, wirklich liefern – niemals bluffen.',
            'Schwierige Frager: Sachkern beantworten, Vielredner freundlich zusammenfassend unterbrechen, Dauerthemen bilateral verlagern.',
            'Die Brücke nutzen: Antworten bei der Kernbotschaft enden lassen – und die Fragerunde mit einem vorbereiteten Schlusssatz.',
          ],
        },
        {
          kind: 'example',
          title: 'Kritische Frage nach den Projektkosten',
          good: 'Frage: „Ihre Kostenschätzung wirkt optimistisch – was, wenn das Doppelte draus wird?" Antwort: „Wichtiger Punkt, das Risiko sehen wir auch. Deshalb enthält die Kalkulation einen Puffer von 20 %, und wir haben Ausstiegspunkte nach jeder Phase definiert – das Maximalrisiko pro Phase liegt bei 50.000 Euro. Genau dafür ist das schrittweise Vorgehen gedacht, das ich vorgeschlagen habe."',
          bad: 'Frage: „Ihre Kostenschätzung wirkt optimistisch – was, wenn das Doppelte draus wird?" Antwort: „Also unsere Zahlen sind definitiv belastbar, da bin ich ganz sicher, das wird nicht passieren. Wer hat sonst noch eine Frage?" – Der Einwand ist nicht entkräftet, der Fragende fühlt sich abgebügelt, und der ganze Raum hat es gesehen.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'slides-questions-q1',
          question:
            'Warum lohnt es sich, eine gestellte Frage kurz zu wiederholen oder zusammenzufassen, bevor du antwortest?',
          options: [
            {
              text: 'Der ganze Raum kennt dann die Frage, du zeigst dem Fragenden, dass du zugehört hast – und du gewinnst wertvolle Denkzeit.',
              correct: true,
              explanation:
                'Richtig – gleich drei Effekte auf einmal. Gerade in größeren Räumen hört oft die Hälfte die Frage nicht, und die Sekunden des Wiederholens strukturieren deine Antwort.',
            },
            {
              text: 'Weil es protokollarisch vorgeschrieben ist, Fragen vor der Antwort zu wiederholen.',
              correct: false,
              explanation:
                'Eine Vorschrift gibt es nicht – es ist eine Technik mit praktischem Nutzen: Verständnis sichern, Wertschätzung zeigen, Denkzeit gewinnen.',
            },
            {
              text: 'Damit du die Frage beim Wiederholen so umformulieren kannst, dass sie leichter zu beantworten ist.',
              correct: false,
              explanation:
                'Vorsicht – genau das darf nicht passieren: Wer Fragen beim Wiederholen entschärft oder verbiegt, verliert Vertrauen. Die Zusammenfassung muss den Kern der Frage ehrlich treffen.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'slides-questions-q2',
          question:
            'Du wirst nach einer Detailzahl gefragt, die du nicht kennst. Was ist die souveräne Reaktion?',
          options: [
            {
              text: 'Ehrlich zugeben, eine Klärung mit konkretem Termin zusichern – und dann tatsächlich liefern.',
              correct: true,
              explanation:
                'Genau: zugeben, zusichern, liefern. Eine ehrliche Wissenslücke mit verlässlichem Follow-up stärkt deine Glaubwürdigkeit sogar – gemessen wirst du daran, ob die Antwort wirklich kommt.',
            },
            {
              text: 'Eine plausible Schätzung als Fakt nennen – Hauptsache, du wirkst nicht unsicher.',
              correct: false,
              explanation:
                'Das ist Bluffen, und es ist Gift: Fliegt die geratene Zahl auf – und im Raum sitzt oft jemand, der es weiß –, ist deine gesamte Präsentation entwertet, nicht nur diese eine Antwort.',
            },
            {
              text: 'Die Frage überhören und schnell zur nächsten Wortmeldung übergehen.',
              correct: false,
              explanation:
                'Das Ausweichen sieht der ganze Raum – es wirkt unsicherer als jedes ehrliche „Das muss ich klären". Der Fragende fühlt sich zudem übergangen und wird zum Gegner deiner Vorlage.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'slides-questions-s1',
          situation:
            'In deiner Fragerunde meldet sich ein Kollege und redet seit zwei Minuten ohne erkennbare Frage – er referiert über seine eigenen Erfahrungen mit einem ähnlichen Projekt. Die Zeit läuft, drei andere haben die Hand oben, und dein wichtigster Entscheider schaut bereits auf die Uhr.',
          choices: [
            {
              text: 'Du unterbrichst freundlich mit einer Zusammenfassung: „Danke für die Einblicke – wenn ich einen Kern herausgreifen darf: Ihre Sorge ist, dass die Einführung länger dauert als geplant, richtig? Dazu sage ich gern etwas." Nach kurzer Antwort nimmst du die nächste Wortmeldung dran.',
              quality: 'best',
              feedback:
                'Sehr gut: Freundliches Unterbrechen mit Zusammenfassung ist genau die Technik für Vielredner – du würdigst den Beitrag, destillierst eine beantwortbare Frage heraus und schützt die Zeit der drei Wartenden und deines Entscheiders. So behältst du die Moderation, ohne jemanden bloßzustellen.',
            },
            {
              text: 'Du lässt ihn vollständig ausreden – unterbrechen wäre unhöflich – und hoffst, dass am Ende doch noch eine Frage kommt.',
              quality: 'ok',
              feedback:
                'Höflich gedacht, aber du verwechselst Respekt vor der Person mit Verzicht auf Moderation: Während er redet, verlierst du drei Fragesteller und die Aufmerksamkeit deines Entscheiders – womöglich endet die Runde, bevor die wichtigste Frage gestellt wurde. Die Fragerunde zu führen ist dein Job, nicht Unhöflichkeit.',
            },
            {
              text: 'Du unterbrichst ihn spitz: „Entschuldigung, gibt es da auch eine Frage? Wir haben nicht ewig Zeit."',
              quality: 'bad',
              feedback:
                'Inhaltlich berechtigt, im Ton verheerend: Du stellst ihn vor allen bloß, und der Raum solidarisiert sich eher mit ihm als mit dir. Dieselbe Unterbrechung mit Wertschätzung und Zusammenfassung hätte dasselbe erreicht – ohne dir einen Gegner für den Rest des Termins zu schaffen.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'slides-questions-f1',
          task: 'Bereite dich auf die Fragerunde deiner nächsten Präsentation vor (z.B. ein Vorschlag zur Einführung eines neuen Tools): Notiere die drei unangenehmsten Fragen, die kommen könnten, je eine Kernantwort in 1-2 Sätzen – und formuliere für eine der Antworten die Brücke zurück zu deiner Kernbotschaft.',
          placeholder:
            'Frage 1: …\nAntwort 1: …\nFrage 2: …\nAntwort 2: …\nFrage 3: …\nAntwort 3: …\nBrücke zur Kernbotschaft: …',
          sampleSolution:
            'Frage 1: „Was kostet das wirklich – inklusive Schulung und Migration?"\nAntwort 1: „Gesamtkosten im ersten Jahr: 48.000 Euro inklusive Schulung und Migration – ab Jahr zwei stehen dem rund 60.000 Euro jährliche Einsparung gegenüber."\nFrage 2: „Warum jetzt? Das alte System funktioniert doch."\nAntwort 2: „Der Support für das Altsystem endet in 14 Monaten – wenn wir jetzt starten, wechseln wir geplant statt unter Zwang."\nFrage 3: „Was ist, wenn das Team das neue Tool nicht annimmt?"\nAntwort 3: „Das ist das größte Risiko, deshalb starten wir mit einem Pilotteam aus Freiwilligen und passen den Rollout an deren Feedback an."\nBrücke zur Kernbotschaft (zu Frage 3): „… und genau deshalb schlage ich den stufenweisen Rollout vor: Wir sammeln Akzeptanz, bevor wir skalieren – das ist der Kern meines Vorschlags."',
          checklist: [
            'Ich habe die drei wirklich unangenehmsten Fragen notiert, nicht die bequemsten.',
            'Ich habe zu jeder Frage eine Kernantwort in 1-2 Sätzen formuliert (keine Monologe).',
            'Ich habe mindestens eine Antwort mit einer Brücke zu meiner Kernbotschaft beendet.',
            'Ich habe geprüft, wo ich bei Wissenslücken ehrlich „Das kläre ich nach" sagen würde statt zu bluffen.',
          ],
        },
      ],
    },
  ],
}
