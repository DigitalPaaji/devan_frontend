
"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const expertPanel = [
  {
    name: "Dr. Anjali Sharma",
    designation: "Senior CSSD Consultant",
    hospital: "Apollo Hospitals",
    specialization: "Sterilization & Infection Prevention",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=85&w=600",
  },
  {
    name: "Dr. Rajiv Mehta",
    designation: "Head of CSSD",
    hospital: "Fortis Healthcare",
    specialization: "Sterile Processing",
    image:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=85&w=600",
  },
  {
    name: "Dr. Priya Kapoor",
    designation: "Infection Control Expert",
    hospital: "Max Healthcare",
    specialization: "Infection Prevention",
    image:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&q=85&w=600",
  },
  {
    name: "Mr. Amit Verma",
    designation: "CSSD Director",
    hospital: "Medanta Hospital",
    specialization: "CSSD Management",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&q=85&w=600",
  },
  {
    name: "Dr. Neha Malhotra",
    designation: "Sterilization Specialist",
    hospital: "Manipal Hospitals",
    specialization: "Decontamination & Sterilization",
    image:
      "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&q=85&w=600",
  },
  {
    name: "Mr. Sandeep Singh",
    designation: "CSSD Manager",
    hospital: "AIIMS",
    specialization: "Sterile Services",
    image:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=85&w=600",
  },
  {
    name: "Dr. Ritu Khanna",
    designation: "Infection Control Consultant",
    hospital: "Narayana Health",
    specialization: "Patient Safety",
    image:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=85&w=600",
  },
  {
    name: "Mr. Vikram Bedi",
    designation: "National CSSD Expert",
    hospital: "Artemis Hospital",
    specialization: "Quality & Sterilization",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=85&w=600",
  },
  {
    name: "Dr. Meera Nair",
    designation: "CSSD & Infection Control Expert",
    hospital: "KIMS Hospitals",
    specialization: "Sterilization Practices",
    image:
      "https://images.unsplash.com/photo-1595956553066-fe24a8c33395?auto=format&fit=crop&q=85&w=600",
  },
  {
    name: "Mr. Arjun Rao",
    designation: "Senior CSSD Professional",
    hospital: "Columbia Asia",
    specialization: "Sterile Processing & Training",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=85&w=600",
  },
];

