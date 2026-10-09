import type { Module } from '@/types/content'

export const listeningQuestioning: Module = {
  id: 'listening-questioning',
  title: 'Aktives Zuhören & Fragetechniken',
  description:
    'Wer gut zuhört und klug fragt, steuert Gespräche: Stufen des Zuhörens, Paraphrasieren, Fragetechniken vom Trichter bis zur zirkulären Frage.',
  category: 'communication',
  lessons: [
    {
      id: 'listening-active',
      title: 'Aktives Zuhören',
      theory: [
        {
          kind: 'text',
          body: 'Die meisten Menschen hören nicht zu, um zu verstehen – sie hören zu, um zu antworten. Während das Gegenüber noch spricht, formulieren wir innerlich schon unsere Erwiderung, suchen nach Gegenargumenten oder schweifen gedanklich zur nächsten Deadline ab. Das Ergebnis: Wir verpassen die Hälfte, interpretieren den Rest und wundern uns über Missverständnisse.\n\nAktives Zuhören – geprägt durch Carl Rogers – ist das Gegenprogramm: Du richtest deine volle Aufmerksamkeit auf das Gegenüber, prüfst dein Verständnis laut und gibst dem anderen das Gefühl, wirklich gehört zu werden. Das ist kein weiches „Nice-to-have", sondern ein Werkzeug mit messbarem Business-Nutzen: weniger Rückfragen, bessere Anforderungsklärung, schnellere Deeskalation in Konflikten.',
        },
        {
          kind: 'text',
          heading: 'Die drei Stufen des aktiven Zuhörens',
          body: 'Aktives Zuhören lässt sich in drei aufeinander aufbauende Stufen gliedern. Stufe 1 ist das aufmerksame Zuhören: Blickkontakt, zugewandte Haltung, kurze Bestätigungssignale („mhm", Nicken) – und vor allem: nicht unterbrechen, Handy weg, Laptop zu.\n\nStufe 2 ist das Paraphrasieren: Du gibst den Sachinhalt mit eigenen Worten wieder („Wenn ich dich richtig verstehe, geht es dir vor allem darum, dass der Termin unrealistisch ist?"). Das klingt simpel, hat aber doppelte Wirkung: Du prüfst dein Verständnis, und das Gegenüber kann sofort korrigieren.\n\nStufe 3 ist das Verbalisieren von Gefühlen: Du spiegelst die emotionale Ebene, die mitschwingt („Ich habe den Eindruck, das ärgert dich ziemlich."). Gerade in angespannten Situationen wirkt das oft wie ein Ventil – das Gegenüber fühlt sich ernst genommen und kann wieder sachlich werden.',
        },
        {
          kind: 'table',
          headers: ['Stufe', 'Technik', 'Beispielformulierung'],
          rows: [
            [
              '1 – Aufmerksam zuhören',
              'Zuwendung, Signale, nicht unterbrechen',
              '„Erzähl mal – ich höre zu."',
            ],
            [
              '2 – Paraphrasieren',
              'Sachinhalt mit eigenen Worten wiedergeben',
              '„Verstehe ich richtig: Das Budget reicht nur für eine der beiden Maßnahmen?"',
            ],
            [
              '3 – Gefühle verbalisieren',
              'Emotionale Ebene ansprechen',
              '„Das klingt, als wärst du von der Entscheidung ziemlich enttäuscht."',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Aktives Zuhören heißt: verstehen wollen, nicht antworten wollen.',
            'Drei Stufen: aufmerksam zuhören, Paraphrasieren (Sachinhalt), Verbalisieren (Gefühle).',
            'Paraphrasieren prüft Verständnis und gibt dem Gegenüber die Chance zur Korrektur.',
            'Gefühle verbalisieren deeskaliert – wer sich verstanden fühlt, kann wieder sachlich werden.',
            'Typische Fehler: unterbrechen, ungefragte Ratschläge, das Thema auf sich selbst ziehen.',
          ],
        },
        {
          kind: 'example',
          title: 'Ein Kollege berichtet frustriert von einem Kundentermin',
          good: '„Verstehe ich richtig: Der Kunde hat die Anforderungen mitten im Projekt geändert, und du sollst es trotzdem im alten Zeitplan schaffen? Das klingt richtig frustrierend. Was wäre aus deiner Sicht jetzt der nächste Schritt?"',
          bad: '„Ach, das kenne ich, mir ist letztes Jahr was viel Schlimmeres passiert – warte, das muss ich dir erzählen. Und übrigens: Du hättest das von Anfang an schriftlich festhalten müssen."',
        },
        {
          kind: 'text',
          heading: 'Typische Zuhör-Fehler',
          body: 'Die häufigsten Fehler wirken harmlos, zerstören aber genau das, was Zuhören leisten soll. Unterbrechen und Sätze zu Ende führen signalisiert: „Ich weiß schon, was du sagen willst." Ungefragte Ratschläge („Du musst einfach …") überspringen das Verstehen und degradieren das Gegenüber zum Empfänger von Belehrungen. Das Gespräch auf sich selbst ziehen („Das kenne ich, bei mir war das so …") macht aus Zuhören eine Bühne für den Zuhörer.\n\nAuch Scheinzuhören ist verbreitet: nicken, „mhm" sagen, nebenbei Mails checken. Das fliegt fast immer auf – spätestens bei der ersten Rückfrage. Und schließlich das vorschnelle Bewerten („Das siehst du falsch"): Wer sich beim Erzählen schon verurteilt fühlt, hört auf, offen zu sprechen. Die Faustregel: erst vollständig verstehen, dann – und nur wenn gewünscht – bewerten oder raten.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'listening-active-q1',
          question: 'Was unterscheidet Paraphrasieren (Stufe 2) vom Verbalisieren (Stufe 3)?',
          options: [
            {
              text: 'Paraphrasieren gibt den Sachinhalt mit eigenen Worten wieder, Verbalisieren spricht die mitschwingenden Gefühle an.',
              correct: true,
              explanation:
                'Genau: Stufe 2 arbeitet auf der Sachebene („Verstehe ich richtig, dass …?"), Stufe 3 auf der Gefühlsebene („Das scheint dich zu ärgern.").',
            },
            {
              text: 'Paraphrasieren ist die Wiederholung Wort für Wort, Verbalisieren ist die Zusammenfassung in eigenen Worten.',
              correct: false,
              explanation:
                'Wörtliches Wiederholen wirkt papageienhaft und ist keine der Stufen. Paraphrasieren heißt gerade: mit eigenen Worten den Sachinhalt wiedergeben.',
            },
            {
              text: 'Verbalisieren bedeutet, dem Gegenüber einen Lösungsvorschlag anzubieten, sobald man das Problem verstanden hat.',
              correct: false,
              explanation:
                'Nein – Verbalisieren spiegelt Gefühle, es löst nichts. Ungefragte Lösungsvorschläge sind sogar ein typischer Zuhör-Fehler.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'listening-active-q2',
          question:
            'Eine Kollegin schildert aufgebracht einen Konflikt mit ihrem Teamlead. Welche Reaktion entspricht aktivem Zuhören?',
          options: [
            {
              text: '„Ich höre raus, dass dich vor allem ärgert, dass die Entscheidung über deinen Kopf hinweg getroffen wurde – stimmt das?"',
              correct: true,
              explanation:
                'Richtig: Du verbalisierst das Gefühl (Ärger), benennst den vermuteten Kern und stellst dein Verständnis zur Prüfung – das Gegenüber kann bestätigen oder korrigieren.',
            },
            {
              text: '„Da würde ich an deiner Stelle sofort zum Abteilungsleiter gehen und das eskalieren."',
              correct: false,
              explanation:
                'Ein ungefragter Ratschlag überspringt das Verstehen. Erst zuhören und klären, was die Kollegin braucht – vielleicht will sie gar keine Eskalation, sondern erst mal sortieren.',
            },
            {
              text: '„Ach, Teamleads sind alle gleich. Bei meinem war das letztes Jahr genauso, pass auf, was da passiert ist …"',
              correct: false,
              explanation:
                'Damit ziehst du das Gespräch auf dich selbst – ein klassischer Zuhör-Fehler. Die Kollegin und ihr Anliegen verschwinden aus dem Fokus.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'listening-active-s1',
          situation:
            'Du bist mitten in einer wichtigen Analyse, als ein Kollege an deinen Platz kommt: „Hast du kurz Zeit? Das Gespräch mit dem Kunden eben lief richtig schlecht, ich muss das mal loswerden." Du merkst, dass er aufgewühlt ist – aber deine Analyse muss in zwei Stunden fertig sein.',
          choices: [
            {
              text: 'Laptop zuklappen oder ehrlich sein: „Ich will dir wirklich zuhören, aber ich muss bis 14 Uhr liefern. Passt es, wenn wir uns um 14:15 für eine halbe Stunde zusammensetzen?"',
              quality: 'best',
              feedback:
                'Sehr gut: Halbherziges Nebenbei-Zuhören würde beiden nicht helfen. Du nimmst sein Anliegen ernst, bist ehrlich über deine Lage und bietest einen verbindlichen Alternativtermin – das ist echtes Zuhören, nur zeitversetzt.',
            },
            {
              text: '„Klar, erzähl" – und du hörst mit einem Ohr zu, während du weitertippst und ab und zu „mhm" sagst.',
              quality: 'bad',
              feedback:
                'Scheinzuhören fliegt fast immer auf: Dein Kollege merkt, dass er dir gerade egal ist – das beschädigt die Beziehung mehr, als ein ehrliches „Jetzt gerade nicht" es je könnte. Und deine Analyse leidet auch.',
            },
            {
              text: '„Puh, schlechte Kundengespräche gehören dazu, das wird schon wieder. Kopf hoch!" – und du wendest dich wieder deinem Bildschirm zu.',
              quality: 'ok',
              feedback:
                'Immerhin ehrlich kurz – aber die Floskel bagatellisiert sein Anliegen, ohne dass er gehört wurde. Ohne Alternativangebot bleibt bei ihm hängen: „Mit dir kann ich nicht reden." Ein konkreter späterer Termin hätte wenig gekostet.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'listening-active-f1',
          task: 'Ein Teammitglied sagt zu dir: „Ich habe keine Lust mehr, in diesem Projekt immer alles zweimal zu machen. Erst heißt es so, dann wieder anders – und am Ende bin ich schuld." Formuliere eine Antwort nach aktivem Zuhören: eine Paraphrase des Sachinhalts UND eine Verbalisierung des Gefühls.',
          placeholder: 'Paraphrase (Sachinhalt): …\nVerbalisierung (Gefühl): …',
          sampleSolution:
            'Paraphrase: „Wenn ich dich richtig verstehe, ändern sich die Anforderungen im Projekt immer wieder, du musst Arbeit doppelt machen – und hinterher wird die Verantwortung bei dir abgeladen?"\nVerbalisierung: „Das klingt, als wärst du richtig frustriert und fühlst dich unfair behandelt. Habe ich das richtig wahrgenommen?"',
          checklist: [
            'Ich habe den Sachinhalt mit eigenen Worten wiedergegeben, nicht wörtlich wiederholt.',
            'Ich habe das vermutete Gefühl benannt (z.B. Frust, Ärger, Ohnmacht).',
            'Ich habe mein Verständnis als Frage formuliert, nicht als Feststellung.',
            'Ich habe keinen Ratschlag gegeben und das Thema nicht auf mich gezogen.',
          ],
        },
      ],
    },
    {
      id: 'listening-questions',
      title: 'Fragetechniken',
      theory: [
        {
          kind: 'text',
          body: 'Wer fragt, führt – dieser alte Vertriebssatz gilt für jedes Business-Gespräch. Mit Fragen steuerst du, worüber gesprochen wird, in welcher Tiefe und in welchem Ton. Gute Fragen öffnen Räume, bringen verdeckte Informationen ans Licht und lassen das Gegenüber selbst auf Lösungen kommen. Schlechte Fragen verhören, manipulieren oder würgen das Gespräch ab.\n\nDas wichtigste Handwerkszeug ist die Unterscheidung zwischen offenen und geschlossenen Fragen – und das Wissen, wann welche Form die richtige ist.',
        },
        {
          kind: 'text',
          heading: 'Offene und geschlossene Fragen',
          body: 'Offene Fragen beginnen mit einem W-Wort (Was, Wie, Welche, Wodurch, Wozu) und laden zu ausführlichen Antworten ein: „Wie ist der Termin aus deiner Sicht gelaufen?" Sie eignen sich zum Gesprächseinstieg, zur Bedarfsklärung und immer dann, wenn du Informationen gewinnen willst, die du noch nicht kennst. Vorsicht nur bei „Warum"-Fragen an Personen: „Warum hast du das so gemacht?" klingt schnell nach Rechtfertigungsdruck – „Was war der Grund für diese Entscheidung?" fragt dasselbe, ohne anzuklagen.\n\nGeschlossene Fragen lassen sich mit Ja oder Nein beantworten: „Schaffen wir den Termin am Freitag?" Sie verengen das Gespräch – und genau das ist manchmal gewollt: um Entscheidungen herbeizuführen, Vereinbarungen zu bestätigen oder Vielredner zu fokussieren. Als Einstiegsfrage sind sie dagegen Gift: Auf „Gibt es Probleme im Projekt?" folgt oft ein reflexhaftes „Nein" – und das Gespräch ist vorbei, bevor es begonnen hat.',
        },
        {
          kind: 'text',
          heading: 'Trichtertechnik und systemische Fragen',
          body: 'Die Trichtertechnik kombiniert beide Frageformen in einer bewährten Reihenfolge: Du startest breit mit offenen Fragen („Wie läuft die Zusammenarbeit mit dem Dienstleister?"), verengst dann mit konkretisierenden Fragen („Welche der Lieferungen war verspätet?") und schließt mit geschlossenen Fragen ab, die Ergebnisse festnageln („Sind wir uns einig, dass wir die Abnahmekriterien schriftlich festhalten?"). So sammelst du erst das ganze Bild und sicherst am Ende konkrete Vereinbarungen.\n\nSystemische Fragen stammen aus Coaching und Beratung und lohnen sich, wenn ein Gespräch festgefahren ist. Zirkuläre Fragen wechseln die Perspektive: „Was würde der Kunde sagen, wenn er unsere Diskussion hören könnte?" Hypothetische Fragen öffnen Denkräume: „Angenommen, das Budget wäre kein Thema – was würdest du dann vorschlagen?" Skalierungsfragen machen Diffuses greifbar: „Auf einer Skala von 1 bis 10 – wie zufrieden bist du mit dem Projektstand? Was müsste passieren, damit es ein Punkt mehr wird?"',
        },
        {
          kind: 'table',
          headers: ['Fragetyp', 'Zweck', 'Beispiel'],
          rows: [
            [
              'Offene Frage',
              'Informationen gewinnen, Gespräch öffnen',
              '„Wie siehst du den aktuellen Projektstand?"',
            ],
            [
              'Geschlossene Frage',
              'Entscheidung oder Bestätigung einholen',
              '„Können wir das so festhalten?"',
            ],
            [
              'Zirkuläre Frage',
              'Perspektivwechsel anstoßen',
              '„Wie würde das Support-Team diese Änderung bewerten?"',
            ],
            [
              'Hypothetische Frage',
              'Denkblockaden lösen',
              '„Angenommen, wir hätten doppelt so viel Zeit – was wäre anders?"',
            ],
            [
              'Skalierungsfrage',
              'Diffuses messbar machen',
              '„Von 1 bis 10: Wie sicher bist du, dass wir liefern können?"',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Offene Fragen (W-Fragen) öffnen Gespräche und liefern Informationen; geschlossene Fragen verengen und sichern Entscheidungen.',
            'Trichtertechnik: offen einsteigen, konkretisieren, mit geschlossenen Fragen Vereinbarungen festnageln.',
            'Systemische Fragen (zirkulär, hypothetisch, Skalierung) lösen festgefahrene Gespräche.',
            '„Warum"-Fragen an Personen vermeiden – „Was war der Grund …?" fragt dasselbe ohne Anklage.',
            'Suggestivfragen untergraben Vertrauen: Wer ehrliche Antworten will, fragt neutral.',
          ],
        },
        {
          kind: 'example',
          title: 'Bedarfsklärung mit einer internen Kundin',
          good: '„Was soll das neue Dashboard für euch leisten? … Welche drei Kennzahlen sind dabei am wichtigsten? … Verstehe. Können wir dann festhalten: Wir starten mit Umsatz, Marge und Forecast, der Rest kommt in Phase 2?"',
          bad: '„Du willst doch sicher auch, dass wir das schlanke Standard-Dashboard nehmen, oder? Das reicht doch völlig, da sind wir uns ja wohl einig."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'listening-questions-q1',
          question: 'Was beschreibt die Trichtertechnik?',
          options: [
            {
              text: 'Ein Gespräch mit offenen Fragen breit beginnen, dann konkretisieren und am Ende mit geschlossenen Fragen Vereinbarungen sichern.',
              correct: true,
              explanation:
                'Richtig: vom Breiten ins Enge – erst das ganze Bild sammeln, dann fokussieren, zuletzt Ergebnisse festnageln.',
            },
            {
              text: 'Möglichst viele Fragen in kurzer Zeit stellen, um das Gegenüber unter Druck zu setzen.',
              correct: false,
              explanation:
                'Das wäre ein Verhör, keine Technik. Die Trichtertechnik beschreibt die Reihenfolge der Frageformen, nicht ihr Tempo oder ihre Menge.',
            },
            {
              text: 'Mit geschlossenen Ja/Nein-Fragen einsteigen und das Gespräch dann mit offenen Fragen ausklingen lassen.',
              correct: false,
              explanation:
                'Genau umgekehrt: Geschlossene Fragen am Anfang würgen das Gespräch ab. Der Trichter startet offen und endet geschlossen.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'listening-questions-q2',
          question:
            'Warum sind Suggestivfragen wie „Da sind wir uns doch einig, oder?" im Business-Kontext problematisch?',
          options: [
            {
              text: 'Sie legen dem Gegenüber die Antwort in den Mund – man erfährt nicht die echte Meinung, und das Gegenüber fühlt sich manipuliert.',
              correct: true,
              explanation:
                'Genau: Kurzfristig erzeugen Suggestivfragen Schein-Zustimmung, langfristig kosten sie Vertrauen – und wichtige Einwände bleiben unausgesprochen, bis sie teuer werden.',
            },
            {
              text: 'Sie sind zu lang und kosten im Meeting unnötig Zeit.',
              correct: false,
              explanation:
                'Die Länge ist nicht das Problem – Suggestivfragen sind oft sogar kurz. Problematisch ist, dass sie die Antwort vorwegnehmen statt sie zu erfragen.',
            },
            {
              text: 'Sie sind nur in schriftlicher Kommunikation problematisch, mündlich kann das Gegenüber ja widersprechen.',
              correct: false,
              explanation:
                'Gerade mündlich wirkt der soziale Druck am stärksten: Vor anderen einer Suggestivfrage zu widersprechen kostet Überwindung – viele nicken lieber und tragen die Entscheidung innerlich nicht mit.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'listening-questions-s1',
          situation:
            'Du übernimmst ein laufendes Projekt und führst das Übergabegespräch mit dem bisherigen Projektleiter. Du vermutest, dass es verdeckte Probleme gibt – im Statusbericht steht aber überall Grün. Wie steigst du ins Gespräch ein?',
          choices: [
            {
              text: '„Wie läuft das Projekt aus deiner Sicht wirklich – was läuft gut, und wo würdest du als Erstes genauer hinschauen?"',
              quality: 'best',
              feedback:
                'Sehr gut: Zwei offene Fragen, die ausdrücklich auch nach Risiken fragen, ohne anzuklagen. So bekommst du das ehrlichste Bild – und kannst danach mit konkretisierenden Fragen in die Tiefe gehen (Trichtertechnik).',
            },
            {
              text: '„Gibt es irgendwelche Probleme, von denen ich wissen sollte?"',
              quality: 'ok',
              feedback:
                'Besser als gar nicht zu fragen – aber die geschlossene Frage lädt zum bequemen „Nein, eigentlich nicht" ein. Gerade bei heiklen Themen brauchst du offene Fragen, die das Erzählen leichter machen als das Abwiegeln.',
            },
            {
              text: '„Der Bericht ist ja überall grün – da ist doch sicher einiges geschönt, oder?"',
              quality: 'bad',
              feedback:
                'Eine Suggestivfrage mit eingebautem Vorwurf: Dein Gegenüber geht in die Verteidigung und macht dicht. Selbst wenn dein Verdacht stimmt – so erfährst du es garantiert nicht.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'listening-questions-f1',
          task: 'Dein Team diskutiert seit 20 Minuten ergebnislos, ob ein Release verschoben werden soll. Formuliere drei Fragen, um die Diskussion zu lösen: eine zirkuläre Frage, eine hypothetische Frage und eine Skalierungsfrage.',
          placeholder: 'Zirkulär: …\nHypothetisch: …\nSkalierung: …',
          sampleSolution:
            'Zirkulär: „Was würden unsere Key-Account-Kunden sagen, wenn sie zwischen einem pünktlichen Release mit bekannten Bugs und zwei Wochen Verzögerung wählen müssten?"\nHypothetisch: „Angenommen, der Termin stünde nicht im Vertrag – würden wir dann verschieben? Und was sagt uns das?"\nSkalierung: „Auf einer Skala von 1 bis 10: Wie sicher sind wir, dass die kritischen Bugs bis zum Termin behoben sind? Was genau fehlt uns auf eine 8?"',
          checklist: [
            'Ich habe eine zirkuläre Frage gestellt, die eine andere Perspektive einbezieht (Kunde, anderes Team, Chef).',
            'Ich habe eine hypothetische Frage formuliert („Angenommen …"), die eine Denkblockade löst.',
            'Ich habe eine Skalierungsfrage mit konkreter Skala und einer Nachfrage formuliert.',
            'Alle Fragen sind offen und neutral formuliert, ohne Suggestion oder versteckten Vorwurf.',
          ],
        },
      ],
    },
  ],
}
