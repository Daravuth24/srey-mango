import farmers from "@/app/data/farmers/farmers.json"

export default function Farmers() {
  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-6 text-balance">Meet Our Farmers</h1>
          <p className="text-lg text-brand-secondary leading-relaxed max-w-3xl mx-auto">
            Get to know the passionate individuals who cultivate the delicious mangoes that go into our products. We're
            proud to partner with local farmers across Cambodia, supporting their communities and sustainable practices.
          </p>
        </div>
      </section>

      {/* Farmers Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {farmers.map((farmer) => (
              <div key={farmer.id} className="card-hover rounded-lg overflow-hidden">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={farmer.image || "/placeholder.svg"}
                    alt={`${farmer.name} - Mango farmer from ${farmer.location}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-brand-primary mb-2">{farmer.name}</h3>
                  <div className="flex items-center text-brand-accent mb-4">
                    <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-medium">{farmer.location}</span>
                  </div>
                  <p className="text-brand-secondary leading-relaxed">{farmer.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-primary mb-6">A Partnership for Good</h2>
          <p className="text-lg text-brand-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
            Our model ensures that farmers get fair prices for their produce, reducing waste and creating a brighter
            future for their families and communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-400 hover:bg-amber-500 text-brand-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Shop Their Products
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-brand-primary font-semibold py-3 px-8 rounded-lg transition-colors duration-200">
              Visit the Farms
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
