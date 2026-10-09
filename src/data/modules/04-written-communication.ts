import type { Module } from '@/types/content'

export const writtenCommunication: Module = {
  id: 'written-communication',
  title: 'Schriftliche Business-Kommunikation',
  description:
    'E-Mails, die gelesen und beantwortet werden, klare Texte ohne Beamtendeutsch und souveräne Chat-Etikette: Schreiben, das im Büroalltag wirkt.',
  category: 'communication',
  lessons: [
    {
      id: 'written-emails',
      title: 'Professionelle E-Mails',
      theory: [
        {
          kind: 'text',
          body: 'Führungskräfte und Fachleute erhalten täglich Dutzende E-Mails – und überfliegen die meisten in wenigen Sekunden. Deine Mail konkurriert also nicht mit anderen Texten, sondern mit der Löschtaste. Wer gelesen und beantwortet werden will, schreibt deshalb nicht „eine Mail", sondern gestaltet sie: vom Betreff über die Struktur bis zur klaren Handlungsaufforderung.\n\nDie gute Nachricht: Professionelle E-Mails folgen wenigen Handwerksregeln, die sich sofort anwenden lassen – und die dich spürbar von der Masse abheben.',
        },
        {
          kind: 'text',
          heading: 'Betreff und Struktur: In Sekunden erfassbar',
          body: 'Der Betreff ist die wichtigste Zeile der ganzen Mail: Er entscheidet, ob und wann sie geöffnet wird – und er muss die Mail auch Wochen später in der Suche wiederfindbar machen. Gute Betreffs nennen Thema plus erwartete Aktion, gern mit Frist: „Angebot Berger: Freigabe bis Do 12 Uhr erbeten" statt „Kurze Frage" oder „WG: WG: AW: Meeting".\n\nIm Text gilt: das Wichtigste zuerst. Kernbotschaft und gewünschte Aktion gehören in die ersten zwei Sätze, nicht ans Ende eines Fließtext-Blocks. Danach folgen Details – gegliedert in kurze Absätze oder Aufzählungen, sodass die Mail auch beim Überfliegen funktioniert. Und: ein Thema pro Mail. Wer drei Anliegen in eine Mail packt, bekommt typischerweise eine Antwort auf das erste – die anderen beiden gehen unter. Drei Themen heißen drei Mails (oder ein Gespräch).',
        },
        {
          kind: 'text',
          heading: 'CC-Disziplin und Call-to-Action',
          body: 'Die Empfängerzeilen sind eine Botschaft für sich: An steht für „Ich erwarte etwas von dir", CC für „Nur zur Information, keine Aktion nötig". Wer das mischt, erzeugt Verantwortungsdiffusion – fünf Leute in An, und niemand fühlt sich zuständig. CC-Disziplin heißt: so wenige Empfänger wie möglich, und vor jedem CC die Frage: Braucht diese Person diese Information wirklich? Besondere Vorsicht bei „Antwort an alle" und beim CC an Vorgesetzte – Letzteres wird schnell als Eskalation oder Absicherung gelesen und vergiftet die Zusammenarbeit.\n\nJede Mail, die etwas erreichen soll, endet mit einem klaren Call-to-Action: Wer soll was bis wann tun? „Bitte gib mir bis Mittwoch, 12 Uhr, deine Freigabe für Variante A oder B" ist ein Call-to-Action. „Es wäre schön, wenn wir da irgendwie mal weiterkommen" ist keiner. Wenn du von mehreren Personen etwas brauchst, adressiere sie namentlich: „@Anna: Zahlen bis Di, @Murat: Review bis Mi."',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Betreff = Thema + erwartete Aktion (+ Frist): macht die Mail öffnenswert und wiederfindbar.',
            'Kernbotschaft in die ersten zwei Sätze – Details danach, gegliedert und überfliegbar.',
            'Ein Thema pro Mail: Mehrere Anliegen gehen in Sammel-Mails verloren.',
            'An = Aktion erwartet, CC = nur Information. So wenige Empfänger wie möglich.',
            'Jede Mail endet mit einem klaren Call-to-Action: Wer tut was bis wann?',
          ],
        },
        {
          kind: 'example',
          title: 'Bitte um Freigabe an die Teamleiterin',
          good: 'Betreff: „Kundenpräsentation Novak: Freigabe bis Mi 16 Uhr"\n\n„Hallo Sandra, ich brauche deine Freigabe für die angehängte Präsentation bis Mittwoch, 16 Uhr – Donnerstag früh ist der Termin. Geändert habe ich: neue Preisstruktur (Folie 4) und aktualisierte Referenzen (Folie 9). Wenn ich bis Mittwoch nichts höre, gehe ich von Freigabe aus. Danke dir!"',
          bad: 'Betreff: „Mal drüberschauen?"\n\n„Hi Sandra, anbei mal der aktuelle Stand der Präsi, da ist noch einiges im Fluss, aber vielleicht magst du ja bei Gelegenheit mal reinschauen. Ach ja, und wegen des Budgets für Q3 müssten wir auch nochmal reden, und war da nicht noch was mit dem Teamevent?"',
        },
        {
          kind: 'table',
          headers: ['Element', 'Schwach', 'Stark'],
          rows: [
            ['Betreff', '„Kurze Frage"', '„Onboarding Müller: Laptop-Bestellung bis Fr nötig"'],
            ['Einstieg', 'Drei Absätze Vorgeschichte', 'Kernbotschaft und Bitte in Satz 1–2'],
            [
              'Empfänger',
              'Halbe Abteilung in An und CC',
              'Eine verantwortliche Person in An, Minimal-CC',
            ],
            [
              'Schluss',
              '„Wäre gut, wenn sich da was tut."',
              '„Bitte Rückmeldung bis Di, 10 Uhr: Variante A oder B?"',
            ],
          ],
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'written-emails-q1',
          question: 'Warum gilt die Regel „ein Thema pro Mail"?',
          options: [
            {
              text: 'Mails mit mehreren Anliegen werden typischerweise nur zum ersten Punkt beantwortet – die übrigen Themen gehen unter und müssen nachgefasst werden.',
              correct: true,
              explanation:
                'Genau: Der Empfänger antwortet auf das, was ihm zuerst ins Auge fällt oder am leichtesten fällt. Getrennte Mails lassen sich außerdem einzeln beantworten, weiterleiten und abhaken.',
            },
            {
              text: 'Mail-Server können lange Mails mit mehreren Themen technisch nicht zuverlässig zustellen.',
              correct: false,
              explanation:
                'Technisch ist das kein Problem – die Regel ist eine Kommunikationsregel: Es geht um Antwortbarkeit und darum, dass kein Anliegen verloren geht.',
            },
            {
              text: 'Aus rechtlichen Gründen darf eine geschäftliche E-Mail nur ein Thema enthalten.',
              correct: false,
              explanation:
                'Eine solche Rechtsvorschrift gibt es nicht. Die Regel dient allein der Wirksamkeit: Ein Anliegen pro Mail wird beantwortet, drei Anliegen werden vergessen.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'written-emails-q2',
          question:
            'Was signalisiert das CC-Feld richtig eingesetzt – und was ist die größte CC-Falle?',
          options: [
            {
              text: 'CC heißt „nur zur Information, keine Aktion erwartet" – die Falle ist das reflexhafte Mit-CCen von Vorgesetzten, das als Eskalation oder Absicherung gelesen wird.',
              correct: true,
              explanation:
                'Richtig: An und CC sind eine klare Rollenverteilung. Ein unnötiges Chef-CC verändert den Ton der ganzen Mail – der eigentliche Empfänger liest es als Misstrauen oder Druckmittel.',
            },
            {
              text: 'CC heißt, dass die Mail besonders dringend ist und bevorzugt beantwortet werden soll.',
              correct: false,
              explanation:
                'Dringlichkeit gehört in Betreff und Text (mit konkreter Frist) – das CC-Feld sagt nur: Diese Person liest mit, muss aber nichts tun.',
            },
            {
              text: 'CC sollte man grundsätzlich großzügig nutzen, damit alle immer über alles informiert sind.',
              correct: false,
              explanation:
                'Großzügiges CC erzeugt genau das Gegenteil von Information: volle Postfächer, Verantwortungsdiffusion und Empfänger, die Mails von dir gar nicht mehr richtig lesen.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'written-emails-s1',
          situation:
            'Du brauchst vom Kollegen Jonas dringend Zahlen für deinen Quartalsbericht. Vor einer Woche hast du ihn per Mail darum gebeten – keine Reaktion. Vor drei Tagen hast du freundlich erinnert – wieder nichts. Der Bericht ist übermorgen fällig.',
          choices: [
            {
              text: 'Zum Hörer greifen oder vorbeigehen: „Jonas, ich brauche die Q3-Zahlen bis morgen 12 Uhr für den Vorstandsbericht – was brauchst du, damit das klappt?"',
              quality: 'best',
              feedback:
                'Sehr gut: Nach zwei erfolglosen Mails ist der Kanal das Problem, nicht die Formulierung. Das direkte Gespräch klärt in zwei Minuten, woran es hängt – vielleicht hat Jonas einen guten Grund, den dir keine dritte Mail verraten hätte. Das Ergebnis kannst du danach kurz per Mail festhalten.',
            },
            {
              text: 'Eine dritte Mail schreiben, diesmal mit dem Abteilungsleiter in CC, damit Jonas den Ernst der Lage begreift.',
              quality: 'bad',
              feedback:
                'Das Chef-CC ist eine öffentliche Eskalation, bevor du überhaupt weißt, warum Jonas nicht antwortet – vielleicht ist er krank oder wartet selbst auf Zahlen. Du bekommst deine Daten vielleicht, aber die Zusammenarbeit mit Jonas ist beschädigt. Eskalation ist das letzte Mittel, nicht das dritte.',
            },
            {
              text: 'Eine dritte, deutlich knappere Mail mit hoher Priorität und Frist senden: „Deadline übermorgen – brauche die Zahlen bis morgen 12 Uhr."',
              quality: 'ok',
              feedback:
                'Immerhin klar und mit Frist – aber zweimal hat der Kanal Mail schon versagt, warum sollte es beim dritten Mal klappen? Bei Dringlichkeit und ausbleibender Reaktion ist der Kanalwechsel (Anruf, Chat, persönlich) fast immer schneller und konfliktärmer.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'written-emails-f1',
          task: 'Schreibe diese Mail professionell um – mit aussagekräftigem Betreff, Kernbotschaft zuerst und klarem Call-to-Action:\n\nBetreff: „Hallo"\n„Hi zusammen, ich wollte mal fragen, wie wir das jetzt mit dem Workshop machen. Da gab es ja verschiedene Meinungen zum Termin und auch zur Frage, ob extern oder bei uns im Haus. Wäre gut, wenn wir da mal zu Potte kommen. Viele Grüße"',
          placeholder: 'Betreff: …\n\nText: …',
          sampleSolution:
            'Betreff: „Team-Workshop: Abstimmung Termin + Ort bis Fr 12 Uhr"\n\n„Hallo zusammen,\n\nich möchte den Team-Workshop diese Woche festzurren. Bitte stimmt bis Freitag, 12 Uhr, über diese zwei Punkte ab:\n\n1. Termin: 14./15. November oder 21./22. November?\n2. Ort: extern (Tagungshotel, ca. 1.800 Euro) oder bei uns im Haus (kostenlos, aber mit Unterbrechungsrisiko)?\n\nAntwortet mir kurz mit eurer Präferenz zu beiden Punkten. Bei Stimmengleichheit entscheide ich am Freitagnachmittag, damit wir buchen können.\n\nViele Grüße"',
          checklist: [
            'Mein Betreff nennt Thema und erwartete Aktion, idealerweise mit Frist.',
            'Die Kernbotschaft und die Bitte stehen in den ersten zwei Sätzen.',
            'Ich habe die Entscheidungspunkte klar strukturiert (Aufzählung, konkrete Optionen).',
            'Mein Call-to-Action sagt, wer was bis wann tun soll.',
            'Ich habe geregelt, was passiert, wenn keine (einheitliche) Antwort kommt.',
          ],
        },
      ],
    },
    {
      id: 'written-tone',
      title: 'Ton & Klarheit',
      theory: [
        {
          kind: 'text',
          body: 'Geschriebene Worte kommen ohne Tonfall, Mimik und die Möglichkeit zur sofortigen Rückfrage beim Empfänger an. Was mündlich freundlich-ironisch gemeint war, liest sich schriftlich schnell kalt oder schnippisch – Psychologen sprechen von einer systematischen Negativ-Verzerrung: Neutrale Texte werden tendenziell negativer gelesen als gemeint. Wer schreibt, muss den fehlenden Tonfall deshalb durch Wortwahl ersetzen.\n\nDazu kommt die Klarheit: Verschachtelte Sätze, Passivkonstruktionen und Substantivierungen („die Durchführung der Überprüfung der Unterlagen erfolgt …") sind die Erbkrankheit deutscher Bürotexte. Sie kosten den Leser Zeit und dich Wirkung.',
        },
        {
          kind: 'text',
          heading: 'Positiv formulieren, aktiv schreiben',
          body: 'Positive Formulierung heißt: sagen, was geht, statt was nicht geht. „Das Dokument liegt Ihnen am Montag vor" statt „Vor Montag kann ich Ihnen das nicht schicken" – derselbe Sachverhalt, völlig andere Wirkung. Das ist keine Schönfärberei: Die Information bleibt identisch, aber der Leser erhält eine Zusage statt einer Abfuhr. Besonders in Kundenkommunikation und bei Absagen macht das den Unterschied zwischen „schwierig" und „lösungsorientiert".\n\nAktiv statt Passiv heißt: Der Satz hat einen Handelnden. „Wir prüfen Ihre Reklamation bis Freitag" statt „Die Reklamation wird geprüft". Das Passiv versteckt, wer verantwortlich ist – manchmal gewollt, meist aber nur Gewohnheit. Aktive Sätze sind kürzer, klarer und verbindlicher. Gleiches gilt für Substantivierungen: „Wir entscheiden nächste Woche" schlägt „Die Entscheidungsfindung erfolgt in der kommenden Woche" um Längen.',
        },
        {
          kind: 'text',
          heading: 'Länge und Empfängerperspektive',
          body: 'Für die Länge gilt die Faustregel: so kurz wie möglich, so lang wie nötig. Hauptsachen in Hauptsätze, ein Gedanke pro Satz, Sätze im Schnitt unter 15 bis 20 Wörtern. Lange Texte signalisieren nicht Gründlichkeit, sondern mangelnde Rücksicht auf die Zeit des Lesers – „Entschuldige den langen Brief, ich hatte keine Zeit für einen kurzen" bringt es auf den Punkt: Kürzen ist Arbeit, die der Schreiber dem Leser abnimmt.\n\nDie Empfängerperspektive ist der Lackmustest für jeden Text: Lies deine Mail vor dem Absenden einmal mit den Augen des Empfängers. Versteht er ohne dein Hintergrundwissen, worum es geht? Sind Abkürzungen und interne Projektnamen für ihn lesbar? Steht das für IHN Relevante vorn – oder das, was DIR am wichtigsten erscheint? Ein einfacher Trick: Formuliere Nutzen statt Merkmal. Nicht „Wir haben das neue Template fertiggestellt", sondern „Ab sofort spart euch das neue Template den manuellen Versionsabgleich."',
        },
        {
          kind: 'table',
          headers: ['Bürodeutsch', 'Klar und aktiv'],
          rows: [
            [
              '„Die Bearbeitung Ihrer Anfrage erfolgt schnellstmöglich."',
              '„Wir antworten Ihnen bis Donnerstag."',
            ],
            [
              '„Eine Teilnahme ist leider nicht möglich."',
              '„Ich bin am 12.11. wieder dabei – heute vertritt mich Frau Yilmaz."',
            ],
            [
              '„Es wurde festgestellt, dass Fehler aufgetreten sind."',
              '„Uns ist beim Import ein Fehler unterlaufen – wir korrigieren ihn bis 15 Uhr."',
            ],
            [
              '„Zwecks Terminfindung bitten wir um Rückmeldung."',
              '„Passt dir Dienstag 10 Uhr oder Mittwoch 14 Uhr?"',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Schrift hat keinen Tonfall – neutrale Texte werden negativer gelesen als gemeint. Freundlichkeit muss in die Wortwahl.',
            'Positiv formulieren: sagen, was geht und bis wann – nicht, was nicht geht.',
            'Aktiv statt Passiv: Sätze mit Handelndem sind kürzer, klarer und verbindlicher.',
            'So kurz wie möglich: ein Gedanke pro Satz, Kürzen ist Service am Leser.',
            'Empfängerperspektive: Vor dem Senden einmal mit den Augen des Lesers lesen – versteht er es ohne mein Vorwissen?',
          ],
        },
        {
          kind: 'example',
          title: 'Antwort auf eine Kundenanfrage, die nicht sofort lösbar ist',
          good: '„Danke für Ihre Nachricht! Ihre Frage zur Schnittstellenkonfiguration kläre ich mit unserem Entwicklungsteam – Sie erhalten bis Mittwoch, 12 Uhr, eine konkrete Antwort von mir. Falls es vorher brennt: Sie erreichen mich unter der 030/1234-56."',
          bad: '„Ihre Anfrage kann derzeit nicht beantwortet werden, da die Zuständigkeit für die Schnittstellenkonfiguration nicht in meinem Bereich liegt. Eine Weiterleitung wurde veranlasst. Mit einer Rückmeldung ist zu gegebener Zeit zu rechnen."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'written-tone-q1',
          question:
            'Warum sollten Passivkonstruktionen in Business-Texten sparsam eingesetzt werden?',
          options: [
            {
              text: 'Das Passiv verschleiert, wer handelt und verantwortlich ist – aktive Sätze sind kürzer, klarer und verbindlicher.',
              correct: true,
              explanation:
                'Genau: „Die Reklamation wird geprüft" lässt offen, wer prüft und bis wann. „Ich prüfe Ihre Reklamation bis Freitag" ist eine überprüfbare Zusage.',
            },
            {
              text: 'Das Passiv ist grammatikalisch falsch und sollte in professionellen Texten nie vorkommen.',
              correct: false,
              explanation:
                'Das Passiv ist korrekt und manchmal sogar richtig – etwa wenn der Handelnde unbekannt oder unwichtig ist. Problematisch ist nur der gewohnheitsmäßige Gebrauch, der Verantwortung versteckt.',
            },
            {
              text: 'Passivsätze sind immer länger als Aktivsätze und sprengen deshalb jede Mail.',
              correct: false,
              explanation:
                'Passivsätze sind oft etwas länger, aber das ist nicht der Kern des Problems: Entscheidend ist die fehlende Verantwortlichkeit – kein Handelnder, keine Zusage.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'written-tone-q2',
          question: 'Was bedeutet „Empfängerperspektive einnehmen" beim Schreiben konkret?',
          options: [
            {
              text: 'Den Text vor dem Senden mit den Augen des Empfängers lesen: Versteht er ihn ohne mein Vorwissen, und steht das für ihn Relevante vorn?',
              correct: true,
              explanation:
                'Richtig: Der häufigste Schreibfehler ist, aus der eigenen Logik zu schreiben – mit internen Abkürzungen, fehlendem Kontext und der eigenen Priorität vorn statt der des Lesers.',
            },
            {
              text: 'Den Schreibstil des Empfängers exakt imitieren, damit er sich wohlfühlt.',
              correct: false,
              explanation:
                'Eine gewisse Anpassung an Ton und Förmlichkeit des Gegenübers ist sinnvoll – aber Empfängerperspektive meint primär Verständlichkeit und Relevanz aus Sicht des Lesers, nicht Stil-Mimikry.',
            },
            {
              text: 'Immer besonders förmlich schreiben, weil man nie weiß, wer die Mail noch liest.',
              correct: false,
              explanation:
                'Übertriebene Förmlichkeit erzeugt Distanz und oft genau das Beamtendeutsch, das Klarheit verhindert. Angemessenheit schlägt Förmlichkeit.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'written-tone-s1',
          situation:
            'Ein wichtiger Kunde fragt per Mail, ob ihr sein gewünschtes Zusatzfeature bis zum Monatsende liefern könnt. Du weißt: Bis Monatsende ist unrealistisch, Mitte nächsten Monats ist sicher machbar. Wie antwortest du?',
          choices: [
            {
              text: '„Gern liefern wir Ihnen das Feature vollständig getestet bis zum 15. des nächsten Monats. Wenn Ihnen einzelne Funktionen besonders eilen, priorisieren wir diese gern – dann erhalten Sie einen ersten Teil schon zum Monatsende. Was wäre Ihnen am wichtigsten?"',
              quality: 'best',
              feedback:
                'Sehr gut: positiv formuliert (was geht und bis wann), ein konkretes verbindliches Datum, plus ein lösungsorientiertes Angebot mit Rückfrage. Der Kunde liest eine Zusage, keine Absage – obwohl du seinen Wunschtermin nicht hältst.',
            },
            {
              text: '„Bis Monatsende ist das leider nicht möglich. Die Umsetzung kann frühestens im nächsten Monat erfolgen."',
              quality: 'ok',
              feedback:
                'Ehrlich, aber doppelt negativ formuliert und ohne konkretes Datum: Der Kunde liest zwei Absagen und weiß immer noch nicht, wann er liefern kann. „Frühestens im nächsten Monat" klingt zudem vager, als es sein müsste – das kostet Vertrauen.',
            },
            {
              text: '„Ja, das bekommen wir bis Monatsende hin!" – intern wird das Team es schon irgendwie schaffen, und notfalls verschiebt man eben kurzfristig.',
              quality: 'bad',
              feedback:
                'Die bequeme Zusage rächt sich: Eine gebrochene Zusage beschädigt das Vertrauen weit mehr als ein ehrlich kommunizierter späterer Termin. Positiv formulieren heißt nie, unhaltbare Versprechen zu machen.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'written-tone-f1',
          task: 'Übersetze diese Absage in positives, aktives und empfängerorientiertes Deutsch:\n\n„Ihrem Wunsch nach einer kurzfristigen Terminverschiebung kann leider nicht entsprochen werden, da eine Umplanung der bereits erfolgten Ressourcenallokation nicht mehr durchgeführt werden kann. Eine Bearbeitung ist erst im Folgemonat wieder möglich."',
          placeholder: 'Deine Umformulierung …',
          sampleSolution:
            '„Vielen Dank für Ihre Nachricht! Für diesen Monat sind unsere Techniker-Teams bereits fest verplant – den nächstmöglichen Termin kann ich Ihnen am 4. des kommenden Monats anbieten. Soll ich ihn direkt für Sie reservieren? Falls bei uns kurzfristig ein Termin frei wird, melde ich mich sofort bei Ihnen."',
          checklist: [
            'Ich habe gesagt, was geht (konkreter Termin), statt nur, was nicht geht.',
            'Ich habe aktiv formuliert: In meinen Sätzen handelt jemand („ich", „wir").',
            'Ich habe Substantivierungen und Amtsdeutsch („Ressourcenallokation", „erfolgen") entfernt.',
            'Ich habe dem Empfänger einen nächsten Schritt angeboten.',
            'Mein Text ist kürzer oder gleich lang wie das Original.',
          ],
        },
      ],
    },
    {
      id: 'written-chat',
      title: 'Chat & Messenger-Etikette',
      theory: [
        {
          kind: 'text',
          body: 'Slack, Microsoft Teams und Co. haben die Bürokommunikation beschleunigt – und neue Reibungspunkte geschaffen: ständige Unterbrechungen, der Druck sofortiger Antworten, wichtige Entscheidungen, die in endlosen Threads versickern. Chat ist ein großartiger Kanal – wenn man ihn als das behandelt, was er ist: schnell, informell und flüchtig. Und wenn man weiß, wann ein anderer Kanal der bessere ist.',
        },
        {
          kind: 'text',
          heading: 'Chat-Grundregeln, die Zeit sparen',
          body: 'Regel eins: kein „Hallo" ohne Inhalt. Wer nur „Hi, hast du kurz Zeit?" schickt und auf Antwort wartet, erzwingt einen zweiten Kommunikationsschritt und lässt das Gegenüber rätseln. Besser die ganze Frage in die erste Nachricht: „Hi Lena! Weißt du, wer die Zugänge fürs CRM freischaltet? Ich brauche einen für unseren neuen Werkstudenten." Das Gegenüber kann antworten, wann es passt – genau das ist die Stärke von asynchroner Kommunikation.\n\nRegel zwei: Threads nutzen und Kontext geben. Antworten gehören in den Thread zur Ursprungsnachricht, nicht als neue Nachricht in den Kanal – sonst zerfasert jede Diskussion. Regel drei: Erreichbarkeit respektieren. Der Status („Fokuszeit", „im Termin", abwesend) ist eine Information, kein Dekor. Chat ist asynchron: Niemand schuldet eine Antwort in Minuten – wer echte Dringlichkeit hat, ruft an. Und außerhalb der Arbeitszeiten gilt: Nachrichten planen oder senden ohne Antworterwartung („Keine Eile – bis morgen reicht völlig").',
        },
        {
          kind: 'text',
          heading: 'Chat, Mail oder Anruf? Die Kanalwahl',
          body: 'Die wichtigste Etikette-Frage ist die Kanalwahl selbst. Chat eignet sich für schnelle Fragen mit kurzen Antworten, informelle Abstimmungen und Statusupdates im Team. E-Mail ist der Kanal für alles, was dokumentiert, formal oder an Externe gerichtet ist: Vereinbarungen, Freigaben, Entscheidungen mit mehreren Beteiligten, alles mit Anhängen, die wiedergefunden werden müssen. Der Anruf (oder das kurze Gespräch) gewinnt immer dann, wenn es dringend ist, emotional oder komplex: Alles, was im Chat mehr als drei Hin-und-her-Nachrichten braucht, ist in fünf Minuten Gespräch schneller geklärt.\n\nEine Sonderregel verdient Fettdruck: Konflikte und Kritik haben im Chat nichts verloren. Ohne Tonfall eskalieren Missverständnisse in Minuten, und geschriebene Spitzen bleiben für immer lesbar – auch für Leute, die den Screenshot später sehen. Sobald ein Chat emotional wird, ist der beste Move: „Lass uns kurz telefonieren."',
        },
        {
          kind: 'table',
          headers: ['Situation', 'Bester Kanal', 'Warum'],
          rows: [
            [
              'Schnelle Sachfrage („Wo liegt das Template?")',
              'Chat',
              'Kurz, informell, asynchron beantwortbar',
            ],
            ['Freigabe, Vereinbarung, Externe', 'E-Mail', 'Dokumentiert, wiederauffindbar, formal'],
            [
              'Dringender Blocker, komplexe Abstimmung',
              'Anruf / Gespräch',
              'Sofortige Rückfragen, schneller als 10 Chat-Nachrichten',
            ],
            [
              'Kritik, Konflikt, heikle Themen',
              'Gespräch (nie Chat)',
              'Tonfall nötig, Eskalationsgefahr in Schriftform',
            ],
            [
              'Info an viele ohne Antwortbedarf',
              'Kanal-Post oder Mail',
              'Kein Antwortdruck, bleibt nachlesbar',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Kein „Hallo" ohne Inhalt: Frage komplett in die erste Nachricht – das macht Chat asynchron nutzbar.',
            'Threads nutzen, Kontext mitliefern, Status des Gegenübers respektieren.',
            'Chat ist asynchron: Niemand schuldet Antworten in Minuten. Echte Dringlichkeit = Anruf.',
            'Kanalwahl: Chat für Schnelles, Mail für Dokumentiertes und Externes, Anruf für Dringendes, Emotionales, Komplexes.',
            'Konflikte nie im Chat austragen – beim ersten Anzeichen von Spannung: „Lass uns telefonieren."',
          ],
        },
        {
          kind: 'example',
          title: 'Bitte an eine Kollegin im Teams-Chat',
          good: '„Hi Dana! Im Angebot für Novak fehlt noch deine Preiskalkulation (Zeile 12–18 im Sheet, Link anbei). Schaffst du das bis morgen 12 Uhr? Keine Eile heute Abend – morgen früh reicht völlig."',
          bad: '15:02 „Hallo"\n15:02 „bist du da?"\n15:04 „???"\n15:11 „ok dann nicht"\n15:40 „sag mal, bekommst du eigentlich mit, dass hier alle auf dich warten?!"',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'written-chat-q1',
          question: 'Warum gilt „kein ‚Hallo‛ ohne Inhalt" als wichtigste Chat-Regel?',
          options: [
            {
              text: 'Eine Nachricht nur mit „Hi, hast du kurz Zeit?" erzwingt Rückfragen und Wartezeit – steht die ganze Frage in der ersten Nachricht, kann das Gegenüber antworten, wann es passt.',
              correct: true,
              explanation:
                'Genau: Chat ist asynchron am stärksten. Die vollständige Frage respektiert die Zeit des anderen und beschleunigt die Antwort – oft um Stunden.',
            },
            {
              text: 'Begrüßungen sind im Berufsleben generell unhöflich und sollten weggelassen werden.',
              correct: false,
              explanation:
                'Ein „Hi Lena!" ist völlig in Ordnung – nur eben zusammen mit dem Anliegen in derselben Nachricht, nicht als einzelne Nachricht, die auf Antwort wartet.',
            },
            {
              text: 'Kurze Nachrichten verstopfen den Server und verlangsamen den Chat für alle.',
              correct: false,
              explanation:
                'Technisch ist das irrelevant. Es geht um Kommunikation: Das inhaltsleere „Hallo" blockiert den Empfänger, weil er nachfragen muss, bevor er helfen kann.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'written-chat-q2',
          question:
            'In einem Chat-Austausch mit einem Kollegen merkst du, dass der Ton gereizt wird und ihr euch missversteht. Was ist der beste nächste Schritt?',
          options: [
            {
              text: 'Den Kanal wechseln: „Lass uns kurz telefonieren" – heikle und emotionale Themen brauchen Tonfall und direkte Rückfragen.',
              correct: true,
              explanation:
                'Richtig: Ohne Tonfall schaukeln sich Missverständnisse im Chat schnell hoch, und geschriebene Spitzen bleiben dauerhaft lesbar. Fünf Minuten Telefonat klären, was zwanzig Nachrichten eskalieren lassen.',
            },
            {
              text: 'Die eigene Position noch einmal ausführlicher und mit mehr Argumenten in den Chat schreiben.',
              correct: false,
              explanation:
                'Mehr Text löst kein Tonfall-Problem: Auch die ausführliche Version wird im gereizten Zustand negativ gelesen. Der Kanal ist das Problem, nicht die Argumentlänge.',
            },
            {
              text: 'Die Nachrichten des Kollegen per Screenshot an den Teamlead schicken, damit der die Lage einschätzen kann.',
              correct: false,
              explanation:
                'Das ist eine verdeckte Eskalation, die das Vertrauen dauerhaft beschädigt, sobald sie herauskommt – und sie kommt fast immer heraus. Erst das direkte Gespräch suchen.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'written-chat-s1',
          situation:
            'Es ist 9:30 Uhr, du hängst an einem Blocker: Ohne eine Info von Kollegin Carla kommst du nicht weiter, und dein Teil muss bis 12 Uhr fertig sein. Carlas Teams-Status steht auf „Fokuszeit – bitte nur Dringendes". Was tust du?',
          choices: [
            {
              text: 'Eine vollständige Chat-Nachricht mit Kontext und Frist schicken: „Hi Carla, sorry für die Störung in der Fokuszeit – ich bin geblockt: Welchen API-Key nutzt das Staging-System? Brauche die Info bis 11 Uhr, sonst reiße ich die 12-Uhr-Deadline. Danke dir!"',
              quality: 'best',
              feedback:
                'Sehr gut: Du respektierst den Status, machst die Dringlichkeit transparent und lieferst alles in einer Nachricht – Carla kann in 30 Sekunden antworten, ohne aus dem Fokus gerissen zu werden. Genau dafür ist die Ausnahme „nur Dringendes" da. Kommt bis 10:30 nichts, ist der Anruf der legitime nächste Schritt.',
            },
            {
              text: 'Carla sofort anrufen – dein Blocker ist schließlich dringend, und der Status wird schon nicht so gemeint sein.',
              quality: 'ok',
              feedback:
                'Bei echter Dringlichkeit ist der Anruf grundsätzlich legitim – aber als erster Schritt um 9:30 bei einer 12-Uhr-Deadline übergehst du ihre Fokuszeit unnötig: Eine präzise Chat-Nachricht hätte ihr die Chance gegeben, selbst zu entscheiden. Der Anruf ist die Eskalationsstufe, wenn der Chat unbeantwortet bleibt.',
            },
            {
              text: 'Nichts sagen und warten, bis die Fokuszeit vorbei ist – ihren Status zu stören wäre unhöflich. Wenn es um 12 Uhr nicht fertig ist, lag es ja an Carla.',
              quality: 'bad',
              feedback:
                'Falsch verstandene Höflichkeit: Der Status sagt „nur Dringendes" – und einen Deadline-Blocker DARFST du melden. Schweigen gefährdet die Deadline, und die Schuld hinterher Carla zu geben ist unfair: Sie wusste ja nichts von deinem Blocker.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'written-chat-f1',
          task: 'Diese Chat-Nachricht an einen Kollegen ist unbrauchbar: „Hey, wegen der Sache von neulich, da müsste man nochmal ran, kannst du da mal schauen?" Schreibe sie so um, dass der Kollege ohne Rückfrage antworten kann – mit Kontext, konkreter Bitte und Zeitangabe.',
          placeholder: 'Deine Chat-Nachricht …',
          sampleSolution:
            '„Hi Tom! Es geht um den Export-Bug aus dem Sprint-Review letzte Woche (Ticket KP-342): Der CSV-Export schneidet weiterhin Umlaute ab. Kannst du bis Donnerstag draufschauen und im Ticket kurz einschätzen, ob wir das im laufenden Sprint fixen können? Kein Drama, falls nicht – dann plane ich es für den nächsten ein. Danke dir!"',
          checklist: [
            'Ich habe den Kontext benannt (worum geht es, woher kommt das Thema, ggf. Ticket/Link).',
            'Meine Bitte ist konkret: was genau getan oder beantwortet werden soll.',
            'Ich habe eine Zeitangabe gemacht und gesagt, wie dringend es wirklich ist.',
            'Die Nachricht ist vollständig – der Kollege kann ohne Rückfrage antworten.',
          ],
        },
      ],
    },
  ],
}
