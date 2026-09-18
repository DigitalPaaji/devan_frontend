"use client";

import Link from "next/link";
import React from "react";
import {
  FiArrowLeft,
  FiChevronRight,
  FiCheckCircle,
  FiFileText,
  FiLock,
  FiMail,
  FiShield,
  FiUser,
} from "react-icons/fi";

const sections = [
  { id: "acceptance", title: "Acceptance of Terms" },
  { id: "about", title: "About DEVAN" },
  { id: "accounts", title: "User Accounts" },
  { id: "content", title: "Content & Information" },
  { id: "jobs", title: "Jobs & Applications" },
  { id: "experts", title: "Experts & Professional Content" },
  { id: "conduct", title: "User Conduct" },
  { id: "intellectual", title: "Intellectual Property" },
  { id: "third-party", title: "Third-Party Links & Services" },
  { id: "availability", title: "Platform Availability" },
  { id: "disclaimer", title: "Disclaimer" },
  { id: "limitation", title: "Limitation of Liability" },
  { id: "termination", title: "Termination" },
  { id: "changes", title: "Changes to Terms" },
  { id: "contact", title: "Contact Us" },
];

const SectionTitle = ({ number, children, id }) => (
  <section id={id} className="scroll-mt-28">
    <div className="mb-5 flex items-end gap-4 border-b border-gray-900 pb-3">
      <span className="h-7 w-1 bg-blue-600" />
      <div>
        <p className="mb-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600">
          Section {number}
        </p>

        <h2 className="font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
          {children}
        </h2>
      </div>
    </div>
  </section>
);

const InfoBox = ({ icon: Icon, title, children }) => (
  <div className="border border-gray-200 bg-gray-50 p-5">
    <div className="mb-3 flex items-center gap-3">
      <div className="flex h-9 w-9 items-center justify-center border border-blue-200 bg-white text-blue-600">
        <Icon size={17} />
      </div>

      <h3 className="font-serif text-lg font-bold text-gray-900">
        {title}
      </h3>
    </div>

    <div className="text-sm leading-7 text-gray-600">{children}</div>
  </div>
);

