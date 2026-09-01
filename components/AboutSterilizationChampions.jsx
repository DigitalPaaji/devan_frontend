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
    <section className="w-full bg-slate-50 py-12 sm:py-16">
      <div className="container mx-auto px-4">

        <div className="grid items-center gap-8 lg:grid-cols-5">

          {/* ==================================================
              LEFT CONTENT
          ================================================== */}

          <div className="lg:col-span-3">

            {/* Label */}

            <div className="mb-3 flex items-center gap-2">

              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#153497]/10 text-[#153497]">
                <FiShield size={16} />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#100da3]">
                About Sterilization Champions
              </span>

            </div>

            {/* Heading */}

            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl">
              Empowering the Professionals
              <span className="text-[#153497]">
                {" "}Behind Safe Healthcare
              </span>
            </h2>

            {/* Description */}

            <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-500 sm:text-base">
              Sterilization Champions is a professional community
              created for people working in sterilization, CSSD,
              infection control, medical instrument processing,
              and related healthcare fields.
            </p>

            <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-500">
              Our goal is to help professionals continuously
              <span className="font-semibold text-slate-700">
                {" "}learn, grow, connect, and advance{" "}
              </span>
              through practical knowledge, career opportunities,
              expert content, and professional challenges.
            </p>

            {/* CTA */}

            <a
              href="/about"
              className="group mt-6 inline-flex items-center gap-2 rounded-xl bg-[#153497] px-5 py-3 text-xs font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9676e8] hover:shadow-lg"
            >
              Learn More About Us

              <FiArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

          </div>

          {/* ==================================================
              RIGHT FEATURES
          ================================================== */}

          <div className="grid grid-cols-2 gap-3 lg:col-span-2">

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

        <div className="mt-8 flex flex-col gap-4 rounded-2xl border border-[#153497]/10 bg-white p-5 sm:flex-row sm:items-center sm:justify-between">

          <div className="flex items-center gap-3">

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#153497]/10 text-[#153497]">
              <FiShield size={18} />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                Safer Care Starts With Skilled Professionals
              </p>

              <p className="mt-0.5 text-xs text-slate-400">
                Supporting the people who protect patients every day.
              </p>
            </div>

          </div>

          <div className="hidden h-px flex-1 bg-slate-100 sm:mx-6 sm:block" />

          <p className="text-xs font-semibold text-[#100da3]">
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
    <div className="group rounded-2xl border border-slate-200 bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#153497]/30 hover:shadow-lg">

      <div className="flex items-start justify-between">

        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#153497]/10 text-[#153497] transition-colors group-hover:bg-[#153497] group-hover:text-white">
          {icon}
        </div>

        <span className="text-[9px] font-bold text-slate-300">
          {number}
        </span>

      </div>

      <h3 className="mt-4 text-sm font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-1.5 text-[11px] leading-5 text-slate-400">
        {text}
      </p>

    </div>
  );
};

export default AboutSterilizationChampions;


