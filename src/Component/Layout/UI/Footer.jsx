import React from 'react'

export const Footer = () => {
  return (
    <>


<footer class="bg-slate-950 text-slate-300">
  <div class="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
    <div class="grid gap-10 md:grid-cols-4">
      <div class="md:col-span-2">
        <a href="#" class="mb-4 inline-flex items-center gap-2 text-2xl font-bold text-white">
          <span class="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            T
          </span>
          TailwindSite
        </a>
        <p class="max-w-md text-sm leading-6 text-slate-400">
          Beautiful responsive websites built with modern Tailwind CSS design.
          Fast, clean, and easy to customize.
        </p>
      </div>

      <div>
        <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Quick Links</h3>
        <ul class="space-y-3 text-sm">
          <li><a href="#" class="hover:text-white">Home</a></li>
          <li><a href="#" class="hover:text-white">About</a></li>
          <li><a href="#" class="hover:text-white">Services</a></li>
          <li><a href="#" class="hover:text-white">Contact</a></li>
        </ul>
      </div>

      <div>
        <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
        <ul class="space-y-3 text-sm">
          <li>Email: hello@example.com</li>
          <li>Phone: +91 98765 43210</li>
          <li>Mumbai, India</li>
        </ul>
      </div>
    </div>

    <div class="mt-10 border-t border-slate-800 pt-6 text-sm text-slate-500 md:flex md:items-center md:justify-between">
      <p>© 2026 TailwindSite. All rights reserved.</p>
      <div class="mt-4 flex gap-4 md:mt-0">
        <a href="#" class="hover:text-white">Privacy Policy</a>
        <a href="#" class="hover:text-white">Terms</a>
      </div>
    </div>
  </div>
</footer>
    
    
    </>
  )
}
