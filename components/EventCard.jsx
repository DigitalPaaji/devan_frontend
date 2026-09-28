import React from 'react'
import { img_url } from './utils';
import { FiArrowUpRight, FiCalendar, FiClock, FiMapPin, FiUsers, FiVideo } from 'react-icons/fi';
import Link from 'next/link';

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
}

export default EventCard