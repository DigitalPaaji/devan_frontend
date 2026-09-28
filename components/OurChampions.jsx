"use client"
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { base_url, img_url } from './utils'
import {
  FaTrophy,
  FaCrown,
  FaMedal,
  FaCalendarAlt,
  FaUserCircle,
  FaChevronLeft,
  FaChevronRight,
} from 'react-icons/fa'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// ---- helpers -------------------------------------------------

const getImageUrl = (path) => {
  if (!path) return null
  if (path.startsWith('http')) return path
  return `${img_url}${path}`
}

const formatRange = (start, end) => {
  if (!start || !end) return null
  const opts = { day: 'numeric', month: 'short', year: 'numeric' }
  const s = new Date(start)
  const e = new Date(end)
  const startStr = s.toLocaleDateString('en-US', opts)
  const endStr = e.toLocaleDateString('en-US', opts)
  return `${startStr} – ${endStr}`
}

const formatDate = (date) => {
  if (!date) return null
  return new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}





const PERIOD_CONFIG = {
  YEAR: {
    label: 'Champion of the Year',
    icon: FaCrown,
    ring: 'ring-amber-500',
    badge: 'bg-amber-500 text-white',
    accentText: 'text-amber-700',
    cardBorder: 'border-amber-200',
    cardShadow: 'shadow-[0_20px_45px_-20px_rgba(180,131,10,0.35)]',
    pedestal: 'md:mt-0 md:pb-10',
    order: 'md:order-2',
  },
  MONTH: {
    label: 'Champion of the Month',
    icon: FaTrophy,
    ring: 'ring-neutral-400',
    badge: 'bg-neutral-800 text-white',
    accentText: 'text-neutral-600',
    cardBorder: 'border-neutral-200',
    cardShadow: 'shadow-[0_16px_35px_-20px_rgba(0,0,0,0.18)]',
    pedestal: 'md:mt-10',
    order: 'md:order-1',
  },
  WEEK: {
    label: 'Champion of the Week',
    icon: FaMedal,
    ring: 'ring-orange-300',
    badge: 'bg-orange-100 text-orange-700',
    accentText: 'text-orange-700',
    cardBorder: 'border-neutral-200',
    cardShadow: 'shadow-[0_16px_35px_-20px_rgba(0,0,0,0.18)]',
    pedestal: 'md:mt-10',
    order: 'md:order-3',
  },
}



const ChampionCard = ({ champion, periodKey }) => {
  const cfg = PERIOD_CONFIG[periodKey]
  const Icon = cfg.icon

  if (!champion) {
    return (
      <div className={`flex-1 ${cfg.order} ${cfg.pedestal}`}>
        <div className="flex flex-col items-center rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 px-6 py-10 text-center">
          <Icon className="mb-4 text-3xl text-neutral-300" />
          <p className="font-serif text-lg text-neutral-500">{cfg.label}</p>
          <p className="mt-1 text-sm text-neutral-400">Not crowned yet</p>
        </div>
      </div>
    )
  }

  const user = champion.userId || {}
  const img = getImageUrl(user.image)
  const range = formatRange(champion.periodStart, champion.periodEnd)

  return (
    <div className={`flex-1 ${cfg.order} ${cfg.pedestal}`}>
      <div
        className={`relative flex flex-col items-center rounded-2xl border bg-white px-6 pb-7 pt-10 text-center ${cfg.cardBorder} ${cfg.cardShadow}`}
      >
        <div
          className={`absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full ${cfg.badge}`}
        >
          <Icon className="text-base" />
        </div>

        <div className={`h-24 w-24 overflow-hidden rounded-full ring-4 ${cfg.ring} ring-offset-4 ring-offset-white`}>
          {img ? (
            <img
              src={img}
              alt={user.fullname || 'Champion'}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-100">
              <FaUserCircle className="text-5xl text-neutral-300" />
            </div>
          )}
        </div>

        <span className={`mt-4 text-xs font-medium tracking-wide ${cfg.accentText}`}>
          {champion.title || cfg.label}
        </span>
        <h3 className="mt-1 font-serif text-xl text-neutral-900">
          {user.fullname || 'Unknown'}
        </h3>

        {champion.description && champion.description.trim().length > 3 && (
          <p className="mt-2 text-sm leading-relaxed text-neutral-500">
            {champion.description}
          </p>
        )}

        {range && (
          <div className="mt-4 flex items-center gap-1.5 text-xs text-neutral-400">
            <FaCalendarAlt className="text-[10px]" />
            <span>{range}</span>
          </div>
        )}
      </div>
    </div>
  )
}




