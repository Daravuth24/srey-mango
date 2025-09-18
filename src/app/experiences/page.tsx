"use client"

import { useState } from "react"
import { Calendar, MapPin } from "lucide-react"
import { Button } from "@/components/ui/Button"
import experiences from "@/app/data/experiences/experiences.json"

export default function Experiences() {
  const [bookedExperiences, setBookedExperiences] = useState<number[]>([])

  const handleBookNow = (experienceId: number) => {
    if (bookedExperiences.includes(experienceId)) {
      setBookedExperiences(bookedExperiences.filter((id) => id !== experienceId))
    } else {
      setBookedExperiences([...bookedExperiences, experienceId])
    }
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 text-balance">Our Experiences</h1>
          <p className="text-lg text-brand-secondary text-pretty">
            Immerse yourself in Cambodian culture and our mission with these unique experiences.
          </p>
        </div>
      </section>

      {/* Experiences Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <div
                key={experience.id}
                className="card-hover rounded-lg overflow-hidden"
              >
                <div className="aspect-[4/3] bg-gray-200 overflow-hidden">
                  <img
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-primary mb-3 text-balance">{experience.title}</h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-brand-secondary text-sm">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span>{experience.date}</span>
                    </div>
                    <div className="flex items-center text-brand-secondary text-sm">
                      <MapPin className="w-4 h-4 mr-2" />
                      <span>{experience.location}</span>
                    </div>
                  </div>

                  <p className="text-brand-secondary text-sm mb-6 text-pretty">{experience.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="product-price">
                      ${experience.price.toFixed(2)}
                      <span className="text-sm font-normal text-brand-secondary"> / person</span>
                    </div>

                    <Button
                      onClick={() => handleBookNow(experience.id)}
                      className={`px-6 py-2 rounded-md font-medium transition-colors ${
                        bookedExperiences.includes(experience.id)
                          ? "bg-brand-secondary hover:bg-emerald-700 text-white"
                          : "bg-amber-400 hover:bg-amber-500 text-brand-primary"
                      }`}
                    >
                      {bookedExperiences.includes(experience.id) ? "Booked!" : "Book Now"}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
