import Link from "next/link";
import { usePathname } from "next/navigation";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
function Navbar() {
  const pathName =usePathname();
  return (
    <>
      <div className="fixed z-[300] p-4 bg-primary rounded-full bottom-7 left-[50%] translate-x-[-50%]">
        <div className="flex gap-3">
          <Link className={`nav-item ${pathName === '/' ? 'active' :''}`} href={'/'}><FontAwesomeIcon icon="fa-solid fa-house" /></Link> 
          <Link className={`nav-item ${pathName === '/about' ? 'active' :''}`} href={'/about'}>About</Link>
          {/* <Link className={`nav-item ${pathName === '/about' ? 'active' :''}`} href={'/about'}>About</Link>
          <Link className={`nav-item ${pathName === '/about' ? 'active' :''}`} href={'/about'}>About</Link>
           */}
        </div>
      </div>
    </>
  );
}

export default Navbar;
