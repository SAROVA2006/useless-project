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
  private createMarsAtmosphere(): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const bufferSize = this.audioContext.sampleRate * 8
    const buffer = this.audioContext.createBuffer(2, bufferSize, this.audioContext.sampleRate)
    const leftChannel = buffer.getChannelData(0)
    const rightChannel = buffer.getChannelData(1)

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

      leftChannel[i] = marsSound
      rightChannel[i] = marsSound * 0.9 // Slight stereo variation
    }

    return this.createSourceFromBuffer(buffer, "lowpass", 800)
  }

  // Create Venus atmospheric sound - hellish, bubbling, intense heat
  private createVenusAtmosphere(): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const bufferSize = this.audioContext.sampleRate * 6
    const buffer = this.audioContext.createBuffer(2, bufferSize, this.audioContext.sampleRate)
    const leftChannel = buffer.getChannelData(0)
    const rightChannel = buffer.getChannelData(1)

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

      leftChannel[i] = venusSound
      rightChannel[i] = venusSound * 1.1 // Stereo variation
    }

    return this.createSourceFromBuffer(buffer, "bandpass", 200, 2000)
  }

  // Create Jupiter atmospheric sound - massive storms, deep rumbles
  private createJupiterAtmosphere(): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const bufferSize = this.audioContext.sampleRate * 10
    const buffer = this.audioContext.createBuffer(2, bufferSize, this.audioContext.sampleRate)
    const leftChannel = buffer.getChannelData(0)
    const rightChannel = buffer.getChannelData(1)

    for (let i = 0; i < bufferSize; i++) {
      const time = i / this.audioContext.sampleRate

      // Massive storm rumbles
      const stormRumble = Math.sin(2 * Math.PI * 20 * time) * 0.25
      const deepStorm = Math.sin(2 * Math.PI * 8 * time) * 0.2

      // Great Red Spot swirling
      const redSpotSwirl = Math.sin(2 * Math.PI * 0.1 * time) * Math.sin(2 * Math.PI * 60 * time) * 0.1

      // Atmospheric pressure waves
      const pressureWaves = Math.sin(2 * Math.PI * 0.3 * time) * 0.15

      // Lightning in the distance
      const lightning = (Math.random() - 0.5) * 0.08 * (Math.random() > 0.98 ? 1 : 0)

      // Gas giant whooshing
      const gasWhoosh = Math.sin(2 * Math.PI * 100 * time) * 0.03 * Math.sin(2 * Math.PI * 0.8 * time)

      const jupiterSound =
        (stormRumble + deepStorm + redSpotSwirl + pressureWaves + lightning + gasWhoosh) * this.planetVolume

      leftChannel[i] = jupiterSound
      rightChannel[i] = jupiterSound * 0.8 // Stereo variation
    }

    return this.createSourceFromBuffer(buffer, "lowpass", 400)
  }

  // Create Europa atmospheric sound - ice cracking, geysers, underwater echoes
  private createEuropaAtmosphere(): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const bufferSize = this.audioContext.sampleRate * 12
    const buffer = this.audioContext.createBuffer(2, bufferSize, this.audioContext.sampleRate)
    const leftChannel = buffer.getChannelData(0)
    const rightChannel = buffer.getChannelData(1)

    for (let i = 0; i < bufferSize; i++) {
      const time = i / this.audioContext.sampleRate

      // Ice cracking sounds
      const iceCrack = (Math.random() - 0.5) * 0.1 * (Math.random() > 0.95 ? 1 : 0)

      // Geyser eruptions
      const geyserBase = Math.sin(2 * Math.PI * 200 * time) * 0.06
      const geyserBurst = geyserBase * Math.sin(2 * Math.PI * 0.1 * time)

      // Underwater echoes (subsurface ocean)
      const underwaterEcho = Math.sin(2 * Math.PI * 80 * time) * 0.08 * Math.sin(2 * Math.PI * 0.2 * time)

      // Tidal forces (gravitational stress)
      const tidalStress = Math.sin(2 * Math.PI * 0.05 * time) * 0.12

      // Crystalline resonance
      const crystalResonance = Math.sin(2 * Math.PI * 440 * time) * 0.02 * Math.sin(2 * Math.PI * 0.3 * time)

      const europaSound = (iceCrack + geyserBurst + underwaterEcho + tidalStress + crystalResonance) * this.planetVolume

      leftChannel[i] = europaSound
      rightChannel[i] = europaSound * 1.2 // Stereo variation
    }

    return this.createSourceFromBuffer(buffer, "bandpass", 100, 1000)
  }

  // Create Titan atmospheric sound - methane rain, thick atmosphere, alien winds
  private createTitanAtmosphere(): AudioBufferSourceNode | null {
    if (!this.audioContext) return null

    const bufferSize = this.audioContext.sampleRate * 9
    const buffer = this.audioContext.createBuffer(2, bufferSize, this.audioContext.sampleRate)
    const leftChannel = buffer.getChannelData(0)
    const rightChannel = buffer.getChannelData(1)

    for (let i = 0; i < bufferSize; i++) {
      const time = i / this.audioContext.sampleRate

      // Methane rain drops
      const methaneRain = (Math.random() - 0.5) * 0.04 * Math.sin(2 * Math.PI * 5 * time)

      // Thick atmospheric pressure
      const thickAtmosphere = Math.sin(2 * Math.PI * 25 * time) * 0.18

      // Alien wind patterns
      const alienWind = Math.sin(2 * Math.PI * 0.4 * time) * Math.sin(2 * Math.PI * 120 * time) * 0.1

      // Hydrocarbon lakes lapping
      const lakeLapping = Math.sin(2 * Math.PI * 0.8 * time) * 0.06

      // Nitrogen atmosphere density
      const nitrogenDensity = Math.sin(2 * Math.PI * 50 * time) * 0.05 * Math.sin(2 * Math.PI * 0.15 * time)

      // Mysterious alien ambience
      const alienAmbience = Math.sin(2 * Math.PI * 300 * time) * 0.03 * Math.sin(2 * Math.PI * 0.7 * time)

      const titanSound =
        (methaneRain + thickAtmosphere + alienWind + lakeLapping + nitrogenDensity + alienAmbience) * this.planetVolume

      leftChannel[i] = titanSound
      rightChannel[i] = titanSound * 0.95 // Stereo variation
    }

    return this.createSourceFromBuffer(buffer, "bandpass", 150, 800)
  }

  // Helper method to create audio source with filtering
  private createSourceFromBuffer(
    buffer: AudioBuffer,
    filterType: BiquadFilterType,
    frequency: number,
    frequency2?: number,
  ): AudioBufferSourceNode {
    const source = this.audioContext!.createBufferSource()
    source.buffer = buffer
    source.loop = true

    const filter = this.audioContext!.createBiquadFilter()
    filter.type = filterType
    filter.frequency.value = frequency
    filter.Q.value = 1

    const gainNode = this.audioContext!.createGain()
    gainNode.gain.value = this.planetVolume

    if (filterType === "bandpass" && frequency2) {
      // For bandpass filters, set Q to create the desired bandwidth
      const centerFreq = Math.sqrt(frequency * frequency2)
      const bandwidth = frequency2 - frequency
      filter.frequency.value = centerFreq
      filter.Q.value = centerFreq / bandwidth
    }

    source.connect(filter)
    filter.connect(gainNode)
    gainNode.connect(this.audioContext!.destination)

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
      const baseHum = Math.sin(2 * Math.PI * 60 * time) * 0.08
      const variation = Math.sin(2 * Math.PI * 0.3 * time) * 0.04
      const cosmicNoise = (Math.random() - 0.5) * 0.015
      data[i] = (baseHum + variation + cosmicNoise) * this.volume
    }

    const source = this.audioContext.createBufferSource()
    source.buffer = buffer
    source.loop = true

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

  // Play planet-specific atmospheric sound
  async playPlanetAtmosphere(planetName: string) {
    if (!this.audioContext) return

    // Stop current planet sound
    this.stopPlanetSound()

    if (this.audioContext.state === "suspended") {
      await this.audioContext.resume()
    }

    let planetSound: AudioBufferSourceNode | null = null

    switch (planetName.toLowerCase()) {
      case "mars":
        planetSound = this.createMarsAtmosphere()
        break
      case "venus":
        planetSound = this.createVenusAtmosphere()
        break
      case "jupiter":
        planetSound = this.createJupiterAtmosphere()
        break
      case "europa":
        planetSound = this.createEuropaAtmosphere()
        break
      case "titan":
        planetSound = this.createTitanAtmosphere()
        break
      default:
        return
    }

    if (planetSound) {
      this.planetSound = planetSound
      this.planetSound.start()
      this.isPlanetSoundPlaying = true

      // Fade in effect
      const gainNode = this.audioContext.createGain()
      gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
      gainNode.gain.linearRampToValueAtTime(this.planetVolume, this.audioContext.currentTime + 2)
    }
  }

  // Stop planet-specific sound
  stopPlanetSound() {
    if (this.planetSound && this.isPlanetSoundPlaying) {
      // Fade out effect
      if (this.audioContext) {
        const gainNode = this.audioContext.createGain()
        gainNode.gain.setValueAtTime(this.planetVolume, this.audioContext.currentTime)
        gainNode.gain.linearRampToValueAtTime(0, this.audioContext.currentTime + 1)

        setTimeout(() => {
          if (this.planetSound) {
            this.planetSound.stop()
            this.planetSound = null
            this.isPlanetSoundPlaying = false
          }
        }, 1000)
      } else {
        this.planetSound.stop()
        this.planetSound = null
        this.isPlanetSoundPlaying = false
      }
    }
  }

  // Enhanced sound effects
  playPlanetTransition(fromPlanet: string, toPlanet: string) {
    if (!this.audioContext) return

    // Create a transition sound effect
    const oscillator = this.audioContext.createOscillator()
    const gainNode = this.audioContext.createGain()
    const filter = this.audioContext.createBiquadFilter()

    oscillator.connect(filter)
    filter.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    // Swoosh effect for planet transition
    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime)
    oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.3)
    oscillator.frequency.exponentialRampToValueAtTime(100, this.audioContext.currentTime + 0.8)

    filter.type = "bandpass"
    filter.frequency.value = 400
    filter.Q.value = 10

    gainNode.gain.setValueAtTime(0, this.audioContext.currentTime)
    gainNode.gain.linearRampToValueAtTime(0.15, this.audioContext.currentTime + 0.1)
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.8)

    oscillator.start(this.audioContext.currentTime)
    oscillator.stop(this.audioContext.currentTime + 0.8)

    // Start new planet atmosphere after transition
    setTimeout(() => {
      this.playPlanetAtmosphere(toPlanet)
    }, 800)
  }

  // Enhanced beep with planet-specific frequency
  playPlanetBeep(planetName: string) {
    if (!this.audioContext) return

    const frequencies: { [key: string]: number } = {
      mars: 440, // A note - rusty and familiar
      venus: 666, // Devilish frequency for hellish planet
      jupiter: 220, // Low and massive like the planet
      europa: 880, // High and crystalline like ice
      titan: 330, // Mysterious and alien
    }

    const frequency = frequencies[planetName.toLowerCase()] || 500

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

  // Enhanced static with planet-specific characteristics
  playPlanetStatic(planetName: string) {
    if (!this.audioContext) return

    const bufferSize = this.audioContext.sampleRate * 0.6
    const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate)
    const data = buffer.getChannelData(0)

    // Planet-specific static characteristics
    const staticParams: { [key: string]: { intensity: number; frequency: number } } = {
      mars: { intensity: 0.08, frequency: 1500 },
      venus: { intensity: 0.12, frequency: 2500 },
      jupiter: { intensity: 0.15, frequency: 800 },
      europa: { intensity: 0.06, frequency: 3000 },
      titan: { intensity: 0.1, frequency: 1200 },
    }

    const params = staticParams[planetName.toLowerCase()] || { intensity: 0.08, frequency: 1500 }

    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() - 0.5) * params.intensity
    }

    const source = this.audioContext.createBufferSource()
    source.buffer = buffer

    const filter = this.audioContext.createBiquadFilter()
    filter.type = "bandpass"
    filter.frequency.value = params.frequency
    filter.Q.value = 0.5

    const gainNode = this.audioContext.createGain()
    gainNode.gain.setValueAtTime(0.08, this.audioContext.currentTime)
    gainNode.gain.exponentialRampToValueAtTime(0.001, this.audioContext.currentTime + 0.6)

    source.connect(filter)
    filter.connect(gainNode)
    gainNode.connect(this.audioContext.destination)

    source.start()
  }

  // General ambient control
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

  stopAmbient() {
    if (this.ambientSound && this.isAmbientPlaying) {
      this.ambientSound.stop()
      this.ambientSound = null
      this.isAmbientPlaying = false
    }
  }

  async toggleAmbient() {
    if (this.isAmbientPlaying) {
      this.stopAmbient()
    } else {
      await this.startAmbient()
    }
    return this.isAmbientPlaying
  }

  // Volume controls
  setVolume(volume: number) {
    this.volume = Math.max(0, Math.min(1, volume))
  }

  setPlanetVolume(volume: number) {
    this.planetVolume = Math.max(0, Math.min(1, volume))
  }

  // Status checks
  isAmbientPlaying(): boolean {
    return this.isAmbientPlaying
  }

  isPlanetSoundPlaying(): boolean {
    return this.isPlanetSoundPlaying
  }

  // Cleanup
  stopAllSounds() {
    this.stopAmbient()
    this.stopPlanetSound()
  }
}

// Singleton instance
export const enhancedSpaceAudio = new EnhancedSpaceAudioManager()
