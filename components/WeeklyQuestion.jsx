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
  FiStar,
  FiUser,
  FiAward,
} from "react-icons/fi";
import Link from "next/link";

const WeeklyQuestion = () => {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [timeLeft, setTimeLeft] = useState(null);


  const fetchQuestion = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${base_url}/weeklyquestion/get-all`
      );

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

  /* ==========================================================
     COUNTDOWN
  ========================================================== */

  useEffect(() => {
    if (!questionData?.question?.submissionDeadline) return;

    const deadline = new Date(
      questionData.question.submissionDeadline
    ).getTime();

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
        days: Math.floor(
          difference / (1000 * 60 * 60 * 24)
        ),

        hours: Math.floor(
          (difference / (1000 * 60 * 60)) % 24
        ),

        minutes: Math.floor(
          (difference / (1000 * 60)) % 60
        ),

        seconds: Math.floor(
          (difference / 1000) % 60
        ),

        expired: false,
      });
    };

    updateTimer();

    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [questionData]);

  /* ==========================================================
     LOADING
  ========================================================== */

  if (loading) {
    return (
      <section className="container mx-auto w-full px-4 py-8">
        <div className="grid animate-pulse grid-cols-1 gap-5 lg:grid-cols-3">

          <div className="h-[430px] rounded-3xl bg-slate-100 lg:col-span-2" />

          <div className="h-[430px] rounded-3xl bg-slate-100" />

        </div>
      </section>
    );
  }

  /* ==========================================================
     NO QUESTION
  ========================================================== */

  if (!questionData?.question) {
    return (
      <section className="container mx-auto w-full px-4 py-8">

        <div className="flex min-h-[350px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50 px-6 text-center">

          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-sm">

            <FiHelpCircle
              className="text-3xl text-slate-400"
            />

          </div>

          <h2 className="text-xl font-bold text-slate-800">
            No Weekly Question
          </h2>

          <p className="mt-2 max-w-md text-sm leading-6 text-slate-500">
            There is no active weekly question available
            right now. Check back soon for the next challenge.
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

  const deadline = new Date(
    question.submissionDeadline
  );

  const startDate = new Date(
    question.startDate
  );

  const isDeadlinePassed =
    deadline.getTime() < Date.now();

  const formatDate = (date) => {
    return date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  /* ==========================================================
     UI
  ========================================================== */

  return (
    <section className="container mx-auto w-full px-4 py-6 sm:py-8">

      {/* ======================================================
          HEADER
      ====================================================== */}

      <div className="mb-5">

        <div className="mb-2 flex items-center gap-2">

          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0D2B45] text-white">
            <FiHelpCircle size={16} />
          </span>

          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#0D2B45]">
            Weekly Challenge
          </span>

        </div>

        <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
          Question of the Week
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Share your knowledge and learn from our experts.
        </p>

      </div>

      {/* ======================================================
          MAIN GRID
      ====================================================== */}

      <div className="grid grid-cols-1 gap-5 lg:grid-cols-3">

        {/* ====================================================
            QUESTION CARD
        ==================================================== */}

        <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-lg lg:col-span-2">

          {/* Accent */}

          <div className="h-1 w-full bg-[#0D2B45]" />

          <div className="p-5 sm:p-6 lg:p-7">

            {/* =================================================
                EXPERT
            ================================================= */}

            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

              {/* Expert Profile */}

              <div className="flex items-center gap-3">

                <div className="relative shrink-0">

                  {expert?.image ? (
                    <img
                      src={`${img_url}${expert.image}`}
                      alt={
                        expert?.fullname ||
                        "Expert"
                      }
                      className="h-14 w-14 rounded-2xl object-cover ring-4 ring-[#0D2B45]/10"
                    />
                  ) : (
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0D2B45]/10">
                      <FiUser
                        className="text-xl text-[#0D2B45]"
                      />
                    </div>
                  )}

                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white ring-2 ring-white">

                    <FiCheckCircle size={11} />

                  </span>

                </div>

                {/* Expert Details */}

                <div className="min-w-0">

                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Question by
                  </p>

                  <h3 className="truncate text-base font-bold text-slate-800">
                    {expert?.fullname}
                  </h3>

                  <div className="flex flex-wrap gap-1.5 text-xs text-slate-500">

                    {expert?.designation && (
                      <span>
                        {expert.designation}
                      </span>
                    )}

                    {expert?.designation &&
                      expert?.qualification && (
                        <span className="text-slate-300">
                          •
                        </span>
                      )}

                    {expert?.qualification && (
                      <span>
                        {expert.qualification}
                      </span>
                    )}

                  </div>

                </div>

              </div>

              {/* Status */}

              {hasAnswered ? (

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600">

                  <FiCheckCircle />

                  Answered

                </span>

              ) : isDeadlinePassed ? (

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-500">

                  <FiClock />

                  Closed

                </span>

              ) : (

                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-[#0D2B45]/10 px-3 py-1.5 text-xs font-semibold text-[#0D2B45]">

                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#0D2B45]" />

                  Active

                </span>

              )}

            </div>

            {/* Divider */}

            <div className="my-5 h-px bg-slate-100" />

            {/* =================================================
                QUESTION
            ================================================= */}

            <div>

              <div className="mb-2 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0D2B45]">

                <FiHelpCircle size={13} />

                Weekly Question

              </div>

              <h2 className="max-w-3xl text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl lg:text-3xl">
                {question?.question}
              </h2>

            </div>

            {/* =================================================
                REFERENCE
            ================================================= */}

            {question?.referenceImages && (

              <Link
                href={`${img_url}${question.referenceImages}`}
                target="_blank"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-[#0D2B45]/20 bg-[#0D2B45]/5 px-3 py-2 text-xs font-semibold text-[#8b6dd9] transition hover:bg-[#0D2B45]/10"
              >

                <FiExternalLink size={14} />

                View Question Reference

              </Link>

            )}

            {/* =================================================
                DATES
            ================================================= */}

            <div className="mt-5 grid grid-cols-2 gap-3">

              {/* Start Date */}

              <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#0D2B45] shadow-sm">

                  <FiCalendar size={16} />

                </div>

                <div className="min-w-0">

                  <p className="text-[10px] text-slate-400">
                    Started
                  </p>

                  <p className="truncate text-xs font-semibold text-slate-700">
                    {formatDate(startDate)}
                  </p>

                </div>

              </div>

              {/* Deadline */}

              <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50 p-3">

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#0D2B45] shadow-sm">

                  <FiClock size={16} />

                </div>

                <div className="min-w-0">

                  <p className="text-[10px] text-slate-400">
                    Deadline
                  </p>

                  <p
                    className={`truncate text-xs font-semibold ${
                      isDeadlinePassed
                        ? "text-red-500"
                        : "text-slate-700"
                    }`}
                  >
                    {formatDate(deadline)}
                  </p>

                </div>

              </div>

            </div>

            {/* =================================================
                TIMER + SUBMIT
            ================================================= */}

            <div className="mt-5 flex flex-col gap-3 border-t border-slate-100 pt-5 sm:flex-row sm:items-center sm:justify-between">

              {/* TIMER */}

              {!isDeadlinePassed &&
                timeLeft && (

                  <div className="flex items-center gap-2">

                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0D2B45]/10 text-[#0D2B45]">

                      <FiClock size={14} />

                    </div>

                    <div>

                      <p className="text-[9px] font-medium uppercase tracking-wider text-slate-400">
                        Time left
                      </p>

                      <div className="flex items-center gap-1 text-xs font-bold text-slate-700">

                        <span>
                          {String(
                            timeLeft.days
                          ).padStart(2, "0")}
                          d
                        </span>

                        <span className="text-slate-300">
                          :
                        </span>

                        <span>
                          {String(
                            timeLeft.hours
                          ).padStart(2, "0")}
                          h
                        </span>

                        <span className="text-slate-300">
                          :
                        </span>

                        <span>
                          {String(
                            timeLeft.minutes
                          ).padStart(2, "0")}
                          m
                        </span>

                        <span className="text-slate-300">
                          :
                        </span>

                        <span className="text-[#0D2B45]">
                          {String(
                            timeLeft.seconds
                          ).padStart(2, "0")}
                          s
                        </span>

                      </div>

                    </div>

                  </div>

                )}

              {/* SUBMIT BUTTON */}

              {!hasAnswered &&
              !isDeadlinePassed ? (

                <Link
                  href={`/weekly-question/${question._id}`}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-[#0D2B45] px-5 py-2.5 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#9676e8] hover:shadow-md sm:w-auto"
                >

                  Submit Your Answer

                  <FiArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />

                </Link>

              ) : hasAnswered ? (

                <div className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-5 py-2.5 text-xs font-semibold text-emerald-600">

                  <FiCheckCircle size={14} />

                  Answer Submitted

                </div>

              ) : (

                <div className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-5 py-2.5 text-xs font-semibold text-slate-400">

                  <FiClock size={14} />

                  Challenge Closed

                </div>

              )}

            </div>

          </div>
        </div>

        {/* ====================================================
            CHAMPION CARD
        ==================================================== */}

        <div className="relative overflow-hidden rounded-3xl bg-[#0D2B45] text-white shadow-sm">

          {/* Decorative circles */}

          <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-white/15" />

          <div className="absolute -bottom-20 -left-20 h-48 w-48 rounded-full border border-white/15" />

          <div className="relative p-6">

            {/* Header */}

            <div className="flex items-center justify-between">

              <div>

                <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-white/60">
                  Recognition
                </p>

                <h2 className="mt-1 text-xl font-bold">
                  Champion
                </h2>

              </div>

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">

                <FiAward size={20} />

              </div>

            </div>

            {/* Champion */}

            <div className="py-9 text-center">

              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-white/10">

                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-[#0D2B45] shadow-lg">

                  <FiAward className="text-2xl" />

                </div>

              </div>

              <div className="mx-auto mb-3 flex w-fit items-center gap-1.5 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-semibold">

                <FiStar
                  className="fill-current"
                  size={12}
                />

                Weekly Champion

              </div>

              <h3 className="text-xl font-bold">
                Be the next Champion
              </h3>

              <p className="mx-auto mt-2 max-w-xs text-xs leading-5 text-white/70">
                Give your best answer and get recognized
                as this week's top contributor.
              </p>

            </div>

            {/* Bottom */}

            <div className="border-t border-white/15 pt-4">

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">

                  <FiAward size={16} />

                </div>

                <div>

                  <p className="text-[10px] text-white/50">
                    Your goal
                  </p>

                  <p className="text-xs font-semibold">
                    Answer • Learn • Win
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default WeeklyQuestion;

