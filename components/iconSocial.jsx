
import Link from "next/link"

function IconSocial() {
    return (
        <>
            <div className="flex gap-4">
                <Link href={'https://www.facebook.com/mdiftekher.mahmud/'} target="_blank" className="size-12 flex justify-center items-center rounded-lg text-white 
                bg-[#1877F2]
                 hover:-translate-y-1 hover:scale-105
                  transition-all duration-300 ease-in-out
                 ">
                    <i className="fa-brands text-xl fa-facebook-f"></i>
                </Link>

                <Link href={'https://github.com/iftekher2108'} target="_blank" className="size-12 flex justify-center items-center rounded-lg text-white 
                bg-[#24292e]
                 hover:-translate-y-1 hover:scale-105
                  transition-all duration-300 ease-in-out
                 ">
                    <i className="fa-brands text-xl fa-github"></i>
                </Link>

                <Link href={'https://www.linkedin.com/in/iftekhermahmud1/'} target="_blank" className="size-12 flex justify-center items-center rounded-lg text-white 
                bg-[#0a66c2]
                 hover:-translate-y-1 hover:scale-105
                  transition-all duration-300 ease-in-out
                 ">
                    <i className="fa-brands text-xl fa-linkedin"></i>
                </Link>

                <Link href={'https://wa.me/8801580359517?text=Hey%20there!%20I%20need%20help.'} target="_blank" className="size-12 flex justify-center items-center rounded-lg text-white 
                bg-[#128c7e]
                 hover:-translate-y-1 hover:scale-105
                  transition-all duration-300 ease-in-out
                 ">
                   <i className="fa-brands text-xl fa-whatsapp"></i>
                </Link>

            </div>
        </>
    )
}

export default IconSocial
