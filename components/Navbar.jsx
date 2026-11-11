'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

function Navbar() {
  const pathName = usePathname();
  return (
    <div className={`fixed z-300 bottom-7 left-0 right-0 mx-auto w-max p-2 rounded-full`}>
      <div className="flex gap-2 items-center">

        <Link href="/" title="Home"
          className={`card border-2 border-primary/45 backdrop-blur-xs shadow-2xl shadow-primary/30 bg-circle p-3 text-lg hover:scale-106 transition-all duration-300 ease-in-out ${pathName == '/' ? 'bg-primary/40' : ''}`}>
          <i className="fa-solid fa-house"></i>
        </Link>

        <Link href="/about" title="About"
          className={`card border-2 border-primary/45 backdrop-blur-xs shadow-2xl shadow-primary/30 bg-circle p-3 text-lg hover:scale-106 transition-all duration-300 ease-in-out ${pathName == '/about' ? 'bg-primary/40' : ''}`}>
          <i className="fa-solid fa-user"></i>
        </Link>

        <Link href="/service" title="Service"
          className={`card border-2 border-primary/45 backdrop-blur-xs shadow-2xl shadow-primary/30 bg-circle p-3 text-lg hover:scale-106 transition-all duration-300 ease-in-out ${pathName == '/service' ? 'bg-primary/40' : ''}`}>
          <i className="fa-solid fa-screwdriver-wrench"></i>
        </Link>

        <Link href="/project" title="Project"
          className={`card border-2 border-primary/45 backdrop-blur-xs shadow-2xl shadow-primary/30 bg-circle p-3 text-lg hover:scale-106 transition-all duration-300 ease-in-out ${pathName == '/project' ? 'bg-primary/40' : ''}`}>
          <i className="fa-solid fa-bars-progress"></i>
        </Link>

        <Link href="/tech-skill" title="Tech Skill"
          className={`card border-2 border-primary/45 backdrop-blur-xs shadow-2xl shadow-primary/30 bg-circle p-3 text-lg hover:scale-106 transition-all duration-300 ease-in-out ${pathName == '/tech-skill' ? 'bg-primary/40' : ''}`}>
          <i className="fa-solid fa-graduation-cap"></i>
        </Link>

        <Link href="/contact" title="contact"
          className={`card border-2 border-primary/45 backdrop-blur-xs shadow-2xl shadow-primary/30 bg-circle p-3 text-lg hover:scale-106 transition-all duration-300 ease-in-out ${pathName == '/contact' ? 'bg-primary/40' : ''}`}>
          <i className="fa-solid fa-envelope"></i>
        </Link>

      </div>
    </div>
  );
}

export default Navbar;
