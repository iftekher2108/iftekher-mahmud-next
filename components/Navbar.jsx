import Link from "next/link";
import { usePathname } from "next/navigation";
function Navbar() {
  const pathName = usePathname();
  return (
    <>
      <div className="fixed z-[300] p-3 bg-primary rounded-full bottom-7 left-[50%] translate-x-[-50%]">
        <div className="flex gap-2">
          <Link className={`nav-item ${pathName === '/' ? 'active' : ''}`} href={'/'}><i className="fa-solid fa-house" ></i></Link>
          <Link className={`nav-item ${pathName === '/about' ? 'active' : ''}`} href={'/about'} ><i className="fa-solid fa-user"></i></Link>
          <Link className={`nav-item ${pathName === '/project' ? 'active' : ''}`} href={'/project'} ><i className="fa-solid fa-bars-progress"></i></Link>
          <Link className={`nav-item ${pathName === '/tech-skill' ? 'active' : ''}`} href={'/tech-skill'} ><i className="fa-solid fa-graduation-cap"></i></Link>
          <Link className={`nav-item ${pathName === '/contact' ? 'active' : ''}`} href={'/contact'} ><i className="fa-solid fa-envelope"></i></Link>
        </div>
      </div>
    </>
  );
}

export default Navbar;
