import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
  return (
    <>
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        <a href="#" className="flex items-center gap-2 text-xl font-bold text-slate-900">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            T
          </span>
          TailwindSite
        </a>

        <nav className="hidden items-center gap-8 md:flex">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold border-b-2 border-black pb-1"
                : "text-sm font-medium text-slate-600 hover:text-indigo-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold border-b-2 border-black pb-1"
                : "text-sm font-medium text-slate-600 hover:text-indigo-600"
            }
          >
            About
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold border-b-2 border-black pb-1"
                : "text-sm font-medium text-slate-600 hover:text-indigo-600"
            }
          >
            Services
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-black font-bold border-b-2 border-black pb-1"
                : "text-sm font-medium text-slate-600 hover:text-indigo-600"
            }
          >
            Contact
          </NavLink>

        </nav>

        <div className="hidden md:block">
          <a
            href="#"
            className="rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/20 transition hover:bg-indigo-700"
          >
            Get Started
          </a>
        </div>

        <button className="md:hidden rounded-xl p-2 text-slate-700 hover:bg-slate-100">
          ☰
        </button>

      </div>
    </header>

    
    </>
  )
}
