import React from 'react';

const Page = () => {
  return (
    <div className="h-full bg-gray-900 text-white">
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm neumorphic p-8 rounded-xl">
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-20 w-auto"
              src="/logo.jpg" // 👈 Ensure logo.jpg is in the public folder
              alt="Your Company"
            />
            <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-white">
              Welcome Back!
            </h2>
          </div>

          <div className="my-4" />

          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">
                Email address
              </label>
              <div className="mt-2">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  required
                  className="neumorphic-inset block w-full rounded-md px-3 py-2 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-400 hover:text-indigo-300">
                    Forgot password?
                  </a>
                </div>
              </div>
              <div className="mt-2">
                <input
                  type="password"
                  name="password"
                  id="password"
                  autoComplete="current-password"
                  required
                  className="neumorphic-inset block w-full rounded-md px-3 py-2 text-base text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="neumorphic text-white w-full justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-md hover:bg-indigo-700 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-900 transition-all"
              >
                Sign in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
