import { Twitter, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-brand-cream border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-brand-primary mb-3">Srey Mango</h3>
            <p className="text-brand-secondary mb-4 text-sm leading-relaxed">Upcycled treasures from Cambodian mangoes.</p>
            <div className="flex space-x-4">
              <a href="#" className="nav-link" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="nav-link" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="nav-link" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="text-base font-medium text-brand-primary mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="nav-link text-sm">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-sm">
                  Jams & Spreads
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-sm">
                  Snacks
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-sm">
                  Body Care
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-base font-medium text-brand-primary mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="nav-link text-sm">
                  Our Farmers
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-sm">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-sm">
                  NFT Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-base font-medium text-brand-primary mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="nav-link text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="nav-link text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-100 mt-8 pt-6">
          <p className="text-center text-sm text-brand-secondary">© 2025 Srey Mango. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
