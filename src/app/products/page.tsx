"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { ShoppingCart } from "lucide-react"

// Hard-coded products data
const products = [
  {
    id: 1,
    name: "Mango & Passion Fruit Jam",
    category: "Jams & Spreads",
    description: "A tropical explosion of flavor, perfect on toast or with yogurt.",
    price: 8.5,
    image: "/mango-passion-fruit-jam.jpg",
  },
  {
    id: 2,
    name: "Sun-dried Mango Slices",
    category: "Snacks",
    description: "Chewy, sweet, and naturally preserved. A healthy tropical snack.",
    price: 12.0,
    image: "/sun-dried-mango-slices.jpg",
  },
  {
    id: 3,
    name: "Spicy Mango Chili Sauce",
    category: "Sauces",
    description: "The perfect balance of sweet and heat to elevate any dish.",
    price: 7.0,
    image: "/spicy-mango-chili-sauce.jpg",
  },
  {
    id: 4,
    name: "Handcrafted Mango Soap",
    category: "Body Care",
    description: "Nourish your skin with the gentle, fragrant lather of natural mango.",
    price: 6.5,
    image: "/handcrafted-mango-soap.jpg",
  },
  {
    id: 5,
    name: "Artisanal Mango Vinegar",
    category: "Pantry",
    description: "A bright, fruity vinegar for salads, marinades, and shrubs.",
    price: 15.0,
    image: "/artisanal-mango-vinegar.jpg",
  },
  {
    id: 6,
    name: "Mango Seed Body Scrub",
    category: "Body Care",
    description: "Exfoliate and moisturize with our gentle mango seed scrub.",
    price: 9.75,
    image: "/mango-seed-body-scrub.jpg",
  },
  {
    id: 7,
    name: "Mango Leaf Tea",
    category: "Beverages",
    description: "A soothing herbal tea with antioxidant properties.",
    price: 11.25,
    image: "/mango-leaf-tea.jpg",
  },
  {
    id: 8,
    name: "Mango Seed Oil",
    category: "Body Care",
    description: "Pure, cold-pressed oil for skin and hair nourishment.",
    price: 18.0,
    image: "/mango-seed-oil.jpg",
  },
]

export default function Shop() {
  const [cartItems, setCartItems] = useState<number[]>([])

  const addToCart = (productId: number) => {
    setCartItems((prev) => [...prev, productId])
    // Mock cart functionality - in real app would integrate with cart state/context
    console.log(`Added product ${productId} to cart`)
  }

  const isInCart = (productId: number) => {
    return cartItems.includes(productId)
  }

  return (
    <div className="min-h-screen bg-brand-cream">
      {/* Hero Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-primary mb-4 text-balance">Our Collection</h1>
          <p className="text-lg text-brand-secondary max-w-2xl mx-auto text-pretty">
            Explore our range of upcycled products, handcrafted with love and care in Cambodia.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="card-hover border-0 shadow-sm">
                <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
                  <img
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback for missing images
                      e.currentTarget.src = `/placeholder.svg?height=300&width=300&query=${encodeURIComponent(product.name)}`
                    }}
                  />
                </div>
                <CardContent className="p-4">
                  <Badge
                    variant="secondary"
                    className="mb-2 text-xs bg-emerald-100 text-emerald-700 hover:bg-emerald-100"
                  >
                    {product.category}
                  </Badge>
                  <h3 className="font-semibold text-brand-primary mb-2 text-balance">{product.name}</h3>
                  <p className="text-sm text-brand-secondary mb-3 text-pretty">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-lg font-bold text-brand-primary">${product.price.toFixed(2)}</span>
                    <Button
                      onClick={() => addToCart(product.id)}
                      className="bg-amber-400 hover:bg-amber-500 text-brand-primary font-medium px-4 py-2 rounded-md transition-colors"
                      disabled={isInCart(product.id)}
                    >
                      <ShoppingCart className="w-4 h-4 mr-2" />
                      {isInCart(product.id) ? "Added" : "Add to Cart"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
