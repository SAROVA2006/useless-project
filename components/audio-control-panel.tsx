"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Play, Pause, RotateCcw } from "lucide-react"

interface AudioControlPanelProps {
  isAmbientPlaying: boolean
  isPlanetSoundPlaying: boolean
  currentPlanetSound: string | null
  isAudioSupported: boolean
  onToggleAmbient: () => void
  onPlayPlanetAtmosphere: (planet: string) => void
  onStopPlanetAtmosphere: () => void
  onSetVolume: (volume: number) => void
  onSetPlanetVolume: (volume: number) => void
  onStopAllSounds: () => void
  selectedPlanet: string
}

export function AudioControlPanel({
  isAmbientPlaying,
  isPlanetSoundPlaying,
  currentPlanetSound,
  isAudioSupported,
  onToggleAmbient,
  onPlayPlanetAtmosphere,
  onStopPlanetAtmosphere,
  onSetVolume,
  onSetPlanetVolume,
  onStopAllSounds,
  selectedPlanet,
}: AudioControlPanelProps) {
  const [ambientVolume, setAmbientVolume] = useState([30])
  const [planetVolume, setPlanetVolume] = useState([40])

  if (!isAudioSupported) {
    return (
      <Card className="cosmic-card">
        <CardContent className="text-center py-6">
          <div className="text-4xl mb-2">🔇</div>
          <p className="text-purple-300 quantum-mono text-sm">Audio not supported in this browser</p>
        </CardContent>
      </Card>
    )
  }

  const handleAmbientVolumeChange = (value: number[]) => {
    setAmbientVolume(value)
    onSetVolume(value[0] / 100)
  }

  const handlePlanetVolumeChange = (value: number[]) => {
    setPlanetVolume(value)
    onSetPlanetVolume(value[0] / 100)
  }

  const planetSoundNames: { [key: string]: string } = {
    mars: "Martian Winds",
    venus: "Hellish Atmosphere",
    jupiter: "Storm Chaos",
    europa: "Ice Symphony",
    titan: "Methane Rain",
  }

  return (
    <Card className="cosmic-card">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2 quantum-mono">🎵 COSMIC AUDIO CONTROL</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Ambient Controls */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-purple-200 quantum-mono text-sm">SPACE AMBIENCE</span>
            <Badge variant={isAmbientPlaying ? "default" : "secondary"} className="quantum-mono text-xs">
              {isAmbientPlaying ? "PLAYING" : "STOPPED"}
            </Badge>
          </div>

          <div className="flex items-center gap-3">
            <Button onClick={onToggleAmbient} size="sm" className="stellar-button flex items-center gap-2">
              {isAmbientPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
              {isAmbientPlaying ? "PAUSE" : "PLAY"}
            </Button>

            <div className="flex-1">
              <Slider
                value={ambientVolume}
                onValueChange={handleAmbientVolumeChange}
                max={100}
                step={1}
                className="w-full"
              />
            </div>

            <span className="text-purple-300 quantum-mono text-xs w-8">{ambientVolume[0]}%</span>
          </div>
        </div>

        {/* Planet Atmosphere Controls */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-purple-200 quantum-mono text-sm">PLANET ATMOSPHERE</span>
            <Badge variant={isPlanetSoundPlaying ? "default" : "secondary"} className="quantum-mono text-xs">
              {isPlanetSoundPlaying ? "PLAYING" : "STOPPED"}
            </Badge>
          </div>

          {currentPlanetSound && (
            <div className="text-center">
              <Badge variant="outline" className="text-purple-300 border-purple-400 quantum-mono text-xs">
                {planetSoundNames[currentPlanetSound.toLowerCase()] || currentPlanetSound}
              </Badge>
            </div>
          )}

          <div className="flex items-center gap-2">
            <Button
              onClick={() => onPlayPlanetAtmosphere(selectedPlanet)}
              size="sm"
              className="stellar-button flex items-center gap-2"
              disabled={isPlanetSoundPlaying && currentPlanetSound === selectedPlanet}
            >
              <Play className="w-4 h-4" />
              PLAY
            </Button>

            <Button
              onClick={onStopPlanetAtmosphere}
              size="sm"
              variant="outline"
              className="border-red-500 text-red-300 hover:bg-red-500/20 quantum-mono bg-transparent"
              disabled={!isPlanetSoundPlaying}
            >
              <Pause className="w-4 h-4" />
              STOP
            </Button>

            <div className="flex-1">
              <Slider
                value={planetVolume}
                onValueChange={handlePlanetVolumeChange}
                max={100}
                step={1}
                className="w-full"
              />
            </div>

            <span className="text-purple-300 quantum-mono text-xs w-8">{planetVolume[0]}%</span>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="flex gap-2">
          <Button
            onClick={onStopAllSounds}
            size="sm"
            variant="outline"
            className="border-orange-500 text-orange-300 hover:bg-orange-500/20 quantum-mono bg-transparent flex items-center gap-2"
          >
            <RotateCcw className="w-4 h-4" />
            STOP ALL
          </Button>
        </div>

        {/* Audio Info */}
        <div className="text-xs text-purple-400 quantum-mono space-y-1">
          <p>🎧 Use headphones for the best cosmic experience</p>
          <p>🔊 Each planet has unique atmospheric sounds</p>
          <p>🌌 Ambient space hum provides cosmic background</p>
        </div>
      </CardContent>
    </Card>
  )
}
