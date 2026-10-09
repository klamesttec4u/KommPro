import type { Module } from '@/types/content'

export const consultantQualification: Module = {
  id: 'consultant-qualification',
  title: 'Qualifizierungsgespräch: IT-Consultant',
  description:
    'Souverän durchs Quali-Gespräch beim Kunden: Vorbereitung, Selbstpräsentation als Consultant & Mendix-Entwickler, KI-Einsatz (Claude) überzeugend positionieren, typische Fragen und starke Rückfragen.',
  category: 'consulting',
  lessons: [
    {
      id: 'quali-basics',
      title: 'Das Qualifizierungsgespräch verstehen & vorbereiten',
      theory: [
        {
          kind: 'text',
          body: 'Ein Qualifizierungsgespräch ist kein klassisches Bewerbungsgespräch: Der Kunde prüft dich als externen Consultant für ein konkretes Projekt oder einen längerfristigen Vertrag. Es geht nicht um deine komplette Biografie, sondern um eine einzige Frage: „Kann diese Person ab Tag eins in unserem Projekt liefern – fachlich, methodisch und menschlich?"\n\nDie Rahmenbedingungen sind anders als bei einer Festanstellung: Die Entscheidung fällt oft schnell (manchmal noch am selben Tag), es gibt meist nur ein bis zwei Gespräche, und du konkurrierst mit anderen Profilen, die der Kunde parallel sieht. Dafür ist das Gespräch kürzer und fokussierter – typischerweise 45 bis 60 Minuten. Jede Minute zählt.',
        },
        {
          kind: 'text',
          heading: 'Wer sitzt dir gegenüber – und was prüft er?',
          body: 'Typische Runde: eine Führungskraft oder Projektleitung aus dem Fachbereich, ein technischer Ansprechpartner (Architekt, Lead Developer) und manchmal jemand aus Einkauf oder HR. Jeder prüft etwas anderes: Die Projektleitung will wissen, ob du selbstständig arbeitest und mit Stakeholdern umgehen kannst. Der Techniker testet, ob deine Mendix-Erfahrung echt ist. Der Einkauf achtet auf Verfügbarkeit und Konditionen.\n\nBei einer Rolle wie deiner – Entwicklung plus Pre-Sales- und Workshop-Unterstützung – kommt eine Besonderheit dazu: Das Gespräch selbst ist deine Arbeitsprobe. Wer dich für Kundentermine und Workshops einsetzen will, beobachtet genau, wie du dich präsentierst, wie strukturiert du antwortest und wie du mit kritischen Nachfragen umgehst. Deine Kommunikation im Gespräch IST der Beleg für deine Pre-Sales-Tauglichkeit.',
        },
        {
          kind: 'table',
          headers: ['Prüfkriterium', 'Was der Kunde wissen will', 'Dein Beleg'],
          rows: [
            [
              'Fachlichkeit (Mendix)',
              'Kann die Person wirklich entwickeln – oder nur Buzzwords?',
              'Konkrete Projektbeispiele: Domain Model, Microflows, Integrationen, Security, Deployment',
            ],
            [
              'Arbeitsweise & KI-Einsatz',
              'Arbeitet sie modern und effizient – aber kontrolliert?',
              'Wie du Claude & Co. nutzt: wofür, mit welchen Leitplanken, mit welchem Qualitätsgewinn',
            ],
            [
              'Kommunikation & Auftreten',
              'Können wir die Person vor unsere Stakeholder und Kunden stellen?',
              'Das Gespräch selbst: Struktur, Klarheit, Ruhe bei Nachfragen',
            ],
            [
              'Beratungs- & Workshop-Kompetenz',
              'Kann sie Anforderungen erheben, moderieren, präsentieren?',
              'Beispiele für Workshops, Demos, PoCs – mit Ergebnis',
            ],
            [
              'Fit & Verlässlichkeit',
              'Passt sie ins Team? Bleibt sie über die Vertragslaufzeit?',
              'Ehrliche Verfügbarkeit, Interesse am Projekt, konkrete Rückfragen',
            ],
          ],
        },
        {
          kind: 'text',
          heading: 'Die Vorbereitung entscheidet',
          body: 'Recherchiere den Kunden: Branche, Produkte, aktuelle Themen – und vor allem: Warum setzt er auf Mendix bzw. Low-Code? Gibt es eine bestehende Mendix-Landschaft oder startet er neu? Schon zwei, drei fundierte Bezüge („Ich habe gesehen, dass Sie …") heben dich von Kandidaten ab, die nur ihr Profil runterbeten.\n\nZerlege dann das Anforderungsprofil der Ausschreibung Zeile für Zeile und ordne jeder Anforderung einen konkreten Beleg aus deiner Erfahrung zu. Bereite drei bis vier Projektgeschichten nach der STAR-Methode vor (Situation, Task, Action, Result), die zusammen alle Kernanforderungen abdecken. Und: Kenne dein eigenes Profil auswendig – alles, was in deinem CV steht, darf abgefragt werden. Bei Remote-Gesprächen gilt zusätzlich: Technik vorher testen, Kamera auf Augenhöhe, ruhiger Hintergrund, Headset.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Das Quali-Gespräch prüft: Kann diese Person ab Tag eins in DIESEM Projekt liefern?',
            'Bei einer Rolle mit Pre-Sales- und Workshop-Anteil ist das Gespräch selbst deine Arbeitsprobe.',
            'Anforderungsprofil zerlegen und jede Anforderung mit einem konkreten Beleg verknüpfen.',
            'Drei bis vier STAR-Projektgeschichten vorbereiten, die die Kernanforderungen abdecken.',
            'Kunden recherchieren: Warum Mendix/Low-Code? Bestehende Landschaft oder Neustart?',
          ],
        },
        {
          kind: 'example',
          title: 'Einstieg: „Erzählen Sie doch kurz etwas über sich"',
          good: '„Gern – in zwei Minuten: Ich bin seit sechs Jahren IT-Consultant mit Schwerpunkt Low-Code. Die letzten drei Jahre habe ich hauptsächlich Mendix-Anwendungen gebaut, zuletzt ein Self-Service-Portal mit SAP-Anbindung für einen Maschinenbauer. Neben der Entwicklung übernehme ich regelmäßig Anforderungs-Workshops und unterstütze im Pre-Sales mit Demos und PoCs – das ist genau die Kombination, die Sie suchen. In der Entwicklung arbeite ich KI-gestützt, etwa mit Claude für Code-Reviews und Dokumentation. Deshalb hat mich Ihre Ausschreibung sofort angesprochen."',
          bad: '„Also, angefangen habe ich 2012 nach dem Abi mit einer Ausbildung, dann habe ich erstmal bei einer kleinen Firma Support gemacht, danach bin ich zu einem Systemhaus gewechselt, da war ich dreieinhalb Jahre, dann kam Corona, da habe ich mich umorientiert … [acht Minuten chronologischer Lebenslauf, die Rolle kommt nicht vor]"',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'quali-basics-q1',
          question:
            'Was unterscheidet ein Qualifizierungsgespräch für einen Consultant-Vertrag am stärksten von einem klassischen Bewerbungsgespräch?',
          options: [
            {
              text: 'Der Kunde prüft die Lieferfähigkeit für ein konkretes Projekt – die Entscheidung fällt schnell, und das Gespräch selbst gilt als Arbeitsprobe.',
              correct: true,
              explanation:
                'Richtig. Es zählt der Projekt-Fit ab Tag eins, nicht die Langzeit-Biografie. Und gerade bei Rollen mit Kundenkontakt wird dein Auftreten im Gespräch direkt als Beleg deiner Beratungskompetenz gewertet.',
            },
            {
              text: 'Es ist lockerer, weil man als Externer ja nicht fest eingestellt wird – Smalltalk reicht meist aus.',
              correct: false,
              explanation:
                'Das Gegenteil ist der Fall: Der Kunde zahlt Tagessätze und erwartet sofortige Produktivität. Die Prüfung ist oft härter und fokussierter als in Festanstellungs-Interviews.',
            },
            {
              text: 'Der Unterschied liegt vor allem darin, dass keine fachlichen Fragen gestellt werden – das klärt der Vermittler vorab.',
              correct: false,
              explanation:
                'Fachliche Tiefenprüfung ist der Kern fast jedes Quali-Gesprächs – gerade bei Entwicklerrollen sitzt dafür meist ein Architekt oder Lead Developer mit am Tisch.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'quali-basics-q2',
          question: 'Was ist der wirksamste Vorbereitungsschritt auf ein Qualifizierungsgespräch?',
          options: [
            {
              text: 'Das Anforderungsprofil Zeile für Zeile zerlegen und jede Anforderung mit einem konkreten eigenen Beleg (Projekt, Ergebnis) verknüpfen.',
              correct: true,
              explanation:
                'Richtig. Dieses Mapping sorgt dafür, dass du zu jeder Anforderung sofort ein passendes Beispiel parat hast – und der Kunde hört genau das, was er sucht.',
            },
            {
              text: 'Möglichst viele allgemeine Interviewfragen auswendig lernen und Standardantworten einstudieren.',
              correct: false,
              explanation:
                'Auswendig gelernte Standardantworten wirken unecht und passen selten zur konkreten Rolle. Entscheidend ist der Bezug zwischen DIESEM Projekt und DEINER Erfahrung.',
            },
            {
              text: 'Den eigenen Tagessatz gut begründen können – darum dreht sich das Gespräch am Ende ohnehin.',
              correct: false,
              explanation:
                'Konditionen laufen meist über den Vermittler oder Einkauf und sind selten Kern des Fachgesprächs. Wer primär über den Preis redet, weckt Zweifel an der inhaltlichen Substanz.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'quali-basics-s1',
          situation:
            'In der Ausschreibung steht „Erfahrung mit OData-Integrationen wünschenswert". Du hast in Mendix bisher vor allem REST-Schnittstellen gebaut, OData nur einmal am Rande genutzt. Im Gespräch fragt der Architekt: „Wie fit sind Sie in OData?"',
          choices: [
            {
              text: '„Ehrlich gesagt: REST ist mein Schwerpunkt – damit habe ich mehrere produktive Integrationen gebaut, zum Beispiel an SAP. OData habe ich bisher einmal konsumiert. Die Konzepte sind verwandt, und ich arbeite mich erfahrungsgemäß schnell ein – das war bei mir zuletzt mit der Workflow-Engine genauso."',
              quality: 'best',
              feedback:
                'Stark: ehrlich zur Lücke stehen, verwandte echte Stärke belegen und die Einarbeitungsfähigkeit mit einem Beispiel untermauern. Genau so gewinnt man Vertrauen – Consultants werden selten wegen einer Teillücke abgelehnt, aber fast immer wegen Bluffs, die auffliegen.',
            },
            {
              text: '„OData? Kein Problem, mache ich ständig." – und du hoffst, dass keine Detailfrage kommt.',
              quality: 'bad',
              feedback:
                'Sehr riskant: Ein Architekt stellt fast sicher eine Nachfrage (z.B. zu Query-Optionen oder zum Unterschied published/consumed OData in Mendix). Fliegt der Bluff auf, ist nicht nur diese Antwort entwertet, sondern deine gesamte Glaubwürdigkeit.',
            },
            {
              text: '„Dazu kann ich nicht viel sagen, OData hatte ich noch nicht wirklich." – und du wartest auf die nächste Frage.',
              quality: 'ok',
              feedback:
                'Ehrlich, aber verschenkt: Du lässt die Lücke unkommentiert stehen, statt deine verwandte REST-Erfahrung und deine Lernfähigkeit anzubieten. Eine Lücke zuzugeben ist gut – sie aktiv zu überbrücken ist besser.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'quali-basics-f1',
          task: 'Übungs-Mapping: Eine Ausschreibung nennt diese drei Anforderungen:\n1. „Mehrjährige Erfahrung in der Mendix-Entwicklung"\n2. „Unterstützung bei Pre-Sales-Terminen und Kunden-Workshops"\n3. „Moderne, effiziente Arbeitsweise (gern mit KI-Unterstützung)"\n\nSchreibe zu jeder Anforderung einen konkreten Beleg aus deiner (ggf. fiktiven) Erfahrung – je ein bis zwei Sätze mit Projekt und Ergebnis.',
          placeholder: '1. Mendix: …\n2. Pre-Sales/Workshops: …\n3. KI-gestützte Arbeitsweise: …',
          sampleSolution:
            '1. Mendix: „Drei Jahre Mendix-Entwicklung in vier Projekten, zuletzt ein Lieferantenportal mit ca. 800 Nutzern: Domain Model, Microflows, REST-Anbindung an SAP, Rollen-/Rechtekonzept – von der ersten User Story bis zum Go-live."\n2. Pre-Sales/Workshops: „Ich habe in sechs Pre-Sales-Terminen die technische Demo übernommen und zweitägige Anforderungs-Workshops moderiert; aus drei dieser Termine wurden Aufträge."\n3. KI: „Ich nutze Claude täglich für Code-Reviews meiner Java-Actions, Testfall-Entwürfe und Dokumentation – das spart mir rund 20 % Zeit, und jedes Ergebnis wird von mir geprüft, Kundendaten bleiben außen vor."',
          checklist: [
            'Ich habe zu jeder der drei Anforderungen einen eigenen Beleg formuliert.',
            'Jeder Beleg enthält ein konkretes Projekt oder eine konkrete Situation (nicht nur „habe ich Erfahrung mit").',
            'Mindestens ein Beleg enthält ein messbares oder sichtbares Ergebnis.',
            'Beim KI-Punkt habe ich auch den verantwortungsvollen Umgang (Prüfung, Datenschutz) erwähnt.',
          ],
        },
      ],
    },
    {
      id: 'quali-pitch',
      title: 'Selbstpräsentation: Mendix, Beratung & KI überzeugend erzählen',
      theory: [
        {
          kind: 'text',
          heading: 'Der 2-Minuten-Pitch: Rolle – Relevanz – Beweis',
          body: 'Fast jedes Quali-Gespräch beginnt mit „Erzählen Sie etwas über sich". Diese zwei bis drei Minuten entscheiden über den ersten Eindruck – und sie sind komplett planbar. Baue den Pitch von der Rolle her: Nicht dein Lebenslauf ist der rote Faden, sondern das Anforderungsprofil.\n\nBewährte Struktur: (1) Wer du bist, in einem Satz („IT-Consultant mit Schwerpunkt Mendix und Low-Code"). (2) Was dich für genau diese Rolle qualifiziert – die zwei, drei wichtigsten Übereinstimmungen mit dem Profil. (3) Ein konkreter Beweis, etwa dein letztes relevantes Projekt mit Ergebnis. (4) Warum dich diese Aufgabe reizt. Danach: aufhören und den Ball zurückgeben. Wer nach drei Minuten noch redet, verliert.',
        },
        {
          kind: 'text',
          heading: 'Projektgeschichten mit STAR erzählen',
          body: 'Auf „Erzählen Sie von einem Projekt" antworten viele mit einer Technologie-Aufzählung. Besser ist eine Geschichte nach STAR: Situation (Kontext in ein, zwei Sätzen), Task (deine konkrete Aufgabe und Verantwortung), Action (was DU getan hast – hier gehören die Mendix-Details hin), Result (das Ergebnis, möglichst messbar: Nutzerzahlen, eingesparte Zeit, eingehaltener Go-live).\n\nZwei Feinheiten: Sage „ich", wo du es warst, und „wir", wo es das Team war – Dauer-„wir" macht deinen Beitrag unsichtbar, Dauer-„ich" wirkt unkollegial. Und wähle die Geschichte passend zur Frage: Für die Technikrunde eine mit Architektur-Tiefe, für die Projektleitung eine mit Stakeholder-Management.',
        },
        {
          kind: 'text',
          heading: 'Mendix konkret – aber nutzenorientiert',
          body: 'Der technische Prüfer will Substanz hören: Domain Model und Assoziationen, Microflows vs. Nanoflows, Security (Modulrollen, Entity Access, XPath-Constraints), Integrationen (REST, OData, Java Actions), Deployment (Mendix Cloud, CI/CD). Lass diese Begriffe natürlich in deine Projektgeschichten einfließen, statt sie als Liste aufzusagen.\n\nDie Projektleitung dagegen will Nutzen hören: „Wir haben den Antragsprozess von zwei Wochen auf zwei Tage verkürzt" schlägt „Ich habe 40 Microflows gebaut". Die Kunst ist die Verbindung: erst der Nutzen, dann auf Nachfrage die technische Tiefe. Das ist exakt die Fähigkeit, die du später im Pre-Sales brauchst – und genau so wird sie im Gespräch wahrgenommen.',
        },
        {
          kind: 'text',
          heading: 'Claude & KI: als Stärke positionieren, nicht als Risiko',
          body: 'KI-gestützte Entwicklung ist ein Differenzierungsmerkmal – wenn du sie richtig erzählst. Konkrete, glaubwürdige Einsatzfelder rund um Mendix: Code-Review und Generierung von Java Actions, komplexe XPath- und OQL-Ausdrücke, Testfall-Entwürfe, technische Dokumentation, Aufbereitung von User Stories und Workshop-Agenden. Benenne den Effekt („schneller, weniger Fehler, bessere Doku") statt nur das Tool.\n\nEntscheidend: Adressiere die unausgesprochene Sorge des Kunden, bevor er sie ausspricht. Also immer im selben Atemzug die Leitplanken nennen: Jedes KI-Ergebnis wird von dir geprüft und verantwortet, sensible Kundendaten landen nicht in beliebigen Tools, und du richtest dich nach den KI-Richtlinien des Kunden. So wird aus „Der lässt die KI arbeiten" ein „Der arbeitet moderner als andere – und hat es im Griff".',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Pitch-Struktur: Wer bin ich – was passt zur Rolle – ein Beweis – warum reizt mich das. Maximal drei Minuten.',
            'Projektgeschichten nach STAR erzählen, Ergebnisse quantifizieren, „ich" und „wir" bewusst einsetzen.',
            'Erst Nutzen, dann Technik-Tiefe auf Nachfrage – das ist zugleich die Pre-Sales-Arbeitsprobe.',
            'Mendix-Substanz zeigen: Domain Model, Microflows/Nanoflows, Security, Integrationen, Deployment.',
            'KI-Einsatz offensiv und mit Leitplanken erzählen: geprüfte Ergebnisse, Datenschutz, Kunden-Richtlinien.',
          ],
        },
        {
          kind: 'example',
          title: 'Projektfrage: „Was war Ihr letztes Mendix-Projekt?"',
          good: '„Ein Lieferantenportal für einen Maschinenbauer – Ausgangslage: Bestellanfragen liefen per E-Mail und Excel, Durchlaufzeit zwei Wochen. Meine Aufgabe: die Anwendung als Lead Developer konzipieren und bauen. Ich habe das Domain Model entworfen, die Prozesslogik in Microflows umgesetzt, SAP per REST angebunden und das Rechtekonzept über Modulrollen und XPath-Constraints abgebildet. Ergebnis: Go-live nach vier Monaten, Durchlaufzeit heute unter zwei Tagen, rund 800 aktive Nutzer. Gern erzähle ich mehr zur SAP-Anbindung – das war der kniffligste Teil."',
          bad: '„Wir haben da ein Portal gemacht. Also mit Mendix halt, Standard-Sachen: Microflows, Domain Model, bisschen REST. Lief eigentlich ganz gut, war ein größeres Team, ich hab so verschiedene Sachen gemacht."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'quali-pitch-q1',
          question:
            'Wofür steht STAR bei Projektbeispielen – und warum ist die Methode im Quali-Gespräch so wirksam?',
          options: [
            {
              text: 'Situation, Task, Action, Result – sie erzwingt eine Geschichte mit deinem konkreten Beitrag und einem Ergebnis statt einer Technologie-Aufzählung.',
              correct: true,
              explanation:
                'Richtig. STAR gibt deiner Antwort einen Spannungsbogen und stellt sicher, dass der Kunde hört, was ER wissen will: Was hast DU getan, und was kam dabei heraus?',
            },
            {
              text: 'Skills, Tools, Architecture, Requirements – die vier Themenblöcke, die man in technischen Interviews abdecken muss.',
              correct: false,
              explanation:
                'Nein – STAR strukturiert Erfahrungsgeschichten: Situation, Task, Action, Result. Es geht um erzählte Projekte, nicht um Themenblöcke.',
            },
            {
              text: 'Die Methode besagt, dass man bei jeder Antwort mit dem Resultat beginnen und die Situation weglassen sollte.',
              correct: false,
              explanation:
                'Ohne kurze Situation fehlt dem Zuhörer der Kontext, um das Resultat einzuordnen. Die Reihenfolge Situation → Task → Action → Result erzeugt genau die Nachvollziehbarkeit, die überzeugt.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'quali-pitch-q2',
          question:
            'Wie positionierst du deinen KI-Einsatz (z.B. Claude) im Qualifizierungsgespräch am besten?',
          options: [
            {
              text: 'Offensiv mit konkreten Einsatzfeldern und messbarem Effekt – und im selben Atemzug mit Leitplanken: geprüfte Ergebnisse, kein Abfluss von Kundendaten, Kunden-Richtlinien.',
              correct: true,
              explanation:
                'Richtig. So wird KI vom Risikothema zum Differenzierungsmerkmal: Du wirkst moderner als andere Kandidaten UND nimmst die Governance-Sorge des Kunden vorweg.',
            },
            {
              text: 'Lieber gar nicht erwähnen – viele Kunden sind skeptisch, und was sie nicht wissen, kann nicht gegen dich verwendet werden.',
              correct: false,
              explanation:
                'Verschweigen verschenkt ein Differenzierungsmerkmal – und wirkt fatal, wenn es später auffällt. Außerdem stand die moderne Arbeitsweise hier sogar im Anforderungsprofil.',
            },
            {
              text: 'Groß herausstellen, dass die KI inzwischen den Großteil der Entwicklung übernimmt und du dadurch deutlich günstiger anbieten kannst.',
              correct: false,
              explanation:
                'Das weckt genau die falschen Assoziationen: Kontrollverlust, Qualitätsrisiko, austauschbare Leistung. Die KI ist dein Werkzeug und Hebel – verantwortlich für das Ergebnis bist du.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'quali-pitch-s1',
          situation:
            'Du erwähnst im Gespräch, dass du KI-gestützt entwickelst. Der Projektleiter lehnt sich zurück und fragt spitz: „Das heißt, die KI schreibt Ihren Code – wofür bezahlen wir dann eigentlich Sie?"',
          choices: [
            {
              text: '„Gute Frage – Sie bezahlen für das Ergebnis und die Verantwortung. Die KI beschleunigt mich bei Routinearbeit: Java-Action-Entwürfe, Testfälle, Doku. Architektur, Domain Model und jede fachliche Entscheidung bleiben bei mir, und jedes generierte Artefakt prüfe ich, bevor es ins Projekt geht. Unterm Strich bekommen Sie dadurch mehr geprüfte Leistung pro Tag – und Kundendaten gebe ich grundsätzlich nicht in KI-Tools, ohne dass Ihre Richtlinien das ausdrücklich erlauben."',
              quality: 'best',
              feedback:
                'Sehr gut: Du nimmst die Provokation sportlich, verschiebst den Fokus auf Ergebnis und Verantwortung, nennst konkrete Einsatzfelder und adressierst Qualität und Datenschutz unaufgefordert. Genau diese Souveränität sucht der Kunde auch für Pre-Sales-Situationen.',
            },
            {
              text: '„Nein, nein, so viel nutze ich die KI gar nicht – das meiste mache ich natürlich klassisch von Hand."',
              quality: 'bad',
              feedback:
                'Du knickst ein und entwertest deine eigene Aussage von vorhin – das wirkt unsicher und inkonsistent. Außerdem verlierst du das Differenzierungsmerkmal, das du gerade erst aufgebaut hast.',
            },
            {
              text: '„Die KI ist nur ein Werkzeug, so wie eine IDE auch. Das machen heute doch alle so."',
              quality: 'ok',
              feedback:
                'Die Richtung stimmt (Werkzeug-Framing), aber die Antwort bleibt defensiv und pauschal: kein konkreter Nutzen, keine Leitplanken, keine Verantwortungsübernahme. Die Chance, aus der kritischen Frage einen Punktgewinn zu machen, bleibt liegen.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'quali-pitch-f1',
          task: 'Schreibe deinen eigenen 2-Minuten-Pitch für die Rolle „Consultant & Mendix-Entwickler mit Pre-Sales- und Workshop-Anteil" auf – nach der Struktur: Wer bin ich / Was passt zur Rolle / Ein Beweis / Warum reizt mich das. Sprich ihn danach am besten einmal laut (Trainingscenter: Pitch-Timer, 90 Sekunden).',
          placeholder:
            'Wer ich bin: …\nWas zur Rolle passt: …\nMein Beweis: …\nWarum mich die Rolle reizt: …',
          sampleSolution:
            'Wer ich bin: „Ich bin IT-Consultant mit Schwerpunkt Low-Code und entwickle seit drei Jahren hauptsächlich mit Mendix."\nWas zur Rolle passt: „Ihre Rolle verbindet Entwicklung, Workshops und Pre-Sales – genau diese Kombination lebe ich heute schon: Ich baue Anwendungen selbst und stehe gleichzeitig regelmäßig vor Kunden."\nMein Beweis: „Zuletzt habe ich ein Lieferantenportal mit SAP-Anbindung als Lead Developer verantwortet – Go-live nach vier Monaten, 800 Nutzer – und parallel die Pre-Sales-Demos gehalten, aus denen zwei Folgeaufträge entstanden sind. In der Entwicklung nutze ich Claude als KI-Werkzeug für Reviews, Tests und Doku – mit klaren Leitplanken."\nWarum die Rolle: „Mich reizt, dass ich hier beides einbringen kann – und ein längerfristiges Engagement gibt mir die Möglichkeit, nicht nur zu bauen, sondern Ihre Mendix-Landschaft wirklich mitzugestalten."',
          checklist: [
            'Ich habe alle vier Bausteine (Wer – Passung – Beweis – Motivation) abgedeckt.',
            'Mein Beweis enthält ein konkretes Projekt mit einem Ergebnis.',
            'Die Kombination Entwicklung + Pre-Sales/Workshops kommt explizit vor.',
            'Der KI-Einsatz ist erwähnt – inklusive Leitplanken.',
            'Laut gesprochen bleibe ich unter drei Minuten.',
          ],
        },
      ],
    },
    {
      id: 'quali-questions',
      title: 'Typische Fragen, starke Rückfragen & Pre-Sales-Kompetenz zeigen',
      theory: [
        {
          kind: 'text',
          body: 'Die Fragen im Quali-Gespräch lassen sich vier Typen zuordnen: fachliche Fragen (Mendix-Konzepte, Architektur, Best Practices), methodische Fragen (Vorgehen, Scrum, Anforderungserhebung, Workshops), situative Fragen („Was tun Sie, wenn …?") und kritische Fragen (Lücken im Profil, Verfügbarkeit, Wechselhistorie). Wer die Typen erkennt, kann gezielt antworten: Bei fachlichen Fragen zählt Präzision, bei situativen dein Vorgehen, bei kritischen deine Souveränität.\n\nEine Grundregel für alle Typen: erst kurz und klar antworten, dann vertiefen, wenn Interesse besteht. Prüfer schätzen Kandidaten, die eine Frage in zwei Sätzen beantworten können – und misstrauen denen, die zu jeder Frage einen Monolog starten.',
        },
        {
          kind: 'table',
          headers: ['Typische Frage', 'Worauf es ankommt'],
          rows: [
            [
              '„Was ist der Unterschied zwischen Microflows und Nanoflows?"',
              'Präzise und knapp: Microflows laufen serverseitig (Transaktionen, DB-Zugriff), Nanoflows clientseitig – wichtig für Offline-Szenarien und schnelle UI-Logik. Ein Einsatzbeispiel nennen.',
            ],
            [
              '„Wie gehen Sie mit unklaren Anforderungen um?"',
              'Vorgehen zeigen: Workshop/Interviews, User Stories mit Akzeptanzkriterien, früher Prototyp in Mendix als Diskussionsgrundlage – Low-Code als Stärke nutzen.',
            ],
            [
              '„Wie sichern Sie Qualität in Ihren Mendix-Apps?"',
              'Mehrere Ebenen: Modellrichtlinien, Code-Reviews (auch KI-gestützt), Unit-Tests für Microflows, Testfälle je Story, SonarQube/QSM falls bekannt.',
            ],
            [
              '„Warum sollten wir uns für Sie entscheiden?"',
              'Kein Superlativ-Monolog, sondern Profil-Match: die zwei, drei Anforderungen nennen, die du nachweislich am besten abdeckst – plus ein Satz zum Fit.',
            ],
            [
              '„Wo sind Ihre Grenzen / Schwächen?"',
              'Echte, aber unkritische Lücke nennen plus Umgang damit („Natives Mobile habe ich erst einmal gemacht – dafür arbeite ich mich schnell ein, zuletzt bei X bewiesen"). Nie: „Ich habe keine Schwächen."',
            ],
          ],
        },
        {
          kind: 'text',
          heading: 'Pre-Sales- und Workshop-Kompetenz belegen',
          body: 'Wenn die Rolle Pre-Sales und Workshops umfasst, brauchst du dafür eigene Belege – „kann ich bestimmt auch" reicht nicht. Gute Belege: eine Demo oder ein PoC, den du vor Entscheidern gehalten hast; ein Anforderungs-Workshop, den du moderiert hast (mit Teilnehmerzahl und Ergebnis); eine Situation, in der du Fachbereich und IT zusammengebracht hast.\n\nZeige dabei, dass du die Pre-Sales-Denkweise verstanden hast: Es geht nicht darum, Features zu zeigen, sondern das Problem des Kunden zu verstehen und den Nutzen der Lösung erlebbar zu machen – etwa mit einem klickbaren Mendix-Prototyp statt Folien. Wer im Gespräch so argumentiert, beweist Pre-Sales-Kompetenz, ohne sie behaupten zu müssen.',
        },
        {
          kind: 'text',
          heading: 'Deine Rückfragen: das unterschätzte Signal',
          body: 'Am Ende kommt fast immer: „Haben Sie noch Fragen?" Das ist keine Höflichkeitsfloskel, sondern deine Chance, Seniorität zu zeigen. Starke Rückfragen richten sich auf das Projekt und die Zusammenarbeit: Was ist das wichtigste Ziel der nächsten sechs Monate? Woran messen Sie den Erfolg der Rolle? Wie sieht die bestehende Mendix-Landschaft aus – Version, Anzahl Apps, Governance, DevOps? Wie groß ist der erwartete Pre-Sales-Anteil wirklich? Wie arbeitet das Team – Scrum, Review-Prozesse, Remote-Anteil?\n\nUngünstig als Erstes: Fragen zu Urlaub, Spesen oder Ratenerhöhung – das gehört in den Vertragsprozess, nicht ins Fachgespräch. Und ganz zum Schluss: aktiv den nächsten Schritt erfragen („Wie geht es weiter, bis wann entscheiden Sie?") – das zeigt Verbindlichkeit und gibt dir Planungssicherheit.',
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Vier Fragetypen: fachlich, methodisch, situativ, kritisch – erkenne den Typ und antworte passend.',
            'Erst kurz und klar antworten, dann auf Nachfrage vertiefen – keine Monologe.',
            'Bei Wissenslücken: ehrlich sein, verwandte Stärke anbieten, Einarbeitungsfähigkeit belegen.',
            'Pre-Sales-Kompetenz mit konkreten Demos, PoCs und Workshops belegen – und durch nutzenorientiertes Antworten im Gespräch selbst zeigen.',
            'Rückfragen vorbereiten (Ziele, Erfolgskriterien, Mendix-Landschaft, Teamarbeit) und den nächsten Schritt aktiv erfragen.',
          ],
        },
        {
          kind: 'example',
          title: 'Schlussfrage: „Haben Sie noch Fragen an uns?"',
          good: '„Ja, drei: Woran würden Sie nach sechs Monaten festmachen, dass die Besetzung ein Erfolg war? Wie sieht Ihre Mendix-Landschaft heute aus – wie viele Apps, welche Version, gibt es schon Entwicklungsrichtlinien? Und wie hoch ist der Pre-Sales-Anteil realistisch – reden wir über gelegentliche Termine oder einen festen Teil der Woche?"',
          bad: '„Nein, eigentlich ist alles klar. Ach doch: Wie viele Urlaubstage kann ich nehmen, und wird das Hotel bei Vor-Ort-Terminen gestellt?"',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'quali-questions-q1',
          question:
            'Der Architekt stellt eine Mendix-Detailfrage, deren Antwort du nicht sicher weißt. Was ist die beste Strategie?',
          options: [
            {
              text: 'Kurz und ehrlich einordnen, was du weißt und was nicht, laut strukturiert herleiten, wie du es herausfinden würdest – und eine verwandte, sichere Erfahrung anbieten.',
              correct: true,
              explanation:
                'Richtig. Prüfer testen oft bewusst die Grenze deines Wissens – sie wollen sehen, WIE du mit der Grenze umgehst. Strukturiertes Herleiten plus Ehrlichkeit wirkt stärker als jede geratene Antwort.',
            },
            {
              text: 'Selbstbewusst eine plausible Antwort geben – Unsicherheit zeigen wäre im Quali-Gespräch ein K.-o.-Kriterium.',
              correct: false,
              explanation:
                'Gefährlich: Der Fragende kennt die richtige Antwort fast immer. Eine falsche, aber selbstbewusst vorgetragene Antwort ist das eigentliche K.-o.-Kriterium, weil sie alle anderen Aussagen entwertet.',
            },
            {
              text: 'Die Frage elegant umschiffen und auf ein Thema umlenken, das du gut beherrschst.',
              correct: false,
              explanation:
                'Auffälliges Ausweichen registrieren erfahrene Interviewer sofort – und haken dann erst recht nach. Die Lücke kurz einzuräumen und zu überbrücken ist souveräner als jedes Ablenkungsmanöver.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'quali-questions-q2',
          question: 'Welche Rückfrage am Gesprächsende hinterlässt den stärksten Eindruck?',
          options: [
            {
              text: '„Woran würden Sie nach sechs Monaten festmachen, dass die Besetzung dieser Rolle ein Erfolg war?"',
              correct: true,
              explanation:
                'Richtig. Die Frage zeigt Ergebnisorientierung und Consultant-Denke: Du interessierst dich für den Erfolgsmaßstab des Kunden – genau die Haltung, die er auch in Workshops und Pre-Sales von dir erwartet.',
            },
            {
              text: '„Wie sind denn die Arbeitszeiten geregelt, und ab wann kann man freitags ins Homeoffice?"',
              correct: false,
              explanation:
                'Legitime Themen – aber als zentrale Rückfrage im Fachgespräch senden sie das Signal „Komfort vor Projekt". Solche Punkte gehören in den Vertrags- bzw. Vermittlerprozess.',
            },
            {
              text: 'Gar keine Rückfrage stellen – das signalisiert, dass das Gespräch alle Punkte vollständig geklärt hat.',
              correct: false,
              explanation:
                'Keine Fragen zu haben wirkt nicht vorbereitet oder desinteressiert. Ein Consultant, der später Anforderungen erheben soll, beweist genau hier, dass er gute Fragen stellen kann.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'quali-questions-s1',
          situation:
            'Mitten im Gespräch sagt die Projektleiterin: „Angenommen, Sie sind bei uns an Bord. Der Vertrieb nimmt Sie nächste Woche zu einem Erstgespräch mit – ein Interessent überlegt, ob Low-Code für ihn taugt, ist aber skeptisch: ‚Spielzeug, skaliert nicht, Vendor-Lock-in.‘ Wie treten Sie da auf?"',
          choices: [
            {
              text: '„Zuerst würde ich verstehen wollen, woher die Skepsis kommt und welches Problem der Kunde eigentlich lösen will – danach richtet sich alles Weitere. Auf die Einwände würde ich ehrlich eingehen: Wo Low-Code stark ist, wo die Grenzen liegen und wie man Lock-in-Risiken architektonisch begrenzt. Wenn möglich, zeige ich lieber einen kleinen Prototyp zu seinem konkreten Fall als zwanzig Folien – erleben überzeugt mehr als behaupten."',
              quality: 'best',
              feedback:
                'Sehr gut: Erst Bedarf und Skepsis verstehen, Einwände ernst nehmen statt wegreden, Grenzen ehrlich benennen (das schafft Glaubwürdigkeit!) und der Prototyp-Ansatz nutzt die Stärke von Mendix im Pre-Sales optimal aus. Diese Antwort IST die Arbeitsprobe.',
            },
            {
              text: '„Ich würde dem Kunden die Mendix-Plattform präsentieren: Studio Pro, Marketplace, Cloud-Deployment, alle Features einmal durch – dann sieht er ja, was alles geht."',
              quality: 'ok',
              feedback:
                'Engagiert, aber Feature-zentriert: Ein skeptischer Interessent wird von einer Funktions-Tour selten überzeugt, weil sie sein Problem nicht adressiert. Erst Bedarf verstehen, dann gezielt zeigen – sonst bestätigt die Demo sogar das „Spielzeug"-Vorurteil.',
            },
            {
              text: '„Ich bin in erster Linie Entwickler – fürs Verkaufen wäre dann ja der Vertriebskollege zuständig, ich würde mich auf die technischen Fragen beschränken."',
              quality: 'bad',
              feedback:
                'Damit lehnst du einen zentralen Teil der ausgeschriebenen Rolle ab. Der Kunde sucht ausdrücklich jemanden, der Pre-Sales unterstützt – diese Antwort stellt die Passung grundsätzlich in Frage.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'quali-questions-f1',
          task: 'Formuliere drei starke Rückfragen, die du am Ende deines Qualifizierungsgesprächs stellen würdest – mindestens eine zur Mendix-Landschaft/Arbeitsweise und eine zu Zielen oder Erfolgskriterien der Rolle.',
          placeholder: '1. …\n2. …\n3. …',
          sampleSolution:
            '1. „Woran machen Sie nach sechs Monaten fest, dass diese Rolle erfolgreich besetzt wurde – was muss bis dahin sichtbar geworden sein?"\n2. „Wie sieht Ihre Mendix-Landschaft heute aus: wie viele Anwendungen, welche Version, gibt es Entwicklungsrichtlinien und eine CI/CD-Pipeline – und wo drückt aktuell der Schuh?"\n3. „Wie hoch ist der Pre-Sales- und Workshop-Anteil realistisch über das Jahr gesehen – und wer bereitet diese Termine heute vor, mit wem würde ich da zusammenarbeiten?"\n(Abschluss: „Und wie geht es nach heute weiter – bis wann wollen Sie entscheiden?")',
          checklist: [
            'Ich habe drei konkrete, projektbezogene Rückfragen formuliert.',
            'Mindestens eine Frage betrifft die Mendix-Landschaft oder die Arbeitsweise des Teams.',
            'Mindestens eine Frage betrifft Ziele oder Erfolgskriterien der Rolle.',
            'Keine meiner Fragen dreht sich primär um Komfort-Themen (Urlaub, Spesen, Rate).',
            'Ich habe daran gedacht, den nächsten Schritt im Prozess zu erfragen.',
          ],
        },
      ],
    },
    {
      id: 'quali-reference-call',
      title: 'Referenzgespräch: 45 Minuten Telefon-Interview (Ideal vs. Fehler)',
      theory: [
        {
          kind: 'text',
          body: 'So könnte dein Qualifizierungsgespräch tatsächlich ablaufen: ein 45-minütiges Telefon-Interview für die Rolle „Consultant & Mendix-Entwickler mit Pre-Sales-Anteil", geführt von der Projektleiterin (Frau Berg) und einem Lead-Architekten (Herr Costa). Jede Frage siehst du zweimal beantwortet: links die ideale Muster-Antwort, rechts eine typische Fehler-Antwort.\n\nLies das Gespräch am besten zweimal: einmal die grüne Spur am Stück (so klingt ein starkes Gespräch) und einmal die rote (so klingen die Fehler aus den vorigen Lektionen in Aktion – Weichmacher, Monologe, Bluffen, Ich-Brille). Die Zeitangaben zeigen dir nebenbei, wie wenig Zeit pro Antwort wirklich bleibt.',
        },
        {
          kind: 'text',
          heading: 'Minute 0–5 · Begrüßung & Gesprächsrahmen',
          body: 'Frau Berg eröffnet: Vorstellungsrunde, Agenda („erst lernen wir Sie kennen, dann ein paar fachliche Fragen, am Ende Ihre Fragen"), Dauer 45 Minuten. Hier wird noch nichts geprüft – außer Pünktlichkeit, Erreichbarkeit und Ton. Schon „Können Sie mich gut hören? Ich sitze in einem ruhigen Raum und habe mir die 45 Minuten freigehalten" setzt ein professionelles Signal. Wer verspätet, mit Straßenlärm oder „Moment, ich such kurz meine Unterlagen" startet, verschenkt den ersten Eindruck, bevor es losgeht.',
        },
        {
          kind: 'example',
          title:
            'Min. 05 · Frau Berg: „Erzählen Sie doch zum Einstieg etwas über sich und Ihren Werdegang."',
          good: '„Gern, in zwei Minuten: Ich bin IT-Consultant mit Schwerpunkt Low-Code und entwickle seit drei Jahren hauptsächlich mit Mendix – davor klassisch Java. Zuletzt habe ich ein Lieferantenportal mit SAP-Anbindung als Lead Developer verantwortet: Go-live nach vier Monaten, heute rund 800 Nutzer. Daneben übernehme ich regelmäßig Anforderungs-Workshops und unterstütze im Pre-Sales mit Demos – diese Kombination aus Bauen und Beraten ist genau das, was Sie ausgeschrieben haben. In der Entwicklung arbeite ich KI-gestützt, unter anderem mit Claude für Reviews und Doku. Deshalb bin ich heute hier: Die Rolle passt ziemlich genau auf mein Profil."',
          bad: '„Oh, wo fange ich da an … Also, ursprünglich komme ich ja aus dem Support, das war 2012, dann habe ich mich weitergebildet, war dann bei drei verschiedenen Systemhäusern, da habe ich alles Mögliche gemacht, Java, bisschen PHP, dann kam irgendwann Low-Code dazu … [nach sechs Minuten] … ach so, und Mendix mache ich natürlich auch, das hatte ich noch gar nicht erwähnt."',
        },
        {
          kind: 'example',
          title: 'Min. 09 · Frau Berg: „Warum haben Sie aktuell Kapazität frei?"',
          good: '„Mein letztes Projekt ist Ende des Monats planmäßig ausgelaufen – das Portal ist live und übergeben. Ich suche jetzt gezielt ein längerfristiges Engagement, in dem ich nicht nur entwickle, sondern eine Mendix-Landschaft mitgestalten kann. Genau deshalb hat mich Ihre Ausschreibung angesprochen."',
          bad: '„Ehrlich gesagt war das ein ziemliches Chaos beim letzten Kunden – die haben von heute auf morgen alle Externen rausgeworfen, Budgetpanik, Sie kennen das ja. Der Projektleiter dort war auch, na ja, sagen wir: schwierig. Da war ich am Ende froh, dass es vorbei war."',
        },
        {
          kind: 'text',
          heading: 'Minute 10–20 · Fachlicher Teil: Herr Costa übernimmt',
          body: 'Der Architekt prüft jetzt die Substanz. Typisch: Er steigt mit einer offenen Projektfrage ein und bohrt dann gezielt nach – erst Konzepte, dann Details. Hier entscheidet sich, ob deine Projektgeschichten STAR-Struktur haben und ob dein Profil der Tiefenprüfung standhält.',
        },
        {
          kind: 'example',
          title:
            'Min. 10 · Herr Costa: „Beschreiben Sie Ihr letztes Mendix-Projekt – was war Ihr Anteil?"',
          good: '„Das Lieferantenportal beim Maschinenbauer: Ausgangslage waren Bestellanfragen per E-Mail und Excel mit zwei Wochen Durchlaufzeit. Ich war Lead Developer in einem Dreier-Team: Ich habe das Domain Model entworfen, die Prozesslogik in Microflows gebaut und die SAP-Anbindung über REST umgesetzt. Das Rechtekonzept lief über Modulrollen und XPath-Constraints. Ergebnis: Durchlaufzeit unter zwei Tagen, 800 Nutzer. Der kniffligste Teil war die SAP-Schnittstelle – da gehe ich gern tiefer rein, wenn Sie mögen."',
          bad: '„Wir haben da ein Portal gebaut. War ein gutes Team, wir haben uns die Sachen aufgeteilt, jeder hat so seins gemacht. Technisch halt das Übliche: Microflows, Domain Model, REST und so weiter. Lief gut, würde ich sagen."',
        },
        {
          kind: 'example',
          title: 'Min. 14 · Herr Costa: „Wann nehmen Sie einen Nanoflow statt eines Microflows?"',
          good: '„Nanoflows laufen clientseitig – ich nehme sie für schnelle UI-Logik ohne Server-Roundtrip und zwingend für Offline-Szenarien. Microflows laufen serverseitig in einer Transaktion, also alles mit Datenbankzugriffen über mehrere Objekte, Integrationen oder sicherheitsrelevanter Logik. Faustregel bei mir: Validierung nah am Nutzer in den Nanoflow, Geschäftslogik in den Microflow."',
          bad: '„Puh, das ist ja eher so eine Detailfrage … Also grundsätzlich nehme ich eigentlich meistens Microflows, damit bin ich am vertrautesten. Nanoflows habe ich, glaube ich, auch schon mal verwendet, das war aber eher Zufall, das hat das Template so vorgegeben."',
        },
        {
          kind: 'example',
          title: 'Min. 17 · Herr Costa: „Wie stellen Sie Qualität in Ihren Apps sicher?"',
          good: '„Auf mehreren Ebenen: Wir hatten Modellierungsrichtlinien und Peer-Reviews für jedes Feature – Reviews mache ich zusätzlich KI-gestützt mit Claude, gerade für Java-Actions. Pro Story gab es Testfälle, für kritische Microflows Unit-Tests, und vor jedem Release einen Blick in die Mendix-Qualitätsmetriken. Und ehrlicherweise die wichtigste Maßnahme: früh klickbare Prototypen zum Fachbereich, damit Fehler im Verständnis auffliegen, bevor sie Code werden."',
          bad: '„Also Mendix macht da ja schon sehr viel von selbst, das ist ja das Schöne an Low-Code – da kann man gar nicht so viel falsch machen. Bei uns gab es eigentlich nie größere Bugs, von daher hat sich die Frage so richtig nie gestellt."',
        },
        {
          kind: 'example',
          title: 'Min. 19 · Herr Costa: „In Ihrem Profil steht OData – wie tief sind Sie da drin?"',
          good: '„Da ordne ich ehrlich ein: Mein Schwerpunkt sind REST-Integrationen, damit habe ich mehrere produktive Schnittstellen gebaut. OData habe ich bisher einmal konsumierend genutzt, published OData noch nicht. Die Konzepte sind verwandt – wenn OData bei Ihnen zentral ist, arbeite ich mich gezielt ein; das ging bei mir zuletzt mit der Workflow-Engine auch innerhalb von zwei Wochen."',
          bad: '„OData? Ja klar, mache ich ständig, kein Problem." – Costa: „Okay, wie setzen Sie denn serverseitiges Paging bei published OData um?" – „Äh … also das müsste ich jetzt nachschauen, das macht Mendix ja bestimmt automatisch irgendwie …"',
        },
        {
          kind: 'text',
          heading: 'Minute 20–27 · Arbeitsweise & KI-Einsatz',
          body: 'Frau Berg übernimmt wieder und fragt nach Vorgehen und Werkzeugen. Hier fällt fast immer die KI-Frage – mal neugierig, mal skeptisch formuliert. Entscheidend ist dieselbe Linie wie in Lektion 2: konkreter Nutzen plus Leitplanken, ohne Rechtfertigungston.',
        },
        {
          kind: 'example',
          title: 'Min. 20 · Frau Berg: „Wie gehen Sie vor, wenn Anforderungen unklar sind?"',
          good: '„Dann gehe ich nicht in die Entwicklung, sondern erst in einen kurzen Workshop: Key-User an einen Tisch, die drei wichtigsten Abläufe durchsprechen, daraus User Stories mit Akzeptanzkriterien. Und dann nutze ich die Stärke von Mendix: Nach ein, zwei Wochen steht ein klickbarer Prototyp, an dem der Fachbereich viel konkreter Feedback gibt als an jedem Konzeptpapier. Unklarheit löst man durch Anschauen, nicht durch längere Dokumente."',
          bad: '„Dann frage ich halt beim Product Owner nach. Und wenn der es auch nicht weiß, baue ich erstmal so, wie ich es für richtig halte – irgendwann beschwert sich schon jemand, dann weiß man ja, was gemeint war."',
        },
        {
          kind: 'example',
          title: 'Min. 23 · Frau Berg: „Sie erwähnten KI – heißt das, Claude schreibt Ihren Code?"',
          good: '„Nein – Claude beschleunigt mich, verantwortlich bleibe ich. Konkret nutze ich es für Entwürfe von Java-Actions, komplexe XPath-Ausdrücke, Testfälle und Dokumentation. Architektur, Domain Model und jede fachliche Entscheidung bleiben bei mir, und jedes generierte Artefakt prüfe ich, bevor es ins Modell geht. Effekt: etwa zwanzig Prozent mehr Tempo bei besserer Doku. Und wichtig: Kundendaten gebe ich nicht in KI-Tools – ich richte mich da vollständig nach Ihren Richtlinien."',
          bad: '„Ach, das meiste macht die KI heute tatsächlich von allein, da muss man kaum noch selbst ran – deswegen schaffe ich auch so viel. Datenschutz? Hm, darüber habe ich ehrlich gesagt noch nie nachgedacht, ich kopiere da einfach alles rein, was ich gerade brauche."',
        },
        {
          kind: 'text',
          heading: 'Minute 27–35 · Pre-Sales & Workshops',
          body: 'Jetzt prüft Frau Berg den zweiten Teil der Rolle – und zwar doppelt: über deine Beispiele UND über die Art, wie du im Gespräch antwortest. Eine Szenariofrage ist hier fast sicher.',
        },
        {
          kind: 'example',
          title:
            'Min. 27 · Frau Berg: „Welche Erfahrung haben Sie mit Workshops und Pre-Sales-Terminen?"',
          good: '„Konkret: In den letzten zwei Jahren habe ich sechs Pre-Sales-Termine technisch begleitet – mein Part waren Demo und Architektur-Fragen, aus drei Terminen wurden Aufträge. Dazu moderiere ich Anforderungs-Workshops, zuletzt zweitägig mit acht Key-Usern; Ergebnis war ein priorisiertes Backlog, das wir direkt umgesetzt haben. Was ich dabei gelernt habe: Ein klickbarer Prototyp überzeugt Entscheider mehr als jede Folie."',
          bad: '„So richtig viel habe ich da noch nicht gemacht, aber das würde ich mir schon zutrauen, ich rede eigentlich ganz gern mit Leuten. Verkaufen ist ja am Ende auch nicht so schwer, wenn das Produkt gut ist."',
        },
        {
          kind: 'example',
          title:
            'Min. 31 · Frau Berg: „Angenommen, ein Interessent hält Low-Code für Spielzeug, das nicht skaliert. Ihr Auftritt?"',
          good: '„Zuerst würde ich verstehen, woher die Skepsis kommt und welches Problem er lösen will – daran richtet sich alles aus. Dann ehrlich einordnen: wo Low-Code stark ist, wo die Grenzen liegen und wie man Skalierung und Lock-in architektonisch absichert. Und statt zwanzig Folien lieber ein kleiner Prototyp zu seinem konkreten Fall – erleben überzeugt mehr als behaupten. Die Grenzen offen zu benennen nimmt der Skepsis übrigens am meisten Wind aus den Segeln."',
          bad: '„Da würde ich ihm erstmal die ganze Plattform zeigen – Studio Pro, Marketplace, Cloud, alle Features einmal durch. Und wenn er dann immer noch skeptisch ist, kann man eh nichts machen, manche Leute wollen es einfach nicht verstehen."',
        },
        {
          kind: 'text',
          heading: 'Minute 35–40 · Kritische Fragen',
          body: 'Gegen Ende kommen die unangenehmen Fragen – bewusst platziert, wenn die Anspannung nachlässt. Hier zählt Souveränität: ehrlich, kurz, ohne Rechtfertigungston.',
        },
        {
          kind: 'example',
          title: 'Min. 35 · Frau Berg: „Wo liegen Ihre Grenzen – was können Sie nicht?"',
          good: '„Zwei Dinge, die Sie wissen sollten: Natives Mobile habe ich erst in einem kleinen Projekt gemacht – da bin ich kein Experte, arbeite mich aber nachweislich schnell ein. Und ich bin Entwickler und Berater, kein Grafikdesigner: Für Pixel-perfektes UI-Design hole ich mir gern Unterstützung, solide Atlas-UI-Umsetzung ist aber kein Problem."',
          bad: '„Schwächen … hm, da fällt mir ehrlich gesagt nichts ein. Vielleicht, dass ich manchmal zu perfektionistisch bin? Das sagen zumindest alle immer." ',
        },
        {
          kind: 'example',
          title:
            'Min. 37 · Herr Costa: „Sie waren bei unserem Wettbewerber – wie lösen die das Portalthema?"',
          good: '„Da bitte ich um Verständnis: Zu Interna früherer Kunden sage ich nichts – genauso vertraulich behandle ich später auch Ihre Informationen. Was ich gern teile: meine allgemeine Erfahrung, welche Portal-Architekturen sich in der Branche bewähren – das geht ohne Projektgeheimnisse."',
          bad: '„Na ja, unter uns: Die haben da ziemliche Probleme mit der Performance, das Projekt hängt seit Monaten. Ich kann Ihnen auch sagen, welche Module die einsetzen, das ist ganz interessant …"',
        },
        {
          kind: 'text',
          heading: 'Minute 40–45 · Deine Rückfragen & Abschluss',
          body: 'Die letzte Prüfung ist als Höflichkeit getarnt: „Haben Sie noch Fragen an uns?" Starke Kandidaten haben hier zwei, drei vorbereitete Fragen mit Projektbrille – und erfragen aktiv den nächsten Schritt.',
        },
        {
          kind: 'example',
          title: 'Min. 40 · Frau Berg: „Haben Sie noch Fragen an uns?"',
          good: '„Ja, drei: Woran machen Sie nach sechs Monaten fest, dass die Besetzung ein Erfolg war? Wie sieht Ihre Mendix-Landschaft heute aus – Apps, Version, Richtlinien, CI/CD? Und wie hoch ist der Pre-Sales-Anteil realistisch – gelegentliche Termine oder fester Teil der Woche? … Danke, das hilft mir sehr. Wie geht es denn nach heute weiter – bis wann wollen Sie entscheiden, und brauchen Sie noch etwas von mir?"',
          bad: '„Hm, eigentlich ist alles klar. Ach doch: Wie ist das mit Homeoffice, muss ich da oft vor Ort sein? Und werden Spesen und Anfahrt extra vergütet? Und nur fürs Gefühl: Wie schnell käme man aus dem Vertrag wieder raus, falls es nicht passt?"',
        },
        {
          kind: 'keypoints',
          title: 'Was das Referenzgespräch zeigt',
          points: [
            'Die grünen Antworten sind kurz: kaum eine über 45 Sekunden – Tiefe wird angeboten, nicht aufgedrängt.',
            'Jede grüne Antwort enthält Belege (Projekte, Zahlen, Ergebnisse) statt Selbstbeschreibung.',
            'Lücken (OData, Native Mobile) werden ehrlich eingeordnet und aktiv überbrückt – nie weggeblufft.',
            'Die KI-Frage wird offensiv beantwortet: Nutzen + Kontrolle + Datenschutz in einem Atemzug.',
            'Die roten Antworten scheitern an bekannten Mustern: Monolog, Dauer-„wir", Weichmacher, Lästern, Ich-Brille.',
            'Der Abschluss gehört dir: vorbereitete Rückfragen mit Projektbrille und die Frage nach dem nächsten Schritt.',
          ],
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'quali-reference-call-q1',
          question: 'Was haben fast alle idealen Antworten im Referenzgespräch gemeinsam?',
          options: [
            {
              text: 'Sie sind kurz, enthalten konkrete Belege (Projekte, Zahlen, Ergebnisse) und bieten Vertiefung an, statt sie aufzudrängen.',
              correct: true,
              explanation:
                'Richtig. Kernaussage zuerst, Beleg dazu, dann „gern mehr dazu, wenn Sie mögen" – dieses Muster trägt durch das gesamte Gespräch und lässt dem Interviewer die Steuerung.',
            },
            {
              text: 'Sie sind möglichst ausführlich, damit keine Nachfragen nötig sind.',
              correct: false,
              explanation:
                'Das Gegenteil: Nachfragen sind erwünscht – sie zeigen Interesse und lassen dich vertiefen, wo es den Prüfer wirklich interessiert. Monologe nehmen dem Gespräch den Dialogcharakter.',
            },
            {
              text: 'Sie vermeiden konsequent jedes Eingeständnis einer Wissenslücke.',
              correct: false,
              explanation:
                'Nein – gleich zweimal (OData, Native Mobile) ordnet der ideale Kandidat Lücken ehrlich ein. Genau das macht die restlichen Aussagen glaubwürdig.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'quali-reference-call-s1',
          situation:
            'Transfer aus dem Referenzgespräch: Bei Minute 19 fragt der Architekt nach einem Thema aus deinem Profil, das dein Vermittler großzügiger formuliert hat, als es ist. Du spürst den Impuls, es „irgendwie zu überspielen".',
          choices: [
            {
              text: 'Wie im Referenzgespräch: ehrlich einordnen (was genau du gemacht hast, was nicht), die verwandte Stärke benennen und die Einarbeitung mit einem früheren Beispiel belegen.',
              quality: 'best',
              feedback:
                'Genau. Das OData-Beispiel zeigt das Muster: Ehrlichkeit + verwandte Stärke + belegte Lernfähigkeit. So bleibt ein kleiner Kratzer statt eines Vertrauensbruchs – und oft ist die Lücke für das Projekt gar nicht entscheidend.',
            },
            {
              text: 'Mit Allgemeinwissen und Fachbegriffen antworten und hoffen, dass keine zweite Nachfrage kommt.',
              quality: 'bad',
              feedback:
                'Die rote Spur bei Minute 19 zeigt, wie das endet: Die zweite Nachfrage kommt fast immer („Wie setzen Sie Paging um?") – und dann ist nicht die Lücke das Problem, sondern der aufgeflogene Bluff.',
            },
            {
              text: 'Das Thema knapp bestätigen („ja, kenne ich") und schnell auf ein starkes Thema überleiten.',
              quality: 'ok',
              feedback:
                'Das Ablenken kann einmal funktionieren – aber ein erfahrener Architekt kommt zurück, und dann wirkt es doppelt schlecht: erst ausgewichen, dann doch keine Substanz. Die ehrliche Einordnung ist der sicherere und stärkere Weg.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'quali-reference-call-f1',
          task: 'Generalprobe: Nimm dir drei Fragen aus dem Referenzgespräch vor (die Selbstvorstellung von Min. 05, die KI-Frage von Min. 23 und die Grenzen-Frage von Min. 35) und schreibe DEINE eigenen Antworten – mit deinen echten Projekten, Zahlen und Lücken. Sprich sie danach laut (Pitch-Timer: 60–90 Sekunden pro Antwort).',
          placeholder:
            'Min. 05 – Selbstvorstellung: …\n\nMin. 23 – KI-Frage: …\n\nMin. 35 – Meine Grenzen: …',
          sampleSolution:
            'Orientiere dich am Muster der grünen Antworten:\nMin. 05: Wer ich bin (1 Satz) → was zur Rolle passt (2–3 Punkte) → ein Beweisprojekt mit Ergebnis → warum diese Rolle. Unter zwei Minuten.\nMin. 23: Werkzeug-Framing („beschleunigt mich, verantwortlich bleibe ich") → 3 konkrete Einsatzfelder → Effekt in Zahlen → Leitplanken (Prüfung, Kundendaten, Richtlinien des Kunden).\nMin. 35: Zwei echte, unkritische Lücken → je ein Satz, wie du damit umgehst (Einarbeitung belegt, Unterstützung holen) → keine Pseudo-Schwäche, kein „fällt mir nichts ein".',
          checklist: [
            'Meine Selbstvorstellung folgt dem Muster Rolle–Relevanz–Beweis und bleibt unter zwei Minuten.',
            'Meine KI-Antwort nennt konkrete Einsatzfelder UND Leitplanken.',
            'Meine Grenzen-Antwort enthält echte Lücken mit Umgangsstrategie – keine Pseudo-Schwäche.',
            'Alle drei Antworten enthalten mindestens einen echten Beleg (Projekt, Zahl, Ergebnis).',
            'Ich habe die Antworten laut gesprochen und die Zeit gestoppt.',
          ],
        },
      ],
    },
  ],
}
