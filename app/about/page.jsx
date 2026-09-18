"use client";

import React from "react";
import Link from "next/link";
import {
  FiArrowRight,
  FiAward,
  FiBookOpen,
  FiBriefcase,
  FiCheckCircle,
  FiChevronRight,
  FiGlobe,
  FiHeart,
  FiShield,
  FiTarget,
  FiUsers,
} from "react-icons/fi";

const page = () => {
  const focusAreas = [
    {
      icon: <FiShield size={24} />,
      title: "Sterilization Excellence",
      description:
        "Promoting better understanding of sterilization processes, standards, technologies and best practices.",
    },
    {
      icon: <FiHeart size={24} />,
      title: "Infection Control",
      description:
        "Supporting professionals with knowledge and resources that contribute to safer healthcare environments.",
    },
    {
      icon: <FiBookOpen size={24} />,
      title: "Professional Learning",
      description:
        "Creating a continuous learning environment through articles, questions, insights and practical knowledge.",
    },
    {
      icon: <FiBriefcase size={24} />,
      title: "Career Opportunities",
      description:
        "Connecting CSSD and healthcare professionals with relevant jobs, career opportunities and professional growth.",
    },
  ];

  const audience = [
    "CSSD Professionals",
    "Sterilization Technicians",
    "CSSD Supervisors & Managers",
    "Infection Control Professionals",
    "Hospital Administrators",
    "Healthcare Professionals",
  ];

  const platformFeatures = [
    {
      number: "01",
      title: "Expert Knowledge",
      text: "Learn from professionals and explore practical insights across sterilization, CSSD management and infection control.",
    },
    {
      number: "02",
      title: "Continuous Learning",
      text: "Stay engaged with weekly questions, articles, case studies and educational resources.",
    },
    {
      number: "03",
      title: "Career Growth",
      text: "Discover relevant job opportunities and build a stronger professional future within healthcare.",
    },
    {
      number: "04",
      title: "Professional Community",
      text: "Be part of a growing community focused on knowledge sharing, collaboration and better healthcare practices.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 pt-10">
      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="relative overflow-hidden border-b border-gray-200">
        <div className="mx-auto container  px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-10 bg-blue-600" />

                <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">
                  About DEVAN
                </p>
              </div>

              <h1 className="max-w-3xl font-serif text-5xl font-bold leading-[1.05] text-gray-950 sm:text-6xl lg:text-7xl">
                Advancing the Future of
                <span className="block text-blue-600">
                  Sterilization & Healthcare
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-base leading-8 text-gray-600 sm:text-lg">
                DEVAN is a professional platform built to connect knowledge,
                careers and people across CSSD, sterilization, infection
                control and modern healthcare.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  href="/articles"
                  className="group inline-flex items-center gap-3 bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-blue-700"
                >
                  Explore Knowledge
                  <FiArrowRight
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-3 border border-gray-300 bg-white px-6 py-3.5 text-sm font-semibold text-gray-800 transition hover:border-blue-600 hover:text-blue-600"
                >
                  Explore Careers
                </Link>
              </div>
            </div>

            {/* Hero visual */}
            <div className="relative">
              <div className="relative min-h-[420px] overflow-hidden bg-gray-950 p-8 sm:p-10">
                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-blue-600/30" />
                <div className="absolute -bottom-24 -left-20 h-72 w-72 rounded-full border border-white/10" />

                <div className="relative flex h-full min-h-[350px] flex-col justify-between">
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-500">
                      DEVAN PROFESSIONAL PLATFORM
                    </p>

                    <div className="mt-8 h-px w-20 bg-blue-600" />

                    <h2 className="mt-8 max-w-md font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                      Knowledge.
                      <br />
                      People.
                      <br />
                      Progress.
                    </h2>
                  </div>

                  <div className="grid grid-cols-2 border-t border-white/10 pt-6 sm:grid-cols-3">
                    <div>
                      <p className="font-serif text-2xl font-bold text-white">
                        CSSD
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
                        Excellence
                      </p>
                    </div>

                    <div>
                      <p className="font-serif text-2xl font-bold text-white">
                        IC
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
                        Infection Control
                      </p>
                    </div>

                    <div className="mt-5 sm:mt-0">
                      <p className="font-serif text-2xl font-bold text-white">
                        CAREER
                      </p>
                      <p className="mt-1 text-[10px] uppercase tracking-widest text-gray-500">
                        Growth
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 hidden border border-blue-600 bg-white px-5 py-4 shadow-lg sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center bg-blue-50 text-blue-600">
                    <FiAward size={20} />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-gray-900">
                      Professional Excellence
                    </p>
                    <p className="mt-0.5 text-[10px] uppercase tracking-wider text-gray-500">
                      Driven by Knowledge
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTRO
      ====================================================== */}
      <section className="border-b border-gray-200">
        <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">
                Who We Are
              </p>

              <h2 className="mt-3 font-serif text-3xl font-bold text-gray-900 sm:text-4xl">
                About DEVAN
              </h2>
            </div>

            <div className="space-y-5 text-base leading-8 text-gray-600 lg:col-span-2">
              <p>
                DEVAN is a professional knowledge and career platform created
                for people working in CSSD, sterilization, infection control
                and healthcare.
              </p>

              <p>
                Our goal is simple — to make professional knowledge more
                accessible, encourage continuous learning and create meaningful
                opportunities for people who contribute to safe and effective
                healthcare every day.
              </p>

              <p>
                From practical articles and case studies to weekly questions,
                professional insights and career opportunities, DEVAN brings
                important resources together in one dedicated platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MISSION / VISION
      ====================================================== */}
      <section className="bg-gray-50">
        <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Mission */}
            <div className="border border-gray-200 bg-white p-7 sm:p-9">
              <div className="flex items-center justify-between border-b border-gray-900 pb-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600">
                    Our Purpose
                  </p>

                  <h2 className="mt-1 font-serif text-3xl font-bold text-gray-900">
                    Mission
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center bg-blue-50 text-blue-600">
                  <FiTarget size={23} />
                </div>
              </div>

              <p className="mt-7 text-base leading-8 text-gray-600">
                To empower healthcare professionals with reliable knowledge,
                continuous learning opportunities and meaningful career
                resources that help them grow professionally and contribute to
                safer healthcare.
              </p>
            </div>

            {/* Vision */}
            <div className="border border-gray-200 bg-white p-7 sm:p-9">
              <div className="flex items-center justify-between border-b border-gray-900 pb-4">
                <div>
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600">
                    Looking Ahead
                  </p>

                  <h2 className="mt-1 font-serif text-3xl font-bold text-gray-900">
                    Vision
                  </h2>
                </div>

                <div className="flex h-12 w-12 items-center justify-center bg-blue-50 text-blue-600">
                  <FiGlobe size={23} />
                </div>
              </div>

              <p className="mt-7 text-base leading-8 text-gray-600">
                To build a trusted professional ecosystem where CSSD,
                sterilization and infection control professionals can learn,
                connect, share knowledge and discover opportunities that shape
                the future of healthcare.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE DO
      ====================================================== */}
      <section>
        <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">
              What We Do
            </p>

            <h2 className="mt-3 font-serif text-4xl font-bold text-gray-900 sm:text-5xl">
              Built around professional growth
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              DEVAN brings together the essential resources professionals need
              to stay informed, improve their knowledge and move forward in
              their careers.
            </p>
          </div>

          <div className="mt-12 grid gap-px border border-gray-200 bg-gray-200 sm:grid-cols-2 lg:grid-cols-4">
            {focusAreas.map((item, index) => (
              <div
                key={index}
                className="group bg-white p-7 transition hover:bg-gray-50"
              >
                <div className="flex h-12 w-12 items-center justify-center bg-blue-50 text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                  {item.icon}
                </div>

                <h3 className="mt-6 font-serif text-xl font-bold text-gray-900">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  {item.description}
                </p>

                <div className="mt-6 h-px w-8 bg-blue-600 transition-all group-hover:w-16" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          WHO WE SERVE
      ====================================================== */}
      <section className="bg-gray-950 text-white">
        <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-500">
                Our Community
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold sm:text-5xl">
                For the people behind safer healthcare
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-gray-400">
                DEVAN is designed for professionals whose work directly or
                indirectly supports sterilization, infection prevention,
                instrument reprocessing and healthcare quality.
              </p>
            </div>

            <div className="border border-white/10">
              {audience.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 border-b border-white/10 px-6 py-5 last:border-0"
                >
                  <span className="font-serif text-sm text-blue-500">
                    0{index + 1}
                  </span>

                  <span className="text-sm font-medium text-gray-200">
                    {item}
                  </span>

                  <FiChevronRight
                    className="ml-auto text-gray-600"
                    size={16}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          PLATFORM
      ====================================================== */}
      <section>
        <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid gap-12 lg:grid-cols-3">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">
                The DEVAN Platform
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold text-gray-900">
                One platform.
                <br />
                Multiple possibilities.
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Everything is designed around one idea — helping professionals
                learn, connect and grow.
              </p>
            </div>

            <div className="border-t border-gray-200 lg:col-span-2">
              {platformFeatures.map((item) => (
                <div
                  key={item.number}
                  className="grid gap-5 border-b border-gray-200 py-7 sm:grid-cols-[70px_180px_1fr]"
                >
                  <span className="font-serif text-2xl font-bold text-blue-600">
                    {item.number}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-500">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHY DEVAN
      ====================================================== */}
      <section className="border-y border-gray-200 bg-gray-50">
        <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">
                Why DEVAN
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold text-gray-900 sm:text-5xl">
                More than information.
                <span className="block text-blue-600">
                  A professional ecosystem.
                </span>
              </h2>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {[
                "Focused on CSSD & Sterilization",
                "Professional learning resources",
                "Career opportunities",
                "Expert-driven knowledge",
                "Practical healthcare insights",
                "Growing professional community",
              ].map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border border-gray-200 bg-white p-5"
                >
                  <FiCheckCircle
                    className="mt-0.5 shrink-0 text-blue-600"
                    size={18}
                  />

                  <p className="text-sm font-medium leading-6 text-gray-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section>
        <div className="mx-auto container px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="relative overflow-hidden bg-blue-600 px-7 py-14 sm:px-12 lg:px-16">
            <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full border border-white/20" />
            <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />

            <div className="relative z-10 max-w-3xl">
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-100">
                Join DEVAN
              </p>

              <h2 className="mt-3 font-serif text-4xl font-bold leading-tight text-white sm:text-5xl">
                Learn. Grow. Contribute to better healthcare.
              </h2>

              <p className="mt-5 max-w-2xl leading-7 text-blue-100">
                Explore professional knowledge, discover career opportunities
                and become part of the growing DEVAN community.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/articles"
                  className="inline-flex items-center gap-3 bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 transition hover:bg-gray-100"
                >
                  Explore Articles
                  <FiArrowRight />
                </Link>

                <Link
                  href="/jobs"
                  className="inline-flex items-center gap-3 border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Find Jobs
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;