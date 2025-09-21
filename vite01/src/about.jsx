import { useState } from 'react';
const AboutSecton=()=>{

    return(
  <section className="py-16" id="about" bg-gray-100 >
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="flex justify-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXwiPfmBVilvck01lLY1-28iYfrALI356MAw&s"
              alt="About"
              className="rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Side - Content */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              About Us
            </h2>
            <p className="text-gray-600 mb-6">
              We are passionate about building modern and responsive web
              applications that help businesses grow. Our team focuses on
              delivering high-quality code, smooth user experiences, and
              creative designs.
            </p>
            <p className="text-gray-600 mb-6">
              With expertise in React, Tailwind CSS, and other cutting-edge
              technologies, we bring ideas to life with clean, efficient, and
              scalable solutions.
            </p>
            <button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>



    )




}

export default AboutSecton