const HallOfFameCard = ({ entry }) => {
  const user = entry.userId || {}
  const img = getImageUrl(user.image)
  const inducted = formatDate(entry.periodStart)

  return (
    <div className="group relative mx-1 my-2 flex flex-col items-center rounded-2xl border border-neutral-200 bg-white px-6 py-8 text-center shadow-[0_10px_30px_-22px_rgba(0,0,0,0.25)] transition-colors hover:border-amber-300">
      <div className="h-20 w-20 overflow-hidden rounded-full ring-2 ring-amber-400 ring-offset-4 ring-offset-white">
        {img ? (
          <img
            src={img}
            alt={user.fullname || 'Hall of Fame member'}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-neutral-100">
            <FaUserCircle className="text-4xl text-neutral-300" />
          </div>
        )}
      </div>
      <h4 className="mt-4 font-serif text-lg text-neutral-900">
        {user.fullname || 'Unknown'}
      </h4>
      {entry.title && (
        <p className="mt-1 text-xs text-amber-700">{entry.title}</p>
      )}
      {inducted && (
        <p className="mt-3 text-xs text-neutral-400">Inducted {inducted}</p>
      )}
    </div>
  )
}



const OurChampions = () => {
  const [champions, setChampions] = useState(null)
  const [status, setStatus] = useState('loading') // loading | ready | error

  const fetchChampions = async () => {
    setStatus('loading')
    try {
      const response = await axios.get(`${base_url}/champions/getthreee`)
      if (response.data?.success) {
        setChampions(response.data.champions)
        setStatus('ready')
      } else {
        setStatus('error')
      }
    } catch (error) {
      setStatus('error')
    }
  }

  useEffect(() => {
    fetchChampions()
  }, [])

  if (status === 'loading') {
    return (
      <section className="bg-white px-4 py-20">
        <div className="mx-auto flex max-w-5xl items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-neutral-200 border-t-amber-500" />
        </div>
      </section>
    )
  }

  if (status === 'error' || !champions) {
    return (
      <section className="bg-white px-4 py-20 text-center">
        <p className="text-neutral-400">Couldn&apos;t load champions right now.</p>
      </section>
    )
  }

  const { weekChampion, monthChampion, yearChampion, HOFChampion = [] } = champions

  return (
    <section className="bg-white px-4 py-20">
      <div className="mx-auto max-w-5xl">
        {/* Champions header */}
        <div className="mb-14 text-center">
          <h2 className="font-serif text-4xl text-neutral-900">Our Champions</h2>
          <p className="mx-auto mt-3 max-w-md text-sm text-neutral-500">
            Recognising the top performers of this week, this month, and the year.
          </p>
        </div>

        {/* Podium */}
        <div className="flex flex-col items-stretch gap-6 md:flex-row md:items-end md:gap-6">
          <ChampionCard champion={monthChampion} periodKey="MONTH" />
          <ChampionCard champion={yearChampion} periodKey="YEAR" />
          <ChampionCard champion={weekChampion} periodKey="WEEK" />
        </div>

        {/* Hall of Fame */}
        <div className="mt-24">
          <div className="mb-10 text-center">
            <h2 className="font-serif text-3xl text-neutral-900">Hall of Fame</h2>
            <p className="mx-auto mt-3 max-w-md text-sm text-neutral-500">
              Members who&apos;ve earned a permanent place among our all-time greats.
            </p>
          </div>

          {HOFChampion.length === 0 ? (
            <p className="text-center text-sm text-neutral-400">
              No one has been inducted yet.
            </p>
          ) : (
            <div className="relative">
              <Swiper
                modules={[Navigation, Pagination]}
                navigation={{
                  prevEl: '.hof-prev',
                  nextEl: '.hof-next',
                }}
                pagination={{ clickable: true, el: '.hof-pagination' }}
                spaceBetween={16}
                slidesPerView={1.15}
                breakpoints={{
                  640: { slidesPerView: 2.2 },
                  1024: { slidesPerView: 3.2 },
                }}
                className="!pb-10"
              >
                {HOFChampion.map((entry) => (
                  <SwiperSlide key={entry._id}>
                    <HallOfFameCard entry={entry} />
                  </SwiperSlide>
                ))}
              </Swiper>

              <button
                type="button"
                aria-label="Previous"
                className="hof-prev absolute left-0 top-1/2 z-10 hidden -translate-x-3 -translate-y-1/2 items-center justify-center rounded-full border border-neutral-200 bg-white p-2.5 text-neutral-500 shadow-sm hover:border-amber-300 hover:text-amber-700 md:flex"
              >
                <FaChevronLeft className="text-xs" />
              </button>
              <button
                type="button"
                aria-label="Next"
                className="hof-next absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 translate-x-3 items-center justify-center rounded-full border border-neutral-200 bg-white p-2.5 text-neutral-500 shadow-sm hover:border-amber-300 hover:text-amber-700 md:flex"
              >
                <FaChevronRight className="text-xs" />
              </button>

              <div className="hof-pagination mt-2 flex justify-center gap-1.5" />
            </div>
          )}
        </div>
      </div>

      <style jsx global>{`
        .hof-pagination .swiper-pagination-bullet {
          background: #d4d4d4;
          opacity: 1;
        }
        .hof-pagination .swiper-pagination-bullet-active {
          background: #f59e0b;
        }
      `}</style>
    </section>
  )
}

export default OurChampions