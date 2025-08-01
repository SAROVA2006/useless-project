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
      console.log("Audio toggle failed:", error)
      return false
    }
  }

  const playPlanetAtmosphere = async (planetName: string) => {
    if (!isAudioSupported) return

    try {
      await enhancedSpaceAudio.playPlanetAtmosphere(planetName)
      setIsPlanetSoundPlaying(true)
      setCurrentPlanetSound(planetName)
    } catch (error) {
      console.log("Planet atmosphere failed:", error)
    }
  }

  const stopPlanetAtmosphere = () => {
    if (isAudioSupported) {
      enhancedSpaceAudio.stopPlanetSound()
      setIsPlanetSoundPlaying(false)
      setCurrentPlanetSound(null)
    }
  }

  const playPlanetTransition = (fromPlanet: string, toPlanet: string) => {
    if (isAudioSupported) {
      enhancedSpaceAudio.playPlanetTransition(fromPlanet, toPlanet)
      setCurrentPlanetSound(toPlanet)
      setIsPlanetSoundPlaying(true)
    }
  }

  const playPlanetBeep = (planetName: string) => {
    if (isAudioSupported) {
      enhancedSpaceAudio.playPlanetBeep(planetName)
    }
  }

  const playPlanetStatic = (planetName: string) => {
    if (isAudioSupported) {
      enhancedSpaceAudio.playPlanetStatic(planetName)
    }
  }

  const setVolume = (volume: number) => {
    if (isAudioSupported) {
      enhancedSpaceAudio.setVolume(volume)
    }
  }

  const setPlanetVolume = (volume: number) => {
    if (isAudioSupported) {
      enhancedSpaceAudio.setPlanetVolume(volume)
    }
  }

  const stopAllSounds = () => {
    if (isAudioSupported) {
      enhancedSpaceAudio.stopAllSounds()
      setIsAmbientPlaying(false)
      setIsPlanetSoundPlaying(false)
      setCurrentPlanetSound(null)
    }
  }

  return {
    isAmbientPlaying,
    isPlanetSoundPlaying,
    currentPlanetSound,
    isAudioSupported,
    toggleAmbient,
    playPlanetAtmosphere,
    stopPlanetAtmosphere,
    playPlanetTransition,
    playPlanetBeep,
    playPlanetStatic,
    setVolume,
    setPlanetVolume,
    stopAllSounds,
  }
}
