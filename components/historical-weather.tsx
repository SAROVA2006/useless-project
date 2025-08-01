"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Quote, AlertTriangle, Clock } from "lucide-react"
import {
  getHistoricalEventsForPlanet,
  getRandomHistoricalEvent,
  getSeverityColor,
  type HistoricalWeatherEvent,
} from "@/data/historical-weather-events"

interface HistoricalWeatherProps {
  selectedPlanet: string
  onPlaySound?: () => void
}

export function HistoricalWeather({ selectedPlanet, onPlaySound }: HistoricalWeatherProps) {
  const [currentEvent, setCurrentEvent] = useState<HistoricalWeatherEvent | null>(null)
  const [showingPlanetEvents, setShowingPlanetEvents] = useState(false)

  const planetEvents = getHistoricalEventsForPlanet(selectedPlanet)

  const showRandomEvent = () => {
    const randomEvent = getRandomHistoricalEvent()
    setCurrentEvent(randomEvent)
    setShowingPlanetEvents(false)
    onPlaySound?.()
  }

  const showPlanetEvents = () => {
    if (planetEvents.length > 0) {
      const randomPlanetEvent = planetEvents[Math.floor(Math.random() * planetEvents.length)]
      setCurrentEvent(randomPlanetEvent)
      setShowingPlanetEvents(true)
      onPlaySound?.()
    }
  }

  return (
    <Card className="control-panel">
      <CardHeader>
        <CardTitle className="text-white flex items-center gap-2 font-mono">
          📚 FAKE HISTORICAL WEATHER DISASTERS
        </CardTitle>
        <CardDescription className="text-purple-300 font-mono text-xs">
          Completely made-up weather events from space history!
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-1 gap-3">
          <Button
            onClick={showRandomEvent}
            variant="outline"
            className="border-purple-500 text-purple-300 hover:bg-purple-500/20 font-mono bg-transparent text-sm"
          >
            🎲 RANDOM SPACE DISASTER
          </Button>

          {planetEvents.length > 0 && (
            <Button
              onClick={showPlanetEvents}
              variant="outline"
              className="border-orange-500 text-orange-300 hover:bg-orange-500/20 font-mono bg-transparent text-sm"
            >
              📖 {selectedPlanet.toUpperCase()} DISASTERS
            </Button>
          )}
        </div>

        {currentEvent && (
          <div className="space-y-4 mt-6">
            <Separator className="bg-white/20" />

            {/* Event Header */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className={`${getSeverityColor(currentEvent.severity)} bg-black/30 border border-current`}
                >
                  {currentEvent.severity}
                </Badge>
                <div className="flex items-center gap-2 text-purple-300 text-xs font-mono">
                  <Calendar className="w-3 h-3" />
                  {currentEvent.date}
                </div>
              </div>

              <h3 className="text-white font-bold text-lg space-title flex items-center gap-2">
                <span className="text-2xl">{currentEvent.icon}</span>
                {currentEvent.event}
              </h3>

              <p className="text-purple-200 text-sm font-mono">📍 {currentEvent.planet}</p>
            </div>

            {/* Event Description */}
            <div className="bg-black/30 p-4 rounded-lg border border-purple-500/30">
              <p className="text-white font-mono text-sm leading-relaxed">{currentEvent.description}</p>
            </div>

            {/* Casualties */}
            <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/30">
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-red-300 font-mono text-xs font-bold">CASUALTIES:</p>
                  <p className="text-red-200 font-mono text-sm">{currentEvent.casualties}</p>
                </div>
              </div>
            </div>

            {/* Eyewitness Quote */}
            <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
              <div className="flex items-start gap-2">
                <Quote className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-blue-300 font-mono text-xs font-bold">EYEWITNESS ACCOUNT:</p>
                  <p className="text-blue-200 font-mono text-sm italic">"{currentEvent.eyewitnessQuote}"</p>
                </div>
              </div>
            </div>

            {/* Aftermath */}
            <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/30">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-green-300 font-mono text-xs font-bold">AFTERMATH:</p>
                  <p className="text-green-200 font-mono text-sm">{currentEvent.aftermath}</p>
                </div>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="text-center">
              <p className="text-purple-400 font-mono text-xs italic">
                * This event is 100% fictional and 0% historically accurate
              </p>
            </div>
          </div>
        )}

        {currentEvent === null && (
          <div className="text-center py-8">
            <div className="text-4xl mb-2">📜</div>
            <p className="text-purple-300 font-mono text-sm">
              Click a button above to discover ridiculous space weather history!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
