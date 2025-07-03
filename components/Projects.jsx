'use client'
import { useState } from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A creative portfolio built with Next.js and Tailwind CSS.',
    technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
    link: '#'
  },
  {
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce platform using React and Node.js.',
    technologies: ['React', 'Node.js', 'SCSS'],
    link: '#'
  },
  {
    title: 'WordPress Blog',
    description: 'A custom blog theme for WordPress.',
    technologies: ['WordPress', 'PHP', 'SCSS'],
    link: '#'
  },
  // Add more projects as needed
];

const allTech = Array.from(new Set(projects.flatMap(p => p.technologies)));


export default function Projects({ showFilter = true }) {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.technologies.includes(filter));

  return (
    <section id="projects" className="py-12 m-3 px-4 bg-base-100 rounded-2xl shadow-xl mb-8">
      <motion.h2 initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-3xl font-bold mb-8 text-primary">Projects</motion.h2>
      {showFilter && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button onClick={() => setFilter('All')} className={`btn btn-sm btn-outline ${filter==='All' ? 'btn-primary' : ''}`}>All</button>
          {allTech.map(tech => (
            <button key={tech} onClick={() => setFilter(tech)} className={`btn btn-sm btn-outline ${filter===tech ? 'btn-primary' : ''}`}>{tech}</button>
          ))}
        </div>
      )}
      <div className="grid md:grid-cols-2 gap-8">
        {filteredProjects.map((project, idx) => (
          <motion.div key={idx} initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{delay:idx*0.2}} className="card bg-base-200 shadow-lg hover:shadow-xl transition-shadow">
            <div className="card-body">
              <h3 className="card-title text-secondary mb-2">{project.title}</h3>
              <p className="text-base-content/80 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="badge badge-outline badge-accent text-xs font-medium">{tech}</span>
                ))}
              </div>
              {project.link && <a href={project.link} className="btn btn-xs btn-primary btn-outline">View Project</a>}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
