import type { GlossaryEntry } from '@/types/content'

/** All key terms and methods taught in the modules, linked to their lesson. */
export const glossaryEntries: GlossaryEntry[] = [
  // --- Communication fundamentals ---
  {
    term: 'Sender-Empfänger-Modell',
    definition:
      'Grundmodell der Kommunikation: Eine Botschaft wird vom Sender codiert und vom Empfänger decodiert – Missverständnisse entstehen, weil beide Seiten unterschiedlich ver- und entschlüsseln.',
    lessonId: 'basics-communication-model',
  },
  {
    term: 'Vier-Ohren-Modell (Schulz von Thun)',
    definition:
      'Jede Nachricht hat vier Seiten: Sachinhalt, Selbstkundgabe, Beziehung und Appell. Konflikte entstehen oft, weil der Empfänger auf einem anderen Ohr hört, als der Sender gesprochen hat.',
    lessonId: 'basics-four-sides',
  },
  {
    term: 'Eisbergmodell',
    definition:
      'Nur ein kleiner Teil der Kommunikation ist sichtbar (Sachebene) – der größere Teil (Beziehung, Gefühle, Motive) liegt unter der Oberfläche und bestimmt dennoch den Gesprächsverlauf.',
    lessonId: 'basics-iceberg-axioms',
  },
  {
    term: 'Watzlawick-Axiome',
    definition:
      'Fünf Grundregeln der Kommunikation nach Paul Watzlawick, darunter die bekannteste: Man kann nicht nicht kommunizieren – auch Schweigen und Körpersprache senden Botschaften.',
    lessonId: 'basics-iceberg-axioms',
  },
  {
    term: 'Aktives Zuhören',
    definition:
      'Zuhören mit voller Aufmerksamkeit und hörbarer Rückmeldung: nachfragen, zusammenfassen, Gefühle spiegeln – statt innerlich schon die eigene Antwort zu formulieren.',
    lessonId: 'listening-active',
  },
  {
    term: 'Paraphrasieren',
    definition:
      'Das Gehörte in eigenen Worten zusammenfassen („Habe ich richtig verstanden, dass …?") – prüft das Verständnis und zeigt dem Gegenüber, dass es wirklich gehört wurde.',
    lessonId: 'listening-active',
  },
  {
    term: 'Offene und geschlossene Fragen',
    definition:
      'Offene Fragen (W-Fragen) öffnen das Gespräch und liefern Informationen; geschlossene Fragen (Ja/Nein) verengen es und eignen sich für Entscheidungen und Bestätigungen.',
    lessonId: 'listening-questions',
  },
  {
    term: 'Trichtertechnik',
    definition:
      'Fragestrategie vom Breiten ins Konkrete: erst offene Fragen zum Überblick, dann nachbohrende Fragen, am Ende geschlossene Fragen zur Absicherung des Verstandenen.',
    lessonId: 'listening-questions',
  },
  {
    term: 'Feedbackregeln',
    definition:
      'Regeln für wirksames Feedback: konkret statt pauschal, beschreibend statt bewertend, zeitnah, auf veränderbares Verhalten bezogen – und als Angebot formuliert, nicht als Urteil.',
    lessonId: 'feedback-rules',
  },
  {
    term: 'Ich-Botschaft',
    definition:
      'Kritik aus der eigenen Perspektive formulieren („Ich habe wahrgenommen …, das wirkt auf mich …") statt Du-Vorwürfen – senkt Abwehr und hält das Gespräch sachlich.',
    lessonId: 'feedback-rules',
  },
  {
    term: 'Gewaltfreie Kommunikation (GFK)',
    definition:
      'Vier-Schritte-Modell nach Rosenberg: Beobachtung, Gefühl, Bedürfnis, Bitte. Trennt Wahrnehmung von Bewertung und macht Konfliktgespräche führbar.',
    lessonId: 'feedback-nvc',
  },
  {
    term: 'Agenda',
    definition:
      'Vorab verschickter Fahrplan eines Meetings mit Themen, Zielen und Zeitbudgets – die wichtigste Stellschraube gegen ausufernde, ergebnislose Besprechungen.',
    lessonId: 'meetings-prep',
  },
  {
    term: 'Moderation',
    definition:
      'Die Rolle, die ein Meeting durch den Prozess führt: Beiträge einsammeln, Vielredner bremsen, Stille aktivieren, Entscheidungen herbeiführen – neutral in der Sache.',
    lessonId: 'meetings-facilitation',
  },
  {
    term: 'Entscheidungsprotokoll',
    definition:
      'Knappes Protokoll, das nur Entscheidungen, Verantwortliche und Termine festhält (wer macht was bis wann) – statt das ganze Gespräch nachzuerzählen.',
    lessonId: 'meetings-results',
  },
  {
    term: 'Eskalationsstufen nach Glasl',
    definition:
      'Neun-Stufen-Modell, wie Konflikte sich verschärfen – von Verhärtung über Gesichtsverlust bis „gemeinsam in den Abgrund". Je tiefer die Stufe, desto eher braucht es externe Hilfe.',
    lessonId: 'conflict-escalation',
  },
  {
    term: 'Deeskalation',
    definition:
      'Techniken, um aufgeladene Situationen zu beruhigen: Tempo rausnehmen, zuhören, Gemeinsamkeiten betonen, Sach- von Beziehungsebene trennen – statt zurückzuschlagen.',
    lessonId: 'conflict-deescalation',
  },
  {
    term: 'Harvard-Konzept',
    definition:
      'Verhandlungsmethode mit vier Prinzipien: Menschen und Probleme trennen, Interessen statt Positionen verhandeln, Optionen entwickeln, objektive Kriterien nutzen.',
    lessonId: 'negotiation-harvard',
  },
  {
    term: 'BATNA',
    definition:
      'Best Alternative To a Negotiated Agreement: die beste Alternative, falls die Verhandlung scheitert. Wer seine BATNA kennt und verbessert, verhandelt aus Stärke.',
    lessonId: 'negotiation-batna',
  },
  {
    term: 'ZOPA',
    definition:
      'Zone Of Possible Agreement: der Bereich, in dem sich die Vorstellungen beider Seiten überlappen – nur dort ist eine Einigung möglich.',
    lessonId: 'negotiation-batna',
  },
  {
    term: 'Anker-Effekt',
    definition:
      'Die zuerst genannte Zahl setzt den Bezugsrahmen der gesamten Verhandlung – wer den ersten (gut begründeten) Anker setzt, zieht das Ergebnis in seine Richtung.',
    lessonId: 'negotiation-batna',
  },
  {
    term: 'Einwand vs. Vorwand',
    definition:
      'Ein Einwand ist ein echtes Bedenken, das sich ausräumen lässt; ein Vorwand verdeckt den wahren Grund. Die Unterscheidung gelingt über Rückfragen („Angenommen, das wäre gelöst …?").',
    lessonId: 'negotiation-objections',
  },
  {
    term: 'Merkmal-Vorteil-Nutzen (Nutzenargumentation)',
    definition:
      'Argumentationskette des Verkaufens: vom Merkmal („Low-Code-Plattform") über den Vorteil („schnellere Entwicklung") zum konkreten Nutzen für genau dieses Gegenüber („Ihr Portal in 8 Wochen live").',
    lessonId: 'negotiation-objections',
  },
  {
    term: 'Betreffzeile',
    definition:
      'Die wichtigste Zeile jeder E-Mail: Sie entscheidet über Öffnen und Priorität. Gut ist, was Inhalt und erwartete Aktion vorab erkennen lässt.',
    lessonId: 'written-emails',
  },

  // --- Presentation ---
  {
    term: 'Zielgruppenanalyse',
    definition:
      'Vor jeder Präsentation klären: Wer sitzt da, was weiß das Publikum schon, was will es erreichen, was soll es danach tun? Der Inhalt richtet sich nach den Zuhörern, nicht nach dem Redner.',
    lessonId: 'structure-audience',
  },
  {
    term: 'Pyramidenprinzip',
    definition:
      'Struktur-Methode nach Barbara Minto: die Kernbotschaft zuerst, darunter die stützenden Argumente, darunter die Details – statt chronologisch auf das Fazit hinzuarbeiten.',
    lessonId: 'structure-pyramid',
  },
  {
    term: 'Dramaturgie',
    definition:
      'Der bewusste Spannungsaufbau eines Vortrags: starker Einstieg (Hook), klar gegliederter Hauptteil, einprägsamer Schluss mit Handlungsaufforderung.',
    lessonId: 'structure-dramaturgy',
  },
  {
    term: 'Heldenreise',
    definition:
      'Erzählmuster für Business-Geschichten: Ein Held (oft der Kunde) steht vor einem Problem, findet einen Helfer bzw. Weg und erreicht ein verwandeltes Ergebnis.',
    lessonId: 'story-patterns',
  },
  {
    term: 'Elevator Pitch',
    definition:
      'Kurzvorstellung einer Idee oder Person in der Dauer einer Aufzugsfahrt (30–120 Sekunden): Wer bist du, welches Problem löst du, was ist der Beweis, was soll passieren?',
    lessonId: 'story-patterns',
  },
  {
    term: 'Daten-Storytelling',
    definition:
      'Zahlen in erlebbare Vergleiche und Geschichten übersetzen („ein halber Tag pro Woche" statt „10,4 % Effizienzgewinn") – denn gemerkt wird das Bild, nicht die Kommazahl.',
    lessonId: 'story-data',
  },
  {
    term: 'Trikolon (Dreierfigur)',
    definition:
      'Rhetorisches Mittel aus drei parallelen Elementen („schneller, einfacher, günstiger") – wirkt vollständig, rhythmisch und bleibt im Gedächtnis.',
    lessonId: 'rhetoric-devices',
  },
  {
    term: 'Anapher',
    definition:
      'Wiederholung desselben Satzanfangs („Wir haben das Budget. Wir haben das Team. Wir haben den Plan.") – erzeugt Rhythmus und Nachdruck.',
    lessonId: 'rhetoric-devices',
  },
  {
    term: 'Metapher',
    definition:
      'Sprachliches Bild, das Abstraktes anschaulich macht („Unser Datenbestand ist ein Rohdiamant") – Bilder bleiben hängen, wo Fachbegriffe verpuffen.',
    lessonId: 'rhetoric-devices',
  },
  {
    term: 'Antithese (Kontrast)',
    definition:
      'Gegenüberstellung zweier Pole, die die Botschaft schärft („Weniger Folien, mehr Wirkung") – eines der wirksamsten Mittel für Kernbotschaften.',
    lessonId: 'rhetoric-devices',
  },
  {
    term: 'Rhetorische Frage',
    definition:
      'Frage, die keine Antwort verlangt, sondern das Publikum innerlich antworten lässt („Können wir uns noch ein Jahr Stillstand leisten?") – aktiviert statt zu berieseln.',
    lessonId: 'rhetoric-devices',
  },
  {
    term: 'Füllwörter',
    definition:
      'Überbrückungsgeräusche wie „ähm", „halt", „quasi", „irgendwie" – entstehen aus Angst vor Stille. Wirksamster Ersatz: die bewusste Pause.',
    lessonId: 'rhetoric-fillers',
  },
  {
    term: 'Weichmacher',
    definition:
      'Wörter, die Aussagen vorsorglich abschwächen („eigentlich", „vielleicht", „nur", „ein bisschen") – sie verwässern Botschaften und signalisieren Unsicherheit.',
    lessonId: 'rhetoric-fillers',
  },
  {
    term: 'Konjunktiv-Falle',
    definition:
      'Vorschläge im Konjunktiv verstecken („Ich würde sagen …", „Man könnte eventuell …") – nimmt der Aussage die Verbindlichkeit. Lösung: „Ich schlage vor …".',
    lessonId: 'rhetoric-fillers',
  },
  {
    term: 'Rhetorische Pause',
    definition:
      'Bewusste Stille vor der Kernbotschaft (erzeugt Spannung) und danach (lässt sie wirken). Fühlt sich für den Redner lang an, wirkt auf das Publikum souverän.',
    lessonId: 'rhetoric-voice',
  },
  {
    term: 'Uptalk (Frage-Melodie)',
    definition:
      'Steigende Satzmelodie am Ende von Aussagen, die sie wie Fragen klingen lässt – das Publikum hört Unsicherheit. Gegenmittel: der hörbare Punkt, Stimme am Satzende nach unten.',
    lessonId: 'delivery-melody',
  },
  {
    term: 'Emotionale Ansteckung',
    definition:
      'Das Publikum übernimmt den hörbaren Zustand des Sprechers: Begeisterung erzeugt Interesse, Langeweile erzeugt Langeweile – die Grundlage mitreißender Vorträge.',
    lessonId: 'delivery-melody',
  },
  {
    term: 'Prinzip Wechsel (Aufmerksamkeits-Anker)',
    definition:
      'Das Gehirn blendet Gleichbleibendes aus. Deshalb alle 3–5 Minuten ein bewusster Wechsel: Format (Geschichte, Frage, Demo), Stimme (leiser, langsamer) oder Perspektive.',
    lessonId: 'delivery-liveliness',
  },
  {
    term: 'Nominalstil',
    definition:
      'Substantivlastige Schriftsprache („Die Durchführung der Implementierung erfolgte …") – das sprachliche Schlafmittel. Gesprochen wirken Verben: „Wir haben umgesetzt."',
    lessonId: 'delivery-liveliness',
  },
  {
    term: 'Blickkontakt',
    definition:
      'Das stärkste Verbindungssignal beim Präsentieren: einzelne Personen für je einen Gedanken ansehen, den Raum abdecken – statt an Folie, Boden oder Decke zu sprechen.',
    lessonId: 'body-eyes',
  },
  {
    term: 'Lampenfieber',
    definition:
      'Die körperliche Stressreaktion vor Auftritten. Lässt sich nicht abschalten, aber umdeuten (Aktivierung statt Angst) und mit Atmung, Vorbereitung und Routine steuern.',
    lessonId: 'body-nerves',
  },
  {
    term: 'Eine Botschaft pro Folie',
    definition:
      'Gestaltungsregel für Folien: Jede Folie trägt genau eine Aussage, erkennbar in der Überschrift – wer mehr unterbringen will, braucht eine zweite Folie.',
    lessonId: 'slides-less',
  },
  {
    term: 'Datenvisualisierung',
    definition:
      'Zahlen so darstellen, dass die Aussage auf einen Blick erkennbar ist: das richtige Diagramm wählen, Unwichtiges entfernen, die Kernaussage hervorheben.',
    lessonId: 'slides-data',
  },

  // --- IT consulting ---
  {
    term: 'Qualifizierungsgespräch',
    definition:
      'Das Interview, in dem ein Kunde oder Vermittler prüft, ob ein externer Consultant fachlich und menschlich zum Projekt passt – meist mit Projektleitung, Fachbereich oder Architekt.',
    lessonId: 'quali-basics',
  },
  {
    term: 'STAR-Methode',
    definition:
      'Erzählstruktur für Projektgeschichten: Situation, Task (Aufgabe), Action (dein Handeln), Result (messbares Ergebnis) – macht Erfahrung konkret und glaubwürdig.',
    lessonId: 'quali-pitch',
  },
  {
    term: 'SEAT-Methode',
    definition:
      'Vollständigkeits-Check für die Selbstpräsentation: Skills, Experience, Achievements, Training – deckt auf, welche Belege für die Zielrolle noch fehlen.',
    lessonId: 'quali-projects',
  },
  {
    term: 'Verdeckte Frage',
    definition:
      'Die eigentliche Prüffrage hinter einer Interviewfrage: „Wo sehen Sie sich in fünf Jahren?" heißt wirklich „Wie hoch ist das Risiko, dass Sie abspringen?". Wer sie erkennt, antwortet richtig.',
    lessonId: 'quali-classic-questions',
  },
  {
    term: 'Referenzgespräch',
    definition:
      'Telefonisches oder Remote-Interview (oft 45 Minuten), in dem Projektleitung und Fachexperte Profil, Arbeitsweise und Passung eines Kandidaten durchgehen.',
    lessonId: 'quali-reference-call',
  },
  {
    term: 'Halo-Effekt',
    definition:
      'Ein einzelnes auffälliges Merkmal (z.B. Zuspätkommen) überstrahlt die Gesamtwahrnehmung – der erste Eindruck färbt alles Folgende ein, positiv wie negativ.',
    lessonId: 'mistakes-behavior',
  },
  {
    term: 'Buzzword',
    definition:
      'Modewort ohne konkreten Inhalt („synergetisch", „disruptiv", „End-to-End"). Beim falschen Publikum wirkt Buzzword-Sprache ausweichend – Konkretes überzeugt.',
    lessonId: 'mistakes-language',
  },
  {
    term: 'Tabu-Fragen',
    definition:
      'Fragen, die im Vorstellungsgespräch falsch platziert sind (zu früh nach Urlaub, Homeoffice, Gehaltsdetails) – Heikles gehört in die Projektbrille verpackt oder in spätere Gespräche.',
    lessonId: 'mistakes-questions',
  },
  {
    term: 'Überzeugungsprinzipien (Cialdini)',
    definition:
      'Sechs erforschte Muster, nach denen Menschen Ja sagen: Reziprozität, Sympathie, soziale Bewährtheit, Autorität, Konsistenz, Knappheit – wirksam, deshalb nur ehrlich einsetzen.',
    lessonId: 'sales-principles',
  },
  {
    term: 'Reziprozität',
    definition:
      'Wer etwas bekommt, will etwas zurückgeben. Im Vertrieb: erst echten Mehrwert liefern (Tipp, Analyse, PoC), bevor man etwas will – das stärkste Vertrauenssignal.',
    lessonId: 'sales-principles',
  },
  {
    term: 'Social Proof (Soziale Bewährtheit)',
    definition:
      'Bei Unsicherheit orientieren sich Menschen an Ähnlichen: Eine Referenz mit vergleichbarem Kunden und konkretem Ergebnis wirkt stärker als jedes Eigenlob.',
    lessonId: 'sales-principles',
  },
  {
    term: 'Proof of Concept (PoC)',
    definition:
      'Kleiner Machbarkeitsnachweis am echten Problem des Kunden – senkt dessen Risiko, belegt Können und nutzt das Reziprozitäts-Prinzip: erst geben, dann gewinnen.',
    lessonId: 'sales-principles',
  },
  {
    term: 'Fragetreppe',
    definition:
      'Frageabfolge des Vertriebs: Situationsfrage → Problemfrage → Auswirkungsfrage → Nutzenfrage. Der Kunde benennt Problem und Nutzen selbst – das überzeugt mehr als jeder Pitch.',
    lessonId: 'sales-discovery',
  },
  {
    term: 'Auswirkungsfrage',
    definition:
      'Frage nach den Folgen eines Problems („Was kostet Sie das pro Monat?") – verwandelt ein benanntes Problem in einen spürbaren Schmerz mit Preisschild und erzeugt Dringlichkeit.',
    lessonId: 'sales-discovery',
  },
  {
    term: 'Pre-Sales',
    definition:
      'Die Phase vor dem Vertragsabschluss, in der Consultants den Vertrieb fachlich unterstützen: Bedarfsanalyse, Lösungsskizzen, Demos und Workshops beim potenziellen Kunden.',
    lessonId: 'sales-discovery',
  },
  {
    term: 'Hard-Closing',
    definition:
      'Abschlusstechnik mit Druck (künstliche Fristen, angebliche Konkurrenz). Im Beratungsumfeld tabu: Was beim Autokauf unangenehm ist, zerstört beim Berater das Vertrauen.',
    lessonId: 'sales-interview',
  },
  {
    term: 'Prozessfrage (Abschluss)',
    definition:
      'Die seriöse Abschlussfrage am Gesprächsende: „Wie geht es weiter – was ist der nächste Schritt, bis wann entscheiden Sie?" Zeigt Verbindlichkeit und gibt Planbarkeit.',
    lessonId: 'sales-interview',
  },
]
