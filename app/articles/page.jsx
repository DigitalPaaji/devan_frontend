"use client";

import ArticleCard from "@/components/ArticleCard";
import Loading from "@/components/Loading";
import { base_url } from "@/components/utils";
import axios from "axios";

import {
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";

import React, {
  Suspense,
  useCallback,
  useEffect,
  useState,
} from "react";

import {
  FiBookOpen,
  FiChevronLeft,
  FiChevronRight,
  FiSearch,
  FiX,
  FiFilter,
} from "react-icons/fi";

import { toast } from "react-toastify";

/* =========================================================
   ARTICLE CATEGORIES
========================================================= */

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

/* =========================================================
   PAGE
========================================================= */

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <GetArticles />
    </Suspense>
  );
};

export default Page;

/* =========================================================
   ARTICLES
========================================================= */

const GetArticles = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  /* =========================================================
     URL PARAMS
  ========================================================= */

  const currentPage =
    Number(searchParams.get("page")) || 1;

  const currentLimit =
    Number(searchParams.get("limit")) || 12;

  const currentSearch =
    searchParams.get("search") || "";

  const currentCategory =
    searchParams.get("category") || "";

  /* =========================================================
     STATES
  ========================================================= */

  const [articles, setArticles] = useState([]);

  const [loading, setLoading] = useState(true);

  const [searchInput, setSearchInput] =
    useState(currentSearch);

  const [pagination, setPagination] = useState({
    page: 1,
    limit: 12,
    total: 0,
    totalPage: 1,
    hasNextPage: false,
    hasPrevPage: false,
  });

  /* =========================================================
     UPDATE URL
  ========================================================= */

  const updateQuery = useCallback(
    ({
      page,
      limit,
      search,
      category,
    }) => {
      const params =
        new URLSearchParams(
          searchParams.toString()
        );

      /* PAGE */

      if (page !== undefined) {
        params.set(
          "page",
          String(page)
        );
      }

      /* LIMIT */

      if (limit !== undefined) {
        params.set(
          "limit",
          String(limit)
        );
      }

      /* SEARCH */

      if (search !== undefined) {
        if (search.trim()) {
          params.set(
            "search",
            search.trim()
          );
        } else {
          params.delete("search");
        }
      }

      /* CATEGORY */

      if (category !== undefined) {
        if (category.trim()) {
          params.set(
            "category",
            category.trim()
          );
        } else {
          params.delete("category");
        }
      }

      const query =
        params.toString();

      router.push(
        query
          ? `${pathname}?${query}`
          : pathname,
        {
          scroll: false,
        }
      );
    },
    [
      pathname,
      router,
      searchParams,
    ]
  );

  /* =========================================================
     FETCH ARTICLES
  ========================================================= */

  const fetchData = useCallback(
    async () => {
      try {
        setLoading(true);

        const params =
          new URLSearchParams();

        /* PAGE */

        params.set(
          "page",
          String(currentPage)
        );

        /* LIMIT */

        params.set(
          "limit",
          String(currentLimit)
        );

        /* SEARCH */

        if (currentSearch.trim()) {
          params.set(
            "search",
            currentSearch.trim()
          );
        }

        /* CATEGORY */

        if (currentCategory.trim()) {
          params.set(
            "category",
            currentCategory.trim()
          );
        }

        /* API */

        const response =
          await axios.get(
            `${base_url}/learning/article/all?${params.toString()}`
          );

        const data =
          response.data;

      

        if (data.success) {
          setArticles(
            data.articles || []
          );

          setPagination(
            data.pagination || {
              page: currentPage,
              limit: currentLimit,
              total: 0,
              totalPage: 1,
              hasNextPage: false,
              hasPrevPage: false,
            }
          );
        } else {
          setArticles([]);

          toast.error(
            data.message ||
              "Unable to load articles"
          );
        }
      } catch (error) {
        console.error(
          "Article fetch error:",
          error
        );

        setArticles([]);

        toast.error(
          "Unable to load articles"
        );
      } finally {
        setLoading(false);
      }
    },
    [
      currentPage,
      currentLimit,
      currentSearch,
      currentCategory,
    ]
  );

  /* =========================================================
     FETCH WHEN URL CHANGES
  ========================================================= */

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  /* =========================================================
     SYNC SEARCH INPUT
  ========================================================= */

  useEffect(() => {
    setSearchInput(
      currentSearch
    );
  }, [currentSearch]);

  /* =========================================================
     SEARCH DEBOUNCE
  ========================================================= */

  useEffect(() => {
    const timer =
      setTimeout(() => {
        const trimmed =
          searchInput.trim();

        if (
          trimmed !==
          currentSearch
        ) {
          updateQuery({
            page: 1,
            search: trimmed,
          });
        }
      }, 500);

    return () =>
      clearTimeout(timer);
  }, [
    searchInput,
    currentSearch,
    updateQuery,
  ]);

  /* =========================================================
     CATEGORY CHANGE
  ========================================================= */

  const handleCategoryChange = (
    category
  ) => {
    updateQuery({
      page: 1,
      category,
    });
  };

  /* =========================================================
     PAGE CHANGE
  ========================================================= */

  const handlePageChange = (
    page
  ) => {
    if (
      page < 1 ||
      page >
        pagination.totalPage
    ) {
      return;
    }

    updateQuery({
      page,
    });

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /* =========================================================
     LIMIT CHANGE
  ========================================================= */

  const handleLimitChange = (
    limit
  ) => {
    updateQuery({
      page: 1,
      limit,
    });
  };

  /* =========================================================
     CLEAR SEARCH
  ========================================================= */

  const clearSearch = () => {
    setSearchInput("");

    updateQuery({
      page: 1,
      search: "",
    });
  };

  /* =========================================================
     CLEAR CATEGORY
  ========================================================= */

  const clearCategory = () => {
    updateQuery({
      page: 1,
      category: "",
    });
  };

  /* =========================================================
     CLEAR ALL FILTERS
  ========================================================= */

  const clearFilters = () => {
    setSearchInput("");

    const params =
      new URLSearchParams();

    params.set("page", "1");
    params.set(
      "limit",
      String(currentLimit)
    );

    router.push(
      `${pathname}?${params.toString()}`,
      {
        scroll: false,
      }
    );
  };

  /* =========================================================
     PAGE NUMBERS
  ========================================================= */

  const getPageNumbers = () => {
    const total =
      pagination.totalPage;

    const current =
      pagination.page;

    if (total <= 7) {
      return Array.from(
        {
          length: total,
        },
        (_, index) =>
          index + 1
      );
    }

    if (current <= 4) {
      return [
        1,
        2,
        3,
        4,
        5,
        "...",
        total,
      ];
    }

    if (
      current >=
      total - 3
    ) {
      return [
        1,
        "...",
        total - 4,
        total - 3,
        total - 2,
        total - 1,
        total,
      ];
    }

    return [
      1,
      "...",
      current - 1,
      current,
      current + 1,
      "...",
      total,
    ];
  };

  /* =========================================================
     LOADING
  ========================================================= */

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F7F5F0] py-16">

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-10">

            <div className="h-10 w-72 animate-pulse rounded bg-[#e7e3d8]" />

            <div className="mt-3 h-5 w-96 max-w-full animate-pulse rounded bg-[#e7e3d8]" />

          </div>

          <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-3">

            <div className="h-12 animate-pulse rounded bg-[#eeece4]" />

            <div className="h-12 animate-pulse rounded bg-[#eeece4]" />

            <div className="h-12 animate-pulse rounded bg-[#eeece4]" />

          </div>

          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">

            {Array.from({
              length: 6,
            }).map((_, index) => (
              <div
                key={index}
                className="h-[390px] animate-pulse rounded bg-[#eeece4]"
              />
            ))}

          </div>

        </div>

      </main>
    );
  }

  /* =========================================================
     MAIN UI
  ========================================================= */

  return (
    <main className="min-h-screen bg-[#F7F5F0] ">

      <div className="container mx-auto px-4 pt-10 sm:px-6 lg:px-8 lg:pt-7">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mb-10 border-b border-[#DEDACE] pb-8">

          <div className="max-w-2xl">

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#2F6F5C]">
              Learning Centre
            </p>

            <h1 className="font-serif text-4xl leading-tight text-[#1A2420] sm:text-5xl">
              Articles & Insights
            </h1>

            <p className="mt-4 text-[15px] leading-7 text-[#6B7570]">
              Practical insight and expert
              knowledge for healthcare,
              sterilization and CSSD
              professionals.
            </p>

          </div>

        </div>

        {/* =====================================================
            FILTER SECTION
        ===================================================== */}

        <div className="mb-8 rounded-xl border border-[#DEDACE] bg-white/60 p-4 sm:p-5">

          <div className="mb-4 flex items-center gap-2">

            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#2F6F5C]/10 text-[#2F6F5C]">

              <FiFilter size={16} />

            </div>

            <div>

              <h2 className="text-sm font-semibold text-[#1A2420]">
                Filter Articles
              </h2>

              <p className="text-xs text-[#7A837E]">
                Search by title or select
                an article category
              </p>

            </div>

          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_auto]">

            {/* =================================================
                SEARCH
            ================================================= */}

            <div className="relative">

              <FiSearch
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-[#7A837E]"
              />

              <input
                type="text"
                value={searchInput}
                onChange={(e) =>
                  setSearchInput(
                    e.target.value
                  )
                }
                placeholder="Search articles..."
                className="h-12 w-full rounded-lg border border-[#D9D5C9] bg-white pl-11 pr-11 text-sm text-[#1A2420] outline-none transition placeholder:text-[#9A9F9B] focus:border-[#2F6F5C] focus:ring-2 focus:ring-[#2F6F5C]/10"
              />

              {searchInput && (
                <button
                  type="button"
                  onClick={
                    clearSearch
                  }
                  className="absolute right-3 top-1/2 flex -translate-y-1/2 items-center justify-center rounded-full p-1 text-[#7A837E] transition hover:bg-[#F7F5F0] hover:text-[#1A2420]"
                >
                  <FiX size={17} />
                </button>
              )}

            </div>

            {/* =================================================
                CATEGORY
            ================================================= */}

            <div className="relative">

              <select
                value={
                  currentCategory
                }
                onChange={(e) =>
                  handleCategoryChange(
                    e.target.value
                  )
                }
                className="h-12 w-full appearance-none rounded-lg border border-[#D9D5C9] bg-white px-4 pr-10 text-sm text-[#1A2420] outline-none transition focus:border-[#2F6F5C] focus:ring-2 focus:ring-[#2F6F5C]/10"
              >

                <option value="">
                  All Categories
                </option>

                {categories.map(
                  (category) => (
                    <option
                      key={category}
                      value={category}
                    >
                      {category}
                    </option>
                  )
                )}

              </select>

              <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#7A837E]">
                ▾
              </div>

            </div>

            {/* =================================================
                LIMIT
            ================================================= */}

            <div className="flex items-center gap-3">

              <span className="whitespace-nowrap text-sm text-[#6B7570]">
                Show
              </span>

              <select
                value={
                  currentLimit
                }
                onChange={(e) =>
                  handleLimitChange(
                    Number(
                      e.target.value
                    )
                  )
                }
                className="h-12 min-w-[80px] rounded-lg border border-[#D9D5C9] bg-white px-4 text-sm text-[#1A2420] outline-none focus:border-[#2F6F5C]"
              >

                <option value={6}>
                  6
                </option>

                <option value={12}>
                  12
                </option>

                <option value={20}>
                  20
                </option>

                <option value={30}>
                  30
                </option>

                <option value={50}>
                  50
                </option>

              </select>

            </div>

          </div>

        </div>

        {/* =====================================================
            ACTIVE FILTERS
        ===================================================== */}

        {(currentSearch ||
          currentCategory) && (

          <div className="mb-7 flex flex-wrap items-center gap-2">

            <span className="mr-1 text-sm text-[#6B7570]">
              Active filters:
            </span>

            {/* SEARCH FILTER */}

            {currentSearch && (
              <span className="inline-flex items-center gap-2 rounded-full border border-[#DEDACE] bg-white px-3 py-1.5 text-xs font-medium text-[#1A2420]">

                <FiSearch
                  size={12}
                />

                {currentSearch}

                <button
                  type="button"
                  onClick={
                    clearSearch
                  }
                  className="ml-1 rounded-full hover:text-[#2F6F5C]"
                >
                  <FiX size={13} />
                </button>

              </span>
            )}

            {/* CATEGORY FILTER */}

            {currentCategory && (
              <span className="inline-flex items-center gap-2 rounded-full bg-[#2F6F5C]/10 px-3 py-1.5 text-xs font-medium text-[#2F6F5C]">

                <FiFilter
                  size={12}
                />

                {currentCategory}

                <button
                  type="button"
                  onClick={
                    clearCategory
                  }
                  className="ml-1 rounded-full hover:text-[#1A2420]"
                >
                  <FiX size={13} />
                </button>

              </span>
            )}

            {/* CLEAR ALL */}

            <button
              type="button"
              onClick={
                clearFilters
              }
              className="ml-1 text-xs font-medium text-[#6B7570] underline underline-offset-2 transition hover:text-[#2F6F5C]"
            >
              Clear all
            </button>

          </div>
        )}

        {/* =====================================================
            RESULT INFO
        ===================================================== */}

        <div className="mb-7 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">

          <div>

            <p className="text-sm text-[#6B7570]">

              {pagination.total >
              0 ? (
                <>
                  Showing{" "}

                  <span className="font-semibold text-[#1A2420]">
                    {(
                      (pagination.page -
                        1) *
                        pagination.limit
                    ) + 1}
                  </span>

                  {" – "}

                  <span className="font-semibold text-[#1A2420]">
                    {Math.min(
                      pagination.page *
                        pagination.limit,
                      pagination.total
                    )}
                  </span>

                  {" of "}

                  <span className="font-semibold text-[#1A2420]">
                    {
                      pagination.total
                    }
                  </span>

                  {" articles"}
                </>
              ) : (
                "No articles found"
              )}

            </p>

          </div>

          {currentCategory && (
            <div className="text-sm text-[#6B7570]">

              Category:{" "}

              <span className="font-medium text-[#2F6F5C]">
                {currentCategory}
              </span>

            </div>
          )}

        </div>

        {/* =====================================================
            ARTICLE GRID
        ===================================================== */}

        {articles.length > 0 ? (

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

            {articles.map(
              (
                article,
                index
              ) => (

                <div
                  key={
                    article._id
                  }
                  className="animate-[fadeIn_.5s_ease-out_both]"
                  style={{
                    animationDelay:
                      `${index * 70}ms`,
                  }}
                >

                  <ArticleCard
                    article={
                      article
                    }
                  />

                </div>

              )
            )}

          </div>

        ) : (

          /* ===================================================
             EMPTY STATE
          =================================================== */

          <div className="flex min-h-[340px] flex-col items-center justify-center rounded-xl border border-[#DEDACE] bg-white/40 px-6 text-center">

            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#2F6F5C]/10">

              <FiBookOpen
                size={28}
                className="text-[#2F6F5C]"
              />

            </div>

            <h3 className="mt-5 font-serif text-2xl text-[#1A2420]">
              No articles found
            </h3>

            <p className="mt-2 max-w-md text-sm leading-6 text-[#6B7570]">

              {currentSearch ||
              currentCategory
                ? "Try changing your search or category filter."
                : "New articles and expert insights will appear here soon."}

            </p>

            {(currentSearch ||
              currentCategory) && (

              <button
                type="button"
                onClick={
                  clearFilters
                }
                className="mt-6 rounded-lg bg-[#1A2420] px-5 py-2.5 text-sm font-medium text-white transition hover:bg-[#2F6F5C]"
              >
                Clear Filters
              </button>

            )}

          </div>

        )}

        {/* =====================================================
            PAGINATION
        ===================================================== */}

        {pagination.totalPage >
          1 && (

          <div className="mt-14">

            <div className="flex flex-wrap items-center justify-center gap-2">

              {/* PREVIOUS */}

              <button
                type="button"
                disabled={
                  !pagination.hasPrevPage
                }
                onClick={() =>
                  handlePageChange(
                    pagination.page -
                      1
                  )
                }
                className="flex h-10 items-center gap-1 rounded-lg border border-[#D9D5C9] bg-white px-3 text-sm text-[#1A2420] transition hover:border-[#2F6F5C] hover:text-[#2F6F5C] disabled:cursor-not-allowed disabled:opacity-40"
              >

                <FiChevronLeft
                  size={17}
                />

                <span className="hidden sm:inline">
                  Previous
                </span>

              </button>

              {/* PAGE NUMBERS */}

              {getPageNumbers().map(
                (
                  page,
                  index
                ) => {

                  if (
                    page ===
                    "..."
                  ) {
                    return (
                      <span
                        key={`dots-${index}`}
                        className="flex h-10 w-10 items-center justify-center text-sm text-[#7A837E]"
                      >
                        ...
                      </span>
                    );
                  }

                  const isActive =
                    page ===
                    pagination.page;

                  return (
                    <button
                      type="button"
                      key={page}
                      onClick={() =>
                        handlePageChange(
                          page
                        )
                      }
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border text-sm font-medium transition ${
                        isActive
                          ? "border-[#2F6F5C] bg-[#2F6F5C] text-white"
                          : "border-[#D9D5C9] bg-white text-[#1A2420] hover:border-[#2F6F5C] hover:text-[#2F6F5C]"
                      }`}
                    >
                      {page}
                    </button>
                  );
                }
              )}

              {/* NEXT */}

              <button
                type="button"
                disabled={
                  !pagination.hasNextPage
                }
                onClick={() =>
                  handlePageChange(
                    pagination.page +
                      1
                  )
                }
                className="flex h-10 items-center gap-1 rounded-lg border border-[#D9D5C9] bg-white px-3 text-sm text-[#1A2420] transition hover:border-[#2F6F5C] hover:text-[#2F6F5C] disabled:cursor-not-allowed disabled:opacity-40"
              >

                <span className="hidden sm:inline">
                  Next
                </span>

                <FiChevronRight
                  size={17}
                />

              </button>

            </div>

            {/* PAGE INFO */}

            <p className="mt-5 text-center text-xs text-[#7A837E]">
              Page{" "}
              {pagination.page}{" "}
              of{" "}
              {pagination.totalPage}
            </p>

          </div>
        )}

      </div>

    </main>
  );
};