"use client";

import React from "react";
import {
  FiShield,
  FiBookOpen,
  FiBriefcase,
  FiUsers,
  FiAward,
  FiArrowUpRight,
} from "react-icons/fi";

const AboutSterilizationChampions = () => {
  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24">
      <div className="container mx-auto px-4">
        <div className="grid items-center gap-10 border-b border-[#DEDACE] pb-10 lg:grid-cols-5 lg:gap-12">
          {/* ==================================================
              LEFT CONTENT
          ================================================== */}
          <div className="lg:col-span-3">
            {/* Label */}
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2F6F5C]/25 bg-[#FCFBF8] text-[#2F6F5C]">
                <FiShield size={15} />
              </span>
              <span className="hero-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#2F6F5C]">
                About Sterilization Champions
              </span>
            </div>

            {/* Heading */}
            <h2 className="hero-serif max-w-2xl text-3xl leading-tight text-[#1A2420] sm:text-4xl">
              Empowering the professionals behind safe healthcare
            </h2>

            {/* Description */}
            <p className="hero-sans mt-4 max-w-2xl text-[15px] leading-relaxed text-[#6B7570]">
              Sterilization Champions is a professional community created
              for people working in sterilization, CSSD, infection control,
              medical instrument processing, and related healthcare fields.
            </p>

            <p className="hero-sans mt-3 max-w-2xl text-[15px] leading-relaxed text-[#6B7570]">
              Our goal is to help professionals continuously{" "}
              <span className="font-medium text-[#1A2420]">
                learn, grow, connect, and advance
              </span>{" "}
              through practical knowledge, career opportunities, expert
              content, and professional challenges.
            </p>

            {/* CTA */}
            <a
              href="/about"
              className="hero-sans group mt-7 inline-flex items-center gap-1.5 border-b border-[#1A2420] pb-0.5 text-sm font-medium text-[#1A2420] transition-colors hover:border-[#2F6F5C] hover:text-[#2F6F5C]"
            >
              Learn more about us
              <FiArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>

          {/* ==================================================
              RIGHT FEATURES
          ================================================== */}
          <div className="grid grid-cols-2 gap-4 lg:col-span-2">
            <ChampionFeature
              icon={<FiBookOpen />}
              number="01"
              title="Learn"
              text="Expert articles and practical knowledge"
            />

            <ChampionFeature
              icon={<FiBriefcase />}
              number="02"
              title="Grow"
              text="Discover relevant career opportunities"
            />

            <ChampionFeature
              icon={<FiUsers />}
              number="03"
              title="Connect"
              text="Build a professional community"
            />

            <ChampionFeature
              icon={<FiAward />}
              number="04"
              title="Participate"
              text="Take part in questions and challenges"
            />
          </div>
        </div>

        {/* ====================================================
            BOTTOM STATEMENT
        ==================================================== */}
        <div className="mt-8 flex flex-col gap-5 border border-[#DEDACE] bg-[#FCFBF8] p-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#2F6F5C]/25 bg-[#F7F5F0] text-[#2F6F5C]">
              <FiShield size={17} />
            </div>

            <div>
              <p className="hero-serif text-[15px] text-[#1A2420]">
                Safer care starts with skilled professionals
              </p>
              <p className="hero-sans mt-0.5 text-[12.5px] text-[#6B7570]">
                Supporting the people who protect patients every day.
              </p>
            </div>
          </div>

          <div className="hidden h-px flex-1 bg-[#DEDACE] sm:mx-6 sm:block" />

          <p className="hero-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#2F6F5C]">
            Learn. Grow. Connect. Lead.
          </p>
        </div>
      </div>
    </section>
  );
};

/* =============================================================
   FEATURE CARD
============================================================= */
const ChampionFeature = ({ icon, number, title, text }) => {
  return (
    <div className="group border border-[#DEDACE] bg-[#FCFBF8] p-4 transition-colors duration-300 hover:border-[#2F6F5C]">
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#2F6F5C]/25 text-[#2F6F5C] transition-colors duration-300 group-hover:bg-[#2F6F5C] group-hover:text-[#F7F5F0]">
          {icon}
        </div>

        <span className="hero-sans text-[10px] font-medium text-[#9AA39D]">
          {number}
        </span>
      </div>

      <h3 className="hero-serif mt-4 text-[16px] text-[#1A2420]">{title}</h3>

      <p className="hero-sans mt-1.5 text-[12px] leading-relaxed text-[#6B7570]">
        {text}
      </p>
    </div>
  );
};

export default AboutSterilizationChampions;