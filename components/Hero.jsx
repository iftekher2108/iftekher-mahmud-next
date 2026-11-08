'use client'
import Image from "next/image";
import Link from "next/link";
import IconSocial from "./iconSocial";
import { TypeAnimation } from 'react-type-animation';

export default function Hero() {
    return (
        <div className="hero-section relative md:p-6 p-2 mb-2 card rounded-5 shadow-md border-base-200 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 -left-16 w-80 h-80 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>
            </div>
            <div className="relative grid lg:grid-cols-2 gap-10 items-center z-10">
                <div className="col-span-1 p-3">
                    <h1 className="text-5xl font-extrabold text-base-content leading-tight">
                        Hi I&#39;m <br />
                        <span className="text-primary tracking-[2px]">Iftekher </span><span className="text-stroke tracking-[2px] text-transparent">Mahmud</span>
                    </h1>
                    <TypeAnimation
                        sequence={[
                            'Full-Stack Developer',
                            1500,
                            'Software Engineer',
                            1500,
                            'AI Developer',
                            1500,
                            'Mobile App Developer',
                            1500,
                            'Wordpress Developer',
                            1500
                        ]}
                        wrapper="span"
                        speed={50}
                        // style={{ fontSize: '1.5em', display: 'inline-block' }}
                        className="text-2xl font-bold block my-2 text-error tracking-tight"
                        repeat={Infinity}
                    />
                    {/* <span className="text-2xl font-bold block my-2 text-error tracking-tight">Software Engineer</span> */}
                    <p className="text-justify">
                        I build modern websites, high-performance web applications, and intelligent AI-powered solutions that help businesses automate operations, improve efficiency, and accelerate growth.

                        I focus on clean design, smooth performance, and user-friendly experiences, helping businesses and individuals turn their ideas into reality through fast, scalable, and reliable digital products.

                        By combining technology, creativity, and problem-solving, I develop smart solutions that save time, reduce manual work, simplify everyday tasks, and create real value for businesses and people.
                    </p>

                    <p className="lg:w-3/4 mb-8 ">
                        Let’s turn your <span className="font-semibold text-success">ideas</span> into something <span className="font-semibold text-primary">amazing</span>!
                    </p>
                    <div className="flex flex-wrap gap-4 mb-6">
                        {/* <Link href={'/project'} className="btn btn-secondary px-10  hover:scale-105 transition-transform font-bold" > Explore Projects</Link> */}
                        <Link href={'/contact'} className="btn btn-primary px-10  hover:scale-105 transition-transform font-bold">Hire Me</Link>
                        <a href={'/iftekher_mahmud.pdf'} className="btn btn-info px-10 hover:scale-105 transition-transform font-bold">Get Resume</a>

                    </div>
                    <IconSocial />
                </div>
                <div className="flex relative justify-center p-3">
                    <div className="avatar hero-picture rounded-tl-[50%] rounded-br-[50%] border-0 outline-0 ring-4 ring-offset-base-100 ring-offset-5 shadow-xl flex items-center justify-center ring-primary ">
                        <Image src={'/hero.png'} height={400} width={400} alt="hero-avater" className="object-cover rounded-br-[50%] rounded-tl-[50%]" />
                    </div>
                </div>
            </div>
        </div>
    )
}