import AdminLayout from '../components/AdminLayout';

export default function GuidesPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Gestion des Guides
          </h1>
          <p className="text-gray-400">
            Gérez tous les guides et tutoriels de TFD Command Center
          </p>
        </div>

        {/* Coming Soon */}
        <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-12 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">Gestion des Guides</h2>
          <p className="text-gray-400 mb-6">Cette section sera bientôt disponible</p>
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg text-white font-medium hover:from-cyan-500 hover:to-purple-500 transition-all duration-300">
            Commencer à développer
          </button>
        </div>
      </div>
    </AdminLayout>
  );
}
