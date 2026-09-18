"use client";

import { base_url, img_url } from "@/components/utils";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  FiArrowLeft,
  FiCalendar,
  FiChevronRight,
  FiMail,
  FiShare2,
  FiUser,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaXTwitter,
} from "react-icons/fa6";

const categories = [
  "CSSD Technician",
  "CSSD Supervisor",
  "CSSD Manager",
  "Infection Control Professional",
];

 const page = () => {
  const { slug } = useParams();
  const router = useRouter();

  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);
  const [copied, setCopied] = useState(false);

  // ============================================================
  // FETCH NEWS
  // ============================================================

  const fetchNews = useCallback(async () => {
    if (!slug) return;

    try {
      setLoading(true);

      const response = await axios.get(
        `${base_url}/news/get/${slug}`
      );

      const data = response.data;

      if (data?.success && data?.news) {
        setNews(data.news);
      } else {
        toast.error("News not found");
        setNews(null);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message ||
          "Failed to load news"
      );

      setNews(null);
    } finally {
      setLoading(false);
    }
  }, [slug]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  // ============================================================
  // DATE
  // ============================================================

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  // ============================================================
  // IMAGE
  // ============================================================

  const getImage = (path) => {
    if (!path) return "";

    if (path.startsWith("http")) {
      return path;
    }

    return `${img_url}${path}`;
  };

  // ============================================================
  // SHARE
  // ============================================================

  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: news?.title,
          text: news?.title,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);

        setCopied(true);

        toast.success("Link copied");

        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // ============================================================
  // LOADING
  // ============================================================

  if (loading) {
    return <NewsDetailSkeleton />;
  }



  if (!news) {
    return (
      <main className="min-h-screen bg-white">
        <div className="mx-auto flex min-h-[70vh] container items-center justify-center px-4">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-green-600">
              News
            </p>

            <h1 className="mt-3 font-serif text-4xl font-bold text-gray-900">
              News Not Found
            </h1>

            <p className="mt-3 text-gray-500">
              The news article you are looking for does not exist.
            </p>

            <button
              onClick={() => router.push("/news")}
              className="mt-7 inline-flex items-center gap-2 bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              <FiArrowLeft />
              Back to News
            </button>
          </div>
        </div>
      </main>
    );
  }

  const expert = news.expertId;

  return (
    <main className="min-h-screen mt-10 bg-white">
      

      <div className="border-b border-gray-200">
        <div className="mx-auto container px-4 pb-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <button
              onClick={() => router.push("/")}
              className="transition hover:text-green-600"
            >
              Home
            </button>

            <FiChevronRight size={13} />

            <button
              onClick={() => router.push("/news")}
              className="transition hover:text-green-600"
            >
              News
            </button>

            <FiChevronRight size={13} />

            <span className="truncate text-gray-900">
              {news.category}
            </span>
          </div>
        </div>
      </div>

      

      <div className="mx-auto mt-8 grid container grid-cols-1 gap-10 px-4 py-8 sm:px-6 lg:mt-6 lg:grid-cols-3 lg:px-8">
        

        <article className="lg:col-span-2">
          {/* Back */}

          <button
            onClick={() => router.push("/news")}
            className="mb-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-gray-500 transition hover:text-green-600"
          >
            <FiArrowLeft />
            Back to News
          </button>

          {/* ====================================================
              IMAGE
          ==================================================== */}

          <div className="relative overflow-hidden bg-gray-100">
            <img
              src={getImage(news.featuredImage)}
              alt={news.title}
              className="h-auto max-h-[600px] w-full object-cover"
            />

            {/* Category */}

            <div className="absolute left-5 top-5 bg-green-600 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white">
              {news.category}
            </div>
          </div>

          {/* ====================================================
              TITLE
          ==================================================== */}

          <div className="mt-7">
            <h1 className="font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl lg:text-[46px] lg:leading-[1.15]">
              {news.title}
            </h1>
          </div>

          {/* ====================================================
              META
          ==================================================== */}

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 border-b border-gray-200 pb-6">
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FiCalendar
                size={16}
                className="text-green-600"
              />

              <span>
                {formatDate(news.publicationDate)}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FiUser
                size={16}
                className="text-green-600"
              />

              <span>
                {expert?.fullname || "DEVAN Team"}
              </span>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <FiShare2
                size={16}
                className="text-green-600"
              />

              <button
                onClick={handleShare}
                className="transition hover:text-green-600"
              >
                {copied ? "Link Copied" : "Share"}
              </button>
            </div>
          </div>

          {/* ====================================================
              DESCRIPTION / CONTENT
          ==================================================== */}
<div className="">


          <div
  className="
    w-full
    mt-8
    font-serif
    text-[16px]
    leading-[1.8]
    text-gray-700
    break-words
    overflow-wrap-anywhere

    [&_p]:mb-5
    [&_p]:text-gray-700

    [&_h1]:mb-5
    [&_h1]:mt-8
    [&_h1]:font-serif
    [&_h1]:text-3xl
    [&_h1]:font-bold
    [&_h1]:text-gray-900

    [&_h2]:mb-4
    [&_h2]:mt-8
    [&_h2]:border-l-4
    [&_h2]:border-green-600
    [&_h2]:pl-4
    [&_h2]:font-serif
    [&_h2]:text-2xl
    [&_h2]:font-bold
    [&_h2]:text-gray-900

    [&_h3]:mb-4
    [&_h3]:mt-8
    [&_h3]:border-l-4
    [&_h3]:border-green-600
    [&_h3]:pl-4
    [&_h3]:font-serif
    [&_h3]:text-xl
    [&_h3]:font-bold
    [&_h3]:text-gray-900

    [&_ul]:mb-6
    [&_ul]:ml-5
    [&_ul]:list-disc

    [&_ol]:mb-6
    [&_ol]:ml-5
    [&_ol]:list-decimal

    [&_li]:mb-2
    [&_li]:pl-1

    [&_a]:font-medium
    [&_a]:text-green-600
    [&_a]:underline
    [&_a]:underline-offset-2
    [&_a]:break-words

    [&_strong]:font-bold
    [&_strong]:text-gray-900

    [&_blockquote]:my-7
    [&_blockquote]:border-l-4
    [&_blockquote]:border-green-600
    [&_blockquote]:bg-green-50
    [&_blockquote]:px-5
    [&_blockquote]:py-4
    [&_blockquote]:italic
    [&_blockquote]:text-gray-700
  "
  dangerouslySetInnerHTML={{
    __html: news.description || "",
  }}
/>
</div>

          {/* ====================================================
              SHARE
          ==================================================== */}

          <div className="mt-10 border-y border-gray-200 py-6">
            <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                  Share this story
                </p>

                <h3 className="mt-1 font-serif text-lg font-bold text-gray-900">
                  Spread the knowledge
                </h3>
              </div>

              <div className="flex items-center gap-2">
                <SocialButton
                  icon={<FaFacebookF />}
                  href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                    typeof window !== "undefined"
                      ? window.location.href
                      : ""
                  )}`}
                />

                <SocialButton
                  icon={<FaXTwitter />}
                  href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                    typeof window !== "undefined"
                      ? window.location.href
                      : ""
                  )}&text=${encodeURIComponent(news.title)}`}
                />

                <SocialButton
                  icon={<FaLinkedinIn />}
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
                    typeof window !== "undefined"
                      ? window.location.href
                      : ""
                  )}`}
                />

                <SocialButton
                  icon={<FaWhatsapp />}
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `${news.title} ${typeof window !== "undefined" ? window.location.href : ""}`
                  )}`}
                />
              </div>
            </div>
          </div>
        </article>

       

        <aside className="space-y-7 lg:sticky lg:top-24 lg:self-start">
          {/* ====================================================
              CATEGORIES
          ==================================================== */}

          <div className="border border-gray-200 bg-white">
            <div className="border-b border-gray-900 px-5 py-3">
              <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
                Explore
              </p>

              <h3 className="mt-1 font-serif text-xl font-bold text-gray-900">
                Categories
              </h3>
            </div>

            <div className="p-5">
              <div className="space-y-1">
                {categories.map((category) => {
                  const active = category === news.category;

                  return (
                    <button
                      key={category}
                      onClick={() =>
                        router.push(
                          `/news?category=${encodeURIComponent(
                            category
                          )}`
                        )
                      }
                      className={`group flex w-full items-center justify-between border-b border-gray-100 py-3 text-left text-sm transition last:border-0 ${
                        active
                          ? "font-semibold text-green-600"
                          : "text-gray-600 hover:text-green-600"
                      }`}
                    >
                      <span>{category}</span>

                      <FiChevronRight
                        size={14}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ====================================================
              EXPERT
          ==================================================== */}

          {expert && (
            <div className="border border-gray-200 bg-white">
              <div className="border-b border-gray-900 px-5 py-3">
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
                  Written By
                </p>

                <h3 className="mt-1 font-serif text-xl font-bold text-gray-900">
                  About the Expert
                </h3>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-4">
                  <div className="h-20 w-20 shrink-0 overflow-hidden rounded-full border border-gray-200">
                    <img
                      src={getImage(expert.image)}
                      alt={expert.fullname}
                      className="h-full w-full object-cover"
                    />
                  </div>

                  <div>
                    <h4 className="font-serif text-lg font-bold text-gray-900">
                      {expert.fullname}
                    </h4>

                    {expert.designation && (
                      <p className="mt-1 text-sm font-medium text-green-600">
                        {expert.designation}
                      </p>
                    )}
                  </div>
                </div>

                {expert.specialization && (
                  <div className="mt-5 border-t border-gray-100 pt-4">
                    <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
                      Specialization
                    </p>

                    <p className="mt-1 text-sm text-gray-600">
                      {expert.specialization}
                    </p>
                  </div>
                )}

                {expert.email && (
                  <div className="mt-4 flex items-start gap-3 text-sm text-gray-600">
                    <FiMail
                      className="mt-0.5 shrink-0 text-green-600"
                      size={16}
                    />

                    <span className="break-all">
                      {expert.email}
                    </span>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* ====================================================
              FOLLOW US
          ==================================================== */}

          <div className="border border-gray-200 bg-white p-6 shadow-sm">
            <div className="flex items-end justify-between border-b border-gray-900 pb-3">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
                  Stay Connected
                </p>

                <h3 className="mt-1 font-serif text-xl font-bold text-gray-900">
                  Follow us
                </h3>
              </div>

              <FiShare2
                size={18}
                className="text-green-600"
              />
            </div>

            <p className="mt-4 text-sm leading-6 text-gray-500">
              Follow DEVAN for the latest updates, professional
              insights and developments in CSSD and healthcare.
            </p>

            <div className="mt-5 flex flex-wrap gap-2">
              <SocialButton
                icon={<FaFacebookF />}
                href="#"
              />

              <SocialButton
                icon={<FaXTwitter />}
                href="#"
              />

              <SocialButton
                icon={<FaInstagram />}
                href="#"
              />

              <SocialButton
                icon={<FaLinkedinIn />}
                href="#"
              />

              <SocialButton
                icon={<FaWhatsapp />}
                href="#"
              />
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
};

export default page

// ============================================================
// SOCIAL BUTTON
// ============================================================

const SocialButton = ({ icon, href }) => {
  return (
    <a
      href={href}
      target={href !== "#" ? "_blank" : undefined}
      rel={href !== "#" ? "noopener noreferrer" : undefined}
      className="flex h-11 w-11 items-center justify-center border border-gray-200 bg-gray-50 text-gray-700 transition hover:border-green-600 hover:bg-green-600 hover:text-white"
    >
      {icon}
    </a>
  );
};

// ============================================================
// SKELETON
// ============================================================

const NewsDetailSkeleton = () => {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto container px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="aspect-[16/8] animate-pulse bg-gray-200" />

            <div className="mt-7 h-10 w-11/12 animate-pulse bg-gray-200" />

            <div className="mt-3 h-10 w-8/12 animate-pulse bg-gray-200" />

            <div className="mt-6 h-4 w-64 animate-pulse bg-gray-200" />

            <div className="mt-10 space-y-4">
              <div className="h-4 w-full animate-pulse bg-gray-200" />
              <div className="h-4 w-full animate-pulse bg-gray-200" />
              <div className="h-4 w-10/12 animate-pulse bg-gray-200" />
              <div className="h-4 w-9/12 animate-pulse bg-gray-200" />
            </div>
          </div>

          <div className="space-y-7">
            <div className="h-72 animate-pulse bg-gray-100" />

            <div className="h-64 animate-pulse bg-gray-100" />

            <div className="h-48 animate-pulse bg-gray-100" />
          </div>
        </div>
      </div>
    </main>
  );
};