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

  // const toggleTheme = () => {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // };

  return (
    <div className="fixed z-[300] p-2 bg-base-200 border border-base-300 shadow-xl rounded-full bottom-7 left-1/2 -translate-x-1/2">
      <div className="flex gap-2 items-center">
        <Link href="/" className={`btn btn-circle p-5 text-lg ${pathName == '/' ? 'btn-primary' : ''}`}><i className="fa-solid fa-house"></i></Link>
        <Link href="/about" className={`btn btn-circle p-5 text-lg ${pathName == '/about' ? 'btn-primary' : ''}`}><i className="fa-solid fa-user"></i></Link>
        <Link href="/project" className={`btn btn-circle p-5 text-lg ${pathName == '/project' ? 'btn-primary' : ''}`}><i className="fa-solid fa-bars-progress"></i></Link>
        <Link href="/tech-skill" className={`btn btn-circle p-5 text-lg ${pathName == '/tech-skill' ? 'btn-primary' : ''}`}><i className="fa-solid fa-graduation-cap"></i></Link>
        <Link href="/contact" className={`btn btn-circle p-5 text-lg ${pathName == '/contact' ? 'btn-primary' : ''}`}><i className="fa-solid fa-envelope"></i></Link>
      </div>
    </div>
  );
}

export default Navbar;
