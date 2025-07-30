'use client';

import { useState } from 'react';
import Link from 'next/link';
import AdminGuard from '@/app/components/AdminGuard';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <AdminGuard>
      <div className="flex h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 overflow-hidden">
        {/* Sidebar */}
        <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out transform fixed lg:relative w-64 h-full bg-black/90 backdrop-blur-md border-r border-gray-800/50 z-30 lg:z-auto`}>
          <div className="flex items-center justify-center h-16 border-b border-gray-800/50">
            <Link href="/admin" className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              TFD Admin
            </Link>
        </div>
        
        <nav className="mt-8 h-full overflow-y-auto pb-20">
          <div className="px-4 space-y-2">
            <Link href="/admin" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-800/50 hover:text-cyan-400 transition-colors duration-300">
              Dashboard
            </Link>
            <Link href="/admin/users" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-800/50 hover:text-cyan-400 transition-colors duration-300">
              Utilisateurs
            </Link>
            <Link href="/admin/database-test" className="flex items-center px-4 py-3 text-gray-300 rounded-lg hover:bg-gray-800/50 hover:text-cyan-400 transition-colors duration-300">
              Test BDD
            </Link>
          </div>
        </nav>
      </div>

      {/* Main Content Container */}
      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header - Mobile */}
        <header className="lg:hidden bg-black/90 backdrop-blur-md border-b border-gray-800/50 px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="p-2 rounded-md text-gray-400 hover:text-cyan-400"
          >
            ☰
          </button>
          <span className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            TFD Admin
          </span>
          <div></div>
        </header>

        {/* Page Content */}
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>

      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-20 bg-black/50 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
    </AdminGuard>
  );
};

export default AdminLayout;
