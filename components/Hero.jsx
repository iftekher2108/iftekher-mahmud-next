import Image from "next/image"
import Link from "next/link"
import IconSocial from "./iconSocial"

export default function Hero() {
    return (
        <div className="relative md:p-6 p-2 mb-2 card rounded-5 shadow-md border-base-200 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute -top-16 -left-16 w-80 h-80 bg-primary/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>
            </div>
            <div className="relative grid lg:grid-cols-2 gap-10 items-center z-10">
                <div className="col-span-1 p-3">
                    <h1 className="text-5xl mb-4 font-extrabold text-base-content leading-tight">
                        Hi, I&#39;m <br />
                        <span className="text-primary tracking-[2px]">Iftekher </span><span className="text-stroke tracking-[2px] text-transparent">Mahmud</span>
                        <br />
                        <span className="text-2xl font-bold block mt-2 text-error tracking-tight">Software Engineer</span>
                    </h1>
                    <p className="lg:w-3/4 mb-8 text-lg text-base-content/80 leading-relaxed">I craft <span className="font-semibold text-primary">beautiful</span>, <span className="font-semibold text-secondary">animated</span>, and <span className="font-semibold text-success">content-rich</span> web experiences with various type of technologies. Let&#39;s create something amazing together!</p>
                    <div className="flex gap-4 mb-6">
                        <Link href={'/contact'} className="btn btn-primary px-10  hover:scale-105 transition-transform font-bold">Hire Me</Link>
                        <a href={'/iftekher_mahmud.pdf'} className="btn btn-info px-10 hover:scale-105 transition-transform font-bold">Get Resume</a>
                    </div>
                    <IconSocial />
                </div>
                <div className="flex justify-center p-3">
                    <div className="avatar rounded-tl-[50%] overflow-hidden rounded-br-[50%] ring-4 ring-offset-base-100 border ring-offset-4 shadow-xl flex items-center justify-center ring-primary ">
                        <Image src={'/hero.jpg'} height={400} width={400} alt="hero-avater" className="object-cover" />
                    </div>
                </div>
            </div>
        </div>
    )
}