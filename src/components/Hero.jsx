import React from 'react'

function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-yellow-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="px-4 py-2 bg-orange-100 text-orange-700 rounded-full text-sm font-semibold">
                Free Delivery on Orders Over $30
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight">
              Delicious Food
              <span className="block text-orange-600">Delivered Fast</span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
              Craving something delicious? Order from your favorite restaurants and get hot, fresh meals delivered right to your doorstep in under 30 minutes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
                Order Now
              </button>
              <button className="px-8 py-4 bg-white text-orange-600 border-2 border-orange-600 rounded-full font-bold text-lg hover:bg-orange-50 transform hover:scale-105 transition-all duration-200 shadow-md hover:shadow-lg">
                View Menu
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl font-bold text-orange-600">500+</div>
                <div className="text-gray-600 text-sm">Restaurants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">50K+</div>
                <div className="text-gray-600 text-sm">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600">4.9★</div>
                <div className="text-gray-600 text-sm">Average Rating</div>
              </div>
            </div>
          </div>

          <div className="relative lg:block">
            <div className="relative z-10 animate-fade-in">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&h=600&fit=crop" 
                  alt="Delicious burger with fries"
                  className="w-full h-96 object-cover rounded-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white px-6 py-4 rounded-2xl shadow-xl">
                  <div className="text-sm font-semibold">Special Offer</div>
                  <div className="text-2xl font-bold">30% OFF</div>
                </div>
              </div>
            </div>

            <div className="absolute top-10 -left-10 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
            <div className="absolute -bottom-10 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0 C150,100 350,0 600,50 C850,100 1050,0 1200,50 L1200,120 L0,120 Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero