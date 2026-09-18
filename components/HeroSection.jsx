import React from 'react';
import DotField from './DotField'; // 👈 adjust path if needed

const HeroSection = () => {
  return (
    <section className="mx-auto container my-10">

      <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-[#DEDACE] bg-[#F7F5F0] shadow-[0_25px_70px_-30px_rgba(26,36,32,0.25)]">

        {/* ================================================= */}
        {/* 1) DOT FIELD — fills the whole card background   */}
        {/* ================================================= */}
        <div className="pointer-events-none absolute inset-0 z-0">
          <DotField
            dotRadius={1.6}
            dotSpacing={16}
            cursorRadius={420}
            cursorForce={0.12}
            bulgeOnly={true}
            bulgeStrength={55}
            glowRadius={200}
            glowColor="#2F6F5C"
            gradientFrom="rgba(47, 111, 92, 0.45)"
            gradientTo="rgba(176, 141, 87, 0.30)"
            sparkle={false}
            waveAmplitude={2}
          />
        </div>

        {/* Soft cream fade at edges so text stays crisp */}
        <div className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-b from-[#F7F5F0]/40 via-transparent to-[#F7F5F0]/50" />

        {/* ---------- Ambient background glow — kept quiet ---------- */}
        <div className="pointer-events-none absolute -top-40 -right-32 z-[1] h-[28rem] w-[28rem] rounded-full bg-[#2F6F5C]/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 -left-32 z-[1] h-[28rem] w-[28rem] rounded-full bg-[#B08D57]/10 blur-3xl" />

        {/* ================================================= */}
        {/* CONTENT (above the dots)                          */}
        {/* ================================================= */}
        <div className="relative z-10 grid min-h-[80vh] grid-cols-1 items-center gap-14 px-6 py-14 sm:px-12 lg:grid-cols-2 lg:gap-8 lg:py-20">

          {/* ================= LEFT — COPY ================= */}
          <div className="flex flex-col gap-7">

            {/* Eyebrow badge */}
            <span className="hero-sans inline-flex w-fit items-center gap-2.5 rounded-full border border-[#1A2420]/10 bg-[#F7F5F0]/80 px-4 py-2 text-[11px] font-medium tracking-wide text-[#1A2420] backdrop-blur-sm">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#2F6F5C] opacity-75" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[#2F6F5C]" />
              </span>
              CSSD Professional Community
            </span>

            {/* Headline */}
            <h1 className="hero-serif font-bold text-4xl leading-[1.1] tracking-tight text-[#1A2420] lg:text-6xl">
              Learn.
              <br />
              Contribute.
              <br />
              <span className="text-[#2F6F5C]">Get recognized.</span>
            </h1>

            {/* Paragraph */}
            <p className="hero-sans max-w-md text-[15px] leading-relaxed text-[#4A524E]">
              The{' '}
              <strong className="font-semibold text-[#1A2420]">
                Sterilization Champions
              </strong>{' '}
              is a custom-built education, recognition, and professional
              community platform dedicated to CSSD professionals, infection
              control teams, sterilization technicians, hospital
              administrators, and healthcare experts.
            </p>

            {/* Buttons */}
            <div className="hero-sans flex flex-wrap items-center gap-4 pt-2">
              <button className="group relative overflow-hidden rounded-full bg-[#1A2420] px-8 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#1A2420]/20">
                <span className="relative z-10">Join us</span>
                <span className="absolute inset-0 -translate-x-full bg-[#2F6F5C] transition-transform duration-500 group-hover:translate-x-0" />
              </button>

              <button className="rounded-full border border-[#DEDACE] bg-[#F7F5F0]/80 px-8 py-3.5 text-sm font-medium text-[#1A2420] backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-[#2F6F5C]/40 hover:bg-white hover:text-[#2F6F5C]">
                Learn more
              </button>
            </div>

            {/* Stats */}
            <div className="mt-4 flex items-center gap-6 border-t border-[#DEDACE] pt-8">
              <div className="flex flex-col">
                <span className="hero-serif text-2xl text-[#1A2420]">15.2K</span>
                <span className="hero-sans text-sm text-[#6B7570]">Active students</span>
              </div>

              <div className="h-10 w-px bg-[#DEDACE]" />

              <div className="flex flex-col">
                <span className="hero-serif text-2xl text-[#1A2420]">4.5K</span>
                <span className="hero-sans text-sm text-[#6B7570]">Experts</span>
              </div>

              <div className="h-10 w-px bg-[#DEDACE]" />

              <div className="flex flex-col items-start">
                <svg
                  className="h-6 w-6 text-[#2F6F5C]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
                  />
                </svg>
                <span className="hero-sans mt-1 text-sm text-[#6B7570]">Resources</span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT — COLLAGE ================= */}
          <div className="relative mt-10 h-[420px] w-full sm:h-[520px] lg:mt-0 lg:h-[600px]">

            {/* Card 1 — top left */}
            <div className="group absolute left-0 top-0 h-[55%] w-5/12 overflow-hidden rounded-[1.75rem] border border-[#DEDACE] bg-[#EFECE3] shadow-lg shadow-[#1A2420]/5 transition-transform duration-500 hover:-translate-y-1.5">
              <img
                src="/Images/banner1.webp"
                alt="Student"
                className="h-full w-full object-cover object-top opacity-95 transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card 2 — top right */}
            <div className="group absolute right-0 top-[10%] h-[60%] w-6/12 overflow-hidden rounded-[1.75rem] border border-[#DEDACE] bg-[#EFECE3] shadow-lg shadow-[#1A2420]/5 transition-transform duration-500 hover:-translate-y-1.5">
              <img
                src="/Images/banner2.webp"
                alt="Tutor"
                className="h-full w-full object-cover object-bottom opacity-95 transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Card 3 — bottom left, bold accent */}
            <div className="group absolute bottom-[5%] left-[10%] z-10 h-[45%] w-5/12 overflow-hidden rounded-[1.75rem] border-4 border-[#F7F5F0] shadow-xl shadow-[#2F6F5C]/25 transition-transform duration-500 hover:-translate-y-1.5">
              <img
                src="/Images/banner3.webp"
                alt="Professional"
                className="h-full w-full object-cover object-top opacity-95 mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating arrow chip */}
            <div className="absolute right-[45%] top-[-2%] z-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#1A2420] text-white shadow-lg shadow-[#1A2420]/25 ring-4 ring-[#F7F5F0] transition-transform duration-300 hover:scale-110">
              <svg
                className="h-5 w-5 rotate-45"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </div>

            {/* Floating avatars pill */}
            <div className="hero-sans absolute bottom-[35%] right-[25%] z-20 flex items-center justify-center gap-2 rounded-full border border-[#DEDACE] bg-white/85 px-3 py-2 shadow-md backdrop-blur-md">
              <div className="flex -space-x-2">
                <div className="h-6 w-6 rounded-full bg-[#2F6F5C] ring-2 ring-white" />
                <div className="h-6 w-6 rounded-full bg-[#B08D57] ring-2 ring-white" />
                <div className="h-6 w-6 rounded-full bg-[#1A2420] ring-2 ring-white" />
              </div>
              <span className="pr-1 text-xs font-medium text-[#6B7570]">+2K</span>
            </div>

            {/* Accent dots */}
            <div className="absolute right-[10%] top-[5%] h-3 w-3 rounded-full bg-[#B08D57]" />
            <div className="absolute bottom-[20%] right-[45%] h-4 w-4 rounded-full bg-[#2F6F5C]/60" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;