import IconSocial from "./iconSocial"
import Image from "next/image"
import Link from "next/link"
export default function AboutMe() {
    return(
       <div className="relative md:p-6 p-2 mb-2 card rounded-5 shadow-md bg-base-100 border border-base-200 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-12 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/10 rounded-full blur-2xl"></div>
          </div>
          <div className="flex items-center justify-center mb-8 pt-10 relative z-10">
            <span className="text-center px-6 uppercase text-3xl font-bold section-title text-primary">About Me</span>
          </div>
          <div className="relative grid lg:grid-cols-2 gap-12 items-center z-10">
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-72 h-72 rounded-full shadow-xl ring-4 ring-primary ring-offset-base-100 ring-offset-4 flex items-center justify-center">
                  <Image src={'/avater.png'} height={500} width={500} alt="about-avatar" className="object-cover" />
                </div>
              </div>
            </div>
            <div className="p-3">
              <h2 className="text-4xl font-extrabold mb-4 text-info">Passionate Developer</h2>
              <p className="mb-6 text-lg text-base-content/80 leading-relaxed">With a background in <span className="font-semibold text-info">Computer Tech</span> and a love for <span className="font-semibold text-accent">creative design</span>, I specialize in building <span className="font-semibold text-primary">unique</span>, <span className="font-semibold text-secondary">animated</span>, and <span className="font-semibold text-success">content-rich</span> websites. My mission is to deliver visually stunning and highly functional digital experiences.</p>
              <div className="flex gap-4 mb-6">
                <Link href={'/contact'} className="btn btn-accent  px-10 hover:scale-105 transition-transform font-bold">Let&#39;s Talk</Link>
                <Link href='/iftekher_mahmud.pdf' className="btn btn-outline  px-10 hover:scale-105 transition-transform font-bold">Download CV</Link>
              </div>
              <IconSocial />
            </div>
          </div>
        </div> 
    )
}
