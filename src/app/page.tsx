import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import products from "@/app/data/home-page/products.json";
import experiences from "@/app/data/home-page/experiences.json";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-cream">
      <main className="pt-0">
        {/* Hero Section */}
        <section
          className="relative h-screen flex items-center justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('/mango-farm-cambodia-nature.jpg')`}}
        >
          <div className="absolute inset-0" style={{ backgroundColor: 'rgba(0,0,0,0.3)' }}></div>
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-balance">Taste the Sun, Share the Goodness</h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty">
              Discover upcycled treasures from Cambodian mangoes, crafted with love to reduce waste and support local
              communities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="btn-primary">Shop Collection</Button>
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
            <h2 className="section-heading">Featured Products</h2>
            <p className="section-subheading">
              Handcrafted treasures made from upcycled mango seeds and natural ingredients
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card key={product.id} className="card-hover">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="product-category mb-2">{product.category}</div>
                  <h3 className="text-xl font-semibold text-brand-primary mb-2">{product.name}</h3>
                  <p className="text-brand-secondary mb-4 text-sm">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="product-price">{product.price}</span>
                    <Button className="btn-primary">Add to Cart</Button>
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
              <h2 className="section-heading mb-6">From Our Farm to Your Home</h2>
              <p className="text-brand-secondary mb-4">
                We believe in sustainability and the power of every Srey Mango product comes with a promise of quality
                and a connection to the land and the hands that nurtured it. From reducing food waste by transforming
                mango seeds into beautiful products to supporting local farmers.
              </p>
              <p className="text-brand-secondary mb-6">
                Every treasure goes the distance, and embraced the deeper parts making each every moment count.
              </p>
              <Button className="btn-secondary">Learn Our Story</Button>
            </div>
          </div>
        </section>
        {/* Upcoming Experiences Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading">Upcoming Experiences</h2>
            <p className="section-subheading">
              Immerse yourself in Cambodian culture and our mission with these unique experiences
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((experience) => (
              <Card key={experience.id} className="card-hover">
                <div className="aspect-[3/2] overflow-hidden">
                  <img
                    src={experience.image || "/placeholder.svg"}
                    alt={experience.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-brand-primary mb-3">{experience.title}</h3>
                  <div className="space-y-2 mb-4 text-sm text-brand-secondary">
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
                      <span className="product-price">{experience.price}</span>
                      <span className="text-brand-secondary text-sm"> / {experience.priceUnit}</span>
                    </div>
                    <Button className="btn-primary">Book Now</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        {/* Farm Adoption Section */}
        <section className="py-16 px-4 bg-brand-secondary text-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-sm font-medium mb-2">Farm Adoption Program</div>
              <h2 className="text-3xl font-bold mb-6">Adopt a Cambodian Mango Farm</h2>
              <p className="mb-6">
                Support sustainable farming in Cambodia through our farm adoption program. Receive seasonal harvest boxes, connect directly with farming families, and make a meaningful impact while enjoying exclusive products and experiences.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <span>Seasonal mango box deliveries</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <span>Personal updates from your adopted farm</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <span>Exclusive member-only products</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                  <span>Annual farm visit experience</span>
                </li>
              </ul>
              <Button className="btn-primary">Adopt a Farm Today</Button>
            </div>
            <div className="aspect-square overflow-hidden rounded-lg max-w-md mx-auto">
              <img src="/membership-card-cambodian-forest.jpg" alt="Farm Adoption Program" className="w-full h-full object-contain" />
            </div>
          </div>
        </section>
        {/* Personalized Recommendations Section */}
        <section className="py-16 px-4 max-w-7xl mx-auto">
          <div className="text-center">
            <h2 className="section-heading">Just For You</h2>
            <p className="section-subheading mb-8">
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
  );
}