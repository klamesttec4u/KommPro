import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { AppLayout } from '@/components/layout/AppLayout'
import { PageHeader } from '@/components/ui/PageHeader'
import { MyAnswersPage } from '@/features/answers/MyAnswersPage'
import { DashboardPage } from '@/features/dashboard/DashboardPage'
import { LessonPage } from '@/features/modules/LessonPage'
import { ModulePage } from '@/features/modules/ModulePage'
import { TrainingPage } from '@/features/training/TrainingPage'

import { routePatterns } from './routes'

function NotFoundPage() {
  return <PageHeader title="Seite nicht gefunden" description="Diese Seite existiert nicht." />
}

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route path={routePatterns.dashboard} element={<DashboardPage />} />
          <Route path={routePatterns.module} element={<ModulePage />} />
          <Route path={routePatterns.lesson} element={<LessonPage />} />
          <Route path={routePatterns.training} element={<TrainingPage />} />
          <Route path={routePatterns.myAnswers} element={<MyAnswersPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
