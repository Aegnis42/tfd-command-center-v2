import Navbar from './components/Navbar';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 animate-pulse"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%236366f1' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>
        
        {/* Main Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
          {/* Logo/Title */}
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4 tracking-tight">
              TFD
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-2 tracking-wider">
              COMMAND CENTER
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-6"></div>
            <p className="text-xl md:text-2xl text-gray-400 font-light tracking-wide">
              THE FIRST DESCENDANT
            </p>
          </div>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            Votre centre de commandement ultime pour maîtriser l&apos;univers de The First Descendant. 
            Builds, guides, stratégies et plus encore.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/30 glow-cyan">
              <span className="relative z-10">Commencer l&apos;Exploration</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
            </button>
            
            <button className="px-8 py-4 border-2 border-gray-700 rounded-lg font-semibold text-lg transition-all duration-300 hover:border-cyan-500 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/25 hover:bg-black/20 glow-purple">
              Guides & Stratégies
            </button>
          </div>

          {/* Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:bg-black/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10 hover:border-cyan-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-cyan-700 rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg shadow-cyan-500/25">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-cyan-400">Builds Optimisés</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Découvrez les builds les plus efficaces pour chaque Descendant et situation de combat.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:bg-black/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/10 hover:border-purple-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-700 rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg shadow-purple-500/25">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-purple-400">Guides Complets</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Maîtrisez chaque aspect du jeu avec nos guides détaillés et nos stratégies éprouvées.
              </p>
            </div>

            <div className="bg-black/40 backdrop-blur-sm border border-gray-800/50 rounded-xl p-6 hover:bg-black/60 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-pink-500/10 hover:border-pink-500/30">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-700 rounded-lg flex items-center justify-center mb-4 mx-auto shadow-lg shadow-pink-500/25">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3 text-pink-400">Communauté</h3>
              <p className="text-gray-500 text-sm leading-relaxed">
                Rejoignez notre communauté de Descendants et partagez vos découvertes et stratégies.
              </p>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-cyan-400 rounded-full animate-ping"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
      </div>
    </div>
  );
}
