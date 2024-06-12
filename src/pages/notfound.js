import React from "react";
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div className="w-screen h-screen ">
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-darkBG">
        <div className="text-center">
          <p className="text-base font-semibold text-primary dark:text-darkLight">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl dark:text-lightBG">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600 dark:text-darkLight">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 dark:bg-dark dark:hover:bg-darkLight"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NotFound;
