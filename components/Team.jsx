
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



// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import Link from "next/link";

// const stats = [
//   { number: "150+", label: "Projects Completed" },
//   { number: "98%", label: "Client Satisfaction" },
//   { number: "5x", label: "Average ROI Boost" },
// ];

// const processSteps = [
//   {
//     id: "01",
//     title: "Tell us your vision",
//     description: "Share your business goals and marketing needs so we understand the core of your brand.",
//   },
//   {
//     id: "02",
//     title: "We weave the magic"    ,
//     description: "Our strategists and developers build custom growth engines, high-end designs, and campaigns.",
//   },
//   {
//     id: "03",
//     title: "Get ongoing support",
//     description: "Enjoy continuous optimization, performance monitoring, and dedicated growth management.",
//   },
// ];

// const teamImages = [
//  { name: "Design Lead", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400" },
//     { name: "SEO Strategist", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400" },
//     { name: "Fullstack Dev", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=400" },
//     { name: "Project Director", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400" },
//     { name: "PPC Specialist", image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400" },
//     { name: "Content Lead", image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400" },
//     { name: "UI/UX Designer", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&q=80&w=400" },

// ];




// const AboutSection = () => {
//   return (
//     <main className="overflow-hidden bg-[#0A0A0A] text-neutral-200">
//       {/* Hero Section */}
//       {/* <section className="relative flex flex-col items-center px-4 pt-32 pb-24 text-center md:pt-40 md:pb-32">
//         <div className="absolute top-0 left-1/2 h-[450px] w-[800px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#D4FF00]/15 via-transparent to-transparent blur-[120px] pointer-events-none" />

//         <motion.div
//           initial={{ opacity: 0, y: 15 }}
//           animate={{ opacity: 1, y: 0 }}
//           className="relative z-10 mb-4 inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#D4FF00] backdrop-blur-md"
//         >
//           <span className="h-1.5 w-1.5 rounded-full bg-[#D4FF00]" />
//           Digital Paaji Studio
//         </motion.div>

//         <motion.h1
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.1 }}
//           className="relative z-10 max-w-4xl font-serif text-4xl font-light tracking-tight text-white md:text-6xl lg:text-7xl"
//         >
//           Scale growth, <br />
//           <span className="italic text-neutral-400">the efficient way.</span>
//         </motion.h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.2 }}
//           className="relative z-10 mt-6 max-w-2xl text-base text-neutral-400 md:text-lg"
//         >
//           We know what’s going on. You need top-notch digital marketing and web solutions to stand out, but traditional hiring can be costly and slow. That’s where Digital Paaji comes in.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 0.3 }}
//           className="relative z-10 mt-10 flex w-full max-w-md items-center justify-between rounded-full border border-neutral-800 bg-neutral-900/80 p-1.5 backdrop-blur-md"
//         >
//           <input
//             type="email"
//             placeholder="Enter your work email"
//             className="w-full bg-transparent px-4 text-sm text-white placeholder-neutral-500 focus:outline-none"
//           />
//           <Link
//             href="/contact"
//             className="rounded-full bg-[#D4FF00] px-6 py-3 text-xs font-bold uppercase tracking-wider text-black transition-transform hover:scale-105"
//           >
//             Get started
//           </Link>
//         </motion.div>
//       </section> */}

// {/* Curved Team Showcase */}
// <section className="relative overflow-hidden bg-[#F7F1E7] px-4 text-[#171714] pt-32 pb-24 text-center md:pt-40 md:pb-32">
//   {/* Top content */}
//   <div className="relative z-20 mx-auto max-w-4xl text-center">
//     <motion.p
//       initial={{ opacity: 0, y: 15 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ duration: 0.6 }}
//       className="font-serif text-2xl italic leading-none text-[#292620] md:text-4xl"
//     >
//       Streamline Your Team,
//     </motion.p>

//     <motion.h2
//       initial={{ opacity: 0, y: 18 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.08, duration: 0.6 }}
//       className="mt-1 text-3xl font-semibold tracking-[-0.04em] text-[#171714] md:text-5xl lg:text-6xl"
//     >
//       Supercharge Your Workflow
//     </motion.h2>

//     <motion.p
//       initial={{ opacity: 0, y: 18 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.16, duration: 0.6 }}
//       className="mx-auto mt-5 max-w-lg text-sm leading-6 text-[#777168] md:text-base"
//     >
//       An all-in-one digital team to plan, collaborate, design and deliver
//       faster—and smarter.
//     </motion.p>

//     <motion.div
//       initial={{ opacity: 0, y: 18 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.24, duration: 0.6 }}
//       className="mt-6"
//     >
//       <Link
//         href="/contact"
//         className="inline-flex items-center justify-center rounded-full bg-[#191816] px-6 py-3 text-xs font-semibold text-white shadow-[0_12px_30px_rgba(0,0,0,0.15)] transition-all duration-300 hover:-translate-y-1 hover:bg-black"
//       >
//         Get Started For Free
//       </Link>
//     </motion.div>
//   </div>

