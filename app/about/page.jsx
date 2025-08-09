import AnimatedSection from "@/components/AnimatedSection"
import AboutMe from "@/components/AboutMe"
import Hero from "@/components/Hero"
import Work from "@/components/Work"

function About() {
  return (
    <>
      {/* Hero Section */}
      <AnimatedSection>
        <Hero />
      </AnimatedSection>

       {/* Work Section */}
            <AnimatedSection delay={1.0}>
              <Work />
            </AnimatedSection>

      {/* About Section */}
      <AnimatedSection delay={0.3}>
        <AboutMe />
      </AnimatedSection>
    </>
  )
}

export default About
