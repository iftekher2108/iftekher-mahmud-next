'use client'
import IconSocial from "./iconSocial";
export default function Footer() {
  return (
    <footer className="w-full py-12 min-h-75 bg-linear-to-r from-base-200 to-base-300 text-base-content text-center mt-12 rounded-t-2xl border-t border-base-200">


      <div className="fixed  md:bottom-8 bottom-25 right-6 z-50">
        <a
          href="#contact"
          className="group flex items-center gap-3 pl-5 pr-2 py-2 border border-primary rounded-full backdrop-blur-xs text-primary-content shadow-xl shadow-primary/30 hover:scale-105 transition-all duration-300"
        >
          <span className="font-semibold text-sm whitespace-nowrap">
            Let's Talk
          </span>

          <span className="flex items-center justify-center w-11 h-11 rounded-full bg-[green]/70">
            <i className="fa-brands fa-whatsapp"/>
          </span>
        </a>
      </div>


      <div className="flex items-center justify-center my-4">
        <IconSocial />
      </div>
      <div className="flex justify-center items-center mb-4">
        <span className="badge badge-outline badge-primary p-4 font-bold text-primary">Iftekher Mahmud</span>
      </div>

      <div className="text-lg font-semibold flex justify-center items-center gap-2">
        <p>
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
