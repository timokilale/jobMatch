import React from 'react';


const Hero = () => {
  return (
    <main className="container mx-auto px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-12">
      <div className="flex-1 animate-slideInLeft">
        <h1 className="text-5xl md:text-7xl font-bold text-green-700 mb-6 flex flex-col">
        <span className="font-[Arial Rounded MT Bold]">Welcome to</span>
        <span className="text-6xl md:text-7xl mt-2 font-[Arial Rounded MT Bold]">Job Match</span>
        </h1>
        <h2 className="text-2xl md:text-3xl text-gray-800 font-bold mb-6 relative inline-block">
          A System That Helps You Find Jobs That Match Your Skills!
          <span className="absolute bottom-[-5px] left-0  w-16 h-1 bg-green-500"></span>
        </h2>
        <p className="text-gray-600 text-lg md:text-xl max-w-2xl leading-relaxed">
          This platform helps you connect with employers looking for your skills.
          Whether you're a student, graduate, or professional
        </p>
         <span className="text-green-700 text-lg font-bold md:text-xl max-w-2xl leading-relaxed">get started today!</span>

         {/* Call to Action Buttons */}
         <div className="flex flex-col sm:flex-row gap-4 mt-8">
           <a
             href="/register"
             className="bg-green-700 text-white px-8 py-3 rounded-lg hover:bg-green-800 transition-colors duration-300 text-center font-medium"
           >
             <i className="fas fa-user mr-2"></i>
             Find Jobs
           </a>
           <a
             href="/employer_register"
             className="bg-white text-green-700 border-2 border-green-700 px-8 py-3 rounded-lg hover:bg-green-50 transition-colors duration-300 text-center font-medium"
           >
             <i className="fas fa-briefcase mr-2"></i>
             Post Jobs
           </a>
         </div>
      </div>

      <div className="flex-1 animate-slideInRight">
        <div className="relative w-full max-w-[450px]">
          <img 
            src="/assets/img1.jpg" 
            alt="Job Match" 
            className="w-full h-[450px] md:h-[450px] rounded-full object-cover 
                       shadow-xl transition-transform duration-300 hover:scale-105" 
          />
        </div>
      </div>
    </main>
  );
};

export default Hero;