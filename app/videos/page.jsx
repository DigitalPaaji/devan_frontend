"use client";

import Loading from "@/components/Loading";
import { base_url } from "@/components/utils";
import axios from "axios";
import { useSearchParams, useRouter } from "next/navigation";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  FiChevronLeft,
  FiChevronRight,
  FiFilter,
  FiPlay,
  FiUser,
} from "react-icons/fi";

const categories = [
  "Sterilization Basics",
  "Steam Sterilization",
  "ETO Sterilization",
  "Plasma Sterilization",
  "CSSD Management",
  "Infection Control",
  "Standards & Guidelines",
  "Case Studies",
];






const Videopage = () => {
  return (
    <Suspense fallback={<Loading />}>
      <YTVideo />
    </Suspense>
  );
};

export default Videopage;

const YTVideo = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get("page")) || 1;
  const limit = Number(searchParams.get("limit")) || 20;
  const category = searchParams.get("category") || "";

  const [videos, setVideos] = useState([]);
  const [pagination, setPagination] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * Convert:
   * https://www.youtube.com/shorts/iKGo2IUUSbM
   *
   * Into:
   * https://www.youtube.com/embed/iKGo2IUUSbM
   */
  const getYoutubeEmbedUrl = (url) => {
    try {
      const parsedUrl = new URL(url);

      if (parsedUrl.pathname.startsWith("/shorts/")) {
        const videoId = parsedUrl.pathname.split("/shorts/")[1];

        return `https://www.youtube.com/embed/${videoId}`;
      }

      if (parsedUrl.pathname === "/watch") {
        const videoId = parsedUrl.searchParams.get("v");

        if (videoId) {
          return `https://www.youtube.com/embed/${videoId}`;
        }
      }

      if (parsedUrl.hostname.includes("youtu.be")) {
        const videoId = parsedUrl.pathname.replace("/", "");

        return `https://www.youtube.com/embed/${videoId}`;
      }

      return url;
    } catch {
      return url;
    }
  };

  /**
   * Fetch videos
   */
  const fetchYt = useCallback(async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      params.set("page", String(page));
      params.set("limit", String(limit));

      if (category) {
        params.set("category", category);
      }

      const response = await axios.get(
        `${base_url}/learning/yt/all?${params.toString()}`
      );

      const data = response.data;

      if (data?.success) {
        setVideos(data.ytvideos || []);
        setPagination(data.pagination || null);
      } else {
        setVideos([]);
        setPagination(null);
      }
    } catch (error) {
      console.error(error);

      toast.error("Unable to load videos");

      setVideos([]);
      setPagination(null);
    } finally {
      setLoading(false);
    }
  }, [page, limit, category]);

  /**
   * Refetch whenever URL filters change
   */
  useEffect(() => {
    fetchYt();
  }, [fetchYt]);

  /**
   * Update URL
   */
  const updateQuery = (updates) => {
    const params = new URLSearchParams(searchParams.toString());

    if (updates.page !== undefined) {
      params.set("page", String(updates.page));
    }

    if (updates.limit !== undefined) {
      params.set("limit", String(updates.limit));
    }

    if (updates.category !== undefined) {
      if (updates.category) {
        params.set("category", updates.category);
      } else {
        params.delete("category");
      }
    }

    router.push(`/videos?${params.toString()}`);
  };

  /**
   * Category change
   */
  const handleCategoryChange = (value) => {
    updateQuery({
      category: value,
      page: 1,
    });
  };

  /**
   * Limit change
   */
  const handleLimitChange = (value) => {
    updateQuery({
      limit: value,
      page: 1,
    });
  };

  /**
   * Previous page
   */
  const handlePrevious = () => {
    if (pagination?.hasPrevPage) {
      updateQuery({
        page: page - 1,
      });
    }
  };

  /**
   * Next page
   */
  const handleNext = () => {
    if (pagination?.hasNextPage) {
      updateQuery({
        page: page + 1,
      });
    }
  };

  /**
   * Direct page
   */
  const handlePage = (pageNumber) => {
    updateQuery({
      page: pageNumber,
    });
  };

  /**
   * Generate page numbers
   */
  const getPageNumbers = () => {
    if (!pagination) return [];

    const totalPages = pagination.totalPage;

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    if (page <= 3) {
      return [1, 2, 3, 4, 5];
    }

    if (page >= totalPages - 2) {
      return [
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }

    return [page - 2, page - 1, page, page + 1, page + 2];
  };

  return (
    <main className="min-h-screen ">
      {/* Header */}
      <section className="border-b border-black/10 ">
        <div className="mx-auto container px-5 pt-10 pb-14 md:px-8 lg:pb-20">
          <div className="max-w-3xl">
            <div className="mb-5 flex items-center gap-2 text-sm font-medium uppercase tracking-[0.18em] text-[#2F6F5C]">
              <FiPlay />
              Learning Videos
            </div>

            <h1 className="font-serif text-4xl leading-tight text-[#1A2420] md:text-6xl">
              Learn. Watch.
              <span className="block text-[#2F6F5C]">
                Sterilize Better.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-gray-600 md:text-lg">
              Explore practical videos and expert insights covering
              sterilization, CSSD management, infection control and more.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-0 z-20 border-b border-black/10 bg-[#F7F5F0]/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
          {/* Categories */}
          <div className="custom-scrollbar flex items-center gap-3  overflow-x-auto pb-1">
            <div className="flex shrink-0 items-center gap-2 text-sm font-medium text-[#1A2420]">
              <FiFilter />
              Category
            </div>

            <button
              onClick={() => handleCategoryChange("")}
              className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
                category === ""
                  ? "bg-[#1A2420] text-white"
                  : "border border-black/10 bg-white text-gray-700 hover:border-[#2F6F5C]"
              }`}
            >
              All Videos
            </button>

            {categories.map((item) => (
              <button
                key={item}
                onClick={() => handleCategoryChange(item)}
                className={`shrink-0 rounded-full px-4 py-2 text-sm transition ${
                  category === item
                    ? "bg-[#2F6F5C] text-white"
                    : "border border-black/10 bg-white text-gray-700 hover:border-[#2F6F5C]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Limit */}
          <div className="flex shrink-0 items-center gap-2">
            <span className="text-sm text-gray-500">Show:</span>

            <select
              value={limit}
              onChange={(e) =>
                handleLimitChange(Number(e.target.value))
              }
              className="rounded-lg border border-black/10 bg-white px-3 py-2 text-sm outline-none focus:border-[#2F6F5C]"
            >
              <option value={6}>6</option>
              <option value={12}>12</option>
              <option value={20}>20</option>
              <option value={30}>30</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
        {/* Result info */}
        {!loading && pagination && (
          <div className="mb-8 flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
            <div>
              <h2 className="font-serif text-2xl text-[#1A2420]">
                {category || "All Videos"}
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Showing{" "}
                {videos.length > 0
                  ? (page - 1) * limit + 1
                  : 0}{" "}
                -{" "}
                {Math.min(page * limit, pagination.total)}{" "}
                of {pagination.total} videos
              </p>
            </div>

            <div className="text-sm text-gray-500">
              Page {pagination.page} of {pagination.totalPage}
            </div>
          </div>
        )}

        {/* Loading */}
        {loading ? (
          <div className="flex min-h-[400px] items-center justify-center">
            <Loading />
          </div>
        ) : videos.length === 0 ? (
          /* Empty */
          <div className="flex min-h-[400px] flex-col items-center justify-center rounded-2xl border border-black/10 bg-white px-6 text-center">
            <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F7F5F0] text-[#2F6F5C]">
              <FiPlay size={26} />
            </div>

            <h3 className="font-serif text-2xl text-[#1A2420]">
              No videos found
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
              There are currently no videos available for this category.
              Try selecting another category.
            </p>

            {category && (
              <button
                onClick={() => handleCategoryChange("")}
                className="mt-6 rounded-full bg-[#1A2420] px-5 py-2.5 text-sm text-white transition hover:bg-[#2F6F5C]"
              >
                View All Videos
              </button>
            )}
          </div>
        ) : (
          <>
            {/* Video Grid */}
            <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {videos.map((video) => (
                <article
                  key={video._id}
                  className="group overflow-hidden rounded-2xl border border-black/10 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Video */}
                  <div className="relative aspect-[9/14] overflow-hidden bg-black">
                    <iframe
                      src={getYoutubeEmbedUrl(video.ytlink)}
                      title={`${video.category} video`}
                      className="absolute inset-0 h-full w-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />

                    <div className="pointer-events-none absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-[#1A2420] backdrop-blur">
                      {video.category}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <div className="mb-3">
                      <span className="text-xs font-medium uppercase tracking-wider text-[#2F6F5C]">
                        {video.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#F7F5F0] text-[#2F6F5C]">
                        <FiUser size={18} />
                      </div>

                      <div className="min-w-0">
                        <h3 className="truncate text-sm font-semibold text-[#1A2420]">
                          {video.expertId?.fullname || "Expert"}
                        </h3>

                        <p className="truncate text-xs text-gray-500">
                          {video.expertId?.designation || "CSSD Professional"}
                        </p>
                      </div>
                    </div>

                    {/* YouTube link */}
                    <a
                      href={video.ytlink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 flex items-center justify-center gap-2 rounded-lg border border-black/10 px-4 py-2.5 text-sm font-medium text-[#1A2420] transition hover:border-[#2F6F5C] hover:bg-[#2F6F5C] hover:text-white"
                    >
                      <FiPlay size={15} />
                      Watch on YouTube
                    </a>
                  </div>
                </article>
              ))}
            </div>

            {/* Pagination */}
            {pagination && pagination.totalPage > 1 && (
              <div className="mt-12 flex flex-col items-center justify-between gap-5 border-t border-black/10 pt-8 sm:flex-row">
                <p className="text-sm text-gray-500">
                  Page {pagination.page} of {pagination.totalPage}
                </p>

                <div className="flex items-center gap-2">
                  {/* Previous */}
                  <button
                    onClick={handlePrevious}
                    disabled={!pagination.hasPrevPage}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-[#1A2420] transition hover:border-[#2F6F5C] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FiChevronLeft />
                  </button>

                  {/* Pages */}
                  {getPageNumbers().map((pageNumber) => (
                    <button
                      key={pageNumber}
                      onClick={() => handlePage(pageNumber)}
                      className={`hidden h-10 min-w-10 items-center justify-center rounded-lg px-3 text-sm sm:flex ${
                        pageNumber === page
                          ? "bg-[#1A2420] text-white"
                          : "border border-black/10 bg-white text-gray-700 hover:border-[#2F6F5C]"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  ))}

                  {/* Mobile current page */}
                  <div className="flex h-10 min-w-10 items-center justify-center rounded-lg bg-[#1A2420] px-3 text-sm text-white sm:hidden">
                    {page}
                  </div>

                  {/* Next */}
                  <button
                    onClick={handleNext}
                    disabled={!pagination.hasNextPage}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-black/10 bg-white text-[#1A2420] transition hover:border-[#2F6F5C] disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FiChevronRight />
                  </button>
                </div>
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
};

