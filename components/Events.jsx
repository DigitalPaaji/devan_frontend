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
  FiChevronRight,
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

      const response = await axios.get(
        `${base_url}/events/homepage`
      );

      const data = response.data;

      console.log(data);

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
      <section className="w-full bg-slate-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">

          <div className="mb-7">
            <div className="h-4 w-32 animate-pulse rounded bg-slate-200" />
            <div className="mt-3 h-8 w-64 animate-pulse rounded bg-slate-200" />
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="h-[360px] animate-pulse rounded-3xl bg-white"
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
      <section className="w-full bg-slate-50 py-12 sm:py-16">
        <div className="container mx-auto px-4">

          <div className="flex min-h-[260px] flex-col items-center justify-center rounded-3xl border border-dashed border-slate-200 bg-white text-center">

            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#153497]/10 text-[#153497]">
              <FiCalendar size={24} />
            </div>

            <h3 className="mt-4 text-xl font-bold text-slate-800">
              No Upcoming Events
            </h3>

            <p className="mt-2 max-w-md text-sm text-slate-500">
              There are no upcoming events scheduled at the moment.
              Check back soon for new events and activities.
            </p>

          </div>

        </div>
      </section>
    );
  }

  return (
    <section className="w-full bg-slate-50 py-12 sm:py-16">
      <div className="container mx-auto px-4">

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="mb-7 flex items-end justify-between gap-4">

          <div>

            <div className="mb-2 flex items-center gap-2">

              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#153497]/10 text-[#153497]">
                <FiCalendar size={15} />
              </span>

              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#100da3]">
                Events & Activities
              </span>

            </div>

            <h2 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
              Upcoming Events
            </h2>

            <p className="mt-2 max-w-xl text-sm text-slate-500">
              Stay connected with upcoming learning events,
              workshops, discussions, and professional activities.
            </p>

          </div>

          {/* View All */}

          <Link
            href="/events"
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
          loop={events.length > 3}
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
              slidesPerView: 1.3,
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

          {events.map((event) => (
            <SwiperSlide
              key={event._id}
              className=""
            >
              <EventCard event={event} />
            </SwiperSlide>
          ))}

        </Swiper>
</div>
        {/* Mobile View All */}

        <div className="mt-6 flex justify-center sm:hidden">

          <Link
            href="/events"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-xs font-semibold text-slate-700"
          >
            View All Events
            <FiArrowUpRight size={14} />
          </Link>

        </div>

      </div>
    </section>
  );
};

/* =============================================================
   EVENT CARD
============================================================= */

const EventCard = ({ event }) => {

  const eventDate = event?.date
    ? new Date(event.date)
    : null;

  const formatDay = eventDate
    ? eventDate.toLocaleDateString("en-IN", {
        day: "2-digit",
      })
    : "--";

  const formatMonth = eventDate
    ? eventDate.toLocaleDateString("en-IN", {
        month: "short",
      })
    : "---";

  const formatFullDate = eventDate
    ? eventDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "short",
        year: "numeric",
      })
    : "Date to be announced";

  return (
    <article className="group h-full overflow-hidden rounded-[24px] border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:border-[#153497]/30 hover:shadow-xl">

      {/* ======================================================
          IMAGE
      ====================================================== */}

      <div className="relative h-[170px] overflow-hidden bg-slate-100">

        {event?.thumbnail || event?.image ? (
          <img
            src={`${img_url}${event.thumbnail || event.image}`}
            alt={event?.title || "Event"}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-[#153497]/5 text-[#153497]">
            <FiCalendar size={40} />
          </div>
        )}

        {/* Date Badge */}

        <div className="absolute left-4 top-4 flex overflow-hidden rounded-xl bg-white shadow-lg">

          <div className="flex w-12 flex-col items-center justify-center bg-[#153497] py-2 text-white">

            <span className="text-lg font-bold leading-none">
              {formatDay}
            </span>

            <span className="mt-1 text-[9px] font-semibold uppercase">
              {formatMonth}
            </span>

          </div>

        </div>

        {/* Event Type */}

        <div className="absolute right-4 top-4">

          <span className="flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1.5 text-[9px] font-bold uppercase tracking-wider text-[#100da3] shadow-sm backdrop-blur-sm">

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

      <div className="flex flex-col p-5">

        <h3 className="line-clamp-2 text-lg font-bold leading-snug text-slate-900 transition-colors group-hover:text-[#100da3]">
          {event?.title || "Upcoming Event"}
        </h3>

        {event?.shortDescription && (
          <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
            {event.shortDescription}
          </p>
        )}

        {/* Event Details */}

        <div className="mt-4 space-y-2">

          <div className="flex items-center gap-2 text-xs text-slate-500">

            <FiCalendar
              size={14}
              className="shrink-0 text-[#153497]"
            />

            <span>
              {formatFullDate}
            </span>

          </div>

          {event?.time && (
            <div className="flex items-center gap-2 text-xs text-slate-500">

              <FiClock
                size={14}
                className="shrink-0 text-[#153497]"
              />

              <span>
                {event.time}
              </span>

            </div>
          )}

          {event?.location && (
            <div className="flex items-center gap-2 text-xs text-slate-500">

              <FiMapPin
                size={14}
                className="shrink-0 text-[#153497]"
              />

              <span className="line-clamp-1">
                {event.location}
              </span>

            </div>
          )}

        </div>

        {/* ==================================================
            FOOTER
        ================================================== */}

        <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">

          <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
            Upcoming
          </span>

          <Link
            href={`/events/${event?.slug || event?._id}`}
            className="group/read inline-flex items-center gap-1.5 rounded-xl bg-[#153497] px-4 py-2.5 text-xs font-semibold text-white transition-all hover:bg-[#9676e8] hover:shadow-md"
          >
            View Event

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

export default Events;

