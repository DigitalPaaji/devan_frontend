"use client";

import React from "react";
import Link from "next/link";
import {
  FiYoutube,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiArrowRight,
  FiMail,
  FiMapPin,
  FiChevronUp,
  FiHeart,
  FiBookOpen,
  FiBriefcase,
  FiUsers,
  FiPlayCircle,
} from "react-icons/fi";

const PRIMARY = "#153497";

const Footer = () => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const platformLinks = [
    ["Home", "/"],
    ["About Us", "/about"],
    ["Experts", "/experts"],
    ["Jobs", "/jobs"],
    ["Contact", "/contact"],
  ];

  const learningLinks = [
    ["Articles", "/articles"],
    ["Weekly Questions", "/weekly-question"],
    ["Videos", "/videos"],
    ["News", "/news"],
    ["Resources", "/resources"],
  ];

  const resourceLinks = [
    ["Privacy Policy", "/privacy-policy"],
    ["Terms & Conditions", "/terms"],
    ["Cookie Policy", "/cookies"],
    ["Help Center", "/help"],
  ];

  const socials = [
    {
      icon: <FiLinkedin />,
      href: "#",
      label: "LinkedIn",
    },
    {
      icon: <FiInstagram />,
      href: "#",
      label: "Instagram",
    },
    {
      icon: <FiYoutube />,
      href: "#",
      label: "YouTube",
    },
    {
      icon: <FiTwitter />,
      href: "#",
      label: "Twitter",
    },
  ];

  const features = [
    {
      icon: <FiUsers />,
      title: "Connect",
      text: "Meet industry experts",
    },
    {
      icon: <FiBookOpen />,
      title: "Learn",
      text: "Explore expert knowledge",
    },
    {
      icon: <FiBriefcase />,
      title: "Grow",
      text: "Discover new opportunities",
    },
    {
      icon: <FiPlayCircle />,
      title: "Watch",
      text: "Learn through videos",
    },
  ];

  return (
    <footer className="relative mt-3 pt-6 overflow-hidden bg-[#050d27] text-white">
      {/* =========================================================
          TOP DECORATIVE WAVE
      ========================================================== */}

      <div className="absolute -top-[1px] left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block h-[90px] w-full sm:h-[120px]"
          viewBox="0 0 1440 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,64 C180,130 330,105 500,65 C690,20 760,95 930,100 C1120,105 1220,25 1440,55 L1440,0 L0,0 Z"
            fill="white"
          />
        </svg>
      </div>

      {/* =========================================================
          BACKGROUND DECORATIONS
      ========================================================== */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
       
        <div
          className="absolute -left-32 top-40 h-80 w-80 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: PRIMARY }}
        />

        <div
          className="absolute -right-32 top-[45%] h-96 w-96 rounded-full blur-3xl opacity-20"
          style={{ backgroundColor: PRIMARY }}
        />

        <div className="footer-orb absolute left-[15%] top-[35%] h-3 w-3 rounded-full bg-white/20" />
        <div className="footer-orb-delay absolute right-[20%] top-[25%] h-2 w-2 rounded-full bg-blue-300/30" />

     
        <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(rgba(255,255,255,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.8)_1px,transparent_1px)] [background-size:55px_55px]" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 pb-8 pt-28 sm:px-6 lg:px-8">
         

          {/* <div className="relative mb-16 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-xl sm:p-8 lg:p-10">
           
            <div
              className="absolute -right-20 -top-20 h-56 w-56 rounded-full blur-3xl opacity-30"
              style={{ backgroundColor: PRIMARY }}
            />

            <div className="relative flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-300/20 bg-blue-400/10 px-3 py-1.5 text-xs font-semibold text-blue-200">
                  <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-blue-300" />
                  Built for professionals
                </div>

                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                  Learn more.
                  <span className="block text-blue-300">
                    Connect better.
                  </span>
                </h2>

                <p className="mt-4 max-w-xl text-sm leading-6 text-blue-100/55 sm:text-base">
                  Discover expert knowledge, career opportunities, useful
                  resources and a growing professional community — all in one
                  place.
                </p>
              </div>

              <Link
                href="/experts"
                className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full px-6 py-3.5 text-sm font-bold text-white shadow-xl shadow-blue-950/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                style={{ backgroundColor: PRIMARY }}
              >
                Explore Experts

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 transition-transform duration-300 group-hover:translate-x-1">
                  <FiArrowRight />
                </span>
              </Link>
            </div>
          </div> */}

          {/* =====================================================
              FEATURE STRIP
          ====================================================== */}

          {/* <div className="mb-16 grid grid-cols-2 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.025] sm:grid-cols-4">
            {features.map((item, index) => (
              <div
                key={item.title}
                className={`group relative flex items-center gap-3 p-5 transition-colors duration-300 hover:bg-white/[0.04] ${
                  index !== 0 ? "border-l border-white/10" : ""
                }`}
              >
                <div
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-blue-200 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                  style={{
                    backgroundColor: `${PRIMARY}55`,
                  }}
                >
                  {item.icon}
                </div>

                <div>
                  <p className="text-sm font-bold">{item.title}</p>
                  <p className="mt-0.5 text-[11px] text-blue-100/35">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div> */}

          {/* =====================================================
              MAIN FOOTER GRID
          ====================================================== */}

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
            {/* BRAND */}
            <div>
              <Link href="/" className="group inline-block">
                <div className="relative inline-flex">
                  <div
                    className="absolute inset-0 rounded-2xl blur-2xl opacity-30 transition-opacity duration-500 group-hover:opacity-60"
                    style={{ backgroundColor: PRIMARY }}
                  />

                  <img
                    src="/Images/Logo1.webp"
                    alt="ExpertConnect"
                    className="relative h-28 w-auto object-contain transition-transform duration-500 group-hover:-translate-y-1"
                  />
                </div>
              </Link>

              <p className="mt-5 max-w-sm text-sm leading-6 text-blue-100/45">
                A professional learning and networking platform designed to
                help experts share knowledge and professionals discover new
                opportunities.
              </p>

              {/* Contact */}
              {/* <div className="mt-7 space-y-3">
                <div className="flex items-center gap-3 text-sm text-blue-100/50">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-blue-300">
                    <FiMail />
                  </span>
                  hello@expertconnect.com
                </div>

                <div className="flex items-center gap-3 text-sm text-blue-100/50">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.05] text-blue-300">
                    <FiMapPin />
                  </span>
                  Connect with professionals worldwide
                </div>
              </div> */}

              {/* SOCIALS */}
              <div className="mt-7 flex gap-2">
                {socials.map((social) => (
                  <Link
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="group flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-blue-100/50 transition-all duration-300 hover:-translate-y-1 hover:border-blue-400/30 hover:bg-[#153497] hover:text-white"
                  >
                    <span className="transition-transform duration-300 group-hover:scale-110">
                      {social.icon}
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* PLATFORM */}
            <FooterColumn title="Platform" links={platformLinks} />

            {/* LEARNING */}
            <FooterColumn title="Learning" links={learningLinks} />

            {/* RESOURCES */}
            <div>
              <FooterColumn title="Resources" links={resourceLinks} />

              <div className="mt-8">
                {/* <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-100/35">
                  Stay Updated
                </p> */}

                <div className="group flex overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-1 transition-colors focus-within:border-blue-400/30">
                  <input
                    type="email"
                    placeholder="Your email address"
                    className="min-w-0 flex-1 bg-transparent px-3 py-2.5 text-sm text-white outline-none placeholder:text-blue-100/25"
                  />

                  <button
                    aria-label="Subscribe"
                    className="group/button flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-white transition-all duration-300 hover:scale-105"
                    style={{ backgroundColor: PRIMARY }}
                  >
                    <FiArrowRight className="transition-transform duration-300 group-hover/button:translate-x-0.5" />
                  </button>
                </div>

                <p className="mt-2 text-[10px] text-blue-100/25">
                  Weekly insights. No spam. Unsubscribe anytime.
                </p>
              </div>
            </div>
          </div>

          {/* =====================================================
              MARQUEE
          ====================================================== */}

          <div className="relative mt-16 overflow-hidden border-y border-white/[0.06] py-4">
            <div className="footer-marquee flex w-max items-center gap-10 whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.3em] text-blue-100/20">
              <span>Learn</span>
              <span>•</span>
              <span>Connect</span>
              <span>•</span>
              <span>Grow</span>
              <span>•</span>
              <span>Share Knowledge</span>
              <span>•</span>
              <span>Build Your Career</span>
              <span>•</span>
              <span>Learn</span>
              <span>•</span>
              <span>Connect</span>
              <span>•</span>
              <span>Grow</span>
              <span>•</span>
              <span>Share Knowledge</span>
              <span>•</span>
              <span>Build Your Career</span>
            </div>
          </div>
        </div>

        {/* =======================================================
            BOTTOM BAR
        ======================================================== */}

        <div className="border-t border-white/[0.07]">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 px-4 py-6 sm:px-6 md:flex-row lg:px-8">
            <p className="text-center text-xs text-blue-100/30 md:text-left">
              © {new Date().getFullYear()} ExpertConnect. All rights reserved.
            </p>

            <div className="flex items-center gap-5">
              <span className="hidden text-xs text-blue-100/25 sm:block">
                Made with
                <FiHeart className="mx-1 inline text-blue-300" />
                for professionals
              </span>

              <button
                onClick={scrollTop}
                className="group flex items-center gap-2 text-xs font-semibold text-blue-100/50 transition-colors hover:text-white"
              >
                Back to top

                <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 group-hover:-translate-y-1 group-hover:border-blue-400/30 group-hover:bg-[#153497]">
                  <FiChevronUp className="transition-transform duration-300 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================
          ANIMATIONS
      ========================================================== */}

      <style jsx>{`
        @keyframes footerFloat {
          0%,
          100% {
            transform: translateY(0) translateX(0);
          }

          50% {
            transform: translateY(-18px) translateX(8px);
          }
        }

        @keyframes footerMarquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-50%);
          }
        }

        .footer-orb {
          animation: footerFloat 5s ease-in-out infinite;
        }

        .footer-orb-delay {
          animation: footerFloat 7s ease-in-out infinite reverse;
        }

        .footer-marquee {
          animation: footerMarquee 30s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .footer-orb,
          .footer-orb-delay,
          .footer-marquee {
            animation: none;
          }
        }
      `}</style>
    </footer>
  );
};

/* ===============================================================
   FOOTER COLUMN
================================================================ */

const FooterColumn = ({ title, links }) => {
  return (
    <div>
      <h4 className="mb-5 text-xs font-bold uppercase tracking-[0.18em] text-white">
        {title}
      </h4>

      <ul className="space-y-3.5">
        {links.map(([label, href]) => (
          <li key={label}>
            <Link
              href={href}
              className="group flex items-center gap-2 text-sm text-blue-100/40 transition-all duration-300 hover:translate-x-1 hover:text-white"
            >
              <span className="relative flex w-3 items-center">
                <span className="absolute h-1.5 w-1.5 rounded-full bg-[#153497] opacity-0 transition-all duration-300 group-hover:opacity-100" />

                <span className="h-px w-0 bg-blue-400 transition-all duration-300 group-hover:w-3" />
              </span>

              {label}

              <FiArrowRight
                className="ml-auto -translate-x-2 text-xs opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Footer;

