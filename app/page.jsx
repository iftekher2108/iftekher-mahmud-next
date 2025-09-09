import AnimatedSection from "@/components/AnimatedSection";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Work from "@/components/Work";
import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Head from "next/head";

// export const metadata = {
//   title: "Iftekher Mahmud - Software Engineer"
// }

export default function Home() {

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Iftekher Mahmud Pervez",
    "jobTitle": "Software Engineer",
    "url": "https://iftekher-mahmud.vercel.app",
    "sameAs": [
      "https://www.linkedin.com/in/iftekhermahmud1",
      "https://github.com/iftekher2108"
    ],
    "description": "Iftekher Mahmud is a Skilled Software Engineer, specialized in PHP/Laravel, React-native, WordPress, Customized App delivering innovative solutions."
  };




  return (
    <>

      <Head>
        <title>Iftekher Mahmud — Software Engineer</title>
        <meta
          name="description"
          content="Iftekher Mahmud is a Skilled Software Engineer, specialized in PHP/Laravel, React-native, WordPress, Customized App delivering innovative solutions."
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </Head>

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
