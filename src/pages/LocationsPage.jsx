import React from 'react'

function LocationsPage() {
  const locations = [
    {
      id: 1,
      city: 'New York',
      address: '123 Broadway Ave, NY 10001',
      phone: '(212) 555-0100',
      hours: 'Mon-Sun: 9:00 AM - 11:00 PM'
    },
    {
      id: 2,
      city: 'Los Angeles',
      address: '456 Sunset Blvd, LA 90028',
      phone: '(310) 555-0200',
      hours: 'Mon-Sun: 9:00 AM - 11:00 PM'
    },
    {
      id: 3,
      city: 'Chicago',
      address: '789 Michigan Ave, Chicago 60611',
      phone: '(312) 555-0300',
      hours: 'Mon-Sun: 9:00 AM - 11:00 PM'
    },
    {
      id: 4,
      city: 'Houston',
      address: '321 Main Street, Houston 77002',
      phone: '(713) 555-0400',
      hours: 'Mon-Sun: 9:00 AM - 11:00 PM'
    },
    {
      id: 5,
      city: 'Miami',
      address: '654 Ocean Drive, Miami 33139',
      phone: '(305) 555-0500',
      hours: 'Mon-Sun: 9:00 AM - 11:00 PM'
    },
    {
      id: 6,
      city: 'Seattle',
      address: '987 Pike Street, Seattle 98101',
      phone: '(206) 555-0600',
      hours: 'Mon-Sun: 9:00 AM - 11:00 PM'
    }
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-br from-orange-50 to-yellow-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">Our Locations</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">Find a FoodHub near you and enjoy fast, delicious food delivery</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map(location => (
            <div key={location.id} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{location.city}</h3>
              
              <div className="space-y-3 text-gray-600">
                <div className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-1 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                  <span>{location.address}</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                  <span>{location.phone}</span>
                </div>

                <div className="flex items-center">
                  <svg className="w-5 h-5 mr-3 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <span>{location.hours}</span>
                </div>
              </div>

              <button className="mt-6 w-full px-6 py-3 bg-orange-600 text-white rounded-full font-semibold hover:bg-orange-700 transition-colors duration-200">
                Order from this location
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Delivery Coverage</h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            We deliver to all areas within a 10-mile radius of each location. Enter your address at checkout to confirm delivery availability.
          </p>
          <div className="flex justify-center">
            <button className="px-8 py-4 bg-orange-600 text-white rounded-full font-bold text-lg hover:bg-orange-700 transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl">
              Check Delivery Area
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LocationsPage