export interface AlienWeatherData {
  planet: string
  emoji: string
  weather: {
    condition: string
    temperature: string
    windSpeed: string
    humidity: string
    description: string
    outfit: string[]
    nasaQuote: string
    funFact: string
    icon: string
  }[]
}

export const alienWeatherData: AlienWeatherData[] = [
  {
    planet: "Mars",
    emoji: "🔴",
    weather: [
      {
        condition: "Rusty with a chance of robots",
        temperature: "-80°C (Perfect for popsicles!)",
        windSpeed: "120 km/h (Great for kite flying... if you had air)",
        humidity: "Drier than your sense of humor",
        description:
          "Today's forecast: 100% chance of being really, really far from home. The dust storms are so intense, even the Martians are staying indoors (if they existed).",
        outfit: [
          "Rust-proof underwear",
          "Anti-gravity socks",
          "A really, REALLY long extension cord",
          "Homesickness medication",
        ],
        nasaQuote:
          "Mars is red because it's embarrassed about how boring it is. Stay on Earth. At least we have pizza.",
        funFact: "Mars has the largest volcano in the solar system, but still no decent coffee shops.",
        icon: "🌪️",
      },
      {
        condition: "Suspiciously quiet (too quiet...)",
        temperature: "-60°C (Colder than your ex's heart)",
        windSpeed: "25 km/h (Gentle Martian breeze)",
        humidity: "What's humidity?",
        description:
          "Eerily calm weather on Mars today. Either it's a beautiful day or the planet is plotting something. We're betting on the plotting.",
        outfit: [
          "Paranoia helmet",
          "Trust issues jacket",
          "Comfortable running shoes (for escaping)",
          "Snacks (lots of snacks)",
        ],
        nasaQuote: "When Mars is quiet, it's planning. When it's stormy, it's angry. Either way, stay on Earth.",
        funFact: "A day on Mars is 24 hours and 37 minutes. That's 37 extra minutes of regret about leaving Earth.",
        icon: "👁️",
      },
    ],
  },
  {
    planet: "Venus",
    emoji: "♀️",
    weather: [
      {
        condition: "Acid rain with a side of regret",
        temperature: "462°C (Hotter than your mixtape)",
        windSpeed: "5 km/h (Leisurely death breeze)",
        humidity: "Melted",
        description:
          "Venus is having another one of those days where everything is literally melting. The weather is so bad, even the weather itself is complaining.",
        outfit: [
          "Lava-proof everything",
          "A time machine (to go back and not come here)",
          "Sunscreen SPF 1000",
          "Last will and testament",
        ],
        nasaQuote: "Venus: It's like Earth's evil twin who went to therapy and got worse. Please stay on Earth.",
        funFact: "Venus rotates backwards. Even the planet knows it made a mistake.",
        icon: "🔥",
      },
      {
        condition: "Volcanic tantrum in progress",
        temperature: "470°C (Oven-level toasty)",
        windSpeed: "10 km/h (Angry planet huffing)",
        humidity: "Evaporated into pure regret",
        description:
          "Venus is throwing another volcanic fit. We recommend staying at least 25 million miles away, or roughly one Earth distance.",
        outfit: [
          "Heat-resistant regrets",
          "Molten-proof shoes",
          "A really good life insurance policy",
          "Emergency Earth coordinates",
        ],
        nasaQuote:
          "Venus proves that just because something is named after the goddess of love, doesn't mean it won't kill you.",
        funFact: "A day on Venus is longer than its year. Even time is confused and wants to leave.",
        icon: "🌋",
      },
    ],
  },
  {
    planet: "Jupiter",
    emoji: "🪐",
    weather: [
      {
        condition: "Great Red Spot having an identity crisis",
        temperature: "-145°C (Frozen solid regret)",
        windSpeed: "400 km/h (Hurricane on steroids)",
        visibility: "What's visibility?",
        humidity: "Ammonia soup",
        description:
          "Jupiter's famous Great Red Spot is acting up again. It's been storming for 400 years and shows no signs of getting therapy.",
        outfit: [
          "Storm-proof everything",
          "Existential crisis helmet",
          "Anti-ammonia nose plugs",
          "A really strong grip on reality",
        ],
        nasaQuote:
          "Jupiter: Where storms last longer than most civilizations. Earth is looking pretty good right now, isn't it?",
        funFact: "Jupiter has 95 moons. It's basically the solar system's overachiever.",
        icon: "🌀",
      },
      {
        condition: "Ammonia snow day (school's cancelled forever)",
        temperature: "-150°C (Colder than space itself)",
        windSpeed: "200 km/h (Moderately apocalyptic)",
        visibility: "Nope",
        humidity: "Crystallized despair",
        description:
          "It's snowing ammonia on Jupiter! Perfect weather for... absolutely nothing a human could survive.",
        outfit: [
          "Chemical-resistant everything",
          "A PhD in regret",
          "Emergency Earth evacuation plan",
          "Warm memories of home",
        ],
        nasaQuote: "Jupiter's weather makes Earth's worst blizzard look like a gentle spring breeze. Stay home.",
        funFact: "Jupiter could fit 1,300 Earths inside it. That's 1,299 too many reasons to stay on Earth.",
        icon: "❄️",
      },
    ],
  },
  {
    planet: "Europa",
    emoji: "🧊",
    weather: [
      {
        condition: "Ice geysers of loneliness",
        temperature: "-180°C (Absolute zero personality)",
        windSpeed: "Minimal (Even the wind gave up)",
        visibility: "Crystal clear regret",
        humidity: "Frozen solid",
        description:
          "Europa's ice geysers are shooting water 200km into space. It's like the moon is crying, and honestly, we understand why.",
        outfit: ["Cryo-tears collector", "Ice-skating regrets", "Thermal depression blanket", "Hot chocolate IV drip"],
        nasaQuote:
          "Europa has more water than Earth's oceans, but it's all frozen and really, really far away. Stick to your local beach.",
        funFact: "Europa might have alien fish. They're probably as confused about being there as you would be.",
        icon: "⛲",
      },
      {
        condition: "Smooth ice plains of existential dread",
        temperature: "-160°C (Slightly less frozen despair)",
        windSpeed: "None (Even the atmosphere is depressed)",
        visibility: "Endless white nothingness",
        humidity: "Solid state sadness",
        description:
          "Perfect ice skating weather on Europa! Too bad the nearest ice rink is 390 million miles away and you'd die instantly.",
        outfit: [
          "Ice skates of regret",
          "Thermal existential crisis suit",
          "Emergency Earth coordinates tattoo",
          "A really good book (you'll have time)",
        ],
        nasaQuote: "Europa: Where the ice is nice, but you'll die. Earth's ice cream is much more accessible.",
        funFact:
          "Europa's surface is smoother than a bowling ball. Perfect for slipping and falling into an existential crisis.",
        icon: "⛸️",
      },
    ],
  },
  {
    planet: "Titan",
    emoji: "🟤",
    weather: [
      {
        condition: "Methane drizzle of disappointment",
        temperature: "-179°C (Colder than your future prospects here)",
        windSpeed: "15 km/h (Gentle breeze of doom)",
        visibility: "Hazy with a chance of regret",
        humidity: "Liquid methane everywhere",
        description:
          "It's raining methane on Titan! Perfect weather for... well, nothing you'd want to do. The lakes are made of methane too. It's like a really depressing water park.",
        outfit: [
          "Methane-proof regrets",
          "Hydrocarbon-resistant hopes and dreams",
          "Emergency Earth evacuation plan",
          "A really good explanation for why you're here",
        ],
        nasaQuote:
          "Titan has lakes and rivers like Earth! Too bad they're made of methane and will kill you instantly.",
        funFact:
          "Titan's atmosphere is so thick you could fly by flapping your arms. You'd still die, but you'd look silly doing it.",
        icon: "🌦️",
      },
      {
        condition: "Nitrogen winds of poor life choices",
        temperature: "-185°C (Regret temperature)",
        windSpeed: "50 km/h (Moderate life-questioning breeze)",
        visibility: "Questionable, like your decisions",
        humidity: "Dense with poor choices",
        description:
          "Strong nitrogen winds are reshaping Titan's surface. It's like the moon is constantly redecorating, but with deadly gas.",
        outfit: [
          "Wind-resistant life choices",
          "Nitrogen-proof common sense",
          "Emergency reality check",
          "A one-way ticket back to Earth",
        ],
        nasaQuote:
          "Titan's winds could power wind farms! Too bad you'd be dead before you could enjoy the renewable energy.",
        funFact:
          "Titan is the only moon with a substantial atmosphere. It's still trying to kill you, but at least it's trying hard.",
        icon: "💨",
      },
    ],
  },
]

export const getRandomWeather = (planetName: string) => {
  const planet = alienWeatherData.find((p) => p.planet === planetName)
  if (!planet) return alienWeatherData[0].weather[0]

  const randomIndex = Math.floor(Math.random() * planet.weather.length)
  return planet.weather[randomIndex]
}

export const getCurrentDate = () => {
  const options: Intl.DateTimeFormatOptions = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }
  return new Date().toLocaleDateString("en-US", options)
}

export const getSpaceDate = (planetName: string) => {
  const earthDate = new Date()
  const spaceDate = new Date(earthDate)

  // Add some silly space time calculations
  switch (planetName) {
    case "Mars":
      spaceDate.setDate(earthDate.getDate() + 687) // Mars year in Earth days
      break
    case "Venus":
      spaceDate.setDate(earthDate.getDate() - 243) // Venus day in Earth days (backwards)
      break
    case "Jupiter":
      spaceDate.setHours(earthDate.getHours() - 10) // Jupiter day is ~10 hours
      break
    case "Europa":
      spaceDate.setDate(earthDate.getDate() + 3.5) // Europa orbital period
      break
    case "Titan":
      spaceDate.setDate(earthDate.getDate() + 16) // Titan orbital period
      break
  }

  return spaceDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}
