
"use client";

import React, { Suspense, useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import axios from "axios";
import {
  FiSearch,
  FiChevronLeft,
  FiChevronRight,
  FiCalendar,
  FiMapPin,
  FiRefreshCw,
} from "react-icons/fi";
import { toast } from "react-toastify";

import EventCard from "@/components/EventCard";
import { base_url } from "@/components/utils";


const EventPage = () => {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[400px] items-center justify-center">
          Loading events...
        </div>
      }
    >
      <Events />
    </Suspense>
  );
};

export default EventPage;


// ================= EVENTS =================

const Events = () => {

  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();

  // URL params
  const page = Number(query.get("page")) || 1;
  const limit = Number(query.get("limit")) || 20;
  const searchParam = query.get("search") || "";
  const statusParam = query.get("status") || "PUBLISHED";

  // States
  const [events, setEvents] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPage: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const [searchInput, setSearchInput] = useState(searchParam);
  const [loading, setLoading] = useState(true);

  const [status, setStatus] = useState(statusParam);


  // ================= UPDATE URL =================

  const updateParams = useCallback(
    (updates = {}) => {

      const params = new URLSearchParams(query.toString());

      Object.entries(updates).forEach(([key, value]) => {

        if (
          value === undefined ||
          value === null ||
          value === ""
        ) {
          params.delete(key);
        } else {
          params.set(key, String(value));
        }

      });

      router.push(`${pathname}?${params.toString()}`, {
        scroll: false,
      });

    },
    [query, router, pathname]
  );


  // ================= FETCH EVENTS =================

  const fetchEvent = useCallback(async () => {

    try {

      setLoading(true);

      const params = new URLSearchParams();

      params.set("page", String(page));
      params.set("limit", String(limit));
      params.set("status", statusParam);

      if (searchParam.trim()) {
        params.set("search", searchParam.trim());
      }

      const response = await axios.get(
        `${base_url}/events/all?${params.toString()}`
      );

      const data = response.data;

      if (data.success) {

        setEvents(data.events || []);

        setPagination(
          data.pagination || {
            page: 1,
            limit: 20,
            total: 0,
            totalPage: 1,
            hasNextPage: false,
            hasPrevPage: false,
          }
        );

      } else {

        setEvents([]);
        toast.error(data.message || "Unable to fetch events");

      }

    } catch (error) {

      console.error("Fetch Events Error:", error);

      setEvents([]);

      toast.error(
        error?.response?.data?.message ||
        "Something went wrong while fetching events"
      );

    } finally {

      setLoading(false);

    }

  }, [page, limit, searchParam, statusParam]);


  useEffect(() => {

    fetchEvent();

  }, [fetchEvent]);


  // ================= SEARCH =================

  const handleSearch = (e) => {

    e.preventDefault();

    updateParams({
      page: 1,
      search: searchInput.trim() || null,
    });

  };


  // ================= STATUS =================

  const handleStatusChange = (value) => {

    setStatus(value);

    updateParams({
      page: 1,
      status: value,
    });

  };


  // ================= PAGINATION =================

  const goToPage = (nextPage) => {

    if (nextPage < 1 || nextPage > pagination.totalPage) {
      return;
    }

    updateParams({
      page: nextPage,
    });

  };


  // ================= RESET =================

  const handleReset = () => {

    setSearchInput("");
    setStatus("PUBLISHED");

    router.push(`${pathname}?page=1&limit=${limit}&status=PUBLISHED`, {
      scroll: false,
    });

  };


  return (

    <main className="min-h-screen bg-[#F7F5F0] px-5 py-10 text-[#1A2420] sm:px-10 lg:px-20 ">

      <div className="mx-auto container px-4">


        {/* ================= HEADER ================= */}

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>

            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-[#2F6F5C]">
              Sterilization Champions
            </p>

            <h1 className="text-4xl font-semibold tracking-tight sm:text-6xl">
              Upcoming Events
            </h1>

            <p className="mt-5 max-w-xl text-sm leading-7 text-[#1A2420]/60 sm:text-base">
              Discover professional events, educational programs,
              and opportunities to connect with the sterilization
              community.
            </p>

          </div>

          <div className="flex items-center gap-2 text-sm text-[#1A2420]/50">

            <FiCalendar size={17} />

            <span>
              {pagination.total} Events
            </span>

          </div>

        </div>


        {/* ================= FILTERS ================= */}

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-[#1A2420]/10 bg-white p-4 sm:p-5 lg:flex-row lg:items-center lg:justify-between">


          {/* SEARCH */}

          <form
            onSubmit={handleSearch}
            className="flex w-full gap-2 lg:max-w-md"
          >

            <div className="relative flex-1">

              <FiSearch
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#1A2420]/40"
              />

              <input
                type="search"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search events..."
                className="w-full rounded-xl border border-[#1A2420]/10 bg-[#F7F5F0]/50 py-3 pl-11 pr-4 text-sm outline-none focus:border-[#2F6F5C]"
              />

            </div>

            <button
              type="submit"
              className="rounded-xl bg-[#2F6F5C] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#1A2420]"
            >
              Search
            </button>

          </form>


          {/* STATUS */}

          <div className="flex flex-wrap items-center gap-3">

            <select
              value={status}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="rounded-xl border border-[#1A2420]/10 bg-[#F7F5F0] px-4 py-3 text-sm outline-none focus:border-[#2F6F5C]"
            >

              <option value="PUBLISHED">
                Published
              </option>

              <option value="COMPLETED">
                Completed
              </option>

            </select>


            <button
              onClick={handleReset}
              className="flex items-center gap-2 rounded-xl border border-[#1A2420]/10 px-4 py-3 text-sm font-medium transition hover:bg-[#F7F5F0]"
            >

              <FiRefreshCw size={16} />

              Reset

            </button>

          </div>

        </div>


        {/* ================= EVENTS GRID ================= */}

        {loading ? (

          <div className="grid gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">

            {[1, 2, 3, 4, 5, 6].map((item) => (

              <div
                key={item}
                className="animate-pulse overflow-hidden rounded-2xl bg-white"
              >

                <div className="h-56 bg-[#1A2420]/10" />

                <div className="space-y-3 p-5">

                  <div className="h-4 w-3/4 rounded bg-[#1A2420]/10" />

                  <div className="h-4 w-1/2 rounded bg-[#1A2420]/10" />

                  <div className="h-10 rounded bg-[#1A2420]/10" />

                </div>

              </div>

            ))}

          </div>

        ) : events.length === 0 ? (

          <div className="mt-10 rounded-2xl border border-dashed border-[#1A2420]/20 bg-white px-6 py-20 text-center">

            <FiCalendar
              size={40}
              className="mx-auto text-[#2F6F5C]/60"
            />

            <h2 className="mt-5 text-2xl font-semibold">
              No Events Found
            </h2>

            <p className="mt-3 text-sm text-[#1A2420]/50">
              Try changing your search or selecting another status.
            </p>

            <button
              onClick={handleReset}
              className="mt-6 rounded-full bg-[#2F6F5C] px-6 py-3 text-sm font-semibold text-white"
            >
              Reset Filters
            </button>

          </div>

        ) : (

          <div className="grid gap-6 pt-10 sm:grid-cols-2 lg:grid-cols-3">

            {events.map((event) => (

              <EventCard
                key={event._id}
                event={event}
              />

            ))}

          </div>

        )}


        {/* ================= PAGINATION ================= */}

        {!loading && events.length > 0 && (

          <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-[#1A2420]/10 pt-7 sm:flex-row">

            <p className="text-sm text-[#1A2420]/50">

              Page{" "}
              <span className="font-semibold text-[#1A2420]">
                {pagination.page}
              </span>{" "}
              of{" "}
              <span className="font-semibold text-[#1A2420]">
                {pagination.totalPage}
              </span>

            </p>


            <div className="flex items-center gap-3">

              <button
                disabled={!pagination.hasPrevPage}
                onClick={() => goToPage(pagination.page - 1)}
                className="flex items-center gap-2 rounded-xl border border-[#1A2420]/10 bg-white px-4 py-3 text-sm font-medium transition hover:bg-[#2F6F5C] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#1A2420]"
              >

                <FiChevronLeft size={17} />

                Previous

              </button>


              <button
                disabled={!pagination.hasNextPage}
                onClick={() => goToPage(pagination.page + 1)}
                className="flex items-center gap-2 rounded-xl border border-[#1A2420]/10 bg-white px-4 py-3 text-sm font-medium transition hover:bg-[#2F6F5C] hover:text-white disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:bg-white disabled:hover:text-[#1A2420]"
              >

                Next

                <FiChevronRight size={17} />

              </button>

            </div>

          </div>

        )}

      </div>

    </main>

  );

};