import type { Module } from '@/types/content'

export const salesPsychology: Module = {
  id: 'sales-psychology',
  title: 'Verkaufspsychologie: die Tricks der Top-Vertriebler',
  description:
    'Warum Menschen Ja sagen: die sechs Überzeugungsprinzipien, Bedarfsanalyse wie im Pre-Sales – und wie du dieselben Techniken im Vorstellungsgespräch für dich einsetzt.',
  category: 'consulting',
  lessons: [
    {
      id: 'sales-principles',
      title: 'Warum Menschen Ja sagen: die sechs Überzeugungsprinzipien',
      theory: [
        {
          kind: 'text',
          body: 'Top-Vertriebler verkaufen nicht durch Druck und nicht durch Gerede – sie nutzen Muster, nach denen Menschen Entscheidungen treffen. Die bekannteste Sammlung dieser Muster stammt vom Psychologen Robert Cialdini, der jahrelang undercover bei Verkäufern, Spendensammlern und Werbern mitgearbeitet hat: sechs Prinzipien, die in Studien immer wieder belegt wurden.\n\nVorab das Wichtigste: Diese Prinzipien wirken – genau deshalb gehören sie in verantwortungsvolle Hände. Für dich als Consultant gilt: Überzeugen ja, manipulieren nein. Manipulation fliegt auf, spätestens im Projekt, und dein wichtigstes Kapital ist Vertrauen. Seriös eingesetzt sind die Prinzipien nichts anderes als gute Kommunikation: Du machst es dem Gegenüber leichter, eine Entscheidung zu treffen, die ohnehin in seinem Interesse liegt.',
        },
        {
          kind: 'text',
          heading: 'Reziprozität, Sympathie, soziale Bewährtheit',
          body: 'Reziprozität: Wer etwas bekommt, will etwas zurückgeben – dieses Urprinzip menschlichen Zusammenlebens nutzen gute Verkäufer, indem sie zuerst liefern. Im Pre-Sales heißt das: Gib im Erstgespräch echten Mehrwert, bevor du etwas willst – eine Beobachtung zum Prozess des Kunden, eine kleine Analyse, ein konkreter Tipp. Wer schon vor dem Vertrag hilfreich war, dem traut man auch das Projekt zu.\n\nSympathie: Menschen kaufen von Menschen, die sie mögen – und Sympathie entsteht vor allem durch Gemeinsamkeiten und ehrliches Interesse. Deshalb beginnen gute Verkaufsgespräche nie mit dem Produkt, sondern mit dem Gegenüber. Wichtig: Gespielte Herzlichkeit kippt ins Gegenteil; echtes Interesse an den Problemen des Kunden reicht völlig.\n\nSoziale Bewährtheit (Social Proof): Bei Unsicherheit orientieren sich Menschen daran, was andere – möglichst Ähnliche – tun. „Ein Maschinenbauer Ihrer Größe hat mit diesem Ansatz die Durchlaufzeit halbiert" wirkt stärker als jedes Eigenlob, weil es das Risiko gefühlt senkt: Andere sind den Weg schon gegangen.',
        },
        {
          kind: 'text',
          heading: 'Autorität, Konsistenz, Knappheit',
          body: 'Autorität: Menschen folgen erkennbarer Expertise. Der Trick der Profis: Autorität wird gezeigt, nicht behauptet. Statt „Ich bin Experte für Integration" sagt der Profi „Bei der letzten OData-Anbindung sind wir über drei typische Fallstricke gestolpert – die prüfe ich bei Ihnen zuerst." Die Präzision belegt die Expertise nebenbei.\n\nKonsistenz: Menschen wollen zu dem stehen, was sie gesagt und entschieden haben. Verkäufer sammeln deshalb kleine Jas: „Sehen Sie das Problem auch bei sich?" – „Wäre es wertvoll, das zu lösen?" Wer dreimal zugestimmt hat, trägt die große Entscheidung eher mit. Seriös eingesetzt heißt das: Hol dir Zwischen-Bestätigungen, statt am Ende mit einem Gesamtpaket zu überfallen.\n\nKnappheit: Was begrenzt verfügbar ist, wirkt wertvoller. Hier liegt die größte Manipulationsgefahr – künstliche Deadlines und erfundene Konkurrenzangebote zerstören Vertrauen, wenn sie auffliegen. Die seriöse Variante: echte Knappheit transparent machen. „Ich kann ab März starten, ab Mai bin ich für ein anderes Projekt angefragt" ist keine Drohung, sondern eine ehrliche Information – und sie wirkt trotzdem.',
        },
        {
          kind: 'table',
          headers: ['Prinzip', 'Kern', 'Seriöser Einsatz im Beratungsalltag'],
          rows: [
            [
              'Reziprozität',
              'Wer etwas bekommt, will zurückgeben',
              'Im Erstgespräch echten Mehrwert liefern: Beobachtung, Tipp, Mini-Analyse',
            ],
            [
              'Sympathie',
              'Menschen kaufen von Menschen, die sie mögen',
              'Ehrliches Interesse am Gegenüber, Gemeinsamkeiten finden – ohne Anbiederei',
            ],
            [
              'Soziale Bewährtheit',
              'Bei Unsicherheit zählt, was Ähnliche tun',
              'Referenzen mit vergleichbaren Kunden und konkretem Ergebnis nennen',
            ],
            [
              'Autorität',
              'Erkennbarer Expertise wird gefolgt',
              'Expertise durch Präzision zeigen („drei typische Fallstricke"), nicht behaupten',
            ],
            [
              'Konsistenz',
              'Menschen stehen zu ihren Aussagen',
              'Kleine Jas sammeln: Problem bestätigen lassen, bevor die Lösung kommt',
            ],
            [
              'Knappheit',
              'Begrenztes wirkt wertvoller',
              'Echte Verfügbarkeit transparent machen – nie künstliche Deadlines erfinden',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Sechs Prinzipien erklären, warum Menschen Ja sagen: Reziprozität, Sympathie, soziale Bewährtheit, Autorität, Konsistenz, Knappheit.',
            'Erst geben, dann wollen: Mehrwert vor Vertrag ist das stärkste Vertrauenssignal (Reziprozität).',
            'Social Proof schlägt Eigenlob: vergleichbarer Kunde + konkretes Ergebnis statt Selbstbeschreibung.',
            'Autorität wird durch Präzision gezeigt, nicht behauptet – Details belegen Expertise nebenbei.',
            'Die Grenze zur Manipulation: Alles, was auffliegen kann (falsche Knappheit, gespielte Sympathie), zerstört das Kapital des Beraters – Vertrauen.',
          ],
        },
        {
          kind: 'example',
          title: 'Erstgespräch mit einem potenziellen Kunden (Pre-Sales)',
          good: '„Ich habe mir vor dem Termin Ihr Bestellportal angesehen – mir sind zwei Dinge aufgefallen, die Sie vermutlich Zeit kosten; die zeige ich Ihnen gleich kurz, egal wie unser Gespräch ausgeht. Ein Logistiker Ihrer Größe hat genau diesen Prozess mit uns in acht Wochen automatisiert – die Projektleiterin dort können Sie gern anrufen. Sehen Sie die zwei Punkte auch als Ihre größten Zeitfresser, oder liegt der Schmerz woanders?"',
          bad: '„Wir sind der führende Mendix-Partner mit über 100 zufriedenen Kunden, und ich sage Ihnen gleich: Ein Angebot wie heute kann ich Ihnen nur bis Freitag halten, danach ziehen die Preise an. Wollen wir direkt über die Vertragslaufzeit sprechen?"',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'sales-principles-q1',
          question:
            '„Ein Automobilzulieferer Ihrer Größe hat mit diesem Ansatz die Freigabezeiten von fünf Tagen auf vier Stunden gesenkt – den Ansprechpartner dort nenne ich Ihnen gern." Welches Überzeugungsprinzip wird hier vor allem genutzt?',
          options: [
            {
              text: 'Soziale Bewährtheit: Ein vergleichbarer Kunde ist den Weg schon erfolgreich gegangen – das senkt das gefühlte Risiko.',
              correct: true,
              explanation:
                'Richtig. Die Referenz wirkt, weil sie von einem ähnlichen Unternehmen stammt und ein konkretes, nachprüfbares Ergebnis nennt. Das Angebot, den Ansprechpartner zu nennen, macht den Social Proof glaubwürdig statt behauptet.',
            },
            {
              text: 'Knappheit: Das Angebot wird künstlich verknappt, um Druck zu erzeugen.',
              correct: false,
              explanation:
                'Hier wird nichts verknappt – es gibt weder Deadline noch begrenzte Plätze. Die Wirkung entsteht durch das Vorbild eines vergleichbaren Kunden: soziale Bewährtheit.',
            },
            {
              text: 'Reziprozität: Der Kunde bekommt ein Geschenk und fühlt sich zur Gegenleistung verpflichtet.',
              correct: false,
              explanation:
                'Es wird nichts gegeben, das eine Gegenleistung auslösen könnte. Der Satz arbeitet mit dem Erfolg eines ähnlichen Kunden – das ist Social Proof, nicht Reziprozität.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'sales-principles-q2',
          question:
            'Wo verläuft die Grenze zwischen seriösem Einsatz der Prinzipien und Manipulation?',
          options: [
            {
              text: 'Manipulation beginnt, wo Fakten erfunden oder verzerrt werden – etwa künstliche Deadlines oder ausgedachte Referenzen. Seriös ist, echte Fakten wirksam zu kommunizieren.',
              correct: true,
              explanation:
                'Genau. Die Prinzipien selbst sind neutral – entscheidend ist die Wahrheit dahinter. Echte Verfügbarkeit transparent zu machen ist Information; eine erfundene Deadline ist Täuschung und zerstört beim Auffliegen das wichtigste Kapital des Beraters: Vertrauen.',
            },
            {
              text: 'Jeder bewusste Einsatz von Überzeugungsprinzipien ist bereits Manipulation – wer überzeugen will, sollte nur Fakten aufzählen.',
              correct: false,
              explanation:
                'Dann wäre jede gute Kommunikation Manipulation. Fakten brauchen Verpackung, um verstanden und gewichtet zu werden – unseriös wird es erst, wenn die Fakten selbst nicht stimmen oder Schaden für das Gegenüber in Kauf genommen wird.',
            },
            {
              text: 'Manipulation ist alles, was funktioniert – wirksame Techniken sind per Definition unfair.',
              correct: false,
              explanation:
                'Wirksamkeit ist kein Unwerturteil: Auch eine klar erklärte Diagnose beim Arzt ist wirksam. Es kommt darauf an, ob die Entscheidung des Gegenübers auf wahren Informationen beruht und in seinem Interesse liegen kann.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'sales-principles-s1',
          situation:
            'Du bist als Mendix-Consultant zu einem Pre-Sales-Termin eingeladen. Der Kunde zögert: „Low-Code klingt interessant, aber wir haben Sorge, dass das bei unserer Komplexität nicht trägt." Dein Vertriebskollege flüstert dir zu: „Sag ihm, dass drei Wettbewerber von denen schon bei uns unterschrieben haben – stimmt zwar nicht, aber das zieht immer." Was tust du?',
          choices: [
            {
              text: 'Du bleibst bei echten Fakten und nutzt sie gezielt: Du nennst ein reales Referenzprojekt mit vergleichbarer Komplexität samt konkretem Ergebnis und bietest an, einen Proof of Concept an genau ihrem komplexesten Prozess zu machen – das Risiko trägt ihr.',
              quality: 'best',
              feedback:
                'Sehr gut: Echter Social Proof (reale Referenz, konkretes Ergebnis) plus Reziprozität (PoC als Vorleistung) adressiert die Sorge direkt – ohne eine einzige Unwahrheit. Die erfundene Wettbewerber-Story wäre beim Nachfragen aufgeflogen und hätte den Deal und deinen Ruf gekostet.',
            },
            {
              text: 'Du folgst dem Kollegen – die Wettbewerber-Story ist nicht nachprüfbar, und im Vertrieb gehört Übertreiben nun mal dazu.',
              quality: 'bad',
              feedback:
                'Riskant und unseriös: Gerade in Branchen kennt man sich – ein Anruf des Kunden bei einem der angeblichen Wettbewerber, und du bist als Lügner verbrannt, dauerhaft. Erfundener Social Proof ist Manipulation im Wortsinn und das Gegenteil von beratender Glaubwürdigkeit.',
            },
            {
              text: 'Du weichst dem Einwand aus und lenkst auf die Produktvorteile: Du zählst die Mendix-Features auf, die für Enterprise-Tauglichkeit sprechen.',
              quality: 'ok',
              feedback:
                'Nicht falsch, aber schwach: Eine Feature-Liste beantwortet eine Vertrauensfrage nicht – der Kunde hat keine Wissenslücke, sondern eine Sorge. Dagegen helfen Belege (echte Referenz) und Risikoübernahme (PoC), nicht Argumente. Einwand ernst nehmen statt übertönen.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'sales-principles-f1',
          task: 'Wähle zwei der sechs Prinzipien und formuliere für dein eigenes Angebot als Consultant je einen konkreten, ehrlichen Satz, den du im nächsten Kundengespräch verwenden könntest. Benenne jeweils das Prinzip.',
          placeholder: 'Prinzip 1 (…): „…"\nPrinzip 2 (…): „…"',
          sampleSolution:
            'Prinzip 1 (Reziprozität): „Ich habe mir Ihre öffentlich einsehbaren Formulare angesehen und drei Stellen notiert, an denen Medienbrüche entstehen – die Notizen lasse ich Ihnen unabhängig von unserem Gespräch da."\nPrinzip 2 (Autorität durch Präzision): „Bei Freigabeprozessen prüfe ich immer zuerst die Vertretungsregeln – das ist in neun von zehn Projekten die Stelle, an der es später klemmt."',
          checklist: [
            'Beide Sätze beruhen auf wahren, belegbaren Fakten aus meiner Erfahrung.',
            'Ich habe das jeweilige Prinzip korrekt benannt und bewusst eingesetzt.',
            'Kein Satz erzeugt künstlichen Druck oder behauptet Unprüfbares.',
            'Die Sätze klingen nach mir – ich könnte sie morgen wirklich sagen.',
          ],
        },
      ],
    },
    {
      id: 'sales-discovery',
      title: 'Erst der Bedarf, dann die Lösung: Verkaufen heißt zuhören',
      theory: [
        {
          kind: 'text',
          body: 'Der häufigste Fehler im Vertrieb ist derselbe wie in der Beratung: pitchen, bevor man verstanden hat. Wer mit der Lösung ins Gespräch geht, redet über sich – wer mit Fragen beginnt, redet über den Kunden. Studien über erfolgreiche Verkäufer zeigen ein klares Muster: Die besten reden deutlich weniger als der Durchschnitt und lassen den Kunden den Großteil des Gesprächs bestreiten.\n\nDas ist kein Trick, sondern Logik: Niemand kauft eine Lösung, solange ihm das Problem nicht bewusst und wichtig ist. Die eigentliche Verkaufsarbeit passiert deshalb in der Bedarfsanalyse – die Fragetechniken dafür kennst du aus dem Modul „Aktives Zuhören & Fragetechniken"; hier geht es darum, sie gezielt zum Verkaufen einzusetzen.',
        },
        {
          kind: 'text',
          heading: 'Vom Problem zum Schmerz: die Fragetreppe des Vertriebs',
          body: 'Profi-Verkäufer führen den Kunden über eine Treppe aus vier Frage-Typen. Situationsfragen klären den Ist-Zustand: „Wie läuft die Freigabe heute?" Sparsam einsetzen – was du recherchieren kannst, fragst du nicht. Problemfragen machen Schwierigkeiten explizit: „Wo hakt es dabei am meisten?" Jetzt spricht der Kunde selbst sein Problem aus – das wirkt stärker, als wenn du es ihm erzählst (Konsistenz-Prinzip!).\n\nDer entscheidende Schritt sind Auswirkungsfragen: „Was bedeutet das für Ihre Liefertermine? Was kostet Sie das pro Monat?" Sie verwandeln ein benanntes Problem in einen spürbaren Schmerz mit Preisschild – erst jetzt ist das Problem wichtig genug, um Geld für die Lösung auszugeben. Den Abschluss machen Nutzenfragen: „Angenommen, die Freigabe liefe in vier Stunden statt fünf Tagen – was würde das für Sie ändern?" Der Kunde beschreibt den Nutzen deiner Lösung selbst, in seinen Worten. Besser kann kein Verkäufer argumentieren.',
        },
        {
          kind: 'text',
          heading: 'Die Demo: zeige die Lösung ihres Problems, nicht dein Produkt',
          body: 'Mit dem ermittelten Bedarf ändert sich alles Folgende. Die Nutzenargumentation – Merkmal, Vorteil, Nutzen aus dem Modul „Verhandeln & Überzeugen" – koppelst du jetzt an den konkret ausgesprochenen Schmerz: nicht irgendein Nutzen, sondern genau der, den der Kunde selbst benannt hat, möglichst in seinen eigenen Worten und mit seinen Zahlen.\n\nDasselbe gilt für die Produkt-Demo, das Herzstück im Pre-Sales: Die schlechte Demo ist ein Feature-Rundflug („und hier kann man auch noch …"). Die gute Demo erzählt die Geschichte des Kunden: Sie beginnt bei seinem Prozess, zeigt die zwei, drei Stellen, an denen sein benannter Schmerz verschwindet, und benutzt seine Begriffe, seine Beispiele, idealerweise seine Daten. Faustregel der Profis: Jede gezeigte Funktion muss sich auf einen im Gespräch ermittelten Bedarf zurückführen lassen – alles andere ist Eitelkeit und kostet Aufmerksamkeit.',
        },
        {
          kind: 'table',
          headers: ['Frage-Typ', 'Zweck', 'Beispiel'],
          rows: [
            [
              'Situationsfrage',
              'Ist-Zustand verstehen (sparsam – Recherche ersetzt Fragen)',
              '„Wie läuft der Freigabeprozess heute bei Ihnen?"',
            ],
            [
              'Problemfrage',
              'Der Kunde benennt die Schwierigkeit selbst',
              '„Wo verlieren Sie dabei am meisten Zeit?"',
            ],
            [
              'Auswirkungsfrage',
              'Aus dem Problem wird spürbarer Schmerz mit Preisschild',
              '„Was kostet Sie diese Woche Verzögerung pro Auftrag?"',
            ],
            [
              'Nutzenfrage',
              'Der Kunde formuliert den Wert der Lösung selbst',
              '„Was würde es ändern, wenn das in vier Stunden liefe?"',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Wer pitcht, bevor er versteht, redet über sich – Verkaufen beginnt mit Fragen, nicht mit der Lösung.',
            'Die Fragetreppe: Situation → Problem → Auswirkung → Nutzen. Der Kunde spricht Problem und Nutzen selbst aus.',
            'Auswirkungsfragen sind der Hebel: Sie geben dem Problem ein Preisschild und machen die Lösung dringlich.',
            'Nutzenargumentation an den ermittelten Schmerz koppeln – in den Worten und Zahlen des Kunden.',
            'Demo-Regel: Jede gezeigte Funktion muss auf einen benannten Bedarf einzahlen – kein Feature-Rundflug.',
          ],
        },
        {
          kind: 'example',
          title: 'Pre-Sales-Demo einer Mendix-App beim Fachbereich',
          good: '„Sie sagten vorhin: Das Schlimmste sind die fünf Tage, bis ein Auftrag freigegeben ist – rund 2.000 Euro Verzugskosten pro Fall. Genau diesen Weg gehen wir jetzt einmal durch: Hier kommt Ihr Auftrag rein, hier sehen Sie, wie die Vertretungsregel greift, wenn Herr Maier im Urlaub ist – und hier ist der Auftrag freigegeben. Vier Minuten. Rechnen Sie das gern auf Ihre 300 Fälle pro Monat hoch."',
          bad: '„Ich zeige Ihnen mal, was Mendix alles kann: Hier ist der Modeler mit den Microflows, das ist unser Widget-Katalog – über 200 Stück –, hier könnte man auch Machine Learning integrieren, und besonders stolz sind wir auf das neue Theming-Modul. Ach, und Offline-Fähigkeit haben wir natürlich auch …"',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'sales-discovery-q1',
          question:
            'Warum sind Auswirkungsfragen („Was kostet Sie das pro Monat?") der entscheidende Hebel im Verkaufsgespräch?',
          options: [
            {
              text: 'Sie verwandeln ein benanntes Problem in einen spürbaren Schmerz mit Preisschild – erst dann ist das Problem wichtig genug, um Geld für eine Lösung auszugeben.',
              correct: true,
              explanation:
                'Richtig. Ein Problem zu kennen reicht nicht zum Kauf – es muss dringlich sein. Die Auswirkungsfrage lässt den Kunden die Konsequenzen selbst beziffern, und gegen die eigene Zahl argumentiert niemand.',
            },
            {
              text: 'Sie zeigen dem Kunden, dass man sich mit Betriebswirtschaft auskennt.',
              correct: false,
              explanation:
                'Das ist höchstens ein Nebeneffekt. Der Kern: Die Frage macht die Folgen des Problems für den Kunden selbst spürbar und bezifferbar – sie erzeugt die Dringlichkeit, ohne die niemand kauft.',
            },
            {
              text: 'Sie bringen den Kunden in Verlegenheit, wodurch er schneller unterschreibt.',
              correct: false,
              explanation:
                'Verlegenheit wäre kontraproduktiv – unter Druck gesetzte Kunden ziehen sich zurück. Die Frage wirkt, weil der Kunde die Tragweite seines Problems selbst erkennt und ausspricht.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'sales-discovery-q2',
          question: 'Was unterscheidet eine gute Pre-Sales-Demo von einer schlechten?',
          options: [
            {
              text: 'Die gute Demo erzählt den Prozess des Kunden mit seinen Begriffen und zeigt nur Funktionen, die auf einen im Gespräch benannten Bedarf einzahlen.',
              correct: true,
              explanation:
                'Genau. Die Demo ist kein Produktkatalog, sondern der Beweis, dass der konkrete Schmerz des Kunden verschwindet – je näher an seinem Prozess, seinen Begriffen und Zahlen, desto stärker die Wirkung.',
            },
            {
              text: 'Die gute Demo zeigt möglichst viele Features, damit der Kunde den vollen Funktionsumfang sieht.',
              correct: false,
              explanation:
                'Der Feature-Rundflug ist der klassische Demo-Fehler: Er überfordert, langweilt und zeigt vor allem, dass der Anbieter den Bedarf nicht verstanden hat. Relevanz schlägt Vollständigkeit.',
            },
            {
              text: 'Die gute Demo dauert mindestens eine Stunde, um Gründlichkeit zu zeigen.',
              correct: false,
              explanation:
                'Länge ist kein Qualitätsmerkmal – im Gegenteil: Eine fokussierte Demo auf die zwei, drei benannten Schmerzpunkte wirkt stärker als jeder Rundumschlag und lässt Zeit für das wichtigere Gespräch danach.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'sales-discovery-s1',
          situation:
            'Du begleitest deinen Vertriebskollegen zu einem Ersttermin bei einem Logistikunternehmen. Nach der Begrüßung sagt der Kollege: „Dann leg mal los mit der Demo – zeig denen, was Mendix alles kann." Du hast aber noch keine einzige Frage zum Prozess des Kunden stellen können. Wie verhältst du dich?',
          choices: [
            {
              text: 'Du schlägst eine kurze Umkehr vor: „Bevor ich etwas zeige, würde ich gern 15 Minuten verstehen, wo es bei Ihnen hakt – dann zeige ich Ihnen genau das statt einer Standard-Tour." Du stellst Problem- und Auswirkungsfragen und schneidest die Demo live auf die zwei größten Schmerzpunkte zu.',
              quality: 'best',
              feedback:
                'Sehr gut: Du drehst die Reihenfolge zurück auf Bedarf vor Lösung – und kündigst dem Kunden den Gewinn dabei an (relevante statt generische Demo). Die 15 Minuten Fragen machen die anschließende Demo doppelt so wirksam, weil jeder gezeigte Schritt an einem benannten Problem hängt.',
            },
            {
              text: 'Du startest die vorbereitete Standard-Demo – der Kollege kennt den Kunden schließlich besser, und widersprechen wirkt unprofessionell.',
              quality: 'ok',
              feedback:
                'Verständlich, aber du verschenkst den Termin: Eine generische Demo trifft den Bedarf nur zufällig, und du erfährst nie, wofür sich der Kunde wirklich interessiert. Mindestens solltest du die Demo mit zwei, drei Problemfragen eröffnen („Was müsste diese App können, damit sich Ihr Tag verbessert?") und unterwegs anpassen.',
            },
            {
              text: 'Du zeigst konsequent den kompletten Funktionsumfang – je mehr der Kunde sieht, desto größer die Chance, dass etwas dabei ist, das ihn überzeugt.',
              quality: 'bad',
              feedback:
                'Das Schrotflinten-Prinzip funktioniert in Demos nicht: Nach 20 Minuten Feature-Rundflug ist die Aufmerksamkeit weg, und beim Kunden bleibt „ganz nett, aber was bringt uns das?" hängen. Ohne Bedarfsbezug ist jede gezeigte Funktion nur Lärm.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'sales-discovery-f1',
          task: 'Baue eine Fragetreppe für ein Pre-Sales-Gespräch zu einem Prozess deiner Wahl (z.B. Urlaubsfreigabe, Rechnungsprüfung, Onboarding): je eine Situations-, Problem-, Auswirkungs- und Nutzenfrage, die du wirklich stellen würdest.',
          placeholder: 'Situationsfrage: …\nProblemfrage: …\nAuswirkungsfrage: …\nNutzenfrage: …',
          sampleSolution:
            'Situationsfrage: „Wie läuft die Rechnungsprüfung heute ab – wer ist beteiligt, welche Systeme nutzen Sie?"\nProblemfrage: „An welcher Stelle bleiben Rechnungen am längsten liegen?"\nAuswirkungsfrage: „Was passiert, wenn dadurch Skontofristen verfallen – über welche Summe reden wir da im Jahr?"\nNutzenfrage: „Angenommen, jede Rechnung wäre in 24 Stunden geprüft: Was würde das für Ihr Verhältnis zu den Lieferanten und für die Skonti bedeuten?"',
          checklist: [
            'Die vier Fragen bauen aufeinander auf – vom Ist-Zustand zum selbst formulierten Nutzen.',
            'Die Auswirkungsfrage zielt auf eine bezifferbare Konsequenz (Zeit, Geld, Risiko).',
            'Die Nutzenfrage lässt den Kunden den Wert der Lösung selbst beschreiben.',
            'Keine Frage lässt sich durch zehn Minuten Recherche vorab beantworten.',
          ],
        },
      ],
    },
    {
      id: 'sales-interview',
      title: 'Verkauf dich selbst: Vertriebstechniken im Vorstellungsgespräch',
      theory: [
        {
          kind: 'text',
          body: 'Im Vorstellungs- oder Qualifizierungsgespräch bist du beides zugleich: das Produkt und der Vertriebler. Und genau deshalb funktioniert dort alles, was du in den letzten beiden Lektionen gelernt hast – die Überzeugungsprinzipien ebenso wie die Regel „Bedarf vor Lösung". Die besten Kandidaten verkaufen sich nicht lauter, sondern genau wie gute Verkäufer: Sie verstehen zuerst, was der Kunde braucht, und zeigen dann präzise, wie sie genau das liefern.\n\nDer Perspektivwechsel ist der Kern: Die meisten Kandidaten fragen sich „Wie präsentiere ich mich gut?" – die Vertriebsfrage lautet „Welches Problem will mein Gegenüber lösen, und wie werde ich sichtbar zur Lösung?"',
        },
        {
          kind: 'text',
          heading: 'Bedarfsanalyse: Die Stellenbeschreibung ist dein Lastenheft',
          body: 'Ein guter Verkäufer recherchiert vor dem Termin und hört im Termin. Übertragen heißt das: Die Projekt- oder Stellenbeschreibung ist dein Lastenheft – markiere die drei Anforderungen, die dem Kunden offensichtlich am wichtigsten sind, und bereite zu jeder einen Beleg aus deiner Erfahrung vor. Das Material dafür liefern dir SEAT und STAR aus dem Modul zum Qualifizierungsgespräch.\n\nIm Gespräch selbst gilt: Höre, was dein Gegenüber betont und nachfragt – das ist der echte Bedarf, der im Text oft nicht steht. Wenn die Projektleiterin dreimal auf Teameinarbeitung zu sprechen kommt, ist ihr Schmerz vermutlich ein überlastetes Team, nicht die Technologie. Antworte auf diesen Bedarf statt dein vorbereitetes Skript abzuspulen. Und nutze deine Rückfragen als Bedarfsermittlung: „Was wäre aus Ihrer Sicht in den ersten drei Monaten der wichtigste Erfolg?" – die Antwort sagt dir, wofür du eingekauft wirst, und gibt dir die Vorlage, genau dazu deinen stärksten Beleg zu platzieren.',
        },
        {
          kind: 'text',
          heading: 'Die Prinzipien am Gesprächstisch',
          body: 'Soziale Bewährtheit: Lass Ergebnisse und Dritte für dich sprechen statt Eigenlob – „Der Fachbereich hat das Portal nach zwei Wochen ohne Support genutzt; der Kunde hat die Zusammenarbeit danach verlängert" wirkt stärker als jedes „Ich bin sehr kundenorientiert". Autorität durch Präzision: Details belegen Expertise nebenbei („Wir sind damals über die Vertretungsregeln gestolpert – das prüfe ich seitdem zuerst").\n\nReziprozität funktioniert auch hier: Gib schon im Gespräch Mehrwert – eine Beobachtung zu ihrem Vorhaben, eine Idee, ein Hinweis auf einen Stolperstein, den du aus ähnlichen Projekten kennst. Wer im Interview schon wie ein Berater handelt, wird als Berater eingekauft. Konsistenz: Hol dir kleine Bestätigungen ab („Deckt sich das mit dem, was Sie vorhaben?") – ein Gegenüber, das dreimal zugestimmt hat, redet sich dein Profil selbst schön. Und Knappheit nur ehrlich: Deine reale Verfügbarkeit und laufende Anfragen darfst du transparent nennen – als Information, nie als Druckmittel.',
        },
        {
          kind: 'text',
          heading: 'Der Abschluss: kein Gespräch ohne nächsten Schritt',
          body: 'Kein Verkäufer verlässt einen Termin ohne vereinbarten nächsten Schritt – Kandidaten tun es ständig. Dabei ist der Gesprächsabschluss deine letzte und oft am besten erinnerte Wirkungschance.\n\nDrei Elemente gehören hinein: Erstens ein ehrliches Interessensignal – wenn du das Projekt willst, sag es klar („Das Projekt reizt mich aus zwei Gründen …"); Zurückhaltung wird oft als Desinteresse gelesen, nicht als Coolness. Zweitens die Prozessfrage: „Wie geht es von Ihrer Seite weiter – was ist der nächste Schritt, und bis wann entscheiden Sie?" Das ist die höfliche Form der Abschlussfrage: Sie zeigt Verbindlichkeit und gibt dir Planbarkeit. Drittens, wenn es passt, ein konkretes Angebot als Brücke: „Wenn es hilft, skizziere ich Ihnen gern auf einer Seite, wie ich die ersten 30 Tage angehen würde." Das ist Reziprozität, Eigeninitiative und ein Vorgeschmack auf die Zusammenarbeit in einem Satz. Was du weglässt: jede Form von Hard-Closing („Ich habe noch zwei andere Angebote, Sie müssten sich diese Woche entscheiden") – was beim Autokauf schon unangenehm ist, disqualifiziert einen Berater endgültig.',
        },
        {
          kind: 'table',
          headers: ['Vertriebstechnik', 'Im Kundengespräch', 'Im Vorstellungsgespräch'],
          rows: [
            [
              'Bedarfsanalyse',
              'Fragetreppe: Problem und Schmerz ermitteln',
              'Stellenbeschreibung als Lastenheft; hören, was betont wird; Rückfragen als Bedarfsermittlung',
            ],
            [
              'Nutzenargumentation',
              'Merkmal – Vorteil – Nutzen am Schmerz des Kunden',
              'Nicht Skills aufzählen, sondern belegen, welches Problem du damit für SIE löst',
            ],
            [
              'Soziale Bewährtheit',
              'Referenzkunden mit konkretem Ergebnis',
              'Ergebnisse und Reaktionen Dritter erzählen statt Eigenlob',
            ],
            [
              'Reziprozität',
              'Mehrwert vor Vertrag: Tipp, Analyse, PoC',
              'Schon im Gespräch eine Idee oder Beobachtung zum Vorhaben schenken',
            ],
            [
              'Konsistenz',
              'Kleine Jas sammeln auf dem Weg zum Abschluss',
              'Zwischen-Bestätigungen holen: „Deckt sich das mit Ihrem Bild?"',
            ],
            [
              'Abschlusstechnik',
              'Nächsten Schritt verbindlich vereinbaren',
              'Interesse klar aussprechen + Prozessfrage: „Was ist der nächste Schritt?"',
            ],
          ],
        },
        {
          kind: 'keypoints',
          title: 'Das Wichtigste in Kürze',
          points: [
            'Perspektivwechsel: Nicht „Wie präsentiere ich mich?", sondern „Welches Problem will mein Gegenüber lösen?"',
            'Stellenbeschreibung als Lastenheft: Zu den drei wichtigsten Anforderungen je einen Beleg vorbereiten (SEAT/STAR als Material).',
            'Im Gespräch auf den gehörten Bedarf antworten, nicht das Skript abspulen – was betont wird, ist der Schmerz.',
            'Social Proof statt Eigenlob: Ergebnisse und Dritte sprechen lassen; Autorität durch Präzision zeigen.',
            'Abschluss wie ein Profi: Interesse klar aussprechen, Prozessfrage stellen, ggf. Mehrwert anbieten – nie Hard-Closing.',
          ],
        },
        {
          kind: 'example',
          title: 'Die letzten zwei Minuten des Gesprächs',
          good: '„Ich will zum Schluss klar sagen: Das Projekt reizt mich – wegen der Kombination aus Neuaufbau und Team-Enablement, genau dafür bin ich gut. Wenn es Ihnen hilft, skizziere ich Ihnen gern auf einer Seite, wie ich die ersten 30 Tage angehen würde. Wie geht es denn von Ihrer Seite weiter – was ist der nächste Schritt, und bis wann wollen Sie entscheiden?"',
          bad: '„Ja, dann … danke für das Gespräch. Sie melden sich dann einfach, wenn es was wird, oder? Ach so, und falls es relevant ist: Ich habe noch zwei andere Anfragen laufen, lange kann ich Ihnen den Slot nicht freihalten."',
        },
      ],
      exercises: [
        {
          kind: 'quiz',
          id: 'sales-interview-q1',
          question:
            'Was ist der zentrale Perspektivwechsel, wenn man Vertriebstechniken auf das Vorstellungsgespräch überträgt?',
          options: [
            {
              text: 'Von „Wie präsentiere ich mich gut?" zu „Welches Problem will mein Gegenüber lösen – und wie werde ich sichtbar zur Lösung?"',
              correct: true,
              explanation:
                'Richtig. Wie im Verkauf zählt nicht das Produkt, sondern der Bedarf: Wer die Anforderungen des Gegenübers versteht und seine Erfahrung gezielt daran koppelt, wirkt relevanter als jeder noch so polierte Selbstdarsteller.',
            },
            {
              text: 'Von ehrlichen Antworten zu taktisch optimierten Antworten, die dem Interviewer gefallen.',
              correct: false,
              explanation:
                'Vertriebstechniken seriös einzusetzen heißt nicht zu schauspielern – erfundene Passung fliegt spätestens im Projekt auf. Es geht darum, die wahren eigenen Stärken am echten Bedarf des Gegenübers auszurichten.',
            },
            {
              text: 'Von Zuhören zu Reden: Wer verkauft, muss den Großteil des Gesprächs bestreiten.',
              correct: false,
              explanation:
                'Das Gegenteil stimmt: Gute Verkäufer hören mehr zu, als sie reden – auch im Interview. Wer hört, was betont wird, erkennt den echten Bedarf und antwortet darauf statt am Thema vorbei.',
            },
          ],
        },
        {
          kind: 'quiz',
          id: 'sales-interview-q2',
          question: 'Wie sieht ein professioneller Gesprächsabschluss im Vorstellungsgespräch aus?',
          options: [
            {
              text: 'Ehrliches Interesse klar aussprechen, nach dem weiteren Prozess und Zeitrahmen fragen – und optional einen konkreten Mehrwert anbieten (z.B. eine 30-Tage-Skizze).',
              correct: true,
              explanation:
                'Genau – das ist die Berater-Version der Abschlusstechnik: Verbindlichkeit zeigen, Planbarkeit gewinnen, Vorgeschmack auf die Zusammenarbeit geben. Ohne Druck, aber auch ohne das Gespräch einfach verpuffen zu lassen.',
            },
            {
              text: 'Druck aufbauen: auf andere laufende Angebote verweisen und eine Entscheidungsfrist setzen, damit die Firma schneller zusagt.',
              correct: false,
              explanation:
                'Hard-Closing disqualifiziert: Was schon beim Autokauf unangenehm ist, zerstört beim Berater das Vertrauensverhältnis, bevor es begonnen hat. Echte Verfügbarkeit darfst du transparent nennen – als Information, nie als Ultimatum.',
            },
            {
              text: 'Bewusst distanziert bleiben und kein Interesse zeigen – wer sich rar macht, wirkt begehrter.',
              correct: false,
              explanation:
                'Gespielte Gleichgültigkeit wird im Business selten als Coolness gelesen, sondern als Desinteresse – und bei zwei ähnlich starken Kandidaten gewinnt der, der das Projekt erkennbar will.',
            },
          ],
        },
        {
          kind: 'scenario',
          id: 'sales-interview-s1',
          situation:
            'Im Qualifizierungsgespräch merkst du: Die Projektleiterin kommt immer wieder auf ein Thema zurück – das interne Team sei überlastet und frühere Externe hätten „nur geliefert und nichts erklärt". Dein vorbereiteter Pitch dreht sich aber hauptsächlich um deine technische Mendix-Tiefe. Was tust du?',
          choices: [
            {
              text: 'Du erkennst den echten Bedarf und passt dich an: Du bestätigst das Thema („Das höre ich öfter – Externe, die Wissen mitnehmen statt dalassen"), bringst deinen stärksten Beleg für Enablement (Pairing, Doku, Schulung) und fragst nach: „Wäre das die Art Zusammenarbeit, die Sie suchen?"',
              quality: 'best',
              feedback:
                'Sehr gut: Du hast gehört, was betont wird – der Schmerz ist das überlastete Team und schlechte Erfahrungen, nicht die Technologie. Deine Antwort koppelt deine Erfahrung genau daran und holt mit der Rückfrage eine Bestätigung ab (Konsistenz-Prinzip). So verkauft ein Profi.',
            },
            {
              text: 'Du ziehst deinen vorbereiteten technischen Pitch durch – er ist stark, und am Ende entscheidet ohnehin die fachliche Qualifikation.',
              quality: 'bad',
              feedback:
                'Du beantwortest eine Frage, die niemand gestellt hat: Die fachliche Eignung bezweifelt hier offenbar niemand – die Sorge gilt der Zusammenarbeit. Wer am gehörten Bedarf vorbeipitcht, wirkt wie der Vorgänger, über den sich die Projektleiterin gerade beschwert hat.',
            },
            {
              text: 'Du versprichst spontan, zusätzlich zur Entwicklung wöchentliche Schulungen, ausführliche Videos und tägliche Pairing-Sessions – was immer sie will.',
              quality: 'ok',
              feedback:
                'Die Richtung stimmt (du gehst auf den Bedarf ein), aber Überversprechen ist die Vertriebsfalle: Alles zuzusagen wirkt beliebig und rächt sich im Projekt. Stärker: ein, zwei konkrete, belegte Formate nennen, die du wirklich geleistet hast – Qualität des Belegs schlägt Menge der Zusagen.',
            },
          ],
        },
        {
          kind: 'freetext',
          id: 'sales-interview-f1',
          task: 'Nimm eine reale Projekt- oder Stellenbeschreibung (oder dein nächstes Zielprojekt) und erstelle deine Verkaufs-Vorbereitung: die drei wichtigsten Anforderungen aus Sicht des Kunden, je ein konkreter Beleg aus deiner Erfahrung – und dein Abschluss-Satz mit Interessensignal und Prozessfrage.',
          placeholder:
            'Anforderung 1: … → Mein Beleg: …\nAnforderung 2: … → Mein Beleg: …\nAnforderung 3: … → Mein Beleg: …\nMein Abschluss: „…"',
          sampleSolution:
            'Anforderung 1: Mendix-Entwicklung auf Senior-Niveau → Beleg: Lieferantenportal, 8 Wochen bis Go-live, seitdem wartungsarm im Betrieb.\nAnforderung 2: Fachbereiche einbinden → Beleg: Anforderungsworkshops im Logistikprojekt; der Fachbereich hat die App ab Woche 2 selbst getestet.\nAnforderung 3: Team-Enablement → Beleg: Zwei interne Entwickler per Pairing eingearbeitet; nach drei Monaten haben sie Features eigenständig geliefert.\nMein Abschluss: „Das Vorhaben reizt mich – genau die Mischung aus Bauen und Befähigen liegt mir. Wie geht es von Ihrer Seite weiter, und bis wann wollen Sie entscheiden?"',
          checklist: [
            'Die drei Anforderungen stammen aus der Beschreibung bzw. dem vermuteten Schmerz des Kunden – nicht aus meinem Wunsch-Selbstbild.',
            'Jeder Beleg ist konkret: Projekt, Handlung, nachprüfbares Ergebnis (STAR-tauglich).',
            'Mein Abschluss enthält ein klares Interessensignal und die Prozessfrage.',
            'Nichts davon ist übertrieben oder erfunden – jeder Satz hält einer Nachfrage stand.',
          ],
        },
      ],
    },
  ],
}
