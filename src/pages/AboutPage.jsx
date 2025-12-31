import React from 'react'

function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">About FoodHub</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Bringing delicious food to your doorstep since 2020</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-lg text-gray-600 mb-4">
              FoodHub was founded with a simple mission: to make delicious food accessible to everyone. We partner with the best local restaurants to bring you a diverse selection of cuisines, all delivered fresh and fast.
            </p>
            <p className="text-lg text-gray-600 mb-4">
              What started as a small delivery service has grown into a trusted platform serving thousands of happy customers every day. Our commitment to quality, speed, and customer satisfaction remains at the heart of everything we do.
            </p>
            <p className="text-lg text-gray-600">
              We believe that great food should be convenient, affordable, and always delicious. That is why we work tirelessly to ensure every order meets our high standards.
            </p>
          </div>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1556910103-1c02745aae4d?w=800&h=600&fit=crop" 
              alt="Restaurant kitchen"
              className="rounded-xl shadow-lg"
            />
          </div>
        </div>

        <div className="bg-gray-50 rounded-xl p-12 mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Quality First</h3>
              <p className="text-gray-600">We partner only with restaurants that meet our high standards for food quality and preparation.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">Our efficient delivery network ensures your food arrives hot and fresh in under 30 minutes.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Customer Focus</h3>
              <p className="text-gray-600">Your satisfaction is our priority. We are here to ensure every order exceeds your expectations.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">500+</div>
              <div className="text-gray-600 text-lg">Partner Restaurants</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">50K+</div>
              <div className="text-gray-600 text-lg">Happy Customers</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">100K+</div>
              <div className="text-gray-600 text-lg">Orders Delivered</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-orange-600 mb-2">4.9★</div>
              <div className="text-gray-600 text-lg">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage