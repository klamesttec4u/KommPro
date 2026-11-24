import type { InterviewQuestion, InterviewQuestionSet } from '@/types/content'

/**
 * Recruiter questions from the reference call (module 13, lesson 4),
 * used by the interview trainer: question first, ideal answer revealed
 * only after the learner has spoken.
 */
export const interviewQuestions: InterviewQuestion[] = [
  {
    id: 'iq-self-introduction',
    minute: 5,
    interviewer: 'Projektleitung',
    question: 'Erzählen Sie doch zum Einstieg etwas über sich und Ihren Werdegang.',
    followUp: 'Und was davon hat am meisten mit unserer Rolle zu tun?',
    idealAnswer:
      '„Gern, in zwei Minuten: Ich bin IT-Consultant mit Schwerpunkt Low-Code und entwickle seit drei Jahren hauptsächlich mit Mendix – davor klassisch Java. Zuletzt habe ich ein Lieferantenportal mit SAP-Anbindung als Lead Developer verantwortet: Go-live nach vier Monaten, heute rund 800 Nutzer. Daneben übernehme ich regelmäßig Anforderungs-Workshops und unterstütze im Pre-Sales mit Demos – diese Kombination aus Bauen und Beraten ist genau das, was Sie ausgeschrieben haben. In der Entwicklung arbeite ich KI-gestützt, unter anderem mit Claude für Reviews und Doku. Ich bin jemand, der Technik und Fachbereich zusammenbringt – für Ihr Projekt heißt das: früh sichtbare Ergebnisse und Anwender, die mitziehen."',
    checklist: [
      'Ich bin unter zwei Minuten geblieben.',
      'SEAT war erkennbar: Skills – Experience – ein Achievement mit Zahl – Type of Person mit Nutzen-Satz am Ende.',
      'Kein Lebenslauf-Vortrag und keine unbelegten Adjektive wie „teamfähig" oder „belastbar".',
      'Ich habe ein konkretes Projekt mit Ergebnis genannt.',
      'Die Kombination Entwicklung + Pre-Sales/Workshops kam vor.',
    ],
  },
  {
    id: 'iq-availability',
    minute: 9,
    interviewer: 'Projektleitung',
    question: 'Warum haben Sie aktuell Kapazität frei?',
    followUp: 'Hätte Ihr letzter Kunde Sie nicht gern verlängert?',
    idealAnswer:
      '„Mein letztes Projekt ist Ende des Monats planmäßig ausgelaufen – das Portal ist live und übergeben. Ich suche jetzt gezielt ein längerfristiges Engagement, in dem ich nicht nur entwickle, sondern eine Mendix-Landschaft mitgestalten kann. Genau deshalb hat mich Ihre Ausschreibung angesprochen."',
    checklist: [
      'Ich habe neutral-positiv geantwortet, ohne über frühere Kunden zu klagen.',
      'Die Antwort war kurz (unter 30 Sekunden).',
      'Ich habe die Brücke zur ausgeschriebenen Rolle geschlagen.',
    ],
  },
  {
    id: 'iq-last-project',
    minute: 10,
    interviewer: 'Architekt',
    question: 'Beschreiben Sie Ihr letztes Mendix-Projekt – was war Ihr Anteil?',
    followUp: 'Was war dabei die schwierigste technische Entscheidung?',
    idealAnswer:
      '„Das Lieferantenportal beim Maschinenbauer: Ausgangslage waren Bestellanfragen per E-Mail und Excel mit zwei Wochen Durchlaufzeit. Ich war Lead Developer in einem Dreier-Team: Ich habe das Domain Model entworfen, die Prozesslogik in Microflows gebaut und die SAP-Anbindung über REST umgesetzt. Das Rechtekonzept lief über Modulrollen und XPath-Constraints. Ergebnis: Durchlaufzeit unter zwei Tagen, 800 Nutzer. Der kniffligste Teil war die SAP-Schnittstelle – da gehe ich gern tiefer rein, wenn Sie mögen."',
    checklist: [
      'STAR war erkennbar: Situation, Aufgabe, mein Beitrag, Ergebnis.',
      'Mein eigener Anteil war klar als „ich" benannt.',
      'Ich habe mindestens ein messbares Ergebnis genannt.',
      'Ich habe Vertiefung angeboten statt alles auszubreiten.',
    ],
  },
  {
    id: 'iq-nanoflow',
    minute: 14,
    interviewer: 'Architekt',
    question: 'Wann nehmen Sie einen Nanoflow statt eines Microflows?',
    followUp: 'Haben Sie ein Beispiel, bei dem Sie sich zunächst falsch entschieden haben?',
    idealAnswer:
      '„Nanoflows laufen clientseitig – ich nehme sie für schnelle UI-Logik ohne Server-Roundtrip und zwingend für Offline-Szenarien. Microflows laufen serverseitig in einer Transaktion, also alles mit Datenbankzugriffen über mehrere Objekte, Integrationen oder sicherheitsrelevanter Logik. Faustregel bei mir: Validierung nah am Nutzer in den Nanoflow, Geschäftslogik in den Microflow."',
    checklist: [
      'Ich habe den Kernunterschied (client- vs. serverseitig) korrekt benannt.',
      'Ich habe konkrete Einsatzkriterien genannt, nicht nur Definitionen.',
      'Die Antwort war präzise und unter 45 Sekunden.',
    ],
  },
  {
    id: 'iq-quality',
    minute: 17,
    interviewer: 'Architekt',
    question: 'Wie stellen Sie Qualität in Ihren Apps sicher?',
    followUp: 'Und was machen Sie, wenn für Tests keine Zeit eingeplant ist?',
    idealAnswer:
      '„Auf mehreren Ebenen: Wir hatten Modellierungsrichtlinien und Peer-Reviews für jedes Feature – Reviews mache ich zusätzlich KI-gestützt mit Claude, gerade für Java-Actions. Pro Story gab es Testfälle, für kritische Microflows Unit-Tests, und vor jedem Release einen Blick in die Mendix-Qualitätsmetriken. Und ehrlicherweise die wichtigste Maßnahme: früh klickbare Prototypen zum Fachbereich, damit Fehler im Verständnis auffliegen, bevor sie Code werden."',
    checklist: [
      'Ich habe mehrere Ebenen genannt (Richtlinien, Reviews, Tests).',
      'Ich habe nicht behauptet, Low-Code mache Qualitätssicherung überflüssig.',
      'Ich habe einen eigenen Akzent gesetzt (z.B. frühe Prototypen).',
    ],
  },
  {
    id: 'iq-knowledge-gap',
    minute: 19,
    interviewer: 'Architekt',
    question: 'In Ihrem Profil steht OData – wie tief sind Sie da wirklich drin?',
    followUp: 'Wie lange bräuchten Sie realistisch, um darin produktiv zu sein?',
    idealAnswer:
      '„Da ordne ich ehrlich ein: Mein Schwerpunkt sind REST-Integrationen, damit habe ich mehrere produktive Schnittstellen gebaut. OData habe ich bisher einmal konsumierend genutzt, published OData noch nicht. Die Konzepte sind verwandt – wenn OData bei Ihnen zentral ist, arbeite ich mich gezielt ein; das ging bei mir zuletzt mit der Workflow-Engine auch innerhalb von zwei Wochen."',
    checklist: [
      'Ich habe ehrlich eingeordnet statt zu bluffen.',
      'Ich habe meine verwandte Stärke benannt.',
      'Ich habe meine Einarbeitungsfähigkeit mit einem Beispiel belegt.',
    ],
  },
  {
    id: 'iq-unclear-requirements',
    minute: 20,
    interviewer: 'Projektleitung',
    question: 'Wie gehen Sie vor, wenn Anforderungen unklar sind?',
    followUp: 'Und wenn der Fachbereich keine Zeit für Workshops hat?',
    idealAnswer:
      '„Dann gehe ich nicht in die Entwicklung, sondern erst in einen kurzen Workshop: Key-User an einen Tisch, die drei wichtigsten Abläufe durchsprechen, daraus User Stories mit Akzeptanzkriterien. Und dann nutze ich die Stärke von Mendix: Nach ein, zwei Wochen steht ein klickbarer Prototyp, an dem der Fachbereich viel konkreter Feedback gibt als an jedem Konzeptpapier. Unklarheit löst man durch Anschauen, nicht durch längere Dokumente."',
    checklist: [
      'Ich habe ein klares Vorgehen beschrieben (Workshop → Stories → Prototyp).',
      'Ich habe die Low-Code-Stärke (schneller Prototyp) genutzt.',
      'Die Antwort war ablauforientiert, nicht technisch überladen.',
    ],
  },
  {
    id: 'iq-ai-usage',
    minute: 23,
    interviewer: 'Projektleitung',
    question: 'Sie erwähnten KI – heißt das, Claude schreibt Ihren Code?',
    followUp: 'Woran merken Sie, dass ein KI-Vorschlag falsch ist?',
    idealAnswer:
      '„Nein – Claude beschleunigt mich, verantwortlich bleibe ich. Konkret nutze ich es für Entwürfe von Java-Actions, komplexe XPath-Ausdrücke, Testfälle und Dokumentation. Architektur, Domain Model und jede fachliche Entscheidung bleiben bei mir, und jedes generierte Artefakt prüfe ich, bevor es ins Modell geht. Effekt: etwa zwanzig Prozent mehr Tempo bei besserer Doku. Und wichtig: Kundendaten gebe ich nicht in KI-Tools – ich richte mich da vollständig nach Ihren Richtlinien."',
    checklist: [
      'Werkzeug-Framing: Die KI beschleunigt, ich verantworte.',
      'Ich habe konkrete Einsatzfelder genannt.',
      'Leitplanken kamen unaufgefordert: Prüfung, Kundendaten, Richtlinien.',
      'Ich bin nicht in einen Rechtfertigungston verfallen.',
    ],
  },
  {
    id: 'iq-presales-experience',
    minute: 27,
    interviewer: 'Projektleitung',
    question: 'Welche Erfahrung haben Sie mit Workshops und Pre-Sales-Terminen?',
    followUp: 'Was ist in einem Ihrer Termine schon einmal schiefgegangen?',
    idealAnswer:
      '„Konkret: In den letzten zwei Jahren habe ich sechs Pre-Sales-Termine technisch begleitet – mein Part waren Demo und Architektur-Fragen, aus drei Terminen wurden Aufträge. Dazu moderiere ich Anforderungs-Workshops, zuletzt zweitägig mit acht Key-Usern; Ergebnis war ein priorisiertes Backlog, das wir direkt umgesetzt haben. Was ich dabei gelernt habe: Ein klickbarer Prototyp überzeugt Entscheider mehr als jede Folie."',
    checklist: [
      'Ich habe konkrete Belege genannt (Anzahl Termine, Teilnehmer, Ergebnisse).',
      'Keine Behauptungen ohne Beispiel („traue ich mir zu").',
      'Ein Learning oder Prinzip rundete die Antwort ab.',
    ],
  },
  {
    id: 'iq-skeptic',
    minute: 31,
    interviewer: 'Projektleitung',
    question:
      'Angenommen, ein Interessent hält Low-Code für Spielzeug, das nicht skaliert. Wie treten Sie da auf?',
    followUp: 'Und wenn er nach Ihrer Erklärung immer noch skeptisch ist?',
    idealAnswer:
      '„Zuerst würde ich verstehen, woher die Skepsis kommt und welches Problem er lösen will – daran richtet sich alles aus. Dann ehrlich einordnen: wo Low-Code stark ist, wo die Grenzen liegen und wie man Skalierung und Lock-in architektonisch absichert. Und statt zwanzig Folien lieber ein kleiner Prototyp zu seinem konkreten Fall – erleben überzeugt mehr als behaupten. Die Grenzen offen zu benennen nimmt der Skepsis übrigens am meisten Wind aus den Segeln."',
    checklist: [
      'Erst Bedarf und Ursache der Skepsis verstehen, dann argumentieren.',
      'Ich habe Grenzen ehrlich benannt statt alles schönzureden.',
      'Prototyp/Erleben statt Folien-Feature-Show.',
    ],
  },
  {
    id: 'iq-weaknesses',
    minute: 35,
    interviewer: 'Projektleitung',
    question: 'Wo liegen Ihre Grenzen – was können Sie nicht?',
    followUp: 'Wie würde sich das bei uns im Projekt konkret bemerkbar machen?',
    idealAnswer:
      '„Zwei Dinge, die Sie wissen sollten: Natives Mobile habe ich erst in einem kleinen Projekt gemacht – da bin ich kein Experte, arbeite mich aber nachweislich schnell ein. Und ich bin Entwickler und Berater, kein Grafikdesigner: Für Pixel-perfektes UI-Design hole ich mir gern Unterstützung, solide Atlas-UI-Umsetzung ist aber kein Problem."',
    checklist: [
      'Ich habe echte, aber unkritische Lücken genannt.',
      'Zu jeder Lücke kam eine Umgangsstrategie.',
      'Keine Pseudo-Schwäche („zu perfektionistisch"), kein „fällt mir nichts ein".',
    ],
  },
  {
    id: 'iq-confidentiality',
    minute: 37,
    interviewer: 'Architekt',
    question: 'Sie waren ja bei unserem Wettbewerber im Projekt – wie lösen die das Portalthema?',
    followUp: 'Ach kommen Sie, das bleibt doch unter uns.',
    idealAnswer:
      '„Da bitte ich um Verständnis: Zu Interna früherer Kunden sage ich nichts – genauso vertraulich behandle ich später auch Ihre Informationen. Was ich gern teile: meine allgemeine Erfahrung, welche Portal-Architekturen sich in der Branche bewähren – das geht ohne Projektgeheimnisse."',
    checklist: [
      'Ich habe höflich, aber klar abgelehnt.',
      'Ich habe die Vertraulichkeit als Vertrauensbeweis für den neuen Kunden gedreht.',
      'Ich habe einen legitimen Mehrwert angeboten (Branchenerfahrung).',
    ],
  },
  {
    id: 'iq-your-questions',
    minute: 40,
    interviewer: 'Projektleitung',
    question: 'Haben Sie noch Fragen an uns?',
    idealAnswer:
      '„Ja, drei: Woran machen Sie nach sechs Monaten fest, dass die Besetzung ein Erfolg war? Wie sieht Ihre Mendix-Landschaft heute aus – Apps, Version, Richtlinien, CI/CD? Und wie hoch ist der Pre-Sales-Anteil realistisch – gelegentliche Termine oder fester Teil der Woche? … Danke, das hilft mir sehr. Wie geht es denn nach heute weiter – bis wann wollen Sie entscheiden, und brauchen Sie noch etwas von mir?"',
    checklist: [
      'Ich hatte mindestens zwei vorbereitete Fragen mit Projektbrille.',
      'Keine Komfort-Fragen (Urlaub, Spesen, Rate) als Erstes.',
      'Ich habe den nächsten Schritt im Prozess erfragt.',
    ],
  },
]

