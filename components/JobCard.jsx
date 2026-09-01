"use client";

import React from "react";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiClock,
  FiUser,
} from "react-icons/fi";

const JobCard = ({ job }) => {
  return (
    <div className="group h-full overflow-hidden rounded-3xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-[#153497]/30 hover:shadow-xl sm:p-6">

      {/* =====================================================
          TOP
      ===================================================== */}

      <div className="flex items-start justify-between gap-4">

        {/* Job Icon */}

        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#153497]/10 text-[#153497] transition-all duration-300 group-hover:bg-[#153497] group-hover:text-white">

          <FiBriefcase size={21} />

        </div>

        {/* Job Type */}

        <span className="rounded-full bg-slate-100 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-slate-500">
          {job?.jobType}
        </span>

      </div>

      {/* =====================================================
          JOB CONTENT
      ===================================================== */}

      <div className="mt-5">

        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#153497]">
          {job?.category}
        </p>

        <h3 className="line-clamp-2 text-xl font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#100da3]">
          {job?.title}
        </h3>

        {job?.description && (
          <p className="mt-3 line-clamp-2 text-sm leading-6 text-slate-500">
            {job.description}
          </p>
        )}

      </div>

      {/* =====================================================
          EXPERT
      ===================================================== */}

      <div className="mt-5 flex items-center gap-3 border-t border-slate-100 pt-5">

        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-100 text-slate-500">
          <FiUser size={15} />
        </div>

        <div className="min-w-0">

          <p className="text-[10px] text-slate-400">
            Posted by
          </p>

          <p className="truncate text-xs font-semibold text-slate-700">
            {job?.expertId?.fullname || "Hospital Team"}
          </p>

          {job?.expertId?.designation && (
            <p className="truncate text-[10px] text-slate-400">
              {job.expertId.designation}
            </p>
          )}

        </div>

      </div>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <div className="mt-5 flex items-center justify-between">

        <div className="flex items-center gap-1.5 text-xs text-slate-400">

          <FiClock size={13} />

          <span>
            {job?.jobType || "Job Opportunity"}
          </span>

        </div>

        <Link
          href={`/jobs/${job?.slug}`}
          className="group/btn inline-flex items-center gap-2 rounded-xl bg-[#153497] px-4 py-2.5 text-xs font-semibold text-white transition-all duration-300 hover:bg-[#9676e8] hover:shadow-md"
        >
          View Job

          <FiArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
          />

        </Link>

      </div>

    </div>
  );
};

export default JobCard;

