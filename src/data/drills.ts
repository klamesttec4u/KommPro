import type { PitchDrill } from '@/types/content'

export const pitchDrills: PitchDrill[] = [
  {
    id: 'elevator-pitch-project',
    title: 'Elevator Pitch: Dein aktuelles Projekt',
    description:
      'Stell dir vor, du triffst im Aufzug eine Führungskraft. Erkläre dein aktuelles Projekt so, dass Nutzen und Status sofort klar werden.',
    durations: [30, 60, 90],
    reflectionChecklist: [
      'Ich habe mit dem Nutzen begonnen, nicht mit Details.',
      'Die Kernbotschaft kam in den ersten 10 Sekunden.',
      'Ich habe ohne Füllwörter (ähm, halt, quasi) gesprochen.',
      'Ich habe rechtzeitig einen runden Schluss gefunden.',
    ],
  },
  {
    id: 'self-introduction',
    title: 'Selbstvorstellung im neuen Team',
    description:
      'Du startest in einem neuen Team. Stelle dich vor: Wer bist du, was bringst du mit, worauf freust du dich?',
    durations: [30, 60, 90],
    reflectionChecklist: [
      'Ich habe eine klare Struktur erkennbar gemacht (Wer – Was – Warum).',
      'Ich habe einen Bezug zum Team/zur Aufgabe hergestellt.',
      'Ich habe selbstbewusst, aber nicht angeberisch formuliert.',
      'Ich habe in der Zeit sauber abgeschlossen.',
    ],
  },
  {
    id: 'status-update',
    title: 'Status-Update im Jour fixe',
    description:
      'Gib ein knackiges Status-Update zu einem (fiktiven) Projekt: Stand, nächste Schritte, Risiken, benötigte Entscheidungen.',
    durations: [60, 90, 180],
    reflectionChecklist: [
      'Ich habe mit dem Gesamtstatus begonnen (grün/gelb/rot).',
      'Nächste Schritte und Risiken waren klar getrennt.',
      'Ich habe konkret benannt, welche Entscheidung ich brauche.',
      'Ich habe mich nicht in Details verloren.',
    ],
  },
  {
    id: 'idea-pitch',
    title: 'Idee verkaufen',
    description:
      'Überzeuge dein (fiktives) Management von einer Verbesserungsidee: Problem, Lösung, Nutzen, nächster Schritt.',
    durations: [60, 90, 180],
    reflectionChecklist: [
      'Ich habe das Problem greifbar gemacht, bevor ich die Lösung genannt habe.',
      'Der Nutzen war quantifiziert oder zumindest konkret.',
      'Ich habe mit einem klaren Call-to-Action geendet.',
      'Meine Begeisterung war hörbar.',
    ],
  },
  {
    id: 'spontaneous-opinion',
    title: 'Spontane Stellungnahme',
    description:
      'Im Meeting wirst du unerwartet gefragt: „Was denkst du dazu?" Übe eine strukturierte Spontanantwort: Standpunkt – Begründung – Beispiel – Schluss.',
    durations: [30, 60],
    reflectionChecklist: [
      'Ich habe zuerst kurz nachgedacht statt sofort loszureden.',
      'Mein Standpunkt kam als erster Satz.',
      'Ich habe genau eine Begründung mit Beispiel gebracht.',
      'Ich habe mit einem klaren Schlusssatz geendet.',
    ],
  },
]

/** Random business terms for the spontaneous-speech drill. */
export const impulseWords: string[] = [
  'Deadline',
  'Teamwork',
  'Feedback',
  'Digitalisierung',
  'Kundenzufriedenheit',
  'Meeting-Kultur',
  'Homeoffice',
  'Motivation',
  'Fehlerkultur',
  'Innovation',
  'Zeitmanagement',
  'Vertrauen',
  'Verantwortung',
  'Nachhaltigkeit',
  'Künstliche Intelligenz',
  'Work-Life-Balance',
  'Priorisierung',
  'Transparenz',
  'Veränderung',
  'Qualität',
  'Budget',
  'Weiterbildung',
  'Netzwerken',
  'Führung',
  'Agilität',
  'Kompromiss',
  'Risiko',
  'Erfolg',
  'Scheitern',
  'Wertschätzung',
  'Pünktlichkeit',
  'Überstunden',
  'Smalltalk',
  'Konflikt',
  'Entscheidung',
  'Strategie',
]
