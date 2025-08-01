export class EnhancedSpaceAudioManager {
  private audioContext: AudioContext | null = null
  private ambientSound: AudioBufferSourceNode | null = null
  private planetSound: AudioBufferSourceNode | null = null
  private isAmbientPlaying = false
  private isPlanetSoundPlaying = false
  private volume = 0.3
  private planetVolume = 0.4

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

  // Create Mars atmospheric sound - windy, dusty, desolate
  private createMarsSound(): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const bufferSize = this.audioContext.sampleRate * 8
    const buffer = this.audioContext.createBuffer(2, bufferSize, this.audioContext.sampleRate)
    const leftData = buffer.getChannelData(0)
    const rightData = buffer.getChannelData(1)

    for (let i = 0; i < bufferSize; i++) {
      const time = i / this.audioContext.sampleRate

      // Wind howling effect
      const windBase = Math.sin(2 * Math.PI * 0.3 * time) * 0.15
      const windVariation = Math.sin(2 * Math.PI * 0.7 * time) * 0.08

      // Dust storm crackling
      const dustNoise = (Math.random() - 0.5) * 0.03 * Math.sin(2 * Math.PI * 2 * time)

      // Low frequency rumble
      const rumble = Math.sin(2 * Math.PI * 40 * time) * 0.05

      const marsSound = (windBase + windVariation + dustNoise + rumble) * this.planetVolume

      leftData[i] = marsSound
      rightData[i] = marsSound * 0.9 // Slight stereo variation
    }

    return this.createSourceFromBuffer(buffer, "lowpass", 800)
  }

  // Create Venus atmospheric sound - hellish, bubbling, intense heat
  private createVenusSound(): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const bufferSize = this.audioContext.sampleRate * 6
    const buffer = this.audioContext.createBuffer(2, bufferSize, this.audioContext.sampleRate)
    const leftData = buffer.getChannelData(0)
    const rightData = buffer.getChannelData(1)

    for (let i = 0; i < bufferSize; i++) {
      const time = i / this.audioContext.sampleRate

      // Hellish rumbling
      const hellRumble = Math.sin(2 * Math.PI * 30 * time) * 0.2
      const deepRumble = Math.sin(2 * Math.PI * 15 * time) * 0.15

      // Acid bubbling effect
      const bubbling = Math.sin(2 * Math.PI * 150 * time) * 0.08 * Math.sin(2 * Math.PI * 0.5 * time)

      // Heat shimmer (high frequency modulation)
      const heatShimmer = Math.sin(2 * Math.PI * 1000 * time) * 0.02 * Math.sin(2 * Math.PI * 3 * time)

      // Volcanic activity
      const volcanic = (Math.random() - 0.5) * 0.05 * Math.sin(2 * Math.PI * 0.2 * time)

      const venusSound = (hellRumble + deepRumble + bubbling + heatShimmer + volcanic) * this.planetVolume

      leftData[i] = venusSound
      rightData[i] = venusSound * 1.1
    }

    return this.createSourceFromBuffer(buffer, "bandpass", 200)
  }

  // Create Jupiter atmospheric sound - massive storms, deep rumbles
  private createJupiterSound(): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const bufferSize = this.audioContext.sampleRate * 10
    const buffer = this.audioContext.createBuffer(2, bufferSize, this.audioContext.sampleRate)
    const leftData = buffer.getChannelData(0)
    const rightData = buffer.getChannelData(1)

    for (let i = 0; i < bufferSize; i++) {
      const time = i / this.audioContext.sampleRate

      // Massive storm winds
      const stormWind = Math.sin(2 * Math.PI * 0.1 * time) * 0.25
      const windGusts = Math.sin(2 * Math.PI * 0.8 * time) * 0.15

      // Great Red Spot swirling
      const redSpotSwirl = Math.sin(2 * Math.PI * 1.2 * time) * 0.1 * Math.sin(2 * Math.PI * 0.3 * time)

      // Deep atmospheric pressure
      const deepPressure = Math.sin(2 * Math.PI * 20 * time) * 0.18

      // Lightning in the distance
      const lightning = (Math.random() - 0.5) * 0.08 * (Math.random() > 0.98 ? 1 : 0)

      const jupiterSound = (stormWind + windGusts + redSpotSwirl + deepPressure + lightning) * this.planetVolume

      leftData[i] = jupiterSound
      rightData[i] = jupiterSound * 0.95
    }

    return this.createSourceFromBuffer(buffer, "lowpass", 400)
  }

  // Create Europa atmospheric sound - ice cracking, geysers, underwater echoes
  private createEuropaSound(): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const bufferSize = this.audioContext.sampleRate * 12
    const buffer = this.audioContext.createBuffer(2, bufferSize, this.audioContext.sampleRate)
    const leftData = buffer.getChannelData(0)
    const rightData = buffer.getChannelData(1)

    for (let i = 0; i < bufferSize; i++) {
      const time = i / this.audioContext.sampleRate

      // Ice cracking sounds
      const iceCrack = (Math.random() - 0.5) * 0.1 * (Math.random() > 0.95 ? 1 : 0)

      // Geyser eruptions
      const geyser = Math.sin(2 * Math.PI * 0.05 * time) * 0.12 * Math.sin(2 * Math.PI * 200 * time) * 0.3

      // Underwater ocean sounds
      const oceanEcho = Math.sin(2 * Math.PI * 80 * time) * 0.08 * Math.sin(2 * Math.PI * 0.2 * time)

      // Tidal forces
      const tidalForce = Math.sin(2 * Math.PI * 0.1 * time) * 0.06

      // Crystalline resonance
      const crystalResonance = Math.sin(2 * Math.PI * 440 * time) * 0.02 * Math.sin(2 * Math.PI * 0.4 * time)

      const europaSound = (iceCrack + geyser + oceanEcho + tidalForce + crystalResonance) * this.planetVolume

      leftData[i] = europaSound
      rightData[i] = europaSound * 1.05
    }

    return this.createSourceFromBuffer(buffer, "bandpass", 300)
  }

  // Create Titan atmospheric sound - methane rain, thick atmosphere, alien ambience
  private createTitanSound(): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const bufferSize = this.audioContext.sampleRate * 9
    const buffer = this.audioContext.createBuffer(2, bufferSize, this.audioContext.sampleRate)
    const leftData = buffer.getChannelData(0)
    const rightData = buffer.getChannelData(1)

    for (let i = 0; i < bufferSize; i++) {
      const time = i / this.audioContext.sampleRate

      // Methane rain drops
      const methaneRain = (Math.random() - 0.5) * 0.06 * Math.sin(2 * Math.PI * 5 * time)

      // Thick atmospheric pressure
      const thickAtmosphere = Math.sin(2 * Math.PI * 60 * time) * 0.12

      // Hydrocarbon lakes lapping
      const lakeLapping = Math.sin(2 * Math.PI * 0.3 * time) * 0.08

      // Nitrogen winds
      const nitrogenWind = Math.sin(2 * Math.PI * 0.6 * time) * 0.1

      // Alien ambience (mysterious tones)
      const alienTone = Math.sin(2 * Math.PI * 220 * time) * 0.03 * Math.sin(2 * Math.PI * 0.15 * time)

      const titanSound = (methaneRain + thickAtmosphere + lakeLapping + nitrogenWind + alienTone) * this.planetVolume

      leftData[i] = titanSound
      rightData[i] = titanSound * 0.92
    }

    return this.createSourceFromBuffer(buffer, "lowpass", 600)
  }

  // Helper method to create audio source with filtering
  private createSourceFromBuffer(
    buffer: AudioBuffer,
    filterType: BiquadFilterType,
    frequency: number,
  ): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const source = this.audioContext.createBufferSource()
    source.buffer = buffer
    source.loop = true

    const filter = this.audioContext.createBiquadFilter()
    filter.type = filterType
    filter.frequency.value = frequency
    filter.Q.value = 1

    const gainNode = this.audioContext.createGain()
    gainNode.gain.value = this.planetVolume

    source.connect(filter)
    filter.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    return source
  }

  // Create general ambient space sound
  private createAmbientSound(): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const bufferSize = this.audioContext.sampleRate * 6
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate)
    const data = buffer.getChannelData(0)

    for (let i = 0; i < bufferSize; i++) {
      const time = i / this.audioContext.sampleRate
      const baseHum = Math.sin(2 * Math.PI * 55 * time) * 0.08
      const variation = Math.sin(2 * Math.PI * 0.2 * time) * 0.04
      const cosmicNoise = (Math.random() - 0.5) * 0.015
      data[i] = (baseHum + variation + cosmicNoise) * this.volume
    }

    const source = this.audioContext.createBufferSource()
    source.buffer = buffer
    source.loop = true

    const filter = this.audioContext.createBiquadFilter()
    filter.type = "lowpass"
    filter.frequency.value = 150
    filter.Q.value = 1

    const gainNode = this.audioContext.createGain()
    gainNode.gain.value = this.volume

    source.connect(filter)
    filter.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    return source
  }

  // Planet-specific sound effects
  playPlanetTransition(planetName: string) {
    if (!this.audioContext) return

    // Create a whoosh sound for planet transitions
    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()
    const filter = this.audioContext.createBiquadFilter()

    oscillator.connect(filter)
    filter.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.3)
    oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 1)

    filter.type = "bandpass"
    filter.frequency.value = 400
    filter.Q.value = 5

    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
    gainNode.gain.linearRampToValueAtTime(0.15, this.audioContext.currentTime + 0.1)
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 1)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 1)
  }

  // Enhanced beep with planet-specific pitch
  playPlanetBeep(planetName: string) {
    if (!this.audioContext) return

    const frequencies: { [key: string]: number } = {
      Mars: 600,
      Venus: 900,
      Jupiter: 300,
      Europa: 800,
      Titan: 500,
    }

    const frequency = frequencies[planetName] || 700
    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()

    oscillator.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    oscillator.frequency.value = frequency
    oscillator.type = "sine"

    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
    gainNode.gain.linearRampToValueAtTime(0.1, this.audioContext.currentTime + 0.01)
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.4)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.4)
  }

  // Start planet-specific atmospheric sound
  async startPlanetSound(planetName: string) {
    if (!this.audioContext) return

    // Stop current planet sound
    this.stopPlanetSound()

    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume()
    }

    let planetSoundGenerator
    switch (planetName) {
      case "Mars":
        planetSoundGenerator = this.createMarsSound()
        break
      case "Venus":
        planetSoundGenerator = this.createVenusSound()
        break
      case "Jupiter":
        planetSoundGenerator = this.createJupiterSound()
        break
      case "Europa":
        planetSoundGenerator = this.createEuropaSound()
        break
      case "Titan":
        planetSoundGenerator = this.createTitanSound()
        break
      default:
        return
    }

    if (planetSoundGenerator) {
      this.planetSound = planetSoundGenerator
      this.planetSound.start()
      this.isPlanetSoundPlaying = true
    }
  }

  // Stop planet-specific sound
  stopPlanetSound() {
    if (this.planetSound && this.isPlanetSoundPlaying) {
      this.planetSound.stop()
      this.planetSound = null
      this.isPlanetSoundPlaying = false
    }
  }

  // Start general ambient sound
  async startAmbient() {
    if (this.isAmbientPlaying || !this.audioContext) return

    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume()
    }

    this.ambientSound = this.createAmbientSound()
    if (this.ambientSound) {
      this.ambientSound.start()
      this.isAmbientPlaying = true
    }
  }

  // Stop ambient sound
  stopAmbient() {
    if (this.ambientSound && this.isAmbientPlaying) {
      this.ambientSound.stop()
      this.ambientSound = null
      this.isAmbientPlaying = false
    }
  }

  // Toggle ambient sound
  async toggleAmbient() {
    if (this.isAmbientPlaying) {
      this.stopAmbient()
    } else {
      await this.startAmbient()
    }
    return this.isAmbientPlaying
  }

  // Set volumes
  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume))
  }

  setPlanetVolume(volume: number) {
    this.planetVolume = Math.max(0, Math.min(1, volume))
  }

  // Status checks
  isAmbientSoundPlaying(): boolean {
    return this.isAmbientPlaying
  }

  isPlanetSoundActive(): boolean {
    return this.isPlanetSoundPlaying
  }
}

// Singleton instance
export const enhancedSpaceAudio = new EnhancedSpaceAudioManager()
