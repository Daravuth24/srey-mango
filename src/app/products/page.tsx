"use client"

import { useState } from "react"
import { Button } from "@/components/ui/Button"
import { Card, CardContent } from "@/components/ui/Card"
import { Badge } from "@/components/ui/Badge"
import { ShoppingCart } from "lucide-react"
import products from "@/app/data/products/products.json"


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
