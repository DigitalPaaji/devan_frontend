"use client";

import { base_url } from "@/components/utils";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { toast } from "react-toastify";
import {
  FiArrowRight,
  FiCheckCircle,
  FiEye,
  FiEyeOff,
  FiLock,
  FiMail,
  FiMapPin,
  FiPhone,
  FiShield,
  FiUser,
} from "react-icons/fi";

// ---- Static values moved outside the component so they are never
// re-created on every render (cheap win, but adds up on a form this size). ----

const inputClass =
  "w-full rounded-xl border border-[#dce2dd] bg-white px-4 py-3.5 text-sm text-[#1a2420] outline-none transition placeholder:text-gray-400 focus:border-[#2f6f5c] focus:ring-2 focus:ring-[#2f6f5c]/10";

const labelClass = "mb-2 block text-sm font-medium text-[#29352f]";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[0-9+\-\s()]{7,15}$/;
const RESEND_SECONDS = 60;

const initialUserData = {
  fullname: "",
  email: "",
  phone: "",
  password: "",
  gender: "",
  dateOfBirth: "",
  address: "",
};

function getErrorMessage(error, fallback) {
  return (
    error?.response?.data?.message ||
    (error?.code === "ERR_NETWORK"
      ? "Network error. Please check your connection."
      : fallback)
  );
}

