import IconSocial from "./iconSocial"
import Image from "next/image"
import Link from "next/link"
export default function AboutMe() {
  return (
    <div className="relative md:p-6 py-10 p-2 mb-2 card rounded-5 shadow-md bg-base-100 border border-base-200 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-12 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-56 h-56 bg-accent/10 rounded-full blur-2xl"></div>
      </div>
      <div className="mb-16 pt-3 relative z-10">
        <p className="glass px-6 py-3 uppercase text-center text-xl font-bold section-title">About me</p>
      </div>
      <div className="relative grid lg:grid-cols-2 gap-4 items-center z-10 mb-6">
        <div className="flex justify-center">
          <div className="avatar">
            <div className="w-full h-full rounded-full shadow-xl ring-4 ring-primary ring-offset-base-100 ring-offset-8 flex items-center justify-center">
              <Image src={'/about.png'} height={800} width={800} alt="about-avatar" className="object-cover" />
            </div>
          </div>
        </div>
        <div className="p-3">
          <h2 className="text-4xl font-extrabold mb-4 text-info">Storyline</h2>
          <p className="mb-3 text-base-content leading-relaxed">
            My coding journey started from pure curiosity — I wanted to understand how the internet actually runs how the Systems actually “work” behind the scenes.
            That curiosity soon turned into passion, and today I stand as a problem-solver, a Software Engineer, and a developer who blends performance with precision.
            From writing my first line of code in college to developing production-ready web apps for clients, I’ve grown into a developer who values clean architecture, systems design, and measurable business results.
          </p>
          <p className="mb-3 text-base-content leading-relaxed">
            Over the past 3.5+ years, I’ve worked with Laravel, Next.js, React-native(expo), prisma, express, mongoose, Tailwind CSS, daisyUI, PHP and MySQL — building complete ecosystems that balance backend logic with seamless user experiences.
          </p>
          <p className="mb-3 text-base-content leading-relaxed">
            I believe great development isn’t about writing code — it’s about understanding people, fixing pain points, and creating something meaningful that truly helps.
          </p>
          <p className="mb-3 text-base-content leading-relaxed">
            With a background in <span className="font-semibold text-secondary">Computer Sciense</span> and a love for <span className="font-semibold text-info">digital Solutions</span>, I specialize in building <span className="font-semibold text-primary">secure</span>, <span className="font-semibold text-secondary">optimized</span>, and <span className="font-semibold text-success">scalable</span> system.
            <br />My mission is simple Turn ideas into digital solutions that help businesses grow.
          </p>
          <p className="text-base-content leading-relaxed">
            I’m not just build Solutions.
            I’m engineering systems — with proper database design, modular API structures, caching strategies, and secure authentication layers.
            design systems that save time, cut costs, and grow businesses. <br />
            Whether it’s automating systems for industries, building secure document tools, or creating full-featured management systems — I develop software that actually makes a difference.
            I don’t stop at functionality — I focus on speed, security, usability, and maintainability.
          </p>

          {/* <div className="flex gap-4 mb-6">
            <Link href={'/contact'} className="btn glass bg-accent  px-10 hover:scale-105 transition-transform font-bold">Let&#39;s Talk</Link>
            <Link href='/iftekher_mahmud.pdf' className="btn btn-outline  px-10 hover:scale-105 transition-transform font-bold">Download CV</Link>
          </div>
          <IconSocial /> */}
        </div>

        <div className="col-span-2">

          <span className="text-xl font-semibold text-primary">Here’s what I focus on:</span>
          <p className="mb-3 text-base-content leading-relaxed">
            I don’t just make apps run — I make them fly. Every line of code is written with speed, scalability, and stability in mind. From optimized database queries to lightning-fast performance, I ensure users get a seamless experience no matter the scale.
            Design that Converts: I build & use clean UI with smart UX so users stay longer and businesses see better engagement.
          </p>
          
          <h3 className="text-primary font-semibold text-xl mt-3">What drives me:</h3>
          <p className="mb-3 text-base-content leading-relaxed">
            I love challenges. Whether it’s optimizing database queries to save server cost, improving website performance to boost conversions, or crafting an interface that feels alive — I’m addicted to the process of making things better.
            From writing my first line of code in college to developing production-ready web apps for clients, I’ve grown into a developer who values clean architecture, responsive design, and measurable business results.
          </p>



          <h3 className="text-primary font-semibold text-xl mt-3">What Makes Me Different</h3>
          <ul>
            <li>- I think beyond code. I focus on why we’re building something and how it impacts users.</li>
            <li>- I value teamwork. I love collaborating with designers, devs, and managers to bring clarity and quality.</li>
            <li>- I never stop learning. Tech moves fast — and so do I.</li>
          </ul>

          



          <p className="mb-3 text-base-content leading-relaxed">
            <span className="text-lg font-semibold text-primary">Business-Centric Coding:</span><br />
            I develop with ROI (returns of investment) at the core. My focus goes beyond code — I build digital solutions that solve real business problems, enhance efficiency, and increase profitability. Whether it’s automating workflows or optimizing performance, I make sure every project delivers measurable results.
          </p>
          <ul>
            <li>- Boosted Performance: Improved overall site load time by 45%, leading to faster interactions and higher client conversion rates.</li>
            <li>- Optimized Efficiency: Reduced API server costs by 30% through smart query optimization and better resource management.</li>
            <li>- Enhanced Productivity: Built reusable modular components that cut future development time by 40%, making project scaling faster and smoother.</li>
          </ul>

          <p className="my-3 text-base-content leading-relaxe">“My favorite part about development? Watching something I built make someone’s life a little easier.”</p>


        </div>

      </div>
    </div>
  )
}
