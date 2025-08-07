'use client'
import Link from "next/link"
import { useState, useEffect } from "react";

export default function NavMenu() {
    const themeList = [
        "default", "domlight", "light", "dark", "cupcake", "retro", "bumblebee", "emerald", "corporate", "synthwave", "cyberpunk",
        "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula",
        "cmyk", "autumn", "business", "acid", "lemonade", "night", "coffee", "winter", "dim", "nord", "sunset", "caramellatte",
        "abyss", "silk"
    ];

    const [theme, setTheme] = useState('default');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            document.documentElement.setAttribute('data-theme', theme);
        }
    }, [theme]);
    return (
        <div className="sticky z-50 top-0">
            <div className="navbar bg-base-100 shadow-sm relative px-6">
                <div className="flex-1">
                    <Link href={'/'} className="btn btn-outline btn-primary p-5 hover:scale-105">Iftekher Mahmud</Link>
                </div>

                <div className="dropdown mb-72 z-50 absolute top-[50%] translate-y-[-50%] right-[2%]">
                    <div tabIndex={0} role="button" className="btn btn-primary pl-8 m-1">
                        Theme
                        <svg
                            width="12px"
                            height="12px"
                            className="inline-block h-2 w-2 fill-current opacity-60"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 2048 2048">
                            <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
                        </svg>
                    </div>
                    <ul tabIndex={0} className="dropdown-content bg-base-300 flex flex-col gap-1 rounded-box overflow-y-scroll h-[50vh] z-1 w-28 p-2 shadow-xl">
                        {themeList.map((theme,index) => (
                            <li key={index}>
                                <input
                                    type="radio"
                                    name="theme-dropdown"
                                    className="theme-controller w-full btn btn-sm justify-start"
                                    aria-label={theme.charAt(0).toUpperCase() + theme.slice(1)}
                                    value={theme} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>

    )
}
