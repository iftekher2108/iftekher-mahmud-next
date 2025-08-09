'use client'
import React from 'react';
import { motion } from 'framer-motion';



export default function Work() {
  const workData = [
    {
      title: 'Software Engineer',
      company: 'Innovative Soft',
      year: '2023 - Present',
      location: 'Dhanmondi, Dhaka',
      details: 'Building modern web applications with React and Next.js.'
    },
    {
      title: 'Web Developer',
      company: 'Shyamoli, Dhaka',
      year: '2022 - 2023',
      location: '',
      details: 'Building modern web applications with React and Next.js.'
    },
    // Add more work items as needed
  ];
  return (
    <div id="work" className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl">
      <div className="flex items-center justify-center mb-8 pt-10 relative z-10">
        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center px-6 uppercase text-3xl font-bold section-title text-primary">
          Work
        </motion.span>
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {workData.map((work, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.02 }} transition={{ type: 'spring', damping: 15, stiffness: 200 }} className="card bg-base-200 hover:ring-1 ring-primary shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl text-secondary">{work.title}</h3>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="badge badge-outline badge-primary">{work.company}</span>
                <span className="badge badge-ghost">{work.year}</span>
              </div>
              <small>{work.location}</small>
              <p className="text-base-content/80">{work.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
