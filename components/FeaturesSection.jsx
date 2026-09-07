'use client';
import React from 'react';

import { motion } from 'framer-motion';

const platformFeatures = [
  {
    id: "01",
    title: "Weekly Challenge",
    description:
      "A new practical question every Monday. Submit your answer, learn from the correct response, and compete for Champion of the Week.",
  },
  {
    id: "02",
    title: "Points & Rankings",
    description:
      "Earn points through answers, learning modules, articles, daily participation and helping fellow professionals.",
  },
  {
    id: "03",
    title: "Champion Awards",
    description:
      "Recognizing consistent professionals through weekly, monthly and yearly Champion awards, badges and certificates.",
  },
];

const platformServices = [
  {
    title: "Knowledge Library",
    description:
      "Books, articles, guidelines, research papers, standards, SOPs, videos, presentations and downloadable learning resources.",
  },
  {
    title: "Ask the Expert",
    description:
      "Submit practical CSSD questions and learn from expert answers that become part of a searchable professional knowledge base.",
  },
  {
    title: "Job Portal",
    description:
      "Discover CSSD and infection-control opportunities, create your professional profile, upload your resume and apply online.",
  },
  {
    title: "Resource Centre",
    description:
      "Access educational brochures, posters, checklists, training material, calculators and useful reference charts.",
  },
];

export default function WhiteThemeSections() {
  return (
    <div className="bg-white py-20 text-[#0D2B45]  md:py-28   container mx-auto px-4">

    





<section className="  py-20 ">

  {/* Section Header */}
  <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">

    <div className="max-w-2xl">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D2B45] text-xs font-semibold text-white">
          7
        </div>

        <span className="rounded-full border border-[#0D2B45]/15 bg-[#F4F8FB] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-[#0D2B45]">
          Testimonials
        </span>
      </div>

      <h2 className="font-serif text-3xl font-light leading-tight text-[#0D2B45] sm:text-4xl md:text-5xl lg:text-6xl">
        Voices from the
        <br className="hidden sm:block" />
        <span className="text-[#0D2B45]/55">CSSD community.</span>
      </h2>
    </div>

    <p className="max-w-sm text-sm leading-6 text-[#0D2B45]/60 md:text-right">
      Hear from professionals, hospitals and educators who believe in
      continuous learning, knowledge sharing and stronger patient safety.
    </p>

  </div>


  {/* Testimonials Layout */}
  <div className="grid gap-5 lg:grid-cols-[1.25fr_0.75fr]">

    {/* Featured Testimonial */}
    <motion.div
      initial={{ opacity: 0, x: -25 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="group relative min-h-[500px] overflow-hidden rounded-[28px] bg-[#0D2B45]"
    >

      {/* Background Image */}
      <img
        src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=85"
        alt="Healthcare professional"
        className="absolute inset-0 h-full w-full object-cover opacity-55 transition-transform duration-700 group-hover:scale-105"
      />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B45] via-[#0D2B45]/65 to-[#0D2B45]/10" />

      {/* Content */}
      <div className="relative z-10 flex h-full min-h-[500px] flex-col justify-between p-7 sm:p-10 md:p-12">

        <div className="flex items-center justify-between">
          <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-[10px] font-medium uppercase tracking-[0.18em] text-white backdrop-blur-md">
            CSSD Professional
          </span>

          <span className="text-4xl font-serif text-white/30">
            “
          </span>
        </div>

        <div className="max-w-2xl">

          <p className="text-xl font-light leading-[1.5] text-white sm:text-2xl md:text-3xl">
            “Sterilization Champions gives professionals a place to
            continuously learn, share practical experiences and stay
            connected with the wider CSSD community.”
          </p>

          <div className="mt-8 flex items-center gap-4">

            <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-white/20">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=150&q=80"
                alt="CSSD professional"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-white">
                CSSD Professional
              </p>

              <p className="mt-0.5 text-xs text-white/55">
                Sterilization & Infection Prevention
              </p>
            </div>

          </div>

        </div>

      </div>
    </motion.div>


    {/* Right Testimonials */}
    <div className="grid gap-5">

      {/* Testimonial 2 */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className="group relative overflow-hidden rounded-[28px] border border-[#0D2B45]/10 bg-[#F4F8FB] p-7 sm:p-9"
      >

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <div className="h-12 w-12 overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=150&q=80"
                alt="Hospital professional"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#0D2B45]">
                Hospital Professional
              </p>

              <p className="text-xs text-[#0D2B45]/50">
                Healthcare Organisation
              </p>
            </div>

          </div>

          <div className="text-3xl font-serif text-[#0D2B45]/15">
            “
          </div>

        </div>

        <p className="mt-8 text-base leading-7 text-[#0D2B45]/70">
          The weekly challenge creates a simple but powerful reason to
          keep learning, think through real-world situations and learn
          from other professionals.
        </p>

        <div className="mt-8 h-px w-full bg-[#0D2B45]/10" />

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0D2B45]/45">
            Weekly Challenge
          </span>

          <span className="text-lg text-[#0D2B45]/30 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

      </motion.div>


      {/* Testimonial 3 */}
      <motion.div
        initial={{ opacity: 0, x: 25 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="group relative overflow-hidden rounded-[28px] bg-[#EAF2F7] p-7 sm:p-9"
      >

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <div className="h-12 w-12 overflow-hidden rounded-full">
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=150&q=80"
                alt="Infection control professional"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-semibold text-[#0D2B45]">
                Infection Control Professional
              </p>

              <p className="text-xs text-[#0D2B45]/50">
                Patient Safety
              </p>
            </div>

          </div>

          <div className="text-3xl font-serif text-[#0D2B45]/15">
            “
          </div>

        </div>

        <p className="mt-8 text-base leading-7 text-[#0D2B45]/70">
          Building a professional community around education,
          recognition and knowledge sharing can make a meaningful
          contribution to safer patient care.
        </p>

        <div className="mt-8 h-px w-full bg-[#0D2B45]/10" />

        <div className="mt-4 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[#0D2B45]/45">
            Patient Safety
          </span>

          <span className="text-lg text-[#0D2B45]/30 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>

      </motion.div>

    </div>

  </div>


  {/* Trust Strip */}
  <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">

    {[
      "Hospitals",
      "Doctors",
      "CSSD Professionals",
      "Industry Experts",
    ].map((item) => (
      <div
        key={item}
        className="rounded-2xl border border-[#0D2B45]/10 bg-white px-4 py-5 text-center"
      >
        <p className="text-xs font-medium text-[#0D2B45]/60">
          {item}
        </p>
      </div>
    ))}

  </div>

</section>




    </div>
  );
}

