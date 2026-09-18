"use client";

import { base_url, img_url } from "@/components/utils";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  FiClock,
  FiCalendar,
  FiChevronRight,
  FiList,
  FiEye,
  FiUser,
  FiMail,
} from "react-icons/fi";

import {
  FaFacebookF,
  FaXTwitter,
  FaPinterestP,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";

import { LuFlaskConical } from "react-icons/lu";
import Link from "next/link";

const categories = [
  {
    name: "Sterilization Basics",
    icon: <LuFlaskConical />,
  },
  {
    name: "Steam Sterilization",
    icon: <LuFlaskConical />,
  },
  {
    name: "ETO Sterilization",
    icon: <LuFlaskConical />,
  },
  {
    name: "Plasma Sterilization",
    icon: <LuFlaskConical />,
  },
  {
    name: "CSSD Management",
    icon: <LuFlaskConical />,
  },
  {
    name: "Infection Control",
    icon: <LuFlaskConical />,
  },
  {
    name: "Standards & Guidelines",
    icon: <LuFlaskConical />,
  },
  {
    name: "Case Studies",
    icon: <LuFlaskConical />,
  },
];

/* =========================================
   READING TIME
========================================= */

const getReadingTime = (content = []) => {
  const text = content
    .map((b) => (b?.des || "").replace(/<[^>]+>/g, " "))
    .join(" ");

  const words = text
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;

  const minutes = Math.max(1, Math.round(words / 200));

  return minutes;
};

/* =========================================
   FORMAT DATE
========================================= */

const formatDate = (dateStr) => {
  if (!dateStr) return null;

  return new Date(dateStr).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

/* =========================================
   PAGE
========================================= */

const Page = () => {
  const { slug } = useParams();
  const router = useRouter();

  const [article, setArticle] = useState(null);

  const [loading, setLoading] = useState(true);

  const [popularArticles, setPopularArticles] = useState([]);

  const [recentArticles, setRecentArticles] = useState([]);

  const [sidebarTab, setSidebarTab] = useState("popular");

  /* =========================================
     FETCH ARTICLE
  ========================================= */

  const fetchData = async () => {
    if (!slug) return;

    setLoading(true);

    try {
      const response = await axios.get(
        `${base_url}/learning/article/get/${slug}`
      );

      const data = response.data;

      if (data?.success) {
        setArticle(data.article);
      } else {
        toast.error("Article not found");
      }
    } catch (error) {
      console.log(error);

      toast.error("Failed to load article");
    } finally {
      setLoading(false);
    }
  };

  /* =========================================
     FETCH SIDEBAR ARTICLES
  ========================================= */

  const fetchSidebarLists = async () => {
    try {
      const [popularRes, recentRes] =
        await Promise.allSettled([
          axios.get(`${base_url}/learning/article/popular`),

          axios.get(`${base_url}/learning/article/recent`),
        ]);

      if (
        popularRes.status === "fulfilled" &&
        popularRes.value.data?.success
      ) {
        setPopularArticles(
          popularRes.value.data.articles || []
        );
      }

      if (
        recentRes.status === "fulfilled" &&
        recentRes.value.data?.success
      ) {
        setRecentArticles(
          recentRes.value.data.articles || []
        );
      }
    } catch (error) {
      console.log("Sidebar error:", error);
    }
  };

  /* =========================================
     EFFECT
  ========================================= */

  useEffect(() => {
    if (slug) {
      fetchData();
    }

    fetchSidebarLists();
  }, [slug]);

  /* =========================================
     IMAGE URL
  ========================================= */

  const getImage = (path) => {
    if (!path) return "";

    if (path.startsWith("http")) {
      return path;
    }

    return `${img_url}${path}`;
  };

  /* =========================================
     CATEGORY CLICK
  ========================================= */

  const handleCategoryClick = (category) => {
    router.push(
      `/articles?category=${encodeURIComponent(category)}`
    );
  };

  /* =========================================
     ARTICLE CLICK
  ========================================= */

  const handleArticleClick = (item) => {
    if (!item?.slug) return;

    router.push(`/articles/${item.slug}`);
  };

  /* =========================================
     LOADING
  ========================================= */

  if (loading) {
    return (
      <div className="container mx-auto mt-20 grid grid-cols-1 gap-10 px-4 py-10 lg:grid-cols-3">
        <div className="animate-pulse lg:col-span-2">
          <div className="mb-6 h-80 w-full rounded-lg bg-gray-200" />

          <div className="mb-4 h-8 w-3/4 rounded bg-gray-200" />

          <div className="mb-6 h-4 w-40 rounded bg-gray-200" />

          <div className="mb-2 h-4 w-full rounded bg-gray-200" />

          <div className="mb-2 h-4 w-full rounded bg-gray-200" />

          <div className="h-4 w-2/3 rounded bg-gray-200" />
        </div>

        <div className="h-[700px] animate-pulse rounded-lg bg-gray-100" />
      </div>
    );
  }

  /* =========================================
     ARTICLE NOT FOUND
  ========================================= */

  if (!article) {
    return (
      <div className="mx-auto max-w-6xl px-4 py-20 text-center text-gray-500">
        Article not found.
      </div>
    );
  }

  const [firstBlock, ...restBlocks] =
    article.content || [];

  const readingTime = getReadingTime(
    article.content
  );

  const publishedDate = formatDate(
    article.createdAt
  );

  /* =========================================
     SIDEBAR ARTICLES
  ========================================= */

  const sidebarArticles =
    sidebarTab === "popular"
      ? popularArticles
      : recentArticles;

  return (
    <div className="container mx-auto  grid grid-cols-1 gap-10 px-4 py-10 lg:grid-cols-3">

      {/* =====================================================
          MAIN ARTICLE
      ===================================================== */}

      <main className="lg:col-span-2">

        {/* =========================================
            HERO IMAGE
        ========================================= */}

        {article.thumbnail && (
          <div className="relative mb-6 w-full overflow-hidden">

            {/* CATEGORY */}

            <button
              onClick={() =>
                handleCategoryClick(
                  article.category
                )
              }
              className="absolute left-3 top-3 z-10 bg-red-600 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-white transition hover:bg-red-700"
            >
              {article.category}
            </button>

            <img
              src={getImage(article.thumbnail)}
              alt={article.title}
              className="h-auto w-full object-cover"
            />
          </div>
        )}

        {/* =========================================
            TITLE
        ========================================= */}

        <h1 className="mb-3 font-serif text-3xl font-bold leading-tight text-gray-900 sm:text-4xl">
          {article.title}
        </h1>

        {/* =========================================
            META
        ========================================= */}

        <div className="mb-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-gray-200 pb-5 text-sm text-gray-500">

          {/* AUTHOR */}

          {article.expertId?.fullname && (
            <span className="flex items-center gap-1 text-gray-700">
              <FiUser className="text-red-500" />

              By{" "}

              <span className="font-medium">
                {article.expertId.fullname}
              </span>
            </span>
          )}

          {/* DATE */}

          {publishedDate && (
            <span className="flex items-center gap-1">
              <FiCalendar className="text-red-500" />

              {publishedDate}
            </span>
          )}

          {/* READING TIME */}

          <span className="flex items-center gap-1">
            <FiClock className="text-red-500" />

            Reading Time: {readingTime} mins read
          </span>

          {/* VIEWS */}

          <span className="flex items-center gap-1">
            <FiEye className="text-red-500" />

            {article.views || 0} views
          </span>

        </div>

        {/* =========================================
            SHORT DESCRIPTION
        ========================================= */}

        {article.shortDescription && (
          <p className="mb-6 font-serif text-lg font-medium leading-relaxed text-gray-800">

            <span className="float-left pr-2 pt-1 font-serif text-6xl font-bold leading-[0.8] text-gray-900">
              {article.shortDescription.charAt(0)}
            </span>

            {article.shortDescription.slice(1)}

          </p>
        )}

        {/* =========================================
            FIRST CONTENT BLOCK
        ========================================= */}

        {firstBlock && (
          <section className="mb-8 clear-both">

            {/* TITLE */}

            {firstBlock.title && (
              <h2
                className="mb-4 font-serif text-2xl font-bold"
                style={{
                  color:
                    firstBlock.color ||
                    "#000000",
                }}
              >
                {firstBlock.title}
              </h2>
            )}

            {/* IMAGE */}

            {firstBlock.image && (
              <div className="mb-5 w-full overflow-hidden">

                <img
                  src={getImage(
                    firstBlock.image
                  )}
                  alt={
                    firstBlock.title ||
                    "article image"
                  }
                  className="h-auto w-full object-cover"
                />

              </div>
            )}

            {/* DESCRIPTION */}

            <div
              className="
                prose
                max-w-none
                font-serif
                text-[16px]
                leading-[1.7]
                text-gray-800

                prose-p:mb-5

                prose-headings:font-serif
                prose-headings:font-bold

                prose-h2:mt-8
                prose-h2:mb-4

                prose-h3:mt-7
                prose-h3:mb-3

                prose-ul:mb-5
                prose-ol:mb-5

                prose-li:mb-2

                prose-blockquote:border-red-600
                prose-blockquote:italic

                prose-a:text-red-600
                prose-a:underline
              "
              dangerouslySetInnerHTML={{
                __html: firstBlock.des,
              }}
            />

          </section>
        )}

        {/* =========================================
            REMAINING CONTENT
        ========================================= */}

        {restBlocks.map((block, index) => (
          <section
            key={block._id || index}
            className="mb-10 border-t border-gray-200 pt-8"
          >

            {/* TITLE */}

            {block.title && (
              <h3
                className="mb-4 font-serif text-xl font-bold"
                style={{
                  color:
                    block.color ||
                    "#000000",
                }}
              >
                {block.title}
              </h3>
            )}

            {/* IMAGE */}

            {block.image && (
              <div className="mb-5 w-full overflow-hidden">

                <img
                  src={getImage(
                    block.image
                  )}
                  alt={
                    block.title ||
                    "article image"
                  }
                  className="h-auto w-full object-cover"
                />

              </div>
            )}

            {/* DESCRIPTION */}

            <div
              className="
                prose
                max-w-none
                font-serif
                text-[16px]
                leading-[1.7]
                text-gray-800

                prose-p:mb-5

                prose-headings:font-serif
                prose-headings:font-bold

                prose-h2:mt-8
                prose-h2:mb-4

                prose-h3:mt-7
                prose-h3:mb-3

                prose-ul:mb-5
                prose-ol:mb-5

                prose-li:mb-2

                prose-blockquote:border-red-600

                prose-a:text-red-600
                prose-a:underline
              "
              dangerouslySetInnerHTML={{
                __html: block.des,
              }}
            />

          </section>
        ))}

        {/* =========================================
            TAGS
        ========================================= */}

        {article.tags?.length > 0 && (
          <div className="mt-8 border-t border-gray-200 pt-6">

            <h3 className="mb-3 font-serif text-sm font-bold text-gray-900">
              Tags
            </h3>

            <div className="flex flex-wrap gap-2">

              {article.tags.map((tag, i) => (
                <span
                  key={i}
                  className="border border-gray-300 bg-white px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  #{tag}
                </span>
              ))}

            </div>

          </div>
        )}

      </main>

      {/* =====================================================
          SIDEBAR
      ===================================================== */}

      <aside className="lg:col-span-1">

        <div className="sticky top-24">

    

          <div className="mt-7">

            <div className="border-b border-gray-900 pb-2">

              <h3 className="font-serif text-lg font-bold">
                Categories
              </h3>

            </div>

            <div className="mt-3 flex flex-wrap gap-2">

              {/* ALL */}

              <button
                onClick={() =>
                  router.push("/articles")
                }
                className="border border-gray-200 px-2.5 py-1.5 font-serif text-[11px] transition hover:border-red-500 hover:text-red-600"
              >
                All
              </button>

              {categories.map((cat) => {

                const isActive =
                  article.category ===
                  cat.name;

                return (
                  <button
                    key={cat.name}
                    onClick={() =>
                      handleCategoryClick(
                        cat.name
                      )
                    }
                    className={`border px-2.5 py-1.5 font-serif text-[11px] transition ${
                      isActive
                        ? "border-red-500 bg-red-500 text-white"
                        : "border-gray-200 text-gray-800 hover:border-red-500 hover:text-red-600"
                    }`}
                  >
                    {cat.name}
                  </button>
                );
              })}

            </div>

          </div>

          {/* =========================================
              EXPERT / AUTHOR CARD
          ========================================= */}

          {article.expertId && (
            <div className="mt-8 border border-gray-200 bg-white">

              {/* HEADER */}

              <div className="border-b border-gray-900 px-5 py-3">

                <h3 className="font-serif text-lg font-bold">
                  About the Expert
                </h3>

              </div>

              {/* BODY */}

              <div className="p-5">

                {/* PROFILE */}

                <div className="flex items-center gap-4">

                  {/* IMAGE */}

                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-full border border-gray-200">

                    {article.expertId.image ? (
                      <img
                        src={getImage(
                          article.expertId
                            .image
                        )}
                        alt={
                          article.expertId
                            .fullname
                        }
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center bg-gray-100">
                        <FiUser
                          size={28}
                          className="text-gray-400"
                        />
                      </div>
                    )}

                  </div>

                  {/* NAME */}

                  <div>

                    <h4 className="font-serif text-lg font-bold text-gray-900">
                      {
                        article.expertId
                          .fullname
                      }
                    </h4>

                    {article.expertId
                      .designation && (
                      <p className="mt-1 font-serif text-sm text-red-600">
                        {
                          article.expertId
                            .designation
                        }
                      </p>
                    )}

                  </div>

                </div>

                {/* SPECIALIZATION */}

                {article.expertId
                  .specialization && (
                  <div className="mt-5">

                    <p className="mb-1 font-serif text-xs font-bold uppercase tracking-wider text-gray-400">
                      Specialization
                    </p>

                    <p className="font-serif text-sm leading-6 text-gray-700">
                      {
                        article.expertId
                          .specialization
                      }
                    </p>

                  </div>
                )}

                {/* EMAIL */}

                {article.expertId.email && (
                  <div className="mt-4 flex items-center gap-2 border-t border-gray-100 pt-4">

                    <FiMail className="text-red-500" />

                    <Link
                      href={`mailto:${article.expertId.email}`}
                      className="truncate font-serif text-xs text-gray-600 hover:text-red-600"
                    >
                      {
                        article.expertId
                          .email
                      }
                    </Link>

                  </div>
                )}

              </div>
            </div>
          )}

          {/* =========================================
              FOLLOW US
          ========================================= */}

          <div className="mt-8 border border-gray-200 bg-white p-6 shadow-sm">
  {/* Heading */}
  <div className="flex items-end justify-between border-b border-gray-900 pb-3">
    <div>
      <p className="mb-1 text-[10px] font-medium uppercase tracking-[0.25em] text-gray-500">
        Stay Connected
      </p>

      <h3 className="font-serif text-xl font-bold text-gray-900">
        Follow us
      </h3>
    </div>

    <span className="text-xs text-gray-400">Social</span>
  </div>

  {/* Social Icons */}
  <div className="mt-5 flex gap-3">
    <Link
      href="#"
      aria-label="Facebook"
      className="group flex h-11 w-11 items-center justify-center border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#1877F2] hover:bg-[#1877F2] hover:text-white hover:shadow-lg"
    >
      <FaFacebookF
        size={15}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </Link>

    <Link
      href="#"
      aria-label="X"
      className="group flex h-11 w-11 items-center justify-center border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-black hover:bg-black hover:text-white hover:shadow-lg"
    >
      <FaXTwitter
        size={15}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </Link>

    <Link
      href="#"
      aria-label="Pinterest"
      className="group flex h-11 w-11 items-center justify-center border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#E60023] hover:bg-[#E60023] hover:text-white hover:shadow-lg"
    >
      <FaPinterestP
        size={15}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </Link>

    <Link
      href="#"
      aria-label="Instagram"
      className="group flex h-11 w-11 items-center justify-center border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#E4405F] hover:bg-[#E4405F] hover:text-white hover:shadow-lg"
    >
      <FaInstagram
        size={15}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </Link>

    <Link
      href="#"
      aria-label="WhatsApp"
      className="group flex h-11 w-11 items-center justify-center border border-gray-200 bg-gray-50 text-gray-700 transition-all duration-300 hover:-translate-y-1 hover:border-[#25D366] hover:bg-[#25D366] hover:text-white hover:shadow-lg"
    >
      <FaWhatsapp
        size={15}
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </Link>
  </div>

  {/* Small bottom text */}
  <p className="mt-5 text-xs leading-relaxed text-gray-500">
    Follow us for the latest stories, updates and inspiration.
  </p>
</div>

        </div>

      </aside>

    </div>
  );
};

export default Page;