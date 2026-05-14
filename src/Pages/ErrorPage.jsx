import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-slate-100 px-4">

      <h1 className="text-8xl font-extrabold text-indigo-600">
        404
      </h1>

      <h2 className="mt-4 text-3xl font-bold text-slate-800">
        Page Not Found
      </h2>

      <p className="mt-3 max-w-md text-center text-slate-500">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>

      <Link
        to="/"
        className="mt-6 rounded-xl bg-indigo-600 px-6 py-3 text-white shadow-lg transition hover:bg-indigo-700"
      >
        Go Back Home
      </Link>

    </div>
  );
};