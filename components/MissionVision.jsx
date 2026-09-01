"use client";

import React from "react";
import {
  FiArrowUpRight,
  FiHeart,
  FiTarget,
  FiEye,
  FiCheckCircle,
} from "react-icons/fi";

const MissionVision = () => {
  return (
    <section className="w-full bg-white py-14 sm:py-20 lg:py-24">
      <div className="container mx-auto px-4">


        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-14">

          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#153497]/10 px-4 py-2 text-xs font-semibold text-[#8c70d8]">
            <FiHeart size={14} />
            Our Purpose
          </div>

          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Mission & Vision
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
            We are committed to creating a healthier future through
            compassionate care, medical excellence, and continuous
            innovation.
          </p>

        </div>

        {/* =====================================================
            CARDS
        ===================================================== */}

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">

          {/* ===================================================
              MISSION
          =================================================== */}

          <div className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-8 lg:p-10">

            {/* Background decoration */}

            <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#153497]/5 transition-transform duration-700 group-hover:scale-150" />

            <div className="absolute bottom-0 right-0 h-32 w-32 rounded-full bg-[#153497]/5 blur-2xl" />

            <div className="relative">

              {/* Icon + Label */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#153497]/10 text-[#153497] transition-transform duration-500 group-hover:scale-110">

                    <FiTarget size={22} />

                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#153497]">
                      What drives us
                    </p>

                    <h3 className="mt-0.5 text-xl font-bold text-slate-900">
                      Our Mission
                    </h3>

                  </div>

                </div>

                <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition-all duration-300 group-hover:border-[#153497]/30 group-hover:bg-[#153497]/10 group-hover:text-[#153497] sm:flex">

                  <FiArrowUpRight />

                </div>

              </div>

              {/* Content */}

              <p className="mt-7 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                To provide accessible, compassionate, and
                patient-centered healthcare while maintaining the
                highest standards of clinical excellence and
                professional integrity.
              </p>

              {/* Points */}

              <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">

                <MissionPoint>
                  Compassionate patient care
                </MissionPoint>

                <MissionPoint>
                  Excellence in medical services
                </MissionPoint>

                <MissionPoint>
                  Accessible healthcare for everyone
                </MissionPoint>

              </div>

            </div>

          </div>

          {/* ===================================================
              VISION
          =================================================== */}

          <div className="group relative overflow-hidden rounded-[28px] bg-[#153497] p-6 text-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl sm:p-8 lg:p-10">

            {/* Background decoration */}

            <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-white/10 transition-transform duration-700 group-hover:scale-125" />

            <div className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full border border-white/10" />

            <div className="absolute right-10 top-1/2 h-24 w-24 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">

              {/* Icon + Label */}

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-white transition-transform duration-500 group-hover:scale-110">

                    <FiEye size={22} />

                  </div>

                  <div>

                    <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">
                      Where we're going
                    </p>

                    <h3 className="mt-0.5 text-xl font-bold">
                      Our Vision
                    </h3>

                  </div>

                </div>

                <div className="hidden h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white/60 transition-all duration-300 group-hover:bg-white/10 group-hover:text-white sm:flex">

                  <FiArrowUpRight />

                </div>

              </div>

              {/* Content */}

              <p className="mt-7 text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
                To become a trusted leader in healthcare by combining
                advanced medical technology, skilled professionals,
                and a human-centered approach to improve lives and
                build healthier communities.
              </p>

              {/* Points */}

              <div className="mt-7 space-y-3 border-t border-white/15 pt-6">

                <VisionPoint>
                  Innovation in healthcare
                </VisionPoint>

                <VisionPoint>
                  Better outcomes for every patient
                </VisionPoint>

                <VisionPoint>
                  A healthier and stronger community
                </VisionPoint>

              </div>

            </div>

          </div>

        </div>

        {/* =====================================================
            BOTTOM STATEMENT
        ===================================================== */}

        <div className="mx-auto mt-8 max-w-3xl text-center">

          <p className="text-sm font-medium text-slate-400">
            Caring today. Innovating tomorrow.{" "}
            <span className="text-[#153497]">
              Transforming lives together.
            </span>
          </p>

        </div>

      </div>
    </section>
  );
};



const MissionPoint = ({ children }) => {
  return (
    <div className="flex items-center gap-3">

      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#153497]/10 text-[#153497]">
        <FiCheckCircle size={13} />
      </span>

      <span className="text-sm font-medium text-slate-600">
        {children}
      </span>

    </div>
  );
};



const VisionPoint = ({ children }) => {
  return (
    <div className="flex items-center gap-3">

      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/15 text-white">
        <FiCheckCircle size={13} />
      </span>

      <span className="text-sm font-medium text-white/80">
        {children}
      </span>

    </div>
  );
};

export default MissionVision;

