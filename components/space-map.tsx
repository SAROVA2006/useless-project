"use client"

export function SpaceMap() {
  return (
    <div className="relative bg-black rounded-lg p-6 border border-purple-500/30 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/20 to-purple-900/20"></div>

      {/* Stars background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10">
        <h3 className="text-white font-bold text-lg mb-4 font-mono">🗺️ GALACTIC POSITIONING SYSTEM</h3>

        {/* Solar system representation */}
        <div className="flex items-center justify-center space-x-8 mb-6">
          <div className="text-center">
            <div className="w-3 h-3 bg-yellow-400 rounded-full mb-1 animate-pulse"></div>
            <span className="text-xs text-gray-400 font-mono">SUN</span>
          </div>

          <div className="text-center">
            <div className="w-2 h-2 bg-gray-400 rounded-full mb-1"></div>
            <span className="text-xs text-gray-400 font-mono">MERCURY</span>
          </div>

          <div className="text-center">
            <div className="w-2 h-2 bg-orange-400 rounded-full mb-1"></div>
            <span className="text-xs text-gray-400 font-mono">VENUS</span>
          </div>

          <div className="text-center relative">
            <div className="w-3 h-3 bg-blue-500 rounded-full mb-1 animate-bounce"></div>
            <span className="text-xs text-green-400 font-mono font-bold">EARTH</span>
            <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
              <div className="bg-green-500 text-black px-2 py-1 rounded text-xs font-bold animate-pulse">
                YOU ARE HERE! 👆
              </div>
            </div>
          </div>

          <div className="text-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mb-1"></div>
            <span className="text-xs text-gray-400 font-mono">MARS</span>
          </div>

          <div className="text-center">
            <div className="w-4 h-4 bg-orange-300 rounded-full mb-1"></div>
            <span className="text-xs text-gray-400 font-mono">JUPITER</span>
          </div>
        </div>

        <div className="text-center space-y-2">
          <p className="text-green-400 font-bold font-mono text-sm">✅ CURRENT LOCATION: EARTH (SAFE)</p>
          <p className="text-red-400 font-mono text-xs">⚠️ DISTANCE TO NEAREST ALIEN WEATHER: TOO FAR TO MATTER</p>
          <p className="text-purple-300 font-mono text-xs">🛡️ EARTH'S ATMOSPHERE: PROTECTING YOU FROM BAD DECISIONS</p>
        </div>
      </div>
    </div>
  )
}
