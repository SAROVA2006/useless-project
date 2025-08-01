"use client"

import { useState, useEffect } from "react"
import { Wind, Thermometer, Droplets, Volume2, VolumeX, MapPin, Quote, Gauge, Eye, Zap } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { useEnhancedSpaceAudio } from "@/hooks/use-enhanced-space-audio"
import { SpaceMap } from "@/components/space-map"
import { HistoricalWeather } from "@/components/historical-weather"
import { AudioControlPanel } from "@/components/audio-control-panel"
import { enhancedAlienWeatherData, getEnhancedRandomWeather, getPlanetData } from "@/data/enhanced-alien-weather"
import { getCurrentDate, getSpaceDate } from "@/data/alien-weather-data"
import "./enhanced-space-theme.css"

export default function EnhancedAlienWeatherReporter() {
  const [selectedPlanet, setSelectedPlanet] = useState<string>("Mars")
  const [currentWeather, setCurrentWeather] = useState(getEnhancedRandomWeather("Mars"))
  const [isLoading, setIsLoading] = useState(false)
  const [showWelcome, setShowWelcome] = useState(true)
  const {
    isAmbientPlaying,
    isPlanetSoundPlaying,
    currentPlanetSound,
    isAudioSupported,
    toggleAmbient,
    startPlanetSound,
    stopPlanetSound,
    playPlanetTransition,
    playPlanetBeep,
    setVolumes,
  } = useEnhancedSpaceAudio()

  useEffect(() => {
    const timer = setTimeout(() => setShowWelcome(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  // Auto-start planet sound when planet changes
  useEffect(() => {
    if (selectedPlanet && isAudioSupported) {
      const timer = setTimeout(() => {
        startPlanetSound(selectedPlanet)
      }, 2000) // Start after transition completes
      return () => clearTimeout(timer)
    }
  }, [selectedPlanet, isAudioSupported, startPlanetSound])

  const handlePlanetChange = (planetName: string) => {
    setIsLoading(true)
    setSelectedPlanet(planetName)

    // Play transition sound
    playPlanetTransition(planetName)

    // Stop current planet sound
    stopPlanetSound()

    setTimeout(() => {
      setCurrentWeather(getEnhancedRandomWeather(planetName))
      setIsLoading(false)
    }, 1500)
  }

  const handleRefresh = () => {
    setIsLoading(true)
    playPlanetBeep(selectedPlanet)

    setTimeout(() => {
      setCurrentWeather(getEnhancedRandomWeather(selectedPlanet))
      setIsLoading(false)
    }, 1000)
  }

  const currentPlanet = getPlanetData(selectedPlanet)
  const earthDate = getCurrentDate()
  const spaceDate = getSpaceDate(selectedPlanet)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Mild":
        return "text-green-400 border-green-400"
      case "Moderate":
        return "text-yellow-400 border-yellow-400"
      case "Extreme":
        return "text-orange-400 border-orange-400"
      case "Apocalyptic":
        return "text-red-400 border-red-400"
      default:
        return "text-purple-400 border-purple-400"
    }
  }

  return (
    <div className="min-h-screen enhanced-space-background p-4">
      {/* Welcome Animation */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="text-center space-y-6 animate-pulse">
            <div className="text-8xl">🛸</div>
            <h1 className="text-4xl font-bold cosmic-title">INITIALIZING COSMIC AUDIO SYSTEMS...</h1>
            <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full animate-pulse"></div>
            </div>
            <p className="text-purple-300 quantum-mono">🎵 Loading planet-specific atmospheric sounds...</p>
          </div>
        </div>
      )}

      {/* Quick Audio Toggle */}
      {isAudioSupported && (
        <button
          onClick={toggleAmbient}
          className="fixed top-6 right-6 z-40 stellar-button"
          title={isAmbientPlaying ? "Mute cosmic ambience" : "Play cosmic ambience"}
        >
          {isAmbientPlaying ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>
      )}

      <div className="max-w-7xl mx-auto space-y-8">
        {/* Enhanced Header */}
        <div className="text-center space-y-6 py-12">
          <div className="relative">
            <h1 className="text-5xl md:text-7xl font-bold cosmic-title mb-4">👽 ALIEN WEATHER REPORTER</h1>
            <div className="absolute -top-4 -right-4 text-2xl animate-spin">🛸</div>
            <div className="absolute -bottom-4 -left-4 text-2xl animate-bounce">🌌</div>
          </div>

          <p className="text-2xl stellar-subtitle font-bold">
            "The universe doesn't care about your umbrella, but we report anyway."
          </p>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg nebula-text">Welcome to the galaxy's most pointless (but beautiful) weather app!</p>
            <div className="grid md:grid-cols-3 gap-4 text-sm quantum-mono">
              <div className="flex items-center justify-center gap-2">
                <span>🌍</span>
                <span>Tired of boring Earth forecasts?</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>🪐</span>
                <span>Curious about wind chill on Neptune?</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <span>🌞</span>
                <span>Wondering if it's sunny on the Sun?</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-purple-300 quantum-mono">
            📅 Earth Date: {earthDate} | 🌍 You are safely on Earth (thank the cosmos)
          </p>

          {/* Audio Status Indicator */}
          {isAudioSupported && (
            <div className="flex justify-center items-center gap-4 text-sm quantum-mono">
              <Badge
                className={
                  isAmbientPlaying
                    ? "text-green-400 border-green-400 bg-green-400/10"
                    : "text-gray-500 border-gray-500 bg-gray-500/10"
                }
              >
                🌌 Ambient: {isAmbientPlaying ? "ON" : "OFF"}
              </Badge>
              <Badge
                className={
                  isPlanetSoundPlaying
                    ? "text-orange-400 border-orange-400 bg-orange-400/10"
                    : "text-gray-500 border-gray-500 bg-gray-500/10"
                }
              >
                🪐 Planet Audio: {isPlanetSoundPlaying ? currentPlanetSound : "OFF"}
              </Badge>
            </div>
          )}
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Left Sidebar - Controls */}
          <div className="lg:col-span-1 space-y-6">
            {/* Planet Selector */}
            <Card className="cosmic-card">
              <CardHeader>
                <CardTitle className="text-white flex items-center gap-2 quantum-mono">
                  🚀 COSMIC MISSION CONTROL
                </CardTitle>
                <CardDescription className="text-purple-300 quantum-mono text-xs">
                  Select your impossible destination!
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <label className="text-sm font-medium text-purple-200 quantum-mono">
                    CHOOSE YOUR REGRET DESTINATION
                  </label>
                  <Select value={selectedPlanet} onValueChange={handlePlanetChange} disabled={isLoading}>
                    <SelectTrigger className="bg-white/10 border-white/20 text-white quantum-mono">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {enhancedAlienWeatherData.map((planet) => (
                        <SelectItem key={planet.planet} value={planet.planet}>
                          <span className="flex items-center gap-2 quantum-mono">
                            <span>{planet.emoji}</span>
                            <span>{planet.planet}</span>
                          </span>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>

                  {/* Planet Info */}
                  <div className="space-y-2 text-xs quantum-mono">
                    <div className="p-3 rounded-lg" style={{ background: currentPlanet.gradient, opacity: 0.2 }}>
                      <p className="text-white font-bold">{currentPlanet.description}</p>
                    </div>
                    <div className="space-y-1 text-purple-300">
                      <p>
                        <strong>Gravity:</strong> {currentPlanet.gravity}
                      </p>
                      <p>
                        <strong>Day Length:</strong> {currentPlanet.dayLength}
                      </p>
                      <p>
                        <strong>Atmosphere:</strong> {currentPlanet.atmosphere}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Enhanced Audio Control Panel */}
            {isAudioSupported && (
              <AudioControlPanel
                isAmbientPlaying={isAmbientPlaying}
                isPlanetSoundPlaying={isPlanetSoundPlaying}
                currentPlanetSound={currentPlanetSound}
                selectedPlanet={selectedPlanet}
                onToggleAmbient={toggleAmbient}
                onStartPlanetSound={startPlanetSound}
                onStopPlanetSound={stopPlanetSound}
                onVolumeChange={setVolumes}
              />
            )}

            {/* Enhanced Space Map */}
            <SpaceMap />

            {/* Historical Weather */}
            <HistoricalWeather selectedPlanet={selectedPlanet} onPlaySound={() => playPlanetBeep(selectedPlanet)} />

            {/* Enhanced Stats */}
            <Card className="plasma-card">
              <CardHeader>
                <CardTitle className="text-white quantum-mono text-sm">📊 COSMIC STATISTICS</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-xs quantum-mono">
                <div className="flex justify-between text-purple-300">
                  <span>Alien weather checks:</span>
                  <span className="text-green-400">∞ (Too many)</span>
                </div>
                <div className="flex justify-between text-purple-300">
                  <span>Survival chance on {selectedPlanet}:</span>
                  <span className="text-red-400">0.000000001%</span>
                </div>
                <div className="flex justify-between text-purple-300">
                  <span>Audio immersion level:</span>
                  <span className={isPlanetSoundPlaying ? "text-green-400" : "text-yellow-400"}>
                    {isPlanetSoundPlaying ? "Maximum" : "Partial"}
                  </span>
                </div>
                <div className="flex justify-between text-purple-300">
                  <span>Information usefulness:</span>
                  <span className="text-red-400">Absolutely zero</span>
                </div>
                <div className="flex justify-between text-purple-300">
                  <span>Entertainment value:</span>
                  <span className="text-green-400">Cosmically high!</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content - Weather Display */}
          <div className="lg:col-span-3 space-y-6">
            {/* Main Weather Card */}
            <Card className="cosmic-card">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-white text-3xl flex items-center gap-4 cosmic-title">
                    <span className="text-5xl cosmic-weather-icon">{currentPlanet.emoji}</span>
                    <div>
                      <div>ALIEN WEATHER ON {selectedPlanet.toUpperCase()}</div>
                      <div className="text-lg text-purple-300 quantum-mono">
                        {selectedPlanet} Date: {spaceDate}
                      </div>
                    </div>
                  </CardTitle>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={`${getSeverityColor(currentWeather.severity)} bg-black/30 border-2 quantum-mono`}>
                      {currentWeather.severity.toUpperCase()}
                    </Badge>
                    {isPlanetSoundPlaying && (
                      <Badge className="text-orange-400 border-orange-400 bg-orange-400/10 quantum-mono text-xs">
                        🎵 ATMOSPHERIC AUDIO ACTIVE
                      </Badge>
                    )}
                  </div>
                </div>
                <CardDescription className="text-purple-200 text-lg stellar-subtitle">
                  {isLoading ? "🛸 Receiving transmission from the cosmic void..." : currentWeather.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-8">
                {isLoading ? (
                  <div className="text-center py-16">
                    <div className="text-8xl quantum-loading">🛸</div>
                    <p className="text-white quantum-mono mt-6 text-xl data-stream">
                      DOWNLOADING USELESS COSMIC DATA...
                    </p>
                    <div className="w-64 h-2 bg-gray-800 rounded-full mx-auto mt-4 overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full data-stream"></div>
                    </div>
                    <p className="text-purple-300 quantum-mono mt-4 text-sm">
                      🎵 Preparing {selectedPlanet} atmospheric audio...
                    </p>
                  </div>
                ) : (
                  <>
                    {/* Current Conditions */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-6">
                        <span className="text-8xl cosmic-weather-icon">{currentWeather.icon}</span>
                        <div>
                          <h3 className="text-3xl font-bold text-white cosmic-title">{currentWeather.condition}</h3>
                          <p className="text-purple-200 quantum-mono">COMPLETELY IRRELEVANT CONDITIONS</p>
                          <p className="text-sm text-purple-400 nebula-text mt-2">Mood: {currentWeather.mood}</p>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-gradient-to-r from-purple-500 to-pink-500 h-0.5" />

                    {/* Enhanced Weather Details Grid */}
                    <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4">
                      <div className="cosmic-outfit-item">
                        <div className="flex items-center gap-3">
                          <Thermometer className="w-6 h-6 text-orange-400" />
                          <div>
                            <p className="text-sm text-purple-200 quantum-mono">TEMPERATURE</p>
                            <p className="font-semibold text-white quantum-mono text-xs">
                              {currentWeather.temperature}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="cosmic-outfit-item">
                        <div className="flex items-center gap-3">
                          <Wind className="w-6 h-6 text-blue-400" />
                          <div>
                            <p className="text-sm text-purple-200 quantum-mono">WIND SPEED</p>
                            <p className="font-semibold text-white quantum-mono text-xs">{currentWeather.windSpeed}</p>
                          </div>
                        </div>
                      </div>

                      <div className="cosmic-outfit-item">
                        <div className="flex items-center gap-3">
                          <Droplets className="w-6 h-6 text-cyan-400" />
                          <div>
                            <p className="text-sm text-purple-200 quantum-mono">HUMIDITY</p>
                            <p className="font-semibold text-white quantum-mono text-xs">{currentWeather.humidity}</p>
                          </div>
                        </div>
                      </div>

                      <div className="cosmic-outfit-item">
                        <div className="flex items-center gap-3">
                          <Gauge className="w-6 h-6 text-red-400" />
                          <div>
                            <p className="text-sm text-purple-200 quantum-mono">PRESSURE</p>
                            <p className="font-semibold text-white quantum-mono text-xs">{currentWeather.pressure}</p>
                          </div>
                        </div>
                      </div>

                      <div className="cosmic-outfit-item">
                        <div className="flex items-center gap-3">
                          <Eye className="w-6 h-6 text-green-400" />
                          <div>
                            <p className="text-sm text-purple-200 quantum-mono">VISIBILITY</p>
                            <p className="font-semibold text-white quantum-mono text-xs">{currentWeather.visibility}</p>
                          </div>
                        </div>
                      </div>

                      <div className="cosmic-outfit-item">
                        <div className="flex items-center gap-3">
                          <Zap className="w-6 h-6 text-yellow-400" />
                          <div>
                            <p className="text-sm text-purple-200 quantum-mono">UV INDEX</p>
                            <p className="font-semibold text-white quantum-mono text-xs">{currentWeather.uvIndex}</p>
                          </div>
                        </div>
                      </div>

                      <div className="cosmic-outfit-item">
                        <div className="flex items-center gap-3">
                          <MapPin className="w-6 h-6 text-purple-400" />
                          <div>
                            <p className="text-sm text-purple-200 quantum-mono">YOUR LOCATION</p>
                            <p className="font-semibold text-white quantum-mono text-xs">Still on Earth (genius!)</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator className="bg-gradient-to-r from-blue-500 to-green-500 h-0.5" />

                    {/* Enhanced Outfit Recommendations */}
                    <div className="space-y-6">
                      <h3 className="text-2xl font-bold text-white flex items-center gap-3 cosmic-title">
                        👕 RIDICULOUS OUTFIT SUGGESTIONS
                      </h3>
                      <p className="text-purple-300 text-sm quantum-mono">
                        (As if you're actually planning this impossible journey... right?)
                      </p>
                      <div className="grid md:grid-cols-2 gap-4">
                        {currentWeather.outfit.map((item, index) => (
                          <div key={index} className="cosmic-outfit-item">
                            <div className="flex items-center gap-3">
                              <div className="w-3 h-3 rounded-full bg-gradient-to-r from-yellow-400 to-orange-400 animate-pulse"></div>
                              <span className="text-white font-medium quantum-mono text-sm">{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator className="bg-gradient-to-r from-pink-500 to-purple-500 h-0.5" />

                    {/* Enhanced NASA Quote */}
                    <div className="plasma-card p-6">
                      <div className="flex items-start gap-4">
                        <Quote className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
                        <div>
                          <p className="text-white quantum-mono text-lg italic leading-relaxed">
                            "{currentWeather.nasaQuote}"
                          </p>
                          <p className="text-purple-300 quantum-mono text-sm mt-3">
                            — Definitely Real NASA Scientist (probably Dr. Cosmic McSpaceFace)
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Enhanced Fun Fact */}
                    <div className="cosmic-card p-6" style={{ background: currentPlanet.gradient, opacity: 0.9 }}>
                      <h4 className="text-white quantum-mono text-lg font-bold mb-3 flex items-center gap-2">
                        🤓 USELESS BUT FASCINATING COSMIC FACT:
                      </h4>
                      <p className="text-white nebula-text text-lg leading-relaxed">{currentWeather.funFact}</p>
                    </div>

                    {/* Enhanced Action Buttons */}
                    <div className="grid md:grid-cols-3 gap-4 pt-6">
                      <Button onClick={handleRefresh} className="stellar-button text-lg py-4" disabled={isLoading}>
                        🔄 GET MORE USELESS DATA
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-green-500 text-green-300 hover:bg-green-500/20 quantum-mono bg-transparent text-lg py-4"
                        onClick={() => window.open("https://weather.com", "_blank")}
                      >
                        🌍 CHECK USEFUL EARTH WEATHER
                      </Button>
                      <Button
                        variant="outline"
                        className="border-2 border-yellow-500 text-yellow-300 hover:bg-yellow-500/20 quantum-mono bg-transparent text-lg py-4"
                        onClick={() => {
                          playPlanetBeep(selectedPlanet)
                          alert(
                            "🏛️ COSMIC ARCHIVE\n\nExplore the complete database of ridiculous space weather disasters using the historical panel!",
                          )
                        }}
                      >
                        📚 DISASTER ARCHIVE
                      </Button>
                    </div>
                  </>
                )}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Enhanced Footer */}
        <div className="text-center space-y-4 py-8">
          <div className="max-w-4xl mx-auto space-y-3">
            <p className="text-purple-300 quantum-mono text-lg">
              ⚠️ COSMIC DISCLAIMER: This weather report is 100% useless and 0% scientifically accurate.
            </p>
            <p className="text-purple-400 quantum-mono">
              🚀 For actual space travel, please consult someone who isn't making jokes about alien weather.
            </p>
            <p className="text-sm text-purple-500 nebula-text">
              Made with ❤️, cosmic creativity, and a complete disregard for scientific accuracy.
            </p>
            <div className="flex justify-center items-center gap-4 text-2xl">
              <span className="animate-spin">🛸</span>
              <span className="animate-pulse">👽</span>
              <span className="animate-bounce">🌌</span>
              <span className="animate-spin">🪐</span>
              <span className="animate-pulse">⭐</span>
            </div>
            {isAudioSupported && (
              <p className="text-xs text-purple-400 quantum-mono">
                🎵 Enhanced with planet-specific atmospheric audio for maximum cosmic immersion
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