function passwordStrength(password) {
  if (!password) return { label: "", width: "0%", color: "bg-gray-200" };
  let score = 0;
  if (password.length >= 6) score++;
  if (password.length >= 10) score++;
  if (/[A-Z]/.test(password) && /[a-z]/.test(password)) score++;
  if (/\d/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  if (score <= 1) return { label: "Weak", width: "25%", color: "bg-red-400" };
  if (score <= 3)
    return { label: "Okay", width: "60%", color: "bg-amber-400" };
  return { label: "Strong", width: "100%", color: "bg-[#2f6f5c]" };
}

const Page = () => {
  const router = useRouter();

  const [userData, setUserData] = useState(initialUserData);
  const [errors, setErrors] = useState({});

  const [otpSend, setOtpSend] = useState(false);
  const [otpDigits, setOtpDigits] = useState(["", "", "", "", "", ""]);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [verifyLoading, setVerifyLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);

  const otpRefs = useRef([]);
  const submittingRef = useRef(false); // guards against double-submit / double-click races

  const otp = useMemo(() => otpDigits.join(""), [otpDigits]);
  const strength = useMemo(
    () => passwordStrength(userData.password),
    [userData.password]
  );


  useEffect(() => {
    if (resendCooldown <= 0) return;
    const id = setInterval(() => {
      setResendCooldown((s) => (s <= 1 ? 0 : s - 1));
    }, 1000);
    return () => clearInterval(id);
  }, [resendCooldown]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => (prev[name] ? { ...prev, [name]: undefined } : prev));
  }, []);

  const validate = useCallback(() => {
    const next = {};
    const fullname = userData.fullname.trim();
    const email = userData.email.trim();

    if (!fullname) next.fullname = "Full name is required";
    if (!email) next.email = "Email is required";
    else if (!EMAIL_REGEX.test(email)) next.email = "Enter a valid email";

    if (!userData.password) next.password = "Password is required";
    else if (userData.password.length < 6)
      next.password = "Password must be at least 6 characters";

    if (userData.phone.trim() && !PHONE_REGEX.test(userData.phone.trim()))
      next.phone = "Enter a valid phone number";

    if (userData.dateOfBirth) {
      const dob = new Date(userData.dateOfBirth);
      const age = (Date.now() - dob.getTime()) / (365.25 * 24 * 60 * 60 * 1000);
      if (dob > new Date()) next.dateOfBirth = "Date of birth can't be in the future";
      else if (age < 13) next.dateOfBirth = "You must be at least 13 years old";
    }

    setErrors(next);
    return Object.keys(next).length === 0;
  }, [userData]);

  const requestOtp = useCallback(async () => {
    const payload = {
      ...userData,
      fullname: userData.fullname.trim(),
      email: userData.email.trim().toLowerCase(),
      phone: userData.phone.trim(),
      address: userData.address.trim(),
    };

    const { data } = await axios.post(`${base_url}/auth/signup`, payload);

    if (data.success) {
      toast.success(data.message || "OTP sent successfully");
      setOtpSend(true);
      setResendCooldown(RESEND_SECONDS);
      setOtpDigits(["", "", "", "", "", ""]);
      return true;
    }

    toast.error(data.message || "Unable to send OTP");
    return false;
  }, [userData]);

  const sendOtp = useCallback(
    async (e) => {
      e.preventDefault();
      if (submittingRef.current) return;
      if (!validate()) {
        toast.error("Please fix the highlighted fields");
        return;
      }

      submittingRef.current = true;
      setLoading(true);
      try {
        await requestOtp();
      } catch (error) {
        toast.error(getErrorMessage(error, "Something went wrong. Please try again."));
      } finally {
        setLoading(false);
        submittingRef.current = false;
      }
    },
    [validate, requestOtp]
  );

  const resendOtp = useCallback(async () => {
    if (resendCooldown > 0 || resendLoading) return;
    setResendLoading(true);
    try {
      await requestOtp();
    } catch (error) {
      toast.error(getErrorMessage(error, "Couldn't resend the code. Try again."));
    } finally {
      setResendLoading(false);
    }
  }, [resendCooldown, resendLoading, requestOtp]);

  // ---- OTP digit-box handling: type-to-advance, backspace-to-retreat, paste support ----

  const setDigitAt = useCallback((index, value) => {
    setOtpDigits((prev) => {
      const next = [...prev];
      next[index] = value;
      return next;
    });
  }, []);

  const handleOtpChange = useCallback(
    (index, e) => {
      const value = e.target.value.replace(/\D/g, "");
      if (!value) {
        setDigitAt(index, "");
        return;
      }
      // Handles fast typing / autofill hitting a single box with multiple chars
      const chars = value.split("");
      chars.forEach((char, offset) => {
        const target = index + offset;
        if (target < 6) setDigitAt(target, char);
      });
      const nextIndex = Math.min(index + chars.length, 5);
      otpRefs.current[nextIndex]?.focus();
    },
    [setDigitAt]
  );

  const handleOtpKeyDown = useCallback(
    (index, e) => {
      if (e.key === "Backspace" && !otpDigits[index] && index > 0) {
        otpRefs.current[index - 1]?.focus();
        setDigitAt(index - 1, "");
      } else if (e.key === "ArrowLeft" && index > 0) {
        otpRefs.current[index - 1]?.focus();
      } else if (e.key === "ArrowRight" && index < 5) {
        otpRefs.current[index + 1]?.focus();
      }
    },
    [otpDigits, setDigitAt]
  );

  const handleOtpPaste = useCallback((e) => {
    const pasted = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!pasted) return;
    e.preventDefault();
    const next = ["", "", "", "", "", ""];
    pasted.split("").forEach((char, i) => (next[i] = char));
    setOtpDigits(next);
    otpRefs.current[Math.min(pasted.length, 5)]?.focus();
  }, []);

  const verifyOtp = useCallback(
    async (e) => {
      e.preventDefault();
      if (submittingRef.current) return;

      if (!/^\d{6}$/.test(otp)) {
        toast.error("Please enter the full 6-digit code");
        return;
      }

      submittingRef.current = true;
      setVerifyLoading(true);
      try {
        const { data } = await axios.post(
          `${base_url}/auth/verify`,
          { useremail: userData.email.trim().toLowerCase(), userotp: otp },
          { withCredentials: true }
        );

        if (data.success) {
          toast.success(data.message || "Account created successfully");
          router.push("/");
        } else {
          toast.error(data.message || "Invalid OTP");
        }
      } catch (error) {
        toast.error(getErrorMessage(error, "OTP verification failed"));
      } finally {
        setVerifyLoading(false);
        submittingRef.current = false;
      }
    },
    [otp, userData.email, router]
  );

  const changeDetails = useCallback(() => {
    setOtpSend(false);
    setOtpDigits(["", "", "", "", "", ""]);
    setResendCooldown(0);
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-[#1a2420]">
      <div className="grid min-h-screen lg:grid-cols-2">
       
        <section className="relative hidden overflow-hidden bg-[#1a2420] lg:flex">
          <Image
            src="/Images/login.jpeg"
            alt="Sterilization Champions"
            fill
            priority
            sizes="50vw"
            className="object-cover opacity-30"
          />

          <div className="absolute inset-0 bg-gradient-to-br from-[#14221c]/95 via-[#1a2420]/85 to-[#2f6f5c]/50" />

          <div className="relative z-10 flex min-h-screen flex-col justify-between p-12 xl:p-20">
            {/* LOGO */}
            <div>
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#b08d57]/50 text-[#b08d57]">
                  <FiShield size={21} />
                </div>
                <div>
                  <h1 className="text-xl font-semibold tracking-wide text-white">
                    Sterilization
                  </h1>
                  <p className="text-xs uppercase tracking-[0.25em] text-[#b08d57]">
                    Champions
                  </p>
                </div>
              </div>
            </div>

            {/* HERO CONTENT */}
            <div className="max-w-lg">
              <span className="mb-5 inline-block rounded-full border border-[#b08d57]/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-[#d7bc8d]">
                Join Our Community
              </span>

              <h2 className="text-4xl font-semibold leading-[1.15] text-white xl:text-6xl">
                Learn.
                <br />
                Connect.
                <br />
                Make an Impact.
              </h2>

              <p className="mt-7 max-w-md text-base leading-7 text-gray-300">
                Build your professional network, learn from industry
                experts, and grow with the Sterilization Champions
                community.
              </p>

              <div className="mt-10 flex flex-wrap gap-3">
                {[
                  "Professional Community",
                  "Expert Learning",
                  "Career Growth",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2.5 text-xs text-gray-200"
                  >
                    <FiCheckCircle className="text-[#b08d57]" />
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <p className="text-xs tracking-wide text-gray-400">
              © {new Date().getFullYear()} Sterilization Champions
            </p>
          </div>
        </section>

       
        <section className="flex min-h-screen items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-20">
          <div className="w-full max-w-xl">
            {/* MOBILE LOGO */}
            <div className="mb-10 flex items-center gap-3 lg:hidden">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1a2420] text-[#b08d57]">
                <FiShield size={21} />
              </div>
              <div>
                <h1 className="text-xl font-semibold">Sterilization</h1>
                <p className="text-xs uppercase tracking-[0.25em] text-[#b08d57]">
                  Champions
                </p>
              </div>
            </div>

            {/* FORM HEADER */}
            <div className="mb-8">
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#2f6f5c]">
                Welcome
              </p>
              <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                {otpSend ? "Verify your email" : "Create your account"}
              </h2>
              <p className="mt-3 text-sm leading-6 text-gray-500">
                {otpSend
                  ? `Enter the 6-digit verification code sent to ${userData.email}`
                  : "Join a growing community of sterilization and healthcare professionals."}
              </p>
            </div>

            {/* PROGRESS */}
            <div className="mb-8 flex items-center gap-3">
              <div
                className={`h-1.5 flex-1 rounded-full ${
                  !otpSend ? "bg-[#2f6f5c]" : "bg-[#b08d57]"
                }`}
              />
              <div
                className={`h-1.5 flex-1 rounded-full ${
                  otpSend ? "bg-[#2f6f5c]" : "bg-gray-200"
                }`}
              />
            </div>

            {!otpSend ? (
              /* SIGNUP FORM */
              <form onSubmit={sendOtp} noValidate className="space-y-5">
                {/* FULLNAME */}
                <div>
                  <label htmlFor="fullname" className={labelClass}>
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="fullname"
                      type="text"
                      name="fullname"
                      value={userData.fullname}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className={`${inputClass} pl-11 ${
                        errors.fullname ? "border-red-400" : ""
                      }`}
                      aria-invalid={!!errors.fullname}
                      autoComplete="name"
                    />
                  </div>
                  {errors.fullname && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.fullname}</p>
                  )}
                </div>

                {/* EMAIL */}
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={userData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`${inputClass} pl-11 ${
                        errors.email ? "border-red-400" : ""
                      }`}
                      aria-invalid={!!errors.email}
                      autoComplete="email"
                    />
                  </div>
                  {errors.email && (
                    <p className="mt-1.5 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>

                {/* PHONE + GENDER */}
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={labelClass}>
                      Phone Number
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={userData.phone}
                        onChange={handleChange}
                        placeholder="Phone number"
                        className={`${inputClass} pl-11 ${
                          errors.phone ? "border-red-400" : ""
                        }`}
                        aria-invalid={!!errors.phone}
                        autoComplete="tel"
                      />
                    </div>
                    {errors.phone && (
                      <p className="mt-1.5 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="gender" className={labelClass}>
                      Gender
                    </label>
                    <select
                      id="gender"
                      name="gender"
                      value={userData.gender}
                      onChange={handleChange}
                      className={inputClass}
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                {/* DATE OF BIRTH */}
                <div>
                  <label htmlFor="dateOfBirth" className={labelClass}>
                    Date of Birth
                  </label>
                  <input
                    id="dateOfBirth"
                    type="date"
                    name="dateOfBirth"
                    value={userData.dateOfBirth}
                    onChange={handleChange}
                    max={new Date().toISOString().split("T")[0]}
                    className={`${inputClass} ${
                      errors.dateOfBirth ? "border-red-400" : ""
                    }`}
                    aria-invalid={!!errors.dateOfBirth}
                  />
                  {errors.dateOfBirth && (
                    <p className="mt-1.5 text-xs text-red-500">
                      {errors.dateOfBirth}
                    </p>
                  )}
                </div>

                {/* ADDRESS */}
                <div>
                  <label htmlFor="address" className={labelClass}>
                    Address
                  </label>
                  <div className="relative">
                    <FiMapPin className="absolute left-4 top-4 text-gray-400" />
                    <textarea
                      id="address"
                      name="address"
                      value={userData.address}
                      onChange={handleChange}
                      placeholder="Enter your address"
                      rows={3}
                      className={`${inputClass} resize-none pl-11`}
                    />
                  </div>
                </div>

                {/* PASSWORD */}
                <div>
                  <label htmlFor="password" className={labelClass}>
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={userData.password}
                      onChange={handleChange}
                      placeholder="Create a password"
                      className={`${inputClass} pl-11 pr-12 ${
                        errors.password ? "border-red-400" : ""
                      }`}
                      aria-invalid={!!errors.password}
                      autoComplete="new-password"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword((v) => !v)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-[#2f6f5c]"
                      aria-label={showPassword ? "Hide password" : "Show password"}
                    >
                      {showPassword ? <FiEyeOff size={18} /> : <FiEye size={18} />}
                    </button>
                  </div>

                  {userData.password && (
                    <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-gray-100">
                      <div
                        className={`h-full rounded-full transition-all ${strength.color}`}
                        style={{ width: strength.width }}
                      />
                    </div>
                  )}

                  <p className="mt-2 text-xs text-gray-400">
                    {errors.password || (strength.label
                      ? `${strength.label} password · minimum 6 characters`
                      : "Minimum 6 characters")}
                  </p>
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#2f6f5c] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#245747] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? (
                    "Sending OTP..."
                  ) : (
                    <>
                      Continue
                      <FiArrowRight size={18} />
                    </>
                  )}
                </button>

                <p className="text-center text-sm text-gray-500">
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => router.push("/login")}
                    className="font-semibold text-[#2f6f5c] hover:underline"
                  >
                    Login
                  </button>
                </p>
              </form>
            ) : (
              /* OTP FORM */
              <form onSubmit={verifyOtp} className="space-y-6">
                <div className="flex justify-center py-5">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#2f6f5c]/10 text-[#2f6f5c]">
                    <FiMail size={32} />
                  </div>
                </div>

                <div>
                  <label className="mb-3 block text-center text-sm font-medium text-[#29352f]">
                    Enter Verification Code
                  </label>

                  <div
                    className="flex justify-center gap-2 sm:gap-3"
                    onPaste={handleOtpPaste}
                  >
                    {otpDigits.map((digit, index) => (
                      <input
                        key={index}
                        ref={(el) => (otpRefs.current[index] = el)}
                        type="text"
                        inputMode="numeric"
                        maxLength={1}
                        value={digit}
                        onChange={(e) => handleOtpChange(index, e)}
                        onKeyDown={(e) => handleOtpKeyDown(index, e)}
                        className="h-14 w-11 rounded-xl border border-[#dce2dd] bg-white text-center text-2xl font-semibold text-[#1a2420] outline-none transition focus:border-[#2f6f5c] focus:ring-2 focus:ring-[#2f6f5c]/10 sm:h-16 sm:w-14"
                        aria-label={`Digit ${index + 1} of verification code`}
                      />
                    ))}
                  </div>

                  <p className="mt-3 text-center text-xs text-gray-500">
                    OTP is valid for 5 minutes.
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={verifyLoading || otp.length !== 6}
                  className="flex w-full items-center justify-center gap-3 rounded-xl bg-[#2f6f5c] px-5 py-4 text-sm font-semibold text-white transition hover:bg-[#245747] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {verifyLoading ? (
                    "Verifying..."
                  ) : (
                    <>
                      Verify & Create Account
                      <FiArrowRight size={18} />
                    </>
                  )}
                </button>

                <div className="flex items-center justify-center gap-1 text-center text-xs text-gray-400">
                  <span>Didn't receive the code?</span>
                  <button
                    type="button"
                    onClick={resendOtp}
                    disabled={resendCooldown > 0 || resendLoading}
                    className="font-semibold text-[#2f6f5c] hover:underline disabled:cursor-not-allowed disabled:text-gray-400 disabled:no-underline"
                  >
                    {resendLoading
                      ? "Sending..."
                      : resendCooldown > 0
                      ? `Resend in ${resendCooldown}s`
                      : "Resend code"}
                  </button>
                </div>

                <button
                  type="button"
                  onClick={changeDetails}
                  className="w-full text-center text-sm font-medium text-[#2f6f5c] hover:underline"
                >
                  Change details
                </button>
              </form>
            )}

            {/* FOOTER */}
            <p className="mt-10 text-center text-xs leading-5 text-gray-400">
              By creating an account, you agree to our Terms & Conditions and
              Privacy Policy.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Page;