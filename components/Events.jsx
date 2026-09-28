"use client";

import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { base_url, img_url } from "./utils";

import {
  FiArrowUpRight,
  FiCalendar,
  FiClock,
  FiMapPin,
  FiUsers,
  FiVideo,
} from "react-icons/fi";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import Link from "next/link";
import EventCard from "./EventCard";

const Events = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);

      const response = await axios.get(`${base_url}/events/homepage`);

      const data = response.data;

      if (Array.isArray(data)) {
        setEvents(data);
      } else if (Array.isArray(data?.events)) {
        setEvents(data.events);
      } else if (Array.isArray(data?.data)) {
        setEvents(data.data);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error(error);
      toast.error("Unable to load events");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  /* ==========================================================
     LOADING
  ========================================================== */
  if (loading) {
    return (
      <section className="w-full bg-[#F7F5F0] py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="mb-10 max-w-md">
            <div className="h-8 w-56 animate-pulse rounded-sm bg-[#e7e3d8]" />
            <div className="mt-3 h-4 w-72 animate-pulse rounded-sm bg-[#e7e3d8]" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[360px] animate-pulse rounded-sm bg-[#eeece4]"
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
  if (!events.length) {
    return (
      <section className="w-full bg-[#F7F5F0] py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="flex min-h-[240px] flex-col items-center justify-center border border-[#DEDACE] text-center">
            <FiCalendar size={26} className="text-[#2F6F5C]" />
            <h3 className="hero-serif mt-4 text-xl text-[#1A2420]">
              No upcoming events
            </h3>
            <p className="hero-sans mt-2 max-w-md text-sm text-[#6B7570]">
              There are no upcoming events scheduled right now. Check back
              soon for new events and activities.
            </p>
          </div>
        </div>
      </section>
    );
  }

  /* ==========================================================
     MAIN
  ========================================================== */
  return (
    <section className="w-full bg-[#F7F5F0] py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* ---------------- HEADER ---------------- */}
        <div className="mb-10 flex flex-col gap-6 border-b border-[#DEDACE] pb-8 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <div className="mb-3 flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#2F6F5C]/25 bg-[#FCFBF8] text-[#2F6F5C]">
                <FiCalendar size={15} />
              </span>
              <span className="hero-sans text-[11px] font-medium uppercase tracking-[0.18em] text-[#2F6F5C]">
                Events &amp; Activities
              </span>
            </div>

            <h2 className="hero-serif text-3xl leading-tight text-[#1A2420] sm:text-4xl">
              Upcoming events
            </h2>
            <p className="hero-sans mt-3 text-[15px] leading-relaxed text-[#6B7570]">
              Stay connected with upcoming learning events, workshops,
              discussions, and professional activities.
            </p>
          </div>

          <Link
            href="/events"
            className="hero-sans group inline-flex shrink-0 items-center gap-1.5 border-b border-[#1A2420] pb-0.5 text-sm font-medium text-[#1A2420] transition-colors hover:border-[#2F6F5C] hover:text-[#2F6F5C]"
          >
            View all events
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
            loop={events.length > 3}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            spaceBetween={28}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1.3 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {events.map((event, i) => (
              <SwiperSlide key={event._id}>
                <div
                  className="hero-fade-in"
                  style={{ animationDelay: `${i * 70}ms` }}
                >
                  <EventCard event={event} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};


export default Events;