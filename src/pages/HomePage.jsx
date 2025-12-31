import React from 'react'
import Hero from '../components/Hero'

function HomePage() {
  return (
    <div>
      <Hero />
      
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Order your favorite food in 3 simple steps</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Choose Your Food</h3>
              <p className="text-gray-600">Browse through our wide selection of restaurants and cuisines</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Add to Cart</h3>
              <p className="text-gray-600">Select your items and customize them to your preference</p>
            </div>

            <div className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300">
              <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-10 h-10 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Get your food delivered hot and fresh in under 30 minutes</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Popular Cuisines</h2>
            <p className="text-xl text-gray-600">Explore our most loved food categories</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-3">🍕</div>
              <h3 className="font-bold text-gray-900">Pizza</h3>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-3">🍔</div>
              <h3 className="font-bold text-gray-900">Burgers</h3>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-3">🍜</div>
              <h3 className="font-bold text-gray-900">Asian</h3>
            </div>
            <div className="bg-white rounded-xl p-6 text-center hover:shadow-lg transform hover:scale-105 transition-all duration-300 cursor-pointer">
              <div className="text-4xl mb-3">🌮</div>
              <h3 className="font-bold text-gray-900">Mexican</h3>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage