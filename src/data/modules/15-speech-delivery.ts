import type { Module } from '@/types/content'

export const speechDelivery: Module = {
  id: 'speech-delivery',
  title: 'Sprechwirkung: Tempo, Tonfall & Dynamik',
  description:
    'Wie du mit Stimme, Satzmelodie und bewussten Wechseln begeisterst statt einzuschläfern – vom Pausen-Handwerk über den Tonfall bis zum Prinzip gegen jede Langeweile.',
  category: 'presentation',
  lessons: [
    {
      id: 'rhetoric-voice',
      title: 'Stimme: Pausen, Betonung, Tempo',
      theory: [
        {
          kind: 'text',
          body: 'Derselbe Satz kann begeistern oder einschläfern – je nachdem, wie er gesprochen wird. Die Stimme ist dein wichtigstes Instrument beim Präsentieren, und wie jedes Instrument lässt sie sich trainieren. Die vier Stellschrauben: Pausen, Betonung, Tempo und Lautstärke.\n\nDie meisten Redner nutzen keine davon bewusst. Sie sprechen durchgehend im selben Tempo, in derselben Lautstärke, ohne Pausen – und wundern sich, dass das Publikum nach fünf Minuten auf die Handys schaut. Monotonie ist das akustische Signal für „nichts Wichtiges, du kannst abschalten".',
        },
        {
          kind: 'text',
          heading: 'Die Pause – das stärkste Mittel der Rhetorik',
          body: 'Nichts wirkt stärker als Stille. Eine Pause vor der Kernbotschaft erzeugt Spannung: Das Publikum schaut auf, jetzt kommt etwas Wichtiges. Eine Pause nach der Kernbotschaft gibt Zeit zum Verarbeiten: Der Satz kann wirken, statt vom nächsten überrollt zu werden.\n\nDas Problem: Für den Redner fühlen sich zwei Sekunden Stille wie eine Ewigkeit an – für das Publikum sind sie angenehm und souverän. Diese Diskrepanz musst du einmal bewusst erleben, dann verliert die Pause ihren Schrecken. Faustregel: Wenn dir die Pause schon fast unangenehm lang vorkommt, ist sie für das Publikum genau richtig. Pausen signalisieren außerdem Status: Wer schweigen kann, ohne nervös zu werden, strahlt Ruhe und Kontrolle aus.',
        },
        {
          kind: 'text',
          heading: 'Betonung, Tempo, Lautstärke – und die Atmung dahinter',
          body: 'Betonung lenkt Bedeutung: „WIR schaffen das" (nicht die anderen), „Wir SCHAFFEN das" (trotz aller Zweifel), „Wir schaffen DAS" (genau dieses Ziel). Entscheide bewusst, welches Wort im Satz die Last trägt – meist ist es genau eines.\n\nBeim Tempo gilt: Variation schlägt Geschwindigkeit. Schneller sprechen darfst du bei Beispielen und Bekanntem, langsamer wirst du bei Kernbotschaften, Zahlen und allem Neuen. Wer dauerhaft schnell spricht, wirkt gehetzt; wer dauerhaft langsam spricht, wirkt zäh. Der Wechsel hält wach. Lautstärke funktioniert genauso – und der wirksamste Trick ist kontraintuitiv: Leiser werden zieht Aufmerksamkeit an, weil alle genauer hinhören müssen.\n\nDas Fundament für all das ist die Atmung: Wer flach und hektisch atmet, hat keine Luft für Pausen und Betonung. Tiefe Bauchatmung vor und während des Vortrags gibt der Stimme Volumen und dir Ruhe.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Die Pause ist das stärkste rhetorische Mittel: vor der Kernbotschaft Spannung, danach Wirkung.',
            'Was sich für dich wie eine Ewigkeit anfühlt, ist für das Publikum souverän – halte die Stille aus.',
            'Betonung bewusst setzen: Meist trägt genau ein Wort im Satz die Bedeutung.',
            'Tempo und Lautstärke variieren: Wechsel hält wach, Monotonie schläfert ein. Leiser werden erzeugt Aufmerksamkeit.',
            'Tiefe Bauchatmung ist das Fundament – und Üben mit Aufnahme der schnellste Weg zur Verbesserung.',
          ],
        },
        {
          kind: 'example',
          title: 'Die Kernbotschaft im Vortrag platzieren',
          good: '„Wir haben drei Monate lang jede Alternative geprüft. (Pause) Das Ergebnis ist eindeutig. (Pause) Wir müssen den Anbieter wechseln. (Pause) Und ich zeige Ihnen jetzt, warum."',
          bad: '„Wir-haben-drei-Monate-geprüft-das-Ergebnis-ist-eindeutig-wir-müssen-wechseln-und-zwar-aus-folgenden-Gründen-erstens…" – in einem Atemzug, im Dauertempo, ohne dass die Botschaft je landen kann.',
        },
        {
          kind: 'text',
          heading: 'Üben mit Aufnahme: der ehrlichste Coach',
          body: 'Niemand hört sich selbst beim Sprechen objektiv. Die Lösung kostet nichts: Nimm dich mit dem Smartphone auf – zwei, drei Minuten deines nächsten Vortrags reichen. Beim Anhören wirst du Dinge bemerken, die dir live nie auffallen: verschluckte Satzenden, Dauertempo, fehlende Pausen, immer gleiche Betonungsmuster.\n\nKonzentriere dich pro Übungsrunde auf genau eine Stellschraube: einmal nur auf Pausen achten, einmal nur auf Betonung, einmal nur aufs Tempo. Wer alles gleichzeitig verbessern will, verbessert nichts. Drei kurze Aufnahme-Übungen pro Woche bringen mehr als ein Rhetorikseminar pro Jahr.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'rhetoric-voice-q1',
          question: 'Warum gilt die Pause als das stärkste Mittel der Rhetorik?',
          options: [
            {
              text: 'Sie erzeugt vor der Kernbotschaft Spannung, gibt ihr danach Raum zum Wirken und signalisiert Souveränität.',
              correct: true,
              explanation:
                'Richtig. Stille lenkt Aufmerksamkeit, lässt Botschaften landen und strahlt Ruhe aus – und sie kostet nichts außer dem Mut, sie auszuhalten.',
            },
            {
              text: 'Sie verkürzt den Vortrag, und kurze Vorträge sind immer besser.',
              correct: false,
              explanation:
                'Pausen verlängern den Vortrag sogar minimal. Ihre Wirkung liegt nicht in der Zeitersparnis, sondern in Spannung, Verarbeitungszeit und Souveränität.',
            },
            {
              text: 'Sie gibt dem Redner Zeit, heimlich auf seine Notizen zu schauen.',
              correct: false,
              explanation:
                'Das kann ein netter Nebeneffekt sein, ist aber nicht der Kern: Die Pause wirkt auf das Publikum – als Spannungsbogen und Verarbeitungsraum für das Gesagte.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'rhetoric-voice-q2',
          question:
            'Du merkst mitten im Vortrag, dass das Publikum unruhig wird und abschaltet. Welcher Stimm-Trick holt die Aufmerksamkeit am wirksamsten zurück?',
          options: [
            {
              text: 'Bewusst leiser werden und das Tempo senken – der Kontrast lässt alle aufhorchen und genauer hinhören.',
              correct: true,
              explanation:
                'Genau, so kontraintuitiv es klingt: Ein plötzlicher Wechsel – gerade nach unten – durchbricht die Monotonie. Das Publikum muss aktiv hinhören und ist wieder bei dir.',
            },
            {
              text: 'Deutlich lauter werden und lauter bleiben, bis alle wieder zuhören.',
              correct: false,
              explanation:
                'Kurzzeitig fällt das auf – aber wer laut bleibt, erzeugt nur eine neue Monotonie auf höherem Pegel und wirkt schnell angestrengt. Der Wechsel wirkt, nicht der Dauerpegel.',
            },
            {
              text: 'Schneller sprechen, um den Rest zügig hinter sich zu bringen.',
              correct: false,
              explanation:
                'Damit verlierst du das Publikum endgültig: Hohes Dauertempo wirkt gehetzt und macht das Zuhören anstrengender – genau das Gegenteil von dem, was du brauchst.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'rhetoric-voice-q3',
          question: 'Wie setzt du Betonung in einem Satz richtig ein?',
          options: [
            {
              text: 'Bewusst entscheiden, welches EINE Wort die Bedeutung trägt – denn je nachdem, ob du „WIR schaffen das", „Wir SCHAFFEN das" oder „Wir schaffen DAS" sagst, ändert sich die Botschaft.',
              correct: true,
              explanation:
                'Richtig. Betonung lenkt Bedeutung, und meist trägt genau ein Wort pro Satz die Last. Wer mehrere Wörter betont, betont am Ende keines – und überlässt die Deutung dem Zufall.',
            },
            {
              text: 'Möglichst viele Wörter betonen, damit der ganze Satz wichtig klingt.',
              correct: false,
              explanation:
                'Wenn alles betont ist, ist nichts betont – Dauerbetonung ist nur eine andere Form von Monotonie. Die Wirkung entsteht durch den Kontrast zwischen dem einen betonten Wort und dem Rest.',
            },
            {
              text: 'Betonung dem Zufall überlassen – sie ergibt sich beim freien Sprechen von selbst richtig.',
              correct: false,
              explanation:
                'Beim Alltagssprechen oft ja – unter Vortragsdruck verflacht die Betonung aber zum Einheitston. Gerade Kernbotschaften brauchen die bewusste Entscheidung, welches Wort die Last trägt.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'rhetoric-voice-q4',
          question: 'Welche Regel gilt für das Sprechtempo im Vortrag?',
          options: [
            {
              text: 'Variation schlägt Geschwindigkeit: schneller bei Beispielen und Bekanntem, langsamer bei Kernbotschaften, Zahlen und allem Neuen.',
              correct: true,
              explanation:
                'Richtig. Der Wechsel hält wach und gibt dem Wichtigen Gewicht. Dauerhaft schnell wirkt gehetzt, dauerhaft langsam wirkt zäh – beides ist Monotonie, nur in verschiedene Richtungen.',
            },
            {
              text: 'Grundsätzlich so langsam wie möglich sprechen – dann kommt garantiert jeder mit.',
              correct: false,
              explanation:
                'Durchgehend langsames Sprechen wirkt zäh und einschläfernd – das Publikum denkt schneller, als du redest, und schweift ab. Nicht das Tempo an sich wirkt, sondern sein Wechsel.',
            },
            {
              text: 'Ein konstantes, mittleres Tempo halten – Schwankungen verwirren das Publikum.',
              correct: false,
              explanation:
                'Das konstante Tempo ist genau das Problem: Gleichmaß wird vom Gehirn ausgeblendet wie das Ticken einer Uhr. Tempowechsel verwirren nicht – sie strukturieren und halten wach.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'rhetoric-voice-s1',
          situation:
            'In zwei Wochen hältst du die wichtigste Präsentation des Jahres vor der Geschäftsleitung. Inhaltlich steht alles. Eine Kollegin, die dich gut kennt, sagt dir ehrlich: „Dein Inhalt ist top, aber du sprichst alles im gleichen Ton runter – da geht viel verloren." Wie gehst du vor?',
          choices: [
            {
              text: 'Du nimmst deinen Probedurchlauf mit dem Smartphone auf, hörst ihn kritisch an und übst dann gezielt in Runden: erst nur Pausen an den Kernbotschaften, dann Betonung, dann Tempowechsel. Vor dem Termin machst du eine finale Aufnahme zum Vergleich.',
              quality: 'best',
              feedback:
                'Sehr gut: Die Aufnahme zeigt dir ungeschönt, was die Kollegin meint – und das Üben in fokussierten Runden (eine Stellschraube pro Durchlauf) ist genau die Methode, mit der Stimmarbeit wirklich vorankommt. Zwei Wochen reichen dafür gut.',
            },
            {
              text: 'Du markierst dir im Skript die drei Kernbotschaften und schreibst dir dort „PAUSE!" und „langsam!" an den Rand – üben wirst du es dann live im Termin.',
              quality: 'ok',
              feedback:
                'Die Markierungen sind ein guter Anfang und besser als nichts. Aber unter Druck fällst du in alte Muster zurück, wenn du das neue Verhalten nie geprobt hast – Regieanweisungen auf dem Papier ersetzen keine Übung. Mindestens zwei laute Probedurchläufe solltest du einplanen.',
            },
            {
              text: 'Du beschließt, dass Inhalt wichtiger ist als Vortragsstil – die Geschäftsleitung besteht aus Profis, die auf die Fakten schauen, nicht auf die Stimme.',
              quality: 'bad',
              feedback:
                'Ein teurer Irrtum: Auch Profis können nur aufnehmen, was akustisch bei ihnen ankommt – und Monotonie signalisiert dem Gehirn „nichts Wichtiges". Deine besten Fakten wirken nicht, wenn sie im Einheitston untergehen. Die Kollegin hat dir ein Geschenk gemacht; nutze es.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'rhetoric-voice-f1',
          task: 'Bereite diesen Satz für den mündlichen Vortrag auf: „Wir haben im letzten Quartal zum ersten Mal mehr Neukunden gewonnen als unser größter Wettbewerber." Markiere mit (PAUSE), wo du Pausen setzt, und schreibe das betonte Wort pro Sinnabschnitt in GROSSBUCHSTABEN. Begründe kurz deine Entscheidungen.',
          placeholder: 'Dein Satz mit (PAUSE) und BETONUNG …\nBegründung: …',
          sampleSolution:
            '„Wir haben im letzten Quartal (PAUSE) zum ERSTEN Mal (PAUSE) mehr Neukunden gewonnen als unser GRÖSSTER Wettbewerber." (PAUSE)\nBegründung: Die Pause nach „Quartal" baut Spannung auf, bevor die eigentliche Nachricht kommt. „ERSTEN" ist betont, weil die Premiere die Kernbotschaft ist – das gab es noch nie. „GRÖSSTER" ist betont, weil es die Leistung einordnet: nicht irgendein Wettbewerber. Die Schlusspause lässt die Nachricht wirken, bevor es weitergeht.',
          checklist: [
            'Ich habe mindestens zwei bewusste Pausen gesetzt, davon eine vor oder nach der Kernaussage.',
            'Ich habe pro Sinnabschnitt genau ein Wort betont, nicht mehrere.',
            'Ich kann jede Pause und Betonung begründen.',
            'Ich habe den Satz laut gesprochen (idealerweise aufgenommen) und geprüft, ob er natürlich klingt.',
          ],
        },
      ],
    },
    {
      id: 'delivery-melody',
      title: 'Tonfall & Stimmmelodie: begeistern statt einschläfern',
      theory: [
        {
          kind: 'text',
          body: 'Sag einmal laut „Das ist ein großartiges Ergebnis" – erst gelangweilt, dann wirklich begeistert. Gleiche Wörter, völlig andere Botschaft. Was den Unterschied macht, ist der Tonfall: die Melodie, mit der deine Stimme durch den Satz steigt und fällt, und die Energie, die dabei mitschwingt.\n\nDas Entscheidende: Dein Publikum übernimmt deinen Zustand. Dieses Phänomen heißt emotionale Ansteckung – wer hörbar hinter seinem Thema steht, steckt den Raum an; wer klingt, als läse er die Steuererklärung vor, erzeugt exakt diese Stimmung beim Publikum. Begeisterung ist keine Frage des Talents, sondern der Entscheidung, sie hörbar zu machen.',
        },
        {
          kind: 'text',
          heading: 'Die Satzmelodie: Aussagen müssen wie Aussagen klingen',
          body: 'Im Deutschen fällt die Stimme am Ende einer Aussage ab – dieser kleine Schlusspunkt nach unten signalisiert: Ich bin sicher, der Gedanke ist fertig. Zwei Muster zerstören diese Wirkung.\n\nDas erste ist die Frage-Melodie bei Aussagen (im Englischen „Uptalk" genannt): Die Stimme geht am Satzende nach oben, als stünde ein Fragezeichen dort. „Wir haben das Projekt erfolgreich abgeschlossen?" – gesprochen mit steigender Melodie klingt die stärkste Leistung wie eine Bitte um Erlaubnis. Das Publikum hört Unsicherheit, wo keine ist.\n\nDas zweite Muster sind hängende Satzenden: Die Stimme bleibt oben in der Schwebe, und die Sätze reihen sich mit „und … und … wobei …" endlos aneinander. Das Publikum wartet vergeblich auf den Punkt – und schaltet ab, weil nie ein Gedanke abgeschlossen wird. Die Lösung ist in beiden Fällen dieselbe: Sprich in Sätzen mit hörbarem Punkt. Stimme runter, kurze Pause, nächster Gedanke.',
        },
        {
          kind: 'text',
          heading: 'Begeisterung ist hörbar – und sie beginnt vor dem Vortrag',
          body: 'Niemand kann dauerhaft Begeisterung spielen, die er nicht empfindet – das Publikum hat ein feines Ohr für aufgesetzten Enthusiasmus. Der Weg führt deshalb über die Vorbereitung: Such dir vor jedem Auftritt deine ehrliche Antwort auf die Frage „Was ist an diesem Thema wirklich bemerkenswert?". Auch am trockensten Migrationsprojekt gibt es etwas – die eingesparte Zeit, das abgewendete Risiko, der Moment, in dem es zum ersten Mal lief. Aus dieser Antwort sprichst du.\n\nDazu kommt das Energie-Level: Vor Publikum brauchst du etwa zwanzig Prozent mehr Energie als im normalen Gespräch – was sich für dich leicht übertrieben anfühlt, kommt vorne als normal und präsent an. Und ein einfacher, messbar wirksamer Trick: Lächeln ist hörbar. Die Mundwinkel verändern den Klang der Stimme, selbst am Telefon. Wer freundlich klingt, dem hört man lieber zu.',
        },
        {
          kind: 'table',
          headers: ['Tonfall-Muster', 'So wirkt es', 'Gegenmittel'],
          rows: [
            [
              'Frage-Melodie bei Aussagen (Stimme am Ende hoch)',
              'Unsicher, bittet um Erlaubnis statt festzustellen',
              'Satzende bewusst nach unten sprechen – der hörbare Punkt',
            ],
            [
              'Hängende Satzenden, Endlos-Verkettung mit „und … wobei …"',
              'Kein Gedanke wird fertig, das Publikum verliert den Faden',
              'Kurze Sätze, Stimme runter, Pause – dann der nächste Gedanke',
            ],
            [
              'Durchgehend tiefer Gleichton („Vorlese-Modus")',
              'Distanziert, unbeteiligt – Langeweile überträgt sich',
              'Ehrliche Begeisterung suchen, Energie-Level um 20 % anheben',
            ],
            [
              'Gepresste, hektische Höhe bei Nervosität',
              'Gehetzt, angespannt – überträgt Stress auf das Publikum',
              'Tief in den Bauch atmen, bewusst tiefer und langsamer einsteigen',
            ],
            [
              'Auswendig-Singsang (immer gleiches Auf und Ab)',
              'Einstudiert, unpersönlich – wie ein abgespulter Text',
              'In Gedanken sprechen statt in Sätzen: frei formulieren, nicht rezitieren',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Emotionale Ansteckung: Das Publikum übernimmt deinen hörbaren Zustand – Begeisterung wie Langeweile.',
            'Aussagen enden mit der Stimme nach unten: Der hörbare Punkt signalisiert Sicherheit.',
            'Frage-Melodie bei Aussagen und hängende Satzenden lassen dich unsicher und endlos klingen.',
            'Begeisterung beginnt in der Vorbereitung: Finde, was am Thema ehrlich bemerkenswert ist – und sprich daraus.',
            'Vor Publikum gilt: rund 20 % mehr Energie als im Gespräch – und Lächeln ist hörbar.',
          ],
        },
        {
          kind: 'example',
          title: 'Projektergebnis im Lenkungskreis verkünden',
          good: '„Die Migration ist abgeschlossen. (Stimme runter, Pause) Null Datenverlust, zwei Tage früher als geplant. (Pause) Ich will kurz zeigen, was das für den Betrieb bedeutet – denn das ist der eigentliche Gewinn." – feste Satzenden, hörbare Freude am Ergebnis, Energie im Raum.',
          bad: '„Ja, also wir sind jetzt mit der Migration durch? (Stimme oben) Und es gab eigentlich auch keine Datenverluste? Und wir waren auch irgendwie früher fertig und …" – jede Aussage klingt wie eine Frage, kein Satz wird fertig, und das beste Ergebnis des Jahres klingt wie eine Entschuldigung.',
        },
        {
          kind: 'example',
          title: 'Workshop-Begrüßung beim Kunden',
          good: '„Guten Morgen! Ich habe mich auf diesen Termin wirklich gefreut – denn heute legen wir fest, wie Ihre Freigabeprozesse ab nächstem Quartal laufen. (Pause) Das wird ein produktiver Vormittag." – wacher Ton, hörbares Lächeln, klare Satzenden.',
          bad: '„Ja … dann fangen wir halt mal an. (monotoner Gleichton) Auf der Agenda steht heute das Thema Freigabeprozesse, wie Sie wissen …" – der Vorlese-Modus erstickt die Energie im Raum, bevor der Workshop begonnen hat.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'delivery-melody-q1',
          question:
            'Was passiert, wenn die Stimme am Ende von Aussagesätzen regelmäßig nach oben geht (Frage-Melodie)?',
          options: [
            {
              text: 'Aussagen klingen wie Bitten um Bestätigung – das Publikum hört Unsicherheit, selbst wenn der Inhalt stark ist.',
              correct: true,
              explanation:
                'Richtig. Die steigende Melodie ist das akustische Fragezeichen: Sie macht aus einer Feststellung eine Rückfrage. Der hörbare Punkt – Stimme am Satzende nach unten – signalisiert dagegen Sicherheit.',
            },
            {
              text: 'Nichts – die Satzmelodie ist reine Geschmackssache und hat keinen Einfluss auf die Wirkung.',
              correct: false,
              explanation:
                'Die Satzmelodie transportiert Bedeutung: Steigende Enden signalisieren im Deutschen Frage oder Unabgeschlossenheit. Das Publikum nimmt das unbewusst, aber zuverlässig als Unsicherheit wahr.',
            },
            {
              text: 'Das Publikum fühlt sich stärker einbezogen, weil jeder Satz wie eine Frage an den Raum wirkt.',
              correct: false,
              explanation:
                'Einbeziehen funktioniert über echte Fragen an das Publikum – nicht über Aussagen, die versehentlich wie Fragen klingen. Letzteres untergräbt nur die eigene Überzeugungskraft.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'delivery-melody-q2',
          question: 'Was besagt das Prinzip der emotionalen Ansteckung beim Präsentieren?',
          options: [
            {
              text: 'Das Publikum übernimmt den hörbaren Zustand des Sprechers – wer begeistert klingt, erzeugt Interesse; wer gelangweilt klingt, erzeugt Langeweile.',
              correct: true,
              explanation:
                'Genau. Stimmungen übertragen sich über Stimme und Körpersprache auf den Raum. Deshalb ist die ehrliche eigene Begeisterung – gefunden in der Vorbereitung – die Grundlage jeder mitreißenden Präsentation.',
            },
            {
              text: 'Emotionen haben in Business-Präsentationen nichts verloren und sollten komplett herausgehalten werden.',
              correct: false,
              explanation:
                'Das Gegenteil ist der Fall: Ohne hörbare Beteiligung wirkt auch der beste Inhalt leblos. Es geht nicht um Theatralik, sondern darum, dass echtes Interesse am Thema hörbar sein darf.',
            },
            {
              text: 'Man sollte Begeisterung immer spielen, auch wenn man sie nicht empfindet – Hauptsache laut und enthusiastisch.',
              correct: false,
              explanation:
                'Gespielter Enthusiasmus fliegt auf: Das Publikum hat ein feines Ohr für aufgesetzte Begeisterung. Der Weg führt über die Vorbereitung – finde, was am Thema ehrlich bemerkenswert ist, und sprich daraus.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'delivery-melody-q3',
          question:
            'Ein Redner reiht seine Sätze endlos aneinander: „… und dann … wobei … und außerdem …" – die Stimme bleibt am Satzende oben. Was bewirkt das?',
          options: [
            {
              text: 'Kein Gedanke wird hörbar abgeschlossen – das Publikum wartet vergeblich auf den Punkt und schaltet ab. Gegenmittel: kurze Sätze, Stimme runter, Pause.',
              correct: true,
              explanation:
                'Richtig. Hängende Satzenden sind das akustische Endlosband: Ohne hörbaren Punkt gibt es keine Verarbeitungsmomente. Der Schlusspunkt nach unten plus kurze Pause gibt jedem Gedanken ein Ende – und dem Publikum Halt.',
            },
            {
              text: 'Es wirkt besonders flüssig und eloquent, weil keine Unterbrechungen den Redefluss stören.',
              correct: false,
              explanation:
                'Was sich für den Redner flüssig anfühlt, ist für das Ohr anstrengend: Ohne Satzenden fehlen die Ankerpunkte, an denen das Gehirn Gedanken abschließt und ablegt. Flüssig ist nicht gleich verständlich.',
            },
            {
              text: 'Es erzeugt Spannung, weil das Publikum immer wissen will, wie es weitergeht.',
              correct: false,
              explanation:
                'Spannung entsteht durch bewusste Pausen vor Kernbotschaften – nicht durch Endlosigkeit. Die Dauer-Verkettung erzeugt das Gegenteil: Ermüdung, weil nie ein Gedanke fertig wird.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'delivery-melody-q4',
          question: 'Welches Energie-Level brauchst du beim Sprechen vor Publikum?',
          options: [
            {
              text: 'Etwa zwanzig Prozent mehr als im normalen Gespräch – was sich für dich leicht übertrieben anfühlt, kommt vorne als normal und präsent an.',
              correct: true,
              explanation:
                'Richtig. Distanz, Raumgröße und Nervosität schlucken Energie – das normale Gesprächslevel wirkt auf der Bühne flach. Die leichte Übersteuerung gleicht das aus. Und: Lächeln ist hörbar, selbst am Telefon.',
            },
            {
              text: 'Exakt das gleiche wie im Alltagsgespräch – alles andere wirkt unauthentisch.',
              correct: false,
              explanation:
                'Verständlicher Gedanke, aber die Wirkung kehrt sich um: Normales Gesprächslevel kommt über Distanz gedämpft und müde an. Die 20 Prozent extra wirken beim Publikum nicht übertrieben, sondern einfach präsent.',
            },
            {
              text: 'So viel wie irgend möglich – maximale Lautstärke und Dauer-Enthusiasmus reißen jedes Publikum mit.',
              correct: false,
              explanation:
                'Dauer-Vollgas ist anstrengend und wirkt schnell aufgesetzt – außerdem fehlt dir dann der Spielraum nach oben für die wirklich wichtigen Momente. Leicht erhöhtes Grundlevel plus bewusste Spitzen ist die Formel.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'delivery-melody-s1',
          situation:
            'Du musst nächste Woche die Quartalszahlen des Supports präsentieren – Ticketvolumen, Antwortzeiten, Auslastung. Du findest das Thema selbst ziemlich trocken und merkst schon beim Probelauf, dass du im Vorlese-Ton landest. Was tust du?',
          choices: [
            {
              text: 'Du suchst den Kern, der dich ehrlich interessiert: Hinter den Antwortzeiten steckt, dass das Team trotz 20 % mehr Tickets schneller geworden ist. Diese Geschichte stellst du an den Anfang – und baust die Zahlen drum herum.',
              quality: 'best',
              feedback:
                'Sehr gut: Begeisterung lässt sich nicht aufsetzen, aber finden. Wenn du den bemerkenswerten Kern des Themas für dich entdeckt hast, ändert sich dein Tonfall von selbst – und die emotionale Ansteckung arbeitet für dich statt gegen dich.',
            },
            {
              text: 'Du beschließt, einfach besonders laut und enthusiastisch zu sprechen – Begeisterung kann man ja schauspielern.',
              quality: 'bad',
              feedback:
                'Aufgesetzter Enthusiasmus wirkt schnell unecht und anstrengend – das Publikum spürt die Diskrepanz zwischen Ton und innerer Haltung. Ohne echten Anknüpfungspunkt kippt gespielte Energie ins Peinliche. Such zuerst, was dich am Thema ehrlich interessiert.',
            },
            {
              text: 'Du akzeptierst den Vorlese-Ton – bei Zahlenberichten erwartet ohnehin niemand Begeisterung, Hauptsache die Daten stimmen.',
              quality: 'ok',
              feedback:
                'Verständlich, und die Daten sind die Pflicht. Aber du verschenkst die Kür: Ein monotoner Zahlenbericht wird vergessen, bevor er zu Ende ist. Schon ein einziger lebendig erzählter Kernbefund („Wir sind trotz Mehrlast schneller geworden") würde hängen bleiben – der Rest darf sachlich sein.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'delivery-melody-f1',
          task: 'Nimm ein Thema, das du demnächst präsentieren musst (oder dein aktuelles Projekt), und beantworte schriftlich die Begeisterungs-Frage: „Was ist an diesem Thema wirklich bemerkenswert?" Formuliere anschließend deinen Eröffnungssatz so, dass diese Antwort hörbar werden kann – mit festem Satzende (hörbarer Punkt).',
          placeholder: 'Bemerkenswert ist: …\nMein Eröffnungssatz: …',
          sampleSolution:
            'Bemerkenswert ist: Wir haben die Freigabe-App in sechs Wochen produktiv gebracht – der alte Papierprozess hat das Team zehn Jahre begleitet, und jetzt ist er nach anderthalb Monaten Geschichte.\nMein Eröffnungssatz: „Vor sechs Wochen lief hier noch jeder Urlaubsantrag über drei Unterschriftenmappen. (Pause) Heute dauert die Freigabe vier Minuten. (Pause) Ich zeige Ihnen, wie wir das geschafft haben."',
          checklist: [
            'Ich habe einen Aspekt gefunden, der mich am Thema ehrlich interessiert – keinen gespielten.',
            'Mein Eröffnungssatz transportiert diesen Aspekt konkret (Zahl, Kontrast oder Bild).',
            'Die Sätze enden mit hörbarem Punkt – keine Frage-Melodie, keine Endlos-Verkettung.',
            'Ich habe den Einstieg laut gesprochen und geprüft, ob Begeisterung hörbar ist.',
          ],
        },
      ],
    },
    {
      id: 'delivery-liveliness',
      title: 'Lebendig sprechen: so wird es nie langweilig',
      theory: [
        {
          kind: 'text',
          body: 'Die unbequeme Wahrheit über Aufmerksamkeit: Nach wenigen Minuten sinkt sie – bei jedem Publikum, bei jedem Thema, bei jedem Redner. Die gute Nachricht: Langeweile entsteht fast nie durch trockene Themen, sondern durch vorhersehbares Sprechen. Ein Thema ist nie zu langweilig für einen guten Vortrag; ein Vortrag kann nur zu eintönig für sein Thema sein.\n\nDas Gehirn deines Publikums reagiert auf eine Sache zuverlässig: Veränderung. Alles, was gleich bleibt – Tempo, Tonhöhe, Satzbau, Folienrhythmus –, wird nach kurzer Zeit ausgeblendet, wie das Ticken einer Uhr. Alles, was wechselt, holt die Aufmerksamkeit zurück.',
        },
        {
          kind: 'text',
          heading: 'Das Prinzip Wechsel: alle paar Minuten ein Weckruf',
          body: 'Lebendigkeit ist planbar. Die Profi-Technik: Baue etwa alle drei bis fünf Minuten einen bewussten Wechsel ein – einen Aufmerksamkeits-Anker. Das kann ein Formatwechsel sein (von der Erklärung zur Geschichte, von der Folie zur Frage ans Publikum, von der Zahl zum Beispiel), ein Stimmwechsel (plötzlich leiser, deutlich langsamer, eine lange Pause) oder ein Perspektivwechsel („Stellen Sie sich vor, Sie wären der Kunde …").\n\nPlane diese Anker beim Vorbereiten genauso bewusst wie deine Inhalte: Markiere im Ablauf, wo nach einem dichten Theorieblock eine Geschichte kommt, wo nach drei Folien eine Frage an den Raum geht. Faustregel: Wenn du fünf Minuten am Stück dasselbe tust – erklären, vorlesen, aufzählen –, ist der nächste Wechsel überfällig.',
        },
        {
          kind: 'text',
          heading: 'Sprich fürs Ohr, nicht fürs Auge',
          body: 'Der häufigste Lebendigkeits-Killer ist Schriftsprache im Mund. Geschriebene Sätze dürfen lang und verschachtelt sein – das Auge kann zurückspringen. Das Ohr kann das nicht: Was es beim ersten Hören nicht versteht, ist verloren.\n\nGesprochene Sprache braucht deshalb eigene Regeln. Kurze Sätze: ein Gedanke, ein Satz, ein Punkt. Verben statt Nominalstil: „Wir stellen um" statt „Die Umstellung erfolgt" – der Nominalstil („die Durchführung der Implementierung der Maßnahme") ist das sprachliche Schlafmittel schlechthin. Konkret statt abstrakt: „Jeder Berater spart damit einen halben Tag pro Woche" schlägt „Es ergeben sich signifikante Effizienzpotenziale". Aktiv statt passiv: „Das Team hat den Fehler gefunden" statt „Der Fehler wurde identifiziert". Und direkte Ansprache: „Sie kennen das aus Ihren Projekten …" holt jeden Zuhörer persönlich ab – niemand schaltet ab, während er angesprochen wird.',
        },
        {
          kind: 'table',
          headers: ['Langweilig (fürs Auge geschrieben)', 'Lebendig (fürs Ohr gesprochen)'],
          rows: [
            [
              '„Die Durchführung der Migration erfolgte unter Einhaltung sämtlicher definierter Qualitätskriterien."',
              '„Wir haben migriert – und alle Qualitätskriterien gehalten. Alle."',
            ],
            [
              '„Es ergeben sich signifikante Effizienzpotenziale im Bereich der Antragsbearbeitung."',
              '„Jeder Antrag dauert statt drei Tagen noch vier Minuten. Das ist das Potenzial."',
            ],
            [
              '„Der Fehler, welcher in der Schnittstelle, die das Altsystem anbindet, aufgetreten war, wurde behoben."',
              '„Die Schnittstelle zum Altsystem hatte einen Fehler. Das Team hat ihn gefunden und behoben."',
            ],
            [
              '„Im Folgenden werden die Projektergebnisse dargestellt."',
              '„Drei Ergebnisse nehmen Sie heute mit. Das erste überrascht Sie vermutlich."',
            ],
            [
              '„Diesbezüglich ist anzumerken, dass eine Priorisierung seitens des Fachbereichs aussteht."',
              '„Ein Punkt ist offen: Der Fachbereich muss noch priorisieren – das brauchen wir bis Freitag."',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Langeweile entsteht durch Vorhersehbarkeit, nicht durch das Thema – das Gehirn blendet alles Gleichbleibende aus.',
            'Das Prinzip Wechsel: Alle 3–5 Minuten ein bewusster Anker – Formatwechsel, Stimmwechsel oder Perspektivwechsel.',
            'Sprich fürs Ohr: kurze Sätze, ein Gedanke pro Satz – das Ohr kann nicht zurückspringen.',
            'Verben statt Nominalstil, konkret statt abstrakt, aktiv statt passiv – und Zahlen in erlebbare Größen übersetzen.',
            'Direkte Ansprache („Sie kennen das …") holt jeden persönlich ab – niemand schaltet ab, während er gemeint ist.',
          ],
        },
        {
          kind: 'example',
          title: 'Technisches Thema im Monats-Update erklären',
          good: '„Sie kennen das: Montagmorgen, das System ist langsam, die ersten Tickets kommen rein. (Pause) Genau dieses Problem haben wir uns vorgenommen. Die Ursache war ein einziger Datenbank-Job – er lief jeden Montag zur Stoßzeit. Wir haben ihn auf die Nacht verlegt. Ergebnis: Die Anmeldung dauert statt 40 Sekunden noch zwei. (Pause) Zwei."',
          bad: '„Im Berichtszeitraum wurde im Rahmen der Performance-Optimierung eine Analyse der systemseitigen Auslastungsspitzen durchgeführt, wobei festgestellt wurde, dass die Beeinträchtigung der Anmeldezeiten auf die zeitliche Überschneidung eines Batch-Prozesses mit dem Nutzungsmaximum zurückzuführen war, weshalb eine Verschiebung desselben vorgenommen wurde." – ein Satz, null Leben, und nach zwanzig Sekunden hört niemand mehr zu.',
        },
        {
          kind: 'example',
          title: 'Der dichte Theorieblock in der Kundenschulung',
          good: '„Das waren jetzt zehn Minuten Berechtigungskonzept – ich weiß. (Pause, Lächeln) Deshalb machen wir es konkret: Frau Berger, Sie legen gleich selbst eine Rolle an, und wir schauen alle zu, was im Hintergrund passiert." – der Wechsel von Theorie zu Mitmachen holt den Raum zurück.',
          bad: '„Kommen wir nun zu Abschnitt 4.3, den erweiterten Berechtigungskonzepten. Auch hier gibt es wieder mehrere Unterpunkte, die ich der Reihe nach durchgehen werde …" – dritter Theorieblock in Folge, gleiches Tempo, gleiche Struktur: Der Raum ist akustisch anwesend, geistig im Wochenende.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'delivery-liveliness-q1',
          question: 'Warum schaltet ein Publikum bei Vorträgen ab – was ist die häufigste Ursache?',
          options: [
            {
              text: 'Vorhersehbarkeit: Das Gehirn blendet alles aus, was gleich bleibt – Dauertempo, Einheitston, immer gleiche Struktur.',
              correct: true,
              explanation:
                'Richtig. Nicht das Thema langweilt, sondern das Gleichmaß. Das Gehirn reagiert auf Veränderung – deshalb holt jeder bewusste Wechsel (Format, Stimme, Perspektive) die Aufmerksamkeit zurück.',
            },
            {
              text: 'Trockene Themen: Bei Zahlen, Prozessen oder Technik ist Langeweile unvermeidbar.',
              correct: false,
              explanation:
                'Ein Thema ist nie zu langweilig für einen guten Vortrag – ein Vortrag kann nur zu eintönig für sein Thema sein. Auch Zahlen und Technik lassen sich mit Wechseln, Geschichten und konkreten Größen lebendig machen.',
            },
            {
              text: 'Zu kurze Vorträge: Das Publikum braucht mindestens 30 Minuten, um in ein Thema hineinzufinden.',
              correct: false,
              explanation:
                'Eher das Gegenteil: Die Aufmerksamkeit ist am Anfang am höchsten und sinkt dann. Länge schafft keine Aufmerksamkeit – Wechsel und Relevanz tun es.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'delivery-liveliness-q2',
          question:
            'Warum funktionieren lange Schachtelsätze im gesprochenen Vortrag nicht, obwohl sie geschrieben in Ordnung sein können?',
          options: [
            {
              text: 'Das Ohr kann nicht zurückspringen: Was beim ersten Hören nicht verstanden wird, ist verloren – gesprochene Sprache braucht kurze Sätze mit einem Gedanken pro Satz.',
              correct: true,
              explanation:
                'Genau. Das Auge kann im Text zurückspringen, das Ohr nicht. Deshalb gelten fürs Sprechen eigene Regeln: kurze Sätze, Verben statt Nominalstil, konkret statt abstrakt, aktiv statt passiv.',
            },
            {
              text: 'Lange Sätze sind grammatikalisch nur in der Schriftsprache erlaubt.',
              correct: false,
              explanation:
                'Grammatikalisch sind lange Sätze auch gesprochen korrekt – das Problem ist die Verarbeitung: Der Zuhörer muss den Satzanfang im Kopf behalten, bis endlich das Verb kommt, und steigt vorher aus.',
            },
            {
              text: 'Sie funktionieren durchaus – man muss sie nur langsamer vorlesen.',
              correct: false,
              explanation:
                'Langsames Vorlesen macht einen Schachtelsatz nicht verständlicher, nur länger quälend. Die Lösung ist, den Satz zu zerlegen: ein Gedanke, ein Satz, ein Punkt.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'delivery-liveliness-q3',
          question: 'Was besagt das Prinzip Wechsel für die Vortragsplanung?',
          options: [
            {
              text: 'Etwa alle drei bis fünf Minuten einen bewussten Aufmerksamkeits-Anker einplanen: Formatwechsel (Geschichte, Frage, Demo), Stimmwechsel oder Perspektivwechsel.',
              correct: true,
              explanation:
                'Richtig. Lebendigkeit ist planbar: Die Anker gehören beim Vorbereiten in den Ablauf wie die Inhalte selbst. Faustregel: Wer fünf Minuten am Stück dasselbe tut, ist mit dem nächsten Wechsel überfällig.',
            },
            {
              text: 'Aufmerksamkeit muss nur am Anfang gewonnen werden – wer stark einsteigt, hat das Publikum für den Rest des Vortrags sicher.',
              correct: false,
              explanation:
                'Die Aufmerksamkeit sinkt nach wenigen Minuten wieder – bei jedem Publikum, egal wie stark der Einstieg war. Sie muss im Verlauf immer wieder aktiv zurückgeholt werden, genau dafür sind die Anker da.',
            },
            {
              text: 'Wechsel wirken unruhig – ein professioneller Vortrag hält Ton, Tempo und Format konstant durch.',
              correct: false,
              explanation:
                'Genau dieses Gleichmaß erzeugt die Langeweile: Das Gehirn blendet Konstantes aus wie das Ticken einer Uhr. Geplante Wechsel sind kein Stilbruch, sondern das wirksamste Mittel dagegen.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'delivery-liveliness-q4',
          question:
            'Warum ist die direkte Ansprache („Sie kennen das aus Ihren Projekten …") so wirksam gegen das Abschalten?',
          options: [
            {
              text: 'Sie holt jeden Zuhörer persönlich ab – niemand schaltet ab, während er selbst gemeint ist und sein eigener Alltag angesprochen wird.',
              correct: true,
              explanation:
                'Richtig. Die direkte Ansprache verwandelt Zuhörer von Zuschauern in Beteiligte: Das Gehirn reagiert auf persönliche Relevanz stärker als auf jede noch so gute Sachinformation.',
            },
            {
              text: 'Sie füllt elegant die Zeit, wenn einem der nächste inhaltliche Punkt nicht sofort einfällt.',
              correct: false,
              explanation:
                'Als Lückenfüller verschenkt du das Mittel: Die Ansprache wirkt, weil sie die Inhalte mit dem Alltag des Publikums verbindet – beiläufig eingestreut ohne Bezug wird sie zur Floskel.',
            },
            {
              text: 'Sie ist riskant und sollte vermieden werden – direkte Ansprache wirkt im Business-Kontext schnell anbiedernd.',
              correct: false,
              explanation:
                'Anbiedernd wird es nur bei gespielter Vertrautheit. Die sachliche Ansprache („Sie kennen das: Montagmorgen, das System ist langsam …") ist eines der legitimsten und wirksamsten Mittel gesprochener Sprache.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'delivery-liveliness-s1',
          situation:
            'Du sollst eine 45-minütige Schulung zum neuen Freigabeprozess halten. Beim letzten Mal sind dir nach 15 Minuten die ersten Teilnehmer ins Laptop-Tippen abgewandert. Wie planst du die Schulung diesmal?',
          choices: [
            {
              text: 'Du planst Aufmerksamkeits-Anker in den Ablauf: Nach jedem Theorieblock von maximal fünf Minuten folgt ein Wechsel – eine Live-Demo, eine Frage an den Raum, ein Praxisfall aus dem Alltag der Teilnehmer oder eine kurze Mitmach-Aufgabe.',
              quality: 'best',
              feedback:
                'Sehr gut: Lebendigkeit ist planbar. Der regelmäßige Formatwechsel nutzt genau den Mechanismus, auf den das Gehirn anspringt – Veränderung. Und Mitmach-Elemente sind der stärkste Anker von allen: Wer selbst klickt, tippt nicht nebenbei.',
            },
            {
              text: 'Du kürzt die Schulung auf 20 Minuten und sprichst dafür schneller – dann ist sie vorbei, bevor jemand abschalten kann.',
              quality: 'bad',
              feedback:
                'Höheres Tempo ist keine Lebendigkeit, sondern Stress: Die Teilnehmer kommen nicht mehr mit und schalten noch früher ab – und am Ende können sie den Prozess nicht anwenden, was der Zweck der Schulung war. Kürzen kann sinnvoll sein, Hetzen nie.',
            },
            {
              text: 'Du baust mehr Folien mit Animationen und Bildern ein – visuelle Abwechslung sollte das Problem lösen.',
              quality: 'ok',
              feedback:
                'Visuelle Abwechslung hilft, greift aber zu kurz: Wenn du zu animierten Folien im selben Ton weitersprichst, bleibt der akustische Kanal monoton – und der entscheidet. Kombiniere die Folien mit echten Wechseln: Fragen an den Raum, Demos, Praxisfälle, Stimmvariation.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'delivery-liveliness-f1',
          task: 'Übersetze diesen Schriftsprache-Absatz in gesprochene, lebendige Sprache (kurze Sätze, Verben, konkret, direkte Ansprache): „Im Rahmen des Projekts wurde eine Reduzierung der Bearbeitungszeit von Kundenanfragen um 60 % realisiert, was auf die Implementierung einer automatisierten Vorqualifizierung der eingehenden Anfragen zurückzuführen ist."',
          placeholder: 'Deine gesprochene Version …',
          sampleSolution:
            '„Sie kennen das Problem: Eine Kundenanfrage kommt rein – und liegt erst mal zwei Tage, bis sie beim richtigen Team ist. (Pause) Genau da haben wir angesetzt. Das System sortiert die Anfragen jetzt automatisch vor. Das Ergebnis: Aus fünf Tagen Bearbeitungszeit wurden zwei. (Pause) 60 % schneller – ohne eine einzige zusätzliche Stelle."',
          checklist: [
            'Ich habe den Schachtelsatz in mehrere kurze Sätze zerlegt – ein Gedanke pro Satz.',
            'Ich habe Nominalstil und Passiv ersetzt („Reduzierung wurde realisiert" → „wir haben beschleunigt").',
            'Die Zahl ist in eine erlebbare Größe übersetzt (Tage, Minuten, Alltagsbild).',
            'Ich habe das Publikum direkt angesprochen oder abgeholt („Sie kennen das …").',
            'Laut gesprochen klingt die Version natürlich – wie erzählt, nicht wie vorgelesen.',
          ],
        },
      ],
    },
  ],
}
