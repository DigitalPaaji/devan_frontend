import React from 'react';
import { BsArrowRight, BsArrowRightCircle } from 'react-icons/bs';

export default function AboutSection() {
  return (
    <section
      id="about" 
      className= "container mx-auto bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden"
    >
      <div className="">

        {/* Badge Row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0D2B45] text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold">
            1
          </div>

          <div className="text-[12px] sm:text-[13px] font-medium border border-[#0D2B45]/20 rounded-full px-3 sm:px-4 py-1 sm:py-1.5 text-[#0D2B45]">
            About Sterilization Champions
          </div>
        </div>

        {/* Heading */}
        <div className="px-5 sm:px-8 lg:px-12 mb-12 sm:mb-16 lg:mb-28">
          <h2 className="text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-[#0D2B45]">
            Empowering sterilization professionals to
            <br className="hidden sm:block" />
            learn, grow, connect and lead.
          </h2>
        </div>

        {/* Mobile / Tablet */}
        <div className="px-5 sm:px-8 lg:hidden flex flex-col gap-8">

          <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-[#0D2B45]">
            Sterilization Champions is a professional learning and networking
            platform built to bring the CSSD community together through
            continuous education, recognition, career opportunities and
            shared knowledge.
          </p>

          <div>
            <a
              href="#connect"
              className="group inline-flex items-center gap-3 bg-[#0D2B45] hover:bg-[#17415F] text-white text-[13px] sm:text-[14px] rounded-full pl-5 pr-2 py-2 transition-all duration-500 cursor-pointer"
            >
              <span className="overflow-hidden h-[20px] inline-flex flex-col">
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full leading-[20px]">
                  Explore the community
                </span>

                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full leading-[20px]">
                  Explore the community
                </span>
              </span>

              <span className="w-7 h-7 rounded-full bg-white text-[#0D2B45] flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <BsArrowRight size={14} />
              </span>
            </a>
          </div>

          {/* Images */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5 pt-4">

            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85"
              alt="Healthcare professional"
              className="sm:w-[45%] aspect-[438/346] rounded-xl object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1200&q=85"
              alt="Healthcare professionals collaborating"
              className="sm:w-[55%] aspect-[900/600] rounded-2xl object-cover"
            />

          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid px-12 grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8">

          {/* Left Image */}
          <div className="self-end">
            <img
              src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=1000&q=85"
              alt="Healthcare professional"
              className="w-full aspect-[438/346] rounded-2xl object-cover"
            />
          </div>

          {/* Center Content */}
          <div className="self-start flex flex-col justify-end items-start pt-12">

            <p className="text-[16px] xl:text-[18px] leading-[1.65] font-medium text-[#0D2B45] whitespace-nowrap mb-8">
              Learn continuously. Earn CPD points. <br />
              Get recognized. Build your professional <br />
              journey with the CSSD community.
            </p>

            <a
              href="#connect"
              className="group inline-flex items-center gap-3 bg-[#0D2B45] hover:bg-[#17415F] text-white text-[14px] rounded-full pl-6 pr-2 py-2 transition-all duration-500 cursor-pointer"
            >
              <span className="overflow-hidden h-[20px] inline-flex flex-col">
                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full leading-[20px]">
                  Explore the community
                </span>

                <span className="transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-full leading-[20px]">
                  Explore the community
                </span>
              </span>

              <span className="w-8 h-8 rounded-full bg-white text-[#0D2B45] flex items-center justify-center transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-rotate-45">
                <BsArrowRightCircle size={14} />
              </span>
            </a>

          </div>

          {/* Right Image */}
          <div className="self-end">
            <img
              src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1400&q=85"
              alt="Healthcare team working together"
              className="w-full aspect-[3/2] rounded-2xl object-cover"
            />
          </div>

        </div>
      </div>
    </section>
  );
}