const TeamSection = () => {
  return (
    <main className="overflow-hidden bg-white text-[#0D2B45]">

      {/* Founder Message */}
      {/* <section
        id="founder"
        className="relative overflow-hidden bg-[#0D2B45] px-5 py-20 text-white sm:px-8 md:py-28 lg:px-12 lg:py-36"
      >
      
        <div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-white/[0.04] blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[450px] w-[450px] rounded-full bg-white/[0.03] blur-3xl" />

        <div className="relative z-10 mx-auto grid max-w-[1440px] items-center gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">

         
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mx-auto w-full max-w-[430px]"
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-white/10">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=85&w=900"
                alt="Founder of Sterilization Champions"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0D2B45]/90 via-[#0D2B45]/30 to-transparent p-6 pt-24">
                <p className="text-xs uppercase tracking-[0.2em] text-white/70">
                  Founder
                </p>
                <h3 className="mt-1 text-xl font-semibold">
                  Sterilization Champions
                </h3>
              </div>
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="flex h-7 w-7 items-center justify-center rounded-full border border-white/30 text-xs">
                3
              </div>

              <span className="rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium text-white/80">
                Founder Message
              </span>
            </div>

            <p className="font-serif text-2xl italic leading-tight text-white/70 md:text-4xl">
              A stronger profession begins with
            </p>

            <h2 className="mt-2 max-w-3xl text-4xl font-semibold tracking-[-0.04em] md:text-5xl lg:text-6xl">
              learning, recognition and community.
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              Sterilization Champions was created with a simple vision:
              to bring sterilization professionals together, create
              opportunities to learn from one another, and recognize the
              people who continuously contribute to safer patient care.
            </p>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
              Our goal is to build a professional community where every
              member can learn continuously, participate meaningfully,
              grow professionally and contribute to the future of
              sterilization.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Mission",
                "Vision",
                "Books",
                "Awards",
                "Media",
                "Conferences",
              ].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-4 py-2 text-xs text-white/80"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section> */}

      
      <section className="relative overflow-hidden bg-[#F4F8FB] px-4 pb-24 pt-24 text-center md:pb-32 md:pt-32">

      
        <div className="relative z-20 mx-auto max-w-4xl">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center justify-center gap-3"
          >
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#0D2B45] text-xs text-white">
              4
            </div>

            <span className="rounded-full border border-[#0D2B45]/15 bg-white px-4 py-1.5 text-xs font-medium text-[#0D2B45]">
              National Expert Panel
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-serif text-2xl italic leading-none text-[#0D2B45]/60 md:text-4xl"
          >
            Guided by experience,
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mt-2 text-3xl font-semibold tracking-[-0.04em] text-[#0D2B45] md:text-5xl lg:text-6xl"
          >
            Built by experts.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.16, duration: 0.6 }}
            className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-[#0D2B45]/60 md:text-base"
          >
            A national panel of experienced sterilization professionals
            sharing practical knowledge, answering real-world questions
            and helping shape the next generation of CSSD professionals.
          </motion.p>
        </div>

        {/* Desktop Expert Showcase */}
        <div className="relative left-1/2 mt-16 hidden w-[118vw] -translate-x-1/2 md:block lg:mt-20">

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.07,
                },
              },
            }}
            className="flex items-start justify-center gap-2.5 lg:gap-3"
          >
            {expertPanel.map((expert, index) => {

              const stepClasses = [
                "-translate-y-10",
                "translate-y-2",
                "translate-y-10",
                "translate-y-16",
                "translate-y-20",
                "translate-y-16",
                "translate-y-10",
                "translate-y-2",
                "-translate-y-5",
                "-translate-y-10",
              ];

              const rotateClasses = [
                "-rotate-[3deg]",
                "-rotate-[2deg]",
                "-rotate-[1deg]",
                "rotate-0",
                "rotate-[1deg]",
                "rotate-[1deg]",
                "rotate-[2deg]",
                "rotate-[2deg]",
                "rotate-[3deg]",
                "rotate-[3deg]",
              ];

              return (
                <motion.div
                  key={expert.name}
                  variants={{
                    hidden: {
                      opacity: 0,
                      y: 55,
                      scale: 0.92,
                    },
                    visible: {
                      opacity: 1,
                      y: 0,
                      scale: 1,
                      transition: {
                        duration: 0.7,
                        ease: [0.22, 1, 0.36, 1],
                      },
                    },
                  }}
                  className={`group relative h-[310px] w-[10%] overflow-hidden rounded-xl bg-[#DCE8EF] shadow-[0_20px_45px_rgba(13,43,69,0.14)] lg:h-[380px] lg:rounded-2xl ${stepClasses[index]} ${rotateClasses[index]}`}
                >
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B45]/95 via-[#0D2B45]/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  <div className="absolute inset-x-0 bottom-0 translate-y-4 p-4 text-left opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <p className="text-sm font-semibold text-white">
                      {expert.name}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-white/75">
                      {expert.designation}
                    </p>

                    <p className="text-[10px] leading-4 text-white/75">
                      {expert.hospital}
                    </p>

                    <p className="mt-2 text-[10px] font-medium text-white">
                      {expert.specialization}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Mobile Expert Panel */}
        <div className="-mx-4 mt-12 overflow-x-auto px-4 pb-16 md:hidden">
          <div className="flex w-max items-start gap-3 px-[6vw]">

            {expertPanel.map((expert, index) => {

              const mobileSteps = [
                "-translate-y-5",
                "translate-y-2",
                "translate-y-7",
                "translate-y-12",
                "translate-y-7",
                "translate-y-2",
                "-translate-y-5",
                "translate-y-2",
                "translate-y-7",
                "-translate-y-5",
              ];

              return (
                <motion.div
                  key={`${expert.name}-mobile`}
                  initial={{ opacity: 0, y: 35 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.55,
                  }}
                  className={`relative h-[270px] w-[165px] shrink-0 overflow-hidden rounded-xl bg-[#DCE8EF] shadow-[0_15px_35px_rgba(13,43,69,0.14)] ${mobileSteps[index]}`}
                >
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="h-full w-full object-cover"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2B45]/90 via-transparent to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-4 text-left">
                    <p className="text-xs font-semibold text-white">
                      {expert.name}
                    </p>

                    <p className="mt-1 text-[10px] leading-4 text-white/75">
                      {expert.designation}
                    </p>

                    <p className="text-[10px] leading-4 text-white/75">
                      {expert.hospital}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Expert Responsibilities */}
        <div className="relative z-20 mx-auto mt-8 grid max-w-6xl gap-6 text-left md:mt-20 md:grid-cols-3 md:gap-8">

          {/* Monday */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-[#0D2B45]/10 bg-white p-7 shadow-[0_10px_35px_rgba(13,43,69,0.06)]"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0D2B45]/50">
              Every Monday
            </span>

            <h3 className="mt-3 text-lg font-semibold text-[#0D2B45]">
              Expert Question
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#0D2B45]/60">
              One national expert publishes a practical CSSD question
              based on real-world sterilization challenges.
            </p>
          </motion.div>

          {/* Saturday */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-2xl border border-[#0D2B45]/10 bg-white p-7 shadow-[0_10px_35px_rgba(13,43,69,0.06)]"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-[#0D2B45]/50">
              Every Saturday
            </span>

            <h3 className="mt-3 text-lg font-semibold text-[#0D2B45]">
              Expert Answer
            </h3>

            <p className="mt-2 text-sm leading-6 text-[#0D2B45]/60">
              The expert reveals the correct answer while the panel
              reviews participant responses and identifies the strongest
              contribution.
            </p>
          </motion.div>

          {/* Champion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-2xl bg-[#0D2B45] p-7 shadow-[0_15px_40px_rgba(13,43,69,0.18)]"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.15em] text-white/50">
              Recognition
            </span>

            <h3 className="mt-3 text-lg font-semibold text-white">
              Champion of the Week
            </h3>

            <p className="mt-2 text-sm leading-6 text-white/65">
              The best answer earns recognition as Champion of the Week,
              encouraging professionals to keep learning and contributing.
            </p>
          </motion.div>

        </div>

        {/* CTA */}
        <div className="relative z-20 mt-12 md:mt-16">
          <Link
            href="#community"
            className="inline-flex items-center gap-3 rounded-full bg-[#0D2B45] px-6 py-3 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(13,43,69,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#17415F]"
          >
            Meet the Expert Panel

            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-[#0D2B45]">
              <BsArrowRight size={14} />
            </span>
          </Link>
        </div>

      </section>
    </main>
  );
};

export default TeamSection;


