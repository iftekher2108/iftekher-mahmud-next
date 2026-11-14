'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/lib/dataset';


export default function Projects({ showFilter = true, limit }) {

  const allTech = Array.from(new Set(projects.flatMap(p => p.technologies)));

  const [filter, setFilter] = useState('All');
  let filteredProjects = filter === 'All' ? projects : projects.filter(p => p.technologies.includes(filter));
  if (limit && typeof limit === 'number') {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  return (
    <div id="projects" className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl overflow-hidden">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-4 mt-4 mb-8"
      >
        <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary">
          Portfolio Work
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight">
          Featured{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            Projects
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-base-content/60">
          Explore some of my recent work, where creativity meets technology
          to build modern, scalable, and impactful digital experiences.
        </p>

        <div className="flex items-center justify-center gap-2 pt-1">
          <span className="w-10 h-1 rounded-full bg-primary"></span>
          <span className="w-3 h-1 rounded-full bg-secondary"></span>
          <span className="w-10 h-1 rounded-full bg-primary/30"></span>
        </div>
      </motion.div>

      {showFilter && (
        <>
          <div className="flex gap-1 mb-8 justify-center items-center">
            <form className="filter flex flex-wrap justify-center items-center">
              <input className={`btn btn-square ${filter === 'All' ? 'btn-primary' : ''}`} onClick={() => setFilter("All")} type="reset" value="×" />
              {allTech.map(tech => (
                <input key={tech} className={`btn mb-1 ${filter === tech ? 'btn-primary' : ''}`} type="radio" onClick={() => setFilter(tech)} name={{ tech }} aria-label={tech} />
              ))}
            </form>
          </div>
        </>

      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {filteredProjects.map((project, idx) => (

          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            // whileHover={{ y: -8 }}
            transition={{
              type: "spring",
              duration: 0.5,
              stiffness: 180,
              damping: 18,
            }}
            className="group card bg-base-200/80 border border-base-content/10 hover:-translate-y-1.5 hover:border-primary/60 overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500"
          >
            {/* Project Image */}
            <div className="relative overflow-hidden p-3">
              <div className="relative overflow-hidden rounded-xl aspect-16/10 bg-base-300">
                <Image
                  src={project.picture.trim() !== "" ? project.picture : "/avater.png"}
                  height={400}
                  width={600}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-linear-to-t from-primary/40 via-transparent to-transparent opacity-60" />

                {/* <span className="absolute top-3 right-3 badge badge-primary font-semibold shadow-lg">
                  Featured Project
                </span> */}
              </div>
            </div>

            {/* Project Details */}
            <div className="card-body p-5 pt-2 gap-4">

              {/* Title */}
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-base-content group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h2>

                <div className="w-12 h-1 bg-linear-to-r from-primary to-secondary rounded-full mt-2 group-hover:w-20 transition-all duration-500" />
              </div>

              {/* Description */}
              <p className="text-sm md:text-base text-base-content/70">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-1">
                {project.technologies.map(tech => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-full text-xs bg-primary/10 text-primary border border-primary/20 hover:bg-primary hover:text-primary-content transition-all duration-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Divider */}
              <div className="border-t border-base-content/10" />

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 pt-1">
                {project.git_link && (
                  <Link
                    href={project.git_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline btn-primary flex-1 hover:scale-105 transition-all duration-300"
                  >
                    <i className="fa-brands fa-github text-base" />
                    Github
                  </Link>
                )}

                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary flex-1 hover:scale-105 transition-all duration-300 shadow-md shadow-primary/20"
                  >
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                    Live Preview
                  </Link>
                )}
              </div>

            </div>
          </motion.div>

        ))}
      </div>

      {limit && <Link href={'/project'} className="btn btn-outline btn-primary my-5 mx-6" >View More</Link>}
    </div>
  );
}
