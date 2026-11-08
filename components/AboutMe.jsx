import Image from "next/image"
export default function AboutMe() {
  return (
    <div className="relative md:p-6 py-10 p-2 mb-2 card rounded-5 shadow-md bg-base-100 border border-base-200 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/10 rounded-full blur-2xl"></div>
      </div>
      <div className="mb-16 pt-3 relative z-10">
        <p className="glass px-6 py-3 text-center rounded shadow-xl text-3xl font-bold ">About me</p>
      </div>
      <div className="relative lg:grid lg:grid-cols-2 gap-6 justify-between z-10 mb-4">
        <div className="col-span-1">
            <Image src={'/about-us.png'} className="h-auto rounded-lg" height={750} width={650} alt="about-avatar" />
        </div>
        <div className="col-span-1 pb-2">
          {/* <h2 className="text-4xl font-extrabold mb-2 text-info">Storyline</h2> */}
          <p className="mb-2 text-base-content text-sm text-justify leading-relaxed">
            My coding journey started with pure curiosity. 
            I wanted to understand how the internet works and what happens behind the systems we use every day.
             That curiosity quickly became a passion, leading me to become a Software Engineer and problem-solver who combines performance,
               precision, and practical thinking.
          </p>
          {/* <p className="mb-3 text-base-content text-sm text-justify leading-relaxed">
            Over the past 3.5+ years, I’ve worked with technologies including Laravel, Next.js, React, React Native (Expo), Tailwind CSS, DaisyUI, PHP and MySQL.
             I build complete digital solutions that connect reliable backend systems with clean, responsive, and user-friendly experiences.
          </p> */}

          <p className="mb-2 text-base-content text-sm text-justify leading-relaxed">
            I believe great development is not just about writing code.
             It’s about understanding people, solving real problems, and creating solutions that deliver measurable value.
          </p>
          <h4 className="font-semibold text-lg mt-2">What I Focus On</h4>
          <p className="mb-2 text-base-content text-sm text-justify leading-relaxed">
              I build software with performance, scalability, security, and stability in mind.
               From optimizing database queries and APIs to designing efficient backend architectures,
                I focus on creating systems that remain fast and reliable as they grow.
          </p>

            <p className="text-base-content text-sm text-justify leading-relaxed">
              On the frontend, I care about clean UI, intuitive UX, responsiveness,
               and smooth interactions—because a good product should not only work well but also feel great to use.
            </p>

          <h4 className="font-semibold text-lg mt-2">What Makes Me Different</h4>
          <ul className="text-sm text-justify">
            <li>Think Beyond Code- I focus on the purpose behind a project and how it can create value for users and businesses.</li>
            <li>Value Collaboration- I enjoy working with designers, developers, and managers to turn ideas into clear and effective solutions.</li>
            <li>Keep Learning- Technology evolves quickly, and I continuously improve my skills to build better solutions.</li>
          </ul>
          <h4 className="font-semibold text-lg mt-2">Business-Focused Development</h4>
          <p className="text-base-content text-sm text-justify leading-relaxed">
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
