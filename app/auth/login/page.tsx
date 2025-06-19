"use client";

import Image from "next/image";
import React from "react";

const Page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0e0e1a] px-4 text-white">
      <div className="w-full max-w-md p-8 rounded-2xl bg-gradient-to-br from-[#1a1a2e] to-[#25253a] shadow-[inset_8px_8px_16px_#12121f,inset_-8px_-8px_16px_#1e1e30] border border-[#2a2a3e]">

        {/* Logo & Heading */}
        <div className="flex flex-col items-center mb-8">
          <Image
            src="/logo.jpg"
            alt="Company Logo"
            width={80}
            height={80}
            className="rounded-full shadow-lg"
          />
          <h2 className="mt-6 text-2xl font-extrabold tracking-wide text-indigo-400">
            Welcome Back
          </h2>
          <p className="text-sm text-gray-400 mt-1">Sign in to your account</p>
        </div>

        {/* Form */}
        <form className="space-y-6" action="#" method="POST">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-2 w-full rounded-md px-4 py-2 bg-[#1a1a2e] text-white placeholder-gray-500 border border-[#2a2a3e] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                Password
              </label>
              <a href="#" className="text-sm font-medium text-indigo-400 hover:underline">
                Forgot password?
              </a>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-2 w-full rounded-md px-4 py-2 bg-[#1a1a2e] text-white placeholder-gray-500 border border-[#2a2a3e] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-semibold shadow-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-[#0e0e1a]"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-center text-sm text-gray-500">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-indigo-400 font-semibold hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
};

export default Page;
