"use client"

import { useState, useEffect } from "react"
import { spaceAudio } from "@/lib/audio-manager"

export function useSpaceAudio() {
  const [isAmbientPlaying, setIsAmbientPlaying] = useState(false)
  const [isAudioSupported, setIsAudioSupported] = useState(false)

  useEffect(() => {
    // Check if audio is supported
    setIsAudioSupported(typeof window !== "undefined" && "AudioContext" in window)
  }, [])

  const toggleAmbient = async () => {
    if (!isAudioSupported) return false

    try {
      const playing = await spaceAudio.toggleAmbient()
      setIsAmbientPlaying(playing)
      return playing
    } catch (error) {
      console.log("Audio toggle failed:", error)
      return false
    }
  }

  const playBeep = () => {
    if (isAudioSupported) {
      spaceAudio.playBeep()
    }
  }

  const playStatic = () => {
    if (isAudioSupported) {
      spaceAudio.playStatic()
    }
  }

  return {
    isAmbientPlaying,
    isAudioSupported,
    toggleAmbient,
    playBeep,
    playStatic,
  }
}
