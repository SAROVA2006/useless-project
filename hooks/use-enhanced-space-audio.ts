"use client"

import { useState, useEffect } from "react"
import { enhancedSpaceAudio } from "@/lib/enhanced-audio-manager"

export function useEnhancedSpaceAudio() {
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false)
  const [isPlanetSoundPlaying, setIsPlanetSoundPlaying] = useState(false)
  const [isAudioSupported, setIsAudioSupported] = useState(false)
  const [currentPlanetSound, setCurrentPlanetSound] = useState<string | null>(null)

  useEffect(() => {
    setIsAudioSupported(typeof window !== "undefined" && "AudioContext" in window)
  }, [])

  const toggleAmbient = async () => {
    if (!isAudioSupported) return false

    try {
      const playing = await enhancedSpaceAudio.toggleAmbient()
      setIsAmbientPlaying(playing)
      return playing
    } catch (error) {
      console.log("Ambient audio toggle failed:", error)
      return false
    }
  }

  const startPlanetSound = async (planetName: string) => {
    if (!isAudioSupported) return false

    try {
      await enhancedSpaceAudio.startPlanetSound(planetName)
      setIsPlanetSoundPlaying(true)
      setCurrentPlanetSound(planetName)
      return true
    } catch (error) {
      console.log("Planet sound failed:", error)
      return false
    }
  }

  const stopPlanetSound = () => {
    if (isAudioSupported) {
      enhancedSpaceAudio.stopPlanetSound()
      setIsPlanetSoundPlaying(false)
      setCurrentPlanetSound(null)
    }
  }

  const playPlanetTransition = (planetName: string) => {
    if (isAudioSupported) {
      enhancedSpaceAudio.playPlanetTransition(planetName)
    }
  }

  const playPlanetBeep = (planetName: string) => {
    if (isAudioSupported) {
      enhancedSpaceAudio.playPlanetBeep(planetName)
    }
  }

  const setVolumes = (ambientVolume: number, planetVolume: number) => {
    if (isAudioSupported) {
      enhancedSpaceAudio.setVolume(ambientVolume)
      enhancedSpaceAudio.setPlanetVolume(planetVolume)
    }
  }

  return {
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
  }
}
