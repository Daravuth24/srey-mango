import { Twitter, Instagram, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-amber-50 border-t border-amber-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Srey Mango</h3>
            <p className="text-gray-600 mb-4 text-sm leading-relaxed">Upcycled treasures from Cambodian mangoes.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Shop Section */}
          <div>
            <h4 className="text-base font-medium text-gray-800 mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Jams & Spreads
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Snacks
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Body Care
                </a>
              </li>
            </ul>
          </div>

          {/* About Section */}
          <div>
            <h4 className="text-base font-medium text-gray-800 mb-4">About</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Our Farmers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Experiences
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  NFT Membership
                </a>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h4 className="text-base font-medium text-gray-800 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-emerald-600 transition-colors text-sm">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-amber-100 mt-8 pt-6">
          <p className="text-center text-sm text-gray-600">© 2025 Srey Mango. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
