import type { Module } from '@/types/content'

export const conflictCommunication: Module = {
  id: 'conflict-communication',
  title: 'Konfliktkommunikation',
  description:
    'Konflikte früh erkennen, deeskalieren und klärende Gespräche führen: von den Eskalationsstufen nach Glasl bis zum strukturierten Konfliktgespräch.',
  category: 'communication',
  lessons: [
    {
      id: 'conflict-escalation',
      title: 'Konfliktarten & Eskalationsstufen',
      theory: [
        {
          kind: 'text',
          body: 'Konflikte gehören zum Arbeitsalltag – überall dort, wo Menschen mit unterschiedlichen Zielen, Rollen und Bedürfnissen zusammenarbeiten, entstehen Reibungen. Das Problem ist selten der Konflikt selbst, sondern sein unbemerktes Wachsen: Aus einer kleinen Meinungsverschiedenheit über die Projektpriorität wird erst ein unterschwelliger Dauerstreit, dann ein offener Machtkampf zwischen zwei Abteilungen.\n\nWer Konflikte früh erkennt und einordnen kann, hat die besten Chancen, sie konstruktiv zu lösen. Dafür hilft zweierlei: zu wissen, um welche Art von Konflikt es geht – und zu erkennen, wie weit er bereits eskaliert ist.',
        },
        {
          kind: 'text',
          heading: 'Konfliktarten: Worum geht es wirklich?',
          body: 'Nicht jeder Konflikt ist gleich. Sachkonflikte drehen sich um unterschiedliche Einschätzungen in der Sache: Welches Tool nehmen wir, welcher Weg ist der schnellere? Zielkonflikte entstehen, wenn Beteiligte Unterschiedliches erreichen wollen – der Vertrieb will schnelle Zusagen, die Entwicklung will stabile Qualität. Verteilungskonflikte gehen um knappe Ressourcen: Budget, Personal, Zeit, das Eckbüro. Beziehungskonflikte spielen auf der persönlichen Ebene: Antipathie, verletzte Eitelkeit, fehlende Wertschätzung. Rollen- und Wertekonflikte schließlich entstehen aus unklaren Zuständigkeiten oder unvereinbaren Überzeugungen.\n\nDie Unterscheidung ist praktisch wichtig: Ein Sachkonflikt lässt sich mit Daten und Kriterien lösen. Ein Beziehungskonflikt nicht – da helfen keine weiteren Argumente, sondern nur ein Gespräch über die Zusammenarbeit selbst. Viele Konflikte tarnen sich außerdem: Was wie ein Sachstreit über ein Software-Tool aussieht, ist oft ein Beziehungs- oder Anerkennungskonflikt darunter.',
        },
        {
          kind: 'text',
          heading: 'Die Eskalationsstufen nach Glasl',
          body: 'Der Konfliktforscher Friedrich Glasl beschreibt Eskalation als Treppe mit neun Stufen, die abwärts führt – Konflikte ziehen die Beteiligten Stufe für Stufe nach unten, meist ohne dass es jemand bewusst entscheidet. Die neun Stufen gruppieren sich in drei Hauptphasen.\n\nPhase 1 (Win-win, Stufen 1–3): Verhärtung, Debatte und Polemik, Taten statt Worte. Die Standpunkte verhärten sich, man diskutiert mit harten Bandagen, schafft irgendwann Fakten ohne Absprache – aber eine Lösung, bei der beide gewinnen, ist noch möglich. Phase 2 (Win-lose, Stufen 4–6): Koalitionen und Images, Gesichtsverlust, Drohstrategien. Jetzt geht es ums Gewinnen: Man sucht Verbündete, stellt den anderen bloß, droht offen. Phase 3 (Lose-lose, Stufen 7–9): Begrenzte Vernichtungsschläge, Zersplitterung, gemeinsam in den Abgrund. Hier nimmt man eigenen Schaden in Kauf, solange der andere mehr verliert.\n\nDie zentrale Erkenntnis für die Praxis: Ab Phase 2 können die Beteiligten den Konflikt in der Regel nicht mehr allein lösen – es braucht eine dritte Partei. In Phase 3 hilft meist nur noch ein Machteingriff von oben.',
        },
        {
          kind: 'table',
          headers: ['Phase', 'Stufen nach Glasl', 'Kennzeichen', 'Lösung noch möglich durch'],
          rows: [
            [
              'Win-win (1–3)',
              'Verhärtung, Debatte, Taten statt Worte',
              'Standpunkte verhärten sich, man redet übereinander statt miteinander',
              'Die Beteiligten selbst – Gespräch, Moderation',
            ],
            [
              'Win-lose (4–6)',
              'Koalitionen, Gesichtsverlust, Drohstrategien',
              'Es geht ums Gewinnen; Verbündete werden gesucht, der andere wird bloßgestellt',
              'Externe Hilfe – Mediation, Prozessbegleitung',
            ],
            [
              'Lose-lose (7–9)',
              'Vernichtungsschläge, Zersplitterung, gemeinsam in den Abgrund',
              'Eigener Schaden wird in Kauf genommen, Hauptsache der andere verliert mehr',
              'Machteingriff – Führung, Trennung der Parteien',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Konfliktart klären: Sach-, Ziel-, Verteilungs-, Beziehungs- oder Rollenkonflikt – jede Art braucht einen anderen Lösungsweg.',
            'Glasl beschreibt 9 Eskalationsstufen in 3 Phasen: Win-win (1–3), Win-lose (4–6), Lose-lose (7–9).',
            'Eskalation ist eine Abwärtsbewegung, die niemand bewusst steuert – deshalb früh gegensteuern.',
            'Ab der Win-lose-Phase braucht es in der Regel eine dritte Partei; in der Lose-lose-Phase einen Machteingriff.',
            'Frühwarnzeichen ernst nehmen: Rückzug, Ironie, Dienst nach Vorschrift, Cliquenbildung.',
          ],
        },
        {
          kind: 'example',
          title: 'Frühwarnzeichen im Team deuten',
          good: 'Die Teamleiterin bemerkt, dass zwei Kollegen seit Wochen nur noch per E-Mail mit CC an sie kommunizieren und in Meetings spitze Bemerkungen fallen. Sie spricht beide einzeln an: „Mir fällt auf, dass die Stimmung zwischen euch angespannt wirkt. Was ist aus deiner Sicht los?" – und setzt dann ein moderiertes Gespräch an, solange der Konflikt noch in Phase 1 ist.',
          bad: 'Die Teamleiterin denkt: „Die sind halt beide etwas schwierig, das renkt sich wieder ein." Drei Monate später haben sich zwei Lager im Team gebildet, Informationen werden gezielt zurückgehalten, und ein Leistungsträger hat innerlich gekündigt.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'conflict-escalation-q1',
          question: 'Wie sind die neun Eskalationsstufen nach Glasl in Hauptphasen gegliedert?',
          options: [
            {
              text: 'In drei Phasen: Win-win (Stufen 1–3), Win-lose (Stufen 4–6) und Lose-lose (Stufen 7–9).',
              correct: true,
              explanation:
                'Richtig. In der ersten Phase ist noch eine Lösung zum Vorteil beider möglich, in der zweiten geht es ums Gewinnen auf Kosten des anderen, in der dritten nehmen beide Schaden.',
            },
            {
              text: 'In zwei Phasen: eine sachliche Phase und eine emotionale Phase.',
              correct: false,
              explanation:
                'Nein – Glasl unterscheidet drei Phasen mit je drei Stufen. Emotionen spielen übrigens auf allen Stufen eine Rolle, nicht erst ab einem bestimmten Punkt.',
            },
            {
              text: 'In neun unabhängige Konfliktarten, die parallel auftreten können.',
              correct: false,
              explanation:
                'Die neun Stufen sind keine Konfliktarten, sondern aufeinanderfolgende Grade der Eskalation – eine Abwärtstreppe, die ein Konflikt durchläuft.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'conflict-escalation-q2',
          question:
            'Zwei Abteilungsleiter suchen offen Verbündete im Haus, stellen sich gegenseitig vor der Geschäftsführung bloß und drohen mit Konsequenzen. Was folgt daraus nach Glasl?',
          options: [
            {
              text: 'Der Konflikt ist in der Win-lose-Phase (Stufen 4–6) – die Beteiligten können ihn allein kaum noch lösen, es braucht eine dritte Partei.',
              correct: true,
              explanation:
                'Genau. Koalitionenbildung, Gesichtsangriffe und Drohstrategien sind die Kennzeichen der Stufen 4–6. Ab hier ist professionelle Unterstützung – etwa Mediation – der realistische Weg.',
            },
            {
              text: 'Das ist noch die harmlose Debattenphase – ein klärendes Gespräch der beiden genügt.',
              correct: false,
              explanation:
                'Bloßstellung und Drohungen gehen weit über Stufe 2 (Debatte) hinaus. Ein unmoderiertes Zweiergespräch würde auf diesem Niveau eher weiter eskalieren.',
            },
            {
              text: 'Der Konflikt ist in der Lose-lose-Phase – jetzt hilft nur noch die Trennung der beiden.',
              correct: false,
              explanation:
                'Noch nicht: In der Lose-lose-Phase (7–9) nehmen die Beteiligten bewusst eigenen Schaden in Kauf. Hier geht es noch ums Gewinnen – das ist Phase 2, und dort kann Mediation noch viel erreichen.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'conflict-escalation-s1',
          situation:
            'In deinem Projektteam arbeiten Lena und Tobias seit einem strittigen Meeting kaum noch zusammen. Sie reden nicht mehr direkt miteinander, sondern nur über dich als Projektleitung, und Tobias hat zuletzt eine Entscheidung einfach allein getroffen, die eigentlich abgestimmt werden sollte. Du erkennst: Der Konflikt steht am Übergang von „Debatte" zu „Taten statt Worte".',
          choices: [
            {
              text: 'Du sprichst beide zeitnah einzeln an, hörst dir beide Sichtweisen an und setzt dann ein gemeinsames, von dir moderiertes Klärungsgespräch auf.',
              quality: 'best',
              feedback:
                'Sehr gut: In Phase 1 nach Glasl können die Beteiligten den Konflikt noch selbst lösen – eine neutrale Moderation erhöht die Chancen deutlich. Einzelgespräche vorab nehmen Druck raus und zeigen beiden, dass sie gehört werden.',
            },
            {
              text: 'Du trennst die Aufgaben so, dass sich die beiden möglichst nicht mehr begegnen müssen.',
              quality: 'ok',
              feedback:
                'Das reduziert kurzfristig die Reibung, löst den Konflikt aber nicht – er schwelt weiter und bricht beim nächsten Berührungspunkt wieder auf. Als Übergangsmaßnahme okay, aber ohne Klärungsgespräch verschiebst du das Problem nur.',
            },
            {
              text: 'Du wartest ab – erwachsene Menschen müssen so etwas unter sich regeln können.',
              quality: 'bad',
              feedback:
                'Riskant: Eskalation ist eine Abwärtstreppe, die von allein selten stoppt. „Taten statt Worte" ist die letzte Stufe, auf der die Beteiligten noch selbst lösungsfähig sind – wartest du, landest du in der Win-lose-Phase mit Lagerbildung im ganzen Team.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'conflict-escalation-f1',
          task: 'Denke an einen Konflikt aus deinem Arbeitsumfeld (oder ein realistisches Beispiel). Analysiere ihn schriftlich: Welche Konfliktart liegt vor (ggf. mehrere), auf welcher Glasl-Phase steht er, und woran machst du das fest? Nenne mindestens zwei konkrete Beobachtungen als Belege.',
          placeholder: 'Konfliktart: …\nGlasl-Phase: …\nBeobachtungen/Belege: …',
          sampleSolution:
            'Konfliktart: Vordergründig ein Sachkonflikt über die Urlaubsplanung, dahinter ein Verteilungskonflikt (wer bekommt die Ferienwochen) mit wachsendem Beziehungsanteil.\nGlasl-Phase: Win-win-Phase, Übergang von Stufe 1 (Verhärtung) zu Stufe 2 (Debatte).\nBeobachtungen: 1. Die beiden Kolleginnen wiederholen in jedem Teammeeting dieselben Standpunkte, ohne aufeinander einzugehen – Verhärtung. 2. Zuletzt fielen spitze Bemerkungen („Manche denken wohl nur an sich") – Beginn der Polemik. 3. Noch keine Koalitionenbildung: Beide suchen keine Verbündeten im Team.\nSchluss: Ein moderiertes Gespräch mit klaren Kriterien für die Urlaubsvergabe kann den Konflikt jetzt noch vollständig lösen.',
          checklist: [
            'Ich habe die Konfliktart benannt und zwischen vordergründigem Anlass und dahinterliegendem Konflikt unterschieden.',
            'Ich habe eine Glasl-Phase (und möglichst eine Stufe) zugeordnet.',
            'Ich habe mindestens zwei konkrete, beobachtbare Verhaltensweisen als Beleg genannt.',
            'Ich habe daraus abgeleitet, ob die Beteiligten den Konflikt noch allein lösen können.',
          ],
        },
      ],
    },
    {
      id: 'conflict-deescalation',
      title: 'Deeskalationstechniken',
      theory: [
        {
          kind: 'text',
          body: 'Wenn ein Gespräch zu kippen droht – lauter wird, persönlicher, verletzender –, entscheidet dein Verhalten in den nächsten Sekunden, ob es eskaliert oder sich beruhigt. Deeskalation ist kein Nachgeben und kein Harmoniezwang: Es geht darum, das Gespräch wieder auf ein Niveau zu bringen, auf dem eine Lösung überhaupt möglich ist.\n\nDie gute Nachricht: Deeskalation ist Handwerk. Es gibt erprobte Techniken, die du vorbereiten und üben kannst – damit du sie im entscheidenden Moment parat hast, wenn der Puls steigt.',
        },
        {
          kind: 'text',
          heading: 'Sachebene und Beziehungsebene trennen',
          body: 'Eskalierende Gespräche vermischen fast immer zwei Ebenen: den Streitpunkt in der Sache und die Verletzungen auf der Beziehungsebene. Solange beides durcheinanderläuft, dreht sich das Gespräch im Kreis – jedes Sachargument wird als persönlicher Angriff gehört und umgekehrt.\n\nDeeskalierend wirkt, wer die Ebenen aktiv auseinanderzieht: „In der Sache sehen wir das unterschiedlich – das ist okay. Aber mir ist wichtig, dass wir respektvoll miteinander reden." Oder: „Ich merke, da ist gerade mehr im Raum als die Terminfrage. Lass uns zuerst klären, was dich eigentlich ärgert." Damit signalisierst du: Die Person ist nicht das Problem, das Problem ist das Problem.\n\nHilfreich ist auch die Metakommunikation – das Sprechen über das Gespräch selbst: „Mir fällt auf, dass wir uns gerade gegenseitig unterbrechen. Können wir vereinbaren, dass jeder ausreden darf?" Das holt beide aus dem Schlagabtausch heraus auf eine Beobachterposition.',
        },
        {
          kind: 'text',
          heading: 'Aktives Zuhören und Gemeinsamkeiten betonen',
          body: 'Im Konflikt hört kaum jemand richtig zu – jeder nutzt die Redezeit des anderen, um das nächste Gegenargument vorzubereiten. Aktives Zuhören durchbricht dieses Muster: Du gibst mit eigenen Worten wieder, was du verstanden hast („Wenn ich dich richtig verstehe, ärgert dich vor allem, dass du erst aus der Mail davon erfahren hast?"), und benennst auch das Gefühl dahinter. Wichtig: Verstehen heißt nicht zustimmen. Du kannst die Wut eines Kollegen vollständig nachvollziehen und trotzdem in der Sache anderer Meinung bleiben. Aber erst wer sich verstanden fühlt, ist bereit, selbst wieder zuzuhören.\n\nEbenso wirksam: Gemeinsamkeiten betonen. In fast jedem Konflikt gibt es geteilte Interessen – beide wollen das Projekt zum Erfolg führen, beide wollen keine Nachtschichten, beide wollen den Kunden halten. Wer das ausspricht („Uns beiden geht es doch darum, dass die Abnahme klappt"), verschiebt das Bild von „ich gegen dich" zu „wir gegen das Problem".',
        },
        {
          kind: 'text',
          heading: 'Pausen, Vertagen und der Punkt für Dritte',
          body: 'Manchmal ist die beste Deeskalation eine Unterbrechung. Bei starker Erregung ist das rationale Denken physiologisch eingeschränkt – weiterzudiskutieren produziert dann nur Verletzungen, keine Lösungen. Eine Pause vorzuschlagen ist kein Rückzug, sondern Professionalität: „Ich merke, wir sind beide ziemlich geladen. Lass uns in einer halben Stunde weiterreden – ich will das wirklich klären, aber mit kühlem Kopf." Wichtig dabei: immer einen konkreten neuen Zeitpunkt nennen, sonst wirkt das Vertagen wie Ausweichen.\n\nUnd wann braucht es einen Dritten? Spätestens, wenn sich dieselben Streitmuster trotz mehrerer Klärungsversuche wiederholen, wenn das Vertrauen so beschädigt ist, dass jedes Wort negativ ausgelegt wird, oder wenn der Konflikt nach Glasl die Win-lose-Phase erreicht hat. Ein Dritter – die Führungskraft als Moderatorin, eine neutrale Kollegin oder eine ausgebildete Mediatorin – strukturiert das Gespräch, achtet auf Fairness und sorgt dafür, dass beide Seiten gehört werden. Einen Dritten hinzuzuziehen ist kein Scheitern, sondern oft die schnellste Lösung.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Ebenen trennen: erst die Beziehungsebene beruhigen, dann die Sache klären – nie beides vermischen.',
            'Aktiv zuhören und paraphrasieren: Verstehen heißt nicht zustimmen, aber es öffnet den anderen fürs Zuhören.',
            'Gemeinsamkeiten aussprechen: aus „ich gegen dich" wird „wir gegen das Problem".',
            'Bei starker Erregung Pause oder Vertagung vorschlagen – immer mit konkretem neuen Termin.',
            'Dritte hinzuziehen, wenn Klärungsversuche wiederholt scheitern oder der Konflikt die Win-lose-Phase erreicht.',
          ],
        },
        {
          kind: 'example',
          title: 'Ein Meeting kippt',
          good: '„Stopp, kurz – ich glaube, wir reden gerade auf zwei Ebenen. In der Sache sind wir uns näher, als es klingt: Wir wollen beide die Deadline halten. Mir scheint aber, du bist sauer, weil die Umplanung ohne dich entschieden wurde. Stimmt das? Dann lass uns das zuerst klären."',
          bad: '„Jetzt beruhig dich erst mal! Du bist ja völlig emotional – so kann man mit dir nicht vernünftig reden. Können wir jetzt bitte sachlich bleiben?"',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'conflict-deescalation-q1',
          question:
            'Warum ist aktives Zuhören im Konflikt deeskalierend, obwohl es den Streitpunkt nicht löst?',
          options: [
            {
              text: 'Wer sich verstanden fühlt, muss seinen Standpunkt nicht mehr mit steigender Lautstärke verteidigen – und wird selbst wieder aufnahmefähig für andere Sichtweisen.',
              correct: true,
              explanation:
                'Richtig. Eskalation lebt davon, dass sich beide ungehört fühlen und immer stärker senden. Paraphrasieren und Gefühle benennen unterbricht diese Spirale – ganz ohne inhaltliche Zugeständnisse.',
            },
            {
              text: 'Weil aktives Zuhören signalisiert, dass man dem anderen inhaltlich recht gibt, und der Streit sich damit erledigt.',
              correct: false,
              explanation:
                'Nein – das ist das häufigste Missverständnis. Verstehen heißt nicht zustimmen: Du kannst die Sicht des anderen korrekt wiedergeben und trotzdem in der Sache anderer Meinung bleiben.',
            },
            {
              text: 'Weil der andere sich dann ebenfalls verpflichtet fühlt zuzuhören und man schneller zur Abstimmung kommt.',
              correct: false,
              explanation:
                'Eine Verpflichtung entsteht nicht – und ums schnelle Abstimmen geht es bei Deeskalation gerade nicht. Der Effekt ist psychologisch: Gefühlte Anerkennung senkt die Erregung und macht Zuhören wieder möglich.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'conflict-deescalation-q2',
          question:
            'Wann ist es sinnvoll, einen Dritten (Moderation oder Mediation) in einen Konflikt zu holen?',
          options: [
            {
              text: 'Wenn wiederholte Klärungsversuche an denselben Mustern scheitern, das Vertrauen stark beschädigt ist oder der Konflikt die Win-lose-Phase erreicht hat.',
              correct: true,
              explanation:
                'Genau. Ab der Win-lose-Phase nach Glasl können die Beteiligten kaum noch allein herausfinden – ein neutraler Dritter strukturiert das Gespräch und sichert Fairness. Das ist Professionalität, kein Scheitern.',
            },
            {
              text: 'Erst als allerletztes Mittel, wenn bereits arbeitsrechtliche Schritte im Raum stehen – vorher wäre es ein Eingeständnis des Scheiterns.',
              correct: false,
              explanation:
                'Genau diese Haltung lässt Konflikte unnötig eskalieren. Je früher ein Dritter moderiert, desto höher die Erfolgschancen – und desto geringer der Schaden für alle Beteiligten.',
            },
            {
              text: 'Grundsätzlich bei jedem Konflikt sofort, damit kein Gespräch ohne neutrale Aufsicht stattfindet.',
              correct: false,
              explanation:
                'Das wäre überzogen: In der Win-win-Phase lösen die Beteiligten Konflikte am besten selbst – das stärkt auch die Beziehung. Ein Dritter ist das Mittel für festgefahrene oder weit eskalierte Konflikte.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'conflict-deescalation-s1',
          situation:
            'In der Budgetrunde wirft dir der Kollege aus dem Marketing plötzlich laut vor: „Ihr aus dem Produktteam blockiert doch sowieso alles, was von uns kommt! Letztes Jahr genauso!" Die anderen Teilnehmenden schauen betreten auf den Tisch. Du spürst, wie dein Ärger hochkocht.',
          choices: [
            {
              text: 'Du atmest durch und sagst: „Ich höre, dass da ein großer Frust aus dem letzten Jahr mitschwingt – das will ich ernst nehmen. Lass uns dazu heute Nachmittag zu zweit sprechen. Jetzt würde ich gern erst die Budgetfrage zu Ende bringen."',
              quality: 'best',
              feedback:
                'Stark: Du nimmst das Gefühl ernst, ohne dich zum Schlagabtausch provozieren zu lassen, trennst Beziehungsthema (Vier-Augen-Gespräch) von Sachthema (Budgetrunde) und nennst einen konkreten Zeitpunkt. So deeskalierst du vor Publikum, ohne das Thema wegzudrücken.',
            },
            {
              text: 'Du bleibst betont sachlich: „Das stimmt so nicht. Hier sind die Zahlen: Wir haben drei von vier Marketing-Anfragen im letzten Jahr unterstützt." – und legst die Auswertung auf den Tisch.',
              quality: 'ok',
              feedback:
                'Sachlich bleiben ist besser als zurückschießen – aber du antwortest auf der falschen Ebene. Der Vorwurf kam von der Beziehungsebene (sich blockiert fühlen), und Zahlen widerlegen kein Gefühl. Wahrscheinlich folgt die Antwort: „Typisch, ihr versteckt euch hinter Statistiken."',
            },
            {
              text: 'Du gibst zurück: „Ach, und das sagt ausgerechnet der, dessen Kampagnen regelmäßig das Budget sprengen? Kehr du mal vor deiner eigenen Tür."',
              quality: 'bad',
              feedback:
                'Damit nimmst du die Eskalationsstufe dankend an und legst noch eine drauf – vor versammelter Runde. Nach Glasl wäre das der direkte Weg Richtung Gesichtsangriffe: Aus einer Budgetdiskussion wird ein persönlicher Dauerkonflikt mit Zuschauern.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'conflict-deescalation-f1',
          task: 'Ein Kollege schreibt dir in einem eskalierenden Mail-Verlauf: „Es ist ja wohl offensichtlich, dass dein Team den Fehler verursacht hat. Ich erwarte, dass ihr das endlich zugebt!" Formuliere eine deeskalierende Antwort, die das Gespräch auf einen besseren Kanal und eine gemeinsame Lösung lenkt.',
          placeholder: 'Deine deeskalierende Antwort …',
          sampleSolution:
            '„Hallo Jonas,\nich merke an deiner Mail, wie sehr dich das Thema ärgert – und ich verstehe das: Der Ausfall hat euch mitten im Kampagnenstart getroffen.\nWer den Fehler verursacht hat, sehe ich nach aktuellem Stand noch nicht eindeutig – und ehrlich gesagt bringt uns die Schuldfrage per Mail gerade nicht weiter. Uns beiden geht es doch darum, dass so etwas nicht wieder passiert.\nMein Vorschlag: Lass uns morgen um 10 Uhr für 30 Minuten telefonieren und gemeinsam die Ursache durchgehen. Ich bringe unsere Logs mit, bring du gern eure Fehlermeldungen mit.\nViele Grüße"',
          checklist: [
            'Ich habe das Gefühl des anderen anerkannt, ohne mich zu rechtfertigen oder zurückzuschießen.',
            'Ich habe die Schuldfrage von der Lösungsfrage getrennt.',
            'Ich habe eine Gemeinsamkeit bzw. ein gemeinsames Interesse benannt.',
            'Ich habe einen Kanalwechsel (Telefon/Gespräch statt Mail) mit konkretem Termin vorgeschlagen.',
            'Ich habe auf Zuschreibungen wie „offensichtlich" oder „immer/nie" verzichtet.',
          ],
        },
      ],
    },
    {
      id: 'conflict-talk',
      title: 'Das Konfliktgespräch',
      theory: [
        {
          kind: 'text',
          body: 'Irgendwann hilft kein Ausweichen mehr: Der Konflikt muss auf den Tisch. Das Konfliktgespräch ist die Königsdisziplin der Konfliktkommunikation – und es scheitert selten am guten Willen, sondern fast immer an fehlender Vorbereitung und ungeschickter Gesprächsführung in den ersten Minuten.\n\nEin gutes Konfliktgespräch folgt einem klaren Ablauf: vorbereiten, Rahmen schaffen, Sichtweisen austauschen, Interessen verstehen, Lösungen entwickeln, Vereinbarungen treffen. Wer diese Struktur kennt, muss im Gespräch nicht improvisieren – und bleibt auch dann handlungsfähig, wenn es emotional wird.',
        },
        {
          kind: 'text',
          heading: 'Vorbereitung und Rahmen',
          body: 'Vor dem Gespräch klärst du für dich drei Fragen: Was genau stört mich – an welchem konkreten Verhalten, in welchen Situationen? Was ist mein Ziel – was soll nach dem Gespräch anders sein? Und: Was könnte die Sicht der anderen Seite sein – welche Gründe könnte ihr Verhalten haben? Diese dritte Frage ist die wichtigste: Sie verhindert, dass du mit einem fertigen Urteil ins Gespräch gehst.\n\nDann der Rahmen: Konfliktgespräche führst du unter vier Augen, nie zwischen Tür und Angel und nie vor Publikum. Plane ausreichend Zeit ohne Folgetermin ein und kündige das Thema fair an („Ich würde gern mit dir über unsere Zusammenarbeit im Projekt sprechen – passt dir morgen 14 Uhr?"). Ein Überfall ohne Vorwarnung erzeugt sofort Abwehr. Zum Einstieg benennst du Anlass und Absicht positiv: „Mir ist unsere Zusammenarbeit wichtig, und deshalb will ich etwas ansprechen, das mich seit ein paar Wochen beschäftigt."',
        },
        {
          kind: 'text',
          heading: 'Ich-Botschaften statt Vorwürfe',
          body: 'Der klassische Gesprächskiller ist die Du-Botschaft: „Du lieferst ständig zu spät zu!" Sie enthält ein Urteil über die Person, und Menschen verteidigen sich gegen Urteile – mit Gegenangriff oder Rechtfertigung. Die Ich-Botschaft beschreibt stattdessen dieselbe Situation aus deiner Perspektive, in drei Schritten: konkrete Beobachtung (ohne Wertung), Wirkung auf dich, dein Bedürfnis oder Wunsch.\n\nAus „Du lieferst ständig zu spät zu!" wird: „Mir ist aufgefallen, dass die Zahlen in den letzten drei Sprints jeweils erst nach dem vereinbarten Termin kamen. Das bringt mich in Bedrängnis, weil ich den Bericht dann unter Zeitdruck fertigstellen muss. Mir wäre wichtig, dass wir einen Weg finden, wie der Termin verlässlich hält."\n\nWichtig: Beobachtung heißt konkret und überprüfbar. „Ständig", „immer", „nie" sind keine Beobachtungen, sondern Verallgemeinerungen – und laden zum Widerspruch ein („Stimmt gar nicht, letzten Monat war ich pünktlich!"). Nenne stattdessen Zeitpunkte und Beispiele.',
        },
        {
          kind: 'text',
          heading: 'Interessen erfragen und Vereinbarungen treffen',
          body: 'Nach deiner Ich-Botschaft kommt der entscheidende Richtungswechsel: vom Senden zum Fragen. Hinter jeder Position („Ich kann nicht früher liefern") stehen Interessen und Gründe („Ich bekomme die Rohdaten selbst erst am Montag"). Die erfragst du offen und ohne Unterton: „Wie erlebst du das?", „Was macht den Termin für dich schwierig?", „Was bräuchtest du, damit es klappt?" Oft zeigt sich hier, dass das Problem ganz woanders liegt als vermutet – und damit auch die Lösung.\n\nAm Ende steht die Vereinbarung – und zwar konkret: Wer macht was bis wann? „Wir gehen ab jetzt besser miteinander um" ist keine Vereinbarung, sondern ein frommer Wunsch. Besser: „Du gibst mir Bescheid, sobald absehbar ist, dass die Rohdaten später kommen – spätestens am Donnerstag. Ich verschiebe im Gegenzug meine Deadline für den Bericht auf Mittwoch." Vereinbart außerdem einen Termin zum Nachfassen: „Lass uns in vier Wochen kurz draufschauen, ob es für uns beide funktioniert." Das macht die Vereinbarung verbindlich und gibt euch einen legitimen Anlass, nachzusteuern.',
        },
        {
          kind: 'table',
          headers: ['Gesprächsphase', 'Ziel', 'Typische Formulierung'],
          rows: [
            [
              'Einstieg & Rahmen',
              'Sicherheit und Gesprächsbereitschaft schaffen',
              '„Mir ist unsere Zusammenarbeit wichtig, deshalb möchte ich etwas ansprechen."',
            ],
            [
              'Sichtweise schildern',
              'Eigene Wahrnehmung ohne Vorwurf vermitteln',
              '„Mir ist aufgefallen, dass … Das löst bei mir … aus."',
            ],
            [
              'Sichtweise erfragen',
              'Interessen und Gründe der anderen Seite verstehen',
              '„Wie erlebst du die Situation? Was macht es für dich schwierig?"',
            ],
            [
              'Lösung entwickeln',
              'Gemeinsam Optionen sammeln statt Positionen verteidigen',
              '„Was müsste passieren, damit es für uns beide funktioniert?"',
            ],
            [
              'Vereinbarung & Nachfassen',
              'Verbindlichkeit herstellen',
              '„Halten wir fest: Du machst … bis …, ich … In vier Wochen schauen wir drauf."',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Vorbereitung: konkretes Verhalten, eigenes Ziel und die mögliche Sicht der Gegenseite vorab klären.',
            'Rahmen: unter vier Augen, mit genug Zeit, fair angekündigt – nie zwischen Tür und Angel.',
            'Ich-Botschaften in drei Schritten: Beobachtung ohne Wertung, Wirkung auf mich, Wunsch.',
            '„Immer", „nie" und „ständig" streichen – konkrete Beispiele nennen.',
            'Interessen hinter Positionen erfragen: „Was macht es für dich schwierig? Was bräuchtest du?"',
            'Vereinbarungen konkret machen (wer, was, bis wann) und einen Termin zum Nachfassen setzen.',
          ],
        },
        {
          kind: 'example',
          title: 'Zuarbeit kommt wiederholt zu spät',
          good: '„Danke, dass du dir Zeit nimmst. Mir ist aufgefallen, dass die Reportings in den letzten drei Monaten jeweils zwei, drei Tage nach dem vereinbarten Termin kamen. Mich stresst das, weil ich dann meine Präsentation für die Geschäftsführung in letzter Minute bauen muss. Wie sieht es aus deiner Sicht aus – was macht den Termin schwierig?"',
          bad: '„Sag mal, merkst du eigentlich noch was? Ständig kommst du zu spät mit deinen Zahlen – wegen dir stehe ich jedes Mal blöd da. Das hört jetzt auf, klar?"',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'conflict-talk-q1',
          question: 'Aus welchen drei Bausteinen besteht eine vollständige Ich-Botschaft?',
          options: [
            {
              text: 'Konkrete Beobachtung ohne Wertung, Wirkung auf mich, Bedürfnis oder Wunsch.',
              correct: true,
              explanation:
                'Richtig. Dieser Dreischritt beschreibt die Situation, ohne die Person anzugreifen – und senkt damit die Wahrscheinlichkeit, dass der andere in Verteidigung oder Gegenangriff geht.',
            },
            {
              text: 'Lob zum Einstieg, Kritik in der Mitte, Lob zum Abschluss.',
              correct: false,
              explanation:
                'Das beschreibt die sogenannte Sandwich-Technik – eine umstrittene Feedback-Methode, kein Baustein der Ich-Botschaft. Sie verwässert zudem oft die eigentliche Botschaft.',
            },
            {
              text: 'Vorwurf, Begründung und Lösungsvorschlag.',
              correct: false,
              explanation:
                'Ein Vorwurf ist das genaue Gegenteil der Ich-Botschaft: Er bewertet die Person und provoziert Abwehr. Die Ich-Botschaft beschreibt stattdessen Beobachtung, Wirkung und Wunsch.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'conflict-talk-q2',
          question:
            'Warum solltest du im Konfliktgespräch nach den Interessen hinter der Position des anderen fragen?',
          options: [
            {
              text: 'Weil Positionen oft unvereinbar wirken, während die dahinterliegenden Interessen häufig Spielraum für Lösungen eröffnen, die beiden gerecht werden.',
              correct: true,
              explanation:
                'Genau. „Ich kann nicht früher liefern" klingt wie eine Wand – das Interesse dahinter („Ich bekomme die Rohdaten selbst erst montags") öffnet sofort Lösungswege, etwa die Rohdaten früher zu beschaffen oder den Berichtstermin zu verschieben.',
            },
            {
              text: 'Weil man mit dem Wissen über die Interessen des anderen dessen Schwachstellen kennt und die eigene Position besser durchsetzen kann.',
              correct: false,
              explanation:
                'Mit dieser Haltung wird aus dem Klärungsgespräch ein Machtspiel – und der andere merkt das schnell. Ziel ist eine Lösung, die für beide trägt, nicht ein Sieg.',
            },
            {
              text: 'Weil das Gespräch dadurch länger dauert und der andere sich ernster genommen fühlt.',
              correct: false,
              explanation:
                'Ernst genommen fühlen ist ein netter Nebeneffekt, aber nicht der Kern – und Gesprächslänge ist kein Wert an sich. Der eigentliche Nutzen: Interessen eröffnen Lösungsräume, die auf Positionsebene unsichtbar bleiben.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'conflict-talk-s1',
          situation:
            'Deine Kollegin Sara unterbricht dich in Meetings regelmäßig und präsentiert deine gemeinsamen Arbeitsergebnisse, als wären es ihre eigenen. Nach dem heutigen Meeting bist du richtig wütend und triffst sie zufällig an der Kaffeemaschine – drei andere Kollegen stehen daneben.',
          choices: [
            {
              text: 'Du sprichst sie kurz neutral an: „Sara, ich würde gern etwas mit dir besprechen – hast du morgen Vormittag eine halbe Stunde?" und bereitest dich am Abend mit konkreten Beispielen vor.',
              quality: 'best',
              feedback:
                'Genau richtig: Du wählst den passenden Rahmen (unter vier Augen, angekündigt, nicht im Affekt) und verschaffst dir Zeit, Beobachtungen zu sammeln und deine Wut abkühlen zu lassen. So startet das Gespräch mit Klarheit statt mit einer Explosion.',
            },
            {
              text: 'Du wartest, bis die Kollegen weg sind, und sprichst sie sofort an der Kaffeemaschine an – das Eisen schmieden, solange es heiß ist.',
              quality: 'ok',
              feedback:
                'Immerhin ohne Publikum – aber du gehst wütend und unvorbereitet ins Gespräch, zwischen Tür und Angel und ohne dass Sara sich darauf einstellen konnte. Die Gefahr ist groß, dass dir Du-Botschaften herausrutschen und sie überrumpelt in Abwehr geht.',
            },
            {
              text: 'Du sagst vor den Kollegen mit einem Lächeln: „Na, Sara, heute mal wieder fleißig fremde Ergebnisse präsentiert?"',
              quality: 'bad',
              feedback:
                'Ein sarkastischer Angriff vor Publikum ist ein Gesichtsangriff – das Gegenteil eines Konfliktgesprächs. Sara wird sich öffentlich verteidigen müssen, die Fronten verhärten sich, und dein berechtigtes Anliegen geht im Schlagabtausch unter.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'conflict-talk-f1',
          task: 'Formuliere den folgenden Vorwurf in eine vollständige Ich-Botschaft um (Beobachtung – Wirkung – Wunsch): „Du ziehst in unseren Meetings immer alles an dich und lässt andere nie ausreden!"',
          placeholder: 'Beobachtung: …\nWirkung: …\nWunsch: …',
          sampleSolution:
            'Beobachtung: „Mir ist in den letzten beiden Teammeetings aufgefallen, dass ich bei meinen Punkten zur Roadmap jeweils unterbrochen wurde, bevor ich fertig war – am Dienstag gleich zweimal."\nWirkung: „Mich frustriert das, weil ich meine Argumente dann nicht zu Ende bringen kann und danach das Gefühl habe, mein Punkt sei untergegangen."\nWunsch: „Mir wäre wichtig, dass wir uns gegenseitig ausreden lassen – gern auch mit einer kurzen Notiz, wenn dir währenddessen etwas einfällt. Wie siehst du das?"',
          checklist: [
            'Ich habe eine konkrete, überprüfbare Beobachtung formuliert (mit Situation/Zeitpunkt, ohne „immer" oder „nie").',
            'Ich habe die Wirkung auf mich beschrieben (Gefühl oder Konsequenz), ohne den anderen zu bewerten.',
            'Ich habe einen konkreten Wunsch für die Zukunft formuliert.',
            'Ich habe mit einer offenen Frage den Dialog geöffnet, statt mit einer Forderung zu schließen.',
          ],
        },
      ],
    },
  ],
}
