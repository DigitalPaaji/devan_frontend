"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "./utils";
import { FiArrowUpRight, FiBriefcase } from "react-icons/fi";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import JobCard from "./JobCard";

/* =========================================================
   FONTS + BASE STYLES (inject once)
   Same serif/sans pairing as the Articles section, so the
   two sections read as one editorial system.
========================================================= */
const JobStyles = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=Inter:wght@400;500;600&display=swap");

    .jobs-serif {
      font-family: "Source Serif 4", Georgia, serif;
    }
    .jobs-sans {
      font-family: "Inter", -apple-system, sans-serif;
    }

    @keyframes jobsFadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .jobs-fade-in {
      animation: jobsFadeIn 0.6s ease-out both;
    }

    @media (prefers-reduced-motion: reduce) {
      .jobs-fade-in {
        animation: none;
      }
    }
  `}</style>
);

const JobSection = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ==========================================================
     FETCH JOBS
  ========================================================== */
  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${base_url}/jobs/homepage`);

      const data = response.data;

      if (Array.isArray(data)) {
        setJobs(data);
      } else if (Array.isArray(data?.jobs)) {
        setJobs(data.jobs);
      } else if (Array.isArray(data?.data)) {
        setJobs(data.data);
      } else {
        setJobs([]);
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to load jobs");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* ==========================================================
     LOADING
  ========================================================== */
  if (loading) {
    return (
      <section className="w-full bg-[#F7F5F0] py-16 sm:py-20">
        <JobStyles />
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-md">
            <div className="h-8 w-48 animate-pulse rounded-sm bg-[#e7e3d8]" />
            <div className="mt-3 h-4 w-72 animate-pulse rounded-sm bg-[#e7e3d8]" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[330px] animate-pulse rounded-sm bg-[#eeece4]"
              />
            ))}
          </div>
        </div>
      </section>
    );
  }

  /* ==========================================================
     EMPTY
  ========================================================== */
  if (!jobs.length) {
    return (
      <section className="w-full bg-[#F7F5F0] py-16 sm:py-20">
        <JobStyles />
        <div className="container mx-auto px-4">
          <div className="flex min-h-[240px] flex-col items-center justify-center border border-[#DEDACE] text-center">
            <FiBriefcase size={26} className="text-[#2F6F5C]" />
            <h3 className="jobs-serif mt-4 text-xl text-[#1A2420]">
              No job openings
            </h3>
            <p className="jobs-sans mt-2 text-sm text-[#6B7570]">
              There are no opportunities listed right now. Check back soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ==========================================================
     MAIN
  ========================================================== */
  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24">
      <JobStyles />

      <div className="container mx-auto px-4">
        {/* ---------------- HEADER ---------------- */}
        <div className="mb-10 flex flex-col gap-6 border-b border-[#DEDACE] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="jobs-serif text-3xl leading-tight text-[#1A2420] sm:text-4xl">
              Find your next role
            </h2>
            <p className="jobs-sans mt-3 text-[15px] leading-relaxed text-[#6B7570]">
              Explore opportunities to build your career while making a
              meaningful difference in healthcare.
            </p>
          </div>

          <Link
            href="/jobs"
            className="jobs-sans group inline-flex shrink-0 items-center gap-1.5 border-b border-[#1A2420] pb-0.5 text-sm font-medium text-[#1A2420] transition-colors hover:border-[#2F6F5C] hover:text-[#2F6F5C]"
          >
            View all jobs
            <FiArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* ---------------- SWIPER ---------------- */}
        <div className="overflow-hidden pb-2">
          <Swiper
            modules={[Autoplay]}
            loop={jobs.length > 3}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            spaceBetween={28}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {jobs.map((job, i) => (
              <SwiperSlide key={job._id}>
                <div
                  className="jobs-fade-in"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <JobCard job={job} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default JobSection;