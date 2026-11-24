/** Central route definitions. Builders keep links type-safe; patterns feed the router. */

export const routePatterns = {
  dashboard: '/',
  module: '/modul/:moduleId',
  lesson: '/modul/:moduleId/lektion/:lessonId',
  training: '/training',
  dossier: '/gespraechsmappe',
  interviewSheet: '/gespraechsmappe/gespraech/:sheetId',
  myAnswers: '/meine-antworten',
  glossary: '/glossar',
} as const

/** Query parameter that switches the dossier page to the list of interview sheets. */
export const SHEETS_VIEW_PARAM = 'ansicht'
export const SHEETS_VIEW_VALUE = 'gespraeche'

export const routes = {
  dashboard: () => '/',
  module: (moduleId: string) => `/modul/${encodeURIComponent(moduleId)}`,
  lesson: (moduleId: string, lessonId: string) =>
    `/modul/${encodeURIComponent(moduleId)}/lektion/${encodeURIComponent(lessonId)}`,
  training: () => '/training',
  dossier: () => '/gespraechsmappe',
  dossierSheets: () => `/gespraechsmappe?${SHEETS_VIEW_PARAM}=${SHEETS_VIEW_VALUE}`,
  interviewSheet: (sheetId: string) => `/gespraechsmappe/gespraech/${encodeURIComponent(sheetId)}`,
  myAnswers: () => '/meine-antworten',
  glossary: () => '/glossar',
} as const