/**
 * The classic interview questions (module 13, lesson "Die Klassiker"):
 * the standard canon from strengths to daily rate, adapted to the
 * external-consultant context.
 */
export const classicInterviewQuestions: InterviewQuestion[] = [
  {
    id: 'ciq-strengths',
    interviewer: 'Projektleitung',
    question: 'Was sind Ihre größten Stärken?',
    followUp: 'Woran würde Ihr letzter Projektleiter diese Stärke festmachen?',
    idealAnswer:
      '„Ich nenne Ihnen die zwei, die für diese Rolle am meisten zählen: Erstens die Verbindung aus Entwicklung und Kundenkontakt – ich kann eine Anwendung bauen UND sie dem Fachbereich erklären, das zeigt sich in meinen Workshops und Demos. Zweitens Struktur unter Zeitdruck: Auch im Portalprojekt mit hartem Go-live-Termin habe ich priorisiert statt hektisch zu werden – wir sind pünktlich live gegangen."',
    checklist: [
      'Ich habe zwei Stärken genannt, nicht fünf Adjektive.',
      'Beide Stärken passen erkennbar zur ausgeschriebenen Rolle.',
      'Jede Stärke hatte einen konkreten Beleg (Projekt, Ergebnis).',
    ],
  },
  {
    id: 'ciq-weaknesses',
    interviewer: 'Projektleitung',
    question: 'Und was ist Ihre größte Schwäche?',
    followUp: 'Das klingt recht harmlos. Was ist Ihre wirkliche Schwäche?',
    idealAnswer:
      '„Natives Mobile mit Mendix habe ich erst in einem Projekt gemacht – da bin ich noch nicht auf dem Niveau wie bei Web-Apps. Ich gleiche das gezielt aus: Beim letzten Mal habe ich mich über die Mendix-Academy-Module eingearbeitet und einen erfahrenen Kollegen reviewen lassen – nach drei Wochen lief das Modul produktiv. Wenn Mobile bei Ihnen zentral ist, sage ich das lieber jetzt als im Sprint 3."',
    checklist: [
      'Meine Schwäche war echt – keine getarnte Stärke („Perfektionist").',
      'Sie trifft keine Kernanforderung der Rolle.',
      'Ich habe eine konkrete Gegenmaßnahme genannt.',
    ],
  },
  {
    id: 'ciq-why-you',
    interviewer: 'Projektleitung',
    question:
      'Warum sollten wir uns für Sie entscheiden – und nicht für einen der anderen Kandidaten?',
    followUp: 'Und was können Sie weniger gut als andere Kandidaten?',
    idealAnswer:
      '„Die anderen Kandidaten kenne ich nicht – aber ich kann Ihnen sagen, was Sie bei mir sicher bekommen: die Kombination aus Mendix-Entwicklung auf Lead-Niveau und echter Pre-Sales-Erfahrung, beides belegbar. Dazu eine moderne, KI-gestützte Arbeitsweise mit klaren Leitplanken. Wenn genau diese Kombination Ihr Engpass ist, bin ich eine sichere Wahl."',
    checklist: [
      'Ich habe nicht über andere Kandidaten spekuliert oder sie abgewertet.',
      'Ich habe meinen Profil-Match konkret benannt statt Superlative zu stapeln.',
      'Die Antwort blieb unter 45 Sekunden.',
    ],
  },
  {
    id: 'ciq-why-freelance',
    interviewer: 'HR',
    question: 'Warum arbeiten Sie als externer Consultant und nicht in Festanstellung?',
    followUp: 'Würden Sie für das richtige Angebot in eine Festanstellung wechseln?',
    idealAnswer:
      '„Eine bewusste Entscheidung: Ich arbeite am liebsten dort, wo ein konkretes Vorhaben Tempo braucht – dafür ist das externe Modell ideal. Für Sie hat es einen Vorteil: Sie bekommen jemanden, der vom ersten Tag an liefern muss und will. Und innerhalb eines Vertrags bin ich voll committed – gerade bei einem längerfristigen Engagement wie diesem."',
    checklist: [
      'Ich habe die Freiberuflichkeit als bewusste, positive Entscheidung erzählt.',
      'Geld war nicht mein Hauptargument.',
      'Ich habe den Vorteil für den Kunden herausgestellt.',
    ],
  },
  {
    id: 'ciq-five-years',
    interviewer: 'Projektleitung',
    question: 'Wo sehen Sie sich in fünf Jahren – und wie lange bleiben Sie uns erhalten?',
    followUp: 'Und wenn mittendrin ein besser bezahltes Angebot kommt?',
    idealAnswer:
      '„Fachlich will ich in fünf Jahren der sein, den man holt, wenn eine Mendix-Landschaft strategisch aufgebaut werden soll – Architektur, Governance, Team-Enablement. Genau deshalb reizt mich ein längerfristiges Engagement wie Ihres: Hier kann ich das aufbauen statt nur zuzuliefern. Für die Vertragslaufzeit können Sie fest mit mir planen – Zusagen halte ich."',
    checklist: [
      'Ich habe eine ehrliche fachliche Perspektive skizziert.',
      'Ich habe die Brücke zum längerfristigen Engagement geschlagen.',
      'Ich habe Verlässlichkeit für die Vertragslaufzeit konkret zugesichert.',
    ],
  },
  {
    id: 'ciq-cv-gap',
    interviewer: 'HR',
    question: 'In Ihrem Profil ist eine Lücke von mehreren Monaten – was war da?',
    followUp: 'Hatten Sie in dieser Zeit Projektangebote?',
    idealAnswer:
      '„Das war eine bewusste Pause nach einem intensiven Großprojekt: erst Auszeit, danach habe ich die Zeit für die Mendix-Advanced-Zertifizierung und den Aufbau meines KI-Workflows genutzt. Seit ich wieder im Projekt bin, profitiere ich jeden Tag davon."',
    checklist: [
      'Ich habe ruhig und ohne Rechtfertigungston geantwortet.',
      'Die Lücke hatte eine nachvollziehbare Erzählung (Erholung + Weiterbildung).',
      'Ich habe den Nutzen für heute benannt.',
    ],
  },
  {
    id: 'ciq-conflict',
    interviewer: 'Projektleitung',
    question: 'Erzählen Sie von einem Konflikt in einem Projekt – und wie Sie ihn gelöst haben.',
    followUp: 'Was hätten Sie rückblickend anders gemacht?',
    idealAnswer:
      '„Im Portalprojekt wollte der Fachbereich kurz vor Go-live noch eine Workflow-Änderung, der Projektleiter wollte den Termin halten – ich saß dazwischen. Ich habe beide an einen Tisch geholt und den Konflikt auf die Sachfrage zurückgeführt: Was kostet die Änderung jetzt, was nach Go-live? Ergebnis: Go-live wie geplant, die Änderung kam zwei Wochen später als erstes Update. Mein Learning: solche Wünsche früher aktiv abfragen."',
    checklist: [
      'Ich habe einen ECHTEN Konflikt erzählt, nicht „ich habe nie Konflikte".',
      'Ich habe den Lösungsweg als Prozess beschrieben (Sachebene, Beteiligte, Ergebnis).',
      'Niemand wurde als Schuldiger dargestellt – und ein Learning war dabei.',
    ],
  },
  {
    id: 'ciq-pressure',
    interviewer: 'Architekt',
    question: 'Wie gehen Sie mit Druck und engen Deadlines um?',
    followUp: 'Wann haben Sie zuletzt einen Termin nicht gehalten?',
    idealAnswer:
      '„Mit Priorisierung und Transparenz: Wenn es eng wird, kläre ich mit dem Product Owner, was wirklich zum Termin muss und was danach kommen kann – und sage früh Bescheid, wenn etwas kippt, nicht erst am Tag der Deadline. Beim Portal-Go-live haben wir so zwei Nice-to-have-Features bewusst geschoben und den Termin gehalten."',
    checklist: [
      'Meine Antwort zeigte eine Methode (priorisieren, kommunizieren), kein Heldentum.',
      'Ich habe NICHT mit Nachtschichten und Wochenendarbeit geprahlt.',
      'Ein konkretes Beispiel war enthalten.',
    ],
  },
  {
    id: 'ciq-rate',
    interviewer: 'Einkauf',
    question: 'Ihr Tagessatz liegt über unserem Budget – geht da noch was?',
    followUp: 'Ein anderer Kandidat macht es für fünfzehn Prozent weniger.',
    idealAnswer:
      '„Ich verstehe, dass Sie aufs Budget schauen. Der Satz spiegelt, dass Sie zwei Profile in einem bekommen – Entwicklung auf Lead-Niveau plus Pre-Sales- und Workshop-Unterstützung – und dass ich ab Tag eins produktiv bin. Beim Preis selbst habe ich wenig Spielraum, aber reden wir über das Paket: Bei einer längeren Laufzeit mit planbarer Auslastung kann ich Ihnen entgegenkommen. Was wäre für Sie ein tragfähiger Rahmen?"',
    checklist: [
      'Ich habe zuerst den Wert begründet statt sofort nachzugeben.',
      'Ich habe über das Paket (Laufzeit, Auslastung) verhandelt, nicht nur über Rabatt.',
      'Ich bin freundlich und verhandlungsbereit geblieben, ohne mich zu entwerten.',
    ],
  },
  {
    id: 'ciq-about-us',
    interviewer: 'Projektleitung',
    question: 'Was wissen Sie über uns – und warum gerade dieses Projekt?',
    followUp: 'Was sehen Sie bei uns kritisch?',
    idealAnswer:
      '„Ich habe gesehen, dass Sie seit zwei Jahren eine Mendix-Landschaft aufbauen und zuletzt das Kundenportal gelauncht haben – und Ihrer Ausschreibung entnehme ich, dass jetzt mehr Apps und mehr internes Enablement anstehen. Genau diese Phase finde ich spannend: nicht die erste App bauen, sondern die Plattform skalieren. Dazu kommt die Pre-Sales-Komponente – die Mischung bietet kaum eine Ausschreibung."',
    checklist: [
      'Ich hatte mindestens zwei konkrete, recherchierte Bezüge zum Kunden.',
      'Ich habe erklärt, warum DIESES Projekt – nicht nur „ich suche halt was".',
      'Die Motivation passte zur ausgeschriebenen Rolle.',
    ],
  },
]

