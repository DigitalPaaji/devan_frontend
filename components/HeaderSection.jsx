"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiX,
  FiChevronDown,
  FiArrowRight,
  FiHome,
  FiUsers,
  FiBriefcase,
  FiBookOpen,
  FiPlayCircle,
  FiHelpCircle,
  FiMail,
  FiLogIn,
  FiMenu,
} from "react-icons/fi";
import { FaNewspaper } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./store/userSlice";
import { AiFillProfile } from "react-icons/ai";

const PRIMARY = "#0D2B45";

const HeaderSection = () => {
  const pathname = usePathname();
   const dispatch = useDispatch()
  const [mobileOpen, setMobileOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);
  const user = useSelector(state=>state.user)

     
useEffect(()=>{
dispatch(getUser())
},[])

  useEffect(() => {
    setMobileOpen(false);
    setLearningOpen(false);
  }, [pathname]);

  /* ----------------------------------------------------------
     Prevent body scroll when mobile menu is open
  ---------------------------------------------------------- */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const mainLinks = [
    { title: "Home", href: "/", icon: <FiHome /> },
    { title: "Experts", href: "/experts", icon: <FiUsers /> },
    { title: "Jobs", href: "/jobs", icon: <FiBriefcase /> },
  ];

  const learningLinks = [
    {
      title: "Articles",
      href: "/articles",
      icon: <FiBookOpen />,
      description: "Read expert insights",
    },
    {
      title: "Videos",
      href: "/videos",
      icon: <FiPlayCircle />,
      description: "Watch educational content",
    },
    {
      title: "Weekly Questions",
      href: "/weekly-question",
      icon: <FiHelpCircle />,
      description: "Test your knowledge",
    },
    {
      title: "News",
      href: "/news",
      icon: <FaNewspaper />,
      description: "Latest industry updates",
    },
  ];

  return (
    <header className="relative z-50 w-full border-b border-slate-200 bg-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* ==================================================
            LOGO
        =================================================== */}
        <Link href="/" className="flex shrink-0 items-center">
          <img
            src="/Images/Logo.webp"
            alt="ExpertConnect"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* ==================================================
            DESKTOP NAVIGATION
        =================================================== */}
        <nav className="hidden items-center gap-1 lg:flex">
          {mainLinks.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold transition-colors duration-200 ${
                  active ? "text-white" : "text-slate-600 hover:text-[#0D2B45]"
                }`}
                style={active ? { backgroundColor: PRIMARY } : undefined}
              >
                {item.icon}
                {item.title}
              </Link>
            );
          })}

          {/* Learning dropdown */}
          <div className="group relative">
            <button className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#0D2B45]">
              <FiBookOpen />
              Learning
              <FiChevronDown className="text-xs transition-transform duration-200 group-hover:rotate-180" />
            </button>

            <div className="invisible absolute left-1/2 top-full w-[330px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
              <div
                className="overflow-hidden rounded-xl border p-2 shadow-xl"
                style={{ backgroundColor: PRIMARY, borderColor: "rgba(255,255,255,0.1)" }}
              >
                <div className="mb-1 px-3 py-2">
                  <p className="text-[11px] font-semibold text-blue-200/60">
                    Explore Learning
                  </p>
                </div>

                {learningLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg p-3 transition-colors duration-150 hover:bg-white/[0.07]"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-100">
                      {item.icon}
                    </span>

                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-white">
                        {item.title}
                      </span>
                      <span className="mt-0.5 block text-xs text-blue-100/40">
                        {item.description}
                      </span>
                    </span>

                    <FiArrowRight className="text-blue-200/30" />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <Link
            href="/about"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#0D2B45]"
          >
            About
          </Link>

          <Link
            href="/contact"
            className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:text-[#0D2B45]"
          >
            Contact
          </Link>
        </nav>

        {/* ==================================================
            DESKTOP ACTIONS
        =================================================== */}
        <div className="hidden items-center gap-2 lg:flex">
          {(!user.isLoading && user.isUser) ? 
        
<Link href="/profile" 

className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:bg-slate-100"
>


 <AiFillProfile /> 
Profile

</Link>:
          <Link
            href="/userlogin"
            className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-600 transition-colors duration-200 hover:bg-slate-100"
          >
            <FiLogIn />
            Login
          </Link>




}
          <Link
            href="/register"
            className="flex items-center gap-2 rounded-lg px-4 py-2.5 text-sm font-bold text-white transition-opacity duration-200 hover:opacity-90"
            style={{ backgroundColor: PRIMARY }}
          >
            Join Now
            <FiArrowRight />
          </Link>
        </div>

        {/* ==================================================
            MOBILE MENU BUTTON
        =================================================== */}
        <button
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="flex h-11 w-11 items-center justify-center rounded-lg border border-slate-200 text-slate-700 lg:hidden"
        >
          {mobileOpen ? <FiX className="text-xl" /> : <FiMenu className="text-xl" />}
        </button>
      </div>

      {/* ======================================================
          MOBILE MENU (inline, pushes content down — not overlay)
      ======================================================= */}
      {mobileOpen && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {mainLinks.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold ${
                    active ? "text-white" : "text-slate-600 hover:bg-slate-50"
                  }`}
                  style={active ? { backgroundColor: PRIMARY } : undefined}
                >
                  <span className="flex text-slate-600 h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                    {item.icon}
                  </span>
                  {item.title}
                </Link>
              );
            })}

            {/* Learning */}
            <button
              onClick={() => setLearningOpen((prev) => !prev)}
              className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                <FiBookOpen />
              </span>
              Learning
              <FiChevronDown
                className={`ml-auto transition-transform duration-200 ${
                  learningOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {learningOpen && (
              <div className="ml-4 space-y-1 border-l border-slate-200 pl-3">
                {learningLinks.map((item) => (
                  <Link
                    key={item.title}
                    href={item.href}
                    className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-slate-600 hover:bg-slate-50"
                  >
                    <span style={{ color: PRIMARY }}>{item.icon}</span>
                    {item.title}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/about"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                <FiUsers />
              </span>
              About Us
            </Link>

            <Link
              href="/contact"
              className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-100">
                <FiMail />
              </span>
              Contact
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-2 border-t border-slate-200 px-4 py-4">


                {(!user.isLoading && user.isUser) ? 
        
<Link href="/profile" 

className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
>


 <AiFillProfile /> 
Profile

</Link>:
            <Link
                href="/userlogin"
              className="flex items-center justify-center gap-2 rounded-lg border border-slate-200 py-3 text-sm font-semibold text-slate-600 hover:bg-slate-50"
            >
              <FiLogIn />
              Login
            </Link>
}
            <Link
              href="/register"
              className="flex items-center justify-center gap-2 rounded-lg py-3 text-sm font-bold text-white"
              style={{ backgroundColor: PRIMARY }}
            >
              Join Now
              <FiArrowRight />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderSection;