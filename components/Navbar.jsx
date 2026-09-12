'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();
  return (
    <div className={`fixed z-300 bottom-7 left-0 right-0 mx-auto w-max p-2 rounded-full`}>
      <div className="flex gap-2 items-center">
        <Link href="/" className={`card glass bg-circle p-3 text-lg ${pathName == '/' ? 'bg-primary' : ''}`}><i className="fa-solid fa-house"></i></Link>
        <Link href="/about" className={`card glass bg-circle p-3 text-lg ${pathName == '/about' ? 'bg-primary' : ''}`}><i className="fa-solid fa-user"></i></Link>
        <Link href="/project" className={`card glass bg-circle p-3 text-lg ${pathName == '/project' ? 'bg-primary' : ''}`}><i className="fa-solid fa-bars-progress"></i></Link>
        <Link href="/tech-skill" className={`card glass bg-circle p-3 text-lg ${pathName == '/tech-skill' ? 'bg-primary' : ''}`}><i className="fa-solid fa-graduation-cap"></i></Link>
        <Link href="/contact" className={`card glass bg-circle p-3 text-lg ${pathName == '/contact' ? 'bg-primary' : ''}`}><i className="fa-solid fa-envelope"></i></Link>
      </div>
    </div>
  );
}

export default Navbar;
