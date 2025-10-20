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
    <div id="projects" className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl">
      <div className="mb-12 pt-3 relative z-10">
        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="glass rounded-t px-6 py-4 capitalize text-3xl font-bold section-title bg-primary">
          Projects
        </motion.span>
      </div>
      {showFilter && (
        <>
          <div className="flex gap-1 mb-8 justify-center items-center">
            <form className="filter flex flex-wrap justify-center items-center gap-1">
              <input className={`btn btn-square ${filter === 'All' ? 'btn-primary' : ''}`} onClick={() => setFilter("All")} type="reset" value="×" />
              {allTech.map(tech => (
                <input key={tech} className={`btn ${filter === tech ? 'btn-primary' : ''}`} type="radio" onClick={() => setFilter(tech)} name={{ tech }} aria-label={tech} />
              ))}
            </form>
          </div>
        </>

      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {filteredProjects.map((project, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 200, damping: 18 }} className="card bg-base-200 border border-primary overflow-hidden shadow-lg hover:shadow-xl">
            <div className="flex justify-center items-center p-3 w-full">
              <Image src={project.picture.trim() !== '' ? project.picture : '/avater.png'} height={400} width={400} className='object-cover grow rounded-lg' alt={project.title} />
            </div>
            <div className="card-body">
              <h3 className="card-title text-primary mb-2">{project.title}</h3>
              <p className="text-base-content/100 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="badge badge-outline badge-secondary  shadow text-xs font-medium hover:scale-105 transition-all duration-300 ease-in-out">{tech}</span>
                ))}
              </div>
              <div className='flex gap-3 py-3 px-10'>
                {project.git_link && <Link href={project.git_link} target='_blank' className="btn btn-sm grow btn-accent hover:scale-105 btn-outline transition-all duration-300 ease-in-out">Github</Link>}
                {project.link && <Link href={project.link} target='_blank' className="btn btn-sm grow btn-success hover:scale-105 btn-outline transition-all duration-300 ease-in-out">View Project</Link>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {limit && <Link href={'/project'} className="btn btn-outline btn-primary my-5 mx-6" >View More</Link>}
    </div>
  );
}