/**
 * Pressure questions (module 17, lesson "Souverän unter Druck"): provocations
 * and uncomfortable questions that test composure rather than knowledge.
 */
export const pressureInterviewQuestions: InterviewQuestion[] = [
  {
    id: 'piq-thin-experience',
    interviewer: 'Architekt',
    question: 'Ehrlich gesagt wirkt Ihre Erfahrung für diese Rolle etwas dünn.',
    followUp: 'Andere Kandidaten bringen doppelt so viele Jahre mit.',
    idealAnswer:
      '„Ich verstehe, dass Sie da genau hinschauen – die Rolle ist kritisch für Sie. Drei Jahre Mendix sind weniger, als mancher andere Kandidat mitbringt, das stimmt. Was Sie dafür bekommen: Ich habe in dieser Zeit ein Portal als Lead Developer live gebracht, inklusive SAP-Anbindung, und begleite parallel Pre-Sales-Termine. An welcher Stelle haben Sie die größten Bedenken? Dann gehe ich dort konkret rein."',
    checklist: [
      'Ich habe die Sorge anerkannt, ohne mich kleinzumachen oder zu entschuldigen.',
      'Ich habe mit einem konkreten Beleg geantwortet statt mit Beteuerungen.',
      'Ich habe mit einer Rückfrage auf die Sachebene zurückgeführt.',
      'Mein Tempo ist ruhiger geworden, nicht schneller.',
    ],
  },
  {
    id: 'piq-failure',
    interviewer: 'Projektleitung',
    question: 'Erzählen Sie von einem Projekt, in dem Sie gescheitert sind.',
    followUp: 'Wer war aus Ihrer Sicht schuld daran?',
    idealAnswer:
      '„In einem frühen Mendix-Projekt habe ich den Aufwand für die Datenmigration unterschätzt – ich hatte die Datenqualität im Altsystem nicht geprüft. Folge: Der Go-live hat sich um drei Wochen verschoben. Ich habe das dem Kunden gemeldet, sobald es absehbar war, und einen neuen Plan mit zwei Zwischenständen vorgelegt. Seitdem gehört eine Datenanalyse bei mir in die erste Projektwoche – im Portalprojekt hat genau das die Migration unauffällig gemacht."',
    checklist: [
      'Ich habe einen echten Fehlschlag erzählt, keinen getarnten Erfolg.',
      'Mein eigener Anteil war klar benannt – keine Schuldigen.',
      'Ich habe gezeigt, wie ich damals reagiert habe (früh melden, neuer Plan).',
      'Ein konkretes Learning mit Beleg für die Umsetzung war dabei.',
    ],
  },
  {
    id: 'piq-unconvincing',
    interviewer: 'Architekt',
    question: 'Das haben Sie eben aber nicht besonders überzeugend beantwortet.',
    followUp: 'Und jetzt bitte in einem Satz.',
    idealAnswer:
      '„Dann fasse ich es klarer: Mein Kernpunkt ist, dass Geschäftslogik bei mir serverseitig in Microflows liegt und nur Validierung nah am Nutzer in Nanoflows. Was hat Ihnen konkret gefehlt – das Warum dahinter oder ein Beispiel aus dem Projekt?"',
    checklist: [
      'Ich habe nicht beleidigt oder defensiv reagiert.',
      'Ich habe meinen Kernpunkt in ein bis zwei Sätzen neu gefasst.',
      'Ich habe nachgefragt, was genau gefehlt hat, statt alles zu wiederholen.',
      'Keine Entschuldigungs-Kaskade.',
    ],
  },
  {
    id: 'piq-overwhelmed',
    interviewer: 'Projektleitung',
    question:
      'Was machen Sie, wenn Sie bei uns nach zwei Wochen merken, dass Sie überfordert sind?',
    followUp: 'Ist Ihnen das schon einmal passiert?',
    idealAnswer:
      '„Dann sage ich es Ihnen – früh und konkret, nicht erst, wenn ein Termin kippt. Ich würde benennen, woran es liegt: fehlendes Domänenwissen, unklare Anforderungen oder schlicht zu viel parallel. Und ich komme mit einem Vorschlag: was ich brauche und was ich bis wann trotzdem liefere. Im Portalprojekt habe ich so nach zehn Tagen einen SAP-Ansprechpartner eingefordert – das hat uns Wochen gespart."',
    checklist: [
      'Ich habe die Möglichkeit nicht abgestritten („passiert mir nicht").',
      'Frühe, konkrete Kommunikation war mein Kernpunkt.',
      'Ich habe gezeigt, dass ich mit einem Lösungsvorschlag komme, nicht nur mit dem Problem.',
      'Ein Beispiel aus der Praxis war enthalten.',
    ],
  },
  {
    id: 'piq-low-code',
    interviewer: 'Architekt',
    question:
      'Seien wir ehrlich: Low-Code machen doch die, die nicht richtig programmieren können.',
    followUp: 'Wann haben Sie zuletzt wirklich Code geschrieben?',
    idealAnswer:
      '„Die Skepsis kenne ich – und für einfache Klick-Apps stimmt sie sogar. Ich komme aus der Java-Entwicklung und nutze das heute täglich: für Java-Actions, Integrationen und alles, wo das Modell an Grenzen kommt. Low-Code nimmt mir die Fleißarbeit ab, nicht die Architektur. Wo sehen Sie bei Ihrer Landschaft die Stellen, an denen es mit dem Modell allein nicht reicht?"',
    checklist: [
      'Ich habe auf den sachlichen Kern geantwortet, nicht auf die Provokation.',
      'Ich habe den wahren Teil der Aussage anerkannt.',
      'Ich habe meine Programmier-Erfahrung konkret belegt.',
      'Kein Gegenangriff, kein Rechtfertigungston.',
    ],
  },
  {
    id: 'piq-nervous',
    interviewer: 'Projektleitung',
    question: 'Sie wirken etwas nervös – ist das in Kundenterminen auch so?',
    idealAnswer:
      '„Etwas Anspannung habe ich vor Terminen, die mir wichtig sind – und dieser ist es. Im Kundentermin hilft mir das eher: Ich bin dadurch sehr gut vorbereitet. Im letzten Anforderungs-Workshop saßen acht Key-User am Tisch, zwei davon deutlich skeptisch – am Ende stand ein priorisiertes Backlog, das wir direkt umgesetzt haben."',
    checklist: [
      'Ich habe die Nervosität kurz und entspannt eingeräumt, nicht geleugnet.',
      'Ich habe sie als Zeichen von Wichtigkeit gerahmt, nicht als Schwäche.',
      'Ich habe mit einem Beleg aus einem echten Kundentermin geantwortet.',
      'Die Antwort war kurz – kein langes Erklären meiner Gefühlslage.',
    ],
  },
  {
    id: 'piq-criticism',
    interviewer: 'HR',
    question: 'Was hat Ihr letzter Kunde an Ihnen kritisiert?',
    followUp: 'Halten Sie die Kritik heute noch für berechtigt?',
    idealAnswer:
      '„Der Projektleiter hat mir zurückgemeldet, dass ich in Status-Runden zu tief in technische Details gehe. Er hatte recht: Das Management wollte Ampel und Entscheidungsbedarf, nicht die Schnittstellen-Historie. Ich beginne Status-Updates seitdem mit dem Gesamtstatus und der einen Entscheidung, die ich brauche – Details nur auf Nachfrage. Zwei Monate später kam von ihm die Rückmeldung, dass die Runden deutlich kürzer geworden sind."',
    checklist: [
      'Ich habe eine echte Kritik genannt, kein verstecktes Lob.',
      'Ich habe die Kritik angenommen statt sie zu relativieren.',
      'Ich habe konkret beschrieben, was ich seitdem anders mache.',
      'Der Kunde wurde nicht schlecht dargestellt.',
    ],
  },
  {
    id: 'piq-rejection',
    interviewer: 'Projektleitung',
    question: 'Angenommen, wir sagen Ihnen morgen ab – was glauben Sie, woran es gelegen hätte?',
    followUp: 'Warum sollten wir dieses Risiko dann eingehen?',
    idealAnswer:
      '„Am ehesten an der Branchenerfahrung: Ihr Umfeld kenne ich bisher nur von außen, und ein Kandidat, der das schon mitbringt, hätte in den ersten Wochen einen Vorsprung. An Mendix und an der Workshop-Seite würde es nach meiner Einschätzung nicht liegen. Wenn die Branche für Sie tatsächlich der kritische Punkt ist: Woran würden Sie in den ersten vier Wochen festmachen, dass die Einarbeitung funktioniert?"',
    checklist: [
      'Ich habe eine ehrliche, plausible Schwachstelle benannt.',
      'Ich habe mich dabei nicht selbst demontiert oder mehrere Schwächen aufgezählt.',
      'Ich habe meine Stärken ruhig danebengestellt.',
      'Ich habe die Frage in eine konstruktive Rückfrage gedreht.',
    ],
  },
]

