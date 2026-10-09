import type { Module } from '@/types/content'

export const presentationStructure: Module = {
  id: 'presentation-structure',
  title: 'Präsentation: Ziel & Struktur',
  description:
    'Bevor die erste Folie entsteht: Ziel und Publikum bestimmen, die Kernbotschaft schärfen und mit Pyramidenprinzip und Dramaturgie eine Struktur bauen, die trägt.',
  category: 'presentation',
  lessons: [
    {
      id: 'structure-audience',
      title: 'Ziel & Zielgruppe bestimmen',
      theory: [
        {
          kind: 'text',
          body: 'Die meisten schwachen Präsentationen scheitern nicht an den Folien, sondern lange vorher: Es wurde nie geklärt, was die Präsentation eigentlich erreichen soll. Das Ergebnis kennt jeder – 40 Folien Faktensammlung, nach denen das Publikum höflich nickt und nichts passiert.\n\nProfis beginnen deshalb nicht mit PowerPoint, sondern mit zwei Fragen: Was will ich bei diesem Publikum erreichen? Und wer sitzt da überhaupt? Erst wenn beides beantwortet ist, lohnt sich die Arbeit an Struktur und Folien – alles andere ist Dekoration ohne Richtung.',
        },
        {
          kind: 'text',
          heading: 'Das Ziel: Wissen, fühlen, tun',
          body: 'Ein tragfähiges Präsentationsziel beantwortet drei Fragen: Was soll das Publikum danach WISSEN (die zentrale Information oder Erkenntnis)? Was soll es FÜHLEN (Vertrauen, Dringlichkeit, Zuversicht, Neugier)? Und vor allem: Was soll es TUN (dem Budget zustimmen, den Piloten freigeben, das neue Tool ausprobieren)?\n\nDie Tun-Frage ist die wichtigste und wird am häufigsten vergessen. „Ich informiere über den Projektstand" ist kein Ziel, sondern eine Beschäftigung. Ein Ziel klingt so: „Der Lenkungsausschuss soll nach 15 Minuten die Zusatzressourcen für Phase 2 freigeben." Mit diesem Satz entscheidet sich automatisch, was in die Präsentation gehört – und was nicht: Alles, was der Freigabe dient, bleibt drin; alles andere fliegt raus, egal wie interessant es ist.\n\nDaraus ergibt sich auch die Kernbotschaft: die eine Aussage, die hängen bleiben soll, formuliert als vollständiger Satz mit Standpunkt. Nicht „Projektstand Q3" (ein Thema), sondern „Das Projekt liegt im Plan – aber nur, wenn wir jetzt zwei zusätzliche Entwickler besetzen" (eine Botschaft). Der Test: Wenn ein Zuhörer nach drei Tagen gefragt wird, worum es ging, sollte er genau diesen Satz sinngemäß wiedergeben können. Passt die Kernbotschaft nicht in einen Satz, ist sie noch nicht fertig gedacht.',
        },
        {
          kind: 'text',
          heading: 'Zielgruppenanalyse: Wer sitzt da – und was braucht er?',
          body: 'Dieselbe Botschaft braucht für verschiedene Zielgruppen völlig verschiedene Präsentationen. Vor der Strukturarbeit klärst du deshalb: Was weiß das Publikum schon über das Thema – muss ich Grundlagen legen oder kann ich einsteigen? Welche Interessen und Sorgen bringt es mit – was ist für diese Menschen ein Gewinn, was eine Bedrohung? Welche Haltung hat es zu meinem Anliegen – wohlwollend, neutral, skeptisch? Und: Wer entscheidet eigentlich, und wer beeinflusst die Entscheidung?\n\nFür die Geschäftsführung zählen Wirkung aufs Geschäft, Risiken und die Entscheidungsfrage – in zehn Minuten, Ergebnis zuerst. Für das Fachteam zählen die Umsetzungsdetails, die Methodik, die offenen Punkte. Wer dem Vorstand Datenbankdetails präsentiert oder dem Fachteam nur Hochglanz-Visionen, verliert beide. Bei gemischtem Publikum gilt: Richte die Präsentation an den Entscheidern aus und halte die Detailtiefe für Rückfragen im Anhang bereit.',
        },
        {
          kind: 'table',
          headers: ['Analysefrage', 'Warum sie zählt', 'Konsequenz für die Präsentation'],
          rows: [
            [
              'Was weiß das Publikum schon?',
              'Entscheidet über Einstiegsniveau und Fachsprache',
              'Grundlagen legen oder direkt einsteigen; Fachbegriffe erklären oder nutzen',
            ],
            [
              'Was sind seine Interessen und Sorgen?',
              'Botschaften wirken nur, wenn sie andocken',
              'Nutzen in der Sprache des Publikums formulieren; Sorgen aktiv adressieren',
            ],
            [
              'Wie steht es zu meinem Anliegen?',
              'Skeptiker brauchen anderes Material als Unterstützer',
              'Bei Skepsis: Einwände vorwegnehmen, Belege verstärken, kleinere Schritte anbieten',
            ],
            [
              'Wer entscheidet?',
              'Die Präsentation muss die Entscheider erreichen',
              'Struktur und Flughöhe an den Entscheidern ausrichten, Details in den Anhang',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Erst Ziel, dann Struktur, dann Folien – nie umgekehrt.',
            'Das Ziel in drei Dimensionen denken: Was soll das Publikum wissen, fühlen und TUN?',
            'Die Kernbotschaft ist ein vollständiger Satz mit Standpunkt – kein Themenname.',
            'Zielgruppenanalyse: Vorwissen, Interessen, Haltung und Entscheiderrolle klären.',
            'Alles, was dem Ziel nicht dient, fliegt raus – egal wie interessant es ist.',
          ],
        },
        {
          kind: 'example',
          title: 'Kernbotschaft formulieren',
          good: '„Wir sollten den Support-Chatbot im ersten Quartal pilotieren, weil er 60 Prozent der Standardanfragen abfangen kann und unser Team damit endlich Zeit für die komplexen Fälle gewinnt."',
          bad: '„Agenda: 1. Einführung Chatbots, 2. Marktübersicht, 3. Technische Architektur, 4. Mögliche Anwendungsfälle, 5. Diskussion." – 35 Folien später weiß niemand, was der Vortragende eigentlich wollte.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'structure-audience-q1',
          question: 'Woran erkennst du eine tragfähige Kernbotschaft für eine Präsentation?',
          options: [
            {
              text: 'Sie ist ein vollständiger Satz mit Standpunkt, den das Publikum auch Tage später noch sinngemäß wiedergeben können soll.',
              correct: true,
              explanation:
                'Richtig. „Projektstand Q3" ist ein Thema, keine Botschaft. Erst ein Satz mit Aussage und Standpunkt („Wir liegen im Plan, wenn wir jetzt nachbesetzen") gibt der Präsentation Richtung und bleibt hängen.',
            },
            {
              text: 'Sie fasst alle wichtigen Punkte der Präsentation in einer Aufzählung zusammen.',
              correct: false,
              explanation:
                'Eine Aufzählung ist eine Agenda, keine Kernbotschaft. Die Kernbotschaft ist genau EINE Aussage – wer sich drei Botschaften wünscht, bekommt erfahrungsgemäß null, die behalten werden.',
            },
            {
              text: 'Sie nennt das Thema möglichst präzise, zum Beispiel „Quartalszahlen Vertrieb Region Süd".',
              correct: false,
              explanation:
                'Das ist ein präziser Titel, aber eben nur ein Thema. Es fehlt der Standpunkt: WAS ist mit den Quartalszahlen – gut, schlecht, Handlungsbedarf? Erst die Antwort darauf ist die Kernbotschaft.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'structure-audience-q2',
          question:
            'Du präsentierst dasselbe Projekt erst dem Vorstand, dann dem Entwicklungsteam. Was folgt aus der Zielgruppenanalyse?',
          options: [
            {
              text: 'Zwei unterschiedliche Präsentationen: Für den Vorstand Geschäftswirkung, Risiken und Entscheidungsfrage kompakt zuerst – für das Team Umsetzungsdetails, Methodik und offene Punkte.',
              correct: true,
              explanation:
                'Genau. Vorwissen, Interessen und Entscheidungsrolle unterscheiden sich fundamental – dieselben Folien für beide Gruppen verfehlen zwangsläufig mindestens eine davon.',
            },
            {
              text: 'Eine einzige, besonders ausführliche Präsentation, die alle Details für beide Gruppen enthält – das spart Arbeit und ist fair.',
              correct: false,
              explanation:
                'Verlockend, aber wirkungslos: Der Vorstand steigt bei den Architekturdetails aus, das Team langweilt sich bei den Business-Grundlagen. Eine Präsentation für alle ist meist eine Präsentation für niemanden.',
            },
            {
              text: 'Die Vorstandspräsentation muss fachlich anspruchsvoller sein, weil der Vorstand hierarchisch höher steht.',
              correct: false,
              explanation:
                'Hierarchie bedeutet nicht Fachtiefe – im Gegenteil: Der Vorstand ist im Fachthema meist weiter weg und braucht Flughöhe, Geschäftsrelevanz und eine klare Entscheidungsvorlage statt technischer Details.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'structure-audience-s1',
          situation:
            'Deine Chefin bittet dich, nächste Woche der Geschäftsführung „mal den Stand beim Thema Digitalisierung im Kundenservice" zu präsentieren – 15 Minuten. Mehr sagt sie nicht. Du setzt dich an die Vorbereitung.',
          choices: [
            {
              text: 'Du klärst zuerst mit deiner Chefin: „Was soll die Geschäftsführung danach idealerweise entscheiden oder tun? Und gibt es Vorbehalte, die ich kennen sollte?" – und baust die Präsentation dann auf dieses Ziel.',
              quality: 'best',
              feedback:
                'Genau richtig: Hinter einem diffusen Auftrag steckt fast immer ein konkretes Anliegen – vielleicht soll Budget für die nächste Phase gesichert werden. Wer das Ziel kennt, präsentiert in 15 Minuten eine Entscheidungsvorlage statt einer Faktensammlung.',
            },
            {
              text: 'Du nimmst die 60 Folien aus dem letzten internen Statusmeeting und kürzt sie auf die 20 wichtigsten.',
              quality: 'ok',
              feedback:
                'Immerhin kürzt du – aber du kürzt Material, das für ein anderes Publikum mit anderem Ziel gebaut wurde. 20 Folien in 15 Minuten sind zudem zu viel. Ohne geklärtes Ziel bleibt es eine verdichtete Statusschau, bei der die Geschäftsführung am Ende fragt: „Und was wollen Sie jetzt von uns?"',
            },
            {
              text: 'Du sammelst alles, was es zum Thema gibt – Marktstudien, Tool-Vergleiche, Prozessdiagramme –, damit du auf jede mögliche Frage vorbereitet bist.',
              quality: 'bad',
              feedback:
                'Vollständigkeit ersetzt kein Ziel: Du investierst Tage in Material, von dem 90 Prozent nie zur Sprache kommen, und die Präsentation wird ein Themenbuffet ohne Botschaft. Auf Rückfragen bereitest du dich besser gezielt vor – mit einem Anhang, nicht mit einem Rundumschlag im Hauptteil.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'structure-audience-f1',
          task: 'Du willst in der nächsten Teamleiterrunde erreichen, dass dein Vorschlag für ein vierteljährliches Kundenfeedback-Panel beschlossen wird. Formuliere deine Präsentationsvorbereitung: das Ziel in den drei Dimensionen (wissen/fühlen/tun) und die Kernbotschaft in genau einem Satz.',
          placeholder: 'Wissen: …\nFühlen: …\nTun: …\nKernbotschaft (1 Satz): …',
          sampleSolution:
            'Wissen: Die Teamleiter sollen wissen, dass wir Produktentscheidungen bisher ohne systematisches Kundenfeedback treffen – und dass ein Panel mit zwölf Kunden pro Quartal nur etwa zwei Personentage kostet.\nFühlen: Sie sollen die Lücke als echtes Risiko empfinden (zwei Fehlentwicklungen im letzten Jahr gingen genau darauf zurück) und zugleich Zuversicht spüren, dass der Aufwand überschaubar ist.\nTun: Sie sollen heute dem Start des Panels im nächsten Quartal zustimmen und je Team eine Ansprechperson benennen.\nKernbotschaft: „Mit einem vierteljährlichen Kundenpanel von nur zwei Personentagen Aufwand verhindern wir Fehlentwicklungen wie im letzten Jahr – deshalb bitte ich euch heute um die Zustimmung zum Start im nächsten Quartal."',
          checklist: [
            'Ich habe alle drei Zieldimensionen (wissen, fühlen, tun) konkret ausgefüllt.',
            'Mein Tun-Ziel ist eine beobachtbare Handlung des Publikums (Zustimmung, Benennung, Freigabe), kein vages „überzeugt sein".',
            'Meine Kernbotschaft ist genau ein vollständiger Satz mit klarem Standpunkt.',
            'Die Kernbotschaft enthält die Handlungsaufforderung oder führt direkt auf sie zu.',
          ],
        },
      ],
    },
    {
      id: 'structure-pyramid',
      title: 'Das Pyramidenprinzip',
      theory: [
        {
          kind: 'text',
          body: 'Die meisten Präsentationen erzählen ihre Geschichte wie ein Forschungsbericht: erst die Ausgangslage, dann die Methode, dann die Analyse – und ganz am Ende, auf Folie 38, die Schlussfolgerung. Das Problem: Business-Publikum denkt nicht wie ein Forscher, sondern wie ein Entscheider. Es will zuerst wissen, worauf alles hinausläuft – und dann selbst entscheiden, wie tief es einsteigen will.\n\nGenau dafür wurde das Pyramidenprinzip entwickelt: von Barbara Minto, ehemals Beraterin bei McKinsey. Es ist der Standard für entscheiderorientierte Kommunikation – in Präsentationen genauso wie in E-Mails und Management-Vorlagen.',
        },
        {
          kind: 'text',
          heading: 'So funktioniert die Pyramide',
          body: 'Das Pyramidenprinzip stellt die gewohnte Reihenfolge auf den Kopf: Die Hauptaussage kommt zuerst – an der Spitze der Pyramide steht deine Kernbotschaft als Antwort auf die zentrale Frage des Publikums. Darunter folgt die zweite Ebene: drei bis maximal fünf Schlüsselargumente, die die Hauptaussage stützen. Erst auf der dritten Ebene kommen Details, Daten und Belege, die wiederum die einzelnen Argumente untermauern.\n\nFür jede Ebene gelten zwei Regeln. Erstens: Jede Aussage muss durch die Punkte darunter begründet werden – wer zur Hauptaussage „Warum?" fragt, bekommt die Antwort auf der nächsten Ebene. Zweitens: Punkte auf derselben Ebene müssen von gleicher Art und überschneidungsfrei sein – jedes Argument steht für sich, zusammen decken sie die Begründung vollständig ab.\n\nIn der Präsentation heißt das konkret: Nach dem Einstieg nennst du deine Kernbotschaft und kündigst die drei Argumente an („Ich empfehle den Anbieter Nordwind – aus drei Gründen: Kosten, Integrationsfähigkeit und Referenzen"). Dann gehst du Argument für Argument durch, jeweils mit den nötigsten Belegen. Die Tiefe steuert das Publikum über Rückfragen – dafür hast du den Anhang.',
        },
        {
          kind: 'text',
          heading: 'Pyramide oder Krimi – wann passt welche Struktur?',
          body: 'Die Alternative zur Pyramide ist die chronologische oder „Krimi"-Struktur: Spannung aufbauen, Indizien präsentieren, die Auflösung ans Ende. Sie hat ihren Platz – aber seltener, als viele denken.\n\nDie Pyramide passt fast immer im Business-Alltag: bei Entscheidungsvorlagen, Statusberichten, Empfehlungen, knappen Zeitfenstern. Ihre Stärken: Das Wichtigste ist gesagt, selbst wenn der Termin nach fünf Minuten abgebrochen wird; das Publikum kann jedem Argument folgen, weil es weiß, wohin die Reise geht; und Entscheider fühlen sich respektiert, weil niemand ihre Zeit mit Spannungsbögen füllt.\n\nDie Krimi-Struktur passt, wenn der Weg selbst die Botschaft ist: bei Keynotes und Impulsvorträgen, die inspirieren sollen, bei Change-Themen, bei denen das Publikum eine liebgewonnene Annahme erst selbst als Problem erkennen muss, bevor es die Lösung akzeptiert – oder wenn die Schlussfolgerung so unbequem ist, dass sie ohne vorherigen Problemaufbau sofort Abwehr auslöst. Der Preis: Sie braucht Zeit, Dramaturgie-Können und ein Publikum, das sie dir lässt. Vor einem ungeduldigen Lenkungsausschuss ist der Krimi ein Risiko – die gefürchtete Frage „Kommen Sie bitte zum Punkt" ist sein natürlicher Feind.',
        },
        {
          kind: 'table',
          headers: ['Kriterium', 'Pyramide (Ergebnis zuerst)', 'Krimi (Auflösung am Ende)'],
          rows: [
            [
              'Typische Anlässe',
              'Entscheidungsvorlage, Statusbericht, Empfehlung',
              'Keynote, Impulsvortrag, Change-Story',
            ],
            [
              'Publikum',
              'Entscheider, wenig Zeit, ergebnisorientiert',
              'Offenes Publikum mit Zeit und Interesse am Weg',
            ],
            [
              'Stärke',
              'Kernbotschaft kommt sicher an, auch bei Abbruch nach 5 Minuten',
              'Emotionale Wirkung, Publikum vollzieht die Erkenntnis selbst nach',
            ],
            [
              'Risiko',
              'Wirkt nüchtern; wenig Spannungsbogen',
              '„Kommen Sie zum Punkt!" – Botschaft fällt dem Zeitdruck zum Opfer',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Pyramidenprinzip (Barbara Minto): Hauptaussage zuerst, dann 3–5 Schlüsselargumente, dann Details.',
            'Jede Ebene beantwortet das „Warum?" der Ebene darüber.',
            'Argumente derselben Ebene: überschneidungsfrei und zusammen vollständig.',
            'Pyramide ist der Standard für Entscheider-Kommunikation – der Krimi die Ausnahme für Inspiration und Change.',
            'Test für die Pyramide: Würde der Termin nach fünf Minuten enden – wäre das Wichtigste gesagt?',
          ],
        },
        {
          kind: 'example',
          title: 'Empfehlung an den Lenkungsausschuss',
          good: '„Meine Empfehlung: Wir verschieben den Go-live um vier Wochen. Drei Gründe: Erstens sind zwei kritische Schnittstellen noch nicht abgenommen. Zweitens fällt der bisherige Termin mitten in die Inventur unseres größten Kunden. Drittens kostet die Verschiebung 40.000 Euro – ein Fehlstart würde uns ein Vielfaches kosten. Zu jedem Punkt habe ich Details, wo gewünscht."',
          bad: '„Lassen Sie mich zunächst die Projekthistorie seit Januar aufrollen. Dann zeige ich Ihnen die Testprotokolle der letzten acht Wochen im Detail, danach die Urlaubsplanung des Teams – und am Ende würde ich gern über den Go-live-Termin sprechen."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'structure-pyramid-q1',
          question:
            'Wie ist eine Präsentation nach dem Pyramidenprinzip von Barbara Minto aufgebaut?',
          options: [
            {
              text: 'Hauptaussage zuerst, darunter drei bis fünf stützende Schlüsselargumente, darunter erst die Details und Belege.',
              correct: true,
              explanation:
                'Richtig. Die Spitze beantwortet die zentrale Frage des Publikums sofort; jede tiefere Ebene beantwortet das „Warum?" der Ebene darüber. Die Detailtiefe steuert das Publikum über Rückfragen.',
            },
            {
              text: 'Chronologisch: Ausgangslage, Vorgehen, Analyse und am Ende die Schlussfolgerung.',
              correct: false,
              explanation:
                'Das ist genau die Struktur, die das Pyramidenprinzip umdreht. Chronologie entspricht dem Arbeitsprozess des Erstellers – nicht dem Informationsbedürfnis eines Entscheiders.',
            },
            {
              text: 'Vom Detail zum Großen: erst Daten zeigen, daraus vor dem Publikum die Argumente entwickeln, zum Schluss die These.',
              correct: false,
              explanation:
                'Das ist eine induktive Krimi-Dramaturgie. Sie kann in Keynotes funktionieren, ist aber das Gegenteil der Pyramide – und vor ungeduldigen Entscheidern riskant.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'structure-pyramid-q2',
          question: 'In welcher Situation ist die „Krimi"-Struktur der Pyramide überlegen?',
          options: [
            {
              text: 'Bei einem Impulsvortrag zu einem Change-Thema, bei dem das Publikum eine vertraute Annahme erst selbst als Problem erkennen soll, bevor es die Lösung akzeptiert.',
              correct: true,
              explanation:
                'Genau. Wenn die Schlussfolgerung ohne Problemaufbau Abwehr auslösen würde, braucht es den Weg über die gemeinsam nachvollzogene Erkenntnis – das ist die Stärke der Dramaturgie mit später Auflösung.',
            },
            {
              text: 'Bei einer Budgetvorlage vor dem Vorstand, der nur zehn Minuten Zeit hat.',
              correct: false,
              explanation:
                'Das ist der klassische Fall FÜR die Pyramide: knappes Zeitfenster, Entscheidungsfrage, ergebnisorientiertes Publikum. Ein Spannungsbogen würde hier als Zeitverschwendung empfunden – und riskiert, dass die Botschaft dem Abbruch zum Opfer fällt.',
            },
            {
              text: 'Immer dann, wenn die eigenen Argumente schwach sind – die Spannung lenkt davon ab.',
              correct: false,
              explanation:
                'Keine Struktur rettet schwache Argumente – im Krimi fällt die dünne Auflösung sogar besonders unangenehm auf, weil die aufgebaute Erwartung enttäuscht wird. Erst Substanz, dann Dramaturgie.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'structure-pyramid-s1',
          situation:
            'Du hast drei Wochen lang CRM-Anbieter evaluiert und präsentierst morgen dein Ergebnis der Bereichsleitung: 20 Minuten, danach soll entschieden werden. Dein Kollege rät dir: „Zeig erst mal den ganzen Auswahlprozess und alle zwölf Kriterien im Detail – sonst denken die, du hättest es dir leicht gemacht."',
          choices: [
            {
              text: 'Du eröffnest mit der Empfehlung und den drei wichtigsten Gründen, gehst diese dann einzeln durch – und packst die vollständige Kriterienmatrix und den Prozess in den Anhang für Rückfragen.',
              quality: 'best',
              feedback:
                'Genau nach Minto: Die Entscheidung steht im Zentrum, die Argumente stützen sie, die Gründlichkeit beweist du bei Bedarf über den Anhang. Dass du auf jede Detailfrage souverän antworten kannst, zeigt die Sorgfalt besser als 20 Prozessfolien.',
            },
            {
              text: 'Du folgst dem Rat halb: erst zehn Minuten Auswahlprozess und Methodik, dann die Empfehlung in der zweiten Hälfte.',
              quality: 'ok',
              feedback:
                'Besser als die Auflösung ganz am Ende – aber du verbrennst die erste Hälfte mit Methodik, bevor jemand weiß, wozu sie dient. Läuft die Diskussion früh los oder wird der Termin verkürzt, hast du noch nichts Entscheidbares gesagt. Dreh es um: Empfehlung zuerst, Methodik auf Nachfrage.',
            },
            {
              text: 'Du baust es als Spannungsbogen auf: Anbieter für Anbieter mit allen Stärken und Schwächen, und auf der letzten Folie enthüllst du den Gewinner.',
              quality: 'bad',
              feedback:
                'Ein Krimi vor Entscheidern mit 20-Minuten-Slot: Das Publikum rätselt die ganze Zeit, worauf du hinauswillst, diskutiert zwischendurch Nebensächlichkeiten der Verlierer-Anbieter – und wenn die Zeit knapp wird, fällt genau das weg, wofür alle gekommen sind: deine Empfehlung.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'structure-pyramid-f1',
          task: 'Strukturiere folgende ungeordnete Stichpunkte nach dem Pyramidenprinzip zu einer Empfehlung für die Einführung von Homeoffice-Regeln (Hauptaussage + 3 Schlüsselargumente + je 1–2 Belege): Bewerberzahlen sinken seit zwei Jahren; Konkurrenz bietet 3 Tage Homeoffice; interne Umfrage: 78 % wünschen sich hybrides Arbeiten; 2 Kündigungen nannten fehlende Flexibilität als Grund; Büroflächen kosten 400.000 Euro im Jahr; bei 2 Tagen Homeoffice ließen sich 2 Etagen einsparen; Pilotteam Vertrieb arbeitet seit 6 Monaten hybrid, Zielerreichung 104 %.',
          placeholder:
            'Hauptaussage: …\nArgument 1: … (Belege: …)\nArgument 2: … (Belege: …)\nArgument 3: … (Belege: …)',
          sampleSolution:
            'Hauptaussage: Wir sollten ab dem nächsten Quartal zwei feste Homeoffice-Tage pro Woche einführen – das stärkt unsere Position im Arbeitsmarkt, senkt Kosten und funktioniert nachweislich ohne Leistungsverlust.\nArgument 1: Wir verlieren ohne flexible Regelung Talente. (Belege: Bewerberzahlen sinken seit zwei Jahren, während die Konkurrenz drei Tage Homeoffice bietet; zwei Kündigungen nannten fehlende Flexibilität als Grund; 78 % der Belegschaft wünschen sich hybrides Arbeiten.)\nArgument 2: Die Regelung senkt unsere Fixkosten spürbar. (Belege: Büroflächen kosten 400.000 Euro jährlich; bei zwei Homeoffice-Tagen ließen sich zwei Etagen einsparen.)\nArgument 3: Das Modell funktioniert bei uns nachweislich. (Beleg: Das Pilotteam Vertrieb arbeitet seit sechs Monaten hybrid und erreicht 104 % seiner Ziele.)',
          checklist: [
            'Meine Hauptaussage ist eine Empfehlung mit Standpunkt, keine Themenbeschreibung.',
            'Ich habe genau drei überschneidungsfreie Schlüsselargumente gebildet.',
            'Jedes Argument beantwortet die Frage „Warum?" zur Hauptaussage.',
            'Jeder Beleg ist dem Argument zugeordnet, das er tatsächlich stützt.',
            'Kein Stichpunkt ist auf der obersten Ebene gelandet, der eigentlich ein Detail ist.',
          ],
        },
      ],
    },
    {
      id: 'structure-dramaturgy',
      title: 'Dramaturgie: Einstieg, roter Faden, Schluss',
      theory: [
        {
          kind: 'text',
          body: 'Struktur ist das Skelett einer Präsentation – die Dramaturgie macht daraus etwas Lebendiges. Und dabei zählen zwei Momente überproportional: die ersten und die letzten 30 Sekunden. Am Anfang entscheidet das Publikum, ob es dir Aufmerksamkeit schenkt; am Ende formt sich, was es mitnimmt und tut. Ausgerechnet diese beiden Momente überlassen viele dem Zufall – sie starten mit „Ja, äh, dann fang ich mal an" und enden mit „Ja, das war es eigentlich schon von meiner Seite".\n\nDie gute Nachricht: Einstieg und Schluss sind die am besten planbaren Teile jeder Präsentation. Sie sind kurz, du kannst sie wörtlich vorbereiten und sogar auswendig lernen – gerade bei Nervosität ein unschätzbarer Anker.',
        },
        {
          kind: 'text',
          heading: 'Der starke Einstieg: Hook-Varianten',
          body: 'Ein Hook ist ein Einstieg, der in Sekunden Aufmerksamkeit erzeugt – noch bevor du Agenda oder Vorstellungsrunde bringst. Bewährte Varianten: Die überraschende Zahl („Jede dritte Supportanfrage bei uns betrifft dasselbe Problem – seit zwei Jahren."). Die provokante Frage („Wann haben Sie zuletzt einen unserer Monatsberichte wirklich gelesen?"). Die Mini-Geschichte („Letzten Dienstag, 16:40 Uhr: Eine Kundin ruft zum vierten Mal an – und landet zum vierten Mal in einer anderen Abteilung."). Das Zukunftsbild („Stellen Sie sich vor, kein Kunde wartet länger als eine Minute in der Hotline."). Oder der direkte Nutzen („In den nächsten 15 Minuten zeige ich Ihnen, wie wir 200.000 Euro im Jahr sparen können.").\n\nWelcher Hook passt, hängt von Publikum und Anlass ab – die Regel dahinter ist immer gleich: Der Einstieg muss zum Thema führen und ein echtes Versprechen für den Rest geben. Ein Witz ohne Bezug zum Inhalt oder eine Schockzahl, die später nie wieder auftaucht, beschädigen die Glaubwürdigkeit mehr, als sie nutzen. Und: Entschuldigungen sind verbotene Einstiege („Ich hatte leider wenig Zeit zur Vorbereitung", „Ich bin kein guter Redner") – sie senken die Erwartung, ohne irgendetwas zu gewinnen.',
        },
        {
          kind: 'text',
          heading: 'Roter Faden und Überleitungen',
          body: 'Der rote Faden ist das Versprechen, dass jeder Teil der Präsentation auf die Kernbotschaft einzahlt – und dass das Publikum jederzeit weiß, wo es sich befindet. Das wichtigste Werkzeug dafür sind Überleitungen: ein, zwei Sätze zwischen den Abschnitten, die zurückblicken und vorausweisen. „So viel zu den Kosten – die zweite Frage ist, ob die Lösung technisch zu uns passt. Schauen wir auf die Integration."\n\nÜberleitungen wirken unscheinbar, sind aber das Rückgrat der Verständlichkeit: Beim Zuhören kann niemand zurückblättern. Ohne Wegweiser reißt der Faden – das Publikum weiß nicht mehr, warum die aktuelle Folie wichtig ist, und steigt innerlich aus. Hilfreich ist eine wiederkehrende Struktur-Ankündigung („drei Gründe – erstens, zweitens, drittens") und das bewusste Wiederaufgreifen des Einstiegs-Hooks im Verlauf: Die Zahl, Frage oder Geschichte vom Anfang wird zur Klammer der gesamten Präsentation.',
        },
        {
          kind: 'text',
          heading: 'Der Schluss: Zusammenfassung und Call-to-Action',
          body: 'Der Schluss ist kein Ausklingen, sondern der Höhepunkt der Zielerreichung – hier entscheidet sich, ob aus dem Vortrag eine Handlung wird. Die bewährte Abfolge: Erst die Kernbotschaft und die zwei, drei wichtigsten Punkte in einem Satz zusammenfassen („Festzuhalten bleibt: Der Wechsel spart 200.000 Euro, das Risiko ist über die Pilotphase abgesichert."). Dann der Call-to-Action – die konkrete Aufforderung, was das Publikum jetzt tun soll: „Ich bitte Sie heute um die Freigabe der Pilotphase. Bis Freitag brauche ich dafür Ihre Rückmeldung zu den zwei Teams, die starten." Je konkreter (wer, was, bis wann), desto wahrscheinlicher passiert es.\n\nDie letzten 30 Sekunden gehören dieser Botschaft – nicht der Danksagungs-Folie, nicht dem Murmeln ins Publikum. Deshalb: den Schlusssatz wörtlich vorbereiten, Blickkontakt halten, nach dem letzten Satz eine Pause aushalten. Und Vorsicht vor dem klassischen Dramaturgie-Killer: Nach einer starken Schlussbotschaft noch fünf „Ach ja, eine Sache noch"-Folien nachzuschieben verwässert alles, was du aufgebaut hast. Wenn eine Fragerunde folgt, gilt der Profi-Trick: Nach den Fragen die Kernbotschaft noch einmal in einem Satz wiederholen – so endet der Termin mit deiner Botschaft statt mit der letzten Zuschauerfrage.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Die ersten und letzten 30 Sekunden wirken überproportional – beide wörtlich vorbereiten.',
            'Hook-Varianten: überraschende Zahl, provokante Frage, Mini-Geschichte, Zukunftsbild, direkter Nutzen – immer mit echtem Bezug zum Thema.',
            'Nie mit Entschuldigungen oder Formalien einsteigen.',
            'Überleitungen halten den roten Faden: kurz zurückblicken, vorausweisen – das Publikum kann nicht zurückblättern.',
            'Schluss = Zusammenfassung + konkreter Call-to-Action (wer, was, bis wann), dann Pause statt „Das war es schon".',
            'Nach der Fragerunde die Kernbotschaft wiederholen – der Termin endet mit deiner Botschaft.',
          ],
        },
        {
          kind: 'example',
          title: 'Die ersten 30 Sekunden',
          good: '„Letzten Dienstag, 16:40 Uhr: Eine Kundin ruft zum vierten Mal bei uns an – und landet zum vierten Mal in einer anderen Abteilung. Nach acht Minuten legt sie auf. Solche Anrufe haben wir jede Woche etwa 120 Mal. In den nächsten 15 Minuten zeige ich Ihnen, wie wir das abstellen – und warum sich die Lösung nach sieben Monaten selbst bezahlt."',
          bad: '„Ja, äh, hallo zusammen, schön, dass es jetzt klappt mit der Technik. Ich bin übrigens Markus aus dem Serviceteam, falls mich jemand nicht kennt. Ich hatte leider nur zwei Tage für die Folien, also seht es mir nach. Hier erst mal die Agenda – das sind so die neun Punkte, die ich heute durchgehen will."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'structure-dramaturgy-q1',
          question:
            'Warum sollte man Einstieg und Schluss einer Präsentation wörtlich vorbereiten?',
          options: [
            {
              text: 'Weil diese beiden Momente überproportional über Aufmerksamkeit und Handlungswirkung entscheiden – und weil sie kurz genug sind, um sie präzise zu planen, was gerade bei Nervosität Sicherheit gibt.',
              correct: true,
              explanation:
                'Richtig. Am Anfang entscheidet das Publikum, ob es zuhört; am Ende formt sich, was es mitnimmt und tut. Ein auswendig sitzender erster und letzter Satz ist zudem der beste Anker gegen Lampenfieber.',
            },
            {
              text: 'Weil man den Mittelteil dann gar nicht mehr vorbereiten muss – er ergibt sich von selbst.',
              correct: false,
              explanation:
                'Nein, der Mittelteil braucht die Strukturarbeit (etwa nach dem Pyramidenprinzip) genauso. Der Unterschied: Im Mittelteil ist freies Sprechen entlang der Struktur sinnvoll, Einstieg und Schluss profitieren von wörtlicher Präzision.',
            },
            {
              text: 'Weil es unprofessionell wirkt, irgendeinen Teil einer Präsentation frei zu sprechen.',
              correct: false,
              explanation:
                'Im Gegenteil – freies Sprechen wirkt im Hauptteil lebendiger als Abgelesenes. Die wörtliche Vorbereitung gilt gezielt den beiden wirkungskritischsten Momenten, nicht der ganzen Präsentation.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'structure-dramaturgy-q2',
          question: 'Was macht einen guten Call-to-Action am Ende einer Präsentation aus?',
          options: [
            {
              text: 'Er fordert eine konkrete, terminierte Handlung ein – wer soll was bis wann tun – und bildet zusammen mit der Kernbotschaft die letzten 30 Sekunden.',
              correct: true,
              explanation:
                'Genau. „Ich bitte Sie heute um die Freigabe der Pilotphase, Rückmeldung zu den Startteams bis Freitag" löst Handlung aus. Je konkreter die Aufforderung, desto wahrscheinlicher passiert nach dem Termin tatsächlich etwas.',
            },
            {
              text: 'Er bedankt sich herzlich für die Aufmerksamkeit und bietet an, bei Fragen jederzeit erreichbar zu sein.',
              correct: false,
              explanation:
                'Höflich, aber wirkungslos: „Danke für die Aufmerksamkeit" ist keine Handlungsaufforderung. Die letzten 30 Sekunden gehören der Kernbotschaft und der konkreten Bitte – nicht der Danksagungs-Folie.',
            },
            {
              text: 'Er fasst noch einmal alle Folien der Präsentation einzeln zusammen, damit nichts verloren geht.',
              correct: false,
              explanation:
                'Eine Komplettwiederholung verwässert die Wirkung – niemand behält zwölf zusammengefasste Folien. Der Schluss verdichtet auf die Kernbotschaft plus zwei, drei Hauptpunkte und mündet in die Handlungsaufforderung.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'structure-dramaturgy-s1',
          situation:
            'Du hast deine Präsentation zur Einführung einer neuen Zeiterfassung stark beendet: Kernbotschaft, klare Bitte um Zustimmung, Pause. Es folgt eine lebhafte Fragerunde – die letzte Frage dreht sich zehn Minuten lang um ein Randthema: ob die Farben der Benutzeroberfläche anpassbar sind. Die Moderatorin schaut auf die Uhr: „So, wir müssen zum Ende kommen."',
          choices: [
            {
              text: 'Du schließt mit einem Satz: „Gern kläre ich die Farbfrage im Nachgang. Für heute das Entscheidende: Mit der neuen Zeiterfassung sparen wir pro Monat zwei Tage Verwaltungsaufwand – ich bitte euch bis Freitag um eure Zustimmung zum Start im März."',
              quality: 'best',
              feedback:
                'Genau der Profi-Abschluss: Du parkst das Randthema wertschätzend und nutzt die letzten Sekunden, um Kernbotschaft und Call-to-Action zu wiederholen. Der Termin endet mit deiner Botschaft – nicht mit einer Diskussion über Farbpaletten.',
            },
            {
              text: 'Du beantwortest die Farbfrage noch ausführlich zu Ende – wer fragt, hat ein Recht auf eine vollständige Antwort.',
              quality: 'ok',
              feedback:
                'Wertschätzend gegenüber dem Fragesteller, aber dramaturgisch teuer: Der Termin endet mit einem Nebenthema, und deine starke Schlussbotschaft liegt zehn Minuten zurück. Das Publikum verlässt den Raum mit „Farben" im Kopf statt mit deinem Call-to-Action. Besser: kurz beantworten oder in den Nachgang verlagern – und die Botschaft wiederholen.',
            },
            {
              text: 'Du sagst: „Okay, dann sind wir durch. Danke euch!" – die Zeit ist schließlich um.',
              quality: 'bad',
              feedback:
                'Du verschenkst den letzten Eindruck komplett: Nach zehn Minuten Farbdiskussion ist deine Kernbotschaft längst überlagert, und ohne Wiederholung des Call-to-Action weiß am Montag niemand mehr, dass bis Freitag eine Zustimmung fällig war.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'structure-dramaturgy-f1',
          task: 'Du präsentierst der Abteilungsrunde (15 Minuten) den Vorschlag, Meetings standardmäßig von 60 auf 45 Minuten zu verkürzen. Schreibe wörtlich: (1) deinen Einstieg (die ersten 30 Sekunden, mit einem Hook deiner Wahl) und (2) deinen Schluss (Zusammenfassung + Call-to-Action, die letzten 30 Sekunden).',
          placeholder: 'Einstieg: …\n\nSchluss: …',
          sampleSolution:
            'Einstieg: „Kurze Frage in die Runde: Wer von euch hatte diese Woche ein Meeting, das pünktlich geendet hat UND bei dem die letzten zehn Minuten noch etwas gebracht haben? – Eben. Wir verbringen als Abteilung rund 120 Stunden pro Woche in Meetings, und ein großer Teil der letzten Viertelstunde ist erfahrungsgemäß Wiederholung. In den nächsten 15 Minuten zeige ich euch, wie wir mit einer einzigen Änderung jede Woche umgerechnet drei volle Arbeitstage zurückgewinnen."\n\nSchluss: „Zusammengefasst: 45-Minuten-Meetings geben uns rund drei Arbeitstage pro Woche zurück, die Pufferzeit zwischen Terminen löst unser Dauerproblem mit Verspätungen, und andere Abteilungen zeigen, dass es funktioniert. Mein Vorschlag: Wir stellen ab dem Ersten des nächsten Monats alle Regelmeetings testweise auf 45 Minuten um und schauen nach acht Wochen gemeinsam auf das Ergebnis. Dafür brauche ich heute euer Okay – wer ist dabei?"',
          checklist: [
            'Mein Einstieg nutzt einen erkennbaren Hook (Zahl, Frage, Geschichte, Zukunftsbild oder Nutzenversprechen) mit echtem Bezug zum Thema.',
            'Mein Einstieg kommt ohne Entschuldigungen und Formalien aus und gibt ein Versprechen für die nächsten Minuten.',
            'Mein Schluss fasst die Kernbotschaft und die wichtigsten Punkte in wenigen Sätzen zusammen.',
            'Mein Call-to-Action benennt konkret, wer was bis wann tun soll.',
            'Einstieg und Schluss sind jeweils in etwa 30 Sekunden sprechbar.',
          ],
        },
      ],
    },
  ],
}
