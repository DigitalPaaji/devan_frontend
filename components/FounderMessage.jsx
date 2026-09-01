"use client";

import React from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import {
  FiBookOpen,
  FiBriefcase,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

const FounderMessage = () => {
  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">

        {/* Header */}
        <div className="mb-7">

          <div className="mb-2 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#153497]/10 text-[#153497]">
              <BsFillChatQuoteFill size={15} />
            </span>

            <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#100da3]">
              Founder&apos;s Message
            </span>
          </div>

          <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
            Empowering the Professionals
            <span className="text-[#153497]"> Behind Sterile Care</span>
          </h2>

        </div>

        {/* Main Card */}
        <div className="grid overflow-hidden rounded-[26px] border border-slate-200 bg-white shadow-sm md:grid-cols-5">

          {/* Founder Image */}
          <div className="relative h-[300px] overflow-hidden md:col-span-2 md:h-[400px]">

            <img
              src="/Images/founder.jpeg"
              alt="Dr. Jaspaal Singh"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />


            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent" />

            
            <div className="absolute bottom-0 left-0 right-0 p-5">

              <div className="flex items-center gap-2">

                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#153497] text-white">
                  <FiCheckCircle size={11} />
                </span>

                <span className="text-[9px] font-semibold uppercase tracking-wider text-white/70">
                  Founder & Director
                </span>

              </div>

              <h3 className="mt-2 text-xl font-bold text-white">
                Dr. Jaspaal Singh
              </h3>

              <p className="text-xs text-white/60">
                Founder & Managing Director
              </p>

            </div>

          </div>

          {/* Message */}
          <div className="relative flex flex-col justify-center p-6 sm:p-8 md:col-span-3 lg:p-10">

            {/* Quote */}
            <div className="absolute right-6 top-6 text-[#153497]/15">
              <BsFillChatQuoteFill size={35} />
            </div>

            <p className="mb-3 text-[10px] font-bold uppercase tracking-[0.18em] text-[#100da3]">
              Our Vision
            </p>

            <h3 className="max-w-xl text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
              “Building a stronger professional community
              for safer and better sterile care.”
            </h3>

            <div className="mt-4 max-w-xl space-y-3 text-sm leading-6 text-slate-500">

              <p>
                Our mission is to empower professionals working
                in sterilization, CSSD, and infection control with
                the knowledge and opportunities they need to grow.
              </p>

              <p>
                Through learning articles, career opportunities,
                and regular questions and challenges, we aim to
                create a community where professionals can
                learn, participate, and advance together.
              </p>

            </div>

            {/* Platform Features */}
            <div className="mt-6 grid grid-cols-3 gap-2 border-t border-slate-100 pt-5">

              <Feature
                icon={<FiBookOpen />}
                title="Learn"
                text="Articles"
              />

              <Feature
                icon={<FiBriefcase />}
                title="Grow"
                text="Jobs"
              />

              <Feature
                icon={<FiAward />}
                title="Participate"
                text="Challenges"
              />

            </div>

            {/* Signature */}
            <div className="mt-5 border-t border-slate-100 pt-4">

              <p className="font-serif text-xl italic text-slate-800">
                Jaspaal Singh
              </p>

              <p className="text-[9px] font-semibold uppercase tracking-wider text-slate-400">
                Founder & Managing Director
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

/* =============================================================
   FEATURE
============================================================= */

const Feature = ({ icon, title, text }) => {
  return (
    <div className="rounded-xl bg-slate-50 p-3">

      <div className="flex items-center gap-2">

        <span className="text-[#153497]">
          {icon}
        </span>

        <span className="text-xs font-bold text-slate-800">
          {title}
        </span>

      </div>

      <p className="mt-1 text-[10px] text-slate-400">
        {text}
      </p>

    </div>
  );
};

export default FounderMessage;

