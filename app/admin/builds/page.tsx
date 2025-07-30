import AdminLayout from '../components/AdminLayout';

export default function BuildsPage() {
  const builds = [
    { 
      id: 1, 
      name: 'Viessa DPS Ultimate', 
      descendant: 'Viessa', 
      type: 'DPS', 
      rating: 4.8, 
      views: 1250, 
      status: 'Published',
      author: 'ProGamer42',
      lastUpdated: '2025-01-29'
    },
    { 
      id: 2, 
      name: 'Bunny Speed Build', 
      descendant: 'Bunny', 
      type: 'Speed', 
      rating: 4.6, 
      views: 980, 
      status: 'Published',
      author: 'SpeedRunner',
      lastUpdated: '2025-01-28'
    },
    { 
      id: 3, 
      name: 'Ajax Tank Master', 
      descendant: 'Ajax', 
      type: 'Tank', 
      rating: 4.9, 
      views: 2100, 
      status: 'Published',
      author: 'TankMain',
      lastUpdated: '2025-01-27'
    },
    { 
      id: 4, 
      name: 'Lepic Burst DPS', 
      descendant: 'Lepic', 
      type: 'DPS', 
      rating: 4.3, 
      views: 750, 
      status: 'Draft',
      author: 'FireMaster',
      lastUpdated: '2025-01-26'
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Published': return 'text-green-400 bg-green-900/20';
      case 'Draft': return 'text-yellow-400 bg-yellow-900/20';
      case 'Archived': return 'text-gray-400 bg-gray-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'DPS': return 'text-red-400 bg-red-900/20';
      case 'Tank': return 'text-blue-400 bg-blue-900/20';
      case 'Speed': return 'text-purple-400 bg-purple-900/20';
      case 'Support': return 'text-green-400 bg-green-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  return (
    <AdminLayout>
      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Gestion des Builds
            </h1>
            <p className="text-gray-400 mt-1">
              Gérez tous les builds de la communauté TFD
            </p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg text-white font-medium hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-105">
            + Créer un Build
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Builds</p>
                <p className="text-2xl font-bold text-white">156</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Publiés</p>
                <p className="text-2xl font-bold text-green-400">142</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Brouillons</p>
                <p className="text-2xl font-bold text-yellow-400">14</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-yellow-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                </svg>
              </div>
            </div>
          </div>

          <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Vues</p>
                <p className="text-2xl font-bold text-purple-400">24.5K</p>
              </div>
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
          <div className="flex flex-wrap gap-4">
            <select className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none">
              <option>Tous les descendants</option>
              <option>Bunny</option>
              <option>Viessa</option>
              <option>Ajax</option>
              <option>Lepic</option>
            </select>
            <select className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none">
              <option>Tous les types</option>
              <option>DPS</option>
              <option>Tank</option>
              <option>Speed</option>
              <option>Support</option>
            </select>
            <select className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none">
              <option>Tous les statuts</option>
              <option>Published</option>
              <option>Draft</option>
              <option>Archived</option>
            </select>
            <input
              type="text"
              placeholder="Rechercher un build..."
              className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none flex-1 min-w-64"
            />
          </div>
        </div>

        {/* Builds Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
          {builds.map((build) => (
            <div key={build.id} className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:bg-black/60 transition-all duration-300 hover:scale-105">
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-white mb-1">{build.name}</h3>
                  <p className="text-gray-400 text-sm">par {build.author}</p>
                </div>
                <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(build.status)}`}>
                  {build.status}
                </span>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Descendant:</span>
                  <span className="text-white font-medium">{build.descendant}</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Type:</span>
                  <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(build.type)}`}>
                    {build.type}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Note:</span>
                  <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-white font-medium">{build.rating}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Vues:</span>
                  <span className="text-white font-medium">{build.views}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-sm">Dernière MAJ:</span>
                  <span className="text-white font-medium">{build.lastUpdated}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mt-6 pt-4 border-t border-gray-800/50">
                <div className="flex space-x-2">
                  <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </button>
                  <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                    </svg>
                  </button>
                </div>
                <button className="text-red-400 hover:text-red-300 transition-colors duration-200">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AdminLayout>
  );
}
