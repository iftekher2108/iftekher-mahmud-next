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
        <section className="relative m-3 lg:p-16 p-6 bg-base-100 rounded-3xl shadow-xl border border-base-200 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-16 -left-16 w-80 h-80 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>
          </div>
          <div className="relative grid lg:grid-cols-2 gap-12 items-center z-10">
            <div className="p-3">
              <h1 className="text-5xl mb-4 font-extrabold text-neutral leading-tight">
                Hi, I'm <span className="text-primary">Iftekher Mahmud</span>
                <br />
                <span className="text-2xl font-bold block mt-2 text-secondary tracking-tight">Creative Software Engineer</span>
              </h1>
              <p className="lg:w-3/4 mb-8 text-lg text-neutral/80 leading-relaxed">I craft <span className="font-semibold text-primary">beautiful</span>, <span className="font-semibold text-secondary">animated</span>, and <span className="font-semibold text-accent">content-rich</span> web experiences with Next.js, React, and Tailwind CSS. Let's create something amazing together!</p>
              <div className="flex gap-4 mb-6">
                <Link href={'/contact'} className="btn btn-primary rounded-full px-10 shadow-md hover:scale-105 transition-transform text-lg font-semibold">Hire Me</Link>
                <a href={'/iftekher_mahmud.pdf'} className="btn btn-outline rounded-full px-10 shadow-md hover:scale-105 transition-transform text-lg font-semibold">Get Resume</a>
              </div>
              <IconSocial />
            </div>
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-72 h-72 rounded-full ring-4 ring-primary ring-offset-base-100 ring-offset-4 shadow-xl flex items-center justify-center bg-white/80">
                  <Image src={'/avater.png'} height={400} width={400} alt="hero-avater" className="object-cover" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection delay={0.2}>
        <section className="relative lg:p-16 m-3 p-6 bg-base-100 rounded-3xl shadow-xl border border-base-200 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute -top-12 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/10 rounded-full blur-2xl"></div>
          </div>
          <div className="flex items-center justify-center mb-8 pt-10 relative z-10">
            <span className="text-center px-6 uppercase text-3xl font-bold section-title text-secondary">About Me</span>
          </div>
          <div className="relative grid lg:grid-cols-2 gap-12 items-center z-10">
            <div className="flex justify-center">
              <div className="avatar">
                <div className="w-72 h-72 rounded-2xl shadow-xl ring-4 ring-secondary ring-offset-base-100 ring-offset-4 flex items-center justify-center bg-white/80">
                  <Image src={'/avater.png'} height={400} width={400} alt="about-avatar" className="object-cover" />
                </div>
              </div>
            </div>
            <div className="p-3">
              <h2 className="text-4xl font-extrabold mb-4 text-primary">Passionate Web Developer</h2>
              <p className="mb-6 text-lg text-neutral/80 leading-relaxed">With a background in <span className="font-semibold text-info">Computer Science</span> and a love for <span className="font-semibold text-accent">creative design</span>, I specialize in building <span className="font-semibold text-primary">unique</span>, <span className="font-semibold text-secondary">animated</span>, and <span className="font-semibold text-accent">content-rich</span> websites. My mission is to deliver visually stunning and highly functional digital experiences.</p>
              <div className="flex gap-4 mb-6">
                <Link href={'/contact'} className="btn btn-accent rounded-full px-10 shadow-md hover:scale-105 transition-transform text-lg font-semibold">Let's Talk</Link>
                <a href='/iftekher_mahmud.pdf' className="btn btn-outline rounded-full px-10 shadow-md hover:scale-105 transition-transform text-lg font-semibold">Download CV</a>
              </div>
              <IconSocial />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection delay={0.6}>
        <Projects showFilter={false} />
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
