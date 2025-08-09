import AnimatedSection from "@/components/AnimatedSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Work from "@/components/Work";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Iftekher Mahmud - Software Engineer"
}

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

      {/* About Section */}
      <AnimatedSection delay={0.3}>
        <AboutMe />
      </AnimatedSection>

      {/* Projects Section */}
      <AnimatedSection delay={0.6}>
          <Projects showFilter={false} limit={6} />
      </AnimatedSection>

      {/* Tech Skills Section */}
      <AnimatedSection delay={0.4}>
        <Skills />
      </AnimatedSection>

      {/* Work Section */}
      <AnimatedSection delay={1.0}>
        <Work />
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection delay={0.8}>
        <Education />
      </AnimatedSection>

      {/* Education Section */}
      <AnimatedSection delay={0.6}>
        <Contact />
      </AnimatedSection>

    </>
  );
}
