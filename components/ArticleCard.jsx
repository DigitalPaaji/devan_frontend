import React from 'react'
import { img_url } from './utils';
import { FiArrowUpRight, FiBookOpen, FiUser } from 'react-icons/fi';
import Link from 'next/link';

const ArticleCard = ({article}) => {

    return (
    <article className="group h-full border border-[#DEDACE] bg-[#FCFBF8] transition-colors duration-300 hover:border-[#2F6F5C]">
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden border-b border-[#DEDACE] bg-[#EFECE3]">
        {article?.thumbnail ? (
          <img
            src={`${img_url}${article.thumbnail}`}
            alt={article?.title || "Article"}
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-[#2F6F5C]">
            <FiBookOpen size={32} />
          </div>
        )}

        {article?.category && (
          <span className="articles-sans absolute left-0 top-0 bg-[#1A2420] px-3 py-1.5 text-[11px] font-medium tracking-wide text-[#F7F5F0]">
            {article.category}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-col px-5 py-5">
        <h3 className="articles-serif line-clamp-2 min-h-[3.2rem] text-[19px] leading-snug text-[#1A2420]">
          {article?.title}
        </h3>

        {article?.shortDescription && (
          <p className="articles-sans mt-2 line-clamp-2 text-[13.5px] leading-relaxed text-[#6B7570]">
            {article.shortDescription}
          </p>
        )}

        <div className="mt-5 flex items-center justify-between border-t border-[#DEDACE] pt-4">
          <div className="flex min-w-0 items-center gap-2">
            <FiUser size={13} className="shrink-0 text-[#9AA39D]" />
            <p className="articles-sans truncate text-[12.5px] text-[#6B7570]">
              {article?.expertId?.fullname || "Expert contributor"}
            </p>
          </div>

          <Link
            href={`/articles/${article?.slug}`}
            className="articles-sans group/read inline-flex shrink-0 items-center gap-1 text-[12.5px] font-medium text-[#2F6F5C]"
          >
            Read
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

export default ArticleCard