/**
 * Technical Mendix questions an architect typically asks. The model answers
 * show structure and depth; the learner swaps the examples for their own.
 */
export const technicalInterviewQuestions: InterviewQuestion[] = [
  {
    id: 'tiq-domain-model',
    interviewer: 'Architekt',
    question: 'Wie gehen Sie an ein Domain Model heran – und wann setzen Sie Vererbung ein?',
    followUp: 'Wann würden Sie eine Vererbung wieder ausbauen?',
    idealAnswer:
      '„Ich starte bei den Geschäftsobjekten und Abläufen, nicht bei den Masken: Welche Dinge gibt es fachlich, wie hängen sie zusammen, wem gehören sie? Daraus entstehen Entitäten mit sprechenden Namen, bewusst gewählten Assoziationen und einem definierten Löschverhalten. Vererbung setze ich sparsam ein, maximal zwei Ebenen: Jede Spezialisierung kostet Joins, und Zugriffsregeln werden nicht vererbt, sondern müssen pro Entität gepflegt werden. Oft reicht eine Entität mit Typ-Enumeration oder eine Eins-zu-eins-Assoziation. Im Portalprojekt haben wir Vererbung nur für Dokument-Anhänge genutzt – Anfrage und Angebot blieben eigenständige Entitäten."',
    checklist: [
      'Ich bin vom Fachlichen ausgegangen, nicht von Seiten oder Tabellen.',
      'Ich habe Assoziationen und Löschverhalten als bewusste Entscheidungen erwähnt.',
      'Ich habe die Kosten von Vererbung benannt (Performance, Zugriffsregeln) und eine Alternative genannt.',
      'Ein Beispiel aus einem eigenen Projekt war dabei.',
    ],
  },
  {
    id: 'tiq-security',
    interviewer: 'Architekt',
    question: 'Wie setzen Sie ein Berechtigungskonzept in Mendix um?',
    followUp: 'Reicht es nicht, den Button für die Rolle einfach auszublenden?',
    idealAnswer:
      '„In drei Schichten. Erstens Rollen: fachliche Benutzerrollen, die sich aus Modulrollen zusammensetzen. Zweitens Seiten- und Microflow-Zugriff pro Modulrolle. Drittens – und das ist die entscheidende Schicht – Entity Access: Lese- und Schreibrechte auf Attributebene, dazu XPath-Constraints für die Zeilenebene, etwa dass ein Lieferant nur seine eigenen Anfragen sieht. Mein Grundsatz: Sicherheit gehört ins Domain Model, nicht in die Oberfläche. Ein ausgeblendeter Button schützt keine Daten. Getestet wird mit je einem Demo-User pro Rolle – und zwar auch das, was er NICHT sehen darf."',
    checklist: [
      'Ich habe die Ebenen sauber getrennt: Rollen, Seiten und Microflows, Entity Access.',
      'XPath-Constraints für die Zeilenebene kamen vor.',
      'Ich habe klargestellt: Ausblenden in der Oberfläche ist kein Schutz.',
      'Ich habe gesagt, wie ich das Konzept teste.',
    ],
  },
  {
    id: 'tiq-entity-access',
    interviewer: 'Architekt',
    question: 'Greifen die Zugriffsregeln der Entitäten eigentlich auch innerhalb von Microflows?',
    followUp: 'Wie stellen Sie sicher, dass das im Team niemand vergisst?',
    idealAnswer:
      '„Standardmäßig nicht. Ein Microflow läuft mit vollen Rechten, solange die Microflow-Option Apply entity access nicht aktiviert ist. Das ist gewollt – Geschäftslogik muss oft mehr dürfen als der Nutzer –, aber es ist auch die klassische Lücke: Ein Microflow, der Daten an eine Seite oder eine Schnittstelle liefert, gibt ohne eigene Einschränkung alles zurück. Deshalb schränke ich Retrieves in solchen Microflows bewusst selbst ein, zum Beispiel auf den aktuellen Nutzer, oder schalte die Option ein. Bei veröffentlichten REST-Services prüfe ich das in jedem Review."',
    checklist: [
      'Ich habe die Frage klar beantwortet: standardmäßig nein.',
      'Ich habe die Option „Apply entity access" genannt.',
      'Ich habe das Risiko konkret gemacht (Datenquelle für Seite oder Schnittstelle).',
      'Ich habe gesagt, wie ich es absichere.',
    ],
  },
  {
    id: 'tiq-slow-page',
    interviewer: 'Architekt',
    question: 'Eine Übersichtsseite mit 200.000 Datensätzen lädt langsam. Wie gehen Sie vor?',
    followUp: 'Woran erkennen Sie, dass Ihre Maßnahme wirklich geholfen hat?',
    idealAnswer:
      '„Erst messen, dann ändern: Im Netzwerk-Tab des Browsers und im Log sehe ich, welche Abfrage die Zeit frisst. Danach prüfe ich die üblichen Verdächtigen. Fehlen Indizes auf den Attributen, nach denen gesucht und sortiert wird? Gibt es berechnete Attribute – die werden bei jedem Retrieve neu berechnet; besser als gespeicherten Wert vor dem Commit setzen. Hängt die Liste an einem Datenquellen-Microflow statt an der Datenbank, sodass kein serverseitiges Paging greift? Zieht die Seite Spalten über mehrere Assoziationen nach? Und läuft die Suche über Contains – da hilft kein Index. Ich ändere genau eine Sache und messe wieder."',
    checklist: [
      'Ich habe mit Messen begonnen, nicht mit Vermutungen.',
      'Ich habe mindestens drei konkrete Ursachen genannt (Index, berechnete Attribute, Datenquelle, Assoziationen).',
      'Ich habe ein schrittweises Vorgehen beschrieben: eine Änderung, erneut messen.',
      'Die Antwort blieb strukturiert und unter 90 Sekunden.',
    ],
  },
  {
    id: 'tiq-microflow-performance',
    interviewer: 'Architekt',
    question: 'Was sind die typischen Performance-Fehler in Microflows?',
    followUp: 'Wie groß wählen Sie die Pakete bei Massenverarbeitung – und warum?',
    idealAnswer:
      '„Der Klassiker ist Datenbankarbeit in der Schleife: ein Retrieve oder ein Commit pro Durchlauf. Bei tausend Objekten sind das tausend Datenbankzugriffe statt einem. Ich hole die benötigten Daten vor der Schleife, sammle geänderte Objekte in einer Liste und committe einmal danach. Zweiter Fehler: riesige Datenmengen in einer einzigen Transaktion – das verarbeite ich paketweise, jedes Paket in eigener Transaktion, und bei längerer Laufzeit im Hintergrund statt im Request des Nutzers. Dritter Punkt sind unnötige Event-Handler und Client-Refreshes auf Entitäten, die massenhaft geändert werden."',
    checklist: [
      'Ich habe Retrieve und Commit in Schleifen als Hauptproblem benannt.',
      'Ich habe die Lösung genannt: vorher laden, Liste sammeln, einmal committen.',
      'Ich habe Massenverarbeitung in Paketen und im Hintergrund angesprochen.',
      'Ich habe konkret statt allgemein geantwortet.',
    ],
  },
  {
    id: 'tiq-error-handling',
    interviewer: 'Architekt',
    question: 'Wie behandeln Sie Fehler in Microflows – insbesondere bei Schnittstellen-Aufrufen?',
    followUp: 'Was passiert mit bereits geänderten Objekten, wenn Sie ohne Rollback weitermachen?',
    idealAnswer:
      '„Der Standard ist Rollback: Die Transaktion wird zurückgedreht, der Nutzer bekommt eine Fehlermeldung. Für interne Logik ist das meist richtig. An Schnittstellen setze ich bewusst eigene Fehlerbehandlung ein. Mit Rollback, wenn nichts halb Fertiges stehen bleiben darf. Ohne Rollback, wenn ich den Stand davor behalten und den Fehler festhalten will: Fehlerdetails ins Log, Status am Objekt setzen, verständliche Meldung an den Nutzer. Die Option Continue vermeide ich, weil sie Fehler verschluckt. Dazu kommen Timeouts auf jedem Aufruf und – wo der Prozess es erlaubt – eine Wiederholung über eine Queue."',
    checklist: [
      'Ich habe den Standard (Rollback) und eigene Fehlerpfade mit und ohne Rollback unterschieden.',
      'Ich habe gesagt, wann ich welche Variante wähle.',
      'Logging und eine verständliche Rückmeldung an den Nutzer kamen vor.',
      'Ich habe erwähnt, dass verschluckte Fehler zu vermeiden sind.',
    ],
  },
  {
    id: 'tiq-rest-integration',
    interviewer: 'Architekt',
    question: 'Wie bauen Sie eine REST-Anbindung an ein Fremdsystem auf?',
    followUp: 'Und wenn das Fremdsystem eine Stunde lang nicht erreichbar ist?',
    idealAnswer:
      '„Jedes Fremdsystem bekommt ein eigenes Integrationsmodul. Der Aufruf läuft über Call REST mit Import- und Export-Mappings auf nicht-persistente Entitäten; von dort mappe ich explizit in mein Domain Model – so schlägt eine Änderung der fremden Struktur nicht bis in die Fachlogik durch. Adresse und Zugangsdaten liegen in Konstanten je Umgebung, nie im Modell. Jeder Aufruf hat Timeout, Fehlerpfad und einen eigenen Log-Knoten. Wo der Prozess es zulässt, entkopple ich asynchron mit Wiederholung. Genau so habe ich die SAP-Anbindung im Portalprojekt gebaut – und zum Testen ein Stub-System danebengestellt."',
    checklist: [
      'Ich habe die Entkopplung beschrieben: eigenes Modul, Mapping statt direktem Durchgriff.',
      'Konfiguration je Umgebung über Konstanten kam vor.',
      'Timeout, Fehlerbehandlung und Logging waren Teil der Antwort.',
      'Ich habe ein eigenes Projektbeispiel genannt.',
    ],
  },
  {
    id: 'tiq-non-persistable',
    interviewer: 'Architekt',
    question: 'Wofür nutzen Sie nicht-persistente Entitäten – und was ist dabei zu beachten?',
    followUp: 'Woran merken Sie, dass zu viel Zustand im Client liegt?',
    idealAnswer:
      '„Für alles, was nicht in die Datenbank gehört: Such- und Filterobjekte, Zwischenstände in einem Assistenten, Nutzdaten von Schnittstellen, Sichten für eine bestimmte Seite. Zu beachten ist, wo sie leben: nicht in der Datenbank, sondern im Zustand des Clients – sie wandern bei Anfragen zwischen Client und Runtime hin und her. Deshalb halte ich sie klein, lege keine großen Listen darin ab und hänge sie nicht an Session oder Benutzer, sonst werden sie nie aufgeräumt. Und wenn ich merke, dass ich eine nicht-persistente Entität dauerhaft brauche, ist sie in Wahrheit eine persistente."',
    checklist: [
      'Ich habe zwei bis drei sinnvolle Einsatzfälle genannt.',
      'Ich habe erklärt, wo die Objekte leben (Client-Zustand, nicht Datenbank).',
      'Ich habe die Folgen benannt: klein halten, nicht an die Session hängen.',
      'Die Antwort war präzise und ohne Abschweifen.',
    ],
  },
  {
    id: 'tiq-background-jobs',
    interviewer: 'Architekt',
    question: 'Ein Import von 50.000 Datensätzen soll jede Nacht laufen. Wie setzen Sie das um?',
    followUp: 'Was heißt idempotent in diesem Fall konkret?',
    idealAnswer:
      '„Ein Scheduled Event stößt den Lauf an, die eigentliche Arbeit geht in die Task Queue: Sie läuft im Hintergrund, funktioniert auch bei mehreren Instanzen und bringt Wiederholungen mit. Verarbeitet wird paketweise, jedes Paket in eigener Transaktion – ein fehlerhafter Datensatz darf nicht den ganzen Lauf zurückdrehen. Die Verarbeitung baue ich idempotent, weil eine Aufgabe im Fehlerfall ein zweites Mal ausgeführt werden kann. Dazu ein Protokoll-Objekt mit Start, Ende, Anzahl und Fehlern sowie ein Alarm, wenn der Lauf scheitert. So weiß morgens jemand Bescheid, bevor der Fachbereich fragt."',
    checklist: [
      'Ich habe Auslöser (Scheduled Event) und Ausführung (Hintergrund-Queue) getrennt.',
      'Paketweise Verarbeitung mit eigenen Transaktionen kam vor.',
      'Ich habe Wiederholbarkeit und Idempotenz angesprochen.',
      'Protokollierung und Alarmierung waren Teil der Lösung.',
    ],
  },
  {
    id: 'tiq-java-actions',
    interviewer: 'Architekt',
    question: 'Wann greifen Sie zu einer Java-Action statt zu einem Microflow?',
    followUp: 'Wie verhindern Sie, dass daraus eine Java-Anwendung mit Mendix-Oberfläche wird?',
    idealAnswer:
      '„Wenn das Modell das falsche Werkzeug ist: bei komplexen Algorithmen oder Textverarbeitung, wenn es eine bewährte Bibliothek gibt – etwa für ein Dateiformat – oder wenn eine Massenoperation im Microflow zu langsam wäre. Meine Regeln dabei: kleine, klar benannte Schnittstelle; die fachliche Logik bleibt im Microflow, damit der Fachbereich sie lesen kann; jede Action ist dokumentiert und getestet. Ich komme aus der Java-Entwicklung, die Hürde ist für mich also niedrig – gerade deshalb bin ich zurückhaltend: Jede Java-Action ist Code, den beim nächsten Upgrade jemand pflegen muss."',
    checklist: [
      'Ich habe klare Kriterien genannt (Algorithmus, Bibliothek, Performance).',
      'Ich habe Regeln für den Einsatz genannt: kleine Schnittstelle, Fachlogik bleibt im Modell.',
      'Ich habe die Wartungskosten ehrlich angesprochen.',
      'Meine Programmier-Erfahrung kam vor, ohne zu prahlen.',
    ],
  },
  {
    id: 'tiq-version-control',
    interviewer: 'Architekt',
    question: 'Wie arbeiten Sie im Team mit Versionskontrolle und Branches?',
    followUp:
      'Wie lösen Sie einen Konflikt, wenn zwei Entwickler dasselbe Dokument geändert haben?',
    idealAnswer:
      '„Mit Git auf dem Team Server. Die Hauptlinie ist jederzeit auslieferbar. Größere Features entstehen auf kurzlebigen Branches und werden schnell zurückgeführt – je länger ein Branch lebt, desto schmerzhafter wird das Zusammenführen von Modellen. Dazu kleine Commits mit Bezug zur User Story und vor jedem Commit aktualisieren. Im Dreier-Team haben wir uns außerdem kurz abgestimmt, wer gerade an zentralen Dokumenten wie Domain Model oder Navigation arbeitet – das verhindert die meisten Konflikte, bevor sie entstehen. Ausgeliefert wird immer ein markierter Stand, nie der Arbeitsstand."',
    checklist: [
      'Ich habe ein klares Vorgehen beschrieben (stabile Hauptlinie, kurzlebige Branches).',
      'Ich habe die Besonderheit beim Zusammenführen von Modellen angesprochen.',
      'Kleine Commits und Abstimmung im Team kamen vor.',
      'Ich habe aus der Praxis gesprochen, nicht aus dem Lehrbuch.',
    ],
  },
  {
    id: 'tiq-deployment',
    interviewer: 'Architekt',
    question: 'Wie sieht bei Ihnen der Weg von der Entwicklung in die Produktion aus?',
    followUp: 'Was tun Sie, wenn nach dem Deployment in der Produktion etwas nicht stimmt?',
    idealAnswer:
      '„Über drei Umgebungen: Test, Abnahme, Produktion. Dasselbe Paket wandert durch alle Stufen – es wird nicht für die Produktion neu gebaut. Unterschiede zwischen den Umgebungen stecken ausschließlich in Konstanten und Konfiguration. Bis zur Testumgebung ist der Weg automatisiert: bauen, Unit-Tests, ausrollen. Die Abnahme macht der Fachbereich anhand der Akzeptanzkriterien. Vor dem Produktiv-Deployment gibt es ein Backup, Release Notes und einen Plan für den Rückweg – also das vorige Paket plus Datenstand. Danach schaue ich aktiv auf Logs und Metriken, statt auf den ersten Anruf zu warten."',
    checklist: [
      'Ich habe die Umgebungen und ihre Aufgabe benannt.',
      'Ich habe erklärt, dass dasselbe Paket durch alle Stufen wandert.',
      'Automatisierung und Abnahme durch den Fachbereich kamen vor.',
      'Backup und Rückweg waren Teil der Antwort.',
    ],
  },
  {
    id: 'tiq-module-structure',
    interviewer: 'Architekt',
    question: 'Wie strukturieren Sie eine größere Anwendung in Module?',
    followUp: 'Ab wann würden Sie die Anwendung in mehrere Apps aufteilen?',
    idealAnswer:
      '„Nach fachlichen Domänen, nicht nach technischen Schichten: ein Modul für Anfragen, eines für Lieferanten, eines für Stammdaten – jeweils mit eigenem Domain Model und eigenen Modulrollen. Jedes Fremdsystem bekommt ein eigenes Integrationsmodul. Module aus dem Marketplace verändere ich nicht, sonst ist das nächste Update ein Problem; Anpassungen kommen in ein eigenes Modul daneben. Abhängigkeiten laufen möglichst in eine Richtung. Und es gibt Namenskonventionen, etwa Präfixe für Microflow-Typen – damit jemand Neues im Team nach einem Tag weiß, wo er suchen muss."',
    checklist: [
      'Ich habe fachliche statt technische Schnitte beschrieben.',
      'Integration und Marketplace-Module habe ich gesondert behandelt.',
      'Abhängigkeiten und Konventionen kamen vor.',
      'Ich habe den Nutzen fürs Team benannt (Wartbarkeit, Einarbeitung).',
    ],
  },
  {
    id: 'tiq-workflow',
    interviewer: 'Architekt',
    question:
      'Wann nutzen Sie die Workflow-Engine – und wann reicht ein Status-Attribut mit Microflows?',
    followUp: 'Was passiert mit laufenden Vorgängen, wenn sich der Prozess ändert?',
    idealAnswer:
      '„Die Workflow-Engine nehme ich, wenn ein Prozess mehrere menschliche Aufgaben, verschiedene Rollen, parallele Pfade oder Fristen hat – und wenn der Fachbereich den Ablauf lesen und mitgestalten soll. Dann bekomme ich den Aufgaben-Eingang und den Überblick über laufende Vorgänge gleich mit. Für einen einfachen, linearen Ablauf mit zwei, drei Zuständen ist ein Status-Attribut mit Microflows schlanker. Worauf ich früh achte: Was geschieht mit laufenden Vorgängen, wenn der Prozess geändert wird? Das muss vor dem ersten Go-live geklärt sein. In die Engine habe ich mich zuletzt in zwei Wochen eingearbeitet und sie produktiv eingesetzt."',
    checklist: [
      'Ich habe klare Kriterien für die Workflow-Engine genannt.',
      'Ich habe die schlankere Alternative für einfache Fälle genannt.',
      'Ich habe ein Risiko angesprochen (Änderungen bei laufenden Vorgängen).',
      'Ich habe meinen eigenen Erfahrungsstand ehrlich eingeordnet.',
    ],
  },
  {
    id: 'tiq-upgrade',
    interviewer: 'Architekt',
    question: 'Wie gehen Sie ein Upgrade auf eine neue Mendix-Hauptversion an?',
    followUp: 'Wie überzeugen Sie den Kunden, dafür Budget einzuplanen?',
    idealAnswer:
      '„Als kleines Projekt, nicht als Nebenbei-Aufgabe. Zuerst lese ich Release Notes und die Liste der abgekündigten Funktionen. Dann bringe ich in der alten Version alles auf Stand: Marketplace-Module, Widgets, veraltete Konstrukte – so trenne ich das Aufräumen vom eigentlichen Versionssprung. Das Upgrade selbst passiert auf einem eigenen Branch, mit Backup. Danach Fehler beheben und einen vollständigen Regressionstest fahren, bevor zurückgeführt wird. In der Produktion bleibe ich auf Versionen mit Langzeit-Support. Und ich prüfe die Voraussetzungen vorab – der Wechsel auf Mendix 10 setzte zum Beispiel die Umstellung auf Git voraus."',
    checklist: [
      'Ich habe ein schrittweises Vorgehen beschrieben, kein „einfach hochziehen".',
      'Release Notes, Abkündigungen und Marketplace-Module kamen vor.',
      'Branch, Backup und Regressionstest waren Teil der Antwort.',
      'Ich habe gezeigt, dass ich Voraussetzungen vorab prüfe.',
    ],
  },
  {
    id: 'tiq-validation',
    interviewer: 'Architekt',
    question: 'Wo gehört Validierung hin: auf die Seite, in den Microflow oder ins Domain Model?',
    followUp: 'Warum reicht die Prüfung im Client nicht aus?',
    idealAnswer:
      '„In Schichten. Nah am Nutzer gibt es schnelle Rückmeldung: Pflichtfelder, Formate – das ist Komfort. Maßgeblich ist die Prüfung auf dem Server vor dem Commit, denn alles im Client lässt sich umgehen. Einfache, immer gültige Regeln wie Pflicht oder Eindeutigkeit dürfen zusätzlich als Validierungsregel an der Entität stehen. Wichtig ist mir ein einziger Validierungs-Microflow pro Entität, den alle Wege nutzen – Speichern auf der Seite, Import, Schnittstelle –, damit Regeln nicht an drei Stellen auseinanderlaufen. Und er sammelt alle Fehler und zeigt sie gemeinsam an, statt den Nutzer von Meldung zu Meldung zu schicken."',
    checklist: [
      'Ich habe die Schichten unterschieden: Komfort im Client, Verbindlichkeit auf dem Server.',
      'Ich habe begründet, warum der Server maßgeblich ist.',
      'Wiederverwendung (ein Validierungs-Microflow für alle Wege) kam vor.',
      'Ich habe an die Nutzererfahrung gedacht (alle Fehler auf einmal).',
    ],
  },
  {
    id: 'tiq-custom-widget',
    interviewer: 'Architekt',
    question: 'Der Fachbereich will ein Bedienelement, das es in Mendix so nicht gibt. Was nun?',
    followUp: 'Woran erkennen Sie, ob ein Marketplace-Widget produktionstauglich ist?',
    idealAnswer:
      '„Zuerst frage ich nach dem Wozu: Oft lässt sich das eigentliche Bedürfnis mit Standardmitteln lösen, und das ist die günstigste Variante. Wenn nicht, schaue ich in den Marketplace – und prüfe dort, wer das Widget pflegt, wann es zuletzt aktualisiert wurde und ob es zur eingesetzten Version passt. Dritte Stufe ist ein eigenes Pluggable Widget mit React und TypeScript. Das baue ich nicht täglich: Für ein einfaches Widget reicht es bei mir, bei einem komplexen würde ich den Aufwand ehrlich schätzen und einen Frontend-Kollegen dazuholen. Wichtig ist, dem Fachbereich Kosten und Pflegeaufwand vorher zu nennen."',
    checklist: [
      'Ich habe zuerst nach dem eigentlichen Bedarf gefragt.',
      'Ich habe die Stufen genannt: Standard, Marketplace, eigenes Widget.',
      'Ich habe meine eigene Grenze ehrlich eingeordnet.',
      'Kosten und Pflegeaufwand habe ich als Entscheidungskriterium genannt.',
    ],
  },
  {
    id: 'tiq-incident',
    interviewer: 'Architekt',
    question:
      'Die Anwendung ist seit gestern Abend langsam, der Kunde ruft an. Was tun Sie in der ersten halben Stunde?',
    followUp: 'Wann entscheiden Sie sich für den Rückweg auf die vorige Version?',
    idealAnswer:
      '„Erst kommunizieren: Eingang bestätigen und sagen, wann das nächste Update kommt. Dann eingrenzen: Was hat sich seit gestern geändert – ein Deployment, ein Datenimport, ein neuer Hintergrundlauf? Betrifft es alle Nutzer oder eine Funktion? Parallel schaue ich auf die Metriken der Umgebung – Prozessor, Speicher, Datenbankverbindungen – und ins Log nach Fehlern und langsamen Abfragen. Bevor ich die Ursache vollständig verstehe, stabilisiere ich: Hintergrundlauf stoppen, neu starten oder zurück auf das vorige Paket. Die Ursachenanalyse kommt danach – mit einer kurzen Zusammenfassung für den Kunden, was es war und wie wir es künftig verhindern."',
    checklist: [
      'Ich habe mit Kommunikation begonnen, nicht mit Technik.',
      'Ich habe systematisch eingegrenzt: Was hat sich geändert, wen betrifft es?',
      'Ich habe Stabilisieren vor Ursachenanalyse gestellt.',
      'Eine Nachbereitung für den Kunden war Teil der Antwort.',
    ],
  },
]

