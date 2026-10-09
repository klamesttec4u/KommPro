import type { Module } from '@/types/content'

export const bodyLanguage: Module = {
  id: 'body-language',
  title: 'Körpersprache & Auftreten',
  description:
    'Wie Stand, Gestik, Blickkontakt und Präsenz deine Wirkung bestimmen – und wie du Lampenfieber in Energie verwandelst statt dagegen anzukämpfen.',
  category: 'presentation',
  lessons: [
    {
      id: 'body-posture',
      title: 'Stand, Haltung & Gestik',
      theory: [
        {
          kind: 'text',
          body: 'Bevor du das erste Wort sagst, hat dein Körper schon gesprochen. Das Publikum liest Stand, Haltung und Gestik in Sekundenbruchteilen – und entscheidet unbewusst, ob es dir Kompetenz und Souveränität zutraut. Die gute Nachricht: Körpersprache ist kein Talent, sondern Handwerk. Ein paar Grundregeln, konsequent geübt, verändern deine Wirkung spürbar.\n\nWichtig vorweg: Es geht nicht darum, eine Rolle zu spielen. Verkrampfte „Power-Gesten" wirken genauso unglaubwürdig wie nervöses Herumtigern. Ziel ist ein Körper, der deine Botschaft unterstützt, statt von ihr abzulenken.',
        },
        {
          kind: 'text',
          heading: 'Der stabile Stand – dein Fundament',
          body: 'Die Basis jeder souveränen Präsenz ist der stabile Stand: Füße etwa hüftbreit, Gewicht gleichmäßig auf beiden Beinen, Knie locker, Oberkörper aufrecht, Schultern entspannt zurück. Aus diesem Stand heraus wirkst du geerdet – und du fühlst dich auch so, denn Haltung wirkt in beide Richtungen: Der Körper beeinflusst das Gefühl genauso wie umgekehrt.\n\nDie typischen Fehler: Gewicht auf einem Bein (wirkt lässig bis desinteressiert), ständiges Hin- und Herwippen (überträgt Nervosität aufs Publikum), gekreuzte Beine im Stehen (instabil) und eingezogene Schultern (wirkt klein und defensiv). Dazu kommt die offene Haltung: Zugewandter Oberkörper, keine verschränkten Arme, kein Rednerpult oder Laptop als Schutzschild zwischen dir und dem Publikum.',
        },
        {
          kind: 'text',
          heading: 'Gestik, Raum und das Hände-Problem',
          body: 'Für die Gestik gilt eine einfache Regel: oberhalb der Gürtellinie. Gesten im Bereich zwischen Hüfte und Brust wirken offen und unterstützen das Gesagte; herabhängende oder versteckte Hände lassen dich passiv wirken. Die Gesten dürfen groß sein – je größer der Raum und das Publikum, desto großzügiger die Gestik.\n\nDas berühmte Hände-Problem („Wohin bloß mit den Händen?") lösen Profis mit einer neutralen Grundposition: Hände locker auf Bauchnabelhöhe, leicht geöffnet oder locker aneinander – nicht verschränkt, nicht in den Taschen, nicht hinter dem Rücken. Aus dieser Grundposition heraus entstehen Gesten natürlich, und sie kehren dorthin zurück. Niemals: Stift klicken, mit Karten spielen, an Ringen drehen – solche Übersprungshandlungen saugen Aufmerksamkeit ab.\n\nAuch Bewegung im Raum will bewusst gesetzt sein: Ein paar Schritte zum Themenwechsel oder auf das Publikum zu wirken dynamisch. Dauerhaftes Hin- und Herlaufen – das sogenannte Tigern – wirkt dagegen getrieben und macht das Publikum nervös. Faustregel: Gehen, dann stehen und sprechen. Die wichtigen Sätze kommen im Stand.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Stabiler Stand: Füße hüftbreit, Gewicht auf beiden Beinen, aufrecht – das Fundament jeder Präsenz.',
            'Offene Haltung: keine verschränkten Arme, kein Pult oder Laptop als Schutzschild.',
            'Gestik oberhalb der Gürtellinie, aus einer neutralen Grundposition auf Bauchnabelhöhe.',
            'Raum bewusst nutzen: Bewegung zum Themenwechsel – aber kein nervöses Tigern. Kernbotschaften im Stand.',
            'Übersprungshandlungen eliminieren: kein Stift, keine Karten, nichts zum Spielen in der Hand.',
          ],
        },
        {
          kind: 'table',
          headers: ['Signal', 'Wirkt souverän', 'Wirkt unsicher'],
          rows: [
            [
              'Stand',
              'Hüftbreit, beide Beine belastet, ruhig',
              'Wippen, Gewicht ständig verlagern, Beine gekreuzt',
            ],
            [
              'Hände',
              'Sichtbar, locker auf Bauchnabelhöhe, offene Gesten',
              'In den Taschen, hinter dem Rücken, mit Stift spielend',
            ],
            [
              'Arme',
              'Offen, unterstützende Gestik oberhalb der Gürtellinie',
              'Verschränkt, hängend, klein und eng am Körper',
            ],
            [
              'Bewegung',
              'Gezielte Schritte zum Themenwechsel, dann stehen',
              'Dauerhaftes Tigern, Rückzug hinter das Pult',
            ],
          ],
        },
        {
          kind: 'example',
          title: 'Auftritt beim Projekt-Pitch',
          good: 'Anna tritt vor das Team, stellt sich hüftbreit und ruhig hin, die Hände locker auf Bauchnabelhöhe. Beim ersten Argument öffnet sie die Arme in einer einladenden Geste, zum zweiten Thema macht sie zwei bewusste Schritte zur Seite und bleibt wieder stehen. Ihre Kernbotschaft spricht sie im ruhigen Stand, mit einer klaren, offenen Geste zum Publikum.',
          bad: 'Ben steht hinter dem aufgeklappten Laptop, das Gewicht auf dem linken Bein, die rechte Hand klickt rhythmisch den Kugelschreiber. Während er spricht, wandert er ziellos vor der Leinwand hin und her, die Augen auf seinen Folien. Seine wichtigste Botschaft sagt er im Gehen, halb zur Leinwand gedreht.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'body-posture-q1',
          question: 'Wie sieht der stabile Stand für Präsentationen aus?',
          options: [
            {
              text: 'Füße etwa hüftbreit, Gewicht gleichmäßig auf beiden Beinen, Knie locker, Oberkörper aufrecht.',
              correct: true,
              explanation:
                'Richtig. Dieser Stand erdet dich sichtbar und spürbar – er wirkt souverän auf das Publikum und beruhigt dich selbst, weil Haltung in beide Richtungen wirkt.',
            },
            {
              text: 'Gewicht locker auf ein Bein verlagert – das wirkt entspannt und nahbar.',
              correct: false,
              explanation:
                'Was sich entspannt anfühlt, liest das Publikum schnell als lässig bis desinteressiert – und meist beginnt aus dieser Position das unruhige Gewichtsverlagern. Beide Beine tragen.',
            },
            {
              text: 'Möglichst nah am Rednerpult oder Laptop, um einen festen Ankerpunkt zu haben.',
              correct: false,
              explanation:
                'Pult und Laptop werden schnell zum Schutzschild, das Distanz zum Publikum schafft. Dein Ankerpunkt ist dein eigener Stand, nicht ein Möbelstück.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'body-posture-q2',
          question: 'Was unterscheidet souveräne Raumnutzung vom nervösen „Tigern"?',
          options: [
            {
              text: 'Souveräne Bewegung ist gezielt – etwa ein paar Schritte zum Themenwechsel – und endet im ruhigen Stand; Tigern ist ungerichtetes Dauerlaufen.',
              correct: true,
              explanation:
                'Genau. Bewegung mit Absicht wirkt dynamisch und strukturiert sogar den Inhalt („neuer Standort = neues Thema"). Ziellose Dauerbewegung überträgt dagegen Unruhe aufs Publikum.',
            },
            {
              text: 'Souveräne Redner bewegen sich gar nicht – jede Bewegung ist ein Zeichen von Nervosität.',
              correct: false,
              explanation:
                'Komplette Bewegungslosigkeit wirkt steif und leblos. Es geht nicht um Stillstand, sondern um den Unterschied zwischen bewusster Bewegung und nervösem Dauerlauf.',
            },
            {
              text: 'Tigern ist nur auf kleinen Bühnen ein Problem – in großen Räumen fällt es nicht auf.',
              correct: false,
              explanation:
                'Gerade in großen Räumen verfolgt das Publikum jede Bewegung. Rastloses Laufen wirkt dort genauso getrieben – die Regel „gehen, dann stehen und sprechen" gilt überall.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'body-posture-s1',
          situation:
            'Du siehst die Videoaufzeichnung deiner letzten Präsentation und erschrickst: Du stehst fast durchgehend mit verschränkten Armen da, und wenn du sie löst, spielst du mit deinem Kugelschreiber. Nächste Woche präsentierst du vor einem wichtigen Kunden.',
          choices: [
            {
              text: 'Du legst für den Kundentermin den Stift bewusst weg, übst vorher die neutrale Grundposition (Hände locker auf Bauchnabelhöhe) im Probedurchlauf und bittest eine Kollegin, im Termin diskret darauf zu achten und dir danach Feedback zu geben.',
              quality: 'best',
              feedback:
                'Sehr gut: Du entfernst den Auslöser (Stift), trainierst die Ersatzposition vorher körperlich ein und organisierst Feedback. Die Grundposition muss ins Muskelgedächtnis – genau das leistet der Probedurchlauf, und das Kollegen-Feedback zeigt dir, ob es unter Druck hält.',
            },
            {
              text: 'Du nimmst dir vor, im Kundentermin einfach an deine Hände zu denken und die Arme nicht zu verschränken.',
              quality: 'ok',
              feedback:
                'Bewusstheit ist der richtige erste Schritt – aber unter Druck gehen gute Vorsätze verloren, weil verschränkte Arme ein Automatismus sind. Ohne eingeübte Alternative (Grundposition) und ohne den Stift wegzulegen wirst du vermutlich zurückfallen. Plane mindestens einen Probedurchlauf ein.',
            },
            {
              text: 'Du beschließt, beim Kundentermin die Hände in die Hosentaschen zu stecken – dann kannst du weder Arme verschränken noch mit dem Stift spielen.',
              quality: 'bad',
              feedback:
                'Du ersetzt ein Problem durch ein anderes: Hände in den Taschen wirken im Kundentermin salopp bis desinteressiert und nehmen dir jede unterstützende Gestik. Die Lösung ist nicht, die Hände wegzusperren, sondern ihnen eine aktive Aufgabe zu geben – Grundposition und offene Gesten.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'body-posture-f1',
          task: 'Schreibe eine kurze Körpersprache-Regie für die ersten zwei Minuten deiner nächsten Präsentation: Wo stehst du beim Einstieg, was machen deine Hände, wann bewegst du dich wohin? Plane mindestens einen bewussten Positionswechsel ein.',
          placeholder: 'Einstieg: Ich stehe …\nHände: …\nPositionswechsel: …',
          sampleSolution:
            'Einstieg: Ich stelle mich mittig vor das Publikum, Füße hüftbreit, Gewicht auf beiden Beinen – nicht hinter dem Laptop. Ich stehe zwei Sekunden ruhig und nehme Blickkontakt auf, bevor ich spreche.\nHände: Grundposition locker auf Bauchnabelhöhe, kein Stift, keine Karten. Bei der Begrüßung eine offene Geste zum Publikum, bei den drei Agenda-Punkten zähle ich sichtbar mit den Fingern mit.\nPositionswechsel: Nach dem Einstieg (Ende der Problembeschreibung) gehe ich zwei bewusste Schritte nach links zur Leinwand und bleibe dort stehen – der Ortswechsel markiert den Übergang zur Lösung. Die Kernbotschaft spreche ich im ruhigen Stand, frontal zum Publikum.',
          checklist: [
            'Ich habe einen konkreten Standort für den Einstieg festgelegt (nicht hinter Laptop oder Pult).',
            'Ich habe beschrieben, was meine Hände in der Grundposition tun.',
            'Ich habe mindestens einen bewussten Positionswechsel mit inhaltlichem Anlass geplant.',
            'Meine Kernbotschaft kommt im ruhigen Stand, nicht im Gehen.',
            'Ich habe Gegenstände (Stift, Karten) bewusst aus der Planung verbannt.',
          ],
        },
      ],
    },
    {
      id: 'body-eyes',
      title: 'Blickkontakt & Präsenz',
      theory: [
        {
          kind: 'text',
          body: 'Blickkontakt ist der direkteste Draht zum Publikum: Er schafft Verbindung, signalisiert Selbstsicherheit und macht aus einem Vortrag ein Gespräch. Wer über die Köpfe hinweg, auf die Folien oder in die Notizen schaut, verliert sein Publikum – egal, wie gut der Inhalt ist.\n\nTrotzdem ist Blickkontakt für viele das Unangenehmste am Präsentieren. Der Grund ist meist ein Missverständnis: Es geht nicht darum, einen anonymen „Saal" anzuschauen, sondern einzelne Menschen – nacheinander, jeweils für einen kurzen Moment. Das ist leichter, als es klingt, und es gibt eine einfache Technik dafür.',
        },
        {
          kind: 'text',
          heading: 'Die 3-Sekunden-Technik',
          body: 'Die Profi-Technik für Blickkontakt: Halte den Blick etwa drei Sekunden bei einer Person – ungefähr einen Satz oder Gedanken lang – und wandere dann bewusst zur nächsten. Drei Sekunden sind lang genug, dass sich die Person wirklich angesprochen fühlt, und kurz genug, dass es nicht aufdringlich wird. Hektisches Umherschweifen wirkt gehetzt; minutenlanges Fixieren einer Person macht beide Seiten nervös.\n\nDabei gilt: alle Bereiche des Publikums bedienen. Die meisten Redner haben unbewusst eine Lieblingsseite und blicken fast nur dorthin – oft zu den freundlich nickenden Gesichtern. Teile den Raum gedanklich in Zonen (links, Mitte, rechts, vorne, hinten) und wandere bewusst durch alle. In großen Räumen reicht es, in eine Zone zu blicken: Alle dort haben das Gefühl, gemeint zu sein.',
        },
        {
          kind: 'text',
          heading: 'Präsenz vor dem ersten Wort – und der Umgang mit Skeptikern',
          body: 'Deine Wirkung beginnt nicht mit dem ersten Satz, sondern mit dem Moment, in dem du nach vorne gehst. Der häufigste Anfängerfehler: loslegen, während man noch den Laptop anschließt oder zur Position läuft. Profis machen es anders: hinstellen, Stand finden, zwei bis drei Sekunden in den Raum schauen, Blickkontakt mit zwei, drei Personen aufnehmen – und erst dann sprechen. Diese kurze Stille vor dem ersten Wort erzeugt Aufmerksamkeit und signalisiert: Hier steht jemand, der weiß, was er tut.\n\nUnd die Skeptiker? In fast jedem Publikum sitzt jemand mit verschränkten Armen und gerunzelter Stirn. Zwei Fehler liegen nahe: den Skeptiker komplett meiden (er merkt es – und das Publikum auch) oder sich an ihm festbeißen und nur noch ihn überzeugen wollen. Beides schwächt dich. Die souveräne Lösung: Skeptiker normal in die Blickrunde einbeziehen, kurz und freundlich, dann weiterwandern. Wichtig zu wissen: Verschränkte Arme bedeuten oft nur Konzentration oder einen kalten Raum – nicht jeder ernste Blick ist Ablehnung. Deine Energie gehört dem ganzen Raum, nicht dem einen finsteren Gesicht.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            '3-Sekunden-Technik: eine Person etwa einen Gedanken lang anschauen, dann bewusst weiterwandern.',
            'Alle Zonen des Raums bedienen – nicht nur die freundliche Lieblingsseite.',
            'Präsenz vor dem ersten Wort: hinstellen, Stand finden, Blickkontakt aufnehmen, dann erst sprechen.',
            'Skeptiker einbeziehen statt meiden oder bekehren wollen – und ihre Mimik nicht überinterpretieren.',
            'Blickkontakt braucht freie Augen: Wer abliest oder auf Folien schaut, kann keine Verbindung aufbauen.',
          ],
        },
        {
          kind: 'example',
          title: 'Der Start der Quartalspräsentation',
          good: 'Sara geht ruhig nach vorne, stellt sich hin, findet ihren Stand und lässt den Blick zwei Sekunden durch den Raum wandern. Sie nimmt kurz Blickkontakt mit einer Person links, einer in der Mitte und einer rechts auf. Erst dann beginnt sie: „Drei Zahlen haben mich diese Woche überrascht." Während des Vortrags wandert ihr Blick in 3-Sekunden-Schritten durch alle Zonen – auch zu dem Kollegen mit den verschränkten Armen in Reihe zwei.',
          bad: 'Tom beginnt seinen ersten Satz schon auf dem Weg nach vorne, während er das HDMI-Kabel einsteckt. Die ersten zwei Minuten spricht er mit der Leinwand, auf die er selbst schaut. Als er merkt, dass der Abteilungsleiter skeptisch guckt, spricht er die restliche Präsentation fast nur noch in dessen Richtung – der Rest des Raums ist abgehängt.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'body-eyes-q1',
          question: 'Wie funktioniert die 3-Sekunden-Technik beim Blickkontakt?',
          options: [
            {
              text: 'Den Blick etwa drei Sekunden – ungefähr einen Gedanken lang – bei einer Person halten, dann bewusst zur nächsten Person in einer anderen Zone wandern.',
              correct: true,
              explanation:
                'Richtig. So fühlt sich jede angeschaute Person wirklich gemeint, ohne dass es aufdringlich wird – und über die Zonenwanderung erreichst du nach und nach den ganzen Raum.',
            },
            {
              text: 'Alle drei Sekunden kurz vom Skript aufblicken, um Präsenz zu zeigen.',
              correct: false,
              explanation:
                'Kurzes Aufblicken vom Skript ist kein echter Blickkontakt – die Verbindung entsteht erst, wenn du den Blick bei einer Person hältst. Die Basis dafür ist freies Sprechen.',
            },
            {
              text: 'Die wichtigste Person im Raum alle drei Sekunden anschauen, die anderen gelegentlich.',
              correct: false,
              explanation:
                'Damit hängst du den Rest des Raums ab – und die fixierte Person fühlt sich belagert. Blickkontakt verteilt sich auf alle Zonen, unabhängig von der Hierarchie.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'body-eyes-q2',
          question: 'Warum lohnt sich die kurze Stille, bevor du das erste Wort sprichst?',
          options: [
            {
              text: 'Sie erzeugt Aufmerksamkeit, gibt dir Zeit für Stand und Blickkontakt und signalisiert Souveränität – die Wirkung beginnt vor dem ersten Satz.',
              correct: true,
              explanation:
                'Genau. Hinstellen, Stand finden, zwei bis drei Sekunden in den Raum schauen – diese Momente sammeln das Publikum ein und etablieren dich, bevor du inhaltlich überhaupt begonnen hast.',
            },
            {
              text: 'Sie gibt Nachzüglern Zeit, noch einen Platz zu finden.',
              correct: false,
              explanation:
                'Das kann ein Nebeneffekt sein, ist aber nicht der Punkt: Die Stille wirkt auf alle Anwesenden – sie erzeugt Spannung und Präsenz, nicht nur eine Pufferzeit.',
            },
            {
              text: 'Sie ist eine Höflichkeitsformel, die das Publikum schlicht erwartet.',
              correct: false,
              explanation:
                'Es geht nicht um Etikette, sondern um Wirkung: Die bewusste Stille vor dem Einstieg bündelt die Aufmerksamkeit und lässt dich kontrolliert statt getrieben erscheinen.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'body-eyes-s1',
          situation:
            'Du präsentierst deinem Führungskreis einen Veränderungsvorschlag. In der ersten Reihe sitzt der kaufmännische Leiter – verschränkte Arme, gerunzelte Stirn, kein Nicken. Du merkst, wie dich sein Gesichtsausdruck zunehmend nervös macht.',
          choices: [
            {
              text: 'Du beziehst ihn ganz normal in deine Blickrunde ein – drei Sekunden, freundlich, dann weiter zu den anderen – und erinnerst dich: Verschränkte Arme können schlicht Konzentration bedeuten. Deine Energie gehört dem ganzen Raum.',
              quality: 'best',
              feedback:
                'Sehr gut: Du bleibst bei deiner Technik, statt dich von einer einzelnen Mimik aus dem Konzept bringen zu lassen. Nicht selten entpuppt sich der vermeintliche Skeptiker hinterher als derjenige, der am konzentriertesten zugehört hat – und falls er wirklich Einwände hat, kommen die in der Fragerunde, wo du sie sachlich klären kannst.',
            },
            {
              text: 'Du meidest seinen Blick für den Rest der Präsentation und konzentrierst dich auf die freundlichen Gesichter – das hält deine Nervosität im Zaum.',
              quality: 'ok',
              feedback:
                'Kurzfristig schützt das dein Nervenkostüm, und die freundlichen Gesichter geben dir Energie. Aber das Ausweichen fällt auf – ihm und den anderen – und wirkt wie ein Eingeständnis von Unsicherheit. Zudem fühlt er sich übergangen, was seine Skepsis eher verstärkt. Besser: kurz und normal einbeziehen, dann weiter.',
            },
            {
              text: 'Du richtest deine Präsentation jetzt gezielt an ihn: Du hältst längeren Blickkontakt, sprichst seine vermuteten Einwände ungefragt an und fragst zwischendurch: „Sie schauen skeptisch – womit habe ich Sie noch nicht überzeugt?"',
              quality: 'bad',
              feedback:
                'Damit machst du drei Fehler auf einmal: Du hängst den Rest des Raums ab, du stellst ihn vor allen bloß (seine Mimik öffentlich zu kommentieren zwingt ihn in die Defensive), und du behandelst eine Interpretation als Tatsache – vielleicht war er nur in Gedanken. So erzeugst du den Widerstand, den du vermeiden wolltest.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'body-eyes-f1',
          task: 'Entwirf dein persönliches Präsenz-Ritual für die ersten 15 Sekunden deines nächsten Auftritts – vom Weg nach vorne bis zum ersten Satz. Beschreibe konkret: Was tust du körperlich, wohin schaust du, wann sprichst du?',
          placeholder: 'Weg nach vorne: …\nAnkommen: …\nBlick: …\nErster Satz: …',
          sampleSolution:
            'Weg nach vorne: Ich gehe ruhig und aufrecht nach vorne – Technik und Folien habe ich vorher eingerichtet, damit dieser Moment mir gehört.\nAnkommen: Ich stelle mich mittig hin, Füße hüftbreit, Hände in der Grundposition. Ich atme einmal tief in den Bauch.\nBlick: Ich lasse den Blick zwei, drei Sekunden durch den Raum wandern und nehme kurz Blickkontakt mit je einer Person links, in der Mitte und rechts auf. Ich lächle dabei leicht.\nErster Satz: Erst wenn es still ist und ich stehe, beginne ich – mit meinem vorbereiteten Einstiegssatz, nicht mit „Ja, dann fange ich mal an".',
          checklist: [
            'Ich habe den Moment des Ankommens bewusst gestaltet (Stand, Atmung), bevor ich spreche.',
            'Ich habe eine kurze Stille mit Blickkontakt vor dem ersten Wort eingeplant.',
            'Ich habe mindestens drei Zonen des Raums für den ersten Blickkontakt vorgesehen.',
            'Mein erster Satz ist vorbereitet und beginnt nicht mit einer Verlegenheitsfloskel.',
          ],
        },
      ],
    },
    {
      id: 'body-nerves',
      title: 'Lampenfieber souverän nutzen',
      theory: [
        {
          kind: 'text',
          body: 'Herzklopfen, feuchte Hände, flacher Atem vor dem Auftritt – wenn du das kennst, bist du in bester Gesellschaft: Die große Mehrheit aller Menschen hat Lampenfieber, auch erfahrene Redner und Profis auf großen Bühnen. Der Unterschied liegt nicht darin, ob jemand Lampenfieber hat, sondern wie er damit umgeht.\n\nDie wichtigste Erkenntnis zuerst: Lampenfieber ist keine Schwäche, sondern eine normale Stressreaktion. Dein Körper mobilisiert Energie für eine wichtige Situation – mehr Sauerstoff, mehr Wachheit, schnellere Reaktionen. Genau diese Aktivierung brauchst du für einen lebendigen Auftritt. Ein Redner ganz ohne Anspannung wirkt oft flach. Das Ziel ist also nicht, das Lampenfieber wegzumachen, sondern es von Gegner zu Verbündetem umzudeuten: Das ist keine Angst, das ist Startenergie.',
        },
        {
          kind: 'text',
          heading: 'Die 4-6-Atmung: der schnellste Hebel',
          body: 'Der direkteste Weg, akute Nervosität zu regulieren, führt über die Atmung – denn sie ist die einzige Stressfunktion, die du willentlich steuern kannst. Die wirksamste Technik ist die 4-6-Atmung: vier Sekunden durch die Nase einatmen, sechs Sekunden langsam durch den Mund ausatmen. Entscheidend ist das verlängerte Ausatmen: Es aktiviert den Parasympathikus, den Beruhigungsnerv des Körpers, und senkt nachweislich Puls und Anspannung.\n\nDrei bis fünf Runden reichen – das sind kaum zwei Minuten, und sie funktionieren überall: am Schreibtisch vor dem Termin, auf dem Flur, auf dem Weg zum Meetingraum. Wichtig: in den Bauch atmen, nicht in die Brust. Die tiefe Bauchatmung gibt dir außerdem die Stimmkraft, die unter Stress als Erstes verloren geht.',
        },
        {
          kind: 'text',
          heading: 'Vorbereitung, Power-Posing und der Blackout-Notfallplan',
          body: 'Das wirksamste Mittel gegen Lampenfieber ist unspektakulär: Vorbereitung. Wer seinen Einstieg und seine Kernbotschaften im Schlaf beherrscht, hat ein Sicherheitsnetz, das keine Atemtechnik ersetzen kann. Übe vor allem die erste Minute laut und mehrfach – die Nervosität ist am Anfang am größten, und ein sicherer Start trägt dich durch den Rest.\n\nZum berühmten Power-Posing (zwei Minuten Siegerpose vor dem Auftritt) eine ehrliche Einordnung: Die ursprüngliche Behauptung, es verändere messbar den Hormonspiegel, hat sich in Folgestudien nicht bestätigt. Was aber bleibt: Eine aufrechte, raumgreifende Haltung kann das eigene Sicherheitsgefühl stärken – als mentales Ritual ist das völlig legitim, nur Wunder darfst du keine erwarten.\n\nUnd wenn trotz allem der Faden reißt? Dafür gibt es den Blackout-Notfallplan, den du dir vorab zurechtlegst: Erstens ruhig atmen und die Stille aushalten – das Publikum empfindet sie viel kürzer als du. Zweitens zum letzten Punkt zurückkehren und ihn mit anderen Worten zusammenfassen („Der entscheidende Punkt bis hierhin ist …") – beim Sprechen springt der Faden meist wieder an. Drittens, falls nötig, offensiv und menschlich: „Da ist mir gerade der Faden gerissen – wo war ich stehen geblieben?" Kein Publikum nimmt dir das übel; die meisten mögen dich danach sogar mehr. Allein zu wissen, dass es diesen Plan gibt, nimmt dem Blackout seinen Schrecken – und macht ihn damit unwahrscheinlicher.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Lampenfieber ist normal und nützlich: Es ist Startenergie, keine Schwäche – umdeuten statt bekämpfen.',
            '4-6-Atmung bei akuter Nervosität: 4 Sekunden einatmen, 6 Sekunden ausatmen, 3-5 Runden – das lange Ausatmen beruhigt.',
            'Vorbereitung ist das beste Mittel: vor allem die erste Minute laut und mehrfach üben.',
            'Power-Posing nüchtern einordnen: als mentales Ritual okay, die Hormon-Wirkung ist wissenschaftlich nicht belegt.',
            'Blackout-Notfallplan parat haben: atmen und Stille aushalten, letzten Punkt zusammenfassen, notfalls offensiv nachfragen.',
          ],
        },
        {
          kind: 'table',
          headers: ['Situation', 'Was hilft konkret'],
          rows: [
            [
              'Tage vorher: wachsende Anspannung',
              'Einstieg und Kernbotschaften laut üben, Probedurchlauf mit Aufnahme, Raum und Technik vorab klären',
            ],
            [
              'Minuten vorher: Herzklopfen, flacher Atem',
              '3-5 Runden 4-6-Atmung, bewusst langsam gehen, Wasser trinken, Umdeutung: „Das ist Startenergie"',
            ],
            [
              'Erste Minute: zittrige Stimme',
              'Geübten Einstieg abrufen, bewusst langsam sprechen, stabilen Stand einnehmen, früh Blickkontakt zu freundlichen Gesichtern',
            ],
            [
              'Mitten im Vortrag: Blackout',
              'Atmen, Stille aushalten, letzten Punkt neu zusammenfassen – notfalls offen fragen: „Wo war ich stehen geblieben?"',
            ],
          ],
        },
        {
          kind: 'example',
          title: 'Die Viertelstunde vor dem großen Auftritt',
          good: 'Jana ist 20 Minuten vorher im Raum, prüft Technik und Klickrichtung, legt sich ihr Wasserglas bereit. Dann geht sie kurz auf den Flur, macht vier Runden 4-6-Atmung und sagt sich: „Das Kribbeln ist Startenergie – ich bin vorbereitet." Die erste Minute ihres Vortrags kann sie auswendig. Als sie beginnt, zittert ihre Stimme kurz – sie spricht bewusst langsamer, und nach drei Sätzen trägt die Routine.',
          bad: 'Markus feilt bis 30 Sekunden vor Beginn hektisch an Folie 23, hetzt dann unatmend nach vorne und beginnt mit rasendem Puls: „Ähm, ja, also – ich hoffe, man sieht die Folien hinten?" Seinen Einstieg hat er nie laut geübt; als der erste Satz holpert, denkt er „Jetzt merken alle, wie nervös ich bin" – und genau dieser Gedanke lässt den Faden reißen.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'body-nerves-q1',
          question: 'Warum gilt Lampenfieber als normal und sogar nützlich?',
          options: [
            {
              text: 'Es ist eine natürliche Aktivierung des Körpers, die Energie und Wachheit für den Auftritt liefert – richtig umgedeutet wird sie zum Verbündeten.',
              correct: true,
              explanation:
                'Richtig. Die Stressreaktion mobilisiert genau die Energie, die ein lebendiger Auftritt braucht. Profis unterscheiden sich nicht durch fehlendes Lampenfieber, sondern durch den Umgang damit.',
            },
            {
              text: 'Es betrifft nur unerfahrene Redner und verschwindet nach den ersten zehn Auftritten von selbst.',
              correct: false,
              explanation:
                'Auch sehr erfahrene Redner und Bühnenprofis kennen Lampenfieber. Es wird mit Routine handhabbarer, verschwindet aber selten ganz – und das ist auch nicht nötig.',
            },
            {
              text: 'Es zwingt dazu, Präsentationen kurz zu halten, was dem Publikum entgegenkommt.',
              correct: false,
              explanation:
                'Das ist weder der Mechanismus noch das Ziel: Der Nutzen von Lampenfieber liegt in der körperlichen Aktivierung – Energie, Fokus, Präsenz – nicht in der Vortragslänge.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'body-nerves-q2',
          question: 'Was ist das Entscheidende an der 4-6-Atmung gegen akute Nervosität?',
          options: [
            {
              text: 'Das Ausatmen ist länger als das Einatmen – das aktiviert den Beruhigungsnerv (Parasympathikus) und senkt Puls und Anspannung.',
              correct: true,
              explanation:
                'Genau. Vier Sekunden ein, sechs Sekunden aus: Das verlängerte Ausatmen ist der Wirkmechanismus. Drei bis fünf Runden reichen und funktionieren unauffällig fast überall.',
            },
            {
              text: 'Man atmet möglichst schnell und tief, um das Gehirn mit maximal viel Sauerstoff zu versorgen.',
              correct: false,
              explanation:
                'Schnelles tiefes Atmen ist Hyperventilation – sie verstärkt Stresssymptome wie Schwindel und Herzklopfen eher. Beruhigend wirkt das langsame, verlängerte Ausatmen.',
            },
            {
              text: 'Die Technik funktioniert nur, wenn man sie mindestens 20 Minuten vor dem Auftritt beginnt.',
              correct: false,
              explanation:
                'Im Gegenteil – das ist ihre Stärke: Drei bis fünf Runden dauern kaum zwei Minuten und wirken auch kurz vor oder sogar während des Termins, etwa in einer natürlichen Pause.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'body-nerves-s1',
          situation:
            'Mitten in deiner Präsentation vor dem Führungskreis passiert es: Blackout. Du weißt plötzlich nicht mehr, was als Nächstes kommt. Der Raum ist still, alle schauen dich an, dein Puls rast.',
          choices: [
            {
              text: 'Du atmest ruhig durch, hältst die Stille zwei, drei Sekunden aus und fasst dann deinen letzten Punkt mit anderen Worten zusammen: „Der entscheidende Punkt bis hierhin ist …" – während du sprichst, kommt der Faden zurück.',
              quality: 'best',
              feedback:
                'Sehr gut: Genau so funktioniert der Notfallplan. Die Stille wirkt auf das Publikum wie eine bewusste Denkpause – niemand ahnt den Blackout. Und das Zusammenfassen bringt dein Gehirn zurück in den inhaltlichen Fluss, sodass der nächste Gedanke fast immer von selbst anspringt.',
            },
            {
              text: 'Du sagst offen und mit einem Lächeln: „Da ist mir gerade der Faden gerissen – wo war ich stehen geblieben?" Jemand ruft dir das Stichwort zu, und du machst weiter.',
              quality: 'ok',
              feedback:
                'Das ist völlig in Ordnung und allemal besser als Panik – das Publikum reagiert auf so viel Ehrlichkeit fast immer wohlwollend. Es ist allerdings die Stufe zwei des Notfallplans: Versuche zuerst die unauffälligere Variante (atmen, Stille aushalten, zusammenfassen) – oft löst sie den Knoten, ohne dass jemand etwas merkt.',
            },
            {
              text: 'Du überspielst die Lücke, indem du hastig irgendetwas erzählst, das dir gerade einfällt, und blätterst dabei schnell durch deine Folien, bis etwas Bekanntes auftaucht.',
              quality: 'bad',
              feedback:
                'Riskant: Hektisches Reden ohne roten Faden plus nervöses Folien-Blättern macht den Blackout erst richtig sichtbar – und das Zusammenhanglose bleibt beim Publikum hängen. Die Stille, die du vermeiden wolltest, wäre viel souveräner gewesen: Sie fühlt sich für dich endlos an, für das Publikum sind es zwei unauffällige Sekunden.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'body-nerves-f1',
          task: 'Erstelle deinen persönlichen Lampenfieber-Plan für die nächste wichtige Präsentation mit drei Phasen: Was tust du am Vortag, was in den letzten 15 Minuten davor, und wie lautet dein Blackout-Notfallplan in eigenen Worten?',
          placeholder: 'Vortag: …\n15 Minuten davor: …\nFalls Blackout: …',
          sampleSolution:
            'Vortag: Ich übe den Einstieg (erste Minute) dreimal laut und nehme einen Durchlauf mit dem Handy auf. Ich prüfe, ob Raum, Technik und Unterlagen geklärt sind, und packe alles fertig. Abends kein neues Feilen mehr an den Folien.\n15 Minuten davor: Ich bin früh im Raum, prüfe Beamer und Presenter, lege mir Wasser bereit. Dann vier Runden 4-6-Atmung auf dem Flur und die bewusste Umdeutung: „Das Kribbeln ist Startenergie – ich bin vorbereitet."\nFalls Blackout: Erstens ruhig ausatmen und die Stille aushalten – sie ist kürzer, als sie sich anfühlt. Zweitens meinen letzten Punkt mit anderen Worten zusammenfassen: „Der entscheidende Punkt bis hierhin ist …". Drittens, wenn nichts kommt: offen und freundlich fragen: „Da ist mir der Faden gerissen – wo war ich stehen geblieben?"',
          checklist: [
            'Ich habe für den Vortag konkretes lautes Üben eingeplant, besonders für die erste Minute.',
            'Ich habe eine Atemtechnik (z.B. 4-6-Atmung) fest in die letzten Minuten eingebaut.',
            'Ich habe eine Umdeutung formuliert, die Lampenfieber als Startenergie rahmt.',
            'Mein Blackout-Notfallplan hat mindestens zwei Eskalationsstufen.',
            'Mein Plan ist realistisch und passt zu mir – ich kann ihn aus dem Gedächtnis abrufen.',
          ],
        },
      ],
    },
  ],
}
