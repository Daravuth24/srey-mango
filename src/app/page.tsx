import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"

const featuredProducts = [
  {
    id: 1,
    name: "Mango Seed Soap",
    category: "Body Care",
    description: "Handcrafted soap made from upcycled mango seeds with natural moisturizing properties.",
    price: "$8.50",
    image: "/handmade-mango-seed-soap-bar.jpg",
  },
  {
    id: 2,
    name: "Sun-Dried Mango Slices",
    category: "Snacks",
    description: "Premium dried mango slices, naturally sweet and packed with vitamins.",
    price: "$12.00",
    image: "/dried-mango-slices-in-bowl.jpg",
  },
  {
    id: 3,
    name: "Spicy Mango Chili Sauce",
    category: "Condiments",
    description: "Bold and flavorful sauce combining sweet mangoes with Cambodian chilies.",
    price: "$9.50",
    image: "/spicy-mango-chili-sauce-bottle.jpg",
  },
]

const upcomingExperiences = [
  {
    id: 1,
    title: "Annual Mango Harvest Festival",
    date: "August 15, 2025",
    location: "Siem Reap, Cambodia",
    price: "$25.00",
    priceUnit: "person",
    image: "/mango-harvest-festival-cambodia.jpg",
  },
  {
    id: 2,
    title: "Farm-to-Table Cooking Class",
    date: "Monthly",
    location: "Phnom Penh, Cambodia",
    price: "$50.00",
    priceUnit: "person",
    image: "/cambodian-mountains-cooking-class.jpg",
  },
  {
    id: 3,
    title: "Food Upcycling Workshop",
    date: "Weekends",
    location: "Kampot, Cambodia",
    price: "$30.00",
    priceUnit: "person",
    image: "/food-upcycling-workshop-cambodia.jpg",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-amber-50">
      

      <main className="pt-16">
        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: "url('/mango-tree-floating-on-water-cambodia-nature.jpg')" }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Taste the Sun, Share the Goodness</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty">
              Discover upcycled treasures from Cambodian mangoes, crafted with love to reduce waste and support local
              communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-amber-500 hover:bg-amber-600 text-white px-8 py-3 text-lg">Shop Collection</Button>
              <Button
                variant="outline"
                className="bg-white/10 border-white text-white hover:bg-white hover:text-gray-800 px-8 py-3 text-lg"
              >
                Learn More
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Products Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Products</h2>
            <p className="text-gray-600">
              Handcrafted treasures made from upcycled mango seeds and natural ingredients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="text-sm text-emerald-600 font-medium mb-2">{product.category}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-gray-800">{product.price}</span>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white">Add to Cart</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Farm Story Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="aspect-[4/3] overflow-hidden rounded-lg">
              <img src="/cambodian-mango-farm-sustainable-farming.jpg" alt="Cambodian mango farm" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">From Our Farm to Your Home</h2>
              <p className="text-gray-600 mb-4">
                We believe in sustainability and the power of every Srey Mango product comes with a promise of quality
                and a connection to the land and the hands that nurtured it. From reducing food waste by transforming
                mango seeds into beautiful products to supporting local farmers.
              </p>
              <p className="text-gray-600 mb-6">
                Every treasure goes the distance, and embraced the deeper parts making each every moment count.
              </p>
              <Button className="bg-emerald-600 hover:bg-emerald-700 text-white">Learn Our Story</Button>
            </div>
          </div>
        </section>

        {/* Upcoming Experiences Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Upcoming Experiences</h2>
            <p className="text-gray-600">
              Immerse yourself in Cambodian culture and our mission with these unique experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {upcomingExperiences.map((experience) => (
              <Card key={experience.id} className="bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{experience.title}</h3>
                  <div className="space-y-2 mb-4 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <span>📅</span>
                      <span>{experience.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span>📍</span>
                      <span>{experience.location}</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-2xl font-bold text-gray-800">{experience.price}</span>
                      <span className="text-gray-600 text-sm"> / {experience.priceUnit}</span>
                    </div>
                    <Button className="bg-amber-500 hover:bg-amber-600 text-white">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* NFT Membership Section */}
        <section className="py-16 px-4 bg-emerald-600 text-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium mb-2">Limited Membership</div>
              <h2 className="text-3xl font-bold mb-6">Become a 2025 Season NFT Holder</h2>
              <p className="mb-6">
                Join the Srey Mango family and own exclusive NFT as a member, you'll get access to the latest perks,
                discounts, and a share of the harvest through our points system to boost your membership for a
                sustainable future.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <span>Priority booking for experiences</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <span>Early access to new products</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <span>Access to exclusive events</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <span>Share in harvest rewards</span>
                </li>
              </ul>
              <Button className="bg-amber-500 hover:bg-amber-600 text-white">Join Now & Mint</Button>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg">
              <img src="/nft-membership-card-cambodian-forest.jpg" alt="NFT Membership" className="w-full h-full object-cover" />
            </div>
          </div>
        </section>

        {/* Personalized Recommendations Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Just For You</h2>
            <p className="text-gray-600 mb-8">
              Based on your interests, here are some products and experiences we think you'll love.
            </p>
            <div className="bg-gray-100 rounded-lg p-12">
              <p className="text-gray-500 text-lg">No recommendations available at the moment.</p>
              <p className="text-gray-400 text-sm mt-2">Browse our products to get personalized suggestions.</p>
            </div>
          </div>
        </section>
      </main>

      
    </div>
  )
}
