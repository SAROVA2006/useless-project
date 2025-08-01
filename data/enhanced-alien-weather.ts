export interface EnhancedWeatherData {
  planet: string
  emoji: string
  gradient: string
  description: string
  atmosphere: string
  gravity: string
  dayLength: string
  weather: {
    condition: string
    temperature: string
    windSpeed: string
    humidity: string
    pressure: string
    visibility: string
    uvIndex: string
    description: string
    outfit: string[]
    nasaQuote: string
    funFact: string
    icon: string
    severity: "Mild" | "Moderate" | "Extreme" | "Apocalyptic"
    mood: string
  }[]
}

export const enhancedAlienWeatherData: EnhancedWeatherData[] = [
  {
    planet: "Mars",
    emoji: "🔴",
    gradient: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
    description: "The Red Planet - Where rust meets regret",
    atmosphere: "95.97% CO₂, 1.93% Argon, 1.89% Nitrogen",
    gravity: "3.71 m/s² (38% of Earth)",
    dayLength: "24h 37m (Perfect for procrastination)",
    weather: [
      {
        condition: "Rusty with a chance of existential dread",
        temperature: "-80°C to 20°C (Popsicle to slightly less popsicle)",
        windSpeed: "120 km/h (Hurricane-level disappointment)",
        humidity: "0.03% (Drier than your dating life)",
        pressure: "0.6% of Earth (Your hopes and dreams have more pressure)",
        visibility: "50m (Can't see your mistakes from here)",
        uvIndex: "Lethal+ (SPF 1000 recommended)",
        description:
          "Today's forecast: 100% chance of being really, really far from home. The dust storms are so intense, even the Martians are staying indoors (if they existed). Perfect weather for contemplating your life choices.",
        outfit: [
          "Rust-proof underwear (essential)",
          "Anti-gravity socks (for floating away from problems)",
          "A really, REALLY long extension cord",
          "Homesickness medication (industrial strength)",
          "Emergency Earth coordinates tattoo",
        ],
        nasaQuote:
          "Mars is red because it's embarrassed about how boring it is. Stay on Earth. At least we have pizza and breathable air.",
        funFact: "Mars has the largest volcano in the solar system, but still no decent coffee shops or WiFi.",
        icon: "🌪️",
        severity: "Extreme",
        mood: "Melancholic with hints of cosmic loneliness",
      },
      {
        condition: "Suspiciously calm (the calm before the space storm)",
        temperature: "-60°C (Colder than your ex's heart)",
        windSpeed: "25 km/h (Gentle breeze of impending doom)",
        humidity: "What's humidity? Never heard of her",
        pressure: "Barely there (like your motivation)",
        visibility: "15km (Can see your regrets clearly)",
        uvIndex: "Still lethal (Mars doesn't mess around)",
        description:
          "Eerily calm weather on Mars today. Either it's a beautiful day or the planet is plotting something. We're betting on the plotting. The silence is deafening and slightly ominous.",
        outfit: [
          "Paranoia helmet (with built-in anxiety detector)",
          "Trust issues jacket (waterproof against tears)",
          "Comfortable running shoes (for escaping reality)",
          "Snacks (lots and lots of snacks)",
          "A good book (you'll have time to read)",
        ],
        nasaQuote:
          "When Mars is quiet, it's planning. When it's stormy, it's angry. Either way, stay on Earth where the weather makes sense.",
        funFact: "A day on Mars is 24 hours and 37 minutes. That's 37 extra minutes of regret about leaving Earth.",
        icon: "👁️",
        severity: "Moderate",
        mood: "Ominously peaceful with undertones of cosmic conspiracy",
      },
    ],
  },
  {
    planet: "Venus",
    emoji: "♀️",
    gradient: "linear-gradient(135deg, #ffa726, #ff7043)",
    description: "The Morning Star - Beauty that kills",
    atmosphere: "96.5% CO₂, 3.5% Nitrogen (Basically a greenhouse nightmare)",
    gravity: "8.87 m/s² (91% of Earth)",
    dayLength: "243 Earth days (Longest Monday ever)",
    weather: [
      {
        condition: "Acid rain with a side of eternal suffering",
        temperature: "462°C (Hotter than your mixtape, deadlier than your cooking)",
        windSpeed: "5 km/h (Leisurely death breeze)",
        humidity: "Melted into pure regret",
        pressure: "92x Earth pressure (Like being 900m underwater, but with more fire)",
        visibility: "1km (Through tears of molten lead)",
        uvIndex: "Doesn't matter, you're already dead",
        description:
          "Venus is having another one of those days where everything is literally melting. The weather is so bad, even the weather itself is complaining. Acid rain is falling upward due to the heat. It's like nature's own personal hell.",
        outfit: [
          "Lava-proof everything (including your soul)",
          "A time machine (to go back and not come here)",
          "Sunscreen SPF ∞ (still won't help)",
          "Last will and testament (pre-written)",
          "Emergency Earth evacuation plan (good luck with that)",
        ],
        nasaQuote:
          "Venus: It's like Earth's evil twin who went to therapy and got worse. Please, for the love of all that is holy, stay on Earth.",
        funFact: "Venus rotates backwards. Even the planet knows it made a terrible mistake and is trying to undo it.",
        icon: "🔥",
        severity: "Apocalyptic",
        mood: "Infernal rage with hints of sulfuric despair",
      },
    ],
  },
  {
    planet: "Jupiter",
    emoji: "🪐",
    gradient: "linear-gradient(135deg, #ff9800, #f57c00)",
    description: "The Gas Giant - Big, stormy, and dramatic",
    atmosphere: "89% Hydrogen, 10% Helium, 1% Other (Basically a giant balloon)",
    gravity: "24.79 m/s² (You'd weigh 2.5x more and feel 10x worse)",
    dayLength: "9h 56m (Short days, long nightmares)",
    weather: [
      {
        condition: "Great Red Spot having an identity crisis",
        temperature: "-145°C (Frozen solid regret)",
        windSpeed: "400 km/h (Hurricane on steroids and energy drinks)",
        humidity: "Ammonia soup (toxic and unappetizing)",
        pressure: "Crushing (literally and metaphorically)",
        visibility: "What's visibility? This is Jupiter",
        uvIndex: "Irrelevant in this gas nightmare",
        description:
          "Jupiter's famous Great Red Spot is acting up again. It's been storming for 400 years and shows no signs of getting therapy. The storm is larger than Earth and has anger management issues.",
        outfit: [
          "Storm-proof everything (including your sanity)",
          "Existential crisis helmet (with built-in therapy)",
          "Anti-ammonia nose plugs (industrial strength)",
          "A really strong grip on reality (you'll need it)",
          "Emergency existential philosophy books",
        ],
        nasaQuote:
          "Jupiter: Where storms last longer than most civilizations. Earth is looking pretty good right now, isn't it?",
        funFact: "Jupiter has 95 moons. It's basically the solar system's overachiever with commitment issues.",
        icon: "🌀",
        severity: "Apocalyptic",
        mood: "Chaotically dramatic with swirling emotions",
      },
    ],
  },
  {
    planet: "Europa",
    emoji: "🧊",
    gradient: "linear-gradient(135deg, #81d4fa, #4fc3f7)",
    description: "Jupiter's Icy Moon - Cold, lonely, and possibly fishy",
    atmosphere: "Thin oxygen atmosphere (Don't get excited, it's still deadly)",
    gravity: "1.314 m/s² (13% of Earth - you could jump really high before dying)",
    dayLength: "3.5 Earth days (Synchronized with Jupiter, like a cosmic dance)",
    weather: [
      {
        condition: "Ice geysers of cosmic loneliness",
        temperature: "-180°C (Absolute zero personality)",
        windSpeed: "Minimal (Even the wind gave up)",
        humidity: "Frozen solid into crystallized tears",
        pressure: "0.1 micropascals (Basically nothing, like your chances of survival)",
        visibility: "Crystal clear regret for 20km",
        uvIndex: "Blocked by ice (small mercies)",
        description:
          "Europa's ice geysers are shooting water 200km into space. It's like the moon is crying, and honestly, we understand why. The subsurface ocean might have alien fish, but they're probably as depressed as you'd be.",
        outfit: [
          "Cryo-tears collector (for the aesthetic)",
          "Ice-skating regrets (fashionable and functional)",
          "Thermal depression blanket (extra thick)",
          "Hot chocolate IV drip (essential for survival)",
          "Submarine gear (just in case you fall through)",
        ],
        nasaQuote:
          "Europa has more water than Earth's oceans, but it's all frozen and really, really far away. Stick to your local beach.",
        funFact: "Europa might have alien fish. They're probably as confused about being there as you would be.",
        icon: "⛲",
        severity: "Extreme",
        mood: "Melancholically beautiful with undertones of cosmic isolation",
      },
    ],
  },
  {
    planet: "Titan",
    emoji: "🟤",
    gradient: "linear-gradient(135deg, #8d6e63, #5d4037)",
    description: "Saturn's Largest Moon - Smells like a gas station, looks like a dream",
    atmosphere: "98.4% Nitrogen, 1.6% Methane (Like Earth, but deadly)",
    gravity: "1.352 m/s² (14% of Earth - low gravity, high regret)",
    dayLength: "15.9 Earth days (Plenty of time to contemplate your choices)",
    weather: [
      {
        condition: "Methane drizzle of disappointment",
        temperature: "-179°C (Colder than your future prospects here)",
        windSpeed: "15 km/h (Gentle breeze of doom)",
        humidity: "Liquid methane everywhere (like a cosmic gas station)",
        pressure: "1.45x Earth pressure (Crushing your dreams efficiently)",
        visibility: "Hazy with a chance of regret",
        uvIndex: "Blocked by thick atmosphere (one good thing)",
        description:
          "It's raining methane on Titan! Perfect weather for... well, nothing you'd want to do. The lakes are made of methane too. It's like a really depressing water park that smells like a gas station.",
        outfit: [
          "Methane-proof regrets (waterproof against liquid sadness)",
          "Hydrocarbon-resistant hopes and dreams",
          "Emergency Earth evacuation plan (laminated)",
          "A really good explanation for why you're here",
          "Nose plugs (industrial strength)",
        ],
        nasaQuote:
          "Titan has lakes and rivers like Earth! Too bad they're made of methane and will kill you instantly. But hey, at least it's scenic!",
        funFact:
          "Titan's atmosphere is so thick you could fly by flapping your arms. You'd still die, but you'd look silly doing it.",
        icon: "🌦️",
        severity: "Extreme",
        mood: "Dreamily toxic with hints of hydrocarbon melancholy",
      },
    ],
  },
]

export const getEnhancedRandomWeather = (planetName: string) => {
  const planet = enhancedAlienWeatherData.find((p) => p.planet === planetName)
  if (!planet) return enhancedAlienWeatherData[0].weather[0]

  const randomIndex = Math.floor(Math.random() * planet.weather.length)
  return planet.weather[randomIndex]
}

export const getPlanetData = (planetName: string) => {
  return enhancedAlienWeatherData.find((p) => p.planet === planetName) || enhancedAlienWeatherData[0]
}
