export class SpaceAudioManager {
  private audioContext: AudioContext | null = null
  private ambientSound: AudioBufferSourceNode | null = null
  private isPlaying = false
  private volume = 0.3

  constructor() {
    if (typeof window !== "undefined") {
      this.initializeAudio()
    }
  }

  private async initializeAudio() {
    try {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)()
    } catch (error) {
      console.log("Audio not supported:", error)
    }
  }

  // Create synthetic ambient space sound
  private createAmbientSound(): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const bufferSize = this.audioContext.sampleRate * 4 // 4 seconds
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate)
    const data = buffer.getChannelData(0)

    // Generate ambient space hum with some variation
    for (let i = 0; i < bufferSize; i++) {
      const time = i / this.audioContext.sampleRate
      // Low frequency hum with subtle variations
      const baseHum = Math.sin(2 * Math.PI * 60 * time) * 0.1
      const variation = Math.sin(2 * Math.PI * 0.3 * time) * 0.05
      const noise = (Math.random() - 0.5) * 0.02
      data[i] = (baseHum + variation + noise) * this.volume
    }

    const source = this.audioContext.createBufferSource()
    source.buffer = buffer
    source.loop = true

    // Add some filtering for a more space-like sound
    const filter = this.audioContext.createBiquadFilter()
    filter.type = "lowpass"
    filter.frequency.value = 200
    filter.Q.value = 1

    const gainNode = this.audioContext.createGain()
    gainNode.gain.value = this.volume

    source.connect(filter)
    filter.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    return source
  }

  // Play satellite beep sound effect
  playBeep() {
    if (!this.audioContext) return

    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.value = 800
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
    gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.01)
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.3)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.3)
  }

  // Play radio static effect
  playStatic() {
    if (!this.audioContext) return

    const bufferSize = this.audioContext.sampleRate * 0.5 // 0.5 seconds
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate)
    const data = buffer.getChannelData(0)

    // Generate white noise for static
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() - 0.5) * 0.1
    }

    const source = this.audioContext.createBufferSource()
    source.buffer = buffer

    const filter = this.audioContext.createBiquadFilter()
    filter.type = "bandpass"
    filter.frequency.value = 2000
    filter.Q.value = 0.5

    const gainNode = this.audioContext.createGain()
    gainNode.gain.setValueAtTime(0.05, this.audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.5)

    source.connect(filter)
    filter.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    source.start()
  }

  async startAmbient() {
    if (this.isPlaying || !this.audioContext) return

    // Resume audio context if suspended (required by browsers)
    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume()
    }

    this.ambientSound = this.createAmbientSound()
    if (this.ambientSound) {
      this.ambientSound.start()
      this.isPlaying = true
    }
  }

  stopAmbient() {
    if (this.ambientSound && this.isPlaying) {
      this.ambientSound.stop()
      this.ambientSound = null
      this.isPlaying = false
    }
  }

  toggleAmbient() {
    if (this.isPlaying) {
      this.stopAmbient()
    } else {
      this.startAmbient()
    }
    return this.isPlaying
  }

  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume))
  }

  isAmbientPlaying(): boolean {
    return this.isPlaying
  }
}

// Singleton instance
export const spaceAudio = new SpaceAudioManager()
