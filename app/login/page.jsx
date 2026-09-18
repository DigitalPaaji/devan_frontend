
"use client";

import React, { useState } from "react";
import axios from "axios";
import { FiEye, FiEyeOff, FiArrowRight } from "react-icons/fi";
import { base_url } from "@/components/utils";
import { useDispatch } from "react-redux";
import { getUser } from "@/components/store/userSlice";

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
const dispatch =useDispatch()
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState({
    type: "",
    text: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage({ type: "", text: "" });

      const response = await axios.post(
        `${base_url}/auth/login`,
        form,
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setMessage({
          type: "success",
          text: "Login successful!",
        });
         dispatch(getUser())
        window.location.href = "/";
      }
    } catch (error) {
      setMessage({
        type: "error",
        text:
          error.response?.data?.message ||
          "Invalid email or password",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F7F5F0]">

      <div className="grid min-h-screen lg:grid-cols-2">

        {/* LEFT SIDE */}
        <div className="relative hidden overflow-hidden lg:block">

          <img
            src="/Images/login.jpeg"
            alt="Sterilization Champions"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-[#101A17]/65" />

          <div className="relative z-10 flex h-full flex-col justify-between p-12 xl:p-20">

            {/* Logo */}
            <div>
              <h2 className="font-serif text-3xl font-bold tracking-wider text-white">
                DEVAN<span className="text-[#B08D57]">.</span>
              </h2>

              <p className="mt-2 text-[10px] uppercase tracking-[4px] text-[#D4B483]">
                Sterilization Champions
              </p>
            </div>

            {/* Content */}
            <div className="max-w-lg">

              <span className="mb-6 inline-block h-[2px] w-12 bg-[#B08D57]" />

              <h1 className="font-serif text-5xl leading-[1.2] text-white xl:text-6xl">
                Knowledge.
                <br />
                Recognition.
                <br />
                <span className="text-[#D4B483]">
                  Excellence.
                </span>
              </h1>

              <p className="mt-7 max-w-md text-sm leading-7 text-white/70">
                Empowering professionals who protect lives
                through excellence in sterilization and
                infection control.
              </p>

            </div>

            {/* Bottom */}
            <div className="flex items-center justify-between text-xs text-white/50">
              <span>© {new Date().getFullYear()} DEVAN</span>
              <span>Professional Community</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex min-h-screen items-center justify-center bg-white px-6 py-12 sm:px-12">

          <div className="w-full max-w-md">

            {/* Mobile Logo */}
            <div className="mb-14 lg:hidden">
              <h2 className="font-serif text-3xl font-bold tracking-wider text-[#1A2420]">
                DEVAN<span className="text-[#B08D57]">.</span>
              </h2>

              <p className="mt-2 text-[10px] uppercase tracking-[3px] text-gray-400">
                Sterilization Champions
              </p>
            </div>

            {/* Heading */}
            <div className="mb-10">

              <p className="mb-4 text-[11px] font-semibold uppercase tracking-[4px] text-[#B08D57]">
                Welcome Back
              </p>

              <h1 className="font-serif text-4xl leading-tight text-[#1A2420] sm:text-5xl">
                Sign in to
                <br />
                your account.
              </h1>

              <p className="mt-5 text-sm leading-6 text-gray-500">
                Continue your professional journey with
                Sterilization Champions.
              </p>

            </div>

            {/* FORM */}
            <form onSubmit={handleLogin} className="space-y-7">

              {/* Email */}
              <div>

                <label className="mb-3 block text-xs font-semibold uppercase tracking-wider text-[#1A2420]">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  required
                  autoComplete="email"
                  className="w-full border-b border-gray-300 bg-transparent px-0 py-3 text-sm text-[#1A2420] outline-none transition placeholder:text-gray-400 focus:border-[#B08D57]"
                />

              </div>

              {/* Password */}
              <div>

                <div className="mb-3 flex items-center justify-between">

                  <label className="text-xs font-semibold uppercase tracking-wider text-[#1A2420]">
                    Password
                  </label>

                  <a
                    href="/forgot-password"
                    className="text-xs text-[#2F6F5C] hover:underline"
                  >
                    Forgot Password?
                  </a>

                </div>

                <div className="flex items-center border-b border-gray-300">

                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    placeholder="Enter your password"
                    required
                    autoComplete="current-password"
                    className="w-full bg-transparent px-0 py-3 text-sm text-[#1A2420] outline-none placeholder:text-gray-400"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="px-1 text-gray-400 transition hover:text-[#2F6F5C]"
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                  >
                    {showPassword ? (
                      <FiEyeOff size={18} />
                    ) : (
                      <FiEye size={18} />
                    )}
                  </button>

                </div>

              </div>

              {/* Message */}
              {message.text && (
                <p
                  className={`text-sm ${
                    message.type === "success"
                      ? "text-green-600"
                      : "text-red-500"
                  }`}
                >
                  {message.text}
                </p>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="group flex w-full items-center justify-center gap-4 bg-[#1A2420] py-4 text-xs font-semibold uppercase tracking-[2px] text-white transition duration-300 hover:bg-[#2F6F5C] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Signing In..." : "Sign In"}

                {!loading && (
                  <FiArrowRight
                    size={17}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                )}
              </button>

            </form>

            {/* Signup */}
            <div className="mt-10 border-t border-gray-100 pt-7 text-center">

              <p className="text-sm text-gray-500">
                Don't have an account?

                <a
                  href="/signup"
                  className="ml-2 font-semibold text-[#2F6F5C] hover:underline"
                >
                  Create Account
                </a>
              </p>

            </div>

            {/* Footer */}
            <p className="mt-16 text-center text-[10px] uppercase tracking-wider text-gray-400">
              Your knowledge. Your recognition. Your community.
            </p>

          </div>
        </div>

      </div>

    </main>
  );
};

export default Page;