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
  FiUserPlus,
  FiMenu,
} from "react-icons/fi";
import { FaNewspaper } from "react-icons/fa";

const PRIMARY = "#153497";

const HeaderSection = () => {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [learningOpen, setLearningOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* ----------------------------------------------------------
     Scroll effect
  ---------------------------------------------------------- */

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ----------------------------------------------------------
     Close mobile menu when route changes
  ---------------------------------------------------------- */

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
    if (href === "/") {
      return pathname === "/";
    }

    return pathname.startsWith(href);
  };

  const mainLinks = [
    {
      title: "Home",
      href: "/",
      icon: <FiHome />,
    },
    {
      title: "Experts",
      href: "/experts",
      icon: <FiUsers />,
    },
    {
      title: "Jobs",
      href: "/jobs",
      icon: <FiBriefcase />,
    },
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
    <>
      {/* ======================================================
          DESKTOP / MOBILE HEADER
      ======================================================= */}

      <header
        className={`fixed left-0 right-0 top-0 z-[100] transition-all duration-500 ${
          scrolled
            ? "px-3 pt-3 sm:px-5"
            : "px-3 pt-3 sm:px-5 lg:px-8 lg:pt-5"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl rounded-2xl border transition-all duration-500 ${
            scrolled
              ? "border-white/10 bg-white shadow-2xl shadow-black/20 backdrop-blur-2xl"
              : "border-transparent bg-white/80 shadow-lg shadow-black/[0.03] backdrop-blur-xl"
          }`}
        >
          <div className="flex h-[72px] items-center justify-between px-4 sm:px-6">
            {/* ==================================================
                LOGO
            =================================================== */}

            <Link
              href="/"
              className="group relative flex shrink-0 items-center"
            >
              <div
                className={`absolute inset-0 rounded-full blur-2xl transition-opacity duration-500 ${
                  scrolled
                    ? "opacity-30 group-hover:opacity-50"
                    : "opacity-10"
                }`}
                style={{ backgroundColor: PRIMARY }}
              />

              <img
                src="/Images/Logo.webp"
                alt="ExpertConnect"
                className={`relative w-auto object-contain transition-all duration-500 ${
                  scrolled ? "h-8" : "h-10"
                }`}
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
                    className={`group relative flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                      active
                        ? "text-white"
                        
                        : "text-slate-600 hover:text-[#153497]"
                    }`}
                  >
                    {active && (
                      <span
                        className="absolute inset-0 -z-10 rounded-xl"
                        style={{
                          backgroundColor: PRIMARY,
                        }}
                      />
                    )}

                    <span className="transition-transform duration-300 group-hover:-translate-y-0.5">
                      {item.icon}
                    </span>

                    {item.title}
                  </Link>
                );
              })}

              {/* ==================================================
                  LEARNING DROPDOWN
              =================================================== */}

              <div className="group relative">
                <button
                  className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300
                text-slate-600 hover:text-[#153497]
                  `}
                >
                  <FiBookOpen />

                  Learning

                  <FiChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
                </button>

                {/* Dropdown */}
                <div className="invisible absolute left-1/2 top-full w-[330px] -translate-x-1/2 translate-y-3 pt-3 opacity-0 transition-all duration-300 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#07143d]/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-2xl">
                    <div className="mb-1 px-3 py-2">
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-300/50">
                        Explore Learning
                      </p>
                    </div>

                    {learningLinks.map((item) => (
                      <Link
                        key={item.title}
                        href={item.href}
                        className="group/item flex items-center gap-3 rounded-xl p-3 transition-colors duration-200 hover:bg-white/[0.07]"
                      >
                        <span
                          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-blue-200 transition-all duration-300 group-hover/item:scale-105"
                          style={{
                            backgroundColor: `${PRIMARY}55`,
                          }}
                        >
                          {item.icon}
                        </span>

                        <span className="min-w-0 flex-1">
                          <span className="block text-sm font-semibold text-white">
                            {item.title}
                          </span>

                          <span className="mt-0.5 block text-xs text-blue-100/35">
                            {item.description}
                          </span>
                        </span>

                        <FiArrowRight className="text-blue-300/30 transition-all duration-300 group-hover/item:translate-x-1 group-hover/item:text-blue-300" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>

              <Link
                href="/about"
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 text-slate-600 hover:text-[#153497]`}
              >
                About
              </Link>

              <Link
                href="/contact"
                className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300  text-slate-600 hover:text-[#153497]`}
              >
                Contact
              </Link>
            </nav>

            {/* ==================================================
                DESKTOP ACTIONS
            =================================================== */}

            <div className="hidden items-center gap-2 lg:flex">
              <Link
                href="/login"
                className={`group flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all duration-300 ${
                  scrolled
                    ? "text-blue-100/60 hover:bg-white/[0.06] hover:text-white"
                    : "text-slate-600 hover:bg-slate-100"
                }`}
              >
                <FiLogIn />

                Login
              </Link>

              <Link
                href="/register"
                className="group flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-bold text-white shadow-lg shadow-blue-950/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
                style={{
                  backgroundColor: PRIMARY,
                }}
              >
                Join Now

                <FiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>

            {/* ==================================================
                MOBILE MENU BUTTON
            =================================================== */}

            <button
              onClick={() => setMobileOpen((prev) => !prev)}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 lg:hidden ${
                scrolled
                  ? "border-white/10 bg-white/[0.05] text-white"
                  : "border-slate-200 bg-white text-slate-700"
              }`}
            >
              {mobileOpen ? (
                <FiX className="text-xl" />
              ) : (
                <FiMenu className="text-xl" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================
          MOBILE OVERLAY
      ======================================================= */}

      <div
        onClick={() => setMobileOpen(false)}
        className={`fixed inset-0 z-[90] bg-black/50 backdrop-blur-sm transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "visible opacity-100"
            : "invisible opacity-0"
        }`}
      />

      {/* ======================================================
          MOBILE MENU
      ======================================================= */}

      <div
        className={`fixed left-3 right-3 top-[95px] z-[95] max-h-[calc(100vh-110px)] overflow-y-auto rounded-3xl border border-white/10 bg-[#07143d]/95 p-3 shadow-2xl shadow-black/30 backdrop-blur-2xl transition-all duration-500 lg:hidden ${
          mobileOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-5 opacity-0"
        }`}
      >
        {/* Mobile navigation */}
        <div className="space-y-1">
          {mainLinks.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.title}
                href={item.href}
                className={`flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold transition-all ${
                  active
                    ? "text-white"
                    : "text-blue-100/60 hover:bg-white/[0.05] hover:text-white"
                }`}
                style={
                  active
                    ? {
                        backgroundColor: `${PRIMARY}cc`,
                      }
                    : undefined
                }
              >
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-xl ${
                    active
                      ? "bg-white/10"
                      : "bg-white/[0.04]"
                  }`}
                >
                  {item.icon}
                </span>

                {item.title}

                <FiArrowRight className="ml-auto text-blue-200/30" />
              </Link>
            );
          })}

          {/* Learning */}
          <button
            onClick={() => setLearningOpen((prev) => !prev)}
            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold text-blue-100/60 transition-all hover:bg-white/[0.05] hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04]">
              <FiBookOpen />
            </span>

            Learning

            <FiChevronDown
              className={`ml-auto transition-transform duration-300 ${
                learningOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              learningOpen
                ? "max-h-[500px] opacity-100"
                : "max-h-0 opacity-0"
            }`}
          >
            <div className="ml-4 space-y-1 border-l border-white/10 pl-3">
              {learningLinks.map((item) => (
                <Link
                  key={item.title}
                  href={item.href}
                  className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-blue-100/50 transition-colors hover:bg-white/[0.04] hover:text-white"
                >
                  <span className="text-blue-300">
                    {item.icon}
                  </span>

                  <span>{item.title}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* About */}
          <Link
            href="/about"
            className="flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold text-blue-100/60 transition-colors hover:bg-white/[0.05] hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04]">
              <FiUsers />
            </span>

            About Us
          </Link>

          {/* Contact */}
          <Link
            href="/contact"
            className="flex items-center gap-3 rounded-2xl px-4 py-3.5 text-sm font-semibold text-blue-100/60 transition-colors hover:bg-white/[0.05] hover:text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04]">
              <FiMail />
            </span>

            Contact
          </Link>
        </div>

        {/* Divider */}
        <div className="my-3 h-px bg-white/[0.07]" />

        {/* Mobile actions */}
        <div className="grid grid-cols-2 gap-2">
          <Link
            href="/login"
            className="flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] py-3 text-sm font-semibold text-blue-100/70 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            <FiLogIn />

            Login
          </Link>

          <Link
            href="/register"
            className="flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white"
            style={{
              backgroundColor: PRIMARY,
            }}
          >
            Join Now

            <FiArrowRight />
          </Link>
        </div>

        {/* Mobile tagline */}
        <div className="mt-3 rounded-2xl border border-white/[0.06] bg-white/[0.025] p-4">
          <p className="text-xs font-bold text-white">
            Learn · Grow · Connect
          </p>

          <p className="mt-1 text-[11px] leading-5 text-blue-100/30">
            Discover expert knowledge, opportunities and resources.
          </p>
        </div>
      </div>

      {/* ======================================================
          SMALL ANIMATED ACCENT
      ======================================================= */}

      <div
        className={`pointer-events-none fixed left-1/2 top-0 z-[101] h-[2px] -translate-x-1/2 transition-all duration-700 ${
          scrolled ? "w-32 opacity-100" : "w-0 opacity-0"
        }`}
        style={{
          backgroundColor: PRIMARY,
          boxShadow: `0 0 20px ${PRIMARY}`,
        }}
      />
    </>
  );
};

export default HeaderSection;

