'use client'
import Image from "next/image"
import { motion } from 'framer-motion'
export default function AboutMe() {
  return (
    <div className="relative md:p-6 py-10 p-2 mb-2 card rounded-5 shadow-md bg-base-100 border border-base-200 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/10 rounded-full blur-2xl"></div>
      </div>


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-8 pt-3 relative z-10 text-center space-y-4"
      >
        <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary">
          Get to Know Me
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          About{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            Me
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-base-content/60">
          A little about my journey, experience, passion, and the
          technology I use to turn ideas into meaningful digital solutions.
        </p>

        <div className="flex items-center justify-center gap-2 pt-1">
          <span className="w-10 h-1 rounded-full bg-primary"></span>
          <span className="w-3 h-1 rounded-full bg-secondary"></span>
          <span className="w-10 h-1 rounded-full bg-primary/30"></span>
        </div>
      </motion.div>


      <div className="relative lg:grid lg:grid-cols-2 gap-6 justify-between z-10 mb-4">
        <div className="col-span-1">
          <Image src={'/about-us.png'} className="h-auto rounded-lg" height={750} width={650} alt="about-avatar" />
        </div>
        <div className="col-span-1 pb-2">
          {/* <h2 className="text-4xl font-extrabold mb-2 text-info">Storyline</h2> */}
          <p className="text-base md:text-lg text-base-content/60 text-justify">
            My coding journey started with pure curiosity.
            I wanted to understand how the internet works and what happens behind the systems we use every day.
            That curiosity quickly became a passion, leading me to become a Software Engineer and problem-solver who combines performance,
            precision, and practical thinking.
          </p>
          {/* <p className="mb-3 text-base-content text-sm text-justify leading-relaxed">
            Over the past 3.5+ years, I’ve worked with technologies including Laravel, Next.js, React, React Native (Expo), Tailwind CSS, DaisyUI, PHP and MySQL.
             I build complete digital solutions that connect reliable backend systems with clean, responsive, and user-friendly experiences.
          </p> */}

          <p className="text-base md:text-lg text-base-content/60 text-justify ">
            I believe great development is not just about writing code.
            It’s about understanding people, solving real problems, and creating solutions that deliver measurable value.
          </p>
          <h4 className="font-semibold text-lg mt-1">What I Focus On</h4>
          <p className="text-base md:text-lg text-base-content/60 text-justify ">
            I build software with performance, scalability, security, and stability in mind.
            From optimizing database queries and APIs to designing efficient backend architectures,
            I focus on creating systems that remain fast and reliable as they grow.
          </p>

          <p className="text-base md:text-lg text-base-content/60 text-justify ">
            On the frontend, I care about clean UI, intuitive UX, responsiveness,
            and smooth interactions—because a good product should not only work well but also feel great to use.
          </p>

          <h4 className="font-semibold text-lg mt-1">What Makes Me Different</h4>
          <ul className="text-base md:text-lg text-base-content/60 text-justify">
            <li>Think Beyond Code- I focus on the purpose behind a project and how it can create value for users and businesses.</li>
            {/* <li>Value Collaboration- I enjoy working with designers, developers, and managers to turn ideas into clear and effective solutions.</li> */}
            <li>Keep Learning- Technology evolves quickly, and I continuously improve my skills to build better solutions.</li>
          </ul>
          <h4 className="font-semibold text-lg mt-1">Business-Focused Development</h4>
          <p className="text-base md:text-lg text-base-content/60 text-justify leading-relaxed">
            My approach is always business-centric. I aim to build digital solutions that improve efficiency,
            reduce unnecessary costs, automate workflows, and support business growth and Easy to use.
          </p>

          {/* <p className="text-base-content text-sm text-justify leading-relaxed">
            With a background in Computer Science and a passion for digital solutions,
             I specialize in building secure, optimized, scalable, and maintainable systems.
          </p> */}

          {/* <div className="flex gap-4 mb-6">
            <Link href={'/contact'} className="btn glass bg-accent  px-10 hover:scale-105 transition-transform font-bold">Let&#39;s Talk</Link>
            <Link href='/iftekher_mahmud.pdf' className="btn btn-outline  px-10 hover:scale-105 transition-transform font-bold">Download CV</Link>
          </div> */}
          {/* <IconSocial /> */}

        </div>

      </div>
    </div>
  )
}
