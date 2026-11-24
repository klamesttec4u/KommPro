import type { DossierSection } from '@/types/content'

/**
 * Structure of the interview dossier. This file only defines WHICH fields exist
 * and what they ask for — the learner's own text is stored in the dossier store.
 * Placeholders are prompts, never ready-made content.
 */

/** Reusable across all interviews: who you are and what you bring. */
export const profileSections: DossierSection[] = [
  {
    kind: 'fields',
    id: 'seat',
    title: 'Selbstvorstellung nach SEAT',
    description:
      'Deine Antwort auf „Erzählen Sie etwas über sich" – vier Bausteine, zusammen unter zwei Minuten.',
    lessonId: 'quali-projects',
    fields: [
      {
        id: 'seat-skills',
        label: 'S – Skills',
        hint: 'Die zwei, drei Fähigkeiten, die genau diese Art von Rolle braucht.',
        placeholder: 'Welche Fähigkeiten nennst du zuerst?',
        rows: 3,
      },
      {
        id: 'seat-experience',
        label: 'E – Experience',
        hint: 'Wo und wie lange hast du sie angewendet? Ausbildung und Zertifizierungen gehören hierher.',
        placeholder: 'Jahre, Branchen, Rollen, Zertifizierungen …',
        rows: 3,
      },
      {
        id: 'seat-achievement',
        label: 'A – Achievement',
        hint: 'Ein konkreter Erfolg – mit Zahl.',
        placeholder: 'Welches Ergebnis kannst du messbar belegen?',
        rows: 3,
      },
      {
        id: 'seat-type',
        label: 'T – Type of Person',
        hint: 'Wie arbeitest du – und was bekommt der Kunde dadurch? Schließe mit einem Nutzen-Satz.',
        placeholder: '„Ich bin jemand, der … Für Ihr Projekt heißt das: …"',
        rows: 3,
      },
      {
        id: 'seat-pitch',
        label: 'Mein Pitch am Stück',
        hint: 'Ausformuliert, so wie du ihn sprichst. Laut üben und Zeit stoppen: unter zwei Minuten.',
        placeholder: 'Schreib den Pitch so, wie du ihn sagen würdest – nicht wie einen Lebenslauf.',
        rows: 8,
      },
    ],
  },
  {
    kind: 'stories',
    id: 'stories',
    title: 'Projekt-Storys nach STAR',
    description:
      'Drei bis vier Geschichten, die zusammen alle Kernanforderungen abdecken. Jede Story: Situation, Aufgabe, dein Handeln, messbares Ergebnis.',
    lessonId: 'quali-projects',
  },
  {
    kind: 'fields',
    id: 'evidence',
    title: 'Belegliste',
    description:
      'Überprüfbare Fakten gegen den inneren Kritiker – lies sie am Vorabend und kurz vor dem Gespräch.',
    lessonId: 'mindset-eye-level',
    fields: [
      {
        id: 'evidence-list',
        label: 'Meine Belege',
        hint: 'Fünf bis zehn Fakten: gelieferte Projekte, Zahlen, Rückmeldungen, gelöste Probleme. Keine Adjektive.',
        placeholder: '1. …\n2. …\n3. …',
        rows: 8,
      },
    ],
  },
  {
    kind: 'fields',
    id: 'strengths',
    title: 'Stärken, Schwäche und Grenzen',
    description: 'Die drei Antworten, die in fast jedem Gespräch gebraucht werden.',
    lessonId: 'quali-classic-questions',
    fields: [
      {
        id: 'strengths-two',
        label: 'Zwei Stärken mit Beleg',
        hint: 'Je eine Stärke, die zur Rolle passt, plus das Projekt oder Ergebnis, das sie zeigt.',
        placeholder: 'Stärke 1: … Beleg: …\nStärke 2: … Beleg: …',
        rows: 5,
      },
      {
        id: 'strengths-weakness',
        label: 'Eine echte Schwäche mit Gegenmaßnahme',
        hint: 'Echt, aber keine Kernanforderung der Rolle – und was du konkret dagegen tust.',
        placeholder: 'Schwäche: …\nSo gehe ich damit um: …',
        rows: 4,
      },
      {
        id: 'strengths-limits',
        label: 'Meine fachlichen Grenzen – ehrlich eingeordnet',
        hint: 'Was hast du noch nicht produktiv gemacht? Welche verwandte Stärke und welchen Lernweg nennst du dazu?',
        placeholder: 'Noch nicht gemacht: … Verwandt und sicher: … So arbeite ich mich ein: …',
        rows: 4,
      },
    ],
  },
  {
    kind: 'fields',
    id: 'standards',
    title: 'Standardantworten in Stichworten',
    description: 'Kurz und neutral-positiv – jeweils unter dreißig Sekunden gesprochen.',
    lessonId: 'quali-classic-questions',
    fields: [
      {
        id: 'standards-availability',
        label: 'Warum habe ich gerade Kapazität?',
        placeholder: 'Ohne Klage über frühere Kunden, mit Brücke zur neuen Rolle.',
        rows: 3,
      },
      {
        id: 'standards-external',
        label: 'Warum extern und nicht fest angestellt?',
        placeholder: 'Als bewusste Entscheidung – und mit dem Vorteil für den Kunden.',
        rows: 3,
      },
      {
        id: 'standards-ai',
        label: 'Wie setze ich KI ein – und mit welchen Leitplanken?',
        hint: 'Wofür genau, was bleibt bei dir, wie prüfst du, was ist mit Kundendaten?',
        placeholder: 'Einsatzfelder: … Leitplanken: …',
        rows: 4,
      },
    ],
  },
  {
    kind: 'fields',
    id: 'routine',
    title: 'Wenn-Dann-Pläne und Routine',
    description: 'Entscheidungen, die du vorab triffst, damit sie unter Stress abrufbar sind.',
    lessonId: 'mindset-routine',
    fields: [
      {
        id: 'routine-plans',
        label: 'Meine Wenn-Dann-Pläne',
        hint: 'Drei bis fünf: konkreter Auslöser, konkrete Reaktion oder Formulierung.',
        placeholder: 'Wenn …, dann …\nWenn …, dann …\nWenn …, dann …',
        rows: 6,
      },
      {
        id: 'routine-last-minutes',
        label: 'Meine letzten zehn Minuten vor dem Gespräch',
        hint: 'Etwas für den Körper, etwas für den Start – nichts, was neues Wissen erfordert.',
        placeholder: 'Bewegung, Atmung, Umdeutungs-Satz, erster Satz laut …',
        rows: 4,
      },
    ],
  },
]

