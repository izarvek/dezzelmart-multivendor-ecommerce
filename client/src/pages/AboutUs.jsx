import React from 'react'
import banner01 from '../assets/about-banner-01.png'

const AboutUs = () => {
  return (
    <div className='px-4 sm:px-8 md:px-10 lg:px-20 xl:px-40'>
      <div className=" from-gray-50 text-gray-800">
      
      {/* Banner Section - Empty div for your image */}
      <div className='flex flex-col items-center'>
        <div className='flex flex-col text-center text-5xl'>Where Simplicity <br /> Meets Financial Power</div>
        <p className='mt-8 text-lg w-1/2 text-center leading-relaxed'>We're redefining how people thing about money - with clean design powerful insights , and a clear mission to make finance better</p>
      </div>
      <div>
        <img src={banner01} alt="" />
      </div>

      <div className="container mx-auto px-6 py-20">
        
        {/* About DezzelMart Introduction */}
        <section className="text-center mb-20 max-w-4xl mx-auto">
          <h2 className="text-5xl font-extrabold mb-6 text-gray-900 leading-tight">
            Our Journey: Crafting the Future of E-commerce
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            At DezzelMart, we're not just building an online store; we're creating a vibrant marketplace designed for you. Our commitment is to deliver a seamless shopping experience, connecting you with an unparalleled selection of high-quality products from trusted brands, all at your fingertips.
          </p>
        </section>

        {/* Founder's Welcome */}
        <section className="flex flex-col md:flex-row items-center md:items-start gap-16 mb-20 bg-white p-10 rounded-2xl shadow-sm border border-gray-100 ">
          <div className="md:w-1/3 text-center flex-shrink-0">
            <img 
              src="https://placehold.co/300x300/6366f1/ffffff?text=Aadhi+Sharma" // Placeholder for Aadhi Sharma's photo
              alt="Aadhi Sharma - Founder of DezzelMart"
              className="rounded-full w-60 h-60 object-cover mx-auto mb-6 border-6 border-indigo-500 shadow-sm"
            />
            <h3 className="text-3xl font-bold text-gray-900">Aadhi Sharma</h3>
            <p className="text-indigo-600 font-medium text-lg mt-1">Founder & CEO, DezzelMart</p>
          </div>
          <div className="md:w-2/3">
            <h3 className="text-4xl font-bold mb-6 text-gray-900">A Vision from Aadhi Sharma</h3>
            <p className="text-gray-700 text-lg leading-loose mb-5">
              "DezzelMart was born from a simple yet powerful idea: to revolutionize how people shop online. I envisioned a platform where trust, innovation, and customer delight are not just buzzwords, but the very foundation of our operations. My goal was to create an ecosystem where every purchase feels effortless, every product tells a story, and every customer feels valued."
            </p>
            <p className="text-gray-700 text-lg leading-loose">
              "We're constantly pushing boundaries, leveraging technology to personalize your shopping journey, and building strong relationships with suppliers to bring you the best. This is more than just e-commerce; it's a commitment to excellence and a promise to grow with you. Thank you for being a part of the DezzelMart story."
            </p>
          </div>
        </section>

        {/* Our Core Principles / What We Offer */}
        <section className="mb-20 text-center">
          <h2 className="text-4xl font-bold mb-12 text-gray-900">Experience the DezzelMart Difference</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            
            <div className="p-8 bg-white rounded-2xl shadow-lg border border-indigo-100 flex flex-col items-center group hover:bg-indigo-50 transition-all duration-300">
              <span className="text-6xl mb-5">🛍️</span>
              <h4 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-indigo-800">Curated Selection</h4>
              <p className="text-gray-600 leading-relaxed group-hover:text-indigo-700">
                Hand-picked products to ensure quality, relevance, and value for every customer.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border border-indigo-100 flex flex-col items-center group hover:bg-indigo-50 transition-all duration-300">
              <span className="text-6xl mb-5">🤝</span>
              <h4 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-indigo-800">Customer-First Support</h4>
              <p className="text-gray-600 leading-relaxed group-hover:text-indigo-700">
                Dedicated support team ready to assist you at every step of your shopping journey.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border border-indigo-100 flex flex-col items-center group hover:bg-indigo-50 transition-all duration-300">
              <span className="text-6xl mb-5">✨</span>
              <h4 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-indigo-800">Quality Assured</h4>
              <p className="text-gray-600 leading-relaxed group-hover:text-indigo-700">
                Only the best, from reputable brands to new, innovative discoveries.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl shadow-lg border border-indigo-100 flex flex-col items-center group hover:bg-indigo-50 transition-all duration-300">
              <span className="text-6xl mb-5">🛡️</span>
              <h4 className="text-2xl font-semibold mb-3 text-gray-900 group-hover:text-indigo-800">Secure & Safe</h4>
              <p className="text-gray-600 leading-relaxed group-hover:text-indigo-700">
                Shop with confidence thanks to our robust security measures and privacy protocols.
              </p>
            </div>
          </div>
        </section>

        {/* DezzelMart at a Glance (Stats) */}
        <section className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white py-16 rounded-2xl shadow-2xl">
          <h2 className="text-4xl font-bold text-center mb-12">DezzelMart at a Glance</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center px-6">
            <div className="p-4">
              <p className="text-6xl font-extrabold mb-2">5M+</p>
              <p className="text-xl font-light opacity-90">Products Sold</p>
            </div>
            <div className="p-4">
              <p className="text-6xl font-extrabold mb-2">850K</p>
              <p className="text-xl font-light opacity-90">Happy Customers</p>
            </div>
            <div className="p-4">
              <p className="text-6xl font-extrabold mb-2">4.9/5</p>
              <p className="text-xl font-light opacity-90">Average Rating</p>
            </div>
            <div className="p-4">
              <p className="text-6xl font-extrabold mb-2">200+</p>
              <p className="text-xl font-light opacity-90">Trusted Brands</p>
            </div>
          </div>
        </section>
      </div>
    </div>
    </div>
  )
}

export default AboutUs