"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url, img_url } from "./utils";

import { FiArrowUpRight, FiBookOpen, FiUser } from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Link from "next/link";
import ArticleCard from "./ArticleCard";
import { useDispatch, useSelector } from "react-redux";
import { toggleArticles } from "./store/userSlice";

/* =========================================================
   FONTS + BASE STYLES (inject once)
   Serif for editorial voice, sans for interface text.
========================================================= */
const ArticleStyles = () => (
  <style jsx global>{`
    @import url("https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,400;8..60,500;8..60,600&family=Inter:wght@400;500;600&display=swap");

    .articles-serif {
      font-family: "Source Serif 4", Georgia, serif;
    }
    .articles-sans {
      font-family: "Inter", -apple-system, sans-serif;
    }

    @keyframes articlesFadeIn {
      from {
        opacity: 0;
        transform: translateY(10px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .articles-fade-in {
      animation: articlesFadeIn 0.6s ease-out both;
    }

    @media (prefers-reduced-motion: reduce) {
      .articles-fade-in {
        animation: none;
      }
    }
  `}</style>
);

const Articles = () => {
   const user = useSelector(state=>state.user)
   const dispatch = useDispatch()
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchArticles = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${base_url}/learning/article/homepage`
      );
      const data = response.data;
      if (data.success) {
        setArticles(data.article);
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
      <section className="w-full bg-[#F7F5F0] py-16 sm:py-20">
        <ArticleStyles />
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-md">
            <div className="h-8 w-56 animate-pulse rounded-sm bg-[#e7e3d8]" />
            <div className="mt-3 h-4 w-72 animate-pulse rounded-sm bg-[#e7e3d8]" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[380px] animate-pulse rounded-sm bg-[#eeece4]"
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
      <section className="w-full bg-[#F7F5F0] py-16 sm:py-20">
        <ArticleStyles />
        <div className="container mx-auto px-4">
          <div className="flex min-h-[240px] flex-col items-center justify-center border border-[#DEDACE] text-center">
            <FiBookOpen size={26} className="text-[#2F6F5C]" />
            <h3 className="articles-serif mt-4 text-xl text-[#1A2420]">
              No articles yet
            </h3>
            <p className="articles-sans mt-2 text-sm text-[#6B7570]">
              New reading for your practice will appear here soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

 


const handelToggle = async(articleid)=>{
try {
  const response = await axios.get(`${base_url}/auth/article/${articleid}`,{withCredentials:true})
  const data = await response.data;
  if(data.success){

dispatch(toggleArticles(articleid))
    
  }else{
    toast.error(data.message)
  }
  
} catch (error) {
  toast.error(error?.response?.data?.message)
  
}
}

  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24">
      <ArticleStyles />

      <div className="container mx-auto px-4">
        {/* ---------------- HEADER ---------------- */}
        <div className="mb-10 flex flex-col gap-6 border-b border-[#DEDACE] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="articles-serif text-3xl leading-tight text-[#1A2420] sm:text-4xl">
              Latest from the clinic
            </h2>
            <p className="articles-sans mt-3 text-[15px] leading-relaxed text-[#6B7570]">
              Practical insight and expert knowledge, written for
              healthcare professionals who don't have time to waste.
            </p>
          </div>

          <Link
            href="/articles"
            className="articles-sans group inline-flex shrink-0 items-center gap-1.5 border-b border-[#1A2420] pb-0.5 text-sm font-medium text-[#1A2420] transition-colors hover:border-[#2F6F5C] hover:text-[#2F6F5C]"
          >
            Browse all articles
            <FiArrowUpRight
              size={14}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {/* ---------------- SWIPER ---------------- */}
        <div className="overflow-hidden pb-2">
          <Swiper
            modules={[Autoplay]}
            loop={articles.length > 3}
            autoplay={{
              delay: 4200,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={650}
            spaceBetween={28}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.4 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {articles.map((article, i) => (
              <SwiperSlide key={article._id}>
                <div
                  className="articles-fade-in"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <ArticleCard article={article} user={user} handelToggle={handelToggle} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};


export default Articles;