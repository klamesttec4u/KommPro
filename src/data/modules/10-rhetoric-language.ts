import type { Module } from '@/types/content'

export const rhetoricLanguage: Module = {
  id: 'rhetoric-language',
  title: 'Rhetorik & Sprache',
  description:
    'Wie du mit rhetorischen Mitteln, bewusster Stimmführung und klarer Sprache Wirkung erzeugst – und Füllwörter sowie Weichmacher loswirst.',
  category: 'presentation',
  lessons: [
    {
      id: 'rhetoric-devices',
      title: 'Wirksame rhetorische Mittel',
      theory: [
        {
          kind: 'text',
          body: '„Veni, vidi, vici." – „Ich bin ein Berliner." – „Yes, we can." Sätze, die Jahrzehnte oder Jahrtausende überdauern, sind selten Zufall. Dahinter stecken rhetorische Mittel: Sprachmuster, die seit der Antike erforscht sind und die Wirkung einer Aussage messbar verstärken.\n\nDie gute Nachricht: Du brauchst kein Rhetorik-Studium. Eine Handvoll Mittel, gezielt eingesetzt, reicht für den Business-Alltag völlig aus – im Pitch, in der Präsentation, sogar in der wichtigen E-Mail.',
        },
        {
          kind: 'text',
          heading: 'Die fünf wichtigsten Mittel für den Business-Alltag',
          body: 'Die Dreierfigur (Trikolon) ist das vielleicht stärkste Mittel: Drei Elemente wirken vollständig, rhythmisch und merkfähig – „schneller, einfacher, günstiger". Zwei wirken unfertig, vier überladen. Deshalb funktionieren Aufzählungen in Dreierpacks so gut.\n\nDie rhetorische Frage aktiviert das Publikum, ohne eine Antwort zu verlangen: „Wollen wir wirklich weitere zwei Jahre auf diese Lösung warten?" Der Zuhörer antwortet innerlich – und ist damit beteiligt statt berieselt. Die Anapher, die Wiederholung desselben Satzanfangs, erzeugt Rhythmus und Nachdruck: „Wir haben das Budget. Wir haben das Team. Wir haben den Plan."\n\nDie Metapher übersetzt Abstraktes in Bilder: „Unser Datenbestand ist ein Rohdiamant – wertvoll, aber ungeschliffen." Bilder bleiben hängen, wo Fachbegriffe verpuffen. Der Kontrast schließlich stellt zwei Pole gegeneinander und schärft so die Botschaft: „Es geht nicht darum, mehr zu arbeiten – sondern am Richtigen."',
        },
        {
          kind: 'table',
          headers: ['Mittel', 'Wirkung', 'Business-Beispiel'],
          rows: [
            [
              'Dreierfigur (Trikolon)',
              'Rhythmus, Vollständigkeit, Merkfähigkeit',
              '„Wir liefern pünktlich, vollständig und in Top-Qualität."',
            ],
            [
              'Rhetorische Frage',
              'Aktiviert das Publikum, lenkt das Denken',
              '„Können wir uns noch ein Jahr Stillstand leisten?"',
            ],
            [
              'Anapher (Wiederholung)',
              'Nachdruck, Eindringlichkeit',
              '„Das spart Zeit. Das spart Geld. Das spart Nerven."',
            ],
            [
              'Metapher',
              'Macht Abstraktes anschaulich und emotional',
              '„Dieses Projekt ist unser Leuchtturm für die Digitalisierung."',
            ],
            [
              'Kontrast (Antithese)',
              'Schärft die Botschaft durch Gegenüberstellung',
              '„Weniger Folien, mehr Wirkung."',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Fünf Mittel reichen für den Business-Alltag: Dreierfigur, rhetorische Frage, Anapher, Metapher, Kontrast.',
            'Die Dreierfigur ist der Allrounder: Drei Elemente wirken vollständig und bleiben hängen.',
            'Rhetorische Mittel gehören an die entscheidenden Stellen – Einstieg, Kernbotschaft, Schluss.',
            'Sparsamkeit ist Pflicht: Ein überladener Vortrag wirkt schnell theatralisch und unglaubwürdig.',
            'Das beste Mittel passt zu dir – ein unpassendes Stilmittel wirkt auswendig gelernt.',
          ],
        },
        {
          kind: 'text',
          heading: 'Sparsam und gezielt: die Dosierung macht die Wirkung',
          body: 'Rhetorische Mittel sind Gewürze, keine Hauptzutat. Ein Vortrag, der in jedem Satz eine Metapher, eine Dreierfigur und zwei rhetorische Fragen unterbringt, wirkt schnell gekünstelt – das Publikum spürt die Technik und misstraut dem Inhalt.\n\nDie Profi-Regel: Setze rhetorische Mittel an den zwei, drei entscheidenden Stellen ein – beim Einstieg, bei der Kernbotschaft, beim Schluss. Dort, wo du willst, dass ein Satz hängen bleibt. Der Rest deines Vortrags darf ganz normal klingen. Gerade dieser Wechsel zwischen sachlichem Ton und verdichteten Momenten erzeugt die Wirkung.',
        },
        {
          kind: 'example',
          title: 'Schlusssatz einer Projektpräsentation',
          good: '„Wir haben die Analyse. Wir haben den Plan. Wir haben das Team. Was jetzt noch fehlt, ist Ihre Entscheidung – heute."',
          bad: '„Ja, das war es im Großen und Ganzen von meiner Seite. Wenn es keine Fragen mehr gibt, würde ich dann an dieser Stelle einfach mal zum Ende kommen. Vielen Dank fürs Zuhören."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'rhetoric-devices-q1',
          question: 'Warum ist die Dreierfigur (Trikolon) so wirksam?',
          options: [
            {
              text: 'Drei Elemente wirken vollständig und rhythmisch – zwei wirken unfertig, vier überladen das Gedächtnis.',
              correct: true,
              explanation:
                'Richtig. Die Dreierstruktur trifft genau das Muster, das unser Gehirn als rund und abgeschlossen empfindet – deshalb funktionieren Slogans und Kernbotschaften im Dreierpack so gut.',
            },
            {
              text: 'Weil drei Argumente objektiv immer ausreichen, um jede Behauptung zu beweisen.',
              correct: false,
              explanation:
                'Die Dreierfigur ist ein Wirkungs-, kein Beweismittel: Sie macht eine Aussage merkfähig und rund – über die inhaltliche Beweiskraft sagt die Zahl Drei nichts aus.',
            },
            {
              text: 'Weil das Publikum bei mehr als drei Wörtern pro Satz abschaltet.',
              correct: false,
              explanation:
                'Es geht nicht um die Wortzahl pro Satz, sondern um drei parallele Elemente in einer Aufzählung oder Struktur – die Sätze selbst dürfen durchaus länger sein.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'rhetoric-devices-q2',
          question:
            '„Wir haben es geprüft. Wir haben es getestet. Wir haben es bewiesen." – Welches rhetorische Mittel liegt hier vor allem vor?',
          options: [
            {
              text: 'Eine Anapher: Der gleiche Satzanfang wiederholt sich und erzeugt Nachdruck und Rhythmus.',
              correct: true,
              explanation:
                'Genau – die Wiederholung von „Wir haben es" am Satzanfang ist eine Anapher. Dass es zugleich drei Sätze sind, verstärkt die Wirkung zusätzlich durch die Dreierfigur.',
            },
            {
              text: 'Eine Metapher: Die Aussage überträgt ein Bild auf einen abstrakten Sachverhalt.',
              correct: false,
              explanation:
                'Hier gibt es kein Bild und keine Übertragung – eine Metapher wäre etwa „Dieses Projekt ist unser Zugpferd". Das prägende Muster hier ist der wiederholte Satzanfang.',
            },
            {
              text: 'Ein Kontrast: Zwei Gegenpole werden gegenübergestellt.',
              correct: false,
              explanation:
                'Für einen Kontrast bräuchte es eine Gegenüberstellung wie „nicht geraten, sondern bewiesen". Hier wird nichts entgegengesetzt, sondern wiederholt – das ist die Anapher.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'rhetoric-devices-s1',
          situation:
            'Du bereitest die entscheidende Präsentation vor, mit der du das Budget für dein Digitalisierungsprojekt sichern willst. Ein Kollege hat dir ein Rhetorik-Buch geliehen, und du bist begeistert von den Möglichkeiten. Wie setzt du rhetorische Mittel ein?',
          choices: [
            {
              text: 'Du wählst drei Stellen bewusst aus: einen Einstieg mit rhetorischer Frage, eine Kernbotschaft als Kontrast („Nicht mehr Personal – bessere Werkzeuge") und einen Schluss mit Dreierfigur. Der Rest bleibt sachlich.',
              quality: 'best',
              feedback:
                'Sehr gut: Genau so dosieren Profis. Die rhetorisch verdichteten Momente stechen aus dem sachlichen Ton heraus und bleiben hängen – und du wirkst souverän statt einstudiert.',
            },
            {
              text: 'Du baust in jeden Abschnitt mindestens eine Metapher, eine Anapher und eine rhetorische Frage ein – wenn die Mittel wirken, dann ja wohl umso mehr davon.',
              quality: 'bad',
              feedback:
                'Vorsicht: Überdosierte Rhetorik kippt ins Theatralische. Das Publikum spürt die Technik, fragt sich, was da überspielt werden soll – und misstraut am Ende dem Inhalt. Rhetorische Mittel sind Gewürze: Zu viel davon verdirbt das Gericht.',
            },
            {
              text: 'Du verzichtest ganz auf rhetorische Mittel – bei einem Budgetthema zählen ohnehin nur die Zahlen, alles andere ist Show.',
              quality: 'ok',
              feedback:
                'Nachvollziehbar, und mit starken Zahlen kommst du damit durch. Aber du verschenkst Wirkung: Auch Entscheider sind Menschen, und eine merkfähig formulierte Kernbotschaft („Nicht mehr Personal – bessere Werkzeuge") trägt deine Zahlen durchs Nachgespräch, wenn du nicht mehr im Raum bist.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'rhetoric-devices-f1',
          task: 'Verstärke diese blasse Kernbotschaft mit zwei rhetorischen Mitteln deiner Wahl (z.B. Dreierfigur, Kontrast, Anapher, rhetorische Frage): „Das neue CRM-System bringt einige Vorteile für den Vertrieb und sollte deshalb eingeführt werden."',
          placeholder: 'Deine verstärkte Kernbotschaft …',
          sampleSolution:
            '„Wie viele Deals wollen wir noch verlieren, weil niemand den Kunden wirklich kennt? Das neue CRM gibt uns drei Dinge, die uns heute fehlen: den vollständigen Kundenblick, die richtige Priorität, den schnelleren Abschluss. Es geht nicht darum, mehr Daten zu sammeln – es geht darum, endlich mit ihnen zu verkaufen."',
          checklist: [
            'Ich habe mindestens zwei unterschiedliche rhetorische Mittel bewusst eingesetzt.',
            'Ich kann die eingesetzten Mittel benennen (z.B. rhetorische Frage, Dreierfigur, Kontrast).',
            'Meine Botschaft ist konkreter und merkfähiger als das Original.',
            'Die Formulierung klingt nach mir und nicht auswendig gelernt.',
          ],
        },
      ],
    },
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
      id: 'rhetoric-fillers',
      title: 'Füllwörter & Weichmacher',
      theory: [
        {
          kind: 'text',
          body: '„Ähm, ich würde sagen, das ist eigentlich ein ganz guter Vorschlag, den wir vielleicht quasi mal irgendwie prüfen sollten." Dieser Satz enthält eine klare Botschaft – aber sie erstickt unter Füllwörtern und Weichmachern. Was ankommt: Unsicherheit.\n\nFüllwörter und Weichmacher sind kein Schönheitsfehler, sondern ein Wirkungsproblem: Sie verwässern Botschaften, kosten Glaubwürdigkeit und laden das Gegenüber ein, deine Aussagen nicht ernst zu nehmen. Die gute Nachricht: Sie lassen sich systematisch abtrainieren.',
        },
        {
          kind: 'text',
          heading: 'Füllwörter: ähm, halt, quasi und Co.',
          body: 'Füllwörter wie „ähm", „äh", „halt", „quasi", „sozusagen", „irgendwie" entstehen aus einem einfachen Reflex: Das Gehirn braucht einen Moment zum Denken, und der Mund überbrückt die Stille mit Geräusch. Die Angst dahinter: Stille könnte als Blackout wirken oder das Gegenüber zum Unterbrechen einladen.\n\nDie Wahrheit ist umgekehrt: Ein „ähm" alle paar Sekunden fällt jedem auf – eine kurze Denkpause wirkt dagegen souverän und überlegt. Deshalb lautet die wichtigste Technik: Ersetze das Füllwort durch die Pause. Wo du „ähm" sagen würdest, schließe den Mund und denke in Ruhe. Das fühlt sich anfangs seltsam an, wirkt aber sofort professioneller. Der erste Schritt dahin ist Bewusstheit: Die meisten Menschen kennen ihre eigenen Füllwörter nicht. Eine kurze Audioaufnahme oder ein ehrlicher Kollege, der mitzählt, deckt sie schonungslos auf.',
        },
        {
          kind: 'text',
          heading: 'Weichmacher und die Konjunktiv-Falle',
          body: 'Noch tückischer als Füllwörter sind Weichmacher: Wörter, die eine klare Aussage vorsorglich abschwächen. „Eigentlich" sät Zweifel („Eigentlich bin ich überzeugt" heißt: so richtig nicht). „Vielleicht" und „eventuell" machen aus Vorschlägen Bitten. „Nur" macht sich selbst klein („Ich habe da nur eine kleine Anmerkung"). „Ein bisschen", „relativ", „ziemlich" nehmen jeder Aussage die Kante.\n\nDie Königsdisziplin der Selbstverzwergung ist die Konjunktiv-Falle: „Ich würde sagen, dass …", „Ich würde vorschlagen …", „Man könnte eventuell …". Der Konjunktiv signalisiert: Ich stehe nicht wirklich hinter dem, was ich sage. Dabei ist die Lösung simpel: Sag es einfach. Aus „Ich würde vorschlagen, dass wir das Projekt stoppen" wird „Ich schlage vor, das Projekt zu stoppen" – gleicher Inhalt, doppelte Wirkung. Aktive, klare Sprache heißt nicht, unhöflich zu sein. Höflichkeit liegt im Ton und im Respekt, nicht im Weichspülen der eigenen Position.',
        },
        {
          kind: 'table',
          headers: ['Weichgespült', 'Klar und aktiv'],
          rows: [
            [
              '„Ich würde sagen, das Angebot ist eigentlich ganz gut."',
              '„Das Angebot überzeugt mich."',
            ],
            [
              '„Vielleicht könnten wir eventuell mal über das Budget sprechen?"',
              '„Lass uns über das Budget sprechen – passt Donnerstag?"',
            ],
            [
              '„Ich habe da nur eine kleine Anmerkung …"',
              '„Mir ist ein wichtiger Punkt aufgefallen."',
            ],
            [
              '„Man müsste das halt irgendwie mal priorisieren."',
              '„Ich schlage vor, wir priorisieren das in der nächsten Planung."',
            ],
            ['„Das ist quasi ein bisschen ein Problem für uns."', '„Das ist ein Problem für uns."'],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Füllwörter (ähm, halt, quasi) überbrücken Denkpausen – die Pause selbst wirkt souveräner als jedes Füllwort.',
            'Weichmacher („eigentlich", „vielleicht", „nur", „ein bisschen") verwässern Botschaften und signalisieren Unsicherheit.',
            'Die Konjunktiv-Falle vermeiden: „Ich schlage vor" statt „Ich würde vorschlagen".',
            'Erster Schritt ist Bewusstheit: Aufnahme anhören oder mitzählen lassen – die eigenen Muster kennt man nicht.',
            'Klare Sprache ist nicht unhöflich: Höflichkeit liegt im Ton, nicht im Weichspülen der Aussage.',
          ],
        },
        {
          kind: 'example',
          title: 'Vorschlag im Teammeeting einbringen',
          good: '„Ich schlage vor, dass wir die Release-Termine auf monatlich umstellen. Das reduziert den Testaufwand und gibt dem Kunden Planbarkeit. Was spricht aus eurer Sicht dagegen?"',
          bad: '„Also, ähm, ich würde jetzt einfach mal sagen, man könnte ja vielleicht eventuell darüber nachdenken, ob wir die Releases nicht irgendwie ein bisschen anders takten sollten, oder so."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'rhetoric-fillers-q1',
          question: 'Was ist der wirksamste Ersatz für Füllwörter wie „ähm"?',
          options: [
            {
              text: 'Die bewusste Pause: Mund schließen, in Ruhe denken – das wirkt souveräner als jedes Überbrückungsgeräusch.',
              correct: true,
              explanation:
                'Richtig. Das Füllwort entsteht aus der Angst vor Stille – dabei wirkt genau diese Stille auf das Publikum überlegt und kontrolliert. Pause statt „ähm" ist die zentrale Technik.',
            },
            {
              text: 'Schneller sprechen, damit gar keine Lücken entstehen, die man füllen müsste.',
              correct: false,
              explanation:
                'Höheres Tempo erhöht den Denkdruck und produziert meist noch mehr Füllwörter – außerdem wirkt Dauertempo gehetzt. Die Lösung ist die Pause, nicht die Flucht nach vorn.',
            },
            {
              text: 'Füllwörter durch gehobenere Varianten wie „gewissermaßen" oder „in gewisser Weise" ersetzen.',
              correct: false,
              explanation:
                'Das sind nur Füllwörter im Anzug – sie verwässern die Aussage genauso. Das Ziel ist nicht ein eleganteres Überbrückungsgeräusch, sondern die souveräne Stille.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'rhetoric-fillers-q2',
          question:
            'Warum ist die Formulierung „Ich würde vorschlagen, dass wir den Anbieter wechseln" problematisch?',
          options: [
            {
              text: 'Der Konjunktiv „würde" schwächt die Aussage ab und signalisiert, dass der Sprecher nicht voll hinter seinem Vorschlag steht.',
              correct: true,
              explanation:
                'Genau – das ist die Konjunktiv-Falle. „Ich schlage vor, den Anbieter zu wechseln" transportiert denselben Inhalt mit deutlich mehr Überzeugungskraft, ohne unhöflich zu sein.',
            },
            {
              text: 'Der Satz ist grammatikalisch falsch – „würde" darf nur in Fragen verwendet werden.',
              correct: false,
              explanation:
                'Grammatikalisch ist der Satz korrekt. Das Problem liegt in der Wirkung: Der Konjunktiv nimmt dem Vorschlag die Verbindlichkeit und dem Sprecher die Überzeugungskraft.',
            },
            {
              text: 'Vorschläge sollte man nie selbst machen, sondern immer die Gruppe entscheiden lassen.',
              correct: false,
              explanation:
                'Vorschläge machen ist ausdrücklich erwünscht und ein Zeichen von Initiative – es geht nur darum, sie klar zu formulieren statt im Konjunktiv zu verstecken.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'rhetoric-fillers-s1',
          situation:
            'Nach deiner Präsentation nimmt dich dein Mentor beiseite: „Inhaltlich stark – aber du hast 25-mal ‚ähm‘ gesagt und fast jeden Vorschlag mit ‚Ich würde sagen, vielleicht sollten wir …‘ begonnen. Das untergräbt deine Wirkung." Du willst das ändern. Wie packst du es an?',
          choices: [
            {
              text: 'Du machst dir deine Muster erst bewusst: Du nimmst die nächsten Meetings-Beiträge auf bzw. bittest einen Kollegen mitzuzählen, übst dann gezielt „Pause statt ähm" in Alltagsgesprächen und formulierst wichtige Aussagen vorab einmal schriftlich ohne Konjunktiv.',
              quality: 'best',
              feedback:
                'Sehr gut: Bewusstheit zuerst, dann gezieltes Training im Alltag – genau so funktioniert Verhaltensänderung beim Sprechen. Die schriftliche Vorbereitung wichtiger Aussagen ohne Weichmacher baut zudem neue Formulierungsmuster auf, die unter Druck abrufbar sind.',
            },
            {
              text: 'Du nimmst dir fest vor, in der nächsten Präsentation einfach auf alle Füllwörter zu verzichten – jetzt, wo du es weißt, wird das schon klappen.',
              quality: 'ok',
              feedback:
                'Der Vorsatz ist gut, aber Füllwörter sind Automatismen – reiner Wille unter Präsentationsdruck reicht selten. Ohne Zwischenschritt (Üben in stressfreien Alltagssituationen, Feedback, Aufnahme) wirst du in alte Muster zurückfallen und bist dann doppelt frustriert.',
            },
            {
              text: 'Du schreibst dir künftig jede Präsentation Wort für Wort auf und liest sie ab – dann können sich keine Füllwörter einschleichen.',
              quality: 'bad',
              feedback:
                'Damit tauschst du ein Problem gegen ein größeres: Abgelesene Vorträge verlieren Blickkontakt, Natürlichkeit und Wirkung – und in der Fragerunde, wo du frei sprechen musst, sind die Füllwörter trotzdem da. Trainiere die Ursache, nicht das Symptom.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'rhetoric-fillers-f1',
          task: 'Befreie diese Aussage von allen Füllwörtern und Weichmachern und formuliere sie klar und aktiv: „Also, ich würde halt sagen, dass wir eigentlich vielleicht mal schauen sollten, ob wir das Reporting nicht irgendwie ein bisschen automatisieren könnten, weil das ja quasi schon relativ viel Zeit frisst."',
          placeholder: 'Deine klare, aktive Version …',
          sampleSolution:
            '„Ich schlage vor, dass wir das Reporting automatisieren. Es kostet uns aktuell rund einen Tag pro Woche – diese Zeit können wir besser nutzen. Ich habe zwei Tools recherchiert und stelle sie gern nächste Woche vor."',
          checklist: [
            'Ich habe alle Füllwörter gestrichen (also, halt, irgendwie, quasi, mal).',
            'Ich habe alle Weichmacher entfernt (eigentlich, vielleicht, ein bisschen, relativ).',
            'Ich habe den Konjunktiv durch eine aktive Formulierung ersetzt („Ich schlage vor" statt „ich würde sagen").',
            'Die Kernaussage ist in einem Satz erkennbar.',
            'Der Ton bleibt respektvoll – klar heißt nicht ruppig.',
          ],
        },
      ],
    },
  ],
}
