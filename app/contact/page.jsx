
"use client";

import axios from "axios";
import React, { useState } from "react";
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiArrowUpRight,
  FiSend,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import { toast } from "react-toastify";
const Page = () => {
    const [loading,setLoading]=useState(false)
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
setLoading(true)
    try {
        const sendData={formdata:formData,sendto:["jontypundir12@gmail.com"],subject:"Devan contact data"}
        const response = await axios.post(`https://sendmail.digitalpaaji.com/sendmail`,sendData)
         const data = await response.data;
         if(data.success){
             toast.success(data.message)
             setFormData({
                 fullname: "",
                 email: "",
                 subject: "",
                 message: "",
                })

  setSubmitted(true);

            } 
            else{
    toast.success(data.message)

}
    } catch (error) {
        toast.error(error?.response?.data?.message)
    }
finally{
    setLoading(false)
}
  
  };

  return (
    <main className="bg-[#F7F5F0] text-[#1A2420]">

    
      <section className="relative overflow-hidden px-6  pt-10  sm:px-10 lg:px-20  ">

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#2F6F5C]/10 blur-3xl" />

        <div className="relative mx-auto container">

          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#2F6F5C]">
              Connect With Us
            </p>

            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-8xl">
              Let's build a
              <span className="block text-[#2F6F5C]">
                safer future.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-[#1A2420]/65 sm:text-lg">
              Have a question, want to collaborate, or looking to grow
              within the sterilization community? We're here to listen,
              connect, and support you.
            </p>
          </div>

          <div className="mt-14 flex items-center gap-3 text-sm text-[#1A2420]/60">
            <span className="h-px w-12 bg-[#B08D57]" />
            Sterilization Champions Community
          </div>

        </div>
      </section>

     
      <section className="px-6 pb-24 sm:px-10 lg:px-20">

        <div className="mx-auto grid container gap-10 lg:grid-cols-[0.8fr_1.2fr]">

          {/* LEFT INFO */}
          <div className="rounded-3xl bg-[#1A2420] p-8 text-white sm:p-10 lg:p-12">

            <p className="text-sm uppercase tracking-[0.2em] text-[#B08D57]">
              Get In Touch
            </p>

            <h2 className="mt-5 text-3xl font-semibold leading-tight sm:text-4xl">
              We're here to
              <span className="block text-[#B08D57]">
                help you.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-white/60">
              Reach out to our team for questions, partnerships,
              educational initiatives, or professional community support.
            </p>

            <div className="mt-12 space-y-8">

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <FiMail size={19} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Email Us
                  </p>
                  <a
                    href="mailto:info@devan.com"
                    className="mt-1 block text-sm hover:text-[#B08D57]"
                  >
                    info@devan.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <FiPhone size={19} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Call Us
                  </p>
                  <a
                    href="tel:+910000000000"
                    className="mt-1 block text-sm hover:text-[#B08D57]"
                  >
                    +91 00000 00000
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <FiMapPin size={19} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Our Location
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/80">
                    India
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <FiClock size={19} />
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-white/40">
                    Working Hours
                  </p>
                  <p className="mt-1 text-sm leading-6 text-white/80">
                    Monday – Saturday
                    <br />
                    9:00 AM – 6:00 PM
                  </p>
                </div>
              </div>

            </div>

            <div className="mt-14 border-t border-white/10 pt-6">
              <p className="text-xs leading-6 text-white/40">
                Empowering professionals.
                <br />
                Advancing sterilization standards.
              </p>
            </div>

          </div>

          {/* FORM */}
          <div className="rounded-3xl border border-[#1A2420]/10 bg-white p-7 sm:p-10 lg:p-12">

            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-[#2F6F5C]">
                  Contact Form
                </p>

                <h2 className="mt-3 text-3xl font-semibold sm:text-4xl">
                  Send us a message
                </h2>

                <p className="mt-4 text-sm leading-7 text-[#1A2420]/55">
                  Fill out the form and our team will get back to you.
                </p>
              </div>

              <div className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#F7F5F0] sm:flex">
                <FiSend size={19} className="text-[#2F6F5C]" />
              </div>
            </div>

            {submitted ? (
              <div className="mt-10 rounded-2xl bg-[#2F6F5C]/10 p-6 text-center">
                <FiCheckCircle
                  size={40}
                  className="mx-auto text-[#2F6F5C]"
                />

                <h3 className="mt-4 text-xl font-semibold">
                  Thank You!
                </h3>

                <p className="mt-2 text-sm text-[#1A2420]/60">
                  Your message has been prepared. Connect this form
                  to your backend to send it to your team.
                </p>

                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-sm font-semibold text-[#2F6F5C] underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="mt-10 space-y-6"
              >

                <div className="grid gap-6 sm:grid-cols-2">

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Full Name
                    </label>

                    <input
                      type="text"
                      name="fullname"
                      required
                      value={formData.fullname}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full rounded-xl border border-[#1A2420]/10 bg-[#F7F5F0]/50 px-4 py-3.5 text-sm outline-none transition focus:border-[#2F6F5C]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[#1A2420]/10 bg-[#F7F5F0]/50 px-4 py-3.5 text-sm outline-none transition focus:border-[#2F6F5C]"
                    />
                  </div>

                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Subject
                  </label>

                  <select
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#1A2420]/10 bg-[#F7F5F0]/50 px-4 py-3.5 text-sm outline-none focus:border-[#2F6F5C]"
                  >
                    <option value="">Select a subject</option>
                    <option value="General Inquiry">
                      General Inquiry
                    </option>
                    <option value="Professional Membership">
                      Professional Membership
                    </option>
                    <option value="Partnership">
                      Partnership & Collaboration
                    </option>
                    <option value="Education">
                      Education & Training
                    </option>
                    <option value="Technical Support">
                      Technical Support
                    </option>
                    <option value="Other">
                      Other
                    </option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Your Message
                  </label>

                  <textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here..."
                    className="w-full resize-none rounded-xl border border-[#1A2420]/10 bg-[#F7F5F0]/50 px-4 py-3.5 text-sm outline-none transition focus:border-[#2F6F5C]"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className={`group flex w-full items-center justify-center gap-3 rounded-full bg-[#2F6F5C] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#1A2420] ${loading && "cursor-not-allowed"}`}
                >
                 {loading? "Loading...":"Send Message"} 
                  <FiArrowUpRight
                    size={18}
                    className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                  />
                </button>

                <p className="text-center text-xs leading-5 text-[#1A2420]/40">
                  We respect your privacy and will only use your
                  information to respond to your inquiry.
                </p>

              </form>
            )}

          </div>

        </div>

      </section>

     
      <section className="px-6 pb-24 sm:px-10 lg:px-20">

        <div className="mx-auto container rounded-3xl bg-[#2F6F5C] px-8 py-14 text-center text-white sm:px-12">

          <p className="text-sm uppercase tracking-[0.2em] text-white/60">
            Join The Movement
          </p>

          <h2 className="mx-auto mt-5 max-w-2xl text-3xl font-semibold leading-tight sm:text-5xl">
            Together, we champion
            <span className="block text-[#E4D0A8]">
              excellence in sterilization.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-white/70">
            Learn, connect, and grow with professionals dedicated
            to safer healthcare.
          </p>

          <a
            href="/articles"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-[#1A2420] transition hover:bg-[#E4D0A8]"
          >
            Explore Learning
            <FiArrowUpRight size={17} />
          </a>

        </div>

      </section>

    </main>
  );
};

export default Page;