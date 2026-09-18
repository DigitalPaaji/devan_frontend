"use client"
import Link from 'next/link';
import React from 'react';
import { BsArrowRight, BsArrowRightCircle } from 'react-icons/bs';
import { FiArrowUpRight } from 'react-icons/fi';
const AboutStyles = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=Inter:wght@400;500;600&display=swap");
 
    .about-serif {
      font-family: "Source Serif 4", Georgia, serif;
    }
    .about-sans {
      font-family: "Inter", -apple-system, sans-serif;
    }
 
    @keyframes aboutFadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .about-fade-in {
      animation: aboutFadeIn 0.6s ease-out both;
    }
 
    @media (prefers-reduced-motion: reduce) {
      .about-fade-in {
        animation: none;
      }
    }
  `}</style>
);
export default function AboutSection() {
  return (
    <section
      id="about" 
      className= "container mx-auto bg-white py-10 md:py-12 lg:py-16 overflow-hidden"
    >
      <AboutStyles />
      <div className="">

      

        {/* Heading */}
      <div className="mb-10 flex flex-col gap-6 border-b border-[#DEDACE] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="about-serif text-3xl leading-tight text-[#1A2420] sm:text-4xl">
              Empowering sterilization professionals to learn, grow, connect
              and lead.
            </h2>
            <p className="about-sans mt-3 text-[15px] leading-relaxed text-[#6B7570]">
              Sterilization Champions is a professional learning and
              networking platform built to bring the CSSD community together
              through continuous education, recognition and shared knowledge.
            </p>
          </div>

          <Link
            href="#connect"
            className="about-sans group inline-flex shrink-0 items-center gap-1.5 border-b border-[#1A2420] pb-0.5 text-sm font-medium text-[#1A2420] transition-colors hover:border-[#2F6F5C] hover:text-[#2F6F5C]"
          >
            Explore the community
            <FiArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
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
