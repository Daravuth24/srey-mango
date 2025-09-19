import { Check } from "lucide-react"
import { Button } from "@/components/ui/Button"
import benefits from "@/app/data/membership/benefits.json"

export default function Membership() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Hero Image */}
          <div className="relative flex-shrink-0">
            <div className="w-80 h-80 rounded-full overflow-hidden">
              <img
                src="/person-in-cambodian-forest-with-mango-trees.jpg"
                alt="Person in Cambodian forest"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge Overlay */}
            <div className="absolute bottom-4 left-4 bg-amber-400 text-brand-primary px-4 py-2 rounded-lg font-semibold text-sm">
              2025 Farm Supporter
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-brand-primary mb-6 text-balance">
              Adopt a Cambodian Mango Farm
            </h1>
            <p className="text-lg text-brand-secondary mb-8 leading-relaxed max-w-2xl">
              Join our Farm Adoption Program inspired by Japan's Furusato Nōzei system. Support sustainable farming in Cambodia while receiving seasonal harvest boxes, exclusive products, and meaningful connections with farming families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-amber-400 hover:bg-amber-500 text-brand-primary px-8 py-3 text-lg font-semibold">
                Adopt a Farm Today
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-brand-secondary hover:bg-gray-50 px-8 py-3 text-lg bg-transparent"
              >
                Meet Our Farmers
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Membership Benefits Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-4">Farm Adoption Benefits</h2>
          <p className="text-lg text-brand-secondary max-w-2xl mx-auto">
            When you adopt a farm, you become part of our extended family. Here's what you receive as a farm supporter.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="card-hover rounded-lg p-6 border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-5 h-5 text-brand-accent" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">{benefit.title}</h3>
                  <p className="text-brand-secondary leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Join Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-brand-primary mb-6">Ready to Make an Impact?</h2>
          <p className="text-lg text-brand-secondary mb-8 leading-relaxed">
            Choose your farm adoption level and start your journey with Cambodian mango farmers. Your support creates lasting change, builds communities, and brings you closer to the source of your food.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-amber-400 hover:bg-amber-500 text-brand-primary px-8 py-4 text-lg font-semibold">
              View Adoption Plans
            </Button>
            <Button
              variant="outline"
              className="border-gray-300 text-brand-secondary hover:bg-gray-50 px-8 py-4 text-lg bg-transparent"
            >
              Learn More About Impact
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
