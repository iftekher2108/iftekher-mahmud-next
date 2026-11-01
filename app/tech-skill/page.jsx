import AnimatedSection from "@/components/AnimatedSection"
import Skills from "@/components/Skills"
import Work from "@/components/Work"
import Education from "@/components/Education"

function TechSkill() {
    return (
        <>
            {/* Tech Skills Section */}
            <AnimatedSection delay={0.3}>
                <Skills />
            </AnimatedSection>

            {/* Work Section */}
            <AnimatedSection delay={0.6}>
                <Work />
            </AnimatedSection>

            {/* Education Section */}
            <AnimatedSection delay={0.9}>
                <Education />
            </AnimatedSection>

        </>
    )
}

export default TechSkill