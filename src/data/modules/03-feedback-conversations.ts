import type { Module } from '@/types/content'

export const feedbackConversations: Module = {
  id: 'feedback-conversations',
  title: 'Feedback & Gesprächsführung',
  description:
    'Feedback geben, das ankommt – und schwierige Gespräche souverän führen: Feedbackregeln, WWW-Formel, Gewaltfreie Kommunikation und der Umgang mit Druck.',
  category: 'communication',
  lessons: [
    {
      id: 'feedback-rules',
      title: 'Feedback geben und annehmen',
      theory: [
        {
          kind: 'text',
          body: 'Feedback ist eines der wirksamsten Entwicklungsinstrumente im Berufsleben – und eines der am häufigsten verpatzten. Zwischen „Das sage ich lieber gar nicht erst" und „Das musste jetzt mal raus" liegt ein schmaler Korridor, in dem Feedback tatsächlich wirkt: wenn es konkret, respektvoll und umsetzbar ist.\n\nSchlechtes Feedback hat zwei typische Formen: das Pauschalurteil („Deine Präsentationen sind chaotisch") und die Nicht-Ansprache (das Problem wird monatelang geschluckt, bis es im Jahresgespräch explodiert). Beides lässt sich mit wenigen Regeln vermeiden.',
        },
        {
          kind: 'text',
          heading: 'Die wichtigsten Feedbackregeln',
          body: 'Gutes Feedback ist zeitnah: möglichst kurz nach der Situation, nicht Wochen später, wenn sich niemand mehr an Details erinnert. Es ist konkret: Es beschreibt beobachtbares Verhalten („Du hast im Termin dreimal unterbrochen"), keine Charakterzüge („Du bist respektlos"). Es ist persönlich adressiert und findet unter vier Augen statt – Kritik vor Publikum ist Bloßstellung, kein Feedback. Und es ist als Angebot formuliert, nicht als Urteil: Der Empfänger entscheidet, was er damit macht.\n\nZentral ist die Ich-Botschaft: Statt „Du machst immer …" (Du-Botschaft, löst Verteidigung aus) beschreibst du deine eigene Wahrnehmung und Wirkung: „Mir ist aufgefallen …", „Auf mich wirkte das …". Eine Ich-Botschaft ist nicht angreifbar – über deine Wahrnehmung kann niemand mit dir streiten – und genau deshalb kommt sie an.',
        },
        {
          kind: 'text',
          heading: 'Die WWW-Formel: Wahrnehmung – Wirkung – Wunsch',
          body: 'Die WWW-Formel gibt kritischem Feedback eine Struktur in drei Schritten. Wahrnehmung: Beschreibe konkret und wertfrei, was du beobachtet hast – wie eine Kamera, ohne Interpretation. Wirkung: Beschreibe, was das bei dir ausgelöst hat oder welche Folgen du siehst. Wunsch: Formuliere konkret, was du dir künftig wünschst.\n\nBeispiel: „Mir ist aufgefallen, dass die letzten drei Statusberichte erst nach der Deadline kamen (Wahrnehmung). Dadurch konnte ich die Zahlen nicht in mein Management-Update übernehmen und musste zweimal nachfassen (Wirkung). Ich wünsche mir, dass der Bericht freitags bis 12 Uhr da ist – oder eine kurze Nachricht, wenn es nicht klappt (Wunsch)." Die Formel zwingt dich zur Konkretheit und nimmt dem Gespräch die Schärfe, weil kein Pauschalurteil fällt.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Feedback zeitnah, konkret, unter vier Augen und als Angebot – nicht als Urteil.',
            'Verhalten beschreiben, nicht Charakter bewerten: „Du hast dreimal unterbrochen" statt „Du bist respektlos".',
            'Ich-Botschaften statt Du-Botschaften: Wahrnehmung und Wirkung sind nicht angreifbar.',
            'WWW-Formel: Wahrnehmung (wertfrei beschreiben) – Wirkung (Folgen benennen) – Wunsch (konkret formulieren).',
            'Feedback annehmen: zuhören, nachfragen, danken – nicht rechtfertigen. Entscheiden kannst du später.',
          ],
        },
        {
          kind: 'example',
          title: 'Feedback nach einem Kundentermin',
          good: '„Mir ist im Termin aufgefallen, dass du die Preisfrage des Kunden zweimal übergangen hast. Auf mich wirkte der Kunde danach spürbar kühler. Ich wünsche mir, dass wir heikle Fragen direkt beantworten – gern mit vorher abgestimmter Sprachregelung. Wie siehst du das?"',
          bad: '„Also der Termin war ja nichts. Du weichst immer aus, wenn es ernst wird – so verlieren wir noch den Kunden."',
        },
        {
          kind: 'text',
          heading: 'Feedback annehmen',
          body: 'Die Königsdisziplin ist nicht das Geben, sondern das Annehmen. Der Reflex, sich sofort zu rechtfertigen („Ja, aber das lag doch daran, dass …"), ist menschlich – und beendet jedes ehrliche Feedback. Wer sich beim ersten kritischen Satz verteidigt, bekommt künftig nur noch Weichgespültes oder gar nichts mehr.\n\nBesser: ausreden lassen, bei Unklarem konkret nachfragen („Kannst du mir ein Beispiel nennen?"), und sich bedanken – auch wenn es wehtut. Danken heißt nicht zustimmen: Du bedankst dich für die Offenheit und das Risiko, das der Feedbackgeber eingegangen ist. Was du mit dem Feedback machst, entscheidest du danach in Ruhe. Oft lohnt ein zweiter Blick am nächsten Tag: Was davon stimmt, auch wenn es unbequem ist?',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'feedback-rules-q1',
          question: 'Wofür stehen die drei W in der WWW-Formel?',
          options: [
            {
              text: 'Wahrnehmung – Wirkung – Wunsch',
              correct: true,
              explanation:
                'Richtig: erst wertfrei beschreiben, was beobachtet wurde, dann die Wirkung bzw. Folgen benennen, zuletzt einen konkreten Wunsch formulieren.',
            },
            {
              text: 'Wer – Was – Wann',
              correct: false,
              explanation:
                'Das sind klassische Protokoll-Fragen (z.B. für Action Items), aber nicht die Feedback-Formel. Die lautet: Wahrnehmung, Wirkung, Wunsch.',
            },
            {
              text: 'Warnung – Wiederholung – Weisung',
              correct: false,
              explanation:
                'Das klingt nach Abmahnung, nicht nach Feedback. Die WWW-Formel ist bewusst wertschätzend aufgebaut: Wahrnehmung, Wirkung, Wunsch.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'feedback-rules-q2',
          question: 'Warum wirken Ich-Botschaften besser als Du-Botschaften?',
          options: [
            {
              text: 'Sie beschreiben die eigene Wahrnehmung und Wirkung – darüber lässt sich nicht streiten, deshalb löst das weniger Verteidigung aus.',
              correct: true,
              explanation:
                'Genau: „Auf mich wirkte das abweisend" kann niemand widerlegen. „Du bist abweisend" dagegen ist ein Urteil, das sofort Widerspruch und Rechtfertigung provoziert.',
            },
            {
              text: 'Sie klingen höflicher, weil man das Wort „du" komplett vermeidet.',
              correct: false,
              explanation:
                'Es geht nicht ums Vermeiden des Wortes „du" – auch eine Ich-Botschaft darf das Gegenüber nennen. Entscheidend ist, dass du Wahrnehmung statt Urteil kommunizierst.',
            },
            {
              text: 'Sie verschleiern die Kritik, sodass der Empfänger sie nicht als Kritik erkennt.',
              correct: false,
              explanation:
                'Im Gegenteil: Gute Ich-Botschaften sind glasklar in der Sache. Sie verändern nicht den Inhalt der Kritik, sondern die Form – so dass sie ankommen kann.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'feedback-rules-s1',
          situation:
            'Im Teammeeting sagt eine Kollegin vor allen: „Dein Code-Review gestern war ehrlich gesagt ziemlich oberflächlich – da waren noch zwei dicke Fehler drin." Du bist überrascht und spürst den Impuls, dich sofort zu verteidigen, denn du hattest gestern drei Reviews parallel auf dem Tisch.',
          choices: [
            {
              text: '„Danke für den Hinweis – das will ich verstehen. Lass uns nach dem Meeting kurz auf die zwei Stellen schauen."',
              quality: 'best',
              feedback:
                'Stark: Du nimmst das Feedback an, ohne dich vor der Gruppe zu rechtfertigen, und verlagerst die Detailklärung in den passenden Rahmen. Dass ihre Form (Kritik vor allen) unglücklich war, kannst du ihr später unter vier Augen als eigenes Feedback spiegeln.',
            },
            {
              text: '„Oberflächlich? Ich hatte gestern drei Reviews parallel! Wenn ihr schneller liefern würdet, hätte ich auch mehr Zeit pro Review."',
              quality: 'bad',
              feedback:
                'Der klassische Rechtfertigungsreflex, garniert mit einem Gegenangriff. Vor der Gruppe eskaliert das zum Schlagabtausch – und in der Sache (zwei echte Fehler!) hast du nichts gelernt.',
            },
            {
              text: 'Du sagst nichts, nickst knapp – und ärgerst dich den Rest des Tages im Stillen über die Kollegin.',
              quality: 'ok',
              feedback:
                'Immerhin keine Eskalation vor der Gruppe. Aber das Feedback bleibt unverstanden (welche zwei Fehler?), und dein Groll belastet die Zusammenarbeit. Nachfragen und das Gespräch suchen wäre der produktivere Weg gewesen.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'feedback-rules-f1',
          task: 'Ein Kollege kommt seit Wochen regelmäßig 10 bis 15 Minuten zu spät in euer tägliches Standup, das dadurch jedes Mal stockt. Formuliere dein Feedback an ihn nach der WWW-Formel (Wahrnehmung – Wirkung – Wunsch) mit Ich-Botschaften.',
          placeholder: 'Wahrnehmung: …\nWirkung: …\nWunsch: …',
          sampleSolution:
            'Wahrnehmung: „Mir ist aufgefallen, dass du in den letzten zwei Wochen fast täglich 10 bis 15 Minuten nach Beginn ins Standup gekommen bist."\nWirkung: „Dadurch wiederholen wir die ersten Punkte für dich, das Standup dauert länger, und ich merke, dass die Konzentration im Team kippt."\nWunsch: „Ich wünsche mir, dass du pünktlich um 9:15 dabei bist – und falls das an einem Tag nicht geht, gib uns vorher kurz Bescheid, dann starten wir ohne Wiederholung. Passt das für dich?"',
          checklist: [
            'Ich habe konkretes, beobachtbares Verhalten beschrieben (keine Deutung wie „Dir ist das Standup wohl egal").',
            'Ich habe die Wirkung aus meiner Sicht geschildert (Ich-Botschaft).',
            'Ich habe einen konkreten, umsetzbaren Wunsch formuliert.',
            'Ich habe am Ende das Gespräch geöffnet (Rückfrage), statt ein Urteil zu fällen.',
          ],
        },
      ],
    },
    {
      id: 'feedback-nvc',
      title: 'Gewaltfreie Kommunikation',
      theory: [
        {
          kind: 'text',
          body: 'Die Gewaltfreie Kommunikation (GFK) nach Marshall B. Rosenberg klingt nach Therapiesitzung – ist aber eines der präzisesten Werkzeuge für harte Business-Situationen: Konflikte im Team, Verhandlungen, eskalierende E-Mail-Threads. Der Kern: Hinter jedem Vorwurf steckt ein unerfülltes Bedürfnis. Wer lernt, Bedürfnisse statt Vorwürfe zu kommunizieren, verwandelt Angriff und Verteidigung in Problemlösung.\n\n„Gewaltfrei" meint dabei nicht „weichgespült": GFK ist radikal ehrlich – sie trennt nur sauber zwischen dem, was passiert ist, und dem Urteil darüber.',
        },
        {
          kind: 'text',
          heading: 'Die vier Schritte: Beobachtung – Gefühl – Bedürfnis – Bitte',
          body: 'Schritt 1, Beobachtung: Beschreibe konkret, was du wahrgenommen hast – ohne Bewertung. „Du hast meine letzten zwei Mails nicht beantwortet" ist eine Beobachtung; „Du ignorierst mich" ist bereits ein Urteil. Rosenberg nennt die Vermischung von Beobachtung und Bewertung die Hauptquelle für Eskalation.\n\nSchritt 2, Gefühl: Benenne, was das bei dir auslöst – echte Gefühle wie „frustriert", „verunsichert", „unter Druck". Vorsicht vor Pseudo-Gefühlen, die versteckte Vorwürfe sind: „Ich fühle mich übergangen" klingt nach Gefühl, enthält aber die Anklage „Du übergehst mich".\n\nSchritt 3, Bedürfnis: Mach sichtbar, welches Bedürfnis dahintersteht – etwa Verlässlichkeit, Klarheit, Wertschätzung, Planbarkeit. Das ist der Schritt, der den Unterschied macht: Bedürfnisse sind universell und verbinden, Vorwürfe trennen.\n\nSchritt 4, Bitte: Formuliere eine konkrete, erfüllbare Bitte im Hier und Jetzt – positiv formuliert (was du willst, nicht was aufhören soll) und als Bitte, nicht als Forderung: Das Gegenüber darf auch Nein sagen, sonst war es keine Bitte.',
        },
        {
          kind: 'table',
          headers: ['Schritt', 'Leitfrage', 'Typischer Fehler'],
          rows: [
            [
              'Beobachtung',
              'Was ist konkret passiert?',
              'Bewertung einschmuggeln: „immer", „nie", „typisch"',
            ],
            [
              'Gefühl',
              'Was löst das bei mir aus?',
              'Pseudo-Gefühle als versteckte Vorwürfe („ich fühle mich hintergangen")',
            ],
            ['Bedürfnis', 'Was brauche ich?', 'Bedürfnis überspringen und direkt fordern'],
            [
              'Bitte',
              'Worum bitte ich konkret?',
              'Vage Appelle („sei zuverlässiger") oder verkappte Forderungen',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'GFK nach Rosenberg: Beobachtung – Gefühl – Bedürfnis – Bitte.',
            'Beobachtung strikt von Bewertung trennen – „immer" und „nie" sind Alarmsignale.',
            'Hinter jedem Vorwurf steckt ein unerfülltes Bedürfnis – benenne das Bedürfnis statt des Vorwurfs.',
            'Bitten sind konkret, positiv formuliert und erfüllbar – und das Gegenüber darf Nein sagen.',
            'GFK wirkt auch in Gegenrichtung: Hinter dem Angriff des anderen das Bedürfnis heraushören.',
          ],
        },
        {
          kind: 'example',
          title: 'Eskalierender Mail-Thread mit einem Nachbarteam',
          good: '„Wir haben eure Schnittstellen-Doku für das Release am 15. noch nicht erhalten (Beobachtung). Das macht mich nervös (Gefühl), weil wir Planungssicherheit für unsere Tests brauchen (Bedürfnis). Könnt ihr uns bis Donnerstag einen Zwischenstand schicken, auch wenn er unvollständig ist? (Bitte)"',
          bad: '„Wie immer kommt von eurem Team nichts. Wenn ihr die Doku nicht endlich liefert, eskalieren wir das an die Bereichsleitung."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'feedback-nvc-q1',
          question: 'Welche Aussage ist im Sinne der GFK eine reine Beobachtung?',
          options: [
            {
              text: '„In den letzten drei Teammeetings hast du jeweils nach etwa 20 Minuten den Laptop aufgeklappt und Mails beantwortet."',
              correct: true,
              explanation:
                'Richtig: konkret, zählbar, wie mit einer Kamera aufgenommen – ohne Deutung oder Urteil. Darüber lässt sich nicht streiten.',
            },
            {
              text: '„Du interessierst dich offensichtlich nicht für unsere Meetings."',
              correct: false,
              explanation:
                'Das ist eine Interpretation des Verhaltens, kein Beobachtung. Ob Desinteresse dahintersteckt, weißt du nicht – vielleicht ist es Überlastung.',
            },
            {
              text: '„Du bist in Meetings immer total abwesend."',
              correct: false,
              explanation:
                '„Immer" und „total" sind Verallgemeinerungen und Bewertungen – genau die Mischung, die laut Rosenberg Widerstand erzeugt statt Verständigung.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'feedback-nvc-q2',
          question: 'Was unterscheidet in der GFK eine Bitte von einer Forderung?',
          options: [
            {
              text: 'Bei einer Bitte darf das Gegenüber Nein sagen, ohne dass Sanktionen oder Schuldgefühle folgen – bei einer Forderung nicht.',
              correct: true,
              explanation:
                'Genau: Der Test kommt nach dem Nein. Reagierst du mit Druck oder Vorwurf, war es eine verkappte Forderung. Echte Bitten öffnen einen Verhandlungsraum.',
            },
            {
              text: 'Eine Bitte beginnt immer mit „bitte", eine Forderung nicht.',
              correct: false,
              explanation:
                'Das Wort „bitte" macht keine Bitte: „Bitte liefere endlich pünktlich, sonst knallt es" ist trotz des Wortes eine Forderung mit Drohung.',
            },
            {
              text: 'Bitten dürfen nur an Vorgesetzte gerichtet werden, Forderungen nur an Mitarbeitende.',
              correct: false,
              explanation:
                'Die Unterscheidung hat nichts mit Hierarchie zu tun – sie liegt allein darin, ob ein Nein wirklich akzeptiert wird.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'feedback-nvc-s1',
          situation:
            'Ein Kollege aus dem Nachbarteam blafft dich im Flur an: „Euer Team blockiert mal wieder alles! Wegen euch können wir seit Tagen nicht weiterarbeiten!" Du weißt: Eine eurer Schnittstellen ist tatsächlich seit drei Tagen instabil.',
          choices: [
            {
              text: '„Ich höre, dass ihr richtig unter Druck steht, weil ihr auf die Schnittstelle angewiesen seid. Die ist tatsächlich seit drei Tagen instabil. Lass uns kurz durchgehen, was ihr konkret braucht, damit ihr weiterarbeiten könnt."',
              quality: 'best',
              feedback:
                'Sehr gut: Du hörst hinter dem Angriff das Bedürfnis (Arbeitsfähigkeit, Verlässlichkeit), bestätigst die berechtigte Beobachtung und lenkst auf eine konkrete Lösung. GFK in Gegenrichtung – so wird aus dem Angriff ein Arbeitsgespräch.',
            },
            {
              text: '„Mal wieder? Euer Team hat letzten Monat zwei Wochen lang unsere Tickets liegen lassen – da hat sich auch keiner beschwert!"',
              quality: 'bad',
              feedback:
                'Gegenangriff mit Aufrechnung: Jetzt streitet ihr über Vergangenes, und das eigentliche Problem (instabile Schnittstelle, blockiertes Team) bleibt ungelöst. Die Beziehung zum Nachbarteam leidet weiter.',
            },
            {
              text: '„Ich kann gerade nichts dafür, das macht die Schnittstelle. Schreib am besten ein Ticket."',
              quality: 'ok',
              feedback:
                'Sachlich korrekt und immerhin nicht eskalierend – aber du weichst dem Gegenüber aus, statt sein Bedürfnis ernst zu nehmen. Der Frust bleibt, und „schreib ein Ticket" wirkt in dieser Lage wie eine Abfertigung.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'feedback-nvc-f1',
          task: 'Übersetze diesen Vorwurf in die vier GFK-Schritte: „Du reißt in jedem Meeting die Diskussion an dich – andere kommen bei dir ja nie zu Wort!"',
          placeholder: 'Beobachtung: …\nGefühl: …\nBedürfnis: …\nBitte: …',
          sampleSolution:
            'Beobachtung: „Mir ist in den letzten beiden Meetings aufgefallen, dass du bei drei Diskussionspunkten als Erster geantwortet und jeweils mehrere Minuten gesprochen hast, bevor andere etwas sagen konnten."\nGefühl: „Mich macht das unruhig, und ich merke, dass ich zunehmend frustriert bin."\nBedürfnis: „Mir ist wichtig, dass alle im Team gehört werden und ihre Perspektiven einbringen können – davon leben unsere Entscheidungen."\nBitte: „Wärst du bereit, bei den nächsten Diskussionen erst mal zwei, drei andere Stimmen abzuwarten, bevor du deine Einschätzung gibst?"',
          checklist: [
            'Meine Beobachtung ist konkret und frei von „immer"/„nie" und Bewertungen.',
            'Ich habe ein echtes Gefühl benannt, kein Pseudo-Gefühl mit verstecktem Vorwurf.',
            'Ich habe das dahinterliegende Bedürfnis ausgesprochen.',
            'Meine Bitte ist konkret, positiv formuliert und als echte Bitte gestellt (Nein ist möglich).',
          ],
        },
      ],
    },
    {
      id: 'feedback-difficult',
      title: 'Schwierige Gespräche führen',
      theory: [
        {
          kind: 'text',
          body: 'Die Gehaltsabsage überbringen, einen Leistungsabfall ansprechen, einem Kunden einen Fehler beichten, eine Zusammenarbeit beenden: Schwierige Gespräche gehören zum Berufsleben – und die meisten Menschen schieben sie auf, bis die Situation noch schwieriger geworden ist. Dabei gilt: Das Gespräch wird nicht besser, indem man es verschiebt. Es wird besser, indem man es vorbereitet.\n\nDrei Dinge entscheiden über den Verlauf: die Vorbereitung vor dem Gespräch, der Einstieg in den ersten zwei Minuten und deine Fähigkeit, unter Druck sachlich zu bleiben.',
        },
        {
          kind: 'text',
          heading: 'Vorbereitung: Ziel, Fakten, Perspektivwechsel',
          body: 'Kläre zuerst dein Gesprächsziel: Was soll am Ende konkret anders sein? „Ich will ihm mal die Meinung sagen" ist kein Ziel – „Wir haben eine Vereinbarung, wie Deadlines künftig kommuniziert werden" ist eines. Unterscheide dabei Maximal- und Minimalziel: Was wäre ideal, was ist das Minimum, mit dem du das Gespräch beenden kannst?\n\nSammle dann Fakten statt Eindrücke: konkrete Situationen mit Datum, Zahlen, Beispiele. „Mehrfach unzuverlässig" lässt sich wegdiskutieren, „die Abgaben vom 3., 12. und 24. kamen jeweils zwei Tage zu spät" nicht. Und nimm die Gegenseite ein: Wie sieht die Situation vermutlich aus Sicht des anderen aus? Welche Einwände werden kommen, und was antwortest du darauf? Wer den stärksten Einwand des Gegenübers vorher durchdacht hat, wird im Gespräch nicht kalt erwischt.\n\nWähle zuletzt Rahmen und Zeitpunkt bewusst: ungestört, unter vier Augen, mit genug Zeit – nicht zwischen Tür und Angel und nicht freitags um 16:55 Uhr.',
        },
        {
          kind: 'text',
          heading: 'Der Gesprächseinstieg und Sachlichkeit unter Druck',
          body: 'Die ersten zwei Minuten setzen den Ton. Bewährt hat sich ein direkter, respektvoller Einstieg: Thema benennen, Anlass nennen, Ziel des Gesprächs transparent machen – ohne langes Vorgeplänkel und ohne Smalltalk-Falle („Wie war dein Urlaub?" direkt vor einer Kritik wirkt wie ein Hinterhalt). Beispiel: „Ich möchte mit dir über die Projektabgaben der letzten Wochen sprechen. Mir ist wichtig, dass wir gemeinsam eine Lösung finden – deshalb dieses Gespräch."\n\nWenn es emotional wird, helfen drei Techniken. Erstens: Tempo rausnehmen – langsamer sprechen, Pausen zulassen, bei Bedarf eine kurze Unterbrechung vorschlagen („Lassen Sie uns fünf Minuten durchatmen"). Zweitens: zurück zur Sache über Zusammenfassen („Lass mich kurz sortieren, was ich verstanden habe …") – das entschleunigt und zeigt, dass du zuhörst. Drittens: Vorwürfe nicht spiegeln, sondern das Bedürfnis dahinter adressieren. Wer zurückschießt, hat das Gespräch verloren, auch wenn er das Wortgefecht gewinnt.\n\nUnd wenn gar nichts mehr geht: vertagen ist erlaubt. „Ich merke, wir kommen gerade nicht weiter. Lass uns morgen um 10 Uhr weitersprechen" ist kein Scheitern, sondern Gesprächsführung.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Schwierige Gespräche nicht aufschieben, sondern vorbereiten: Ziel (maximal/minimal), Fakten, erwartete Einwände.',
            'Konkrete Beispiele mit Datum schlagen vage Eindrücke – „mehrfach" ist angreifbar, drei Daten sind es nicht.',
            'Einstieg: Thema, Anlass und Gesprächsziel in den ersten zwei Minuten transparent machen.',
            'Unter Druck: Tempo rausnehmen, zusammenfassen, Bedürfnis hinter dem Vorwurf adressieren – nie zurückschießen.',
            'Vertagen ist legitim: Ein unterbrochenes Gespräch ist besser als ein eskaliertes.',
          ],
        },
        {
          kind: 'example',
          title: 'Einstieg in ein Kritikgespräch',
          good: '„Danke, dass du dir Zeit nimmst. Ich möchte mit dir über die Qualität der letzten drei Lieferungen an den Kunden Berger sprechen – da sind Reklamationen aufgelaufen, und mir ist wichtig, dass wir zusammen die Ursachen finden und abstellen. Ich schildere dir erst meine Sicht, und dann will ich deine hören."',
          bad: '„Setz dich mal. Na, wie läufts denn so? Alles gut bei dir? … Ähm, ja, also, es gibt da ein paar Leute, die sich – also nicht ich, aber man hört so Dinge – über gewisse Qualitätsthemen geäußert haben …"',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'feedback-difficult-q1',
          question: 'Warum sind konkrete Beispiele mit Datum in einem Kritikgespräch so wichtig?',
          options: [
            {
              text: 'Vage Vorwürfe („mehrfach", „immer wieder") lassen sich bestreiten und führen in Grundsatzdebatten – konkrete Fakten halten das Gespräch bei der Sache.',
              correct: true,
              explanation:
                'Genau: Über „Du bist unzuverlässig" kann man streiten, über drei dokumentierte verspätete Abgaben nicht. Fakten machen das Gespräch kürzer, fairer und lösungsorientierter.',
            },
            {
              text: 'Weil man die Beispiele später für eine Abmahnung braucht.',
              correct: false,
              explanation:
                'Dokumentation kann arbeitsrechtlich relevant werden, aber darum geht es im Gespräch nicht primär: Konkrete Beispiele dienen zuerst der Verständigung, nicht der Beweissicherung.',
            },
            {
              text: 'Je mehr Beispiele man aufzählt, desto stärker ist der Überraschungseffekt beim Gegenüber.',
              correct: false,
              explanation:
                'Überrumpeln ist kein Gesprächsziel – es erzeugt Abwehr. Zwei, drei gut gewählte konkrete Beispiele genügen; eine endlose Liste wirkt wie ein Tribunal.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'feedback-difficult-q2',
          question:
            'Dein Gegenüber wird im Gespräch laut und wirft dir Unfähigkeit vor. Was ist die beste Reaktion?',
          options: [
            {
              text: 'Tempo rausnehmen, kurz zusammenfassen, was du verstanden hast, und das Bedürfnis hinter dem Vorwurf ansprechen.',
              correct: true,
              explanation:
                'Richtig: Entschleunigen und Zusammenfassen senkt die Temperatur, und wer das Bedürfnis hinter dem Angriff adressiert, holt das Gespräch zurück auf die Sachebene.',
            },
            {
              text: 'In gleicher Lautstärke kontern, damit das Gegenüber merkt, dass du dich nicht einschüchtern lässt.',
              correct: false,
              explanation:
                'Wer zurückschießt, eskaliert: Aus dem Gespräch wird ein Machtkampf, und in der Sache bewegt sich nichts mehr. Souveränität zeigt sich im Ruhigbleiben, nicht im Lauterwerden.',
            },
            {
              text: 'Das Gespräch sofort und kommentarlos verlassen, um ein Zeichen zu setzen.',
              correct: false,
              explanation:
                'Ein kommentarloser Abgang wirkt als Beziehungsabbruch. Vertagen ist legitim – aber angekündigt und mit konkretem neuen Termin: „Wir kommen so nicht weiter, lass uns morgen um 10 fortsetzen."',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'feedback-difficult-s1',
          situation:
            'Du musst einer engagierten Mitarbeiterin mitteilen, dass die von ihr erhoffte Gehaltserhöhung dieses Jahr nicht kommt – die Entscheidung der Geschäftsführung ist endgültig. Du weißt, dass sie enttäuscht sein wird und mit Abwerbungsangeboten liebäugelt.',
          choices: [
            {
              text: 'Die Nachricht klar und früh im Gespräch überbringen, die Gründe ehrlich nennen, die Enttäuschung anerkennen – und dann über konkrete Perspektiven sprechen (Entwicklung, nächster Gehaltstermin, andere Bausteine).',
              quality: 'best',
              feedback:
                'Sehr gut: Klarheit zuerst – alles andere wirkt wie Hinhalten. Enttäuschung anerkennen statt kleinreden, und dann ehrlich über Perspektiven sprechen. So bleibt das Vertrauen erhalten, auch wenn die Botschaft schmerzt.',
            },
            {
              text: 'Mit zehn Minuten Lob und Smalltalk einsteigen und die Absage ganz am Ende beiläufig erwähnen, um die Stimmung zu schonen.',
              quality: 'bad',
              feedback:
                'Die Sandwich-Taktik in Extremform: Das Lob wirkt rückwirkend unaufrichtig, die Absage trifft trotzdem – nur fühlt sich die Mitarbeiterin jetzt zusätzlich manipuliert. Schlechte Nachrichten gehören klar und früh ins Gespräch.',
            },
            {
              text: 'Die Entscheidung auf die Geschäftsführung schieben: „Ich hätte es dir ja gegönnt, aber die da oben haben es abgelehnt – ich kann da leider gar nichts machen."',
              quality: 'ok',
              feedback:
                'Ehrlich ist daran, dass die Entscheidung woanders fiel – aber wer sich komplett distanziert, wirkt schwach und lässt die Mitarbeiterin mit ihrem Frust allein. Als Führungskraft vertrittst du die Entscheidung und kümmerst dich um Perspektiven, auch wenn du sie nicht getroffen hast.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'feedback-difficult-f1',
          task: 'Du musst mit einem langjährigen externen Dienstleister sprechen: Die Qualität der letzten Lieferungen ist deutlich gesunken, zwei Kunden haben sich beschwert. Skizziere deine Gesprächsvorbereitung: dein Maximal- und Minimalziel, zwei konkrete Fakten, die du nennen willst, den wahrscheinlichsten Einwand des Dienstleisters und deine ersten zwei Sätze zum Gesprächseinstieg.',
          placeholder:
            'Maximalziel: …\nMinimalziel: …\nFakten: …\nErwarteter Einwand: …\nEinstieg: …',
          sampleSolution:
            'Maximalziel: Der Dienstleister legt binnen einer Woche einen konkreten Maßnahmenplan zur Qualitätssicherung vor und benennt einen festen Qualitätsverantwortlichen.\nMinimalziel: Er erkennt das Problem an, und wir vereinbaren einen Folgetermin mit Maßnahmenplan binnen 14 Tagen.\nFakten: Lieferung vom 12.09. mit 8 % Fehlerquote statt vereinbarter max. 2 %; schriftliche Beschwerden der Kunden Berger (18.09.) und Novak (01.10.).\nErwarteter Einwand: „Ihr habt die Anforderungen kurzfristig geändert, das war so nicht leistbar." – Antwort: Änderungen anerkennen, aber auf den vereinbarten Change-Prozess verweisen und klären, warum keine Rückmeldung zur Machbarkeit kam.\nEinstieg: „Danke, dass Sie sich Zeit nehmen. Ich möchte mit Ihnen über die Qualität der letzten Lieferungen sprechen – wir haben zwei Kundenbeschwerden, und mir ist wichtig, dass wir gemeinsam die Ursachen klären und die Zusammenarbeit auf das alte Niveau bringen."',
          checklist: [
            'Ich habe Maximal- und Minimalziel klar unterschieden.',
            'Ich habe konkrete, überprüfbare Fakten mit Datum oder Zahl notiert.',
            'Ich habe den stärksten erwartbaren Einwand durchdacht und eine Antwort skizziert.',
            'Mein Einstieg benennt Thema, Anlass und Gesprächsziel in zwei Sätzen.',
            'Mein Ton ist klar in der Sache und respektvoll gegenüber der Person.',
          ],
        },
      ],
    },
  ],
}