/** Every realistic interview opens with the self-introduction … */
export const OPENING_QUESTION_ID = 'iq-self-introduction'
/** … and closes with the candidate's own questions. */
export const CLOSING_QUESTION_ID = 'iq-your-questions'

/** Selectable question sets for the interview trainer. */
export const interviewQuestionSets: InterviewQuestionSet[] = [
  {
    id: 'reference-call',
    title: 'Referenzgespräch (45 Minuten)',
    description: `Die ${interviewQuestions.length} Fragen aus dem Telefon-Interview in Originalreihenfolge – von der Vorstellung bis zu deinen Rückfragen.`,
    questions: interviewQuestions,
  },
  {
    id: 'classic-questions',
    title: 'Die Klassiker',
    description: `Die ${classicInterviewQuestions.length} Standardfragen von Stärken und Schwächen bis zur Tagessatz-Verhandlung.`,
    questions: classicInterviewQuestions,
  },
  {
    id: 'technical-questions',
    title: 'Mendix-Technik (Architekt)',
    description: `${technicalInterviewQuestions.length} Fachfragen von Domain Model und Security bis Deployment. Die Musterantworten zeigen Struktur und Tiefe – die Beispiele ersetzt du durch deine eigenen.`,
    questions: technicalInterviewQuestions,
  },
  {
    id: 'pressure-questions',
    title: 'Stress- und Fangfragen',
    description: `${pressureInterviewQuestions.length} unbequeme Fragen und Provokationen – hier trainierst du nicht Wissen, sondern Ruhe: anerkennen, belegen, zurückfragen.`,
    questions: pressureInterviewQuestions,
  },
]
