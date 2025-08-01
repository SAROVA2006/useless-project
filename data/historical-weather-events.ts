export interface HistoricalWeatherEvent {
  date: string
  planet: string
  event: string
  description: string
  casualties: string
  eyewitnessQuote: string
  aftermath: string
  icon: string
  severity: "Mild Inconvenience" | "Moderately Annoying" | "Absolutely Ridiculous" | "Cosmically Absurd"
}

export const historicalWeatherEvents: HistoricalWeatherEvent[] = [
  // Mars Events
  {
    date: "March 32nd, 2847 BC",
    planet: "Mars",
    event: "The Great Rust Storm of Ancient Mars",
    description:
      "A massive dust storm lasted for 3 Martian years, turning the entire planet from red to slightly more red. The storm was so intense that it created the first known case of planetary seasonal depression.",
    casualties: "0 humans (thankfully, none were there), 47 confused rovers",
    eyewitnessQuote:
      "It was like being inside a giant rusty washing machine, but less fun and with no clean clothes at the end. - Zorg the Martian (fictional)",
    aftermath: "Mars decided to stay red permanently. The planet is still in therapy about it.",
    icon: "🌪️",
    severity: "Absolutely Ridiculous",
  },
  {
    date: "Sol 1,247 (Martian Calendar)",
    planet: "Mars",
    event: "The Day Mars Forgot How to Weather",
    description:
      "For exactly 24 hours and 37 minutes, Mars had absolutely no weather at all. No wind, no dust, no temperature changes. It was described as 'eerily boring' by absolutely no one who was there.",
    casualties: "Several weather stations died of boredom",
    eyewitnessQuote:
      "I've never seen anything so aggressively uneventful. Even the rocks looked disappointed. - Dr. Imaginary McFakename",
    aftermath: "Mars overcompensated with extra dust storms for the next decade.",
    icon: "😴",
    severity: "Mild Inconvenience",
  },

  // Venus Events
  {
    date: "Venusday, 13th of Meltember, 1456",
    planet: "Venus",
    event: "The Great Acid Rain Apocalypse (Tuesday Edition)",
    description:
      "Venus experienced its worst acid rain in recorded history (all 3 days of it). The rain was so acidic it melted the previous weather records, which is why we only have 3 days of recorded history.",
    casualties: "Everything that wasn't already melted, plus some things that were",
    eyewitnessQuote:
      "I tried to take an umbrella, but it dissolved before I could open it. Then I dissolved too. 0/10 would not recommend. - Ghost of Venus Tourist #1",
    aftermath: "Venus banned umbrellas permanently. Also tourists.",
    icon: "☔",
    severity: "Cosmically Absurd",
  },
  {
    date: "The Hot Tuesday of 1823",
    planet: "Venus",
    event: "The Day Venus Got Even Hotter (Somehow)",
    description:
      "Venus managed to get 50 degrees hotter than usual, which scientists described as 'mathematically impossible' and 'really quite rude.' The planet's response was to get even hotter out of spite.",
    casualties: "The concept of 'comfortable temperature' was completely destroyed",
    eyewitnessQuote:
      "I thought regular Venus was hot, but this was like being inside the sun's angry older brother. - Definitely Real Space Explorer",
    aftermath: "Venus is still showing off about this day. Very proud of itself.",
    icon: "🔥",
    severity: "Absolutely Ridiculous",
  },

  // Jupiter Events
  {
    date: "The 400th Year of the Great Red Spot",
    planet: "Jupiter",
    event: "The Great Red Spot's Mid-Life Crisis",
    description:
      "Jupiter's famous Great Red Spot suddenly decided it wanted to be purple instead. The identity crisis lasted for 6 months and caused massive atmospheric confusion. Weather reporters didn't know what to call it.",
    casualties: "Several meteorologists' sanity, 12 weather satellites' color sensors",
    eyewitnessQuote:
      "One day it was red, the next day it was having an existential crisis about its color choices. Very relatable, honestly. - Jupiter Weather Station Alpha",
    aftermath: "The spot eventually went back to red but now requires weekly therapy sessions.",
    icon: "🌀",
    severity: "Moderately Annoying",
  },
  {
    date: "Jovian Storm Season, Year 2,847",
    planet: "Jupiter",
    event: "The Great Ammonia Blizzard of Confusion",
    description:
      "Jupiter experienced its first and only ammonia blizzard that fell upward instead of downward. Scientists are still confused. Jupiter refuses to explain itself.",
    casualties: "The laws of physics (temporarily), 3 space probes that got very lost",
    eyewitnessQuote:
      "I've seen a lot of weird weather, but snow falling into space was a new one. Jupiter's just showing off at this point. - Confused Atmospheric Scientist",
    aftermath: "Jupiter now has a reputation for being 'that weird planet' at solar system parties.",
    icon: "❄️",
    severity: "Cosmically Absurd",
  },

  // Europa Events
  {
    date: "Ice Age 47 (Europa doesn't have years, just ice ages)",
    planet: "Europa",
    event: "The Great Geyser Rebellion",
    description:
      "All of Europa's geysers decided to go on strike simultaneously, demanding better working conditions and dental coverage. The moon's surface became suspiciously quiet for 3 Earth months.",
    casualties: "Tourism industry (what tourism industry?), several confused scientists",
    eyewitnessQuote:
      "The silence was deafening. Usually there's at least some water shooting into space, but nothing. It was like the moon was pouting. - Europa Research Station (Population: 0)",
    aftermath: "The geysers eventually returned to work but now have union representation.",
    icon: "⛲",
    severity: "Mild Inconvenience",
  },
  {
    date: "The Coldest Tuesday Ever Recorded",
    planet: "Europa",
    event: "Europa's Ice Skating Championship Disaster",
    description:
      "Europa's surface became so perfectly smooth that it accidentally hosted the universe's first interplanetary ice skating championship. No one signed up, but the event happened anyway.",
    casualties: "Several asteroids that slipped and fell, one very confused comet",
    eyewitnessQuote:
      "I was just passing by when suddenly I was figure skating. I don't even know how to ice skate! - Asteroid Belt Resident #4,847",
    aftermath: "Europa now hosts annual ice skating events that no one attends.",
    icon: "⛸️",
    severity: "Moderately Annoying",
  },

  // Titan Events
  {
    date: "Methane Monday, 1847",
    planet: "Titan",
    event: "The Great Methane Lake Overflow",
    description:
      "Titan's methane lakes overflowed due to excessive methane rain, creating the solar system's first and only methane flood. The cleanup took 47 years and required hazmat suits that hadn't been invented yet.",
    casualties: "Several confused fish (they weren't supposed to be there), the concept of 'dry land'",
    eyewitnessQuote:
      "Everything smelled like a giant fart for decades. We're still not over it. - Titan Atmospheric Monitoring Station (Unmanned, thankfully)",
    aftermath: "Titan installed better drainage systems and apologized to the entire solar system.",
    icon: "🌊",
    severity: "Absolutely Ridiculous",
  },
  {
    date: "The Windy Wednesday of 2156",
    planet: "Titan",
    event: "The Day Titan's Atmosphere Got Stage Fright",
    description:
      "Titan's thick atmosphere suddenly became self-conscious about being so dense and tried to thin itself out. This caused massive atmospheric hiccups and very awkward weather patterns.",
    casualties: "Atmospheric confidence, several weather prediction models",
    eyewitnessQuote:
      "The atmosphere kept apologizing for being too thick. It was very polite but also very inconvenient. - Titan Weather Monitoring AI",
    aftermath: "Titan's atmosphere went to therapy and learned to love itself just the way it is.",
    icon: "💨",
    severity: "Moderately Annoying",
  },
]

export const getHistoricalEventsForPlanet = (planetName: string): HistoricalWeatherEvent[] => {
  return historicalWeatherEvents.filter((event) => event.planet === planetName)
}

export const getRandomHistoricalEvent = (): HistoricalWeatherEvent => {
  const randomIndex = Math.floor(Math.random() * historicalWeatherEvents.length)
  return historicalWeatherEvents[randomIndex]
}

export const getSeverityColor = (severity: HistoricalWeatherEvent["severity"]): string => {
  switch (severity) {
    case "Mild Inconvenience":
      return "text-green-400"
    case "Moderately Annoying":
      return "text-yellow-400"
    case "Absolutely Ridiculous":
      return "text-orange-400"
    case "Cosmically Absurd":
      return "text-red-400"
    default:
      return "text-purple-400"
  }
}
