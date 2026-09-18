"use client";

import React from "react";
import Link from "next/link";
import {
  FiArrowLeft,
  FiArrowRight,
  FiChevronRight,
  FiLock,
  FiMail,
  FiShield,
  FiUser,
} from "react-icons/fi";

const sections = [
  {
    id: "information",
    title: "1. Information We Collect",
  },
  {
    id: "usage",
    title: "2. How We Use Your Information",
  },
  {
    id: "accounts",
    title: "3. Account Information",
  },
  {
    id: "jobs",
    title: "4. Jobs & Applications",
  },
  {
    id: "cookies",
    title: "5. Cookies & Similar Technologies",
  },
  {
    id: "sharing",
    title: "6. Information Sharing",
  },
  {
    id: "security",
    title: "7. Data Security",
  },
  {
    id: "retention",
    title: "8. Data Retention",
  },
  {
    id: "rights",
    title: "9. Your Rights",
  },
  {
    id: "children",
    title: "10. Children's Privacy",
  },
  {
    id: "changes",
    title: "11. Changes to This Policy",
  },
  {
    id: "contact",
    title: "12. Contact Us",
  },
];

const page = () => {
  return (
    <main className="min-h-screen mt-10 bg-white text-gray-900">

      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="border-b border-gray-200 bg-gray-50">
        <div className="mx-auto container px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">

          {/* Breadcrumb */}
          <div className="mb-10 flex items-center gap-2 text-xs text-gray-500">
            <Link
              href="/"
              className="transition hover:text-blue-600"
            >
              Home
            </Link>

            <FiChevronRight size={13} />

            <span className="text-gray-900">
              Privacy Policy
            </span>
          </div>

          <div className="max-w-4xl">

            <div className="mb-5 flex items-center gap-3">
              <span className="h-px w-10 bg-blue-600" />

              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-blue-600">
                Legal Information
              </p>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-tight text-gray-950 sm:text-6xl">
              Privacy Policy
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-8 text-gray-600">
              Your privacy matters to us. This Privacy Policy explains how
              DEVAN collects, uses, protects and handles information when you
              use our professional platform, website and services.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-gray-500">
              <div className="flex items-center gap-2">
                <FiShield className="text-blue-600" />
                <span>Privacy & Security</span>
              </div>

              <div className="flex items-center gap-2">
                <FiLock className="text-blue-600" />
                <span>Responsible Data Handling</span>
              </div>

              <span className="text-gray-300">|</span>

              <span>
                Last updated: September 2026
              </span>
            </div>
          </div>
        </div>
      </section>

    
      <section>
        <div className="mx-auto container px-4 py-12 sm:px-6 lg:px-8 lg:py-16">

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">

            {/* =================================================
                CONTENT
            ================================================== */}
            <article className="lg:col-span-2">

              {/* Introduction */}
              <div className="border-l-4 border-blue-600 bg-blue-50 px-6 py-5">
                <p className="font-serif text-base leading-8 text-gray-700">
                  At <strong className="text-gray-900">DEVAN</strong>, we
                  respect your privacy and are committed to protecting the
                  personal information you share with us. This policy describes
                  what information we collect, why we collect it and how it may
                  be used when you interact with DEVAN.
                </p>
              </div>

              {/* =================================================
                  1
              ================================================== */}
              <section
                id="information"
                className="scroll-mt-28 pt-10"
              >
                <SectionTitle title="1. Information We Collect" />

                <p>
                  We may collect information that you voluntarily provide when
                  you create an account, apply for a job, contact us, subscribe
                  to updates or otherwise use features available on the DEVAN
                  platform.
                </p>

                <h3>Personal Information</h3>

                <p>
                  Depending on how you use our services, this may include:
                </p>

                <ul>
                  <li>Name and contact information</li>
                  <li>Email address and phone number</li>
                  <li>Profile information and professional details</li>
                  <li>Resume or CV information</li>
                  <li>Job application information</li>
                  <li>Account cblueentials</li>
                  <li>Information you submit through forms or communications</li>
                </ul>

                <h3>Technical Information</h3>

                <p>
                  We may also automatically receive certain technical
                  information when you visit or interact with our website,
                  such as browser type, device information, IP address,
                  operating system and general usage information.
                </p>
              </section>

              {/* =================================================
                  2
              ================================================== */}
              <section
                id="usage"
                className="scroll-mt-28 pt-10"
              >
                <SectionTitle title="2. How We Use Your Information" />

                <p>
                  DEVAN may use collected information for purposes including:
                </p>

                <ul>
                  <li>Creating and managing user accounts</li>
                  <li>Providing and improving our platform</li>
                  <li>Processing job applications</li>
                  <li>Connecting candidates with relevant opportunities</li>
                  <li>Providing professional and educational resources</li>
                  <li>Responding to questions and support requests</li>
                  <li>Sending important service-related communications</li>
                  <li>Improving website functionality and user experience</li>
                  <li>Detecting security issues and preventing misuse</li>
                  <li>Complying with applicable legal obligations</li>
                </ul>
              </section>

              {/* =================================================
                  3
              ================================================== */}
              <section
                id="accounts"
                className="scroll-mt-28 pt-10"
              >
                <SectionTitle title="3. Account Information" />

                <p>
                  If you create a DEVAN account, you are responsible for
                  providing accurate information and keeping your login
                  cblueentials secure.
                </p>

                <p>
                  Account information may be used to provide personalized
                  services, maintain your profile and enable features such as
                  job applications, professional resources and platform
                  interactions.
                </p>

                <p>
                  Please do not share your password or other authentication
                  cblueentials with other people.
                </p>
              </section>

              {/* =================================================
                  4
              ================================================== */}
              <section
                id="jobs"
                className="scroll-mt-28 pt-10"
              >
                <SectionTitle title="4. Jobs & Applications" />

                <p>
                  DEVAN may provide job listings and application functionality.
                  When you submit an application, information such as your
                  profile details, resume, qualifications and answers provided
                  during the application process may be processed to facilitate
                  recruitment.
                </p>

                <p>
                  Depending on the specific job and recruitment process,
                  relevant application information may be made available to
                  authorized recruiters, employers or other parties involved
                  in the recruitment process.
                </p>

                <div className="my-6 border border-gray-200 bg-gray-50 p-5">
                  <p className="text-sm leading-7 text-gray-600">
                    <strong className="text-gray-900">
                      Important:
                    </strong>{" "}
                    Users should avoid submitting unnecessary sensitive
                    personal information in resumes, applications or public
                    profile areas.
                  </p>
                </div>
              </section>

              {/* =================================================
                  5
              ================================================== */}
              <section
                id="cookies"
                className="scroll-mt-28 pt-10"
              >
                <SectionTitle title="5. Cookies & Similar Technologies" />

                <p>
                  DEVAN may use cookies and similar technologies to maintain
                  sessions, remember preferences, understand website usage and
                  improve the functionality of our services.
                </p>

                <p>
                  Cookies may also help us understand how visitors interact
                  with different parts of the platform.
                </p>

                <p>
                  You can configure your browser to refuse or delete cookies.
                  However, disabling certain cookies may affect the
                  functionality of some features.
                </p>
              </section>

              {/* =================================================
                  6
              ================================================== */}
              <section
                id="sharing"
                className="scroll-mt-28 pt-10"
              >
                <SectionTitle title="6. Information Sharing" />

                <p>
                  We do not sell your personal information as a product.
                  Information may be shablue only when reasonably necessary to
                  operate the platform, provide requested services or comply
                  with legal obligations.
                </p>

                <p>This may include sharing information with:</p>

                <ul>
                  <li>Service providers supporting our platform</li>
                  <li>Authorized employers or recruiters for job applications</li>
                  <li>Technology and infrastructure providers</li>
                  <li>Professional or business partners where appropriate</li>
                  <li>Government authorities when legally requiblue</li>
                </ul>

                <p>
                  We expect service providers who process information on our
                  behalf to handle it appropriately and securely.
                </p>
              </section>

              {/* =================================================
                  7
              ================================================== */}
              <section
                id="security"
                className="scroll-mt-28 pt-10"
              >
                <SectionTitle title="7. Data Security" />

                <p>
                  We take reasonable technical and organizational measures to
                  protect personal information from unauthorized access,
                  alteration, disclosure or destruction.
                </p>

                <p>
                  However, no internet transmission or electronic storage
                  system can be guaranteed to be completely secure. Users
                  should therefore understand that no method of transmission
                  over the internet is completely risk-free.
                </p>
              </section>

              {/* =================================================
                  8
              ================================================== */}
              <section
                id="retention"
                className="scroll-mt-28 pt-10"
              >
                <SectionTitle title="8. Data Retention" />

                <p>
                  We retain personal information for as long as reasonably
                  necessary to provide our services, maintain business and
                  legal records, resolve disputes, enforce agreements and
                  comply with applicable legal requirements.
                </p>

                <p>
                  Retention periods may vary depending on the type of
                  information and the reason it was collected.
                </p>
              </section>

              {/* =================================================
                  9
              ================================================== */}
              <section
                id="rights"
                className="scroll-mt-28 pt-10"
              >
                <SectionTitle title="9. Your Rights" />

                <p>
                  Depending on applicable law, you may have rights relating to
                  your personal information, including the ability to:
                </p>

                <ul>
                  <li>Request access to certain personal information</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion where legally applicable</li>
                  <li>Withdraw certain consents</li>
                  <li>Object to or restrict certain processing</li>
                </ul>

                <p>
                  To make a privacy-related request, please contact us using
                  the contact information provided below. We may need to verify
                  your identity before processing certain requests.
                </p>
              </section>

              {/* =================================================
                  10
              ================================================== */}
              <section
                id="children"
                className="scroll-mt-28 pt-10"
              >
                <SectionTitle title="10. Children's Privacy" />

                <p>
                  DEVAN is intended for professional and career-related use.
                  Our services are not directed toward children who are not
                  legally permitted to use such services.
                </p>

                <p>
                  If you believe that a child has provided personal information
                  to us without appropriate authorization, please contact us so
                  that we can review the situation and take appropriate action.
                </p>
              </section>

              {/* =================================================
                  11
              ================================================== */}
              <section
                id="changes"
                className="scroll-mt-28 pt-10"
              >
                <SectionTitle title="11. Changes to This Policy" />

                <p>
                  We may update this Privacy Policy from time to time to
                  reflect changes in our services, technology, legal
                  requirements or privacy practices.
                </p>

                <p>
                  When changes are made, the updated version will be published
                  on this page with a revised “Last updated” date.
                </p>

                <p>
                  We encourage users to review this page periodically to stay
                  informed about how their information is handled.
                </p>
              </section>

              {/* =================================================
                  12
              ================================================== */}
              <section
                id="contact"
                className="scroll-mt-28 pt-10"
              >
                <SectionTitle title="12. Contact Us" />

                <p>
                  If you have questions, concerns or requests regarding this
                  Privacy Policy or the handling of your personal information,
                  please contact the DEVAN team.
                </p>

                <div className="mt-6 border border-gray-200 bg-gray-50 p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-blue-600 text-white">
                      <FiMail size={20} />
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                        Privacy Support
                      </p>

                      <h3 className="mt-1 font-serif text-xl font-bold text-gray-900">
                        DEVAN Team
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-gray-600">
                        For privacy-related questions or requests, please use
                        the official contact information provided by DEVAN.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Bottom note */}
              <div className="mt-12 border-t border-gray-900 pt-6">
                <p className="text-xs leading-6 text-gray-500">
                  This Privacy Policy is provided for general information about
                  DEVAN's privacy practices. Depending on your jurisdiction and
                  the specific services you use, additional rights,
                  disclosures or terms may apply.
                </p>
              </div>

            </article>

            {/* =================================================
                SIDEBAR
            ================================================== */}
            <aside className="lg:sticky lg:top-24 lg:self-start">

              {/* Table of Contents */}
              <div className="border border-gray-200 bg-white">

                <div className="border-b border-gray-900 px-5 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-gray-500">
                    On This Page
                  </p>

                  <h3 className="mt-1 font-serif text-xl font-bold text-gray-900">
                    Privacy Policy
                  </h3>
                </div>

                <div className="p-4">
                  {sections.map((section) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="group flex items-start gap-2 border-b border-gray-100 px-2 py-3 text-sm text-gray-600 transition last:border-0 hover:text-blue-600"
                    >
                      <FiChevronRight
                        size={14}
                        className="mt-0.5 shrink-0 transition-transform group-hover:translate-x-1"
                      />

                      <span>
                        {section.title}
                      </span>
                    </a>
                  ))}
                </div>
              </div>

              {/* Privacy Card */}
              <div className="mt-7 border border-gray-200 bg-white p-6">

                <div className="flex h-12 w-12 items-center justify-center bg-blue-50 text-blue-600">
                  <FiLock size={22} />
                </div>

                <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.25em] text-blue-600">
                  Your Privacy
                </p>

                <h3 className="mt-2 font-serif text-2xl font-bold text-gray-900">
                  Your information matters.
                </h3>

                <p className="mt-3 text-sm leading-7 text-gray-500">
                  We aim to handle personal information responsibly and use it
                  only for legitimate platform, service and legal purposes.
                </p>

                <div className="mt-5 border-t border-gray-200 pt-5">
                  <Link
                    href="/"
                    className="group inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-gray-700 transition hover:text-blue-600"
                  >
                    <FiArrowLeft />
                    Back to Home

                    <FiChevronRight
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </div>

              {/* Account Card */}
              <div className="mt-7 border border-gray-200 bg-gray-950 p-6 text-white">

                <div className="flex h-11 w-11 items-center justify-center bg-blue-600">
                  <FiUser size={20} />
                </div>

                <h3 className="mt-5 font-serif text-xl font-bold">
                  Manage your account
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-400">
                  Keep your profile and professional information accurate and
                  up to date.
                </p>

                <Link
                  href="/profile"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.15em] text-white transition hover:text-blue-400"
                >
                  View Profile
                  <FiArrowRight />
                </Link>
              </div>

            </aside>
          </div>
        </div>
      </section>
    </main>
  );
};

/* ============================================================
   SECTION TITLE
============================================================ */

const SectionTitle = ({ title }) => {
  return (
    <div className="mb-6 border-b border-gray-900 pb-3">
      <h2 className="flex items-center gap-3 font-serif text-2xl font-bold text-gray-900 sm:text-3xl">
        <span className="h-7 w-1 bg-blue-600" />
        {title}
      </h2>
    </div>
  );
};

export default page;