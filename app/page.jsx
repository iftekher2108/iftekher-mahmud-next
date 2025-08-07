import IconSocial from "@/components/iconSocial";
import Image from "next/image";
import Link from "next/link";
import AnimatedSection from "@/components/AnimatedSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Work from "@/components/Work";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection>
        <div className="relative md:p-6 p-2 mb-2 card rounded-5 shadow-md border-base-200 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -left-16 w-80 h-80 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>
          </div>
          <div className="relative grid lg:grid-cols-2 gap-10 items-center z-10">
            <div className="col-span-1 p-3">
              <h1 className="text-5xl mb-4 font-extrabold text-base-content leading-tight">
                Hi, I&#39;m <br/>
                <span className="text-primary">Iftekher </span><span className="text-stroke text-transparent">Mahmud</span>
                <br />
                <span className="text-2xl font-bold block mt-2 text-error tracking-tight">Software Engineer</span>
              </h1>
              <p className="lg:w-3/4 mb-8 text-lg text-base-content/80 leading-relaxed">I craft <span className="font-semibold text-primary">beautiful</span>, <span className="font-semibold text-secondary">animated</span>, and <span className="font-semibold text-success">content-rich</span> web experiences with Next.js, React, and Tailwind CSS. Let&#39;s create something amazing together!</p>
              <div className="flex gap-4 mb-6">
                <Link href={'/contact'} className="btn btn-primary px-10  hover:scale-105 transition-transform font-bold">Hire Me</Link>
                <a href={'/iftekher_mahmud.pdf'} className="btn btn-info px-10 hover:scale-105 transition-transform font-bold">Get Resume</a>
              </div>
              <IconSocial />
            </div>
            <div className="flex justify-center p-3">
              <div className="avatar rounded-tl-[50%] rounded-br-[50%] ring-4 ring-offset-base-100 border ring-offset-4 shadow-xl flex items-center justify-center bg-white/80 ring-primary ">
                  <Image src={'/avater.png'} height={400} width={400} alt="hero-avater" className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection delay={0.3}>
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
                <div className="w-72 h-72 rounded-full shadow-xl ring-4 ring-primary ring-offset-base-100 ring-offset-4 flex items-center justify-center bg-white/80">
                  <Image src={'/avater.png'} height={500} width={500} alt="about-avatar" className="object-cover" />
                </div>
              </div>
            </div>
            <div className="p-3">
              <h2 className="text-4xl font-extrabold mb-4 text-info">Passionate Web Developer</h2>
              <p className="mb-6 text-lg text-base-content/80 leading-relaxed">With a background in <span className="font-semibold text-info">Computer Tech</span> and a love for <span className="font-semibold text-accent">creative design</span>, I specialize in building <span className="font-semibold text-primary">unique</span>, <span className="font-semibold text-secondary">animated</span>, and <span className="font-semibold text-success">content-rich</span> websites. My mission is to deliver visually stunning and highly functional digital experiences.</p>
              <div className="flex gap-4 mb-6">
                <Link href={'/contact'} className="btn btn-accent  px-10 hover:scale-105 transition-transform font-bold">Let&#39;s Talk</Link>
                <a href='/iftekher_mahmud.pdf' className="btn btn-outline  px-10 hover:scale-105 transition-transform font-bold">Download CV</a>
              </div>
              <IconSocial />
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection delay={0.6}>
        <Projects showFilter={true} />
      </AnimatedSection>

      {/* Tech Skills Section */}
      <AnimatedSection delay={0.4}>
        <Skills />
      </AnimatedSection>


      {/* Education Section */}
      <AnimatedSection delay={0.8}>
        <Education />
      </AnimatedSection>

      {/* Work Section */}
      <AnimatedSection delay={1.0}>
        <Work />
      </AnimatedSection>
    </>
  );
}
