
"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  FiUser,
  FiPhone,
  FiCalendar,
  FiMapPin,
  FiUpload,
  FiFileText,
  FiSave,
} from "react-icons/fi";
import { base_url, img_url } from "@/components/utils";
import { adduserData } from "@/components/store/userSlice";


const Page = () => {
  const user = useSelector((state) => state.user);
  const dispatch  = useDispatch()
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    gender: "",
    dateOfBirth: "",
    address: "",
    image: "",
    resume: "",
  });

  const [imageFile, setImageFile] = useState(null);
  const [resumeFile, setResumeFile] = useState(null);
  const [preview, setPreview] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (user?.info) {
      setData({
        fullname: user.info.fullname || "",
        phone: user.info.phone || "",
        gender: user.info.gender || "",
        dateOfBirth: user.info.dateOfBirth
          ? user.info.dateOfBirth.split("T")[0]
          : "",
        address: user.info.address || "",
        image: user.info.image || "",
        resume: user.info.resume || "",
      });

      if (user.info.image) {
        setPreview(
          user.info.image.startsWith("http")
            ? user.info.image
            : `${img_url}${user.info.image}`
        );
      }
    }
  }, [user?.info]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setImageFile(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setResumeFile(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setMessage("");

    try {
      const formData = new FormData();

      formData.append("fullname", data.fullname);
      formData.append("phone", data.phone);
      formData.append("gender", data.gender);
      formData.append("dateOfBirth", data.dateOfBirth);
      formData.append("address", data.address);

      if (imageFile) {
        formData.append("image", imageFile);
      }

      if (resumeFile) {
        formData.append("resume", resumeFile);
      }

      const response = await axios.put(
        `${base_url}/auth/update`,
        formData,
        {
          withCredentials: true,
        }
      );
  dispatch(adduserData(response?.data?.user))
      setMessage(
        response.data?.message || "Profile updated successfully!"
      );
    } catch (error) {
      setMessage(
        error.response?.data?.message || "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="mx-auto w-full max-w-5xl">

      {/* Header */}
      <div className="mb-8">

        <p className="mb-2 text-sm font-medium text-[#2F6F5C]">
          ACCOUNT SETTINGS
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-[#1A2420] sm:text-4xl">
          Update Profile
        </h1>

        <p className="mt-2 text-sm text-gray-500">
          Keep your professional profile information up to date.
        </p>

      </div>

      <form onSubmit={handleSubmit}>

        <div className="grid gap-6 lg:grid-cols-3">

          {/* Profile Image */}
          <div className="h-fit rounded-3xl border border-[#E5E2DA] bg-white p-6">

            <h2 className="mb-5 text-lg font-semibold">
              Profile Photo
            </h2>

            <div className="flex flex-col items-center">

              <div className="mb-5 flex h-36 w-36 items-center justify-center overflow-hidden rounded-full border-4 border-[#EAF1ED] bg-[#EAF1ED]">

                {preview ? (
                  <img
                    src={preview}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <FiUser size={55} className="text-[#2F6F5C]" />
                )}

              </div>

              <label className="flex cursor-pointer items-center gap-2 rounded-xl bg-[#2F6F5C] px-5 py-3 text-sm font-medium text-white transition hover:bg-[#245747]">

                <FiUpload size={17} />
                Change Photo

                <input
                  type="file"
                  accept="image/png,image/jpeg,image/webp"
                  onChange={handleImageChange}
                  className="hidden"
                />

              </label>

              <p className="mt-3 text-center text-xs text-gray-400">
                JPG, PNG or WEBP
              </p>

            </div>

            {/* Resume Upload */}
            <div className="mt-8 border-t border-[#E5E2DA] pt-6">

              <h3 className="mb-3 text-sm font-semibold">
                Resume / CV
              </h3>

              <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-dashed border-[#C8D5CD] bg-[#F7F9F7] p-4 transition hover:border-[#2F6F5C]">

                <FiFileText size={24} className="text-[#2F6F5C]" />

                <div className="min-w-0 flex-1">

                  <p className="truncate text-sm font-medium">
                    {resumeFile
                      ? resumeFile.name
                      : data.resume
                        ? "Current Resume"
                        : "Upload Resume"}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    PDF or DOC/DOCX
                  </p>

                </div>

                <FiUpload size={17} className="text-gray-400" />

                <input
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleResumeChange}
                  className="hidden"
                />

              </label>

              {data.resume && !resumeFile && (
                <a
                  href={
                    data.resume.startsWith("http")
                      ? data.resume
                      : `${img_url}${data.resume}`
                  }
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 block text-xs font-medium text-[#2F6F5C] underline"
                >
                  View Current Resume
                </a>
              )}

            </div>

          </div>

          {/* Form */}
          <div className="rounded-3xl border border-[#E5E2DA] bg-white p-6 sm:p-8 lg:col-span-2">

            <div className="mb-7 flex items-center gap-3 border-b border-[#E5E2DA] pb-5">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EAF1ED] text-[#2F6F5C]">
                <FiUser size={20} />
              </div>

              <div>
                <h2 className="text-lg font-semibold">
                  Personal Information
                </h2>

                <p className="text-xs text-gray-400">
                  Update your personal details
                </p>
              </div>

            </div>

            <div className="space-y-5">

              {/* Fullname */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Full Name
                </label>

                <div className="relative">

                  <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="text"
                    name="fullname"
                    value={data.fullname}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-[#E5E2DA] bg-[#FCFCFA] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#2F6F5C] focus:ring-2 focus:ring-[#2F6F5C]/10"
                  />

                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Phone Number
                </label>

                <div className="relative">

                  <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                  <input
                    type="tel"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    placeholder="Enter phone number"
                    className="w-full rounded-xl border border-[#E5E2DA] bg-[#FCFCFA] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#2F6F5C] focus:ring-2 focus:ring-[#2F6F5C]/10"
                  />

                </div>
              </div>

              {/* Gender + DOB */}
              <div className="grid gap-5 sm:grid-cols-2">

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Gender
                  </label>

                  <select
                    name="gender"
                    value={data.gender}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-[#E5E2DA] bg-[#FCFCFA] px-4 py-3 text-sm outline-none focus:border-[#2F6F5C]"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>

                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium">
                    Date of Birth
                  </label>

                  <div className="relative">

                    <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                    <input
                      type="date"
                      name="dateOfBirth"
                      value={data.dateOfBirth}
                      onChange={handleChange}
                      className="w-full rounded-xl border border-[#E5E2DA] bg-[#FCFCFA] py-3 pl-11 pr-4 text-sm outline-none focus:border-[#2F6F5C]"
                    />

                  </div>
                </div>

              </div>

              {/* Address */}
              <div>
                <label className="mb-2 block text-sm font-medium">
                  Address
                </label>

                <div className="relative">

                  <FiMapPin className="absolute left-4 top-4 text-gray-400" />

                  <textarea
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    placeholder="Enter your address"
                    rows={4}
                    className="w-full resize-none rounded-xl border border-[#E5E2DA] bg-[#FCFCFA] py-3 pl-11 pr-4 text-sm outline-none transition focus:border-[#2F6F5C] focus:ring-2 focus:ring-[#2F6F5C]/10"
                  />

                </div>
              </div>

            </div>

            {/* Message */}
            {message && (
              <div className="mt-5 rounded-xl bg-[#EAF1ED] px-4 py-3 text-sm text-[#2F6F5C]">
                {message}
              </div>
            )}

            {/* Submit */}
            <div className="mt-8 flex justify-end border-t border-[#E5E2DA] pt-6">

              <button
                type="submit"
                disabled={loading}
                className="flex items-center gap-2 rounded-xl bg-[#2F6F5C] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#245747] disabled:cursor-not-allowed disabled:opacity-60"
              >

                <FiSave size={17} />

                {loading ? "Saving..." : "Save Changes"}

              </button>

            </div>

          </div>

        </div>

      </form>

    </div>
  );
};

export default Page;