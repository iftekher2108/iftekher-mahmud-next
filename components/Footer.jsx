'use client'
import React from 'react';
export default function Footer() {
  return (
  <footer className="w-full py-12 min-h-[100px] bg-gradient-to-r from-primary to-secondary text-base-content text-center mt-12 rounded-t-2xl shadow-xl border-t border-base-200">
      <div className="mb-2 text-lg font-semibold flex justify-center items-center gap-2">
        <span className="inline-block"><svg xmlns='http://www.w3.org/2000/svg' className='h-5 w-5 text-accent' fill='none' viewBox='0 0 24 24' stroke='currentColor'><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 8c-1.657 0-3 1.343-3 3 0 1.657 1.343 3 3 3s3-1.343 3-3c0-1.657-1.343-3-3-3z' /><path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M12 2v2m0 16v2m10-10h-2M4 12H2m15.364-7.364l-1.414 1.414M6.05 17.95l-1.414 1.414m12.728 0l-1.414-1.414M6.05 6.05L4.636 4.636' /></svg></span>
        &copy; {new Date().getFullYear()} Iftekher Mahmud. All rights reserved.
      </div>
      <div className="text-sm opacity-80">Designed & Built with <span className="text-error">❤️</span> using <span className="badge badge-primary badge-outline mx-1">Next.js</span> & <span className="badge badge-secondary badge-outline mx-1">Tailwind CSS</span> <span className="badge badge-accent badge-outline mx-1">daisyUI</span></div>
    </footer>
  );
}
