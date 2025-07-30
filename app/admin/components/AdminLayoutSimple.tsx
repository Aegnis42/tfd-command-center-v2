'use client';

import React from 'react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

function AdminLayout({ children }: AdminLayoutProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <nav className="bg-black/90 border-b border-gray-800/50 p-4">
        <h1 className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          TFD Admin
        </h1>
      </nav>
      <main className="p-6">
        {children}
      </main>
    </div>
  );
}

export default AdminLayout;