//   {/* Desktop stepped image layout */}
//   <div className="relative left-1/2 mt-14 hidden w-[116vw] -translate-x-1/2 md:block lg:mt-16">
//     <motion.div
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ once: true, amount: 0.2 }}
//       variants={{
//         hidden: {},
//         visible: {
//           transition: {
//             staggerChildren: 0.08,
//           },
//         },
//       }}
//       className="flex items-start justify-center gap-2.5 lg:gap-4"
//     >
//       {teamImages.map((member, index) => {
//         const stepClasses = [
//           "-translate-y-10",
//           "translate-y-2",
//           "translate-y-10",
//           "translate-y-16",
//           "translate-y-10",
//           "translate-y-2",
//           "-translate-y-10",
//         ];

//         const rotateClasses = [
//           "-rotate-[3deg]",
//           "-rotate-[2deg]",
//           "-rotate-[1deg]",
//           "rotate-0",
//           "rotate-[1deg]",
//           "rotate-[2deg]",
//           "rotate-[3deg]",
//         ];

//         return (
//           <motion.div
//             key={member.name}
//             variants={{
//               hidden: {
//                 opacity: 0,
//                 y: 55,
//                 scale: 0.92,
//               },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 scale: 1,
//                 transition: {
//                   duration: 0.7,
//                   ease: [0.22, 1, 0.36, 1],
//                 },
//               },
//             }}
//             className={`group relative h-[290px] w-[14.28%] overflow-hidden rounded-xl bg-[#D8D0C5] shadow-[0_20px_45px_rgba(45,37,27,0.16)] lg:h-[360px] lg:rounded-2xl ${stepClasses[index]} ${rotateClasses[index]}`}
//           >
//             <img
//               src={member.image}
//               alt={member.name}
//               className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

//             <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 text-center opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
//               <p className="text-sm font-medium text-white">
//                 {member.name}
//               </p>
//             </div>
//           </motion.div>
//         );
//       })}
//     </motion.div>
//   </div>

//   {/* Mobile horizontally scrollable stepped layout */}
//   <div className="-mx-4 mt-12 overflow-x-auto px-4 pb-16 md:hidden">
//     <div className="flex w-max items-start gap-3 px-[8vw]">
//       {teamImages.map((member, index) => {
//         const mobileSteps = [
//           "-translate-y-5",
//           "translate-y-2",
//           "translate-y-7",
//           "translate-y-12",
//           "translate-y-7",
//           "translate-y-2",
//           "-translate-y-5",
//         ];

//         return (
//           <motion.div
//             key={`${member.name}-mobile`}
//             initial={{ opacity: 0, y: 35 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{
//               delay: index * 0.06,
//               duration: 0.55,
//             }}
//             className={`relative h-[250px] w-[150px] shrink-0 overflow-hidden rounded-xl bg-[#D8D0C5] shadow-[0_15px_35px_rgba(45,37,27,0.16)] ${mobileSteps[index]}`}
//           >
//             <img
//               src={member.image}
//               alt={member.name}
//               className="h-full w-full object-cover"
//             />

//             <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

//             <p className="absolute inset-x-0 bottom-0 p-4 text-center text-xs font-medium text-white">
//               {member.name}
//             </p>
//           </motion.div>
//         );
//       })}
//     </div>
//   </div>

//   {/* Three features */}
//   <div className="relative z-20 mx-auto mt-5 grid max-w-6xl gap-10 text-center md:mt-24 md:grid-cols-3 md:gap-12">
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       className="mx-auto max-w-xs"
//     >
//       <h3 className="text-base font-semibold">
//         Real-Time Collaboration
//       </h3>

//       <p className="mt-2 text-xs leading-5 text-[#777168]">
//         Communicate seamlessly and keep everyone aligned through a
//         connected creative workflow.
//       </p>
//     </motion.div>

//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.1 }}
//       className="mx-auto max-w-xs"
//     >
//       <h3 className="text-base font-semibold">
//         Task & Project Tracking
//       </h3>

//       <p className="mt-2 text-xs leading-5 text-[#777168]">
//         Manage strategy, design and development milestones from one
//         streamlined process.
//       </p>
//     </motion.div>

//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       transition={{ delay: 0.2 }}
//       className="mx-auto max-w-xs"
//     >
//       <h3 className="text-base font-semibold">
//         Performance Insights
//       </h3>

//       <p className="mt-2 text-xs leading-5 text-[#777168]">
//         Make smarter decisions with meaningful insights and transparent
//         campaign reporting.
//       </p>
//     </motion.div>
//   </div>
// </section>





//     </main>
//   );
// };

// export default AboutSection;