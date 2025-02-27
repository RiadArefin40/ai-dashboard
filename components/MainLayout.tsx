'use client'
import { useState } from 'react'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'

interface MainLayoutProps {
  children: React.ReactNode
}

export default function MainLayout({ children }: MainLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Main content */}
      <div className="lg:pl-64">
        <Header onOpenSidebar={() => setSidebarOpen(true)} />
        <main className="relative">{children}</main>
      </div>
    </div>
  )
} 