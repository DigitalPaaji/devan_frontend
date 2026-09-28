"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url, img_url } from "./utils";
import {
  FiArrowRight,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiExternalLink,
  FiHelpCircle,
  FiUser,
} from "react-icons/fi";
import Link from "next/link";
import { useSelector } from "react-redux";

const WeeklyQuestion = () => {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(null);
  const user = useSelector((state) => state.user);

  const fetchQuestion = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${base_url}/weeklyquestion/get-all`);
      const data = response.data;

      if (data.success) {
        setQuestionData(data);
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to load weekly question");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuestion();
  }, []);

  useEffect(() => {
    if (!questionData?.question?.submissionDeadline) return;

    const deadline = new Date(questionData.question.submissionDeadline).getTime();

    const updateTimer = () => {
      const difference = deadline - Date.now();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          expired: true,
        });
        return;
      }

      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / (1000 * 60)) % 60),
        seconds: Math.floor((difference / 1000) % 60),
        expired: false,
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [questionData]);

 
  if (loading) {
    return (
      <section className="bg-white px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24">
        <div className="grid animate-pulse grid-cols-1 gap-8 lg:grid-cols-3">
          <div className="h-[400px] rounded-sm bg-[#A7ADB3]/5 lg:col-span-2 border border-[#A7ADB3]/20" />
          <div className="h-[400px] rounded-sm bg-[#A7ADB3]/5 border border-[#A7ADB3]/20" />
        </div>
      </section>
    );
  }

  /* ==========================================================
     NO QUESTION (CLASSY EMPTY STATE)
  ========================================================== */
  if (!questionData?.question) {
    return (
      <section className="bg-white px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24">
        <div className="flex min-h-[400px] flex-col items-center justify-center border border-[#A7ADB3]/30 bg-white px-6 text-center hover:border-[#0D2B45]/30 transition-colors duration-500">
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#0D2B45]/5">
            <FiHelpCircle className="text-2xl text-[#0D2B45]" />
          </div>
          <h2 className="text-2xl font-light text-[#0D2B45] tracking-wide">
            Challenge <span className="font-medium italic">Unavailable</span>
          </h2>
          <p className="mt-3 max-w-md text-sm font-light leading-relaxed text-[#0D2B45]/60">
            There is currently no active weekly challenge. Please check back soon as our experts prepare the next module.
          </p>
        </div>
      </section>
    );
  }

  /* ==========================================================
     DATA
  ========================================================== */
  const { question, hasAnswered } = questionData;
  const expert = question?.expertId;
  const deadline = new Date(question.submissionDeadline);
  const startDate = new Date(question.startDate);
  const isDeadlinePassed = deadline.getTime() < Date.now();

  const formatDate = (date) => {
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  /* ==========================================================
     UI
  ========================================================== */
  return (
    <section className="bg-white text-[#0D2B45] px-4 sm:px-6 lg:px-16 xl:px-24 2xl:px-52 py-16 lg:py-24">
      
      {/* HEADER SECTION (DEVAN PHILOSOPHY STYLE) */}
      <div className="max-w-3xl mb-16">
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-mono text-[#A7ADB3]">—</span>
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D2B45] pb-1">
            Weekly Challenge
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-light mb-4 text-[#0D2B45]">
          Question of the <span className="relative italic font-medium text-[#0D2B45]">Week</span>
        </h2>
        <p className="text-lg text-[#0D2B45]/70 italic font-light border-l-4 border-[#0D2B45] pl-6">
          Test your expertise and learn directly from industry leaders.
        </p>
      </div>

      {/* MAIN CARD - REMOVED HEAVY SHADOWS FOR PREMIUM FLAT LOOK */}
      <div className="relative border border-[#A7ADB3]/30 hover:border-[#0D2B45] transition-all duration-700 bg-white group p-8 sm:p-12">
        
        {/* EXPERT & STATUS HEADER */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-[#A7ADB3]/20 pb-8 mb-8">
          
          {/* Profile */}
          <div className="flex items-center gap-5">
            <div className="relative shrink-0">
              {expert?.image ? (
                <img
                  src={`${img_url}${expert.image}`}
                  alt={expert?.fullname || "Expert"}
                  className="h-14 w-14 rounded-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                />
              ) : (
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0D2B45]/5 border border-[#0D2B45]/10">
                  <FiUser className="text-xl text-[#0D2B45]/60" />
                </div>
              )}
            </div>

            <div className="min-w-0">
              <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#A7ADB3]">
                Authored By
              </p>
              <h3 className="text-lg font-medium text-[#0D2B45] tracking-wide mt-0.5">
                {expert?.fullname}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-wider font-semibold text-[#0D2B45]/50 mt-1">
                {expert?.designation && <span>{expert.designation}</span>}
                {expert?.designation && expert?.qualification && (
                  <span className="text-[#A7ADB3]">|</span>
                )}
                {expert?.qualification && <span>{expert.qualification}</span>}
              </div>
            </div>
          </div>

          {/* Status Pills - Replaced Semantic Colors with Classy Monochromes */}
          <div>
            {hasAnswered ? (
              <span className="inline-flex items-center gap-2 border border-[#0D2B45] px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#0D2B45]">
                <FiCheckCircle size={12} /> Answered
              </span>
            ) : isDeadlinePassed ? (
              <span className="inline-flex items-center gap-2 border border-[#A7ADB3] px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-[#A7ADB3]">
                <FiClock size={12} /> Closed
              </span>
            ) : (
              <span className="inline-flex items-center gap-2 bg-[#0D2B45] px-5 py-2 text-[10px] font-bold uppercase tracking-widest text-white shadow-md">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                Active
              </span>
            )}
          </div>
        </div>

        {/* QUESTION CONTENT */}
        <div className="mb-12">
          <h2 className="max-w-4xl text-2xl sm:text-3xl lg:text-4xl font-light leading-snug text-[#0D2B45]">
            "{question?.question}"
          </h2>

          {question?.referenceImages && (
            <Link
              href={`${img_url}${question.referenceImages}`}
              target="_blank"
              className="mt-8 inline-flex items-center gap-3 border-b border-[#0D2B45]/30 pb-1 text-xs font-bold uppercase tracking-widest text-[#0D2B45] transition-all hover:border-[#0D2B45] group/link"
            >
              View Reference Material
              <FiExternalLink size={14} className="group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </Link>
          )}
        </div>

        {/* DATES & TIMER LAYOUT - EXTREMELY CLEAN */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-10 border-t border-[#A7ADB3]/20 pt-8 mt-8">
          
          {/* Dates */}
          <div className="flex gap-12">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7ADB3] mb-2">
                Initiated
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-[#0D2B45]">
                <FiCalendar className="text-[#A7ADB3]" /> {formatDate(startDate)}
              </div>
            </div>
            <div>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7ADB3] mb-2">
                Conclusion
              </p>
              <div className="flex items-center gap-2 text-sm font-medium text-[#0D2B45]">
                <FiClock className="text-[#A7ADB3]" /> {formatDate(deadline)}
              </div>
            </div>
          </div>

          {/* Timer & Submit */}
          <div className="flex flex-col sm:flex-row items-center gap-6">
            
            {!isDeadlinePassed && timeLeft && (
              <div className="flex flex-col items-end mr-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#A7ADB3] mb-2">
                  Time Remaining
                </p>
                <div className="flex items-center gap-2 text-sm font-mono text-[#0D2B45]">
                  <span className="font-medium">{String(timeLeft.days).padStart(2, "0")}D</span>
                  <span className="text-[#A7ADB3] font-light">/</span>
                  <span className="font-medium">{String(timeLeft.hours).padStart(2, "0")}H</span>
                  <span className="text-[#A7ADB3] font-light">/</span>
                  <span className="font-medium">{String(timeLeft.minutes).padStart(2, "0")}M</span>
                  <span className="text-[#A7ADB3] font-light">/</span>
                  <span className="font-bold">{String(timeLeft.seconds).padStart(2, "0")}S</span>
                </div>
              </div>
            )}

            {/* ACTION BUTTON */}
            {!hasAnswered && !isDeadlinePassed ? (
              <Link
                href={user.isUser ? `/weekly-question` : "/login"}
                className="group/submit relative inline-flex w-full sm:w-auto items-center justify-center gap-4 bg-[#0D2B45] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-white transition-all duration-500 hover:bg-[#0a2238]"
              >
                Submit Response
                <FiArrowRight size={16} className="transition-transform duration-500 group-hover/submit:translate-x-2" />
                <div className="absolute inset-0 border border-[#0D2B45] scale-[1.03] opacity-0 group-hover/submit:scale-100 group-hover/submit:opacity-100 transition-all duration-500 pointer-events-none" />
              </Link>
            ) : hasAnswered ? (
              <div className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-[#0D2B45] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#0D2B45]">
                <FiCheckCircle size={14} /> Submission Received
              </div>
            ) : (
              <div className="inline-flex w-full sm:w-auto items-center justify-center gap-3 border border-[#A7ADB3] px-8 py-4 text-[11px] font-bold uppercase tracking-[0.2em] text-[#A7ADB3]">
                <FiClock size={14} /> Challenge Concluded
              </div>
            )}
          </div>
        </div>

        {/* Minimalist corner accents mimicking the Devan UI hover aesthetic */}
        <div className="absolute top-0 left-0 w-0 h-0 border-t border-l border-transparent group-hover:border-[#0D2B45] transition-all duration-700" />
        <div className="absolute bottom-0 right-0 w-0 h-0 border-b border-r border-transparent group-hover:border-[#0D2B45] transition-all duration-700" />
      </div>
    </section>
  );
};

export default WeeklyQuestion;