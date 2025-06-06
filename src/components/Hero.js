import React from 'react';


const Hero = () => {
  return (
    <main className="container mx-auto px-4 py-6 sm:py-10 flex flex-col md:flex-row items-center justify-between gap-8 lg:gap-12">
      <div className="flex-1 animate-slideInLeft text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-green-700 mb-4 sm:mb-6 flex flex-col">
          <span className="font-[Arial Rounded MT Bold] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Welcome to</span>
          <span className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl mt-1 sm:mt-2 font-[Arial Rounded MT Bold]">Job Match</span>
        </h1>

        <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-gray-800 font-bold mb-4 sm:mb-6 relative inline-block">
          A System That Helps You Find Jobs That Match Your Skills!
          <span className="absolute bottom-[-3px] sm:bottom-[-5px] left-0 w-12 sm:w-16 h-1 bg-green-500"></span>
        </h2>

        <div className="mb-6 sm:mb-8">
          <p className="text-gray-600 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed mb-2">
            This platform helps you connect with employers looking for your skills.
            Whether you're a student, graduate, or professional
          </p>
          <span className="text-green-700 text-base sm:text-lg font-bold md:text-xl max-w-2xl leading-relaxed">get started today!</span>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto">
          <a
            href="/register"
            className="bg-green-700 text-white px-6 sm:px-8 py-3 rounded-lg hover:bg-green-800 transition-colors duration-300 text-center font-medium touch-target text-sm sm:text-base"
          >
            <i className="fas fa-user mr-2"></i>
            Find Jobs
          </a>
          <a
            href="/employer_register"
            className="bg-white text-green-700 border-2 border-green-700 px-6 sm:px-8 py-3 rounded-lg hover:bg-green-50 transition-colors duration-300 text-center font-medium touch-target text-sm sm:text-base"
          >
            <i className="fas fa-briefcase mr-2"></i>
            Post Jobs
          </a>
        </div>
      </div>

      <div className="flex-1 animate-slideInRight w-full md:w-auto">
        <div className="relative w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] lg:max-w-[450px] mx-auto">
          <img
            src="/assets/img1.jpg"
            alt="Job Match"
            className="w-full h-[250px] sm:h-[300px] md:h-[350px] lg:h-[450px] rounded-full object-cover
                       shadow-xl transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;