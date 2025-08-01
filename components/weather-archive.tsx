"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar, Quote, AlertTriangle, Clock } from "lucide-react"
import {
  historicalWeatherEvents,
  getSeverityColor,
  type HistoricalWeatherEvent,
} from "@/data/historical-weather-events"

export function WeatherArchive() {
  const [filteredEvents, setFilteredEvents] = useState<HistoricalWeatherEvent[]>(historicalWeatherEvents)
  const [selectedPlanet, setSelectedPlanet] = useState<string>("all")
  const [selectedSeverity, setSelectedSeverity] = useState<string>("all")

  const planets = Array.from(new Set(historicalWeatherEvents.map((event) => event.planet)))
  const severities = Array.from(new Set(historicalWeatherEvents.map((event) => event.severity)))

  const filterEvents = (planet: string, severity: string) => {
    let filtered = historicalWeatherEvents

    if (planet !== "all") {
      filtered = filtered.filter((event) => event.planet === planet)
    }

    if (severity !== "all") {
      filtered = filtered.filter((event) => event.severity === severity)
    }

    setFilteredEvents(filtered)
  }

  const handlePlanetFilter = (planet: string) => {
    setSelectedPlanet(planet)
    filterEvents(planet, selectedSeverity)
  }

  const handleSeverityFilter = (severity: string) => {
    setSelectedSeverity(severity)
    filterEvents(selectedPlanet, severity)
  }

  return (
    <div className="space-y-6">
      <Card className="control-panel">
        <CardHeader>
          <CardTitle className="text-white flex items-center gap-2 font-mono">
            🏛️ COMPLETE HISTORICAL WEATHER ARCHIVE
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-purple-200 font-mono">FILTER BY PLANET</label>
              <Select value={selectedPlanet} onValueChange={handlePlanetFilter}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white font-mono">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ALL PLANETS</SelectItem>
                  {planets.map((planet) => (
                    <SelectItem key={planet} value={planet}>
                      {planet}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-purple-200 font-mono">FILTER BY SEVERITY</label>
              <Select value={selectedSeverity} onValueChange={handleSeverityFilter}>
                <SelectTrigger className="bg-white/10 border-white/20 text-white font-mono">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">ALL SEVERITIES</SelectItem>
                  {severities.map((severity) => (
                    <SelectItem key={severity} value={severity}>
                      {severity}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="text-center">
            <Badge variant="secondary" className="bg-white/20 text-white font-mono">
              {filteredEvents.length} RIDICULOUS EVENTS FOUND
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-6">
        {filteredEvents.map((event, index) => (
          <Card key={index} className="planet-card">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge
                  variant="secondary"
                  className={`${getSeverityColor(event.severity)} bg-black/30 border border-current`}
                >
                  {event.severity}
                </Badge>
                <div className="flex items-center gap-2 text-purple-300 text-xs font-mono">
                  <Calendar className="w-3 h-3" />
                  {event.date}
                </div>
              </div>

              <CardTitle className="text-white font-bold text-xl space-title flex items-center gap-3">
                <span className="text-3xl">{event.icon}</span>
                <div>
                  <div>{event.event}</div>
                  <div className="text-sm text-purple-300 font-mono">📍 {event.planet}</div>
                </div>
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              {/* Event Description */}
              <div className="bg-black/30 p-4 rounded-lg border border-purple-500/30">
                <p className="text-white font-mono text-sm leading-relaxed">{event.description}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {/* Casualties */}
                <div className="bg-red-900/20 p-3 rounded-lg border border-red-500/30">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-red-300 font-mono text-xs font-bold">CASUALTIES:</p>
                      <p className="text-red-200 font-mono text-sm">{event.casualties}</p>
                    </div>
                  </div>
                </div>

                {/* Aftermath */}
                <div className="bg-green-900/20 p-3 rounded-lg border border-green-500/30">
                  <div className="flex items-start gap-2">
                    <Clock className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-green-300 font-mono text-xs font-bold">AFTERMATH:</p>
                      <p className="text-green-200 font-mono text-sm">{event.aftermath}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Eyewitness Quote */}
              <div className="bg-blue-900/20 p-3 rounded-lg border border-blue-500/30">
                <div className="flex items-start gap-2">
                  <Quote className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-blue-300 font-mono text-xs font-bold">EYEWITNESS ACCOUNT:</p>
                    <p className="text-blue-200 font-mono text-sm italic">"{event.eyewitnessQuote}"</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredEvents.length === 0 && (
        <Card className="planet-card">
          <CardContent className="text-center py-12">
            <div className="text-6xl mb-4">🤷‍♂️</div>
            <h3 className="text-white font-bold text-xl mb-2">No Ridiculous Events Found!</h3>
            <p className="text-purple-300 font-mono">
              Try adjusting your filters to discover more fake historical disasters.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
