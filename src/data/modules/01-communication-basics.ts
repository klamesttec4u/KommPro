import type { Module } from '@/types/content'

export const communicationBasics: Module = {
  id: 'communication-basics',
  title: 'Grundlagen der Kommunikation',
  description:
    'Wie Kommunikation wirklich funktioniert: Sender, Empfänger, die vier Seiten einer Nachricht und warum Missverständnisse normal sind.',
  category: 'communication',
  lessons: [
    {
      id: 'basics-communication-model',
      title: 'Wie Kommunikation funktioniert',
      theory: [
        {
          kind: 'text',
          body: 'Kommunikation wirkt banal: Einer sagt etwas, der andere hört zu. In der Praxis scheitert Business-Kommunikation aber ständig – Aufgaben werden doppelt erledigt, E-Mails falsch verstanden, Meetings enden ohne Ergebnis. Der Grund: Zwischen dem, was gemeint ist, und dem, was ankommt, liegen mehrere Übersetzungsschritte, die alle schiefgehen können.',
        },
        {
          kind: 'text',
          heading: 'Das Sender-Empfänger-Modell',
          body: 'Das klassische Modell von Shannon und Weaver beschreibt Kommunikation als Übertragung: Ein Sender verschlüsselt (enkodiert) seinen Gedanken in Worte, Tonfall und Körpersprache. Der Empfänger entschlüsselt (dekodiert) diese Signale wieder – mit seinem eigenen Vorwissen, seiner Stimmung und seinen Erwartungen.\n\nGenau hier entstehen Missverständnisse: Gemeint ist nicht gesagt. Gesagt ist nicht gehört. Gehört ist nicht verstanden. Und verstanden ist noch lange nicht einverstanden oder umgesetzt.',
        },
        {
          kind: 'table',
          headers: ['Stufe', 'Was schiefgehen kann'],
          rows: [
            ['Gedacht → Gesagt', 'Unklare, verkürzte oder mehrdeutige Formulierung'],
            ['Gesagt → Gehört', 'Ablenkung, Lärm, Multitasking des Empfängers'],
            ['Gehört → Verstanden', 'Anderes Vorwissen, andere Interpretation'],
            ['Verstanden → Einverstanden', 'Andere Interessen, fehlende Überzeugung'],
            ['Einverstanden → Umgesetzt', 'Vergessen, keine Priorität, unklare Verantwortung'],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Verantwortung beim Sender: Wer etwas erreichen will, muss empfängergerecht formulieren.',
            'Verstehen ist nie garantiert – deshalb Rückfragen stellen und Verständnis prüfen.',
            'Wichtige Botschaften brauchen Bestätigung („Was nimmst du mit?"), keine Annahmen.',
            'Je wichtiger die Botschaft, desto reicher der Kanal: Gespräch schlägt E-Mail.',
          ],
        },
        {
          kind: 'example',
          title: 'Aufgabenübergabe im Team',
          good: '„Kannst du bis Donnerstag 12 Uhr den Entwurf für das Kundenangebot fertigstellen? Wichtig sind vor allem die Preistabelle und die Referenzen. Melde dich gern, wenn etwas unklar ist – passt das für dich?"',
          bad: '„Kümmer dich mal zeitnah um das Angebot."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'basics-communication-model-q1',
          question: 'Was beschreibt das Sender-Empfänger-Modell im Kern?',
          options: [
            {
              text: 'Kommunikation als Übertragung: Der Sender verschlüsselt eine Botschaft, der Empfänger entschlüsselt sie mit seinem eigenen Hintergrund.',
              correct: true,
              explanation:
                'Genau: Enkodieren und Dekodieren laufen nie identisch ab – deshalb kommt selten exakt das an, was gemeint war.',
            },
            {
              text: 'Kommunikation funktioniert immer, solange der Sender sich klar ausdrückt.',
              correct: false,
              explanation:
                'Auch bei klarer Formulierung dekodiert der Empfänger mit eigenem Vorwissen und eigener Stimmung – Missverständnisse bleiben möglich.',
            },
            {
              text: 'Der Empfänger ist allein dafür verantwortlich, die Botschaft richtig zu verstehen.',
              correct: false,
              explanation:
                'Im Business gilt das Gegenteil: Die Hauptverantwortung für Verständlichkeit liegt beim Sender.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'basics-communication-model-q2',
          question:
            '„Gesagt ist nicht gehört, gehört ist nicht verstanden …" – was folgt daraus für die Praxis?',
          options: [
            {
              text: 'Wichtige Botschaften sollte man wiederholen, Verständnis aktiv prüfen und Vereinbarungen bestätigen lassen.',
              correct: true,
              explanation:
                'Richtig. Profis sichern Verständnis ab, z.B. durch Zusammenfassen und konkrete Rückfragen – statt auf Annahmen zu bauen.',
            },
            {
              text: 'Man sollte möglichst viel schriftlich kommunizieren, dann gibt es keine Missverständnisse.',
              correct: false,
              explanation:
                'Schriftliches ist dokumentiert, aber nicht automatisch verstanden – und es fehlen Tonfall und direkte Rückfragen.',
            },
            {
              text: 'Man sollte langsamer und lauter sprechen.',
              correct: false,
              explanation:
                'Lautstärke löst kein Verständnisproblem – es geht um Interpretation, nicht um Akustik.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'basics-communication-model-s1',
          situation:
            'Du hast einer Kollegin eine wichtige Aufgabe übertragen: Sie soll bis Freitag die Zahlen für die Geschäftsführungs-Präsentation aufbereiten. Am Mittwoch merkst du im Vorbeigehen, dass sie an etwas völlig anderem arbeitet.',
          choices: [
            {
              text: '„Hast du kurz Zeit? Ich glaube, wir hatten die Zahlen für Freitag anders besprochen – wie hast du unsere Absprache verstanden?"',
              quality: 'best',
              feedback:
                'Sehr gut: Du klärst zuerst, was bei ihr angekommen ist, statt Vorwürfe zu machen. Oft liegt das Missverständnis in der ursprünglichen Übergabe – und die Verantwortung dafür trägt der Sender mit.',
            },
            {
              text: '„Nur zur Erinnerung: Freitag brauche ich die Zahlen!" – und du gehst weiter.',
              quality: 'ok',
              feedback:
                'Die Erinnerung ist besser als nichts, aber du erfährst nicht, warum sie an etwas anderem arbeitet. Vielleicht ist die Aufgabe anders angekommen oder sie hat einen Konflikt mit anderen Prioritäten.',
            },
            {
              text: 'Du sagst nichts – sie wird schon wissen, was sie tut. Freitag wirst du es ja sehen.',
              quality: 'bad',
              feedback:
                'Riskant: Wenn Freitag nichts fertig ist, ist der Schaden da und nicht mehr korrigierbar. Verständnis prüfen kostet 30 Sekunden – eine geplatzte Deadline kostet deutlich mehr.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'basics-communication-model-f1',
          task: 'Formuliere diese unklare Aufgabenübergabe so um, dass sie empfängergerecht ist: „Schau dir bei Gelegenheit mal die Reklamation von Firma Berger an."',
          placeholder: 'Deine klarere Formulierung …',
          sampleSolution:
            '„Kannst du bitte bis morgen 16 Uhr die Reklamation von Firma Berger prüfen? Konkret: Ist der Fehler bei uns passiert, und was schlagen wir als Lösung vor? Das Ergebnis brauche ich als kurze Mail, weil ich Donnerstag mit Herrn Berger telefoniere. Sag mir gern direkt, falls du dafür etwas von mir brauchst."',
          checklist: [
            'Ich habe eine konkrete Frist genannt (nicht „bei Gelegenheit").',
            'Ich habe gesagt, WAS genau zu tun ist (prüfen, bewerten, Lösung vorschlagen).',
            'Ich habe das WARUM bzw. den Kontext ergänzt.',
            'Ich habe das gewünschte Ergebnisformat benannt (z.B. kurze Mail).',
            'Ich habe Raum für Rückfragen geöffnet.',
          ],
        },
      ],
    },
    {
      id: 'basics-four-sides',
      title: 'Die vier Seiten einer Nachricht',
      theory: [
        {
          kind: 'text',
          body: '„Die Ampel ist grün!" – Ist das eine Information, ein Vorwurf, eine Aufforderung oder ein Hinweis auf Ungeduld? Je nachdem, mit welchem „Ohr" man hört, kommt etwas völlig anderes an. Das 4-Seiten-Modell (auch 4-Ohren-Modell) von Friedemann Schulz von Thun erklärt, warum ein und derselbe Satz so unterschiedlich wirken kann.',
        },
        {
          kind: 'text',
          heading: 'Jede Nachricht hat vier Seiten',
          body: 'Nach Schulz von Thun sendet jede Äußerung gleichzeitig auf vier Kanälen – ob der Sender das will oder nicht. Und der Empfänger entscheidet (meist unbewusst), auf welchem Kanal er zuhört.',
        },
        {
          kind: 'table',
          headers: ['Seite', 'Frage', 'Beispiel: „Der Bericht ist noch nicht fertig?"'],
          rows: [
            ['Sachinhalt', 'Worüber informiere ich?', 'Der Bericht liegt noch nicht vor.'],
            [
              'Selbstkundgabe',
              'Was gebe ich von mir preis?',
              'Ich bin nervös, ich stehe unter Zeitdruck.',
            ],
            [
              'Beziehung',
              'Was halte ich von dir?',
              'Ich traue dir wenig Tempo zu / Ich kontrolliere dich.',
            ],
            ['Appell', 'Was will ich erreichen?', 'Beeil dich, gib dem Bericht Priorität!'],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Jede Nachricht hat vier Seiten: Sache, Selbstkundgabe, Beziehung, Appell.',
            'Konflikte entstehen oft, weil der Empfänger auf dem Beziehungsohr hört, während der Sender nur Sache meinte.',
            'Als Sender: heikle Botschaften explizit machen („Mir geht es nur um den Termin, nicht um deine Arbeit").',
            'Als Empfänger: bewusst aufs Sach- und Appellohr schalten und im Zweifel nachfragen, wie etwas gemeint war.',
          ],
        },
        {
          kind: 'example',
          title: 'Reaktion auf „Der Bericht ist noch nicht fertig?"',
          good: 'Sachohr: „Stimmt, er ist zu 80 % fertig. Bis 15 Uhr liegt er dir vor. Brauchst du vorab schon die Kernzahlen?"',
          bad: 'Beziehungsohr: „Immer hackst du auf mir rum! Anderen sagst du so was ja auch nicht."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'basics-four-sides-q1',
          question: 'Welche vier Seiten hat laut Schulz von Thun jede Nachricht?',
          options: [
            {
              text: 'Sachinhalt, Selbstkundgabe, Beziehung, Appell',
              correct: true,
              explanation: 'Richtig – und jede Äußerung sendet auf allen vier Seiten gleichzeitig.',
            },
            {
              text: 'Inhalt, Lautstärke, Körpersprache, Tonfall',
              correct: false,
              explanation:
                'Das sind Ausdrucksmittel, keine Nachrichtenseiten. Die vier Seiten sind Sache, Selbstkundgabe, Beziehung und Appell.',
            },
            {
              text: 'Fakten, Meinungen, Gefühle, Bewertungen',
              correct: false,
              explanation:
                'Klingt plausibel, ist aber nicht das Modell von Schulz von Thun: Sache, Selbstkundgabe, Beziehung, Appell.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'basics-four-sides-q2',
          question:
            'Dein Chef sagt: „Interessant, wie du das Meeting strukturiert hast." Du denkst sofort: „Er findet mich chaotisch!" Auf welchem Ohr hast du gehört?',
          options: [
            {
              text: 'Auf dem Beziehungsohr',
              correct: true,
              explanation:
                'Genau: Du interpretierst die Aussage als Urteil über dich. Auf dem Sachohr wäre es schlicht eine Bemerkung zur Meeting-Struktur – im Zweifel: nachfragen, wie es gemeint war.',
            },
            {
              text: 'Auf dem Sachohr',
              correct: false,
              explanation:
                'Auf dem Sachohr würdest du nur die Information hören („Er hat die Struktur bemerkt") – nicht ein verstecktes Urteil über dich.',
            },
            {
              text: 'Auf dem Appellohr',
              correct: false,
              explanation:
                'Auf dem Appellohr würdest du eine Handlungsaufforderung hören, etwa „Struktur beibehalten!" – nicht eine Bewertung deiner Person.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'basics-four-sides-s1',
          situation:
            'Eine Kollegin schreibt dir im Chat: „Wow, du bist ja heute schon um 9 im Büro." Du bist unsicher, wie das gemeint ist – neutral, anerkennend oder spitz, weil du sonst später kommst.',
          choices: [
            {
              text: 'Locker und sachlich antworten: „Ja, ich hab heute früh einen Kundentermin. Magst du einen Kaffee mittrinken?"',
              quality: 'best',
              feedback:
                'Stark: Du entscheidest dich bewusst für das Sachohr und eskalierst nicht. Falls ein Seitenhieb gemeint war, läuft er ins Leere; falls nicht, ist alles gut.',
            },
            {
              text: 'Direkt nachfragen: „Wie meinst du das denn? Findest du, ich komme sonst zu spät?"',
              quality: 'ok',
              feedback:
                'Nachfragen ist grundsätzlich legitim – aber diese Formulierung unterstellt schon einen Vorwurf und macht aus einer Mini-Bemerkung schnell ein Thema. Besser erst mal neutral reagieren.',
            },
            {
              text: 'Zurückschießen: „Besser als manche, die um 16 Uhr schon weg sind."',
              quality: 'bad',
              feedback:
                'Du hast auf dem Beziehungsohr gehört und greifst sofort an. So wird aus einer harmlosen (vielleicht sogar netten) Bemerkung ein echter Konflikt.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'basics-four-sides-f1',
          task: 'Analysiere den Satz eines Projektleiters im Statusmeeting: „Wir liegen zwei Wochen hinter dem Plan." Schreibe zu jeder der vier Seiten (Sache, Selbstkundgabe, Beziehung, Appell) eine mögliche Botschaft.',
          placeholder: 'Sache: …\nSelbstkundgabe: …\nBeziehung: …\nAppell: …',
          sampleSolution:
            'Sache: Das Projekt ist zwei Wochen im Verzug.\nSelbstkundgabe: Ich bin besorgt und stehe unter Druck gegenüber dem Auftraggeber.\nBeziehung: Ich erwarte von euch als Team mehr Einsatz / Ich sehe uns gemeinsam in der Pflicht.\nAppell: Priorisiert das Projekt, findet Wege zum Aufholen, meldet Blocker sofort.',
          checklist: [
            'Ich habe alle vier Seiten benannt.',
            'Die Sachseite enthält nur die nackte Information.',
            'Die Selbstkundgabe beschreibt, was der Sender über sich preisgibt (Gefühl, Zustand).',
            'Beziehungs- und Appellseite sind plausibel aus der Situation abgeleitet.',
          ],
        },
      ],
    },
    {
      id: 'basics-iceberg-axioms',
      title: 'Eisbergmodell & Watzlawicks Axiome',
      theory: [
        {
          kind: 'text',
          heading: 'Das Eisbergmodell',
          body: 'Nur etwa 20 % der Kommunikation sind sichtbar: Zahlen, Fakten, Argumente – die Sachebene. Die restlichen 80 % liegen „unter der Wasseroberfläche": Gefühle, Erfahrungen, Status, Sympathie, Ängste – die Beziehungsebene.\n\nFür den Business-Alltag heißt das: Wenn Diskussionen auf der Sachebene nicht vorankommen, liegt das Problem fast immer darunter. Dann helfen keine weiteren Argumente, sondern ein Blick auf die Beziehungsebene: Fühlt sich jemand übergangen? Geht es um Anerkennung, Revierdenken, Vertrauen?',
        },
        {
          kind: 'text',
          heading: 'Man kann nicht nicht kommunizieren',
          body: 'Paul Watzlawicks berühmtestes Axiom: Jedes Verhalten ist Kommunikation – auch Schweigen, ein verschobener Termin oder eine unbeantwortete E-Mail senden eine Botschaft. Wer im Meeting demonstrativ aufs Handy schaut, kommuniziert, auch ohne ein Wort zu sagen.\n\nZwei weitere Axiome mit großem Praxiswert: Jede Kommunikation hat einen Inhalts- und einen Beziehungsaspekt, wobei die Beziehung den Inhalt färbt. Und: Kommunikation verläuft je nach Sichtweise unterschiedlich „interpunktiert" – jeder sieht sein Verhalten als Reaktion auf den anderen („Ich ziehe mich zurück, WEIL du nörgelst" vs. „Ich nörgle, WEIL du dich zurückziehst").',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Eisberg: ca. 20 % Sachebene sichtbar, ca. 80 % Beziehungsebene wirken im Verborgenen.',
            'Stockt die Sachdiskussion, liegt die Ursache meist auf der Beziehungsebene.',
            'Man kann nicht nicht kommunizieren – auch Schweigen und Nicht-Reagieren senden Botschaften.',
            'Die Beziehungsebene bestimmt, wie der Inhalt verstanden wird – deshalb zuerst Vertrauen, dann Argumente.',
          ],
        },
        {
          kind: 'example',
          title: 'Festgefahrene Budget-Diskussion',
          good: '„Ich habe das Gefühl, wir drehen uns im Kreis. Lass uns kurz einen Schritt zurückgehen: Was ist dir bei dieser Entscheidung besonders wichtig?"',
          bad: '„Hier sind noch drei weitere Folien mit Zahlen, die eindeutig für meinen Vorschlag sprechen."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'basics-iceberg-axioms-q1',
          question: 'Was besagt das Eisbergmodell für Business-Diskussionen?',
          options: [
            {
              text: 'Der Großteil der Kommunikation wird von der unsichtbaren Beziehungsebene bestimmt – stockende Sachdiskussionen haben ihre Ursache meist dort.',
              correct: true,
              explanation:
                'Richtig. Mehr Argumente helfen dann nicht – erst muss die Beziehungsebene geklärt werden.',
            },
            {
              text: 'Man sollte in Diskussionen immer möglichst viele Fakten präsentieren, um den sichtbaren Teil zu vergrößern.',
              correct: false,
              explanation:
                'Genau das Gegenteil: Wenn es unter der Oberfläche hakt, prallen zusätzliche Fakten wirkungslos ab.',
            },
            {
              text: 'Nur 20 % der Informationen in einem Gespräch sind korrekt.',
              correct: false,
              explanation:
                'Das Modell sagt nichts über Korrektheit – es beschreibt das Verhältnis von sichtbarer Sachebene zu verborgener Beziehungsebene.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'basics-iceberg-axioms-q2',
          question:
            'Ein Kollege beantwortet deine wichtige E-Mail seit einer Woche nicht. Was sagt Watzlawicks erstes Axiom dazu?',
          options: [
            {
              text: 'Auch das Nicht-Antworten ist Kommunikation – es sendet eine Botschaft, die du allerdings leicht fehlinterpretieren kannst.',
              correct: true,
              explanation:
                'Richtig. Ob Desinteresse, Überlastung oder Übersehen – es wirkt als Botschaft. Deshalb besser aktiv nachfassen, statt zu interpretieren.',
            },
            {
              text: 'Keine Antwort ist keine Kommunikation – es ist einfach nichts passiert.',
              correct: false,
              explanation:
                '„Man kann nicht nicht kommunizieren": Auch Schweigen wird als Botschaft wahrgenommen und interpretiert.',
            },
            {
              text: 'Das Axiom verpflichtet den Kollegen, innerhalb von 48 Stunden zu antworten.',
              correct: false,
              explanation:
                'Das Axiom beschreibt, wie Kommunikation wirkt – es ist keine Verhaltensregel oder Frist.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'basics-iceberg-axioms-s1',
          situation:
            'Im Projektmeeting lehnt ein erfahrener Kollege zum dritten Mal deinen Vorschlag ab – jedes Mal mit neuen, eher vorgeschobenen Sachargumenten. Du vermutest langsam, dass es gar nicht um die Sache geht: Der Vorschlag betrifft einen Bereich, den er jahrelang allein verantwortet hat.',
          choices: [
            {
              text: 'Das Gespräch unter vier Augen suchen: „Mir ist wichtig, dass dein Know-how in die Lösung einfließt – wie müsste der Vorschlag aussehen, damit er für dich passt?"',
              quality: 'best',
              feedback:
                'Sehr gut: Du wechselst von der Sach- auf die Beziehungsebene, gibst Anerkennung und machst ihn vom Verhinderer zum Mitgestalter. Genau das empfiehlt das Eisbergmodell.',
            },
            {
              text: 'Für das nächste Meeting noch mehr Daten und Benchmarks sammeln, die deinen Vorschlag belegen.',
              quality: 'ok',
              feedback:
                'Gute Vorbereitung schadet nie – aber wenn der Widerstand von der Beziehungsebene kommt (Revier, Anerkennung), prallen auch die besten Zahlen ab. Das eigentliche Problem bleibt ungelöst.',
            },
            {
              text: 'Im Meeting klarstellen: „Deine Argumente sind doch nur vorgeschoben – dir geht es doch nur um dein Revier."',
              quality: 'bad',
              feedback:
                'Inhaltlich vielleicht sogar richtig – aber als öffentliche Bloßstellung zerstört es die Beziehungsebene endgültig. Danach bekommst du bei keinem Thema mehr seine Unterstützung.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'basics-iceberg-axioms-f1',
          task: 'Denke an eine festgefahrene Diskussion aus deinem (Arbeits-)Alltag. Beschreibe kurz: Was war das sichtbare Sachthema – und welche verborgenen Faktoren (Beziehungsebene) könnten darunter gelegen haben?',
          placeholder: 'Sachthema: …\nMögliche verborgene Faktoren: …',
          sampleSolution:
            'Beispiel – Sachthema: Streit über die Wahl eines Software-Tools.\nVerborgene Faktoren: Der Kollege hatte das alte Tool eingeführt und verband damit Anerkennung; das neue Tool kam von „außen" und fühlte sich wie Kritik an seiner Arbeit an; zusätzlich Sorge, Expertenstatus zu verlieren.\nErkenntnis: Die Diskussion entspannte sich erst, als seine Erfahrung ausdrücklich gewürdigt und er in die Auswahl einbezogen wurde.',
          checklist: [
            'Ich habe Sachebene und Beziehungsebene klar getrennt.',
            'Ich habe mindestens zwei plausible verborgene Faktoren benannt (z.B. Anerkennung, Status, Vertrauen, Angst).',
            'Ich habe überlegt, welcher Schritt auf der Beziehungsebene die Situation lösen könnte.',
          ],
        },
      ],
    },
  ],
}
