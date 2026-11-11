'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { front_end, back_end, tools } from '@/lib/dataset';


export default function Skills() {

  const [isHovered, setIsHovered] = useState(null);

  return (
    <div id="skills" className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl">


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-4 mt-4 mb-8"
      >
        <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary">
          Technical Expertise Work With
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Work With{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            Skills
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-base-content/60 leading-relaxed">
          Explore the technologies and tools I use to build modern,
          scalable, and high-performance web and software applications.
        </p>

        <div className="flex items-center justify-center gap-2 pt-1">
          <span className="w-10 h-1 rounded-full bg-primary"></span>
          <span className="w-3 h-1 rounded-full bg-secondary"></span>
          <span className="w-10 h-1 rounded-full bg-primary/30"></span>
        </div>
      </motion.div>


      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-7">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 text-primary shadow-lg">
            <i className="fa-solid fa-code text-2xl"></i>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                Frontend Development
              </h3>
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                {front_end.length} Technologies
              </span>
            </div>

            <p className="text-sm text-base-content/60 mt-1">
              Building responsive, accessible interfaces and interactive user experiences.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {front_end.map((frontend, idx) => (
            <motion.li
              key={idx}
              onMouseEnter={() => setIsHovered(frontend.title)}
              onMouseLeave={() => setIsHovered(null)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative flex flex-col items-center justify-center gap-4 p-5 min-h-36 rounded-2xl border border-base-content/10 bg-base-100/60 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer select-none"
              style={{
                borderColor:
                  isHovered === frontend.title
                    ? frontend.color
                    : undefined,
                background:
                  isHovered === frontend.title
                    ? `linear-gradient(145deg, ${frontend.color}20, transparent)`
                    : undefined,
              }}
            >
              {/* Background Glow */}
              <div
                className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundColor: frontend.color }}
              />

              {/* Icon */}
              <div
                className="relative flex items-center justify-center w-16 h-16 rounded-2xl border border-base-content/10 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  backgroundColor: `${frontend.color}15`,
                }}
              >
                <Image
                  src={frontend.picture}
                  height={50}
                  width={50}
                  className="w-10 h-10 object-contain"
                  alt={frontend.title}
                />
              </div>

              {/* Technology Name */}
              <div className="relative text-center">
                <p className="font-bold text-sm md:text-base text-base-content group-hover:text-primary transition-colors duration-300">
                  {frontend.title}
                </p>
                <span
                  className="block w-0 h-0.5 mx-auto mt-2 rounded-full group-hover:w-8 transition-all duration-300"
                  style={{ backgroundColor: frontend.color }}
                />
              </div>

              {/* Bottom Accent */}
              <div
                className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                style={{ backgroundColor: frontend.color }}
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>


      {/* <div className='px-32 py-10'>
        <hr className='text-primary border-2 rounded' />
      </div> */}



      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-7">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary/10 border border-secondary/20 text-secondary shadow-lg">
            <i className="fa-solid fa-server text-2xl"></i>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                Backend Development
              </h3>

              <span className="text-xs font-bold px-3 py-1 rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                {back_end.length} Technologies
              </span>
            </div>

            <p className="text-sm text-base-content/60 mt-1">
              Developing application logic, APIs, authentication, and server-side features.
            </p>
          </div>
        </div>

        {/* Skills Grid */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {back_end.map((backend, idx) => (
            <motion.li
              key={idx}
              onMouseEnter={() => setIsHovered(backend.title)}
              onMouseLeave={() => setIsHovered(null)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative flex flex-col items-center justify-center gap-4 p-5 min-h-36 rounded-2xl border border-base-content/10 bg-base-100/60 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer select-none"
              style={{
                borderColor:
                  isHovered === backend.title
                    ? backend.color
                    : undefined,
                background:
                  isHovered === backend.title
                    ? `linear-gradient(145deg, ${backend.color}20, transparent)`
                    : undefined,
              }}
            >
              {/* Background Glow */}
              <div
                className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundColor: backend.color }}
              />

              {/* Icon */}
              <div
                className="relative flex items-center justify-center w-16 h-16 rounded-2xl border border-base-content/10 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  backgroundColor: `${backend.color}15`,
                }}
              >
                <Image
                  src={backend.picture}
                  height={50}
                  width={50}
                  className="w-10 h-10 object-contain"
                  alt={backend.title}
                />
              </div>

              {/* Technology Name */}
              <div className="relative text-center">
                <p className="font-bold text-sm md:text-base text-base-content group-hover:text-secondary transition-colors duration-300">
                  {backend.title}
                </p>

                <span
                  className="block w-0 h-0.5 mx-auto mt-2 rounded-full group-hover:w-8 transition-all duration-300"
                  style={{ backgroundColor: backend.color }}
                />
              </div>

              {/* Bottom Accent */}
              <div
                className="absolute bottom-0 left-0 w-full h-0.75 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                style={{ backgroundColor: backend.color }}
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>


      {/* <div className='px-32 py-10'>
        <hr className='text-primary border-2 rounded' />
      </div> */}


      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12"
      >
        {/* Category Header */}
        <div className="flex items-center gap-4 mb-7">
          <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-info/10 border border-info/20 text-info shadow-lg">
            <i className="fa-solid fa-screwdriver-wrench text-2xl"></i>
          </div>

          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3">
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                Tools & Workflow
              </h3>

              <span className="text-xs font-bold px-3 py-1 rounded-full bg-info/10 text-info border border-info/20">
                {tools.length} Tools
              </span>
            </div>

            <p className="text-sm text-base-content/60 mt-1">
              Using development tools for version control, API testing, and daily delivery.
            </p>
          </div>
        </div>

        {/* Tools Grid */}
        <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
          {tools.map((tool, idx) => (
            <motion.li
              key={idx}
              onMouseEnter={() => setIsHovered(tool.title)}
              onMouseLeave={() => setIsHovered(null)}
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="group relative flex flex-col items-center justify-center gap-4 p-5 min-h-36 rounded-2xl border border-base-content/10 bg-base-100/60 backdrop-blur-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer select-none"
              style={{
                borderColor:
                  isHovered === tool.title
                    ? tool.color
                    : undefined,
                background:
                  isHovered === tool.title
                    ? `linear-gradient(145deg, ${tool.color}20, transparent)`
                    : undefined,
              }}
            >
              {/* Background Glow */}
              <div
                className="absolute -top-10 -right-10 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                style={{ backgroundColor: tool.color }}
              />

              {/* Tool Icon */}
              <div
                className="relative flex items-center justify-center w-16 h-16 rounded-2xl border border-base-content/10 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3"
                style={{
                  backgroundColor: `${tool.color}15`,
                }}
              >
                <Image
                  src={tool.picture}
                  height={50}
                  width={50}
                  className="w-10 h-10 object-contain"
                  alt={tool.title}
                />
              </div>

              {/* Tool Name */}
              <div className="relative text-center">
                <p className="font-bold text-sm md:text-base text-base-content group-hover:text-accent transition-colors duration-300">
                  {tool.title}
                </p>

                <span
                  className="block w-0 h-0.5 mx-auto mt-2 rounded-full group-hover:w-8 transition-all duration-300"
                  style={{ backgroundColor: tool.color }}
                />
              </div>

              {/* Bottom Accent */}
              <div
                className="absolute bottom-0 left-0 w-full h-[3px] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"
                style={{ backgroundColor: tool.color }}
              />
            </motion.li>
          ))}
        </ul>
      </motion.div>


    </div>

  );
}
