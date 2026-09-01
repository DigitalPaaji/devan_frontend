"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url } from "./utils";
import {
  FiArrowRight,
  FiBriefcase,
  FiChevronLeft,
  FiChevronRight,
  FiLoader,
} from "react-icons/fi";

import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";

import JobCard from "./JobCard";

const JobSection = () => {

  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ==========================================================
     FETCH JOBS
  ========================================================== */

  const fetchData = async () => {

    try {

      setLoading(true);

      const response = await axios.get(
        `${base_url}/jobs/homepage`
      );

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



  if (loading) {
    return (
      <section className="w-full bg-slate-50 py-14 sm:py-20">

        <div className="container mx-auto px-4">

          <div className="mb-8">

            <div className="h-8 w-48 animate-pulse rounded-lg bg-slate-200" />

            <div className="mt-3 h-4 w-80 max-w-full animate-pulse rounded bg-slate-200" />

          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[330px] animate-pulse rounded-3xl bg-white"
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
      <section className="w-full bg-slate-50 py-14 sm:py-20">

        <div className="container mx-auto px-4">

          <div className="flex min-h-[280px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white px-6 text-center">

            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153497]/10 text-[#153497]">

              <FiBriefcase size={24} />

            </div>

            <h3 className="text-xl font-bold text-slate-800">
              No Job Openings
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
              There are no job opportunities available at the
              moment. Please check back later.
            </p>

          </div>

        </div>

      </section>
    );
  }

  /* ==========================================================
     UI
  ========================================================== */

  return (
    <section className="w-full bg-slate-50 py-14 sm:py-20 lg:py-24">

      <div className="container mx-auto px-4">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="mb-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">

          <div>

            <div className="mb-3 flex items-center gap-2">

              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#153497]/10 text-[#153497]">

                <FiBriefcase size={17} />

              </span>

              <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#100da3]">
                Career Opportunities
              </span>

            </div>

            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Join Our Team
            </h2>

            <p className="mt-2 max-w-xl text-sm leading-6 text-slate-500 sm:text-base">
              Explore opportunities to build your career while
              making a meaningful difference in healthcare.
            </p>

          </div>

          {/* View All */}

          <Link
            href="/jobs"
            className="group inline-flex w-fit items-center gap-2 text-sm font-semibold text-[#100da3]"
          >
            View all jobs

            <FiArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />

          </Link>

        </div>

       

        <div className="relative overflow-hidden">

          <Swiper
            modules={[Autoplay]}
            loop={jobs.length > 3}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },

              768: {
                slidesPerView: 2,
              },

              1024: {
                slidesPerView: 3,
              },
            }}
            className=""
          >

            {jobs.map((job) => (

              <SwiperSlide
                key={job._id}
                className=""
              >

                <JobCard job={job} />

              </SwiperSlide>

            ))}

          </Swiper>

        </div>

      </div>

    </section>
  );
};

export default JobSection;

