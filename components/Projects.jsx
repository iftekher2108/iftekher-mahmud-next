'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

const projects = [
  {
    title: 'Material Calculation Software',
    picture:'/projects/material-calculation-software.jpg',
    description: 'A creative portfolio built with Next.js and Tailwind CSS and Daisy UI .',
    technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Daisy UI'],
    git_link: '',
    link: 'https://matel-calculation-next.vercel.app'
  },
  {
    title: 'E-commerce Platform',
    picture:'/projects/image-editing-software.jpg',
    description: 'A scalable Image Editing Software platform using React and Next.js.',
    technologies: ['React.js', 'Next.js', 'Node.js', 'Tailwind CSS', 'Daisy UI'],
    git_link:'',
    link: 'https://image-edit-software.vercel.app'
  },
  {
    title: 'WordPress Blog',
    picture:"",
    description: 'A custom blog theme for WordPress.',
    technologies: ['WordPress', 'PHP', 'SCSS'],
    git_link:'',
    link: '#'
  },
  // Add more projects as needed
];

const allTech = Array.from(new Set(projects.flatMap(p => p.technologies)));


export default function Projects({ showFilter = true }) {
  const [filter, setFilter] = useState('All');
  const filteredProjects = filter === 'All' ? projects : projects.filter(p => p.technologies.includes(filter));

  return (
    <div id="projects" className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl">
      <div className="flex items-center justify-center mb-8 pt-10 relative z-10">
        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center px-6 uppercase text-3xl font-bold section-title text-primary">
          Projects
        </motion.span>
      </div>
      {showFilter && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <button onClick={() => setFilter('All')} className={`btn ${filter === 'All' ? 'btn-primary' : ''}`}>All</button>
          {allTech.map(tech => (
            <button key={tech} onClick={() => setFilter(tech)} className={`btn  ${filter === tech ? 'btn-primary' : ''}`}>{tech}</button>
          ))}
        </div>
      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {filteredProjects.map((project, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: idx * 0.2 }} className="card bg-base-200 transition-all border hover:-translate-y-1.5 border-primary overflow-hidden duration-300 shadow-lg hover:shadow-xl ">
            <div className="flex justify-center items-center p-3 w-full">
              <Image src={project.picture.trim() !== '' ? project.picture : '/avater.png'} height={400} width={400} className='object-cover grow rounded-lg' alt={project.title} />
            </div>
            <div className="card-body">
              <h3 className="card-title text-primary mb-2">{project.title}</h3>
              <p className="text-base-content/100 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="badge badge-secondary shadow text-xs font-medium">{tech}</span>
                ))}
              </div>
              <div className='flex gap-3 py-3 px-10'>
                {project.git_link && <Link href={project.git_link} target='_blank' className="btn btn-sm grow btn-accent btn-outline">Github</Link>}
                {project.link && <Link href={project.link} target='_blank' className="btn btn-sm grow btn-success btn-outline">View Project</Link>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
