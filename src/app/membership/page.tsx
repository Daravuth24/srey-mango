import { Check } from "lucide-react"
import { Button } from "@/components/ui/Button"
import benefits from "@/app/data/membership/benefits.json"

export default function NFTMembership() {
  return (
    <div className="min-h-screen bg-amber-50">
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
            <div className="absolute bottom-4 left-4 bg-amber-400 text-gray-800 px-4 py-2 rounded-lg font-semibold text-sm">
              2025 Tree Badge
            </div>
          </div>

          {/* Hero Content */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6 text-balance">
              Own a Piece of the Harvest
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed max-w-2xl">
              The Srey Mango 2025 Season NFT is more than a digital collectible—it's your membership to a community
              dedicated to sustainability and impact. By minting an NFT, you're directly supporting our farmers and our
              mission to reduce food waste.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="bg-amber-400 hover:bg-amber-500 text-gray-800 px-8 py-3 text-lg font-semibold">
                Mint Your 2025 NFT
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-700 hover:bg-gray-50 px-8 py-3 text-lg bg-transparent"
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
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">Membership Benefits</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            As an NFT holder, you are a vital part of the Srey Mango family. Here's what you get.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border border-gray-100">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center mt-1">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ready to Join Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6">Ready to Join?</h2>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            Minting is simple. Connect your wallet and become a part of the Srey Mango story today. Help us grow a
            better future, one mango at a time.
          </p>
          <Button className="bg-amber-400 hover:bg-amber-500 text-gray-800 px-8 py-4 text-lg font-semibold">
            Connect Wallet & Mint
          </Button>
        </div>
      </section>
    </div>
  )
}