/** Field ids that identify a sheet in lists and headings. */
export const SHEET_CUSTOMER_FIELD = 'frame-customer'
export const SHEET_ROLE_FIELD = 'frame-role'
export const SHEET_DATE_FIELD = 'frame-date'

/** One sheet per interview: everything that is specific to this customer. */
export const sheetSections: DossierSection[] = [
  {
    kind: 'fields',
    id: 'frame',
    title: 'Rahmen',
    description: 'Wer, was, wann – und wer dir gegenübersitzt.',
    fields: [
      {
        id: SHEET_CUSTOMER_FIELD,
        label: 'Kunde',
        placeholder: 'Unternehmen, ggf. Vermittler',
        singleLine: true,
      },
      {
        id: SHEET_ROLE_FIELD,
        label: 'Rolle laut Ausschreibung',
        placeholder: 'Titel der Position oder des Projekts',
        singleLine: true,
      },
      {
        id: SHEET_DATE_FIELD,
        label: 'Termin und Format',
        placeholder: 'Datum, Uhrzeit, vor Ort / Video / Telefon',
        singleLine: true,
      },
      {
        id: 'frame-participants',
        label: 'Gesprächspartner',
        hint: 'Pro Person: Name, Funktion – und was diese Person vermutlich prüft.',
        placeholder: 'Name – Funktion – prüft vermutlich …',
        rows: 4,
      },
    ],
  },
  {
    kind: 'fields',
    id: 'research',
    title: 'Recherche',
    description:
      'Fünfzehn Minuten reichen: Website, aktuelle Meldungen, Profile der Gesprächspartner.',
    lessonId: 'quali-basics',
    fields: [
      {
        id: 'research-company',
        label: 'Was macht der Kunde – und was bewegt ihn gerade?',
        placeholder: 'Branche, Produkte, aktuelle Themen',
        rows: 4,
      },
      {
        id: 'research-platform',
        label: 'Warum Mendix beziehungsweise Low-Code – und wie weit ist er damit?',
        hint: 'Bestehende Landschaft oder Neustart? Was weißt du, was musst du erfragen?',
        placeholder: 'Bekannt: … Offen: …',
        rows: 3,
      },
      {
        id: 'research-hooks',
        label: 'Drei Bezüge für das Gespräch',
        hint: 'Sätze nach dem Muster „Ich habe gesehen, dass Sie …".',
        placeholder: '1. …\n2. …\n3. …',
        rows: 4,
      },
    ],
  },
  {
    kind: 'requirements',
    id: 'requirements',
    title: 'Anforderungen und Belege',
    description:
      'Zerlege die Ausschreibung Zeile für Zeile. Zu jeder Anforderung gehört ein konkreter Beleg – oder eine ehrliche Einordnung der Lücke.',
    lessonId: 'quali-basics',
  },
  {
    kind: 'fields',
    id: 'conversation',
    title: 'Motivation und Rückfragen',
    description: 'Warum gerade dieses Projekt – und was du selbst herausfinden willst.',
    lessonId: 'quali-questions',
    fields: [
      {
        id: 'conversation-motivation',
        label: 'Warum dieses Projekt?',
        hint: 'Eine Antwort, die nur zu diesem Kunden passt – nicht zu jedem.',
        placeholder: 'Was reizt dich genau hier?',
        rows: 3,
      },
      {
        id: 'conversation-questions',
        label: 'Meine Rückfragen',
        hint: 'Mindestens drei mit Projektbrille. Die Frage nach dem nächsten Schritt nicht vergessen.',
        placeholder: '1. …\n2. …\n3. …\nNächster Schritt: …',
        rows: 6,
      },
    ],
  },
  {
    kind: 'fields',
    id: 'terms',
    title: 'Konditionen',
    description:
      'Leg deine Grenzen fest, bevor jemand danach fragt – wer sie erst im Gespräch sucht, gibt zu schnell nach.',
    lessonId: 'negotiation-batna',
    fields: [
      {
        id: 'terms-availability',
        label: 'Verfügbarkeit',
        placeholder: 'Start, Auslastung, vor Ort / remote, geplante Abwesenheiten',
        rows: 2,
      },
      {
        id: 'terms-rate',
        label: 'Tagessatz: Ziel, Untergrenze, Spielraum im Paket',
        hint: 'Worüber kannst du statt über den Preis reden – Laufzeit, Auslastung, Umfang?',
        placeholder: 'Ziel: … Untergrenze: … Paket: …',
        rows: 3,
      },
      {
        id: 'terms-alternatives',
        label: 'Meine Alternativen, falls es nicht klappt',
        hint: 'Wer Alternativen kennt, tritt gelassener auf.',
        placeholder: 'Weitere Gespräche, Anfragen, Optionen',
        rows: 2,
      },
    ],
  },
  {
    kind: 'fields',
    id: 'pressure',
    title: 'Heikle Punkte und Prozessziele',
    description:
      'Was dich bei diesem Kunden aus dem Tritt bringen könnte – und woran du dich misst.',
    lessonId: 'mindset-pressure',
    fields: [
      {
        id: 'pressure-feared',
        label: 'Die Fragen, vor denen ich hier Respekt habe',
        hint: 'So scharf aufschreiben, wie sie schlimmstenfalls kommen. Dazu Stichworte: Sorge anerkennen, Beleg, Rückfrage.',
        placeholder: 'Frage: … Meine Antwort in Stichworten: …',
        rows: 6,
      },
      {
        id: 'pressure-goals',
        label: 'Meine Prozessziele für dieses Gespräch',
        hint: 'Zwei bis drei Ziele, die ganz in deiner Hand liegen und sich danach mit Ja oder Nein beantworten lassen.',
        placeholder: '1. …\n2. …',
        rows: 3,
      },
    ],
  },
  {
    kind: 'checklist',
    id: 'checklist',
    title: 'Checkliste vor dem Gespräch',
    description: 'Die Verhaltensfehler, die sich am leichtesten vermeiden lassen.',
    lessonId: 'mistakes-behavior',
    items: [
      { id: 'check-profile', label: 'Eigenes Profil gelesen – ich kann jede Zeile erklären.' },
      { id: 'check-spoken', label: 'Pitch und drei Storys heute einmal laut gesprochen.' },
      {
        id: 'check-tech',
        label: 'Technik getestet: Kamera, Ton, Verbindung – Telefonnummer als Plan B notiert.',
      },
      { id: 'check-route', label: 'Anfahrt oder Einwahl geklärt, 15 Minuten Puffer eingeplant.' },
      {
        id: 'check-material',
        label: 'Profil, dieses Blatt, Notizblock und Wasser liegen bereit.',
      },
      { id: 'check-phone', label: 'Handy stumm und außer Sicht, Benachrichtigungen aus.' },
      { id: 'check-routine', label: 'Zehn-Minuten-Routine gemacht, ersten Satz laut gesprochen.' },
    ],
  },
  {
    kind: 'fields',
    id: 'debrief',
    title: 'Debrief nach dem Gespräch',
    description: 'Zehn Minuten, direkt danach – morgen ist die Hälfte der Erinnerung weg.',
    lessonId: 'mindset-routine',
    fields: [
      {
        id: 'debrief-good',
        label: 'Drei Dinge, die gut liefen',
        placeholder: '1. …\n2. …\n3. …',
        rows: 3,
      },
      {
        id: 'debrief-improve',
        label: 'Eine Sache für das nächste Mal',
        hint: 'Genau eine – nicht zehn Baustellen.',
        placeholder: 'Was nimmst du mit?',
        rows: 2,
      },
      {
        id: 'debrief-open',
        label: 'Offene Punkte und nächster Schritt',
        hint: 'Was wurde zugesagt, bis wann entscheidet der Kunde, wann fasst du nach?',
        placeholder: 'Zugesagt: … Entscheidung bis: … Nachfassen am: …',
        rows: 3,
      },
      {
        id: 'debrief-result',
        label: 'Ergebnis und Rückmeldung',
        hint: 'Zusage oder Absage – und der ausschlaggebende Punkt, wenn du ihn erfragt hast.',
        placeholder: 'Ergebnis: … Ausschlaggebend war: …',
        rows: 2,
      },
    ],
  },
]

/** Number of fill-in text fields in a list of sections (for progress display). */
export function countFields(sections: readonly DossierSection[]): number {
  return sections.reduce(
    (sum, section) => sum + (section.kind === 'fields' ? section.fields.length : 0),
    0,
  )
}
