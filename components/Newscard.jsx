import React from 'react'
import Link from 'next/link'
import { img_url } from './utils'
import { FiArrowRight, FiCalendar, FiUser } from 'react-icons/fi'

const Newscard = ({ news }) => {
  const formatDate = (date) => {
    return new Date(date).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
  }

  return (
     <article className="group flex h-full flex-col border border-gray-200 bg-white transition hover:border-gray-300 hover:shadow-sm">
          {/* Image */}
    
          <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
            <img
              src={`${img_url}${news.featuredImage}`}
              alt={news.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
    
            {/* Category */}
    
            <div className="absolute left-4 top-4 bg-green-600 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white">
              {news.category}
            </div>
          </div>
    
          {/* Content */}
    
          <div className="flex flex-1 flex-col p-5">
            {/* Meta */}
    
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <FiCalendar className="text-green-600" size={14} />
    
              <span>
                {formatDate(news.publicationDate)}
              </span>
            </div>
    
            {/* Title */}
    
            <h2 className="mt-3 font-serif text-xl font-bold leading-snug text-gray-900 transition group-hover:text-green-600">
              {news.title}
            </h2>
    
            {/* Expert */}
    
            {news.expertId && (
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
                <span className="h-1 w-1 bg-green-600" />
    
                <span>
                  By{" "}
                  <span className="font-medium text-gray-700">
                    {news.expertId.fullname}
                  </span>
                </span>
              </div>
            )}
    
            {/* Read */}
    
            <div className="mt-auto pt-5">
              <a
                href={`/news/${news.slug}`}
                className="inline-flex items-center gap-2 border-t border-gray-200 pt-4 text-xs font-semibold uppercase tracking-[0.15em] text-gray-900 transition group-hover:text-green-600"
              >
                Read Full Story
                <FiArrowRight
                  size={14}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </article>
  )
}

export default Newscard