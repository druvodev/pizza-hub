import React, { useState } from 'react'
import { Link } from 'react-router-dom'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold text-orange-600">FoodHub</Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/menu" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">Menu</Link>
            <Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">About</Link>
            <Link to="/locations" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">Locations</Link>
            <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium">Contact</Link>
            <Link to="/cart" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium relative">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">0</span>
            </Link>
            <Link to="/menu" className="px-6 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
              Order Now
            </Link>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-600 transition-colors duration-200"
            >
              <svg className="h-6 w-6" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden py-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link to="/menu" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium py-2">Menu</Link>
              <Link to="/about" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium py-2">About</Link>
              <Link to="/locations" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium py-2">Locations</Link>
              <Link to="/contact" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium py-2">Contact</Link>
              <Link to="/cart" className="text-gray-700 hover:text-orange-600 transition-colors duration-200 font-medium py-2">Cart</Link>
              <Link to="/menu" className="px-6 py-2 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors duration-200 shadow-md w-full text-center">
                Order Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header