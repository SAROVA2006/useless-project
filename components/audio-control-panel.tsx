"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Volume2, VolumeX, Play, Pause, Music, Waves } from "lucide-react"

interface AudioControlPanelProps {
  isAmbientPlaying: boolean
  isPlanetSoundPlaying: boolean
  currentPlanetSound: string | null
  selectedPlanet: string
  onToggleAmbient: () => void
  onStartPlanetSound: (planet: string) => void
  onStopPlanetSound: () => void
  onVolumeChange: (ambient: number, planet: number) => void
}

export function AudioControlPanel({
  isAmbientPlaying,
  isPlanetSoundPlaying,
  currentPlanetSound,
  selectedPlanet,
  onToggleAmbient,
  onStartPlanetSound,
  onStopPlanetSound,
  onVolumeChange,
}: AudioControlPanelProps) {
  const [ambientVolume, setAmbientVolume] = useState([30])
  const [planetVolume, setPlanetVolume] = useState([40])

  const handleAmbientVolumeChange = (value: number[]) => {
    setAmbientVolume(value)
    onVolumeChange(value[0] / 100, planetVolume[0] / 100)
  }

  const handlePlanetVolumeChange = (value: number[]) => {
    setPlanetVolume(value)
    onVolumeChange(ambientVolume[0] / 100, value[0] / 100)
  }

  const getPlanetSoundDescription = (planet: string) => {
    const descriptions: { [key: string]: string } = {
      Mars: "Dusty winds & desolate howling",
      Venus: "Hellish rumbles & acid bubbling",
      Jupiter: "Massive storms & deep pressure",
      Europa: "Ice cracking & geyser eruptions",
      Titan: "Methane rain & alien ambience",
    }
    return descriptions[planet] || "Cosmic atmosphere"
  }

  return (
    <Card className="cosmic-card">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2 quantum-mono">🎵 COSMIC AUDIO CONTROL</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Ambient Space Sound */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Waves className="w-4 h-4 text-purple-400" />
              <span className="text-sm quantum-mono text-purple-200">AMBIENT SPACE</span>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={onToggleAmbient}
              className="border-purple-500 text-purple-300 hover:bg-purple-500/20 bg-transparent"
            >
              {isAmbientPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs quantum-mono text-purple-300">
              <span>Volume</span>
              <span>{ambientVolume[0]}%</span>
            </div>
            <Slider
              value={ambientVolume}
              onValueChange={handleAmbientVolumeChange}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
          {isAmbientPlaying && (
            <Badge className="text-green-400 border-green-400 bg-green-400/10">🌌 Deep space ambience active</Badge>
          )}
        </div>

        {/* Planet-Specific Sound */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Music className="w-4 h-4 text-orange-400" />
              <span className="text-sm quantum-mono text-orange-200">PLANET ATMOSPHERE</span>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => {
                if (isPlanetSoundPlaying) {
                  onStopPlanetSound()
                } else {
                  onStartPlanetSound(selectedPlanet)
                }
              }}
              className="border-orange-500 text-orange-300 hover:bg-orange-500/20 bg-transparent"
            >
              {isPlanetSoundPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
            </Button>
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs quantum-mono text-orange-300">
              <span>Volume</span>
              <span>{planetVolume[0]}%</span>
            </div>
            <Slider
              value={planetVolume}
              onValueChange={handlePlanetVolumeChange}
              max={100}
              step={1}
              className="w-full"
            />
          </div>
          {isPlanetSoundPlaying && currentPlanetSound && (
            <div className="space-y-2">
              <Badge className="text-orange-400 border-orange-400 bg-orange-400/10">
                🪐 {currentPlanetSound} atmosphere active
              </Badge>
              <p className="text-xs quantum-mono text-orange-300">{getPlanetSoundDescription(currentPlanetSound)}</p>
            </div>
          )}
        </div>

        {/* Audio Status */}
        <div className="pt-3 border-t border-white/20">
          <div className="grid grid-cols-2 gap-2 text-xs quantum-mono">
            <div className="flex items-center gap-2">
              {isAmbientPlaying ? (
                <Volume2 className="w-3 h-3 text-green-400" />
              ) : (
                <VolumeX className="w-3 h-3 text-gray-500" />
              )}
              <span className={isAmbientPlaying ? "text-green-400" : "text-gray-500"}>Ambient</span>
            </div>
            <div className="flex items-center gap-2">
              {isPlanetSoundPlaying ? (
                <Volume2 className="w-3 h-3 text-orange-400" />
              ) : (
                <VolumeX className="w-3 h-3 text-gray-500" />
              )}
              <span className={isPlanetSoundPlaying ? "text-orange-400" : "text-gray-500"}>Planet</span>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-2">
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              onToggleAmbient()
              onStartPlanetSound(selectedPlanet)
            }}
            className="border-green-500 text-green-300 hover:bg-green-500/20 bg-transparent text-xs quantum-mono"
          >
            🎵 FULL IMMERSION
          </Button>
          <Button
            size="sm"
            variant="outline"
            onClick={() => {
              if (isAmbientPlaying) onToggleAmbient()
              if (isPlanetSoundPlaying) onStopPlanetSound()
            }}
            className="border-red-500 text-red-300 hover:bg-red-500/20 bg-transparent text-xs quantum-mono"
          >
            🔇 SILENCE ALL
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
