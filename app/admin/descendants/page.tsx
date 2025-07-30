import AdminLayout from '../components/AdminLayout';

export default function DescendantsPage() {
  const descendants = [
    { id: 1, name: 'Bunny', role: 'DPS', element: 'Electric', status: 'Active' },
    { id: 2, name: 'Viessa', role: 'DPS', element: 'Chill', status: 'Active' },
    { id: 3, name: 'Ajax', role: 'Tank', element: 'Void', status: 'Active' },
    { id: 4, name: 'Lepic', role: 'DPS', element: 'Fire', status: 'Active' },
    { id: 5, name: 'Freyna', role: 'DPS', element: 'Toxic', status: 'Active' },
    { id: 6, name: 'Jayber', role: 'Support', element: 'Electric', status: 'Active' },
  ];

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'DPS': return 'text-red-400 bg-red-900/20';
      case 'Tank': return 'text-blue-400 bg-blue-900/20';
      case 'Support': return 'text-green-400 bg-green-900/20';
      default: return 'text-gray-400 bg-gray-900/20';
    }
  };

  const getElementColor = (element: string) => {
    switch (element) {
      case 'Electric': return 'text-yellow-400 bg-yellow-900/20';
      case 'Fire': return 'text-red-400 bg-red-900/20';
      case 'Chill': return 'text-cyan-400 bg-cyan-900/20';
      case 'Toxic': return 'text-green-400 bg-green-900/20';
      case 'Void': return 'text-purple-400 bg-purple-900/20';
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
              Gestion des Descendants
            </h1>
            <p className="text-gray-400 mt-1">
              Gérez les descendants disponibles dans TFD Command Center
            </p>
          </div>
          <button className="px-6 py-3 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-lg text-white font-medium hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:scale-105">
            + Ajouter un Descendant
          </button>
        </div>

        {/* Filters */}
        <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6">
          <div className="flex flex-wrap gap-4">
            <select className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none">
              <option>Tous les rôles</option>
              <option>DPS</option>
              <option>Tank</option>
              <option>Support</option>
            </select>
            <select className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:border-cyan-400 focus:outline-none">
              <option>Tous les éléments</option>
              <option>Electric</option>
              <option>Fire</option>
              <option>Chill</option>
              <option>Toxic</option>
              <option>Void</option>
            </select>
            <input
              type="text"
              placeholder="Rechercher un descendant..."
              className="bg-gray-800/50 border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none flex-1 min-w-64"
            />
          </div>
        </div>

        {/* Descendants Table */}
        <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-800/50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Descendant
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Rôle
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Élément
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Statut
                  </th>
                  <th className="px-6 py-4 text-left text-sm font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-800/50">
                {descendants.map((descendant) => (
                  <tr key={descendant.id} className="hover:bg-gray-800/25 transition-colors duration-200">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                          <span className="text-white font-bold text-sm">
                            {descendant.name.charAt(0)}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-medium">{descendant.name}</div>
                          <div className="text-gray-400 text-sm">ID: {descendant.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getRoleColor(descendant.role)}`}>
                        {descendant.role}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${getElementColor(descendant.element)}`}>
                        {descendant.element}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex px-3 py-1 rounded-full text-xs font-medium text-green-400 bg-green-900/20">
                        {descendant.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        </button>
                        <button className="text-red-400 hover:text-red-300 transition-colors duration-200">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl px-6 py-3">
          <div className="text-gray-400 text-sm">
            Affichage de 1 à 6 sur 6 descendants
          </div>
          <div className="flex space-x-2">
            <button className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded border border-gray-700 hover:bg-gray-700/50 transition-colors duration-200">
              Précédent
            </button>
            <button className="px-3 py-1 bg-cyan-600 text-white rounded hover:bg-cyan-500 transition-colors duration-200">
              1
            </button>
            <button className="px-3 py-1 bg-gray-800/50 text-gray-400 rounded border border-gray-700 hover:bg-gray-700/50 transition-colors duration-200">
              Suivant
            </button>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
}
