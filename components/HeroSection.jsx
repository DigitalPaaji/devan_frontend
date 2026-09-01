import React from 'react';

const HeroSection = () => {
  return (
    
    <div className=" mx-auto container   rounded-3xl shadow-sm border border-gray-100 overflow-hidden my-4 sm:my-10">
      
    
      <div className="px-6 sm:px-12 py-12 lg:py-20 min-h-[80vh] grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        
        {/* Left Column: Text & CTA */}
        <div className="flex flex-col gap-8 z-10">
          <h1 className="text-5xl font- sm:text-6xl lg:text-7xl font-bold text-gray-700 ">
            A new way to <br />
            <span className="text-[#2b2492]">level up.</span>
          </h1>

          <p className="text-gray-500 text-lg max-w-md leading-relaxed">
            The DEVAN CSSD Professional Platform is a custom-built education, recognition, and professional community platform designed specifically for CSSD professionals, Infection Control teams, sterilization technicians, hospital administrators, and healthcare experts.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button className="bg-[#2b2492] hover:bg-[#153497] text-white font-medium rounded-full px-8 py-3 transition-colors">
              Join Us
            </button>
            <button className="border border-gray-300 text-gray-700 font-medium rounded-full px-8 py-3 hover:bg-gray-50 transition-colors">
              Learn more
            </button>
          </div>

          {/* Stats Section */}
          <div className="flex items-center gap-6 pt-8 mt-4">
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">15,2K</span>
              <span className="text-gray-500 text-sm">Active students</span>
            </div>
            
            <div className="w-px h-10 bg-gray-200"></div> {/* Divider */}
            
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-gray-900">4,5K</span>
              <span className="text-gray-500 text-sm">Exports</span>
            </div>

            <div className="w-px h-10 bg-gray-200"></div> {/* Divider */}

            <div className="flex flex-col items-center justify-center">
              {/* Placeholder for the resources icon */}
              <div className="flex items-center gap-2">
                <svg className="w-8 h-8 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path>
                </svg>
              </div>
              <span className="text-gray-500 text-sm mt-1">Resources</span>
            </div>
          </div>
        </div>


        <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] mt-10 lg:mt-0">
          
      
          <div className="absolute top-0 left-0 w-5/12 h-[55%] bg-[#bfe4f6] rounded-[2rem] overflow-hidden shadow-sm">
           
            <img 
              src="/Images/banner1.webp" 
              alt="Student" 
              className="w-full h-full object-cover object-bottom mix-blend-multiply opacity-90"
            />
          </div>

        
          <div className="absolute top-[10%] right-0 w-6/12 h-[60%] bg-[#c6baf5] rounded-[2rem] overflow-hidden shadow-sm">
            <img 
              src="/Images/banner2.webp" 
              alt="Tutor" 
              className="w-full h-full object-cover object-bottom mix-blend-multiply opacity-90"
            />
          </div>

          
          <div className="absolute bottom-[5%] left-[10%] w-5/12 h-[45%] bg-[#a5c697] rounded-[2rem] overflow-hidden z-10 shadow-sm border-4 border-white">
            <img 
              src="/Images/banner3.webp" 
              alt="Professional" 
              className="w-full h-full object-cover object-top mix-blend-multiply opacity-90"
            />
          </div>

      
          <div className="absolute top-[-2%] right-[45%] w-12 h-12 bg-[#a3cae0] rounded-full flex items-center justify-center text-white shadow-md z-20">
            <svg className="w-5 h-5 transform rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
            </svg>
          </div>

       
          <div className="absolute bottom-[35%] right-[25%] bg-[#bda4f8] rounded-full px-4 py-2 flex items-center justify-center shadow-md z-20">
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full border border-white opacity-50"></div>
              <div className="w-6 h-6 rounded-full border border-white opacity-75"></div>
              <div className="w-6 h-6 rounded-full border border-white"></div>
            </div>
          </div>

     
          <div className="absolute top-[40%] left-[45%] text-[#a5c697]">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
            </svg>
          </div>
          
  
          <div className="absolute top-[5%] right-[10%] w-3 h-3 bg-purple-300 rounded-full"></div>
          <div className="absolute bottom-[20%] right-[45%] w-4 h-4 bg-blue-300 rounded-full"></div>
          
        </div>
      </div>
    </div>
  );
};

export default HeroSection;