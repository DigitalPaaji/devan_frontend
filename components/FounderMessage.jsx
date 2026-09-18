"use client";

import React from "react";
import { BsFillChatQuoteFill } from "react-icons/bs";
import {
  FiBookOpen,
  FiBriefcase,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";

/* =========================================================
   FONTS + BASE STYLES (inject once)
   Same serif/sans pairing as the rest of the site.
========================================================= */

const FounderMessage = () => {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24">
    

      <div className="container mx-auto px-4">
        {/* ---------------- HEADER ---------------- */}
        <div className="mb-10 max-w-xl border-b border-[#DEDACE] pb-8">
          <div className="mb-3 flex items-center gap-2">
            <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2F6F5C]/25 bg-[#FCFBF8] text-[#2F6F5C]">
              <BsFillChatQuoteFill size={14} />
            </span>
            <span className="founder-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#2F6F5C]">
              Founder&apos;s Message
            </span>
          </div>

          <h2 className="hero-serif  text-3xl leading-tight text-[#1A2420] sm:text-4xl">
            Empowering the professionals behind sterile care
          </h2>
        </div>

        {/* ---------------- CARD ---------------- */}
        <div className="grid overflow-hidden border border-[#DEDACE] bg-[#FCFBF8] md:grid-cols-5">
          {/* Photo */}
          <div className="relative h-[300px] overflow-hidden border-b border-[#DEDACE] md:col-span-2 md:h-auto md:border-b-0 md:border-r">
            <img
              src="/Images/founder.jpeg"
              alt="Dr. Jaswant Singh Bodhy"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#1A2420]/85 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex items-center gap-2">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#2F6F5C] text-[#F7F5F0]">
                  <FiCheckCircle size={11} />
                </span>
                <span className="founder-sans text-[10px] font-medium uppercase tracking-wider text-[#F7F5F0]/70">
                  Founder &amp; Director
                </span>
              </div>

              <h3 className="hero-serif  mt-2 text-xl text-[#F7F5F0]">
                Dr. Jaswant Singh Bodhy
              </h3>
              <p className="founder-sans text-xs text-[#F7F5F0]/60">
                Founder &amp; Managing Director
              </p>
            </div>
          </div>

          {/* Message */}
          <div className="relative flex flex-col justify-center p-6 sm:p-8 md:col-span-3 lg:p-10">
            <div className="absolute right-6 top-6 text-[#2F6F5C]/10">
              <BsFillChatQuoteFill size={36} />
            </div>

            <p className="founder-sans mb-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#2F6F5C]">
              Our Vision
            </p>

            <h3 className="hero-serif  max-w-xl text-xl leading-snug text-[#1A2420] sm:text-2xl">
              "Building a stronger professional community for safer and
              better sterile care."
            </h3>

            <div className="founder-sans mt-4 max-w-xl space-y-3 text-[14.5px] leading-relaxed text-[#6B7570]">
              <p>
                Our mission is to empower professionals working in
                sterilization, CSSD, and infection control with the
                knowledge and opportunities they need to grow.
              </p>
              <p>
                Through learning articles, career opportunities, and
                regular questions and challenges, we aim to create a
                community where professionals can learn, participate, and
                advance together.
              </p>
            </div>

            {/* Platform Features */}
            <div className="mt-6 grid grid-cols-3 gap-3 border-t border-[#DEDACE] pt-6">
              <Feature icon={<FiBookOpen />} title="Learn" text="Articles" />
              <Feature icon={<FiBriefcase />} title="Grow" text="Jobs" />
              <Feature
                icon={<FiAward />}
                title="Participate"
                text="Challenges"
              />
            </div>

            {/* Signature */}
            <div className="mt-6 border-t border-[#DEDACE] pt-5">
              <p className="hero-serif  text-xl italic text-[#1A2420]">
                Jaswant Singh Bodhy
              </p>
              <p className="founder-sans mt-0.5 text-[10px] font-medium uppercase tracking-wider text-[#9AA39D]">
                Founder &amp; Managing Director
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
    <div className="border border-[#DEDACE] bg-[#F7F5F0] p-3.5 transition-colors duration-300 hover:border-[#2F6F5C]">
      <div className="flex items-center gap-2 text-[#2F6F5C]">
        {icon}
        <span className="founder-sans text-xs font-medium text-[#1A2420]">
          {title}
        </span>
      </div>
      <p className="founder-sans mt-1 text-[11px] text-[#6B7570]">{text}</p>
    </div>
  );
};

export default FounderMessage;