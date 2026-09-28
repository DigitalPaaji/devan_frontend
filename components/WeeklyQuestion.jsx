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

/* Brand tokens — keep every accent tied to one palette */
const BRAND = "#0D2B45";

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

    const deadline = new Date(
      questionData.question.submissionDeadline
    ).getTime();

    const updateTimer = () => {
      const difference = deadline - Date.now();

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, expired: true });
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

  /* ==========================================================
     LOADING
  ========================================================== */
  if (loading) {
    return (
      <section className="container mx-auto w-full px-4 py-8">
        <div className="mx-auto max-w-4xl animate-pulse">
          <div className="mb-6 h-4 w-40 rounded-full bg-slate-100" />
          <div className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm">
            <div className="h-1.5 w-full bg-slate-100" />
            <div className="space-y-6 p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <div className="h-14 w-14 rounded-2xl bg-slate-100" />
                <div className="space-y-2">
                  <div className="h-3 w-24 rounded bg-slate-100" />
                  <div className="h-4 w-36 rounded bg-slate-100" />
                </div>
              </div>
              <div className="h-px w-full bg-slate-100" />
              <div className="space-y-3">
                <div className="h-6 w-5/6 rounded bg-slate-100" />
                <div className="h-6 w-2/3 rounded bg-slate-100" />
              </div>
              <div className="h-40 w-full rounded-2xl bg-slate-100" />
            </div>
          </div>
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
        <div className="relative mx-auto flex min-h-[380px] max-w-2xl flex-col items-center justify-center overflow-hidden rounded-[28px] border border-slate-100 bg-white px-6 text-center shadow-sm">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full opacity-[0.06] blur-3xl"
            style={{ background: BRAND }}
          />
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-100">
            <FiHelpCircle className="text-2xl text-slate-400" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            No Weekly Question
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            There is no active weekly question available right now. Check
            back soon for the next challenge.
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

  const formatDate = (date) =>
    date.toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const timeUnits = timeLeft
    ? [
        { label: "Days", value: timeLeft.days },
        { label: "Hrs", value: timeLeft.hours },
        { label: "Min", value: timeLeft.minutes },
        { label: "Sec", value: timeLeft.seconds },
      ]
    : [];

  /* ==========================================================
     UI
  ========================================================== */
  return (
    <section className="container mx-auto w-full px-4 py-6 sm:py-10">
      <div className="mx-auto ">
        {/* ==================================================
            HEADER
        ================================================== */}
        <div className="mb-6 flex flex-col items-start gap-3 sm:mb-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span
                className="flex h-7 w-7 items-center justify-center rounded-lg text-white shadow-sm"
                style={{ background: BRAND }}
              >
                <FiHelpCircle size={14} />
              </span>
              <span
                className="text-[11px] font-bold uppercase tracking-[0.2em]"
                style={{ color: BRAND }}
              >
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
        </div>

      
        <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-white shadow-[0_1px_2px_rgba(15,23,42,0.04),0_18px_40px_-24px_rgba(15,23,42,0.18)] transition-shadow duration-300 hover:shadow-[0_1px_2px_rgba(15,23,42,0.06),0_28px_60px_-24px_rgba(15,23,42,0.24)]">
          {/* decorative glow */}
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full opacity-[0.05] blur-3xl"
            style={{ background: BRAND }}
          />

          {/* Accent bar */}
          <div
            className="h-1.5 w-full"
            style={{
              background: `linear-gradient(90deg, ${BRAND} 0%, #3a5a7a 100%)`,
            }}
          />

          <div className="relative p-5 sm:p-8 lg:p-9">
            {/* ============================================
                EXPERT + STATUS
            ============================================ */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3.5">
                <div className="relative shrink-0">
                  {expert?.image ? (
                    <img
                      src={`${img_url}${expert.image}`}
                      alt={expert?.fullname || "Expert"}
                      className="h-14 w-14 rounded-2xl object-cover shadow-sm"
                      style={{ boxShadow: `0 0 0 4px rgba(13,43,69,0.08)` }}
                    />
                  ) : (
                    <div
                      className="flex h-14 w-14 items-center justify-center rounded-2xl"
                      style={{ background: "rgba(13,43,69,0.08)" }}
                    >
                      <FiUser className="text-xl" style={{ color: BRAND }} />
                    </div>
                  )}
                  <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white ring-2 ring-white">
                    <FiCheckCircle size={11} />
                  </span>
                </div>

                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-400">
                    Question by
                  </p>
                  <h3 className="truncate text-base font-bold text-slate-800">
                    {expert?.fullname}
                  </h3>
                  <div className="flex flex-wrap items-center gap-1.5 text-xs text-slate-500">
                    {expert?.designation && <span>{expert.designation}</span>}
                    {expert?.designation && expert?.qualification && (
                      <span className="text-slate-300">•</span>
                    )}
                    {expert?.qualification && (
                      <span>{expert.qualification}</span>
                    )}
                  </div>
                </div>
              </div>

              {hasAnswered ? (
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1.5 text-xs font-semibold text-emerald-600 ring-1 ring-emerald-100">
                  <FiCheckCircle />
                  Answered
                </span>
              ) : isDeadlinePassed ? (
                <span className="inline-flex w-fit items-center gap-1.5 rounded-full bg-red-50 px-3 py-1.5 text-xs font-semibold text-red-500 ring-1 ring-red-100">
                  <FiClock />
                  Closed
                </span>
              ) : (
                <span
                  className="inline-flex w-fit items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-semibold ring-1"
                  style={{
                    background: "rgba(13,43,69,0.08)",
                    color: BRAND,
                    borderColor: "rgba(13,43,69,0.15)",
                  }}
                >
                  <span
                    className="h-1.5 w-1.5 animate-pulse rounded-full"
                    style={{ background: BRAND }}
                  />
                  Active
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="my-6 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

           
            <div>
              <div
                className="mb-2.5 flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em]"
                style={{ color: BRAND }}
              >
                <FiHelpCircle size={13} />
                Weekly Question
              </div>
              <h2 className="max-w-3xl text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl lg:text-[28px]">
                {question?.question}
              </h2>
            </div>

            
            {question?.referenceImages && (
              <Link
                href={`${img_url}${question.referenceImages}`}
                target="_blank"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border px-3 py-2 text-xs font-semibold transition hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(13,43,69,0.18)",
                  background: "rgba(13,43,69,0.05)",
                  color: BRAND,
                }}
              >
                <FiExternalLink size={14} />
                View Question Reference
              </Link>
            )}

            
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm"
                  style={{ color: BRAND }}
                >
                  <FiCalendar size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-400">Started</p>
                  <p className="truncate text-xs font-semibold text-slate-700">
                    {formatDate(startDate)}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5">
                <div
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white shadow-sm"
                  style={{ color: BRAND }}
                >
                  <FiClock size={16} />
                </div>
                <div className="min-w-0">
                  <p className="text-[10px] text-slate-400">Deadline</p>
                  <p
                    className={`truncate text-xs font-semibold ${
                      isDeadlinePassed ? "text-red-500" : "text-slate-700"
                    }`}
                  >
                    {formatDate(deadline)}
                  </p>
                </div>
              </div>
            </div>

            {/* ============================================
                TIMER + SUBMIT
            ============================================ */}
            <div className="mt-6 flex flex-col gap-5 border-t border-slate-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              {!isDeadlinePassed && timeLeft && (
                <div className="flex items-center gap-1.5 sm:gap-2">
                  {timeUnits.map((unit, i) => (
                    <React.Fragment key={unit.label}>
                      <div className="flex w-14 flex-col items-center rounded-xl border border-slate-100 bg-slate-50/70 py-2">
                        <span
                          className="text-base font-bold tabular-nums leading-none"
                          style={{ color: BRAND }}
                        >
                          {String(unit.value).padStart(2, "0")}
                        </span>
                        <span className="mt-1 text-[9px] font-medium uppercase tracking-wider text-slate-400">
                          {unit.label}
                        </span>
                      </div>
                      {i < timeUnits.length - 1 && (
                        <span className="text-slate-300">:</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              )}

              {!hasAnswered && !isDeadlinePassed ? (
                <Link
                  href={user.isUser ? "/weekly-question" : "/login"}
                  className="group inline-flex w-full items-center justify-center gap-2 rounded-xl px-6 py-3 text-xs font-semibold text-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
                  style={{ background: BRAND }}
                >
                  Submit Your Answer
                  <FiArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>
              ) : hasAnswered ? (
                <div className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-50 px-6 py-3 text-xs font-semibold text-emerald-600 ring-1 ring-emerald-100">
                  <FiCheckCircle size={14} />
                  Answer Submitted
                </div>
              ) : (
                <div className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-100 px-6 py-3 text-xs font-semibold text-slate-400">
                  <FiClock size={14} />
                  Challenge Closed
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeeklyQuestion;