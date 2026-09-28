"use client";
import { base_url, img_url } from "@/components/utils";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import {
  FiAlertCircle,
  FiCalendar,
  FiCheckCircle,
  FiClock,
  FiHelpCircle,
  FiLinkedin,
  FiLock,
  FiSend,
} from "react-icons/fi";

axios.defaults.withCredentials = true;

const BRAND = "#0f766e"; // change to your brand color
const MIN_LENGTH = 10;
const MAX_LENGTH = 2000;



const fileUrl = (path) =>
  !path ? "" : path.startsWith("http") ? path : `${img_url}${path}`;

const formatDate = (date) =>
  date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });

/* ---------- countdown hook ---------- */
const useCountdown = (target) => {
  const calc = useCallback(() => {
    if (!target) return null;
    const diff = target.getTime() - Date.now();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff / 3600000) % 24),
      minutes: Math.floor((diff / 60000) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }, [target]);

  const [timeLeft, setTimeLeft] = useState(calc);

  useEffect(() => {
    setTimeLeft(calc());
    const id = setInterval(() => setTimeLeft(calc()), 1000);
    return () => clearInterval(id);
  }, [calc]);

  return timeLeft;
};

/* ---------- skeleton ---------- */
const PageSkeleton = () => (
  <section className="container mx-auto w-full px-4 py-8">
    <div className=" animate-pulse">
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




const Page = () => {
  const [questionData, setQuestionData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [answer, setAnswer] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const router = useRouter();
  const user = useSelector((state) => state.user);

  const fetchQuestion = useCallback(async (silent = false) => {
    try {
      if (!silent) setLoading(true);
      const { data } = await axios.get(`${base_url}/weeklyquestion/get-user`);
      if (data.success) setQuestionData(data);
    } catch (error) {
      console.error(error);
      toast.error("Unable to load the weekly question");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // if (!user?.isUser) router.push("/login");
    fetchQuestion();
  }, [fetchQuestion]);

  // Dates are memoised so the countdown hook has a stable target.
  const question = questionData?.question;
  const deadline = useMemo(
    () => (question ? new Date(question.submissionDeadline) : null),
    [question]
  );
  const startDate = useMemo(
    () => (question ? new Date(question.startDate) : null),
    [question]
  );

  // Hooks must run before any early return.
  const timeLeft = useCountdown(deadline);

  const handleSubmit = async (e) => {
    e?.preventDefault?.();
    const trimmed = answer.trim();

    if (trimmed.length < MIN_LENGTH) {
      toast.warn(`Write at least ${MIN_LENGTH} characters`);
      return;
    }

    try {
      setSubmitting(true);
      const { data } = await axios.post(
        `${base_url}/weeklyquestion/submit-answer`,
        { answer: trimmed, questionId: question._id }
      );

      if (data.success) {
        toast.success(data.message || "Answer submitted");
        setAnswer("");
        await fetchQuestion(true); // refresh so hasAnswered / alreadyAnswer update
      } else {
        toast.error(data.message || "Could not submit your answer");
      }
    } catch (error) {
      console.error(error);
      if (error?.response?.status === 401) {
        toast.error("Please log in to submit your answer");
        router.push("/login");
      } else {
        toast.error(
          error?.response?.data?.message || "Could not submit your answer"
        );
      }
    } finally {
      setSubmitting(false);
    }
  };

  /* ----- states ----- */
  if (loading) return <PageSkeleton />;

  if (!question) {
    return (
      <section className="container mx-auto w-full px-4 py-8">
        <div className="relative mx-auto flex min-h-[380px]  flex-col items-center justify-center overflow-hidden rounded-[28px] border border-slate-100 bg-white px-6 text-center shadow-sm">
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full opacity-[0.06] blur-3xl"
            style={{ background: BRAND }}
          />
          <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-50 ring-1 ring-slate-100">
            <FiHelpCircle className="text-2xl text-slate-400" />
          </div>
          <h2 className="text-xl font-bold tracking-tight text-slate-900">
            No weekly question yet
          </h2>
          <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">
            There is no active question right now. Check back soon for the
            next challenge.
          </p>
        </div>
      </section>
    );
  }

  const { hasAnswered, alreadyAnswer } = questionData;
  const expert = question.expertId;
  const isDeadlinePassed = deadline.getTime() < Date.now();
  const submittedText =
    typeof alreadyAnswer === "string" ? alreadyAnswer : alreadyAnswer?.answer;

  const timeUnits = timeLeft
    ? [
        { label: "Days", value: timeLeft.days },
        { label: "Hrs", value: timeLeft.hours },
        { label: "Min", value: timeLeft.minutes },
        { label: "Sec", value: timeLeft.seconds },
      ]
    : [];

  return (
    <section className="container mx-auto w-full px-4 py-8">
      <div className="mx-auto ">
        <p className="mb-6 text-sm font-medium text-slate-500">
          This week&apos;s question
        </p>

        <article className="overflow-hidden rounded-[28px] border border-slate-100 bg-white shadow-sm">
          <div className="h-1.5 w-full" style={{ background: BRAND }} />

          <div className="space-y-6 p-6 sm:p-8">
            {/* Expert + dates */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-3">
                {expert?.image ? (
                  <img
                    src={fileUrl(expert.image)}
                    alt={expert.fullname}
                    className="h-14 w-14 rounded-2xl object-cover ring-1 ring-slate-100"
                  />
                ) : (
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-100 text-lg font-bold text-slate-500">
                    {expert?.fullname?.[0] || "?"}
                  </div>
                )}
                <div>
                  <p className="text-xs text-slate-500">Asked by</p>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-slate-900">
                      {expert?.fullname}
                    </h3>
                    {expert?.linkedinUrl && (
                      <a
                        href={expert.linkedinUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`${expert.fullname} on LinkedIn`}
                        className="text-slate-400 transition hover:text-slate-700"
                      >
                        <FiLinkedin />
                      </a>
                    )}
                  </div>
                  {(expert?.designation || expert?.qualification) && (
                    <p className="text-xs text-slate-500">
                      {[expert.designation, expert.qualification]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 text-xs text-slate-600">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 ring-1 ring-slate-100">
                  <FiCalendar /> Opened {formatDate(startDate)}
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-50 px-3 py-1.5 ring-1 ring-slate-100">
                  <FiClock /> Closes {formatDate(deadline)}
                </span>
              </div>
            </div>

            <div className="h-px w-full bg-slate-100" />

            {/* Question */}
            <div className="space-y-4">
              <h1 className="text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl">
                {question.question}
              </h1>

              {question.referenceImages && (
                <a
                  href={fileUrl(question.referenceImages)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-2xl border border-slate-100 bg-slate-50"
                >
                  <img
                    src={fileUrl(question.referenceImages)}
                    alt="Reference for the question"
                    className="max-h-[420px] w-full object-contain"
                  />
                </a>
              )}
            </div>

            {/* Countdown */}
            {!isDeadlinePassed && (
              <div>
                <p className="mb-2 text-sm font-medium text-slate-600">
                  Time left to answer
                </p>
                <div className="grid max-w-sm grid-cols-4 gap-2">
                  {timeUnits.map((u) => (
                    <div
                      key={u.label}
                      className="rounded-xl bg-slate-50 py-3 text-center ring-1 ring-slate-100"
                    >
                      <div className="text-xl font-bold tabular-nums text-slate-900">
                        {String(u.value).padStart(2, "0")}
                      </div>
                      <div className="text-[11px] text-slate-500">
                        {u.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="h-px w-full bg-slate-100" />

            {/* Answer area */}
            {hasAnswered ? (
              <div className="rounded-2xl bg-emerald-50/60 p-5 ring-1 ring-emerald-100">
                <div className="flex items-center gap-2 font-semibold text-emerald-700">
                  <FiCheckCircle className="text-lg" />
                  You have submitted your answer
                </div>
                {submittedText && (
                  <p className="mt-3 whitespace-pre-wrap break-words text-sm leading-6 text-slate-700">
                    {submittedText}
                  </p>
                )}
              </div>
            ) : isDeadlinePassed ? (
              <div className="flex items-start gap-3 rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-100">
                <FiLock className="mt-0.5 text-lg text-slate-400" />
                <div>
                  <p className="font-semibold text-slate-800">
                    Submissions are closed
                  </p>
                  <p className="mt-1 text-sm text-slate-500">
                    The deadline was {formatDate(deadline)}. Watch for next
                    week&apos;s question.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <label
                  htmlFor="answer"
                  className="block text-sm font-semibold text-slate-800"
                >
                  Your answer
                </label>

                <textarea
                  id="answer"
                  value={answer}
                  onChange={(e) => setAnswer(e.target.value)}
                  maxLength={MAX_LENGTH}
                  rows={8}
                  disabled={submitting}
                  placeholder="Write your answer here…"
                  className="w-full resize-y rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-6 text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-transparent focus:ring-2 disabled:bg-slate-50"
                  style={{ "--tw-ring-color": BRAND }}
                />

                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <FiAlertCircle />
                    <span>
                      You can&apos;t edit your answer after submitting.
                    </span>
                    <span className="tabular-nums">
                      {answer.length}/{MAX_LENGTH}
                    </span>
                  </div>

                  <button
                    type="submit"
                    disabled={submitting || answer.trim().length < MIN_LENGTH}
                    className="inline-flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    style={{ background: BRAND, "--tw-ring-color": BRAND }}
                  >
                    {submitting ? (
                      <>
                        <span className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                        Submitting…
                      </>
                    ) : (
                      <>
                        <FiSend /> Submit answer
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </article>
      </div>
    </section>
  );
};

export default Page;