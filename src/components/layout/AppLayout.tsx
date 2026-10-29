import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { MenuIcon, XIcon } from '@/components/ui/icons'
import { cn } from '@/lib/cn'

import { Sidebar } from './Sidebar'

export function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const location = useLocation()

  // Scroll to top on every route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  // While the mobile drawer is open: close on Escape or on resize to desktop,
  // and lock body scroll
  useEffect(() => {
    if (!isSidebarOpen) return
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsSidebarOpen(false)
    }
    const desktopQuery = window.matchMedia('(min-width: 64rem)')
    const handleDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setIsSidebarOpen(false)
    }
    document.addEventListener('keydown', handleKeyDown)
    desktopQuery.addEventListener('change', handleDesktop)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      desktopQuery.removeEventListener('change', handleDesktop)
      document.body.style.overflow = previousOverflow
    }
  }, [isSidebarOpen])

  const closeSidebar = () => setIsSidebarOpen(false)

  return (
    <div className="min-h-dvh lg:flex">
      {/* Mobile header */}
      <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur lg:hidden dark:border-slate-800 dark:bg-slate-950/90">
        <button
          type="button"
          onClick={() => setIsSidebarOpen((open) => !open)}
          aria-label={isSidebarOpen ? 'Menü schließen' : 'Menü öffnen'}
          aria-expanded={isSidebarOpen}
          aria-controls="app-sidebar"
          className="rounded-lg p-2 text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-800"
        >
          {isSidebarOpen ? <MenuIconToggle open /> : <MenuIconToggle />}
        </button>
        <span className="flex items-center gap-2 text-base font-bold tracking-tight">
          <img src="/favicon.svg" alt="" className="h-6 w-6" />
          KommPro
        </span>
      </header>

      {/* Mobile drawer backdrop */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-ink/50 lg:hidden"
          onClick={closeSidebar}
          aria-hidden="true"
        />
      )}

      {/* Sidebar: drawer on mobile, fixed column on desktop */}
      <aside
        id="app-sidebar"
        className={cn(
          'fixed inset-y-0 left-0 z-40 w-72 border-r border-slate-200 bg-white transition-transform lg:translate-x-0 dark:border-slate-800 dark:bg-slate-900',
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <Sidebar onNavigate={closeSidebar} />
      </aside>

      <main className="min-w-0 flex-1 px-4 pt-8 pb-16 sm:px-8 lg:ml-72 lg:px-12 lg:pt-12">
        <div className="mx-auto max-w-3xl">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

function MenuIconToggle({ open = false }: { open?: boolean }) {
  return open ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />
}
