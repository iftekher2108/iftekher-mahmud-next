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
                    <h1 className="text-5xl font-extrabold text-base-content leading-tight">
                        Hey there 👋, I&#39;m <br />
                        <span className="text-primary tracking-[2px]">Iftekher </span><span className="text-stroke tracking-[2px] text-transparent">Mahmud</span>
                    </h1>
                    <span className="text-2xl font-bold block my-2 text-error tracking-tight">Software Engineer</span>
                    <p>
                        A passionate <span className="text-primary text-base-content leading-relaxed">Software Engineer</span> who builds digital experiences solutions that work beautifully and perform even better.
                        I’m the kind of developer who believes that great code doesn’t just make a product function — it makes it shine.
                        Every pixel I align, every line of code I write, has one goal: to build fast, scalable, and meaningful web applications that solve real problems for real people.
                    </p>
                    
                    <p className="lg:w-3/4 mb-8 ">Craft <span className="font-semibold text-primary">beautiful</span>, <span className="font-semibold text-secondary">animated</span>, and <span className="font-semibold text-success">content-rich</span> web experiences with various type of technologies. Let&#39;s create something amazing together!</p>
                    <div className="flex gap-4 mb-6">
                        <Link href={'/project'} className="btn btn-secondary px-10  hover:scale-105 transition-transform font-bold" > Explore Projects</Link>
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