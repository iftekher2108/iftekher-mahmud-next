'use client'
import React from 'react';
import { motion } from 'framer-motion';

const workData = [
  {
    title: 'Frontend Developer',
    company: 'Tech Company',
    year: '2024 - Present',
    details: 'Building modern web applications with React and Next.js.'
  },
  // Add more work items as needed
];

export default function Work() {
  return (
    <section id="work" className="py-12 px-4 m-3 bg-base-100 rounded-2xl shadow-xl mb-8">
      <motion.h2 initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={{duration:0.6}} className="text-3xl font-bold mb-8 text-primary">Work</motion.h2>
      <div className="grid md:grid-cols-2 gap-6">
        {workData.map((work, idx) => (
          <motion.div key={idx} initial={{opacity:0, x:40}} animate={{opacity:1, x:0}} transition={{delay:idx*0.2}} className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-secondary">{work.title}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge badge-outline badge-primary">{work.company}</span>
                <span className="badge badge-ghost">{work.year}</span>
              </div>
              <p className="text-base-content/80">{work.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
