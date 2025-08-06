'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function Navbar() {
  const pathName = usePathname();
  const [theme, setTheme] = useState('light');

  console.log(pathName)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="fixed z-[300] p-3 bg-base-200 border border-base-300 shadow-xl rounded-full bottom-7 left-1/2 -translate-x-1/2">
      <div className="flex gap-2 items-center">
        <Link href="/" className={`btn btn-circle text-xl ${pathName == '/' ? 'btn-primary' : ''}`}><i className="fa-solid fa-house"></i></Link>
        <Link href="/about" className={`btn btn-circle text-xl ${pathName == '/about' ? 'btn-primary' : ''}`}><i className="fa-solid fa-user"></i></Link>
        <Link href="/project" className={`btn btn-circle text-xl ${pathName == '/project' ? 'btn-primary' : ''}`}><i className="fa-solid fa-bars-progress"></i></Link>
        <Link href="/tech-skill" className={`btn btn-circle text-xl ${pathName == '/tech-skill' ? 'btn-primary' : ''}`}><i className="fa-solid fa-graduation-cap"></i></Link>
        <Link href="/contact" className={`btn btn-circle text-xl ${pathName == '/contact' ? 'btn-primary' : ''}`}><i className="fa-solid fa-envelope"></i></Link>
        {/* Theme toggle button */}
        <button onClick={toggleTheme} className="btn btn-circle btn-ghost text-xl ml-2" aria-label="Toggle theme">
          {theme === 'light' ? (
            <i className="fa-solid fa-moon"></i>
          ) : (
            <i className="fa-solid fa-sun"></i>
          )}
        </button>
      </div>
    </div>
  );
}

export default Navbar;
