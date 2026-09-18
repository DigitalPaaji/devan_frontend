"use client";

import Loading from "@/components/Loading";
import { base_url, img_url } from "@/components/utils";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React, { Suspense, useCallback, useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  FiArrowRight,
  FiCalendar,
  FiChevronLeft,
  FiChevronRight,
  FiFilter,
  FiSearch,
  FiX,
} from "react-icons/fi";
import Newscard from "@/components/Newscard";

const categories = [
  "CSSD Supervisor",
  "CSSD Manager",
  "CSSD Technician",
  "Infection Control",
];

const page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <News />
    </Suspense>
  );
};

export default page;

const News = () => {
  const router = useRouter();
  const pathname = usePathname();
  const query = useSearchParams();

  const currentPage = Number(query.get("page")) || 1;
  const limit = Number(query.get("limit")) || 20;
  const searchParam = query.get("search") || "";
  const categoryParam = query.get("category") || "";

  const [news, setNews] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPage: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });

  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState(searchParam);
  const [mobileFilter, setMobileFilter] = useState(false);

  // --------------------------------------------------
  // FETCH NEWS
  // --------------------------------------------------

  const fetchNews = useCallback(async () => {
    try {
      setLoading(true);

      const params = new URLSearchParams();

      params.set("page", currentPage);
      params.set("limit", limit);

      if (searchParam) {
        params.set("search", searchParam);
      }

      if (categoryParam) {
        params.set("category", categoryParam);
      }

      const response = await axios.get(
        `${base_url}/news/all?${params.toString()}`
      );

      const data = response.data;

      if (data?.success) {
        setNews(data.news || []);

        setPagination(
          data.pagination || {
            page: currentPage,
            limit,
            total: data.news?.length || 0,
            totalPage: 1,
            hasNextPage: false,
            hasPrevPage: false,
          }
        );
      } else {
        setNews([]);
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message || "Failed to load news"
      );

      setNews([]);
    } finally {
      setLoading(false);
    }
  }, [currentPage, limit, searchParam, categoryParam]);

  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  // --------------------------------------------------
  // UPDATE QUERY
  // --------------------------------------------------

  const updateQuery = (values = {}) => {
    const params = new URLSearchParams(query.toString());

    Object.entries(values).forEach(([key, value]) => {
      if (value !== undefined && value !== null && value !== "") {
        params.set(key, value);
      } else {
        params.delete(key);
      }
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  // --------------------------------------------------
  // SEARCH
  // --------------------------------------------------

  const handleSearch = (e) => {
    e.preventDefault();

    updateQuery({
      search: search.trim(),
      page: 1,
    });
  };

  // --------------------------------------------------
  // CATEGORY
  // --------------------------------------------------

  const handleCategory = (category) => {
    updateQuery({
      category,
      page: 1,
    });

    setMobileFilter(false);
  };

  // --------------------------------------------------
  // CLEAR FILTERS
  // --------------------------------------------------

  const clearFilters = () => {
    setSearch("");

    router.push(pathname);
    setMobileFilter(false);
  };

  // --------------------------------------------------
  // PAGINATION
  // --------------------------------------------------

  const goToPage = (page) => {
    if (page < 1 || page > pagination.totalPage) return;

    updateQuery({
      page,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // --------------------------------------------------
  // DATE
  // --------------------------------------------------

  const formatDate = (date) => {
    if (!date) return "";

    return new Date(date).toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // --------------------------------------------------
  // PAGINATION NUMBERS
  // --------------------------------------------------

  const getPaginationNumbers = () => {
    const total = pagination.totalPage;
    const current = pagination.page;

    if (total <= 5) {
      return Array.from({ length: total }, (_, i) => i + 1);
    }

    if (current <= 3) {
      return [1, 2, 3, 4, "...", total];
    }

    if (current >= total - 2) {
      return [1, "...", total - 3, total - 2, total - 1, total];
    }

    return [1, "...", current - 1, current, current + 1, "...", total];
  };

  const hasFilters = searchParam || categoryParam;

  return (
    <main className="min-h-screen bg-white">
      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto container pt-10 px-4 pb-12 sm:px-6 lg:px-8 lg:pb-16">
          <div className="max-w-3xl">
            <div className="mb-4 flex items-center gap-3">
              <span className="h-px w-10 bg-green-600" />

              <span className="text-[11px] font-semibold uppercase tracking-[0.25em] text-green-600">
                Latest Updates
              </span>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-tight text-gray-900 sm:text-5xl">
              News & Insights
            </h1>

            <p className="mt-5 max-w-2xl font-serif text-base leading-7 text-gray-600 sm:text-lg">
              Stay informed with the latest developments, technologies,
              standards and insights from the CSSD and healthcare
              sterilization community.
            </p>
          </div>
        </div>
      </section>

      {/* =====================================================
          SEARCH + FILTER BAR
      ===================================================== */}

      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto container px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Search */}

            <form
              onSubmit={handleSearch}
              className="flex w-full max-w-xl"
            >
              <div className="relative flex-1">
                <FiSearch
                  size={18}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Search news..."
                  className="h-12 w-full border border-gray-300 bg-white pl-11 pr-4 text-sm text-gray-900 outline-none transition focus:border-green-600"
                />
              </div>

              <button
                type="submit"
                className="h-12 bg-green-600 px-6 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-green-700"
              >
                Search
              </button>
            </form>

            {/* Mobile filter */}

            <button
              onClick={() => setMobileFilter(!mobileFilter)}
              className="flex h-12 items-center justify-center gap-2 border border-gray-300 bg-white px-5 text-sm font-semibold uppercase tracking-wide text-gray-800 lg:hidden"
            >
              <FiFilter />

              Filters

              {hasFilters && (
                <span className="flex h-5 min-w-5 items-center justify-center bg-green-600 px-1 text-[10px] text-white">
                  {(searchParam ? 1 : 0) +
                    (categoryParam ? 1 : 0)}
                </span>
              )}
            </button>

            {/* Desktop category filter */}

            <div className="hidden items-center gap-2 lg:flex">
              <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-gray-500">
                Category
              </span>

              <button
                onClick={() =>
                  updateQuery({
                    category: "",
                    page: 1,
                  })
                }
                className={`border px-4 py-2 text-xs font-semibold uppercase transition ${
                  !categoryParam
                    ? "border-green-600 bg-green-600 text-white"
                    : "border-gray-300 bg-white text-gray-700 hover:border-green-600 hover:text-green-600"
                }`}
              >
                All
              </button>

              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategory(category)}
                  className={`border px-4 py-2 text-xs font-semibold uppercase transition ${
                    categoryParam === category
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-gray-300 bg-white text-gray-700 hover:border-green-600 hover:text-green-600"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile filter drawer */}

          {mobileFilter && (
            <div className="mt-5 border-t border-gray-200 pt-5 lg:hidden">
              <div className="flex items-center justify-between">
                <h3 className="font-serif text-lg font-bold text-gray-900">
                  Filter News
                </h3>

                <button
                  onClick={() => setMobileFilter(false)}
                  className="text-gray-500 hover:text-green-600"
                >
                  <FiX size={20} />
                </button>
              </div>

              <div className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                <button
                  onClick={() => handleCategory("")}
                  className={`border px-4 py-3 text-left text-sm font-medium ${
                    !categoryParam
                      ? "border-green-600 bg-green-600 text-white"
                      : "border-gray-300 bg-white text-gray-700"
                  }`}
                >
                  All Categories
                </button>

                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategory(category)}
                    className={`border px-4 py-3 text-left text-sm font-medium ${
                      categoryParam === category
                        ? "border-green-600 bg-green-600 text-white"
                        : "border-gray-300 bg-white text-gray-700"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {hasFilters && (
                <button
                  onClick={clearFilters}
                  className="mt-4 flex items-center gap-2 text-sm font-semibold text-green-600"
                >
                  <FiX />
                  Clear all filters
                </button>
              )}
            </div>
          )}
        </div>
      </section>

      {/* =====================================================
          CONTENT
      ===================================================== */}

      <section className="mx-auto container px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        {/* Active filters */}

        {hasFilters && (
          <div className="mb-8 flex flex-wrap items-center gap-3 border-b border-gray-200 pb-5">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">
              Active Filters
            </span>

            {searchParam && (
              <span className="flex items-center gap-2 border border-gray-200 bg-gray-50 px-3 py-2 text-xs text-gray-700">
                Search: "{searchParam}"

                <button
                  onClick={() =>
                    updateQuery({
                      search: "",
                      page: 1,
                    })
                  }
                  className="text-gray-400 hover:text-green-600"
                >
                  <FiX />
                </button>
              </span>
            )}

            {categoryParam && (
              <span className="flex items-center gap-2 border border-gray-200 bg-gray-50 px-3 py-2 text-xs text-gray-700">
                {categoryParam}

                <button
                  onClick={() =>
                    updateQuery({
                      category: "",
                      page: 1,
                    })
                  }
                  className="text-gray-400 hover:text-green-600"
                >
                  <FiX />
                </button>
              </span>
            )}

            <button
              onClick={clearFilters}
              className="text-xs font-semibold uppercase tracking-wide text-green-600 hover:text-green-700"
            >
              Clear All
            </button>
          </div>
        )}

        {/* Results heading */}

        {!loading && (
          <div className="mb-8 flex items-end justify-between border-b border-gray-900 pb-4">
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-green-600">
                News Archive
              </p>

              <h2 className="mt-1 font-serif text-2xl font-bold text-gray-900">
                Latest News
              </h2>
            </div>

            <span className="text-sm text-gray-500">
              {pagination.total}{" "}
              {pagination.total === 1 ? "Story" : "Stories"}
            </span>
          </div>
        )}

        {/* =====================================================
            LOADING
        ===================================================== */}

        {loading ? (
          <NewsSkeleton />
        ) : news.length === 0 ? (
          /* =====================================================
              EMPTY
          ===================================================== */

          <div className="border border-gray-200 bg-gray-50 px-6 py-20 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center border border-gray-200 bg-white text-gray-400">
              <FiSearch size={25} />
            </div>

            <h3 className="mt-6 font-serif text-2xl font-bold text-gray-900">
              No news found
            </h3>

            <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-500">
              We couldn't find any news matching your current
              search or filters.
            </p>

            <button
              onClick={clearFilters}
              className="mt-6 inline-flex items-center gap-2 bg-green-600 px-6 py-3 text-sm font-semibold text-white transition hover:bg-green-700"
            >
              Clear Filters
              <FiArrowRight />
            </button>
          </div>
        ) : (
          <>
            {/* =====================================================
                NEWS GRID
            ===================================================== */}

            <div className="grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
              {news.map((item) => (
                <Newscard
                  key={item._id}
                  news={item}
                  formatDate={formatDate}
                />
              ))}
            </div>

            {/* =====================================================
                PAGINATION
            ===================================================== */}

            {pagination.totalPage > 1 && (
              <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-gray-200 pt-7 sm:flex-row">
                <p className="text-sm text-gray-500">
                  Page{" "}
                  <span className="font-semibold text-gray-900">
                    {pagination.page}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-gray-900">
                    {pagination.totalPage}
                  </span>
                </p>

                <div className="flex items-center gap-1">
                  <button
                    disabled={!pagination.hasPrevPage}
                    onClick={() =>
                      goToPage(pagination.page - 1)
                    }
                    className="flex h-10 w-10 items-center justify-center border border-gray-300 bg-white text-gray-700 transition hover:border-green-600 hover:text-green-600 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <FiChevronLeft />
                  </button>

                  {getPaginationNumbers().map((number, index) =>
                    number === "..." ? (
                      <span
                        key={`dots-${index}`}
                        className="flex h-10 w-10 items-center justify-center text-sm text-gray-400"
                      >
                        ...
                      </span>
                    ) : (
                      <button
                        key={number}
                        onClick={() => goToPage(number)}
                        className={`flex h-10 min-w-10 items-center justify-center border px-3 text-sm font-medium transition ${
                          pagination.page === number
                            ? "border-green-600 bg-green-600 text-white"
                            : "border-gray-300 bg-white text-gray-700 hover:border-green-600 hover:text-green-600"
                        }`}
                      >
                        {number}
                      </button>
                    )
                  )}

                  <button
                    disabled={!pagination.hasNextPage}
                    onClick={() =>
                      goToPage(pagination.page + 1)
                    }
                    className="flex h-10 w-10 items-center justify-center border border-gray-300 bg-white text-gray-700 transition hover:border-green-600 hover:text-green-600 disabled:cursor-not-allowed disabled:opacity-40"
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



// ============================================================
// SKELETON
// ============================================================

const NewsSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-x-7 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      {[1, 2, 3, 4, 5, 6].map((item) => (
        <div
          key={item}
          className="border border-gray-200 bg-white"
        >
          <div className="aspect-[16/10] animate-pulse bg-gray-200" />

          <div className="p-5">
            <div className="h-3 w-28 animate-pulse bg-gray-200" />

            <div className="mt-4 h-6 w-full animate-pulse bg-gray-200" />

            <div className="mt-2 h-6 w-4/5 animate-pulse bg-gray-200" />

            <div className="mt-5 h-3 w-32 animate-pulse bg-gray-200" />

            <div className="mt-7 h-4 w-28 animate-pulse bg-gray-200" />
          </div>
        </div>
      ))}
    </div>
  );
};