export default function TermsConditionsPage() {
  return (
    <main className="min-h-screen mt-10 bg-white text-gray-900">
      {/* HERO */}
      <section className="border-b border-gray-200 bg-white">
        <div className="container mx-auto px-4 pb-14  lg:pb-24">
          {/* Breadcrumb */}
          <div className="mb-10 flex items-center gap-2 text-xs text-gray-500">
            <Link
              href="/"
              className="transition-colors hover:text-blue-600"
            >
              Home
            </Link>

            <FiChevronRight size={13} />

            <span className="text-gray-900">Terms & Conditions</span>
          </div>

          <div className="max-w-4xl">
            <div className="mb-5 inline-flex items-center gap-2 border border-blue-200 bg-blue-50 px-3 py-1.5">
              <FiFileText size={13} className="text-blue-600" />

              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-blue-600">
                Legal Information
              </span>
            </div>

            <h1 className="font-serif text-4xl font-bold leading-tight text-gray-950 sm:text-5xl lg:text-6xl">
              Terms & Conditions
            </h1>

            <p className="mt-6 max-w-3xl font-serif text-lg leading-8 text-gray-600 sm:text-xl">
              These terms explain the rules and conditions that apply when
              accessing and using the DEVAN platform, its services, content,
              career opportunities, and professional resources.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-gray-500">
              <span className="flex items-center gap-2">
                <FiShield className="text-blue-600" />
                Responsible Platform Use
              </span>

              <span className="flex items-center gap-2">
                <FiCheckCircle className="text-blue-600" />
                Professional Community
              </span>

              <span>
                Last updated: September 2026
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="container mx-auto grid grid-cols-1 gap-10 px-4 py-12 lg:grid-cols-3 lg:py-16">
        {/* CONTENT */}
        <article className="lg:col-span-2">
          {/* Back */}
          <Link
            href="/"
            className="mb-10 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-600 transition-colors hover:text-blue-600"
          >
            <FiArrowLeft size={15} />
            Back to Home
          </Link>

          <div className="space-y-12">
            {/* INTRO */}
            <div className="border-l-2 border-blue-600 bg-blue-50 p-5 sm:p-6">
              <p className="font-serif text-[16px] leading-8 text-gray-700">
                Welcome to DEVAN. By accessing or using our website and
                platform, you agree to comply with these Terms & Conditions.
                Please read them carefully before using our services.
              </p>
            </div>

            {/* 01 */}
            <SectionTitle number="01" id="acceptance">
              Acceptance of Terms
            </SectionTitle>

            <div className="space-y-4 text-[16px] leading-8 text-gray-700">
              <p>
                By accessing, browsing, registering on, or using the DEVAN
                platform, you acknowledge that you have read, understood, and
                agreed to these Terms & Conditions.
              </p>

              <p>
                If you do not agree with any part of these terms, you should
                not use the platform or its services.
              </p>

              <p>
                These terms apply to all visitors, registeblue users,
                professionals, employers, experts, applicants, and other
                individuals who interact with DEVAN.
              </p>
            </div>

            {/* 02 */}
            <SectionTitle number="02" id="about">
              About DEVAN
            </SectionTitle>

            <div className="space-y-4 text-[16px] leading-8 text-gray-700">
              <p>
                DEVAN is a professional platform focused on CSSD,
                sterilization, infection control, healthcare education,
                professional knowledge, career opportunities, and industry
                resources.
              </p>

              <p>
                The platform may provide articles, expert content, news,
                events, learning resources, job listings, professional
                discussions, and other related services.
              </p>

              <p>
                DEVAN may introduce, modify, suspend, or discontinue any
                feature or service at its discretion.
              </p>
            </div>

            {/* 03 */}
            <SectionTitle number="03" id="accounts">
              User Accounts
            </SectionTitle>

            <div className="space-y-5">
              <p className="text-[16px] leading-8 text-gray-700">
                Certain features may require you to create an account. When
                creating an account, you agree to provide accurate and
                reasonably current information.
              </p>

              <ul className="space-y-3">
                {[
                  "You are responsible for maintaining the confidentiality of your account information.",
                  "You are responsible for activities performed through your account.",
                  "You should notify DEVAN if you believe your account has been accessed without authorization.",
                  "You must not create an account using false or misleading information.",
                  "You must not impersonate another person or organization.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[15px] leading-7 text-gray-700"
                  >
                    <FiCheckCircle
                      size={17}
                      className="mt-1 flex-shrink-0 text-blue-600"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* 04 */}
            <SectionTitle number="04" id="content">
              Content & Information
            </SectionTitle>

            <div className="space-y-4 text-[16px] leading-8 text-gray-700">
              <p>
                DEVAN may publish information relating to sterilization, CSSD,
                infection control, healthcare practices, professional
                development, jobs, news, and other relevant subjects.
              </p>

              <p>
                While we aim to provide useful and reliable information, users
                should independently evaluate information before relying on it
                for professional, operational, medical, regulatory, or
                institutional decisions.
              </p>

              <p>
                Content published on DEVAN may be updated, changed, corrected,
                or removed without prior notice.
              </p>
            </div>

            {/* 05 */}
            <SectionTitle number="05" id="jobs">
              Jobs & Applications
            </SectionTitle>

            <div className="space-y-4 text-[16px] leading-8 text-gray-700">
              <p>
                DEVAN may provide job listings and allow users to submit
                applications through the platform.
              </p>

              <p>
                DEVAN does not guarantee employment, interviews, selection,
                compensation, or any particular outcome from submitting an
                application.
              </p>

              <p>
                Job information such as company details, responsibilities,
                qualifications, location, salary, and availability may be
                provided by employers, recruiters, experts, or other
                authorized users.
              </p>

              <p>
                Applicants are responsible for ensuring that the information
                submitted in their profiles, resumes, and applications is
                accurate.
              </p>
            </div>

            {/* 06 */}
            <SectionTitle number="06" id="experts">
              Experts & Professional Content
            </SectionTitle>

            <div className="space-y-4 text-[16px] leading-8 text-gray-700">
              <p>
                DEVAN may feature healthcare professionals, CSSD experts,
                sterilization professionals, infection control professionals,
                educators, and other contributors.
              </p>

              <p>
                Opinions, articles, educational materials, case studies, and
                other content published by individual experts represent the
                views and responsibility of the respective contributor unless
                expressly stated otherwise.
              </p>

              <p>
                Such content should not automatically be interpreted as
                personalized medical, legal, regulatory, or institutional
                advice.
              </p>
            </div>

            {/* 07 */}
            <SectionTitle number="07" id="conduct">
              User Conduct
            </SectionTitle>

            <div className="space-y-4 text-[16px] leading-8 text-gray-700">
              <p>
                Users agree to use DEVAN only for lawful and legitimate
                purposes.
              </p>

              <p>You must not:</p>

              <ul className="space-y-3 pl-1">
                {[
                  "Use the platform for fraudulent, unlawful, or abusive activities.",
                  "Submit false, misleading, or intentionally inaccurate information.",
                  "Attempt to gain unauthorized access to accounts, systems, APIs, or platform infrastructure.",
                  "Upload malicious code, viruses, or harmful files.",
                  "Harass, threaten, abuse, or discriminate against other users.",
                  "Copy, reproduce, scrape, or commercially exploit platform content without authorization.",
                  "Interfere with the normal operation or security of the platform.",
                ].map((item, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 text-[15px] leading-7"
                  >
                    <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 bg-blue-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 08 */}
            <SectionTitle number="08" id="intellectual">
              Intellectual Property
            </SectionTitle>

            <div className="space-y-4 text-[16px] leading-8 text-gray-700">
              <p>
                Unless otherwise stated, DEVAN and its licensors retain rights
                in the platform design, branding, logos, graphics, text,
                software, layouts, and other original platform materials.
              </p>

              <p>
                You may access and use the content for personal and
                non-commercial purposes consistent with these terms.
              </p>

              <p>
                You must not reproduce, modify, distribute, sell, publish, or
                commercially exploit protected DEVAN content without prior
                authorization.
              </p>
            </div>

            {/* 09 */}
            <SectionTitle number="09" id="third-party">
              Third-Party Links & Services
            </SectionTitle>

            <div className="space-y-4 text-[16px] leading-8 text-gray-700">
              <p>
                DEVAN may contain links to third-party websites, services,
                organizations, employers, or external resources.
              </p>

              <p>
                These third-party services operate independently and may have
                their own terms, policies, and practices.
              </p>

              <p>
                DEVAN is not responsible for the content, availability,
                security, accuracy, or practices of third-party websites or
                services.
              </p>
            </div>

            {/* 10 */}
            <SectionTitle number="10" id="availability">
              Platform Availability
            </SectionTitle>

            <div className="space-y-4 text-[16px] leading-8 text-gray-700">
              <p>
                We aim to keep DEVAN available and functioning reliably.
                However, uninterrupted availability cannot be guaranteed.
              </p>

              <p>
                The platform may occasionally be unavailable because of
                maintenance, upgrades, technical issues, security events,
                infrastructure failures, or circumstances beyond our
                reasonable control.
              </p>
            </div>

            {/* 11 */}
            <SectionTitle number="11" id="disclaimer">
              Disclaimer
            </SectionTitle>

            <div className="border border-gray-200 bg-gray-50 p-6">
              <p className="font-serif text-[16px] leading-8 text-gray-700">
                DEVAN provides its platform and content on an
                <strong className="text-gray-900"> "as available" </strong>
                and
                <strong className="text-gray-900"> "as is" </strong>
                basis to the extent permitted by applicable law.
              </p>

              <p className="mt-4 text-[15px] leading-7 text-gray-600">
                Information available on DEVAN is intended for general
                professional and educational purposes and should not be
                treated as a substitute for professional judgment, institutional
                policies, applicable standards, or qualified advice.
              </p>
            </div>

            {/* 12 */}
            <SectionTitle number="12" id="limitation">
              Limitation of Liability
            </SectionTitle>

            <div className="space-y-4 text-[16px] leading-8 text-gray-700">
              <p>
                To the extent permitted by applicable law, DEVAN and its
                associated parties will not be responsible for indirect,
                incidental, consequential, or other losses arising from the
                use of, or inability to use, the platform.
              </p>

              <p>
                This includes losses associated with reliance on information,
                job listings, applications, third-party services, technical
                interruptions, or user-generated content.
              </p>
            </div>

            {/* 13 */}
            <SectionTitle number="13" id="termination">
              Termination
            </SectionTitle>

            <div className="space-y-4 text-[16px] leading-8 text-gray-700">
              <p>
                DEVAN may suspend or terminate access to an account or
                platform feature where there is a reasonable basis to believe
                that a user has violated these terms, applicable law, or
                platform security requirements.
              </p>

              <p>
                Users may stop using the platform at any time. Certain
                provisions of these terms may continue to apply after account
                termination where appropriate.
              </p>
            </div>

            {/* 14 */}
            <SectionTitle number="14" id="changes">
              Changes to Terms
            </SectionTitle>

            <div className="space-y-4 text-[16px] leading-8 text-gray-700">
              <p>
                DEVAN may update these Terms & Conditions from time to time to
                reflect changes to the platform, services, legal requirements,
                or operational practices.
              </p>

              <p>
                Updated terms will be published on this page with a revised
                "Last updated" date.
              </p>

              <p>
                Continued use of the platform after changes are published may
                constitute acceptance of the updated terms, subject to
                applicable law.
              </p>
            </div>

            {/* 15 */}
            <SectionTitle number="15" id="contact">
              Contact Us
            </SectionTitle>

            <div className="border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-start">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center border border-blue-200 bg-blue-50 text-blue-600">
                  <FiMail size={20} />
                </div>

                <div>
                  <h3 className="font-serif text-xl font-bold text-gray-900">
                    Questions about these terms?
                  </h3>

                  <p className="mt-2 text-[15px] leading-7 text-gray-600">
                    For questions, concerns, or requests relating to these
                    Terms & Conditions, please use the official contact
                    information provided by DEVAN.
                  </p>
                </div>
              </div>
            </div>

            {/* FINAL NOTE */}
            <div className="border-t border-gray-900 pt-6">
              <p className="text-xs leading-6 text-gray-500">
                These Terms & Conditions are intended as general website terms
                and should be reviewed and customized according to DEVAN's
                actual services, business structure, applicable contracts, and
                legal requirements before being used as a final legal
                document.
              </p>
            </div>
          </div>
        </article>

        {/* SIDEBAR */}
        <aside className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            {/* TABLE OF CONTENTS */}
            <div className="border border-gray-200 bg-white">
              <div className="border-b border-gray-900 px-5 py-4">
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                  On This Page
                </p>

                <h3 className="mt-1 font-serif text-xl font-bold text-gray-900">
                  Terms Overview
                </h3>
              </div>

              <nav className="p-3">
                {sections.map((section, index) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className="group flex items-center justify-between border-b border-gray-100 px-3 py-2.5 text-sm text-gray-600 last:border-0 hover:bg-blue-50 hover:text-blue-600"
                  >
                    <span>
                      <span className="mr-2 text-[10px] text-gray-400">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {section.title}
                    </span>

                    <FiChevronRight
                      size={13}
                      className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                    />
                  </a>
                ))}
              </nav>
            </div>

            {/* TERMS CARD */}
            <InfoBox icon={FiShield} title="Responsible Use">
              DEVAN is built as a professional platform. Please use the
              platform responsibly and respect other professionals, employers,
              experts, and members of the community.
            </InfoBox>

            {/* PRIVACY CARD */}
            <div className="border border-gray-200 bg-gray-950 p-6 text-white">
              <div className="mb-4 flex h-10 w-10 items-center justify-center border border-white/20 text-blue-500">
                <FiLock size={18} />
              </div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-400">
                Your Privacy
              </p>

              <h3 className="mt-2 font-serif text-2xl font-bold">
                Privacy Policy
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-400">
                Learn how DEVAN collects, uses, protects, and handles user
                information.
              </p>

              <Link
                href="/privacy-policy"
                className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition-colors hover:text-blue-500"
              >
                Read Privacy Policy
                <FiChevronRight size={14} />
              </Link>
            </div>

            {/* ACCOUNT CARD */}
            <div className="border border-gray-200 bg-white p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center border border-blue-200 bg-blue-50 text-blue-600">
                <FiUser size={18} />
              </div>

              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-gray-500">
                Platform Access
              </p>

              <h3 className="mt-2 font-serif text-xl font-bold text-gray-900">
                Professional Community
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Use DEVAN to learn, discover opportunities, share professional
                knowledge, and connect with the healthcare community.
              </p>
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

     





