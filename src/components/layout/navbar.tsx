"use client"

import { useState } from "react"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Experiences", href: "/experiences" },
    { name: "Our Farmers", href: "/farmers" },
    { name: "NFT Membership", href: "/nft-membership" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-amber-50 border-b border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/" className="text-xl font-bold text-gray-800 hover:text-emerald-600 transition-colors">
              Srey Mango
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-emerald-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            {/* Search Icon */}
            <Button variant="ghost" size="sm" className="text-gray-800 hover:text-emerald-600 hover:bg-amber-100">
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </Button>

            {/* Cart Icon */}
            <Button variant="ghost" size="sm" className="text-gray-800 hover:text-emerald-600 hover:bg-amber-100">
              <ShoppingCart className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
            </Button>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-800 hover:text-emerald-600 hover:bg-amber-100"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                <span className="sr-only">Toggle menu</span>
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-amber-50 border-t border-amber-100">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-800 hover:text-emerald-600 hover:bg-amber-100 block px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
