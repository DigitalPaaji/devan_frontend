"use client"
import JobCard from '@/components/JobCard'
import Loading from '@/components/Loading'
import { base_url } from '@/components/utils'
import axios from 'axios'
import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import React, { Suspense, useEffect, useState, useCallback } from 'react'
import { toast } from 'react-toastify'
import {
  FiSearch,
  FiX,
  FiChevronLeft,
  FiChevronRight,
  FiFilter,
  FiBriefcase,
  FiMapPin,
  FiLayers,
} from 'react-icons/fi'

const jobsCategory = [
  "CSSD Technician",
  "CSSD Supervisor",
  "CSSD Manager",
  "Infection Control Professional",
]
const jobTypes = ["FULL_TIME", "PART_TIME", "CONTRACT", "INTERNSHIP"]
const workModes = ["ONSITE", "REMOTE", "HYBRID"]

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Jobs />
    </Suspense>
  )
}

export default Page

const Jobs = () => {
  const router = useRouter()
  const pathname = usePathname()
  const querys = useSearchParams()

  const page = Number(querys.get("page")) || 1
  const limit = Number(querys.get("limit")) || 20
  const search = querys.get("search") || ""
  const category = querys.get("category") || ""
  const jobtype = querys.get("jobtype") || ""
  const workmode = querys.get("workmode") || ""

  const [jobs, setJobs] = useState([])
  const [loading, setLoading] = useState(true)
  const [pagination, setPagination] = useState({
    page: 1,
    limit: 20,
    total: 0,
    totalPage: 1,
    hasNextPage: false,
    hasPrevPage: false,
  })

  // local input state so typing doesn't fire a request on every keystroke
  const [searchInput, setSearchInput] = useState(search)

  // ---- helper to update URL query params ----
  const updateParams = useCallback(
    (updates, resetPage = true) => {
      const params = new URLSearchParams(querys.toString())

      Object.entries(updates).forEach(([key, value]) => {
        if (value) {
          params.set(key, value)
        } else {
          params.delete(key)
        }
      })

      if (resetPage) params.set("page", 1)

      router.push(`${pathname}?${params.toString()}`)
    },
    [querys, router, pathname]
  )

  // ---- fetch jobs whenever filters/page/limit change ----
  const fetchJobs = useCallback(async () => {
    try {
      setLoading(true)
      const params = new URLSearchParams()
      params.set("page", page)
      params.set("limit", limit)
      search && params.set("search", search)
      category && params.set("category", category)
      jobtype && params.set("jobtype", jobtype)
      workmode && params.set("workmode", workmode)

      const response = await axios.get(`${base_url}/jobs/all?${params}`)
      const data = response.data

      if (data?.success) {
        setJobs(data.jobs || [])
        setPagination(data.pagination || pagination)
      } else {
        toast.error("Failed to load jobs")
      }
    } catch (error) {
      toast.error("Something went wrong while fetching jobs")
    } finally {
      setLoading(false)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, search, category, jobtype, workmode])

  useEffect(() => {
    fetchJobs()
  }, [fetchJobs])

  // ---- debounce search input -> url param ----
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchInput !== search) {
        updateParams({ search: searchInput })
      }
    }, 500)
    return () => clearTimeout(timer)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchInput])

  const clearFilters = () => {
    setSearchInput("")
    router.push(pathname)
  }

  const goToPage = (newPage) => {
    if (newPage < 1 || newPage > pagination.totalPage) return
    const params = new URLSearchParams(querys.toString())
    params.set("page", newPage)
    router.push(`${pathname}?${params.toString()}`)
  }

  const hasActiveFilters = search || category || jobtype || workmode

  return (
    <div className="container  mx-auto px-4 py-6 bg-white">
      {/* ---- Search + Filters Bar ---- */}
      <div className="flex flex-col gap-4 mb-6">
        {/* Search */}
        <div className="relative w-full">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            placeholder="Search jobs by title..."
            className="w-full pl-10 pr-10 py-2.5 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-green-500"
          />
          {searchInput && (
            <button
              onClick={() => setSearchInput("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <FiX size={18} />
            </button>
          )}
        </div>

        {/* Filter dropdowns */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="flex items-center gap-1 text-sm font-medium text-gray-600">
            <FiFilter size={16} /> Filters:
          </span>

          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
            <FiLayers size={16} className="text-gray-500" />
            <select
              value={category}
              onChange={(e) => updateParams({ category: e.target.value })}
              className="outline-none bg-transparent text-sm"
            >
              <option value="">All Categories</option>
              {jobsCategory.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
            <FiBriefcase size={16} className="text-gray-500" />
            <select
              value={jobtype}
              onChange={(e) => updateParams({ jobtype: e.target.value })}
              className="outline-none bg-transparent text-sm"
            >
              <option value="">All Job Types</option>
              {jobTypes.map((t) => (
                <option key={t} value={t}>{t.replace("_", " ")}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-2">
            <FiMapPin size={16} className="text-gray-500" />
            <select
              value={workmode}
              onChange={(e) => updateParams({ workmode: e.target.value })}
              className="outline-none bg-transparent text-sm"
            >
              <option value="">All Work Modes</option>
              {workModes.map((w) => (
                <option key={w} value={w}>{w}</option>
              ))}
            </select>
          </div>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
            >
              <FiX size={16} /> Clear all
            </button>
          )}
        </div>
      </div>

      {/* ---- Job List ---- */}
      {loading ? (
        <div>
loading...
          </div>
      ) : jobs.length === 0 ? (
        <div className="text-center py-16 text-gray-500">
          No jobs found. Try adjusting your filters.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {jobs.map((job) => (
            <JobCard key={job._id} job={job} />
          ))}
        </div>
      )}

      {/* ---- Pagination ---- */}
      {!loading && jobs.length > 0 && (
        <div className="flex items-center justify-center gap-2 mt-8">
          <button
            onClick={() => goToPage(pagination.page - 1)}
            disabled={!pagination.hasPrevPage}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <FiChevronLeft size={18} />
          </button>

          {Array.from({ length: pagination.totalPage }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => goToPage(p)}
              className={`w-9 h-9 rounded-lg text-sm font-medium border ${
                p === pagination.page
                  ? "bg-green-600 text-white border-green-600"
                  : "border-gray-300 hover:bg-gray-100"
              }`}
            >
              {p}
            </button>
          ))}

          <button
            onClick={() => goToPage(pagination.page + 1)}
            disabled={!pagination.hasNextPage}
            className="flex items-center justify-center w-9 h-9 rounded-lg border border-gray-300 disabled:opacity-40 disabled:cursor-not-allowed hover:bg-gray-100"
          >
            <FiChevronRight size={18} />
          </button>
        </div>
      )}
    </div>
  )
}