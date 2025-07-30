import AdminLayout from '@/app/admin/components/AdminLayout';

export default function AdminPage() {
  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2">
            Tableau de Bord Administrateur
          </h1>
          <p className="text-gray-400">
            Gérez le contenu de TFD Command Center
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:bg-black/60 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Descendants</p>
                <p className="text-2xl font-bold text-cyan-400">24</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:bg-black/60 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Builds Actifs</p>
                <p className="text-2xl font-bold text-purple-400">156</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:bg-black/60 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Guides Publiés</p>
                <p className="text-2xl font-bold text-pink-400">42</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:bg-black/60 transition-all duration-300">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Utilisateurs</p>
                <p className="text-2xl font-bold text-green-400">1,247</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Actions Rapides</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <button className="p-4 bg-gradient-to-r from-cyan-600 to-cyan-700 rounded-lg hover:from-cyan-500 hover:to-cyan-600 transition-all duration-300 hover:scale-105 text-left">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
                <span className="font-medium text-white">Ajouter un Descendant</span>
              </div>
            </button>

            <button className="p-4 bg-gradient-to-r from-purple-600 to-purple-700 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 hover:scale-105 text-left">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span className="font-medium text-white">Créer un Build</span>
              </div>
            </button>

            <button className="p-4 bg-gradient-to-r from-pink-600 to-pink-700 rounded-lg hover:from-pink-500 hover:to-pink-600 transition-all duration-300 hover:scale-105 text-left">
              <div className="flex items-center space-x-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
                <span className="font-medium text-white">Rédiger un Guide</span>
              </div>
            </button>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
          <h2 className="text-xl font-bold text-white mb-4">Activité Récente</h2>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 bg-black/20 rounded-lg">
              <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Nouveau build ajouté: &quot;Viessa DPS Ultimate&quot;</p>
                <p className="text-gray-400 text-sm">Il y a 2 heures</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-black/20 rounded-lg">
              <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Guide mis à jour: &quot;Bunny Speed Build Guide&quot;</p>
                <p className="text-gray-400 text-sm">Il y a 4 heures</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 bg-black/20 rounded-lg">
              <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
              <div className="flex-1">
                <p className="text-white font-medium">Nouveau descendant ajouté: &quot;Luna&quot;</p>
                <p className="text-gray-400 text-sm">Il y a 1 jour</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
