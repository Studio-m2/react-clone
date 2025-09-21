 import { useState} from 'react';
 const Contact=()=>{
    return(
 
 <section id="contact" className="bg-gray-100 py-16">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">
            Got a question or want to work with us? Fill out the form below and we’ll get back to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Left Side - Info */}
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Our Office</h3>
              <p className="text-gray-600 mt-2">
                123 Main Street <br /> Islamabad, Pakistan 12345
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Email</h3>
              <p className="text-gray-600 mt-2">maryam@gmail.com</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
              <p className="text-gray-600 mt-2">+1 (254) 567-456</p>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="bg-white p-8 rounded-2xl shadow-lg space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                placeholder="maryam@gmail.com"
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Message</label>
              <textarea 
                placeholder="Your message..."
                className="w-full mt-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>

 )

}
 export default Contact