"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url, img_url } from "./utils";

import {
  FiArrowUpRight,
  FiBookOpen,
  FiUser,
  FiChevronRight,
} from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Link from "next/link";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  /* ==========================================================
     FETCH ARTICLES
  ========================================================== */

  const fetchArticles = async () => {
    try {
      setLoading(true);

      const response = await axios.get(
        `${base_url}/learning/article/homepage`
      );

      const data = response.data;



      if (data.success) {
       setArticles(data.article)
      } else {
        setArticles([]);
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to load articles");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  /* ==========================================================
     LOADING
  ========================================================== */

  if (loading) {
    return (
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4">

          <div className="mb-7">
            <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
            <div className="mt-3 h-8 w-64 animate-pulse rounded bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[360px] animate-pulse rounded-3xl bg-slate-100"
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

  if (!articles.length) {
    return (
      <section className="w-full bg-white py-12 sm:py-16">
        <div className="container mx-auto px-4">

          <div className="flex min-h-[260px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-slate-50 text-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0D2B45]/10 text-[#0D2B45]">
              <FiBookOpen size={24} />
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-800">
              No Articles Available
            </h3>

            <p className="mt-2 text-sm text-slate-500">
              New learning resources will be available soon.
            </p>

          </div>

        </div>
      </section>
    );
  }

  /* ==========================================================
     MAIN UI
  ========================================================== */

  return (
    <section className="w-full bg-white py-12 sm:py-16">
      <div className="container mx-auto px-4">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="mb-7 flex items-end justify-between gap-4">

          <div>

            <div className="mb-2 flex items-center gap-2">

              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0D2B45]/10 text-[#0D2B45]">
                <FiBookOpen size={15} />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#100da3]">
                Learning & Knowledge
              </span>

            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Latest Articles
            </h2>

            <p className="mt-2 max-w-xl text-sm text-slate-500">
              Learn from practical insights, expert knowledge,
              and resources for healthcare professionals.
            </p>

          </div>

          {/* View All */}

          <Link
            href="/articles"
            className="group hidden shrink-0 items-center gap-1.5 text-xs font-semibold text-[#100da3] sm:flex"
          >
            View All

            <FiChevronRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

      <div className="overflow-hidden">
        <Swiper
          modules={[Autoplay]}
          loop={articles.length > 3}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={700}
          spaceBetween={18}
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

          {articles.map((article) => (

            <SwiperSlide
              key={article._id}
              className=""
            >

              <ArticleCard article={article} />

            </SwiperSlide>

          ))}

        </Swiper>
</div>
        {/* Mobile View All */}



      </div>
    </section>
  );
};

/* =============================================================
   ARTICLE CARD
============================================================= */

const ArticleCard = ({ article }) => {
  return (
    <article className="group h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#0D2B45]/30 hover:shadow-xl">

      {/* ======================================================
          THUMBNAIL
      ====================================================== */}

      <div className="relative h-[190px] overflow-hidden bg-slate-100">

        {article?.thumbnail ? (
          <img
            src={`${img_url}${article.thumbnail}`}
            alt={article?.title || "Article"}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[#0D2B45]">
            <FiBookOpen size={35} />
          </div>
        )}

        {/* Category */}

        <div className="absolute left-4 top-4">

          <span className="rounded-full bg-white/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#100da3] shadow-sm backdrop-blur-sm">
            {article?.category}
          </span>

        </div>

        {/* Arrow */}

        <div className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full bg-white text-slate-800 opacity-0 shadow-md transition-all duration-300 group-hover:opacity-100">
          <FiArrowUpRight size={16} />
        </div>

      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}

      <div className="flex flex-col p-5">

        <h3 className="line-clamp-2 min-h-[52px] text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#100da3]">
          {article?.title}
        </h3>

        {article?.shortDescription && (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
            {article.shortDescription}
          </p>
        )}

        {/* ==================================================
            AUTHOR
        ================================================== */}

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

          <div className="flex min-w-0 items-center gap-2.5">

            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0D2B45]/10 text-[#0D2B45]">
              <FiUser size={14} />
            </div>

            <div className="min-w-0">

              <p className="text-[9px] text-slate-400">
                Written by
              </p>

              <p className="truncate text-xs font-semibold text-slate-700">
                {article?.expertId?.fullname || "Expert"}
              </p>

            </div>

          </div>

          {/* */}

          <Link
            href={`/articles/${article?.slug}`}
            className="group/read inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-[#100da3]"
          >
            Read

            <FiArrowUpRight
              size={14}
              className="transition-transform group-hover/read:translate-x-0.5 group-hover/read:-translate-y-0.5"
            />

          </Link>

        </div>

      </div>

    </article>
  );
};

export default Articles;





