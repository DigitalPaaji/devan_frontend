
"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FiGrid,
  FiUser,
  FiSettings,
  FiBriefcase,
  FiBookmark,
  FiFileText,
  FiLogOut,
  FiMenu,
  FiX,
  FiChevronRight,
} from "react-icons/fi";

const menuItems = [
  { title: "Dashboard", href: "/profile", icon: FiGrid },
  { title: "My Profile", href: "/profile/update", icon: FiUser },
  { title: "Applied Jobs", href: "/profile/applied-jobs", icon: FiBriefcase },
  { title: "Saved Articles", href: "/profile/saved-articles", icon: FiBookmark },
  { title: "Saved News", href: "/profile/saved-news", icon: FiFileText },
  { title: "Settings", href: "/profile/settings", icon: FiSettings },
];

const Layout = ({ children }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F7F5F0] text-[#1A2420]">

      {/* Main Flex Layout */}
      <div className="flex min-h-screen">

        {/* Sidebar */}
        <aside
          className={`
            flex w-[270px] shrink-0 flex-col
            border-r border-[#E5E2DA] bg-white
            px-5 py-6
            transition-all duration-300
            max-lg:fixed max-lg:inset-y-0 max-lg:left-0
            max-lg:z-50
            ${sidebarOpen ? "max-lg:translate-x-0" : "max-lg:-translate-x-full"}
            lg:translate-x-0
          `}
        >

          {/* Logo */}
          <div className="mb-10 flex items-center justify-between px-2">

            <Link
              href="/"
              className="text-xl font-semibold tracking-tight"
            >
              Sterilization
              <span className="block text-[#2F6F5C]">
                Champions.
              </span>
            </Link>

            <button
              onClick={() => setSidebarOpen(false)}
              className="rounded-lg p-2 hover:bg-gray-100 lg:hidden"
            >
              <FiX size={20} />
            </button>

          </div>

          {/* User */}
          <div className="mb-8 flex items-center gap-3 rounded-2xl bg-[#F7F5F0] p-3">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2F6F5C] font-semibold text-white">
              VP
            </div>

            <div>
              <p className="text-sm font-semibold">Vivek Pundir</p>
              <p className="text-xs text-gray-500">
                CSSD Professional
              </p>
            </div>

          </div>

          {/* Navigation */}
          <nav className="flex-1 space-y-1">

            <p className="mb-3 px-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400">
              My Workspace
            </p>

            {menuItems.map((item) => {
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setSidebarOpen(false)}
                  className="
                    group flex items-center gap-3
                    rounded-xl px-3 py-3
                    text-sm font-medium text-gray-600
                    transition hover:bg-[#EAF1ED]
                    hover:text-[#2F6F5C]
                  "
                >
                  <Icon size={19} />
                  <span>{item.title}</span>

                  <FiChevronRight
                    size={15}
                    className="ml-auto opacity-0 transition group-hover:opacity-100"
                  />
                </Link>
              );
            })}

          </nav>

          {/* Logout */}
          <div className="border-t border-[#E5E2DA] pt-5">

            <button className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-500 hover:bg-red-50">
              <FiLogOut size={19} />
              Logout
            </button>

          </div>

        </aside>

        {/* Right Side */}
        <div className="flex min-w-0 flex-1 flex-col">

          {/* Topbar */}
          <header className="flex h-[76px] shrink-0 items-center justify-between border-b border-[#E5E2DA] bg-[#F7F5F0] px-5 sm:px-8 lg:px-10">

            <button
              onClick={() => setSidebarOpen(true)}
              className="rounded-xl border border-[#E5E2DA] bg-white p-2.5 lg:hidden"
            >
              <FiMenu size={20} />
            </button>

            <p className="hidden text-sm text-gray-500 lg:block">
              Professional Workspace
            </p>

            <Link
              href="/profile/update"
              className="flex items-center gap-3 rounded-full border border-[#E5E2DA] bg-white py-1.5 pl-1.5 pr-4"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#2F6F5C] text-xs font-semibold text-white">
                VP
              </div>

              <span className="hidden text-sm font-medium sm:block">
                My Account
              </span>
            </Link>

          </header>

          {/* Content */}
          <main className="flex-1 px-5 py-8 sm:px-8 lg:px-10">
            {children}
          </main>

        </div>

      </div>

    </div>
  );
};

export default Layout;