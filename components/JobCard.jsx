"use client";

import React from "react";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiBriefcase,
  FiMapPin,
  FiUser,
} from "react-icons/fi";

const JobCard = ({ job }) => {
  return (
    <article
      className="
        group relative flex h-full flex-col
        overflow-hidden
        border border-[#DEDACE]
        bg-[#FCFBF8]
        transition-all duration-300
        hover:-translate-y-1
        hover:border-[#2F6F5C]
        hover:shadow-[0_18px_45px_rgba(26,36,32,0.08)]
      "
    >
      {/* =========================================
          TOP ACCENT
      ========================================= */}
      <div className="h-[3px] w-full bg-[#2F6F5C]" />

      {/* =========================================
          HEADER
      ========================================= */}
      <div className="relative px-6 pt-6">
        <div className="flex items-start justify-between gap-4">
          {/* Icon */}
          <div
            className="
              flex h-11 w-11 shrink-0 items-center justify-center
              border border-[#D9E2DC]
              bg-[#F2F6F3]
              text-[#2F6F5C]
              transition-all duration-300
              group-hover:bg-[#2F6F5C]
              group-hover:text-white
            "
          >
            <FiBriefcase size={18} strokeWidth={1.7} />
          </div>

          {/* Job Type */}
          {job?.jobType && (
            <span
              className="
                mt-1 inline-flex items-center
                border border-[#D9E2DC]
                bg-[#F5F7F4]
                px-3 py-1.5
                jobs-sans text-[10px]
                font-semibold uppercase
                tracking-[0.14em]
                text-[#2F6F5C]
              "
            >
              {job.jobType.replace("_", " ")}
            </span>
          )}
        </div>

        {/* Category */}
        {job?.category && (
          <div className="mt-5">
            <span
              className="
                jobs-sans text-[10px]
                font-semibold uppercase
                tracking-[0.16em]
                text-[#9AA39D]
              "
            >
              {job.category}
            </span>
          </div>
        )}
      </div>

      {/* =========================================
          CONTENT
      ========================================= */}
      <div className="flex flex-1 flex-col px-6 pb-6 pt-3">
        {/* Title */}
        <h3
          className="
            jobs-serif
            line-clamp-2
            min-h-[3.4rem]
            text-[20px]
            leading-[1.3]
            text-[#1A2420]
            transition-colors duration-300
            group-hover:text-[#2F6F5C]
          "
        >
          {job?.title || "Untitled Position"}
        </h3>

        {/* Description */}
        {job?.description && (
          <p
            className="
              jobs-sans
              mt-3
              line-clamp-3
              text-[13px]
              leading-[1.75]
              text-[#6B7570]
            "
          >
            {job.description.trim()}
          </p>
        )}

        {/* Spacer */}
        <div className="flex-1" />

        {/* =========================================
            META
        ========================================= */}
        <div className="mt-6 space-y-3 border-t border-[#E4E1D8] pt-5">
          {/* Posted By */}
          <div className="flex items-center gap-2.5">
            <FiUser
              size={14}
              strokeWidth={1.7}
              className="shrink-0 text-[#2F6F5C]"
            />

            <p
              className="
                jobs-sans min-w-0 truncate
                text-[12.5px]
                text-[#5F6964]
              "
            >
              <span className="font-medium text-[#1A2420]">
                {job?.expertId?.fullname || "Hospital Team"}
              </span>

              {job?.expertId?.designation && (
                <span className="text-[#9AA39D]">
                  {" "}
                  · {job.expertId.designation}
                </span>
              )}
            </p>
          </div>

          {/* Location — automatically shown if API provides it */}
          {job?.location && (
            <div className="flex items-center gap-2.5">
              <FiMapPin
                size={14}
                strokeWidth={1.7}
                className="shrink-0 text-[#2F6F5C]"
              />

              <span className="jobs-sans text-[12.5px] text-[#6B7570]">
                {job.location}
              </span>
            </div>
          )}
        </div>

        {/* =========================================
            FOOTER
        ========================================= */}
        <div className="mt-5 flex items-center justify-between">
          <span
            className="
              jobs-sans text-[10px]
              uppercase tracking-[0.15em]
              text-[#A1A9A4]
            "
          >
            Professional Opportunity
          </span>

          <Link
            href={`/jobs/${job?.slug}`}
            className="
              jobs-sans
              inline-flex items-center gap-2
              text-[13px]
              font-semibold
              text-[#2F6F5C]
              transition-all duration-300
            "
          >
            <span className="relative">
              View role
              <span
                className="
                  absolute -bottom-1 left-0 h-px w-0
                  bg-[#2F6F5C]
                  transition-all duration-300
                  group-hover/read:w-full
                "
              />
            </span>

            <FiArrowUpRight
              size={14}
              className="
                transition-transform duration-300
                group-hover:translate-x-0.5
                group-hover:-translate-y-0.5
              "
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default JobCard;

