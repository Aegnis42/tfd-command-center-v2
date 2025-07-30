'use client';

import { useState } from 'react';
import AdminLayout from '../components/AdminLayout';

export default function DatabaseTestPage() {
  const [testResult, setTestResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const [userForm, setUserForm] = useState({
    username: '',
    email: '',
    role: 'user' as 'admin' | 'moderator' | 'user',
  });

  const testConnection = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/test-db');
      const data = await response.json();
      setTestResult(data);
    } catch (error) {
      setTestResult({ success: false, error: 'Erreur de connexion' });
    }
    setLoading(false);
  };

  const createTestUser = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userForm),
      });
      const data = await response.json();
      setTestResult(data);
    } catch (error) {
      setTestResult({ success: false, error: 'Erreur lors de la création' });
    }
    setLoading(false);
  };

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setTestResult(data);
    } catch (error) {
      setTestResult({ success: false, error: 'Erreur lors de la récupération' });
    }
    setLoading(false);
  };

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          Test Base de Données
        </h1>

        <div className="grid gap-6">
          {/* Test de connexion */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-cyan-400">Test de Connexion MongoDB</h2>
            <button
              onClick={testConnection}
              disabled={loading}
              className="px-4 py-2 bg-cyan-600 text-white rounded hover:bg-cyan-700 disabled:opacity-50"
            >
              {loading ? 'Test en cours...' : 'Tester la connexion'}
            </button>
          </div>

          {/* Création d'utilisateur */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-purple-400">Créer un Utilisateur Test</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <input
                type="text"
                placeholder="Nom d'utilisateur"
                value={userForm.username}
                onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
                className="px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              />
              <input
                type="email"
                placeholder="Email"
                value={userForm.email}
                onChange={(e) => setUserForm({ ...userForm, email: e.target.value })}
                className="px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              />
              <select
                value={userForm.role}
                onChange={(e) => setUserForm({ ...userForm, role: e.target.value as any })}
                className="px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-cyan-400"
              >
                <option value="user">Utilisateur</option>
                <option value="moderator">Modérateur</option>
                <option value="admin">Administrateur</option>
              </select>
            </div>
            <button
              onClick={createTestUser}
              disabled={loading || !userForm.username || !userForm.email}
              className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700 disabled:opacity-50"
            >
              {loading ? 'Création...' : 'Créer l\'utilisateur'}
            </button>
          </div>

          {/* Récupération des utilisateurs */}
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <h2 className="text-xl font-semibold mb-4 text-green-400">Récupérer les Utilisateurs</h2>
            <button
              onClick={fetchUsers}
              disabled={loading}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 disabled:opacity-50"
            >
              {loading ? 'Récupération...' : 'Récupérer les utilisateurs'}
            </button>
          </div>

          {/* Résultats */}
          {testResult && (
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h2 className="text-xl font-semibold mb-4 text-yellow-400">Résultat</h2>
              <pre className="bg-gray-900 p-4 rounded text-sm overflow-auto text-gray-300">
                {JSON.stringify(testResult, null, 2)}
              </pre>
            </div>
          )}
        </div>
      </div>
    </AdminLayout>
  );
}
