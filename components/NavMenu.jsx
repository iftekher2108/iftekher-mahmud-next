'use client'
import Link from "next/link";
import Image from 'next/image';

export default function NavMenu({ theme, setTheme }) {
    const themeList = [
        "default", "domlight", "light", "dark", "cupcake", "retro", "bumblebee", "emerald", "corporate", "synthwave", "cyberpunk",
        "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula",
        "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset", "caramellatte",
        "abyss", "silk"
    ];


    return (
        <div className="sticky z-50 top-0">
            <div className=" relative px-6">
                {/* <div className="flex-1">
                    <Link href={'/'} className="flex transition-all duration-300 ease-in-out scale-95 hover:scale-100">
                        <Image src={'/hero.png'} className="border" height={100} width={80} alt="logo" />
                        <p className="btn btn-outline btn-primary p-5">Iftekher Mahmud</p> 
                    </Link>
                </div> */}

                <div className="dropdown mb-72 z-50 absolute top-[50%] translate-y-[50%] right-[2%]">
                    <div tabIndex={0} role="button" className="btn btn-primary flex items-center pl-4 m-1">
                        <i className="fa-solid fa-palette me-1 mt-1"></i>
                        <p>Theme</p>
                        <svg
                            width="12px"
                            height="12px"
                            className="inline-block h-3 w-3 ms-2 mt-1.5 fill-current opacity-60"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                    <ul className="dropdown-content bg-base-300 flex flex-col gap-1 rounded-box overflow-y-scroll h-[25vh] z-1 w-34 p-2 shadow-xl">
                        {themeList.map((item, index) => (
                            <li key={index}>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller w-full btn btn-sm justify-start"
                                    aria-label={item.charAt(0).toUpperCase() + item.slice(1)}
                                    value={item}
                                    checked={theme === item}
                                    onChange={(e) => setTheme(e.target.value)}
                                />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}
