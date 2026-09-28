"use client";

import React from "react";
import Link from "next/link";
import {
  FiYoutube,
  FiInstagram,
  FiLinkedin,
  FiTwitter,
  FiArrowUpRight,
  FiMail,
  FiMapPin,
  FiChevronUp,
  FiHeart,
  FiCalendar,
} from "react-icons/fi";

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
    ["Events", "/events"],
  ];

  const resourceLinks = [
    ["Privacy Policy", "/privacy-policy"],
    ["Terms & Conditions", "/terms"],
  
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

  return (
    <footer className="relative mt-20 w-full overflow-hidden bg-[#162521] text-[#F7F5F0]">

     






      <div className="absolute left-0 top-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block h-[70px] w-full sm:h-[90px]"
          viewBox="0 0 1440 90"
          preserveAspectRatio="none"
        >
          <path
            d="
              M0 0
              H1440
              V38
              C1260 12 1160 75 980 55
              C800 35 730 18 560 48
              C370 82 220 70 0 35
              Z
            "
            fill="#F7F5F0"
          />
        </svg>
      </div>

     

      <div className="pointer-events-none absolute inset-0">

        <div
          className="
            absolute
            -right-32
            top-40
            h-80
            w-80
            rounded-full
            bg-[#2F6F5C]
            opacity-[0.08]
            blur-3xl
          "
        />

        <div
          className="
            absolute
            -left-32
            bottom-20
            h-72
            w-72
            rounded-full
            bg-[#2F6F5C]
            opacity-[0.06]
            blur-3xl
          "
        />

        {/* <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            [background-image:linear-gradient(rgba(247,245,240,.8)_1px,transparent_1px),linear-gradient(90deg,rgba(247,245,240,.8)_1px,transparent_1px)]
            [background-size:60px_60px]
          "
        /> */}
      </div>

      {/* =====================================================
          CONTENT
      ====================================================== */}

      <div className="relative z-10 mx-auto max-w-7xl px-4 pb-6 pt-32 sm:px-6 lg:px-8">

        {/* =================================================
            INTRO
        ================================================= */}

        {/* <div className="grid grid-cols-1 gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.6fr_1fr] lg:items-end">

          <div className="max-w-2xl">

            <div className="mb-5 flex items-center gap-3">

              <span
                className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  border
                  border-[#2F6F5C]/50
                  bg-[#2F6F5C]/10
                  text-[#8DB9A9]
                "
              >
                <FiCalendar size={16} />
              </span>

              <span
                className="
                  hero-sans
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.2em]
                  text-[#8DB9A9]
                "
              >
                Professional Community
              </span>

            </div>

            <h2
              className="
                hero-serif
                max-w-xl
                text-3xl
                leading-tight
                text-[#F7F5F0]
                sm:text-4xl
                lg:text-[44px]
              "
            >
              Learn, connect,
              <span className="block text-[#8DB9A9]">
                grow together.
              </span>
            </h2>

            <p
              className="
                hero-sans
                mt-5
                max-w-xl
                text-sm
                leading-7
                text-[#B9C3BD]
              "
            >
              A professional learning and networking platform helping
              experts share knowledge, professionals discover opportunities,
              and communities grow together.
            </p>

          </div>

        

          <div className="lg:flex lg:justify-end">

            <Link
              href="/events"
              className="
                hero-sans
                group
                inline-flex
                items-center
                gap-3
                border-b
                border-[#8DB9A9]
                pb-2
                text-sm
                font-medium
                text-[#F7F5F0]
                transition-colors
                hover:text-[#8DB9A9]
              "
            >
              Explore upcoming events

              <FiArrowUpRight
                size={15}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </Link>

          </div>

        </div> */}

      

        <div
          className="
            grid
            grid-cols-1
            gap-12
            border-b
            border-white/10
            py-12
            md:grid-cols-2
            lg:grid-cols-[1.5fr_1fr_1fr_1fr]
          "
        >

          {/* =============================================
              BRAND
          ============================================== */}

          <div>

            <Link href="/" className="group inline-block">

              <img
                src="/Images/Logo1.webp"
                alt="ExpertConnect"
                className="
                  h-24
                  w-auto
                  object-contain
                  transition-transform
                  duration-500
                  group-hover:-translate-y-1
                "
              />

            </Link>

            <p
              className="
                hero-sans
                mt-4
                max-w-sm
                text-sm
                leading-6
                text-[#B9C3BD]
              "
            >
              Discover expert knowledge, career opportunities,
              useful resources and professional connections —
              all in one place.
            </p>

            {/* SOCIALS */}

            <div className="mt-6 flex gap-2">

              {socials.map((social) => (

                <Link
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="
                    group
                    flex
                    h-9
                    w-9
                    items-center
                    justify-center
                    border
                    border-white/10
                    bg-white/[0.03]
                    text-[#AAB6AF]
                    transition-all
                    duration-300
                    hover:border-[#2F6F5C]
                    hover:bg-[#2F6F5C]
                    hover:text-white
                  "
                >

                  <span
                    className="
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    {social.icon}
                  </span>

                </Link>

              ))}

            </div>

          </div>

          {/* =============================================
              PLATFORM
          ============================================== */}

          <FooterColumn
            title="Platform"
            links={platformLinks}
          />

          {/* =============================================
              LEARNING
          ============================================== */}

          <FooterColumn
            title="Learning"
            links={learningLinks}
          />

          {/* =============================================
              RESOURCES
          ============================================== */}

          <div>

            <FooterColumn
              title="Resources"
              links={resourceLinks}
            />

            {/* NEWSLETTER */}

            <div className="mt-8">

              <p
                className="
                  hero-sans
                  mb-3
                  text-[10px]
                  font-medium
                  uppercase
                  tracking-[0.18em]
                  text-[#8DB9A9]
                "
              >
                Stay Updated
              </p>

              <div
                className="
                  flex
                  overflow-hidden
                  border
                  border-white/10
                  bg-white/[0.03]
                  transition-colors
                  focus-within:border-[#2F6F5C]
                "
              >

                <input
                  type="email"
                  placeholder="Your email address"
                  className="
                    hero-sans
                    min-w-0
                    flex-1
                    bg-transparent
                    px-3
                    py-2.5
                    text-sm
                    text-white
                    outline-none
                    placeholder:text-[#8D9892]
                  "
                />

                <button
                  aria-label="Subscribe"
                  className="
                    flex
                    h-10
                    w-10
                    shrink-0
                    items-center
                    justify-center
                    bg-[#2F6F5C]
                    text-white
                    transition-colors
                    duration-300
                    hover:bg-[#3A806B]
                  "
                >
                  <FiArrowUpRight size={16} />
                </button>

              </div>

              <p
                className="
                  hero-sans
                  mt-2
                  text-[10px]
                  text-[#7F8B84]
                "
              >
                Weekly insights. No spam. Unsubscribe anytime.
              </p>

            </div>

          </div>

        </div>

        {/* =================================================
            MARQUEE
        ================================================= */}

        <div
          className="
            relative
            overflow-hidden
            border-b
            border-white/10
            py-5
          "
        >

          <div
            className="
              footer-marquee
              flex
              w-max
              items-center
              gap-8
              whitespace-nowrap
              text-[10px]
              font-medium
              uppercase
              tracking-[0.3em]
              text-[#78857E]
            "
          >

            <span>Learn</span>
            <span className="text-[#2F6F5C]">•</span>

            <span>Connect</span>
            <span className="text-[#2F6F5C]">•</span>

            <span>Grow</span>
            <span className="text-[#2F6F5C]">•</span>

            <span>Share Knowledge</span>
            <span className="text-[#2F6F5C]">•</span>

            <span>Build Your Career</span>
            <span className="text-[#2F6F5C]">•</span>

            <span>Learn</span>
            <span className="text-[#2F6F5C]">•</span>

            <span>Connect</span>
            <span className="text-[#2F6F5C]">•</span>

            <span>Grow</span>
            <span className="text-[#2F6F5C]">•</span>

            <span>Share Knowledge</span>
            <span className="text-[#2F6F5C]">•</span>

            <span>Build Your Career</span>

          </div>

        </div>

      </div>

      {/* =====================================================
          BOTTOM BAR
      ====================================================== */}

      <div className="relative z-10 border-t border-white/[0.05]">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-4
            px-4
            py-5
            sm:px-6
            md:flex-row
            lg:px-8
          "
        >

          <p
            className="
              hero-sans
              text-center
              text-[11px]
              text-[#78857E]
              md:text-left
            "
          >
            © {new Date().getFullYear()} ExpertConnect.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5">

            <span
              className="
                hero-sans
                hidden
                text-[11px]
                text-[#78857E]
                sm:block
              "
            >
              Made with

              <FiHeart
                className="
                  mx-1
                  inline
                  text-[#8DB9A9]
                "
              />

              for professionals
            </span>

            <button
              onClick={scrollTop}
              className="
                hero-sans
                group
                flex
                items-center
                gap-2
                text-[11px]
                font-medium
                text-[#AAB6AF]
                transition-colors
                hover:text-white
              "
            >

              Back to top

              <span
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  border
                  border-white/10
                  bg-white/[0.03]
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:border-[#2F6F5C]
                  group-hover:bg-[#2F6F5C]
                "
              >
                <FiChevronUp size={14} />
              </span>

            </button>

          </div>

        </div>

      </div>

      {/* =====================================================
          ANIMATIONS
      ====================================================== */}

   

    </footer>
  );
};

/* ============================================================
   FOOTER COLUMN
============================================================ */

const FooterColumn = ({ title, links }) => {
  return (
    <div>

      <h4
        className="
          hero-sans
          mb-5
          text-[10px]
          font-semibold
          uppercase
          tracking-[0.2em]
          text-[#8DB9A9]
        "
      >
        {title}
      </h4>

      <ul className="space-y-3.5">

        {links.map(([label, href]) => (

          <li key={label}>

            <Link
              href={href}
              className="
                hero-sans
                group
                flex
                items-center
                gap-2
                text-sm
                text-[#AAB6AF]
                transition-all
                duration-300
                hover:translate-x-1
                hover:text-[#F7F5F0]
              "
            >

              <span
                className="
                  relative
                  flex
                  w-3
                  items-center
                "
              >

                <span
                  className="
                    absolute
                    h-1
                    w-1
                    rounded-full
                    bg-[#8DB9A9]
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <span
                  className="
                    h-px
                    w-0
                    bg-[#8DB9A9]
                    transition-all
                    duration-300
                    group-hover:w-3
                  "
                />

              </span>

              {label}

              <FiArrowUpRight
                size={12}
                className="
                  ml-auto
                  -translate-x-2
                  opacity-0
                  transition-all
                  duration-300
                  group-hover:translate-x-0
                  group-hover:opacity-100
                "
              />

            </Link>

          </li>

        ))}

      </ul>

    </div>
  );
};

export default Footer;

