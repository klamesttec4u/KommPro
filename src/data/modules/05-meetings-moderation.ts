import type { Module } from '@/types/content'

export const meetingsModeration: Module = {
  id: 'meetings-moderation',
  title: 'Meetings & Moderation',
  description:
    'Weniger, kürzere, bessere Meetings: saubere Vorbereitung mit Agenda und Ziel, souveräne Moderation und Ergebnisse, die nicht im Sande verlaufen.',
  category: 'communication',
  lessons: [
    {
      id: 'meetings-prep',
      title: 'Meetings vorbereiten',
      theory: [
        {
          kind: 'text',
          body: 'Meetings sind die teuerste Kommunikationsform im Unternehmen: Acht Personen, eine Stunde – das ist ein voller Arbeitstag an Kapazität. Trotzdem werden Meetings oft angesetzt wie Kaffeepausen: aus Gewohnheit, ohne Ziel, mit Serientermin bis in alle Ewigkeit. Die wichtigste Vorbereitung passiert deshalb vor der Einladung – mit der Frage: Braucht es dieses Meeting überhaupt?\n\nEin Meeting lohnt sich, wenn echte Interaktion nötig ist: diskutieren, abwägen, gemeinsam entscheiden, Konflikte klären, kreativ arbeiten. Reine Informationsweitergabe braucht kein Meeting – dafür gibt es Mail, Kanal-Post oder ein kurzes Dokument. Die Faustregel: Wenn am Ende des Meetings nichts anderes herauskommen kann als am Anfang schon feststand, war es eine Mail in Verkleidung.',
        },
        {
          kind: 'text',
          heading: 'Zieltyp klären: Information, Diskussion oder Entscheidung?',
          body: 'Jeder Agendapunkt – und idealerweise das ganze Meeting – hat einen von drei Zieltypen. Information: Die Teilnehmenden sollen etwas erfahren (sparsam einsetzen – oft reicht Schriftform, im Meeting höchstens als kurzer Block mit Rückfragen). Diskussion: Perspektiven und Argumente sollen gesammelt werden, eine Entscheidung fällt noch nicht. Entscheidung: Am Ende steht ein Beschluss – dafür müssen Optionen und Entscheidungsgrundlagen vorab vorliegen und die Entscheidungsbefugten anwesend sein.\n\nDer Zieltyp gehört sichtbar in die Agenda, denn er verändert alles: die Vorbereitung der Teilnehmenden, den Zeitbedarf und die Erwartung. Nichts frustriert mehr als eine einstündige Diskussion, nach der es heißt: „Entschieden wird woanders." Umgekehrt scheitern Entscheidungsmeetings, wenn die Hälfte der Runde die Optionen zum ersten Mal sieht. Ein guter Agendapunkt ist deshalb als Frage mit Zieltyp formuliert: „Entscheidung: Verschieben wir den Release auf KW 46 – ja oder nein?" statt „Thema Release".',
        },
        {
          kind: 'text',
          heading: 'Agenda, Teilnehmerkreis und Rollen',
          body: 'Die Agenda geht mit der Einladung raus – nicht fünf Minuten vorher. Sie enthält pro Punkt: die Leitfrage, den Zieltyp, die Zeit und wer den Punkt einbringt. Material, das gelesen sein muss, hängt an der Einladung, mit klarer Ansage („Bitte vorab lesen, wir setzen es voraus").\n\nBeim Teilnehmerkreis gilt: so klein wie möglich. Jede zusätzliche Person verlängert Diskussionen und verdünnt Verantwortung. Wer nur informiert werden muss, bekommt das Protokoll – nicht die Einladung. Für Entscheidungen hilft die Frage: Wer entscheidet, wer trägt bei, wer muss nur Bescheid wissen?\n\nKlare Rollen machen den Unterschied zwischen Gespräch und Arbeitssitzung: Die Moderation führt durch die Agenda, achtet auf Zeit und Beteiligung – und hält sich inhaltlich zurück. Das Protokoll hält Ergebnisse und Action Items fest (vorher festlegen, nicht am Ende suchen). Der Timekeeper kann die Moderation entlasten. Wichtig: Wer stark eigene inhaltliche Interessen hat, moderiert besser nicht selbst – oder macht transparent, wann er die Moderatorenrolle kurz verlässt („Jetzt spreche ich mal als Fachseite …").',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Erste Frage: Braucht es das Meeting? Reine Information ist eine Mail, kein Termin.',
            'Jeder Agendapunkt hat einen Zieltyp: Information, Diskussion oder Entscheidung – und der steht in der Agenda.',
            'Agendapunkte als Leitfragen formulieren, mit Zeitansatz und Verantwortlichem.',
            'Teilnehmerkreis so klein wie möglich: Wer nur informiert werden muss, bekommt das Protokoll.',
            'Rollen vor dem Meeting klären: Moderation, Protokoll, ggf. Timekeeper.',
          ],
        },
        {
          kind: 'example',
          title: 'Meeting-Einladung an das Projektteam',
          good: 'Betreff: „Entscheidung Release-Termin – Mi 10:00–10:45, bitte Optionspapier vorab lesen"\n\nAgenda: 1. Entscheidung: Release am 15.11. halten oder auf KW 48 schieben? (30 Min, Grundlage: Optionspapier im Anhang, Entscheidung durch Produktleitung) – 2. Info: neuer Staging-Prozess (10 Min, Rückfragen) – Protokoll: Jana.',
          bad: 'Betreff: „Jour Fixe"\n\n„Hallo zusammen, lasst uns mal wieder zusammensetzen, es gibt einiges zu besprechen. Ich habe mal eine Stunde geblockt und das halbe Haus eingeladen, dann sind alle im Boot. Agenda machen wir dann im Termin."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'meetings-prep-q1',
          question: 'Wann ist ein Meeting die richtige Kommunikationsform?',
          options: [
            {
              text: 'Wenn echte Interaktion nötig ist – diskutieren, gemeinsam entscheiden, Konflikte klären. Reine Informationsweitergabe geht besser schriftlich.',
              correct: true,
              explanation:
                'Genau: Der Mehrwert eines Meetings liegt im Austausch in Echtzeit. Steht das Ergebnis vorher fest oder fließt die Information nur in eine Richtung, ist ein Meeting Verschwendung von Team-Kapazität.',
            },
            {
              text: 'Immer wenn ein Thema wichtig ist – wichtige Themen verdienen einen Termin.',
              correct: false,
              explanation:
                'Wichtigkeit allein rechtfertigt kein Meeting: Auch eine wichtige Information kann als Dokument mit Rückfrage-Möglichkeit effizienter sein. Entscheidend ist, ob Interaktion gebraucht wird.',
            },
            {
              text: 'Regelmäßig im festen Rhythmus, damit das Team im Austausch bleibt – unabhängig davon, ob es konkrete Themen gibt.',
              correct: false,
              explanation:
                'Serientermine ohne Inhalt sind die größten Zeitfresser. Regeltermine sind nur sinnvoll, wenn sie verlässlich gefüllte Agenden haben – sonst: absagen oder verkürzen.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'meetings-prep-q2',
          question:
            'Warum sollte der Zieltyp (Information / Diskussion / Entscheidung) für jeden Agendapunkt ausgewiesen werden?',
          options: [
            {
              text: 'Er steuert Vorbereitung und Erwartung: Teilnehmende wissen, ob sie Input liefern, mitdiskutieren oder entscheiden sollen – und Frust über „scheinbare" Mitbestimmung wird vermieden.',
              correct: true,
              explanation:
                'Richtig: Eine Diskussion, nach der „woanders entschieden" wird, frustriert – ebenso eine Entscheidungsrunde, in der niemand die Optionen kennt. Der Zieltyp macht das Spielfeld vor dem Anpfiff klar.',
            },
            {
              text: 'Der Zieltyp ist eine Formalie für das Protokoll, damit es später einheitlich archiviert werden kann.',
              correct: false,
              explanation:
                'Es geht nicht um Archivierung: Der Zieltyp verändert, wie sich Teilnehmende vorbereiten, wie viel Zeit der Punkt braucht und ob Entscheidungsbefugte dabei sein müssen.',
            },
            {
              text: 'Damit Informations-Punkte immer an den Anfang des Meetings gelegt werden können.',
              correct: false,
              explanation:
                'Eine feste Reihenfolge schreibt der Zieltyp nicht vor – oft ist es sogar klug, mit dem wichtigsten Entscheidungspunkt zu starten, solange alle frisch sind.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'meetings-prep-s1',
          situation:
            'Dein Chef bittet dich, „ein Meeting mit allen Stakeholdern" zum neuen Intranet aufzusetzen. Du zählst durch: Das wären 14 Personen. Eigentlich geht es nur darum, dass drei Fachbereiche ihre Anforderungen priorisieren – der Rest soll informiert bleiben.',
          choices: [
            {
              text: 'Dem Chef einen Alternativvorschlag machen: ein 45-Minuten-Arbeitstermin mit den drei Fachbereichsvertretern zur Priorisierung (Zieltyp: Entscheidung), danach ein kurzes Ergebnis-Update an alle 14 per Mail.',
              quality: 'best',
              feedback:
                'Sehr gut: Du trennst Mitwirkende von Informierten – die Entscheidung fällt im kleinen, arbeitsfähigen Kreis, und niemand verliert eine Stunde fürs Zuhören. Dass du den Vorschlag mit dem Chef abstimmst, statt seine Bitte stillschweigend zu ändern, ist genau richtig.',
            },
            {
              text: 'Alle 14 Personen zu 90 Minuten einladen – der Chef hat es so gesagt, und so fühlt sich niemand übergangen.',
              quality: 'bad',
              feedback:
                '21 Personenstunden für ein Thema, das drei Personen betrifft: Elf Teilnehmende sitzen passiv dabei, die Diskussion zerfasert, und die Priorisierung wird in großer Runde eher schwieriger als leichter. „Niemand fühlt sich übergangen" lässt sich mit einem guten Ergebnis-Update günstiger haben.',
            },
            {
              text: 'Nur die drei Fachbereiche einladen und die übrigen elf stillschweigend weglassen – merkt schon keiner.',
              quality: 'ok',
              feedback:
                'Der Teilnehmerkreis stimmt – aber zwei Fehler: Du änderst den Auftrag deines Chefs ohne Rücksprache, und die übrigen Stakeholder bleiben ganz ohne Information. Wenn das auffliegt, wirkt es wie Ausgrenzung. Die saubere Variante: Rücksprache plus Info-Mail an den Rest.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'meetings-prep-f1',
          task: 'Erstelle eine Agenda für ein 45-Minuten-Meeting zum Thema „Kundenportal: Beschwerden über lange Ladezeiten". Teilnehmende: du (Produkt), zwei Entwickler, eine Support-Kollegin. Formuliere 3 Agendapunkte jeweils mit Leitfrage, Zieltyp (Information/Diskussion/Entscheidung) und Zeitansatz – und lege fest, wer moderiert und wer protokolliert.',
          placeholder:
            '1. … (Zieltyp, Zeit)\n2. … (Zieltyp, Zeit)\n3. … (Zieltyp, Zeit)\nModeration: …\nProtokoll: …',
          sampleSolution:
            '1. Was wissen wir? Beschwerdelage aus dem Support und Performance-Messwerte (Information, 10 Min, Input: Support + Entwicklung)\n2. Welche Ursachen und Lösungsoptionen sehen wir, und was kosten sie? (Diskussion, 20 Min)\n3. Welche Maßnahme setzen wir im nächsten Sprint um, und wer übernimmt sie? (Entscheidung, 10 Min)\nPuffer: 5 Min\nModeration: ich (Produkt) – bei Punkt 2 gebe ich meine inhaltliche Einschätzung explizit als Fachbeitrag ab.\nProtokoll: Support-Kollegin hält Beschlüsse und Action Items direkt im geteilten Dokument fest.',
          checklist: [
            'Ich habe jeden Agendapunkt als Leitfrage formuliert, nicht als Schlagwort.',
            'Jeder Punkt hat einen Zieltyp (Information / Diskussion / Entscheidung).',
            'Die Zeitansätze summieren sich realistisch auf die Meetingdauer (inkl. Puffer).',
            'Ich habe Moderation und Protokoll vorab festgelegt.',
            'Der Entscheidungspunkt macht klar, was am Ende konkret feststehen soll.',
          ],
        },
      ],
    },
    {
      id: 'meetings-facilitation',
      title: 'Moderationstechniken',
      theory: [
        {
          kind: 'text',
          body: 'Eine gute Agenda ist die halbe Miete – die andere Hälfte ist Moderation. Ohne sie passiert in Meetings das Übliche: Zwei Personen bestreiten 80 % der Redezeit, die Diskussion mäandert vom Hundertsten ins Tausendste, und um Minute 58 stellt jemand die Grundsatzfrage, die alles wieder aufmacht. Moderation heißt: den Prozess führen, damit die Gruppe inhaltlich arbeiten kann. Die Moderatorin ist Dienstleisterin der Gruppe – nicht die Person mit der lautesten Meinung.',
        },
        {
          kind: 'text',
          heading: 'Aktivieren: Alle Stimmen in den Raum holen',
          body: 'Die besten Ideen sitzen oft bei denen, die nicht von selbst sprechen. Wirksame Aktivierungstechniken: direktes, wertschätzendes Ansprechen („Katrin, du hast das letzte Migrationsprojekt begleitet – wie siehst du das?"), Blitzlicht-Runden, in denen jede Person reihum 30 Sekunden ihre Sicht gibt, und stilles Sammeln vorab: Alle schreiben zwei Minuten ihre Punkte auf Karten oder ins geteilte Dokument, bevor gesprochen wird. Das stille Sammeln hat einen doppelten Effekt: Introvertierte kommen zu Wort, und die Gruppe entgeht dem Ankereffekt, bei dem der erste Redebeitrag alle weiteren prägt.\n\nIn Online-Meetings ist Aktivierung doppelt wichtig, weil Abtauchen leichter fällt: Kamera-Signale beachten, Chat als zweiten Kanal nutzen, gezielt und namentlich Fragen stellen.',
        },
        {
          kind: 'text',
          heading: 'Vielredner bremsen und den Zeitrahmen halten',
          body: 'Vielredner bremst man am besten mit Struktur statt Konfrontation: zusammenfassen und weitergeben („Dein Kernpunkt ist also die Datenqualität – danke! Was sagen die anderen dazu?"), Redezeiten für Runden vereinbaren oder die Person produktiv einbinden („Magst du deine drei wichtigsten Punkte am Flipchart notieren?"). Hilft das nicht, ist die freundlich-klare Unterbrechung legitim – sie schützt die Gruppe: „Ich unterbreche dich kurz, weil ich die anderen Perspektiven noch hören möchte."\n\nFür den Zeitrahmen gilt: Zeitansätze pro Agendapunkt sichtbar machen und rechtzeitig ansagen („Noch fünf Minuten für diesen Punkt"). Themen, die wichtig sind, aber nicht hierher gehören, wandern sichtbar in den Themenspeicher (Parkplatz) – so fühlt sich niemand abgewürgt, und das Meeting bleibt auf Kurs. Läuft ein Punkt über, entscheidet die Moderation transparent: verlängern (und was dafür streichen?), vertagen oder in kleiner Runde klären.',
        },
        {
          kind: 'text',
          heading: 'Entscheidungen herbeiführen',
          body: 'Diskussionen enden selten von selbst in einer Entscheidung – die Moderation muss den Übergang aktiv setzen. Bewährter Dreischritt: Erstens den Diskussionsstand zusammenfassen („Ich höre zwei Optionen: A mit diesen Vorteilen, B mit jenen"). Zweitens die Entscheidungsfrage präzise stellen („Entscheiden müssen wir heute: Starten wir mit A im November?"). Drittens das Entscheidungsverfahren benennen – Konsens, Mehrheit, oder eine Person entscheidet nach Beratung (konsultativer Einzelentscheid). Unklare Verfahren sind der häufigste Grund, warum Gruppen Entscheidungen vertagen.\n\nNützlich ist die Konsens-Abstufung: Statt „Sind alle dafür?" zu fragen, frage „Kann jemand mit Option A nicht leben?" – Zustimmung ist eine höhere Hürde als fehlender Widerstand (Konsent-Prinzip). Und jede Entscheidung wird sofort festgehalten und laut wiederholt, bevor der nächste Punkt beginnt: „Festgehalten: Wir starten mit A, Murat klärt die Lizenzfrage bis Freitag."',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Moderation führt den Prozess, nicht den Inhalt – sie ist Dienstleisterin der Gruppe.',
            'Aktivieren: direkt ansprechen, Blitzlicht-Runden, still sammeln vor dem Diskutieren.',
            'Vielredner mit Struktur bremsen: zusammenfassen, weitergeben, notfalls freundlich-klar unterbrechen.',
            'Zeitrahmen sichtbar managen; Off-Topic-Themen in den Themenspeicher statt sie auszudiskutieren.',
            'Entscheidungen aktiv herbeiführen: zusammenfassen, Entscheidungsfrage stellen, Verfahren klären – und das Ergebnis sofort festhalten.',
          ],
        },
        {
          kind: 'example',
          title: 'Ein Teilnehmer öffnet in Minute 40 ein neues Grundsatzthema',
          good: '„Das ist ein wichtiger Punkt – und er sprengt unseren heutigen Rahmen. Ich nehme ihn in den Themenspeicher und kläre bis morgen mit dir, in welcher Runde er hingehört. Zurück zu unserer Entscheidungsfrage: A oder B?"',
          bad: '„Na gut, wenn du das ansprichst … dann lasst uns das auch noch kurz diskutieren." – 25 Minuten später ist weder das neue Thema geklärt noch die ursprüngliche Entscheidung gefallen, und drei Leute mussten in den Folgetermin.',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'meetings-facilitation-q1',
          question:
            'Warum ist „stilles Sammeln" (alle notieren erst, dann wird gesprochen) eine starke Aktivierungstechnik?',
          options: [
            {
              text: 'Alle denken unabhängig nach, bevor der erste Beitrag die Richtung prägt – Introvertierte kommen zu Wort, und der Ankereffekt wird vermieden.',
              correct: true,
              explanation:
                'Genau: Ohne stilles Sammeln dominiert oft die erste (oder lauteste) Meinung die gesamte Diskussion. Zwei Minuten Schreiben liefern mehr und vielfältigere Ideen als zwanzig Minuten freies Reden.',
            },
            {
              text: 'Es spart Zeit, weil während des Schreibens nicht gesprochen werden darf.',
              correct: false,
              explanation:
                'Das Schweigen ist Mittel, nicht Zweck: Es geht um unabhängiges Denken und darum, alle Perspektiven zu heben – nicht um Ruhe im Raum.',
            },
            {
              text: 'Schriftliche Beiträge sind verbindlicher und können später gegen die Person verwendet werden.',
              correct: false,
              explanation:
                'Ein Klima, in dem Beiträge „gegen jemanden verwendet" werden, zerstört jede offene Diskussion. Stilles Sammeln soll Beteiligung sicherer machen, nicht riskanter.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'meetings-facilitation-q2',
          question:
            'Was ist der Unterschied zwischen der Frage „Sind alle dafür?" und „Kann jemand mit dieser Option nicht leben?"',
          options: [
            {
              text: 'Die erste verlangt aktive Zustimmung aller, die zweite fragt nach schwerwiegenden Einwänden (Konsent-Prinzip) – das macht Gruppen entscheidungsfähiger.',
              correct: true,
              explanation:
                'Richtig: Volle Begeisterung aller ist selten erreichbar, „kein schwerwiegender Einwand" dagegen oft. Das Konsent-Prinzip verhindert, dass Entscheidungen an Perfektionismus scheitern – Einwände, die kommen, werden ernsthaft behandelt.',
            },
            {
              text: 'Es gibt keinen praktischen Unterschied – beide Fragen führen zum selben Ergebnis.',
              correct: false,
              explanation:
                'Der Unterschied ist erheblich: Auf „Sind alle dafür?" schweigen Unentschlossene und blockieren damit faktisch. Die Konsent-Frage lädt nur echte, benennbare Einwände ein.',
            },
            {
              text: 'Die zweite Frage ist unhöflicher, weil sie Kritiker zwingt, sich zu outen.',
              correct: false,
              explanation:
                'Im Gegenteil: Sie macht transparent, dass Einwände erwünscht und ernst gemeint sind – das ist respektvoller als eine Zustimmungsfrage, bei der Schweigen als Ja gewertet wird.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'meetings-facilitation-s1',
          situation:
            'Du moderierst ein Priorisierungsmeeting. Kollege Richter redet seit sechs Minuten am Stück, wiederholt sich zunehmend – und du siehst, dass zwei Teammitglieder innerlich aussteigen. Auf der Agenda stehen noch drei Punkte, die Hälfte der Zeit ist um.',
          choices: [
            {
              text: 'Freundlich einsteigen, zusammenfassen und weitergeben: „Ich fasse deinen Kernpunkt mal zusammen – die Priorität liegt für dich klar auf der Datenmigration. Danke! Bevor wir vertiefen: Lisa, Ahmed, wie seht ihr das?"',
              quality: 'best',
              feedback:
                'Sehr gut: Du würdigst den Beitrag, verdichtest ihn auf den Kern und holst aktiv andere Stimmen hinein – das bremst den Vielredner, ohne ihn bloßzustellen, und bringt das Meeting zurück in die Spur. Genau das ist der Job der Moderation.',
            },
            {
              text: 'Ihn ausreden lassen, bis er von selbst fertig ist – unterbrechen wäre unhöflich, und als Moderator willst du neutral bleiben.',
              quality: 'bad',
              feedback:
                'Falsch verstandene Neutralität: Die Moderation schützt die Redezeit ALLER, und das erfordert manchmal Eingreifen. Wer Vielredner gewähren lässt, opfert die restliche Agenda und die Beteiligung der Stilleren – die Gruppe verliert, damit einer nicht unterbrochen wird.',
            },
            {
              text: 'Mit einem Scherz vor der Gruppe bremsen: „Richter, wir haben heute leider keine drei Stunden – kommst du mal zum Punkt?"',
              quality: 'ok',
              feedback:
                'Das Ziel stimmt, die Form ist riskant: Vor der Gruppe wirkt der Spruch schnell wie eine Bloßstellung – je nach Person und Teamkultur kostet dich das seine Mitarbeit für den Rest des Termins. Zusammenfassen und weitergeben erreicht dasselbe ohne Gesichtsverlust.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'meetings-facilitation-f1',
          task: 'Dein Team diskutiert seit 25 Minuten über zwei CRM-Anbieter (Option A: teurer, voll integriert; Option B: günstiger, mit Zusatzaufwand). Die Argumente wiederholen sich. Formuliere als Moderation den Dreischritt zur Entscheidung: Zusammenfassung des Diskussionsstands, präzise Entscheidungsfrage und Vorschlag für das Entscheidungsverfahren.',
          placeholder: 'Zusammenfassung: …\nEntscheidungsfrage: …\nVerfahren: …',
          sampleSolution:
            'Zusammenfassung: „Ich fasse zusammen: Für Option A sprechen die fertige Integration und der geringere Betriebsaufwand, dagegen die rund 30 % höheren Kosten. Für B sprechen der Preis und die Flexibilität, dagegen geschätzt 15 Personentage Zusatzaufwand und ein Wartungsrisiko. Neue Argumente sind in den letzten zehn Minuten nicht mehr dazugekommen."\nEntscheidungsfrage: „Zu entscheiden ist heute: Starten wir die Einführung im Januar mit Anbieter A oder mit Anbieter B?"\nVerfahren: „Mein Vorschlag: Wir machen eine Konsent-Runde – kann jemand mit Option A nicht leben? Wenn es schwerwiegende Einwände gibt, hören wir sie jetzt an; andernfalls halte ich A als Beschluss fest. Falls wir keinen Konsent finden, entscheidet Sarah als Budgetverantwortliche heute nach unserer Beratung."',
          checklist: [
            'Meine Zusammenfassung nennt beide Optionen mit ihren Kernargumenten neutral.',
            'Meine Entscheidungsfrage ist präzise und heute beantwortbar (keine neue Grundsatzdebatte).',
            'Ich habe ein klares Entscheidungsverfahren vorgeschlagen (Konsent, Mehrheit oder Einzelentscheid nach Beratung).',
            'Ich habe geregelt, was passiert, wenn das Verfahren keine Entscheidung liefert.',
          ],
        },
      ],
    },
    {
      id: 'meetings-results',
      title: 'Ergebnisse sichern',
      theory: [
        {
          kind: 'text',
          body: 'Das beste Meeting ist wertlos, wenn eine Woche später niemand mehr weiß, was beschlossen wurde – oder jeder etwas anderes erinnert. „Ich dachte, DU machst das" ist der klassische Schlusssatz von Meetings ohne Ergebnissicherung. Die gute Nachricht: Ergebnisse zu sichern kostet pro Meeting fünf Minuten Disziplin – und spart Folgetermine, Doppelarbeit und Konflikte.\n\nErgebnissicherung beginnt nicht nach dem Meeting, sondern währenddessen: Beschlüsse und Aufgaben werden in dem Moment festgehalten, in dem sie entstehen – sichtbar für alle, etwa im geteilten Dokument am Beamer.',
        },
        {
          kind: 'text',
          heading: 'Das Ergebnisprotokoll',
          body: 'Im Business-Alltag braucht es fast nie ein Verlaufsprotokoll („Herr Meier sagte, dass … worauf Frau Klein entgegnete …"), sondern ein Ergebnisprotokoll: Was wurde beschlossen, was ist offen, wer macht was bis wann. Eine halbe Seite reicht meistens – Hauptsache, sie ist präzise und kommt schnell.\n\nDie Kernregel: Das Protokoll geht innerhalb von 24 Stunden an alle Teilnehmenden und die zu informierenden Personen. Je später es kommt, desto mehr weichen die Erinnerungen voneinander ab – und desto später starten die Aufgaben. Profis schreiben live mit und verschicken direkt nach dem Termin; mit geteiltem Dokument entfällt das Verschicken ganz. Wichtig ist auch der Einwand-Mechanismus: „Einwände gegen das Protokoll bitte bis morgen 12 Uhr – danach gilt es als bestätigt." So wird aus einer Mail ein verbindliches Dokument.',
        },
        {
          kind: 'text',
          heading: 'Action Items: Wer macht was bis wann?',
          body: 'Das Herzstück der Ergebnissicherung sind Action Items – und jedes braucht drei Angaben: WER (genau eine verantwortliche Person, nie „das Team" oder „wir alle" – geteilte Verantwortung ist keine Verantwortung), WAS (so konkret, dass man später prüfen kann, ob es erledigt ist: „Angebotsentwurf an Berger senden" statt „Thema Berger vorantreiben") und BIS WANN (ein Datum, nicht „zeitnah" oder „asap").\n\nDer Verantwortliche muss die Aufgabe im Meeting aktiv angenommen haben – eine Aufgabe, die jemandem in Abwesenheit zugeteilt wurde, ist ein Wunsch, kein Action Item. Bewährt ist der Check-out am Meetingende: Die Moderation liest alle Action Items vor, jede verantwortliche Person bestätigt kurz. Das dauert zwei Minuten und beseitigt die häufigste Quelle von „Das war mir nicht klar."',
        },
        {
          kind: 'text',
          heading: 'Follow-up: Dranbleiben, bis es erledigt ist',
          body: 'Auch sauber dokumentierte Action Items erledigen sich nicht von selbst. Zum Follow-up gehört ein fester Mechanismus: Im nächsten Regeltermin ist der erste Agendapunkt der Blick auf die offenen Items aus dem letzten Protokoll – was ist erledigt, was hakt, was braucht Hilfe? Alternativ (oder zusätzlich) leben die Items in einem Board oder Taskmanagement-Tool, wo ihr Status für alle sichtbar ist.\n\nWichtig ist die Haltung dabei: Nachfassen ist keine Kontrolle, sondern Teil der Verlässlichkeitskultur – und es muss auch Konsequenzen haben dürfen. Wenn unerledigte Aufgaben folgenlos bleiben, lernt das Team schnell: Action Items sind unverbindliche Deko. Umgekehrt gilt für jeden Verantwortlichen: Wer merkt, dass eine Deadline wackelt, meldet sich VOR dem Termin – nicht erst, wenn jemand nachfragt.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Ergebnisprotokoll statt Verlaufsprotokoll: Beschlüsse, offene Punkte, Action Items – eine halbe Seite reicht.',
            'Protokoll binnen 24 Stunden verschicken, mit Einwandsfrist („gilt danach als bestätigt").',
            'Jedes Action Item hat WER (genau eine Person), WAS (prüfbar konkret) und BIS WANN (ein Datum).',
            'Check-out am Meetingende: Action Items vorlesen, Verantwortliche bestätigen aktiv.',
            'Follow-up fest verankern: Offene Items sind der erste Punkt des Folgetermins – und wackelnde Deadlines werden vorher gemeldet.',
          ],
        },
        {
          kind: 'example',
          title: 'Protokoll-Auszug nach dem Planungsmeeting',
          good: 'Beschluss: Release wird auf den 28.11. verschoben (einstimmig).\nAction Items:\n– Anna: Kunden Berger + Novak über neuen Termin informieren – bis Mi, 12.11.\n– Murat: Testplan an neuen Termin anpassen – bis Fr, 14.11.\n– Jana: Release-Notes-Entwurf ins Wiki stellen – bis Mo, 17.11.\nEinwände gegen dieses Protokoll bitte bis morgen 12 Uhr.',
          bad: '„Es wurde lange über den Releasetermin gesprochen und verschiedene Sichtweisen ausgetauscht. Man war sich einig, dass das Thema wichtig ist. Die Kundenkommunikation sollte zeitnah angegangen werden, außerdem will sich das Team um Testplan und Release Notes kümmern."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'meetings-results-q1',
          question: 'Warum sollte ein Action Item genau EINE verantwortliche Person haben?',
          options: [
            {
              text: 'Geteilte Verantwortung ist keine Verantwortung: Bei „das Team kümmert sich" fühlt sich am Ende niemand zuständig – eine Person kann sich Unterstützung holen, bleibt aber verantwortlich.',
              correct: true,
              explanation:
                'Genau: Verantwortungsdiffusion ist der häufigste Grund für unerledigte Aufgaben. Ein Name am Item heißt nicht, dass die Person alles allein macht – aber sie sorgt dafür, dass es passiert.',
            },
            {
              text: 'Damit bei Nichterledigung klar ist, wen man vor dem Team zur Rechenschaft ziehen kann.',
              correct: false,
              explanation:
                'Es geht um Klarheit und Verlässlichkeit, nicht um öffentliche Schuldzuweisung – die würde nur dazu führen, dass niemand mehr freiwillig Aufgaben übernimmt.',
            },
            {
              text: 'Weil Taskmanagement-Tools technisch nur eine Person pro Aufgabe zulassen.',
              correct: false,
              explanation:
                'Viele Tools erlauben sogar mehrere Assignees – gerade deshalb braucht es die bewusste Regel: Das Prinzip ist kommunikativ begründet, nicht technisch.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'meetings-results-q2',
          question:
            'Was unterscheidet ein Ergebnisprotokoll von einem Verlaufsprotokoll – und welches braucht der Business-Alltag?',
          options: [
            {
              text: 'Das Ergebnisprotokoll hält Beschlüsse, offene Punkte und Action Items fest, das Verlaufsprotokoll den Gesprächsverlauf – im Alltag reicht fast immer das Ergebnisprotokoll.',
              correct: true,
              explanation:
                'Richtig: Wer später wissen will, was gilt und wer was tut, braucht Ergebnisse, nicht den Wortwechsel. Verlaufsprotokolle sind Gremien und formalen Anlässen vorbehalten.',
            },
            {
              text: 'Das Verlaufsprotokoll ist die ausführlichere und damit immer bessere Variante.',
              correct: false,
              explanation:
                'Ausführlicher heißt nicht besser: Verlaufsprotokolle kosten viel Schreibzeit, werden selten gelesen und verstecken die entscheidenden Punkte zwischen Wortbeiträgen.',
            },
            {
              text: 'Ergebnisprotokolle sind nur bei Entscheidungsmeetings nötig – Diskussionsrunden brauchen gar kein Protokoll.',
              correct: false,
              explanation:
                'Auch Diskussionsrunden produzieren Festhaltenswertes: Zwischenstände, offene Fragen, nächste Schritte. Ohne Notiz beginnt die nächste Runde wieder bei null.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'meetings-results-s1',
          situation:
            'Im letzten Teammeeting hat Kollege Paul übernommen, bis heute die Preisliste zu aktualisieren – so steht es im Protokoll. Heute ist die Deadline, die Liste ist nicht da, und du brauchst sie morgen früh für ein Kundengespräch. Im Teamchat fragt gerade niemand nach.',
          choices: [
            {
              text: 'Paul direkt und sachlich ansprechen: „Im Protokoll steht die Preisliste für heute – ich brauche sie morgen 9 Uhr für Kunde Berger. Wie ist der Stand, und was brauchst du ggf. noch?"',
              quality: 'best',
              feedback:
                'Sehr gut: Du beziehst dich neutral auf die dokumentierte Vereinbarung, machst deine Abhängigkeit und Frist transparent und bietest Unterstützung an. Kein Vorwurf, kein öffentliches Anprangern – aber klares, zeitnahes Nachfassen. Genau so funktioniert Verlässlichkeitskultur.',
            },
            {
              text: 'Nichts sagen und abwarten – Paul kennt das Protokoll ja. Wenn die Liste morgen fehlt, kannst du im Kundengespräch wenigstens auf ihn verweisen.',
              quality: 'bad',
              feedback:
                'Du opferst dein Kundengespräch, um Recht zu behalten: Dem Kunden ist egal, wer intern geliefert hat. Ein Protokoll ersetzt das Nachfassen nicht – es macht es nur einfacher. Schweigen bis zum Schaden ist die teuerste Option.',
            },
            {
              text: 'Im Teamchat öffentlich posten: „@Paul, deine Deadline für die Preisliste ist HEUTE – siehe Protokoll."',
              quality: 'ok',
              feedback:
                'Nachfassen ist richtig, der öffentliche Pranger nicht: Vor dem ganzen Team wirkt die Nachricht wie eine Vorführung, und Paul geht in die Defensive. Die Direktnachricht oder der kurze Zuruf klären dasselbe schneller – öffentlich wird es erst, wenn das Team betroffen ist.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'meetings-results-f1',
          task: 'Aus eurem Marketingmeeting nimmst du diese losen Zusagen mit: „Wir sollten die Social-Media-Kampagne mal vorbereiten", „Jemand müsste das Budget mit der Geschäftsführung klären" und „Die Agentur-Angebote schauen wir uns demnächst an." Formuliere daraus drei vollständige Action Items (WER – WAS – BIS WANN) und einen Satz für das Protokoll, der die Bestätigungsregel festlegt.',
          placeholder: '1. WER: … WAS: … BIS WANN: …\n2. …\n3. …\nProtokollsatz: …',
          sampleSolution:
            '1. WER: Lisa – WAS: Konzeptentwurf für die Social-Media-Kampagne (Zielgruppe, Kanäle, Timing) im Wiki ablegen – BIS WANN: Fr, 24.10.\n2. WER: Tom – WAS: Budgetfreigabe über 15.000 Euro im Jour fixe mit der Geschäftsführung einholen und Ergebnis im Teamkanal posten – BIS WANN: Mi, 22.10.\n3. WER: ich – WAS: die drei vorliegenden Agentur-Angebote in einer Vergleichstabelle (Leistung, Preis, Referenzen) aufbereiten und ans Team senden – BIS WANN: Mo, 27.10.\nProtokollsatz: „Einwände gegen dieses Protokoll bitte bis morgen, 12 Uhr – danach gelten Beschlüsse und Action Items als bestätigt."',
          checklist: [
            'Jedes Action Item hat genau eine verantwortliche Person (kein „wir" oder „jemand").',
            'Jedes WAS ist so konkret, dass die Erledigung überprüfbar ist.',
            'Jedes Item hat ein konkretes Datum (kein „demnächst" oder „zeitnah").',
            'Ich habe eine Einwandsfrist formuliert, nach der das Protokoll verbindlich ist.',
          ],
        },
      ],
    },
  ],
}
