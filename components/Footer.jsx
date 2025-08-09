'use client'
import IconSocial from "./iconSocial";
export default function Footer() {
  return (
    <footer className="w-full py-12 min-h-[300px] bg-gradient-to-r from-base-200 to-base-300 text-base-content text-center mt-12 rounded-t-2xl border-t border-base-200">

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
