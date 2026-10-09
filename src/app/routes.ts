/** Central route definitions. Builders keep links type-safe; patterns feed the router. */

export const routePatterns = {
  dashboard: '/',
  module: '/modul/:moduleId',
  lesson: '/modul/:moduleId/lektion/:lessonId',
  training: '/training',
} as const

export const routes = {
  dashboard: () => '/',
  module: (moduleId: string) => `/modul/${encodeURIComponent(moduleId)}`,
  lesson: (moduleId: string, lessonId: string) =>
    `/modul/${encodeURIComponent(moduleId)}/lektion/${encodeURIComponent(lessonId)}`,
  training: () => '/training',
} as const
