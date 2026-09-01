"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url, img_url } from "./utils";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FiArrowLeft,
  FiArrowRight,
  FiCalendar,
  FiPlay,
  FiUser,
  FiArrowUpRight,
} from "react-icons/fi";

const PRIMARY = "#153497";

const NewsYt = () => {
  const [news, setNews] = useState([]);
  const [ytvideos, setYtVideos] = useState([]);


    

  const fetchNews = async () => {
    try {
      const response = await axios.get(`${base_url}/news/homepage`);

      if (response.data?.success) {
        setNews(response.data.news || []);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load news");
    }
  };

  /* =========================
      FETCH YOUTUBE
  ========================= */

  const fetchYt = async () => {
    try {
      const response = await axios.get(
        `${base_url}/learning/yt/homepage`
      );

      if (response.data?.success) {
        setYtVideos(response.data.ytvideos || []);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load videos");
    }
  };

  /* =========================
      YOUTUBE URL
  ========================= */

  const getYoutubeEmbedUrl = (url) => {
    try {
      if (!url) return "";

      let videoId = "";

      if (url.includes("/shorts/")) {
        videoId = url.split("/shorts/")[1]?.split("?")[0];
      } else if (url.includes("watch?v=")) {
        videoId = url.split("watch?v=")[1]?.split("&")[0];
      } else if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1]?.split("?")[0];
      }

      if (!videoId) return "";

      return `https://www.youtube.com/embed/${videoId}`;
    } catch (error) {
      return "";
    }
  };

  /* =========================
      DATE
  ========================= */

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });
  };

  /* =========================
      API
  ========================= */

  useEffect(() => {
    fetchNews();
    fetchYt();
  }, []);

  return (
    <section className="relative overflow-hidden  py-14 sm:py-16 lg:py-20">

      {/* Decorative background */}
      <div
        className="absolute -top-32 -left-32 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: PRIMARY }}
      />

      <div
        className="absolute -bottom-32 -right-32 h-72 w-72 rounded-full opacity-10 blur-3xl"
        style={{ backgroundColor: PRIMARY }}
      />

      <div className="relative container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ==================================================
            MAIN GRID
        ================================================== */}

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">

          {/* ==================================================
              NEWS
          ================================================== */}

          <div className="lg:col-span-8">

            {/* Header */}

            <div className="mb-7 flex items-end justify-between gap-4">

              <div>

                <div className="mb-2 flex items-center gap-2">

                  <span
                    className="h-1 w-8 rounded-full"
                    style={{ backgroundColor: PRIMARY }}
                  />

                  <span
                    className="text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: PRIMARY }}
                  >
                    Latest Updates
                  </span>

                </div>

                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Latest News
                </h2>

                <p className="mt-2 max-w-lg text-sm leading-6 text-gray-500 sm:text-base">
                  Stay updated with the latest insights, announcements
                  and developments from our experts.
                </p>

              </div>

              {/* Navigation */}

              <div className="hidden shrink-0 gap-2 sm:flex">

                <button
                  className="news-prev group flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 shadow-sm transition-all duration-300 hover:border-[#153497] hover:bg-[#153497] hover:text-white"
                  aria-label="Previous news"
                >
                  <FiArrowLeft className="text-lg transition-transform group-hover:-translate-x-0.5" />
                </button>

                <button
                  className="news-next group flex h-11 w-11 items-center justify-center rounded-full bg-[#153497] text-white shadow-md shadow-[#153497]/20 transition-all duration-300 hover:scale-105"
                  aria-label="Next news"
                >
                  <FiArrowRight className="text-lg transition-transform group-hover:translate-x-0.5" />
                </button>

              </div>

            </div>

            {/* News Slider */}

            {news.length > 0 ? (

              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Autoplay,
                ]}
                navigation={{
                  prevEl: ".news-prev",
                  nextEl: ".news-next",
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={20}
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 1.2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
                className="news-swiper !pb-12"
              >

                {news.map((item) => (

                  <SwiperSlide key={item._id}>

                    <article className="group h-full overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_8px_35px_rgba(21,52,151,0.07)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_15px_45px_rgba(21,52,151,0.14)]">

                      {/* Image */}

                      <div className="relative aspect-[16/10] overflow-hidden">

                        <img
                          src={`${img_url}${item.featuredImage}`}
                          alt={item.title}
                          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />

                        {/* Gradient */}

                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />

                        {/* Category */}

                        <div className="absolute left-4 top-4">

                          <span
                            className="rounded-full px-3 py-1.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-lg backdrop-blur-md"
                            style={{
                              backgroundColor: `${PRIMARY}e6`,
                            }}
                          >
                            {item.category}
                          </span>

                        </div>

                        {/* Arrow */}

                        <div className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#153497] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100">

                          <FiArrowUpRight />

                        </div>

                      </div>

                      {/* Content */}

                      <div className="p-5 sm:p-6">

                        {/* Date */}

                        <div className="mb-3 flex items-center gap-2 text-xs font-medium text-gray-400">

                          <FiCalendar
                            style={{ color: PRIMARY }}
                            className="text-sm"
                          />

                          <span>
                            {formatDate(item.publicationDate)}
                          </span>

                        </div>

                        {/* Title */}

                        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-gray-900 transition-colors duration-300 group-hover:text-[#153497] sm:text-xl">
                          {item.title}
                        </h3>

                        {/* Expert */}

                        <div className="mt-5 flex items-center gap-3 border-t border-gray-100 pt-4">

                          <div
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-white"
                            style={{
                              backgroundColor: PRIMARY,
                            }}
                          >
                            <FiUser className="text-sm" />
                          </div>

                          <div className="min-w-0">

                            <p className="truncate text-sm font-semibold text-gray-800">
                              {item.expertId?.fullname || "Expert"}
                            </p>

                            <p className="truncate text-xs text-gray-400">
                              {item.expertId?.designation || "Medical Expert"}
                            </p>

                          </div>

                        </div>

                      </div>

                    </article>

                  </SwiperSlide>

                ))}

              </Swiper>

            ) : (

              <div className="flex min-h-[350px] items-center justify-center rounded-3xl border border-gray-100 bg-white">

                <div className="text-center">

                  <div
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                    style={{
                      backgroundColor: PRIMARY,
                    }}
                  >
                    <FiCalendar className="text-xl" />
                  </div>

                  <p className="font-semibold text-gray-700">
                    No news available
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    Check back later for latest updates.
                  </p>

                </div>

              </div>

            )}

          </div>


          {/* ==================================================
              YOUTUBE
          ================================================== */}

          <div className="lg:col-span-4">

            {/* Header */}

            <div className="mb-7 flex items-end justify-between gap-4">

              <div>

                <div className="mb-2 flex items-center gap-2">

                  <span
                    className="h-1 w-8 rounded-full"
                    style={{ backgroundColor: PRIMARY }}
                  />

                  <span
                    className="text-xs font-bold uppercase tracking-[0.18em]"
                    style={{ color: PRIMARY }}
                  >
                    Watch & Learn
                  </span>

                </div>

                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-3xl">
                  Videos
                </h2>

              </div>

              {/* Navigation */}

              <div className="hidden shrink-0 gap-2 sm:flex">

                <button
                  className="yt-prev group flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-all hover:border-[#153497] hover:bg-[#153497] hover:text-white"
                  aria-label="Previous video"
                >
                  <FiArrowLeft />
                </button>

                <button
                  className="yt-next group flex h-10 w-10 items-center justify-center rounded-full bg-[#153497] text-white shadow-md shadow-[#153497]/20 transition-all hover:scale-105"
                  aria-label="Next video"
                >
                  <FiArrowRight />
                </button>

              </div>

            </div>


            {/* Video Slider */}

            {ytvideos.length > 0 ? (

              <Swiper
                modules={[
                  Navigation,
                  Pagination,
                  Autoplay,
                ]}
                navigation={{
                  prevEl: ".yt-prev",
                  nextEl: ".yt-next",
                }}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                }}
                autoplay={{
                  delay: 7000,
                  disableOnInteraction: false,
                  pauseOnMouseEnter: true,
                }}
                spaceBetween={20}
                slidesPerView={1}
                className="video-swiper !pb-12"
              >

                {ytvideos.map((video) => {

                  const embedUrl =
                    getYoutubeEmbedUrl(video.ytlink);

                  return (

                    <SwiperSlide key={video._id}>

                      <article className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_8px_35px_rgba(21,52,151,0.09)]">

                        {/* Video */}

                        <div className="relative aspect-[9/13] overflow-hidden bg-black">

                          {embedUrl && (

                            <iframe
                              src={`${embedUrl}?rel=0`}
                              title={video.category}
                              className="absolute inset-0 h-full w-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                            />

                          )}

                          {/* Video label */}

                          <div className="pointer-events-none absolute left-4 top-4 z-10">

                            <div
                              className="flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold text-white shadow-lg backdrop-blur-md"
                              style={{
                                backgroundColor: `${PRIMARY}e6`,
                              }}
                            >
                              <FiPlay className="text-xs" />

                              WATCH NOW
                            </div>

                          </div>

                        </div>


                        {/* Video info */}

                        <div className="p-5">

                          <span
                            className="text-xs font-bold uppercase tracking-wider"
                            style={{
                              color: PRIMARY,
                            }}
                          >
                            {video.category}
                          </span>

                          <h3 className="mt-2 line-clamp-2 text-lg font-bold leading-snug text-gray-900">
                            Learn about {video.category}
                          </h3>

                          <div className="mt-4 flex items-center gap-3 border-t border-gray-100 pt-4">

                            <div
                              className="flex h-8 w-8 items-center justify-center rounded-full text-white"
                              style={{
                                backgroundColor: PRIMARY,
                              }}
                            >
                              <FiUser className="text-xs" />
                            </div>

                            <div>

                              <p className="text-sm font-semibold text-gray-700">
                                {video.expertId?.fullname || "Expert"}
                              </p>

                              <p className="text-xs text-gray-400">
                                {video.expertId?.designation || "Medical Expert"}
                              </p>

                            </div>

                          </div>

                        </div>

                      </article>

                    </SwiperSlide>

                  );

                })}

              </Swiper>

            ) : (

              <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-gray-100 bg-white">

                <div className="text-center">

                  <div
                    className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl text-white"
                    style={{
                      backgroundColor: PRIMARY,
                    }}
                  >
                    <FiPlay className="text-xl" />
                  </div>

                  <p className="font-semibold text-gray-700">
                    No videos available
                  </p>

                  <p className="mt-1 text-sm text-gray-400">
                    New learning videos will appear here.
                  </p>

                </div>

              </div>

            )}

          </div>

        </div>

      </div>

      {/* Swiper pagination styling */}

      <style jsx global>{`

        .news-swiper .swiper-pagination,
        .video-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .news-swiper .swiper-pagination-bullet,
        .video-swiper .swiper-pagination-bullet {
          width: 7px;
          height: 7px;
          opacity: 0.25;
          background: #153497;
          transition: all 0.3s ease;
        }

        .news-swiper .swiper-pagination-bullet-active,
        .video-swiper .swiper-pagination-bullet-active {
          width: 24px;
          border-radius: 10px;
          opacity: 1;
          background: #153497;
        }

      `}</style>

    </section>
  );
};

export default NewsYt;

