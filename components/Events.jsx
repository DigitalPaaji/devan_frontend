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

/* =============================================================
   EVENT CARD
============================================================= */
const EventCard = ({ event }) => {
  const eventDate = event?.date ? new Date(event.date) : null;

  const formatDay = eventDate
    ? eventDate.toLocaleDateString("en-IN", { day: "2-digit" })
    : "--";

  const formatMonth = eventDate
    ? eventDate.toLocaleDateString("en-IN", { month: "short" })
    : "---";

  const formatFullDate = eventDate
    ? eventDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Date to be announced";

  return (
    <article className="group flex h-full flex-col border border-[#DEDACE] bg-[#FCFBF8] transition-colors duration-300 hover:border-[#2F6F5C]">
      {/* ======================================================
          IMAGE
      ====================================================== */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-[#DEDACE] bg-[#EFECE3]">
        {event?.thumbnail || event?.image ? (
          <img
            src={`${img_url}${event.thumbnail || event.image}`}
            alt={event?.title || "Event"}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[#2F6F5C]">
            <FiCalendar size={32} />
          </div>
        )}

        {/* Date Badge */}
        <div className="absolute left-0 top-0 flex overflow-hidden">
          <div className="flex w-12 flex-col items-center justify-center bg-[#1A2420] py-2 text-[#F7F5F0]">
            <span className="hero-serif text-lg leading-none">
              {formatDay}
            </span>
            <span className="hero-sans mt-1 text-[9px] font-medium uppercase tracking-wide">
              {formatMonth}
            </span>
          </div>
        </div>

        {/* Event Type */}
        <div className="absolute right-3 top-3">
          <span className="hero-sans flex items-center gap-1.5 bg-[#FCFBF8] px-3 py-1.5 text-[10px] font-medium uppercase tracking-wide text-[#2F6F5C]">
            {event?.eventType === "ONLINE" ? (
              <FiVideo size={11} />
            ) : (
              <FiUsers size={11} />
            )}
            {event?.eventType || "Event"}
          </span>
        </div>
      </div>

      {/* ======================================================
          CONTENT
      ====================================================== */}
      <div className="flex flex-1 flex-col px-5 py-5">
        <h3 className="hero-serif line-clamp-2 min-h-[3.2rem] text-[19px] leading-snug text-[#1A2420]">
          {event?.title || "Upcoming Event"}
        </h3>

        {event?.shortDescription && (
          <p className="hero-sans mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-[#6B7570]">
            {event.shortDescription}
          </p>
        )}

        {/* Event Details */}
        <div className="mt-4 space-y-2">
          <div className="hero-sans flex items-center gap-2 text-xs text-[#6B7570]">
            <FiCalendar size={13} className="shrink-0 text-[#9AA39D]" />
            <span>{formatFullDate}</span>
          </div>

          {event?.time && (
            <div className="hero-sans flex items-center gap-2 text-xs text-[#6B7570]">
              <FiClock size={13} className="shrink-0 text-[#9AA39D]" />
              <span>{event.time}</span>
            </div>
          )}

          {event?.location && (
            <div className="hero-sans flex items-center gap-2 text-xs text-[#6B7570]">
              <FiMapPin size={13} className="shrink-0 text-[#9AA39D]" />
              <span className="line-clamp-1">{event.location}</span>
            </div>
          )}
        </div>

        {/* Spacer keeps footers aligned across the row */}
        <div className="flex-1" />

        {/* ==================================================
            FOOTER
        ================================================== */}
        <div className="mt-5 flex items-center justify-between border-t border-[#DEDACE] pt-4">
          <span className="hero-sans text-[10px] font-medium uppercase tracking-wider text-[#9AA39D]">
            Upcoming
          </span>

          <Link
            href={`/events/${event?.slug || event?._id}`}
            className="hero-sans group/read inline-flex items-center gap-1.5 text-[12.5px] font-medium text-[#2F6F5C]"
          >
            View event
            <FiArrowUpRight
              size={13}
              className="transition-transform group-hover/read:translate-x-0.5 group-hover/read:-translate-y-0.5"
            />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default Events;