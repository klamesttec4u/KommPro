import type { Module } from '@/types/content'

export const negotiation: Module = {
  id: 'negotiation',
  title: 'Verhandeln & Überzeugen',
  description:
    'Sachgerecht verhandeln statt feilschen: das Harvard-Konzept, BATNA und Verhandlungsmacht, Anker und ZOPA – plus souveräne Einwandbehandlung und Nutzenargumentation.',
  category: 'communication',
  lessons: [
    {
      id: 'negotiation-harvard',
      title: 'Das Harvard-Konzept',
      theory: [
        {
          kind: 'text',
          body: 'Verhandelt wird im Büro ständig – nicht nur mit Kunden und Lieferanten, sondern auch intern: über Deadlines, Budgets, Zuständigkeiten, Gehalt. Die meisten Menschen kennen dabei nur zwei Stile: hart (auf Positionen beharren, Druck machen) oder weich (nachgeben, um die Beziehung zu schonen). Beide haben einen hohen Preis – der harte Stil beschädigt Beziehungen, der weiche führt zu schlechten Ergebnissen und wachsendem Frust.\n\nDas Harvard-Konzept, entwickelt von Roger Fisher und William Ury an der Harvard-Universität, bietet einen dritten Weg: sachgerecht verhandeln. Hart in der Sache, weich zu den Menschen. Es ruht auf vier Prinzipien, die zusammen ein komplettes Verhandlungssystem bilden.',
        },
        {
          kind: 'text',
          heading: 'Prinzip 1 und 2: Menschen und Probleme trennen, Interessen statt Positionen',
          body: 'Menschen und Probleme getrennt behandeln: In Verhandlungen vermischen sich Sachfragen schnell mit Beziehungsfragen – eine harte Forderung wird als persönlicher Angriff gehört, ein Zugeständnis als Freundschaftsdienst erwartet. Das Harvard-Konzept trennt beides konsequent: In der Sache darfst du hartnäckig sein, der Person gegenüber bleibst du respektvoll und wertschätzend. „Ich schätze unsere Zusammenarbeit sehr – und genau deshalb will ich, dass wir bei den Konditionen eine Lösung finden, die wirklich trägt."\n\nInteressen statt Positionen verhandeln: Die Position ist das, was jemand fordert („Ich brauche das Feature bis Ende März"). Das Interesse ist das Warum dahinter („Ich habe dem Kunden eine Demo auf der Messe zugesagt"). Positionen kollidieren oft frontal, Interessen dagegen sind meist vereinbar: Vielleicht reicht für die Messe-Demo ein klickbarer Prototyp statt des fertigen Features. Die wichtigste Frage im Harvard-Stil lautet deshalb: „Wofür brauchst du das? Was ist dir daran wichtig?"',
        },
        {
          kind: 'text',
          heading: 'Prinzip 3 und 4: Optionen entwickeln, objektive Kriterien nutzen',
          body: 'Optionen zum beiderseitigen Vorteil entwickeln: Die meisten Verhandlungen kreisen um eine einzige Stellschraube – meist den Preis – und werden damit zum Nullsummenspiel. Das Harvard-Konzept fordert eine eigene Kreativphase: Bevor entschieden wird, sammeln beide Seiten gemeinsam möglichst viele Optionen, ohne sie sofort zu bewerten. Laufzeit, Zahlungsziele, Leistungsumfang, Referenznennung, Pilotphase – je mehr Variablen auf dem Tisch liegen, desto eher findet sich ein Paket, das beiden mehr bringt als der simple Kompromiss in der Mitte.\n\nAuf objektiven Kriterien bestehen: Wenn es ans Entscheiden geht, sollte nicht Sturheit gewinnen, sondern ein fairer Maßstab – Marktpreise, Branchenbenchmarks, Gutachten, gesetzliche Standards, Präzedenzfälle. Der Satz dazu: „Ich will weder, dass Sie mir etwas schenken, noch umgekehrt – lassen Sie uns einen Maßstab finden, den wir beide fair finden." Wer nach Kriterien verhandelt, kann nachgeben, ohne das Gesicht zu verlieren: Man beugt sich dem Argument, nicht dem Druck.',
        },
        {
          kind: 'table',
          headers: ['Prinzip', 'Kernfrage', 'Typische Formulierung'],
          rows: [
            [
              'Menschen und Probleme trennen',
              'Wie bleibe ich hart in der Sache, aber weich zur Person?',
              '„Ich schätze dich als Kollegin – und genau deshalb lass uns das Sachproblem knacken."',
            ],
            [
              'Interessen statt Positionen',
              'Was steckt hinter der Forderung?',
              '„Wofür brauchst du das genau? Was ist dir daran wichtig?"',
            ],
            [
              'Optionen entwickeln',
              'Welche Lösungen jenseits der einen Stellschraube gibt es?',
              '„Lass uns erst mal sammeln, ohne zu bewerten – was wäre alles denkbar?"',
            ],
            [
              'Objektive Kriterien',
              'An welchem fairen Maßstab messen wir das Ergebnis?',
              '„Welcher Vergleichswert wäre für uns beide akzeptabel?"',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Harvard-Konzept (Fisher/Ury): sachgerecht verhandeln statt hart oder weich – hart in der Sache, weich zu den Menschen.',
            'Menschen und Probleme trennen: Sachkonflikt und Beziehung nie vermischen.',
            'Interessen statt Positionen: Das „Warum" hinter der Forderung eröffnet Lösungsräume.',
            'Erst Optionen sammeln (ohne Bewertung), dann entscheiden – mehr Variablen, bessere Pakete.',
            'Mit objektiven Kriterien entscheiden: Man beugt sich dem Argument, nicht dem Druck.',
          ],
        },
        {
          kind: 'example',
          title: 'Interne Verhandlung um eine Entwicklerin',
          good: '„Du willst Anna im April voll in deinem Projekt – ich brauche sie für den Release. Lass uns kurz sortieren, worum es uns wirklich geht: Mir geht es um die Datenbankmigration in Woche 1, dir um den Kundenworkshop ab Woche 2. Wenn das stimmt, könnten wir sie aufteilen: erste Aprilwoche bei mir, danach bei dir – und wir prüfen am Monatsende gemeinsam, ob der Schnitt gepasst hat."',
          bad: '„Anna bleibt im April bei mir, Punkt. Mein Projekt hat Priorität, das weißt du genau. Wenn dir das nicht passt, klären wir das eben beim Bereichsleiter."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'negotiation-harvard-q1',
          question: 'Was ist der Unterschied zwischen einer Position und einem Interesse?',
          options: [
            {
              text: 'Die Position ist die konkrete Forderung („Was ich will"), das Interesse ist das Bedürfnis dahinter („Warum ich es will").',
              correct: true,
              explanation:
                'Richtig. Positionen stehen sich oft unvereinbar gegenüber, während die Interessen dahinter meist mehrere Lösungswege zulassen – deshalb fragt der Harvard-Stil konsequent nach dem Warum.',
            },
            {
              text: 'Die Position ist der offizielle Standpunkt des Unternehmens, das Interesse der private Standpunkt des Verhandlers.',
              correct: false,
              explanation:
                'Nein – die Unterscheidung läuft nicht zwischen offiziell und privat. Auch ein Unternehmen hat hinter seiner Position (z.B. „maximal 50.000 Euro") Interessen (Budgetgrenzen, Planungssicherheit, interne Vergleichbarkeit).',
            },
            {
              text: 'Es gibt keinen echten Unterschied – beide Begriffe bezeichnen das Verhandlungsziel.',
              correct: false,
              explanation:
                'Doch, und er ist der Kern des Harvard-Konzepts: Wer nur Positionen austauscht, feilscht. Wer Interessen versteht, kann Lösungen entwickeln, die beiden Seiten mehr bringen als der Kompromiss in der Mitte.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'negotiation-harvard-q2',
          question:
            'Warum fordert das Harvard-Konzept, Entscheidungen an objektiven Kriterien auszurichten?',
          options: [
            {
              text: 'Weil dann das bessere Argument gewinnt statt der größere Druck – und beide Seiten nachgeben können, ohne das Gesicht zu verlieren.',
              correct: true,
              explanation:
                'Genau. Wer sich einem Marktpreis, Benchmark oder Gutachten beugt, beugt sich einem fairen Maßstab – nicht der Sturheit des anderen. Das schützt das Ergebnis und die Beziehung.',
            },
            {
              text: 'Weil objektive Kriterien immer eindeutig sind und damit jede Diskussion überflüssig machen.',
              correct: false,
              explanation:
                'Leider nein – oft gibt es mehrere mögliche Maßstäbe (verschiedene Benchmarks, Vergleichszeiträume), und auch über das passende Kriterium wird verhandelt. Der Gewinn liegt darin, DASS nach Maßstäben statt nach Macht entschieden wird.',
            },
            {
              text: 'Weil man mit Zahlen und Statistiken den Verhandlungspartner leichter unter Druck setzen kann.',
              correct: false,
              explanation:
                'Das wäre die Logik des harten Feilschens im neuen Gewand. Im Harvard-Konzept dienen Kriterien gerade nicht als Druckmittel, sondern als gemeinsamer, fairer Bezugspunkt für beide Seiten.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'negotiation-harvard-s1',
          situation:
            'Du verhandelst mit dem Leiter einer Nachbarabteilung über die Verteilung des gemeinsamen Weiterbildungsbudgets. Er eröffnet aggressiv: „70 Prozent gehen an mein Team, das steht fest – wir haben die größeren Skill-Lücken. Dein Team kann ja Youtube-Tutorials schauen."',
          choices: [
            {
              text: 'Du bleibst ruhig: „Bevor wir über Prozente reden – lass uns anschauen, welche Kompetenzen beide Teams in den nächsten zwölf Monaten brauchen. Dann finden wir einen Verteilungsschlüssel, den wir beide vor unseren Teams begründen können."',
              quality: 'best',
              feedback:
                'Stark: Du steigst nicht auf das Positionsgefeilsche ein, sondern lenkst auf Interessen (Kompetenzbedarf) und ein objektives Kriterium (begründbarer Verteilungsschlüssel). Die spitze Bemerkung ignorierst du souverän – Menschen und Probleme getrennt.',
            },
            {
              text: 'Du konterst mit einer Gegenposition: „70 Prozent? Niemals. Wenn überhaupt, dann fifty-fifty – das war schon immer so."',
              quality: 'ok',
              feedback:
                'Verständlich, und fifty-fifty klingt fair – aber „das war schon immer so" ist kein objektives Kriterium, sondern nur eine Gewohnheit. Ihr feilscht jetzt um Prozentzahlen, statt über den tatsächlichen Bedarf zu sprechen. Das Ergebnis wird ein Mittelwert sein, der womöglich an beiden Bedarfen vorbeigeht.',
            },
            {
              text: 'Du wirst persönlich: „Typisch du – immer schön zuerst die eigenen Schäfchen ins Trockene bringen. Mit dir kann man einfach nicht vernünftig verhandeln."',
              quality: 'bad',
              feedback:
                'Jetzt hast du Menschen und Problem endgültig vermischt: Aus der Budgetfrage wird ein Beziehungskonflikt. Selbst wenn du am Ende Prozente gewinnst – die nächste Zusammenarbeit mit ihm hast du gerade deutlich teurer gemacht.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'negotiation-harvard-f1',
          task: 'Ein Kunde fordert: „Wir brauchen 20 Prozent Rabatt, sonst können wir den Vertrag nicht verlängern." Notiere: (1) mindestens zwei mögliche Interessen hinter dieser Position, (2) drei Optionen jenseits des reinen Preisnachlasses, die diese Interessen bedienen könnten, und (3) eine Frage, mit der du die Interessen im Gespräch herausfindest.',
          placeholder: 'Mögliche Interessen: …\nOptionen: …\nMeine Frage: …',
          sampleSolution:
            'Mögliche Interessen: 1. Das Budget des Kunden wurde gekürzt und er muss intern Einsparungen vorweisen. 2. Er fühlt sich gegenüber einem Konkurrenzangebot im Nachteil und braucht ein Argument gegenüber seinem Einkauf. 3. Er ist mit einer Teilleistung unzufrieden und drückt das über den Preis aus.\nOptionen: 1. Längere Vertragslaufzeit (24 statt 12 Monate) gegen moderaten Nachlass – gibt ihm Einsparung, uns Planungssicherheit. 2. Leistungspaket anpassen: selten genutzte Module herausnehmen, dadurch sinkt der Preis ohne Margenverlust. 3. Gleicher Preis, aber Mehrwert: zusätzliches Schulungskontingent oder bevorzugter Support, den er intern als Gewinn verkaufen kann.\nMeine Frage: „Damit ich eine Lösung finden kann, die für Sie wirklich funktioniert: Was ist der Hintergrund der 20 Prozent – geht es um eine Budgetvorgabe, um ein Vergleichsangebot oder um etwas an unserer Leistung?"',
          checklist: [
            'Ich habe mindestens zwei plausible, unterschiedliche Interessen hinter der Rabattforderung benannt.',
            'Ich habe drei Optionen entwickelt, die nicht nur am Preis drehen (z.B. Laufzeit, Umfang, Zusatzleistungen).',
            'Meine Optionen bedienen erkennbar die vermuteten Interessen.',
            'Meine Frage ist offen formuliert und erfragt das „Warum" hinter der Position, ohne zu werten.',
          ],
        },
      ],
    },
    {
      id: 'negotiation-batna',
      title: 'BATNA, Anker & ZOPA',
      theory: [
        {
          kind: 'text',
          body: 'Die wichtigste Verhandlungsvorbereitung findet statt, bevor du den Raum betrittst: Du klärst deine Alternativen. Denn deine Verhandlungsmacht hängt weniger davon ab, wie überzeugend du argumentierst – sondern davon, wie gut du ohne diesen Abschluss dastehst.\n\nDrei Konzepte bilden das Handwerkszeug dafür: BATNA (deine beste Alternative), ZOPA (der Einigungsbereich) und das Ankern (die Macht des ersten Angebots). Wer sie kennt, verhandelt mit klarem Kopf – und merkt sofort, wenn ein Deal schlechter wäre als gar keiner.',
        },
        {
          kind: 'text',
          heading: 'BATNA: Deine beste Alternative kennen und verbessern',
          body: 'BATNA steht für „Best Alternative To a Negotiated Agreement" – die beste Alternative, die du hast, falls die Verhandlung scheitert. Verhandelst du mit einem Lieferanten, ist deine BATNA vielleicht das Angebot eines Wettbewerbers. Verhandelst du über dein Gehalt, ist es möglicherweise ein anderes Jobangebot – oder schlicht dein aktueller Vertrag.\n\nDie BATNA ist dein Maßstab: Jedes Verhandlungsergebnis, das schlechter ist als deine BATNA, lehnst du ab. Jedes bessere kannst du annehmen. Ohne klare BATNA verhandelst du blind – du akzeptierst aus Angst zu viel oder lehnst aus Trotz zu viel ab.\n\nUnd: Die BATNA ist kein fester Zustand, sondern gestaltbar. Vor wichtigen Verhandlungen lohnt es sich, aktiv an ihr zu arbeiten: ein zweites Angebot einholen, eine interne Alternative prüfen, einen Plan B konkretisieren. Jede Verbesserung deiner BATNA erhöht deine Verhandlungsmacht – oft mehr als jedes Argument am Tisch. Umgekehrt gilt: Schätze auch die BATNA der Gegenseite ein. Wie dringend braucht sie den Abschluss? Welche Alternativen hat sie wirklich? Daraus ergibt sich das reale Machtverhältnis.',
        },
        {
          kind: 'text',
          heading: 'ZOPA und Anker: Wo Einigung möglich ist und wer den Rahmen setzt',
          body: 'Die ZOPA („Zone Of Possible Agreement") ist der Bereich, in dem eine Einigung für beide Seiten besser ist als ihre jeweilige Alternative. Beispiel: Du würdest einen Dienstleister bis maximal 80.000 Euro beauftragen, der Dienstleister macht den Auftrag ab 65.000 Euro – die ZOPA liegt zwischen 65.000 und 80.000. Gibt es keine Überlappung, gibt es keine ZOPA – dann ist Scheitern das richtige Ergebnis, und du gehst zu deiner BATNA.\n\nWo innerhalb der ZOPA ihr landet, beeinflusst maßgeblich der Anker: das erste konkrete Angebot. Zahlreiche Studien zeigen den Ankereffekt – die zuerst genannte Zahl zieht das Ergebnis messbar in ihre Richtung, selbst wenn alle Beteiligten wissen, dass sie taktisch gewählt ist. Daraus folgt: Wenn du den Markt gut kennst, setze den ersten Anker – ambitioniert, aber begründbar. Ein Anker ohne Begründung wirkt unseriös; ein Anker mit nachvollziehbarer Herleitung („auf Basis der Marktpreise für vergleichbare Projekte") verschiebt den Rahmen zu deinen Gunsten.\n\nWirst du selbst geankert, gilt: Anker benennen und neu rahmen, statt daran entlangzuverhandeln. „Die Zahl überrascht mich – lassen Sie uns erst klären, welcher Leistungsumfang dahintersteckt, bevor wir über Preise sprechen." Dann setzt du einen begründeten Gegenanker.',
        },
        {
          kind: 'table',
          headers: ['Begriff', 'Bedeutung', 'Praktische Konsequenz'],
          rows: [
            [
              'BATNA',
              'Beste Alternative zum Verhandlungsabschluss',
              'Vorab klären und aktiv verbessern; nie schlechter abschließen als die eigene BATNA',
            ],
            [
              'ZOPA',
              'Überlappungsbereich, in dem Einigung für beide besser ist als ihre Alternativen',
              'Eigene Grenze und vermutete Grenze der Gegenseite abschätzen; ohne ZOPA ist Scheitern das richtige Ergebnis',
            ],
            [
              'Anker',
              'Das erste konkrete Angebot, das den Verhandlungsrahmen setzt',
              'Bei guter Marktkenntnis selbst zuerst ankern – ambitioniert, aber begründet; fremde Anker benennen und neu rahmen',
            ],
            [
              'Verhandlungsmacht',
              'Ergebnis des Vergleichs beider BATNAs',
              'Nicht an der Lautstärke festmachen – an den realen Alternativen beider Seiten',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'BATNA = beste Alternative, falls die Verhandlung scheitert – sie ist deine Untergrenze für jeden Deal.',
            'Verhandlungsmacht entsteht aus Alternativen: Wer die bessere BATNA hat, verhandelt gelassener.',
            'Die eigene BATNA vor der Verhandlung aktiv verbessern (zweites Angebot, Plan B) – und die BATNA der Gegenseite realistisch einschätzen.',
            'ZOPA = Bereich zwischen den Grenzwerten beider Seiten; ohne Überlappung ist kein Abschluss sinnvoll.',
            'Der erste begründete Anker zieht das Ergebnis in seine Richtung – fremde Anker benennen und mit Gegenanker neu rahmen.',
          ],
        },
        {
          kind: 'example',
          title: 'Gehaltsverhandlung vorbereiten',
          good: 'Vor dem Gespräch recherchiert Mara Gehaltsbenchmarks für ihre Rolle, führt zwei Gespräche mit anderen Arbeitgebern (eins davon mündet in einem konkreten Angebot – ihre BATNA) und legt ihre Zielzahl fest. Im Gespräch ankert sie zuerst: „Auf Basis der Marktdaten für vergleichbare Positionen und meiner Ergebnisse im letzten Jahr halte ich 78.000 Euro für angemessen."',
          bad: 'Jonas geht unvorbereitet ins Gespräch und wartet ab, was die Chefin anbietet. Sie ankert bei 62.000 Euro, er verhandelt mühsam auf 64.000 hoch – ohne zu wissen, dass vergleichbare Stellen bei 75.000 liegen und seine Chefin intern bis 72.000 freigegeben bekommen hatte.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'negotiation-batna-q1',
          question: 'Welche Rolle spielt die BATNA in einer Verhandlung?',
          options: [
            {
              text: 'Sie ist die beste Alternative zum Abschluss und damit die Untergrenze: Jedes Ergebnis unterhalb der eigenen BATNA sollte man ablehnen.',
              correct: true,
              explanation:
                'Richtig. Die BATNA macht den Wert eines Angebots messbar: besser als die Alternative – annehmen möglich; schlechter – ablehnen und zur Alternative gehen. Das schützt vor Abschlüssen aus Angst oder Zeitdruck.',
            },
            {
              text: 'Sie ist das Maximalziel, das man zu Beginn der Verhandlung als Forderung nennt.',
              correct: false,
              explanation:
                'Das beschreibt eher den Anker bzw. das Eröffnungsangebot. Die BATNA ist kein Verhandlungsziel, sondern dein Plan B außerhalb der Verhandlung – und damit deine Untergrenze, nicht deine Eröffnung.',
            },
            {
              text: 'Sie ist eine Taktik, mit der man die Gegenseite einschüchtert, indem man mit dem Abbruch droht.',
              correct: false,
              explanation:
                'Die BATNA ist zunächst ein internes Vorbereitungsinstrument. Man kann sie situativ offenlegen – aber als plumpe Drohung eingesetzt vergiftet sie das Klima, besonders wenn sie in Wahrheit schwach ist.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'negotiation-batna-q2',
          question:
            'Dein maximales Budget für eine Agentur liegt bei 50.000 Euro. Die Agentur würde das Projekt ab 55.000 Euro übernehmen; keine Seite bewegt sich bei Leistungsumfang oder Grenzen. Was liegt vor?',
          options: [
            {
              text: 'Es gibt keine ZOPA – eine Einigung wäre für mindestens eine Seite schlechter als ihre Alternative, Scheitern ist hier das richtige Ergebnis.',
              correct: true,
              explanation:
                'Genau: Die Bereiche überlappen nicht (du bis 50.000, die Agentur ab 55.000). Solange sich an Umfang oder Grenzen nichts ändert, ist der Gang zur jeweiligen BATNA für beide die bessere Wahl – das ist kein Verhandlungsversagen.',
            },
            {
              text: 'Die ZOPA liegt zwischen 50.000 und 55.000 Euro – dort sollte man sich in der Mitte treffen.',
              correct: false,
              explanation:
                'Vorsicht: Der Bereich zwischen den Grenzen ist hier gerade die Lücke, nicht die Überlappung. Ein Abschluss bei 52.500 läge über deinem Maximum und unter dem Minimum der Agentur – schlecht für beide.',
            },
            {
              text: 'Man sollte trotzdem abschließen, denn eine gescheiterte Verhandlung ist immer das schlechteste Ergebnis.',
              correct: false,
              explanation:
                'Nein – das ist einer der teuersten Verhandlungsirrtümer. Ein Abschluss unterhalb der eigenen BATNA bzw. außerhalb des eigenen Limits ist schlechter als keiner. Genau davor schützt die saubere Vorbereitung.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'negotiation-batna-s1',
          situation:
            'Du verhandelst für dein Unternehmen die Verlängerung eines Softwarevertrags. Der Account Manager eröffnet: „Die neue Lizenz kostet 120.000 Euro pro Jahr – das ist der Listenpreis, da ist kaum Spielraum." Du weißt aus deiner Vorbereitung: Ein Wettbewerbsprodukt würde euch inklusive Migration etwa 85.000 Euro im ersten Jahr kosten, und ihr habt es bereits erfolgreich getestet.',
          choices: [
            {
              text: 'Du benennst den Anker und rahmst neu: „120.000 liegt deutlich über dem Markt. Wir haben eine getestete Alternative bei 85.000 inklusive Migration. Wenn Sie im Bereich von 80.000 landen, reden wir über eine Verlängerung – sonst wechseln wir."',
              quality: 'best',
              feedback:
                'Sehr gut: Du lässt den Listenpreis-Anker nicht stehen, sondern setzt einen begründeten Gegenanker – gestützt auf eine echte, geprüfte BATNA. Genau dafür hast du sie aufgebaut. Dass du sie offenlegst, ist hier legitim, weil sie belastbar ist.',
            },
            {
              text: 'Du verhandelst vom genannten Preis aus: „120.000 ist zu viel – was geht denn noch? 110.000 vielleicht?"',
              quality: 'ok',
              feedback:
                'Du verhandelst – aber entlang seines Ankers. Mit jedem Gegenangebot in dieser Spanne bestätigst du den Rahmen von 120.000, obwohl deine BATNA bei 85.000 liegt. Du verschenkst damit voraussichtlich einen fünfstelligen Betrag pro Jahr.',
            },
            {
              text: 'Du stimmst zähneknirschend zu: Die Migration wäre eh anstrengend, und der Account Manager sagt ja, dass kaum Spielraum ist.',
              quality: 'bad',
              feedback:
                'Du abschließt deutlich schlechter als deine BATNA – der Kardinalfehler. „Kaum Spielraum" ist eine Behauptung, kein Fakt, und Wechselaufwand hast du in den 85.000 bereits eingerechnet. Ohne den Vergleich zu nutzen, war deine ganze Vorbereitung umsonst.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'negotiation-batna-f1',
          task: 'Du willst in drei Monaten dein Gehalt neu verhandeln. Erstelle schriftlich deine Vorbereitung: (1) Was ist deine aktuelle BATNA? (2) Mit welchen zwei konkreten Schritten könntest du sie bis zum Gespräch verbessern? (3) Mit welchem begründeten Anker eröffnest du?',
          placeholder:
            'Meine BATNA heute: …\nSchritte zur Verbesserung: …\nMein Anker (mit Begründung): …',
          sampleSolution:
            'Meine BATNA heute: Im aktuellen Vertrag bleiben – solide, aber ohne Entwicklungsperspektive; kein externes Angebot in der Hand.\nSchritte zur Verbesserung: 1. In den nächsten sechs Wochen zwei Gespräche mit anderen Unternehmen führen, um mindestens ein konkretes Vergleichsangebot zu bekommen. 2. Intern prüfen, ob ein Rollenwechsel ins Nachbarteam möglich wäre (dort ist eine Senior-Stelle ausgeschrieben) – das wäre eine zweite Alternative ohne Arbeitgeberwechsel.\nMein Anker (mit Begründung): „Ich habe mir Marktdaten für meine Rolle und Region angesehen – vergleichbare Positionen liegen zwischen 70.000 und 80.000 Euro. Angesichts meiner Verantwortung für das Kundenportal und der Übernahme der Teamkoordination seit Januar halte ich 78.000 Euro für angemessen." (Ambitioniert, aber durch Marktdaten und Leistungen begründet – oberhalb meiner Zielzahl von 74.000, um Verhandlungsspielraum zu haben.)',
          checklist: [
            'Ich habe meine aktuelle BATNA ehrlich benannt (nicht schöngerechnet).',
            'Ich habe zwei konkrete, terminierbare Schritte zur Verbesserung meiner BATNA formuliert.',
            'Mein Anker ist ambitioniert, liegt aber in einem begründbaren Bereich.',
            'Ich habe den Anker mit nachvollziehbaren Kriterien hergeleitet (Marktdaten, Leistungen), nicht nur mit Wünschen.',
            'Ich habe eine Zielzahl und eine Untergrenze unterschieden.',
          ],
        },
      ],
    },
    {
      id: 'negotiation-objections',
      title: 'Einwandbehandlung & Überzeugen',
      theory: [
        {
          kind: 'text',
          body: '„Zu teuer." – „Dafür haben wir keine Zeit." – „Das haben wir schon mal probiert." Einwände gehören zu jedem Überzeugungsprozess, ob im Kundengespräch oder im internen Meeting. Die meisten Menschen reagieren darauf falsch: Sie argumentieren sofort dagegen – und erzeugen damit Gegendruck, der den anderen nur tiefer in seine Ablehnung treibt.\n\nProfis behandeln Einwände anders: Sie verstehen sie zunächst als Information. Ein Einwand zeigt, dass sich der andere mit dem Vorschlag beschäftigt – totales Desinteresse äußert sich in Schweigen, nicht in Widerspruch. Die Kunst liegt darin, den Einwand ernst zu nehmen, seinen Kern zu verstehen und dann passgenau zu antworten.',
        },
        {
          kind: 'text',
          heading: 'Einwand oder Vorwand?',
          body: 'Zuerst gilt es zu unterscheiden: Ein Einwand ist ein echtes sachliches Bedenken – der andere hat ein reales Problem mit deinem Vorschlag (Budget, Risiko, Aufwand) und ist bei einer guten Antwort gesprächsbereit. Ein Vorwand dagegen ist ein vorgeschobener Grund: Die wahre Ablehnung liegt woanders (keine Entscheidungsbefugnis, kein Vertrauen, kein Interesse), wird aber nicht ausgesprochen.\n\nDer Unterschied ist entscheidend, denn gegen Vorwände kannst du nicht anargumentieren – widerlegst du einen, taucht sofort der nächste auf. Der klassische Test ist die hypothetische Frage: „Angenommen, wir lösen das Budgetthema – würden Sie dann starten?" Kommt ein klares Ja, war es ein echter Einwand, und du weißt, woran du arbeiten musst. Kommt ein Zögern oder ein „Na ja, da wäre auch noch …", liegt das eigentliche Hindernis woanders – und genau das solltest du dann behutsam erfragen.',
        },
        {
          kind: 'text',
          heading: 'Techniken: Bedingte Zustimmung und Rückfrage',
          body: 'Die bedingte Zustimmung (auch Ja-aber-Technik, besser: Ja-und-Technik) nimmt dem Gespräch die Konfrontation: Du erkennst den berechtigten Kern des Einwands an, bevor du deine Sicht ergänzt. „Sie haben recht, die Umstellung kostet zunächst Zeit – gerade deshalb lohnt der Blick auf die Monate danach: Ab dem zweiten Quartal spart das Team pro Woche etwa einen Tag Handarbeit." Wichtig: Die Zustimmung muss ehrlich sein. Ein gespieltes „Da haben Sie völlig recht, ABER…" durchschaut jeder – das „aber" entwertet sonst die Zustimmung. Deshalb möglichst mit „und" oder „gerade deshalb" fortsetzen statt mit „aber".\n\nDie Rückfragetechnik dreht den Spieß um: Statt sofort zu antworten, lässt du den Einwand präzisieren. „Zu teuer – im Vergleich wozu?" oder „Was genau meinst du mit zu aufwendig – die Einführung oder den laufenden Betrieb?" Das hat drei Effekte: Du gewinnst Zeit, du zwingst Pauschalkritik zur Konkretisierung, und oft entkräftet sich der Einwand beim Präzisieren von selbst. Außerdem signalisiert die Rückfrage echtes Interesse statt Verteidigungsreflex.',
        },
        {
          kind: 'text',
          heading: 'Nutzenargumentation: Merkmal – Vorteil – Nutzen',
          body: 'Überzeugen scheitert oft nicht an schwachen Argumenten, sondern an falsch gebauten: Viele zählen Merkmale auf („Das Tool hat eine automatische Berichtsfunktion und eine API") und hoffen, dass der andere sich den Nutzen selbst zusammenreimt. Tut er aber meist nicht.\n\nDie Nutzenargumentation baut jedes Argument in drei Stufen: Merkmal (was es ist) – Vorteil (was es generell bringt) – Nutzen (was es konkret für DIESEN Gesprächspartner bedeutet, angedockt an dessen Interessen). Aus „Das Tool hat eine automatische Berichtsfunktion" wird: „Das Tool erstellt die Monatsberichte automatisch (Merkmal). Das spart die manuelle Auswertung (Vorteil). Für dich heißt das: Die zwei Tage, die dein Team jeden Monatsanfang mit Excel verbringt, fallen weg – genau die Zeit, die dir für die Projektarbeit fehlt (Nutzen)."\n\nVoraussetzung dafür: Du musst die Interessen des anderen kennen – womit sich der Kreis zum Harvard-Konzept schließt. Wer erst fragt und zuhört, kann danach Nutzen statt Merkmale argumentieren. Deshalb gilt die Reihenfolge: erst verstehen, dann überzeugen.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Einwände sind Beschäftigung mit dem Vorschlag – Desinteresse schweigt. Nie sofort dagegenhalten.',
            'Einwand (echtes Bedenken) vom Vorwand (vorgeschobener Grund) trennen – Test: die hypothetische Frage „Angenommen, das wäre gelöst …?"',
            'Bedingte Zustimmung: berechtigten Kern ehrlich anerkennen, dann mit „und"/„gerade deshalb" ergänzen – nicht mit einem entwertenden „aber".',
            'Rückfragetechnik: Einwände präzisieren lassen („Zu teuer im Vergleich wozu?") statt reflexhaft zu verteidigen.',
            'Nutzenargumentation statt Merkmalsliste: Merkmal – Vorteil – konkreter Nutzen für genau diesen Gesprächspartner.',
          ],
        },
        {
          kind: 'example',
          title: 'Reaktion auf „Das ist uns zu teuer"',
          good: '„Verstehe ich – zu teuer im Vergleich zu Ihrem Budget oder zu einem anderen Angebot? (Kunde: Zum Budget, wir haben 40.000 eingeplant.) Danke, das hilft. Dann lassen Sie uns schauen, welcher Leistungsumfang in die 40.000 passt – die Module für die Jahresabschlüsse, die Ihr Team die meiste Zeit kosten, bekommen wir darin unter."',
          bad: '„Teuer? Also unsere Lösung hat immerhin eine KI-gestützte Analyse, ein konfigurierbares Dashboard, Single Sign-on, eine REST-API und über 40 Integrationen – das ist der Preis absolut wert, das kann sonst keiner am Markt."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'negotiation-objections-q1',
          question: 'Wie unterscheidest du einen echten Einwand von einem Vorwand?',
          options: [
            {
              text: 'Mit der hypothetischen Frage: „Angenommen, dieser Punkt wäre gelöst – würden Sie dann zustimmen?" Ein klares Ja deutet auf einen echten Einwand hin, Ausweichen auf einen Vorwand.',
              correct: true,
              explanation:
                'Richtig. Der echte Einwand ist das tatsächliche Hindernis – ist er ausgeräumt, steht der Zustimmung nichts im Weg. Beim Vorwand taucht nach der Lösung sofort das nächste „Problem" auf, weil der wahre Grund woanders liegt.',
            },
            {
              text: 'Einwände werden ruhig vorgetragen, Vorwände emotional und laut.',
              correct: false,
              explanation:
                'Tonfall ist kein verlässliches Kriterium – ein echtes Budgetproblem kann sehr emotional vorgetragen werden, ein Vorwand ganz ruhig. Entscheidend ist, ob hinter dem genannten Grund das wirkliche Hindernis steckt.',
            },
            {
              text: 'Vorwände erkennt man daran, dass sie sich auf den Preis beziehen – Preiseinwände sind immer vorgeschoben.',
              correct: false,
              explanation:
                'Nein: Preiseinwände können völlig echt sein (reale Budgetgrenzen) oder vorgeschoben (eigentlich fehlt das Vertrauen). Die Kategorie des Einwands sagt nichts über seine Echtheit – das klärt nur die hypothetische Frage oder behutsames Nachfragen.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'negotiation-objections-q2',
          question: 'Was unterscheidet eine Nutzenargumentation von einer Merkmalsliste?',
          options: [
            {
              text: 'Sie übersetzt jedes Merkmal über den allgemeinen Vorteil in einen konkreten Nutzen für genau diesen Gesprächspartner und dessen Interessen.',
              correct: true,
              explanation:
                'Genau – die Kette Merkmal → Vorteil → Nutzen. Der entscheidende letzte Schritt gelingt nur, wenn du die Interessen des anderen vorher erfragt hast: Derselbe Vorteil bedeutet für einen Controller etwas anderes als für eine Teamleiterin.',
            },
            {
              text: 'Sie nennt mehr Merkmale als eine normale Liste und wirkt dadurch überzeugender.',
              correct: false,
              explanation:
                'Eher das Gegenteil: Lange Merkmalslisten ermüden und überlassen dem Zuhörer die Übersetzungsarbeit. Drei präzise Nutzenargumente schlagen zehn aufgezählte Features.',
            },
            {
              text: 'Sie verzichtet ganz auf Fakten und argumentiert ausschließlich emotional.',
              correct: false,
              explanation:
                'Nein – das Merkmal (der Fakt) bleibt die Basis jedes Arguments. Die Nutzenargumentation ersetzt Fakten nicht, sie macht ihre Bedeutung für den konkreten Gesprächspartner sichtbar.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'negotiation-objections-s1',
          situation:
            'Du schlägst im Teammeeting vor, das manuelle Reporting durch ein automatisiertes Dashboard zu ersetzen. Dein Kollege Frank winkt ab: „Haben wir vor drei Jahren schon mal probiert, hat nicht funktioniert. Reine Zeitverschwendung."',
          choices: [
            {
              text: '„Guter Punkt – du warst damals ja dabei. Was genau hat den Versuch damals scheitern lassen? Ich will verstehen, ob die Gründe heute noch gelten."',
              quality: 'best',
              feedback:
                'Stark: Du erkennst den berechtigten Kern an (es gab einen gescheiterten Versuch, Frank hat Erfahrung damit) und nutzt die Rückfragetechnik. Entweder liefern seine Antworten echte Risiken, die du einplanen musst – oder es zeigt sich, dass die damaligen Gründe (z.B. fehlende Schnittstellen) heute weggefallen sind. Beides bringt dich weiter, und Frank wird vom Blockierer zum Experten.',
            },
            {
              text: '„Das war vor drei Jahren – die Tools sind heute viel besser. Schau mal, das neue Dashboard hat Echtzeitdaten, konfigurierbare Widgets und einen Export nach PowerPoint."',
              quality: 'ok',
              feedback:
                'Inhaltlich möglicherweise richtig, aber du überspringst Franks Erfahrung und antwortest mit einer Merkmalsliste statt mit Nutzen. Frank fühlt sich nicht ernst genommen und wird nachlegen („Das haben die damals auch versprochen") – du argumentierst jetzt gegen eine Wand.',
            },
            {
              text: '„Ach Frank, du bist doch grundsätzlich gegen alles Neue. Lass uns einfach abstimmen, dann sehen wir ja, was das Team denkt."',
              quality: 'bad',
              feedback:
                'Du machst aus dem Sacheinwand einen Angriff auf die Person und überrollst ihn per Abstimmung. Selbst wenn du die Abstimmung gewinnst: Frank wird die Einführung passiv ausbremsen – und sein womöglich berechtigtes Wissen über die damaligen Stolpersteine bekommst du nie zu hören.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'negotiation-objections-f1',
          task: 'Du willst deine Chefin überzeugen, eine Projektmanagement-Software einzuführen. Ihr wichtigstes Interesse: Sie verliert viel Zeit damit, sich Statusinformationen aus E-Mails und Zurufen zusammenzusuchen. Baue ein vollständiges Nutzenargument (Merkmal – Vorteil – Nutzen) und formuliere zusätzlich eine bedingte Zustimmung auf ihren erwarteten Einwand: „Noch ein Tool? Das Team ertrinkt jetzt schon in Software."',
          placeholder: 'Merkmal: …\nVorteil: …\nNutzen: …\nBedingte Zustimmung auf den Einwand: …',
          sampleSolution:
            'Merkmal: „Die Software hat ein zentrales Statusboard, auf dem jede Aufgabe mit Stand und Verantwortlichem sichtbar ist."\nVorteil: „Damit sind alle Projektinformationen an einem Ort, ohne dass jemand sie einsammeln muss."\nNutzen: „Für dich heißt das konkret: Statt dir vor dem Montagsmeeting die Stände aus zwölf E-Mails und drei Fluren zusammenzusuchen, öffnest du ein Board und siehst in zwei Minuten, wo jedes Projekt steht – und wo du eingreifen musst."\nBedingte Zustimmung: „Da sprichst du einen wichtigen Punkt an – wir haben wirklich schon viele Tools, und noch eins obendrauf wäre das Falsche. Gerade deshalb schlage ich vor, dass das neue Board zwei davon ersetzt: die Excel-Projektliste und den Status-Mailverteiler. Unterm Strich hätten wir danach ein Werkzeug weniger, nicht mehr."',
          checklist: [
            'Ich habe Merkmal, Vorteil und Nutzen sauber getrennt und alle drei Stufen formuliert.',
            'Mein Nutzen dockt konkret am genannten Interesse der Chefin an (Zeitverlust bei der Statussuche).',
            'Meine bedingte Zustimmung erkennt den berechtigten Kern des Einwands ehrlich an.',
            'Ich habe mit „gerade deshalb" oder „und" fortgesetzt statt mit einem entwertenden „aber".',
            'Ich habe auf eine reine Feature-Aufzählung verzichtet.',
          ],
        },
      ],
    },
  ],
}
