import type { InterviewQuestion } from '@/types/content'

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
    idealAnswer:
      '„Gern, in zwei Minuten: Ich bin IT-Consultant mit Schwerpunkt Low-Code und entwickle seit drei Jahren hauptsächlich mit Mendix – davor klassisch Java. Zuletzt habe ich ein Lieferantenportal mit SAP-Anbindung als Lead Developer verantwortet: Go-live nach vier Monaten, heute rund 800 Nutzer. Daneben übernehme ich regelmäßig Anforderungs-Workshops und unterstütze im Pre-Sales mit Demos – diese Kombination aus Bauen und Beraten ist genau das, was Sie ausgeschrieben haben. In der Entwicklung arbeite ich KI-gestützt, unter anderem mit Claude für Reviews und Doku. Deshalb bin ich heute hier: Die Rolle passt ziemlich genau auf mein Profil."',
    checklist: [
      'Ich bin unter zwei Minuten geblieben.',
      'Struktur war erkennbar: Wer – was passt zur Rolle – ein Beweis – warum diese Rolle.',
      'Ich habe ein konkretes Projekt mit Ergebnis genannt.',
      'Die Kombination Entwicklung + Pre-Sales/Workshops kam vor.',
    ],
  },
  {
    id: 'iq-availability',
    minute: 9,
    interviewer: 'Projektleitung',
    question: 'Warum haben Sie aktuell Kapazität frei?',
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
