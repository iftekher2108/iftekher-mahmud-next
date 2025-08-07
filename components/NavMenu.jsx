'use client'
import Link from "next/link"

export default function NavMenu() {
    return (
        <div className="sticky z-50 top-0">
            <div className="navbar bg-base-100 shadow-sm relative px-6">
                <div className="flex-1">
                    <Link href={'/'} className="btn btn-outline btn-primary p-5 hover:scale-105">Iftekher Mahmud</Link>
                </div>

                <div className="dropdown mb-72 z-50 absolute top-[50%] translate-y-[-50%] right-[2%]">
                    <div tabIndex={0} role="button" className="btn m-1">
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
                    <ul tabIndex={0} className="dropdown-content bg-base-300 flex flex-col gap-1 rounded-box z-1 w-26 p-2 shadow-xl">
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller w-full btn btn-sm justify-start"
                                aria-label="Default"
                                value="default" />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller w-full btn btn-sm justify-start"
                                aria-label="Cyberpunk"
                                value="cyberpunk" />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller w-full btn btn-sm justify-start"
                                aria-label="Retro"
                                value="retro" />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller w-full btn btn-sm justify-start"
                                aria-label="Valentine"
                                value="valentine" />
                        </li>
                        <li>
                            <input
                                type="radio"
                                name="theme-dropdown"
                                className="theme-controller w-full btn btn-sm justify-start"
                                aria-label="Aqua"
                                value="aqua" />
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )
}
