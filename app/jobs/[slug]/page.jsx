"use client";

import { base_url, img_url } from "@/components/utils";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
axios.defaults.withCredentials=true;

import {
  FiArrowLeft,
  FiBriefcase,
  FiCalendar,
  FiCheckCircle,
  FiChevronRight,
  FiClock,
  FiExternalLink,
  FiEye,
  FiGlobe,
  FiMapPin,
  FiShare2,
  FiUser,
  FiUsers,
} from "react-icons/fi";

import {
  MdOutlineWorkOutline,
  MdOutlineEmail,
} from "react-icons/md";

import { LuGraduationCap, LuBadgeCheck } from "react-icons/lu";

import Link from "next/link";
import { useSelector } from "react-redux";

/* =========================================================
   HELPERS
========================================================= */

const formatLabel = (value = "") => {
  if (!value) return "";

  return value
    .toString()
    .replace(/_/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const formatDate = (date) => {
  if (!date) return "";

  return new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

const formatExperience = (experience) => {
  if (!experience) return "Not specified";

  const min = Number(experience.min || 0);
  const max = Number(experience.max || 0);

  if (min === 0 && max === 0) {
    return "Fresher / Entry Level";
  }

  if (min === max) {
    return `${min} ${min === 1 ? "Year" : "Years"}`;
  }

  return `${min} - ${max} Years`;
};

const formatSalary = (salary) => {
  if (!salary) return "Not specified";

  const currency = salary.currency || "INR";

  if (salary.amount) {
    return `${currency} ${Number(
      salary.amount
    ).toLocaleString("en-IN")}`;
  }

  if (salary.min || salary.max) {
    const min = salary.min
      ? Number(salary.min).toLocaleString("en-IN")
      : "";

    const max = salary.max
      ? Number(salary.max).toLocaleString("en-IN")
      : "";

    if (min && max) {
      return `${currency} ${min} - ${max}`;
    }

    return `${currency} ${min || max}`;
  }

  return "Salary not specified";
};

/* =========================================================
   PAGE
========================================================= */

const Page = () => {
  const { slug } = useParams();
  const router = useRouter();
 const user = useSelector(state=>state.user)
 const [job, setJob] = useState(null);
 const [loading, setLoading] = useState(true);
 const [copied, setCopied] = useState(false);
 

  /* =========================================================
     IMAGE
  ========================================================= */

  const getImage = (path) => {
    if (!path) return "";

    if (path.startsWith("http")) {
      return path;
    }

    return `${img_url}${path}`;
  };

  /* =========================================================
     FETCH JOB
  ========================================================= */

  const fetchJob = useCallback(async () => {
    if (!slug) return;

    setLoading(true);

    try {
      const response = await axios.get(
        `${base_url}/jobs/get/${slug}`
      );

      const data = response.data;

      if (data?.success && data?.job) {
        setJob(data.job);
      } else {
        toast.error("Job not found");
        setJob(null);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to load job"
      );

      setJob(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchJob();
  }, [fetchJob]);

  /* =========================================================
     SHARE
  ========================================================= */

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: job?.title || "Job Opportunity",
          text: `Check out this job opportunity: ${
            job?.title || ""
          }`,
          url,
        });

        return;
      }

      await navigator.clipboard.writeText(url);

      setCopied(true);

      toast.success("Job link copied");

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            <div className="animate-pulse lg:col-span-2">

              <div className="mb-8 h-5 w-28 rounded bg-gray-200" />

              <div className="mb-5 h-4 w-32 rounded bg-gray-200" />

              <div className="mb-4 h-12 w-4/5 rounded bg-gray-200" />

              <div className="mb-8 h-5 w-2/3 rounded bg-gray-200" />

              <div className="mb-8 grid grid-cols-2 gap-4">
                <div className="h-20 rounded bg-gray-100" />
                <div className="h-20 rounded bg-gray-100" />
              </div>

              <div className="mb-4 h-7 w-48 rounded bg-gray-200" />

              <div className="mb-3 h-4 w-full rounded bg-gray-100" />
              <div className="mb-3 h-4 w-full rounded bg-gray-100" />
              <div className="mb-3 h-4 w-5/6 rounded bg-gray-100" />
              <div className="mb-3 h-4 w-4/6 rounded bg-gray-100" />
            </div>

            <div className="animate-pulse">
              <div className="h-[500px] rounded bg-gray-100" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  /* =========================================================
     NOT FOUND
  ========================================================= */

  if (!job) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-24 text-center">

          <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center border border-gray-200">
            <FiBriefcase
              size={26}
              className="text-gray-400"
            />
          </div>

          <h1 className="font-serif text-3xl font-bold text-gray-900">
            Job Not Found
          </h1>

          <p className="mt-3 text-sm text-gray-500">
            The job you are looking for may have been removed
            or is no longer available.
          </p>

          <button
            onClick={() => router.push("/jobs")}
            className="mt-7 inline-flex items-center gap-2 bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            <FiArrowLeft />
            Back to Jobs
          </button>

        </div>
      </div>
    );
  }

  const skills =
    job.skills?.filter(
      (skill) => skill && skill.trim()
    ) || [];

  const responsibilities =
    job.responsibilities?.filter(
      (item) => item && item.trim()
    ) || [];

  const qualifications =
    job.qualifications?.filter(
      (item) => item && item.trim()
    ) || [];





const handelApply = async(id)=>{
  try {
    setLoading()
    if(!user.isUser){
      router.push("/login")
    }
    if(!user?.info?.resume){
      toast.warn("Update resume")
      router.push("/profile/update")
      return
    }

const response = await axios.put(`${base_url}/jobs/applyjob/${id}`)
const data = await response.data;
if(data.success){
  toast.success(data.message)
  location.reload()
}else{
  toast.error(data.message)
}

} catch (error) {
    toast.error(error?.response?.data?.message)
    
  }
}


  return (
    <div className="min-h-screen bg-white">

      {/* =====================================================
          PAGE
      ===================================================== */}

      <div className="container mx-auto px-4 pt-10 pb-10 lg:pb-14">

        {/* =====================================================
            BREADCRUMB
        ===================================================== */}

        <div className="mb-8 flex flex-wrap items-center gap-2 text-xs text-gray-400">

          <button
            onClick={() => router.push("/jobs")}
            className="flex items-center gap-1 transition hover:text-green-600"
          >
            Jobs
          </button>

          <FiChevronRight size={12} />

          <span className="text-gray-600">
            {job.category || "Job"}
          </span>

          <FiChevronRight size={12} />

          <span className="max-w-[220px] truncate text-gray-400">
            {job.title}
          </span>

        </div>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

          {/* ===================================================
              MAIN CONTENT
          =================================================== */}

          <main className="lg:col-span-2">

            {/* =================================================
                BACK
            ================================================= */}

            <button
              onClick={() => router.push("/jobs")}
              className="mb-7 inline-flex items-center gap-2 font-serif text-sm text-gray-500 transition hover:text-green-600"
            >
              <FiArrowLeft />
              Back to all jobs
            </button>

            {/* =================================================
                HERO
            ================================================= */}

            <div className="border-b border-gray-200 pb-8">

              {/* CATEGORY */}

              <div className="mb-4 flex flex-wrap items-center gap-2">

                {job.category && (
                  <span className="bg-green-600 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                    {job.category}
                  </span>
                )}

                {job.isFeatugreen && (
                  <span className="border border-green-200 bg-green-50 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-green-600">
                    Featugreen
                  </span>
                )}

                {job.isUrgent && (
                  <span className="border border-gray-300 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-gray-700">
                    Urgent Hiring
                  </span>
                )}

              </div>

              {/* TITLE */}

              <h1 className="max-w-4xl font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-5xl">
                {job.title}
              </h1>

              {/* COMPANY / EXPERT */}

              {job.expertId?.fullname && (
                <div className="mt-5 flex items-center gap-3">

                  <div className="h-10 w-10 overflow-hidden rounded-full border border-gray-200">

                    {job.expertId.image ? (
                      <img
                        src={getImage(
                          job.expertId.image
                        )}
                        alt={
                          job.expertId.fullname
                        }
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-50">
                        <FiUser
                          className="text-gray-400"
                          size={18}
                        />
                      </div>
                    )}

                  </div>

                  <div>

                    <p className="text-xs uppercase tracking-wider text-gray-400">
                      Posted by
                    </p>

                    <p className="font-serif text-sm font-semibold text-gray-900">
                      {job.expertId.fullname}
                    </p>

                  </div>

                </div>
              )}

              {/* META */}

              <div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">

                <span className="flex items-center gap-2">
                  <FiMapPin className="text-green-500" />
                  {job.location?.city ||
                  job.location?.state
                    ? [
                        job.location?.city,
                        job.location?.state,
                        job.location?.country,
                      ]
                        .filter(Boolean)
                        .join(", ")
                    : job.location?.country ||
                      "Location not specified"}
                </span>

                <span className="flex items-center gap-2">
                  <MdOutlineWorkOutline className="text-green-500" />
                  {formatLabel(job.jobType)}
                </span>

                <span className="flex items-center gap-2">
                  <FiGlobe className="text-green-500" />
                  {formatLabel(job.workMode)}
                </span>

              </div>

            </div>

            {/* =================================================
                JOB HIGHLIGHTS
            ================================================= */}

            <div className="grid grid-cols-2 border-b border-gray-200 sm:grid-cols-4">

              <div className="border-b border-gray-200 px-4 py-5 sm:border-b-0 sm:border-r">
                <FiBriefcase
                  className="mb-3 text-green-600"
                  size={20}
                />

                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Job Type
                </p>

                <p className="font-serif text-sm font-semibold text-gray-900">
                  {formatLabel(job.jobType)}
                </p>
              </div>

              <div className="border-b border-gray-200 px-4 py-5 sm:border-b-0 sm:border-r">
                <MdOutlineWorkOutline
                  className="mb-3 text-green-600"
                  size={20}
                />

                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Work Mode
                </p>

                <p className="font-serif text-sm font-semibold text-gray-900">
                  {formatLabel(job.workMode)}
                </p>
              </div>

              <div className="border-r border-gray-200 px-4 py-5">
                <LuGraduationCap
                  className="mb-3 text-green-600"
                  size={20}
                />

                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Experience
                </p>

                <p className="font-serif text-sm font-semibold text-gray-900">
                  {formatExperience(
                    job.experience
                  )}
                </p>
              </div>

              <div className="px-4 py-5">
                <FiUsers
                  className="mb-3 text-green-600"
                  size={20}
                />

                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Openings
                </p>

                <p className="font-serif text-sm font-semibold text-gray-900">
                  {job.openings || 1}
                </p>
              </div>

            </div>

            {/* =================================================
                ABOUT JOB
            ================================================= */}

            <section className="mt-10">

              <div className="mb-5 flex items-center gap-3 border-b border-gray-900 pb-3">

                <span className="h-6 w-1 bg-green-600" />

                <h2 className="font-serif text-2xl font-bold text-gray-900">
                  About the Position
                </h2>

              </div>

              <div
                className="
                  prose
                  max-w-none
                  font-serif
                  text-[16px]
                  leading-[1.8]
                  text-gray-700

                  prose-p:mb-5

                  prose-headings:font-serif
                  prose-headings:font-bold
                  prose-headings:text-gray-900

                  prose-h2:mt-8
                  prose-h2:mb-4

                  prose-h3:mt-7
                  prose-h3:mb-3

                  prose-ul:mb-5
                  prose-ol:mb-5

                  prose-li:mb-2

                  prose-a:text-green-600
                  prose-a:underline

                  prose-blockquote:border-green-600
                  prose-blockquote:italic
                "
                dangerouslySetInnerHTML={{
                  __html:
                    job.description ||
                    "<p>No description provided.</p>",
                }}
              />

            </section>

            {/* =================================================
                RESPONSIBILITIES
            ================================================= */}

            {responsibilities.length > 0 && (
              <section className="mt-12">

                <div className="mb-6 flex items-center gap-3 border-b border-gray-900 pb-3">

                  <span className="h-6 w-1 bg-green-600" />

                  <h2 className="font-serif text-2xl font-bold text-gray-900">
                    Responsibilities
                  </h2>

                </div>

                <div className="space-y-4">

                  {responsibilities.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4"
                      >

                        <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                          <FiCheckCircle
                            size={15}
                          />
                        </div>

                        <p className="font-serif text-[15px] leading-7 text-gray-700">
                          {item}
                        </p>

                      </div>
                    )
                  )}

                </div>

              </section>
            )}

            {/* =================================================
                QUALIFICATIONS
            ================================================= */}

            {qualifications.length > 0 && (
              <section className="mt-12">

                <div className="mb-6 flex items-center gap-3 border-b border-gray-900 pb-3">

                  <span className="h-6 w-1 bg-green-600" />

                  <h2 className="font-serif text-2xl font-bold text-gray-900">
                    Qualifications
                  </h2>

                </div>

                <div className="space-y-4">

                  {qualifications.map(
                    (item, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-4"
                      >

                        <div className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-green-50 text-green-600">
                          <LuBadgeCheck
                            size={15}
                          />
                        </div>

                        <p className="font-serif text-[15px] leading-7 text-gray-700">
                          {item}
                        </p>

                      </div>
                    )
                  )}

                </div>

              </section>
            )}

            {/* =================================================
                SKILLS
            ================================================= */}

            {skills.length > 0 && (
              <section className="mt-12">

                <div className="mb-5 flex items-center gap-3 border-b border-gray-900 pb-3">

                  <span className="h-6 w-1 bg-green-600" />

                  <h2 className="font-serif text-2xl font-bold text-gray-900">
                    Requigreen Skills
                  </h2>

                </div>

                <div className="flex flex-wrap gap-2">

                  {skills.map(
                    (skill, index) => (
                      <span
                        key={index}
                        className="border border-gray-200 bg-gray-50 px-4 py-2 font-serif text-xs font-medium text-gray-700 transition hover:border-green-400 hover:bg-green-50 hover:text-green-600"
                      >
                        {skill}
                      </span>
                    )
                  )}

                </div>

              </section>
            )}

            {/* =================================================
                JOB INFORMATION
            ================================================= */}

            <section className="mt-12 border-t border-gray-200 pt-8">

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center border border-gray-200 bg-gray-50">
                    <FiCalendar
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      Posted
                    </p>

                    <p className="font-serif text-sm font-semibold text-gray-900">
                      {formatDate(
                        job.createdAt
                      )}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center border border-gray-200 bg-gray-50">
                    <FiEye
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      Views
                    </p>

                    <p className="font-serif text-sm font-semibold text-gray-900">
                      {job.views || 0}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center border border-gray-200 bg-gray-50">
                    <FiUsers
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      Applications
                    </p>

                    <p className="font-serif text-sm font-semibold text-gray-900">
                      {job.applicationsCount ||
                        0}
                    </p>
                  </div>

                </div>

                <div className="flex items-center gap-4">

                  <div className="flex h-10 w-10 items-center justify-center border border-gray-200 bg-gray-50">
                    <FiClock
                      className="text-green-600"
                    />
                  </div>

                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      Updated
                    </p>

                    <p className="font-serif text-sm font-semibold text-gray-900">
                      {formatDate(
                        job.updatedAt
                      )}
                    </p>
                  </div>

                </div>

              </div>

            </section>

          </main>

          {/* ===================================================
              SIDEBAR
          =================================================== */}

          <aside>

            <div className="sticky top-24 space-y-7">

              {/* =================================================
                  APPLY CARD
              ================================================= */}

              <div className="border border-gray-200 bg-white">

                <div className="border-b border-gray-900 px-5 py-3">

                  <h3 className="font-serif text-lg font-bold text-gray-900">
                    Apply for this Position
                  </h3>

                </div>

                <div className="p-5">

                  <p className="font-serif text-sm leading-6 text-gray-500">
                    Take the next step in your professional
                    journey and apply for this opportunity.
                  </p>
{user?.info?.jobappled?.includes(job._id) ?  <button
                  
                    className="mt-5 cursor-not-allowed flex w-full items-center justify-center gap-2 bg-green-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                     Allready Apply
                    <FiChevronRight />
                  </button> :
 <button
                    onClick={() =>
                      handelApply(job._id)
                    }
                    className="mt-5 cursor-pointer flex w-full items-center justify-center gap-2 bg-green-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-green-700"
                  >
                    Apply Now
                    <FiChevronRight />
                  </button>
 }
                 

                  <button
                    onClick={handleShare}
                    className="mt-3 flex w-full items-center justify-center gap-2 border border-gray-300 px-5 py-3 text-sm font-semibold text-gray-700 transition hover:border-green-500 hover:text-green-600"
                  >
                    <FiShare2 />

                    {copied
                      ? "Link Copied"
                      : "Share Job"}
                  </button>

                </div>

              </div>

              {/* =================================================
                  JOB OVERVIEW
              ================================================= */}

              <div className="border border-gray-200 bg-white">

                <div className="border-b border-gray-900 px-5 py-3">

                  <h3 className="font-serif text-lg font-bold text-gray-900">
                    Job Overview
                  </h3>

                </div>

                <div className="divide-y divide-gray-100">

                  {/* SALARY */}

                  <div className="flex items-start gap-4 p-5">

                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-green-50 text-green-600">
                      ₹
                    </div>

                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        Salary
                      </p>

                      <p className="mt-1 font-serif text-sm font-semibold text-gray-900">
                        {formatSalary(
                          job.salary
                        )}
                      </p>

                      {job.salary?.period && (
                        <p className="mt-1 text-xs text-gray-400">
                          {formatLabel(
                            job.salary.period
                          )}
                        </p>
                      )}

                    </div>

                  </div>

                  {/* EXPERIENCE */}

                  <div className="flex items-start gap-4 p-5">

                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-green-50 text-green-600">
                      <LuGraduationCap
                        size={19}
                      />
                    </div>

                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        Experience
                      </p>

                      <p className="mt-1 font-serif text-sm font-semibold text-gray-900">
                        {formatExperience(
                          job.experience
                        )}
                      </p>

                    </div>

                  </div>

                  {/* JOB TYPE */}

                  <div className="flex items-start gap-4 p-5">

                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-green-50 text-green-600">
                      <FiBriefcase
                        size={18}
                      />
                    </div>

                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        Job Type
                      </p>

                      <p className="mt-1 font-serif text-sm font-semibold text-gray-900">
                        {formatLabel(
                          job.jobType
                        )}
                      </p>

                    </div>

                  </div>

                  {/* WORK MODE */}

                  <div className="flex items-start gap-4 p-5">

                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-green-50 text-green-600">
                      <FiGlobe
                        size={18}
                      />
                    </div>

                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        Work Mode
                      </p>

                      <p className="mt-1 font-serif text-sm font-semibold text-gray-900">
                        {formatLabel(
                          job.workMode
                        )}
                      </p>

                    </div>

                  </div>

                  {/* LOCATION */}

                  <div className="flex items-start gap-4 p-5">

                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center bg-green-50 text-green-600">
                      <FiMapPin
                        size={18}
                      />
                    </div>

                    <div>

                      <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                        Location
                      </p>

                      <p className="mt-1 font-serif text-sm font-semibold text-gray-900">
                        {job.location?.city ||
                        job.location?.state
                          ? [
                              job.location?.city,
                              job.location?.state,
                            ]
                              .filter(Boolean)
                              .join(", ")
                          : job.location
                              ?.country ||
                            "Not specified"}
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              {/* =================================================
                  EXPERT CARD
              ================================================= */}

              {job.expertId && (
                <div className="border border-gray-200 bg-white">

                  <div className="border-b border-gray-900 px-5 py-3">

                    <h3 className="font-serif text-lg font-bold text-gray-900">
                      About the Expert
                    </h3>

                  </div>

                  <div className="p-5">

                    <div className="flex items-center gap-4">

                      <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">

                        {job.expertId.image ? (
                          <img
                            src={getImage(
                              job.expertId
                                .image
                            )}
                            alt={
                              job.expertId
                                .fullname
                            }
                            className="h-full w-full object-cover"
                          />
                        ) : (
                          <div className="flex h-full w-full items-center justify-center bg-gray-50">
                            <FiUser
                              size={22}
                              className="text-gray-400"
                            />
                          </div>
                        )}

                      </div>

                      <div>

                        <h4 className="font-serif text-lg font-bold text-gray-900">
                          {
                            job.expertId
                              .fullname
                          }
                        </h4>

                        {job.expertId
                          .designation && (
                          <p className="mt-1 font-serif text-xs text-green-600">
                            {
                              job.expertId
                                .designation
                            }
                          </p>
                        )}

                      </div>

                    </div>

                    {job.expertId
                      .specialization && (
                      <div className="mt-5 border-t border-gray-100 pt-4">

                        <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                          Specialization
                        </p>

                        <p className="font-serif text-sm leading-6 text-gray-600">
                          {
                            job.expertId
                              .specialization
                          }
                        </p>

                      </div>
                    )}

                    {job.expertId.email && (
                      <Link
                        href={`mailto:${job.expertId.email}`}
                        className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4 text-xs text-gray-500 transition hover:text-green-600"
                      >
                        <MdOutlineEmail
                          size={17}
                        />

                        <span className="truncate">
                          {
                            job.expertId
                              .email
                          }
                        </span>
                      </Link>
                    )}

                  </div>

                </div>
              )}

              {/* =================================================
                  SHARE
              ================================================= */}

              <div className="border border-gray-200 bg-white p-6">

                <div className="flex items-end justify-between border-b border-gray-900 pb-3">

                  <div>

                    <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
                      Share Opportunity
                    </p>

                    <h3 className="font-serif text-xl font-bold text-gray-900">
                      Spread the word
                    </h3>

                  </div>

                  <FiShare2
                    className="text-gray-400"
                    size={18}
                  />

                </div>

                <div className="mt-5 flex gap-2">

                  <button
                    onClick={handleShare}
                    className="flex h-10 flex-1 items-center justify-center gap-2 border border-gray-200 bg-gray-50 text-xs font-medium text-gray-700 transition hover:border-green-500 hover:bg-green-600 hover:text-white"
                  >
                    <FiShare2 size={14} />

                    {copied
                      ? "Copied"
                      : "Share"}
                  </button>

                  <button
                    onClick={() =>
                      window.open(
                        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                          window.location.href
                        )}`,
                        "_blank"
                      )
                    }
                    className="flex h-10 w-10 items-center justify-center border border-gray-200 bg-gray-50 text-xs font-bold text-gray-700 transition hover:border-[#0A66C2] hover:bg-[#0A66C2] hover:text-white"
                    aria-label="Share on LinkedIn"
                  >
                    in
                  </button>

                </div>

                <p className="mt-4 text-xs leading-relaxed text-gray-500">
                  Know someone who would be a great fit?
                  Share this opportunity with them.
                </p>

              </div>

            </div>

          </aside>

        </div>

      </div>

      {/* =====================================================
          MOBILE APPLY BAR
      ===================================================== */}

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-gray-200 bg-white p-3 shadow-2xl lg:hidden">

        <div className="flex gap-2">

          <button
            onClick={handleShare}
            className="flex h-12 w-12 items-center justify-center border border-gray-300 bg-white text-gray-700"
          >
            <FiShare2 />
          </button>


{user?.info?.jobappled?.includes(job._id) ?<button
           
            className="flex cursor-not-allowed h-12 flex-1 items-center justify-center gap-2 bg-green-600 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Allready Apply
            <FiChevronRight />
          </button> :<button
            onClick={() =>
             handelApply(job._id)
            }
            className="flex cursor-pointer h-12 flex-1 items-center justify-center gap-2 bg-green-600 text-sm font-semibold text-white transition hover:bg-green-700"
          >
            Apply Now
            <FiChevronRight />
          </button>} 
          

        </div>

      </div>

    </div>
  );
};

export default Page;