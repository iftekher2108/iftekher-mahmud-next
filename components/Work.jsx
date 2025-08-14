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
      details: 'Developing modern, high-performance web applications using React, React-native, PHP, Laravel. Focused on building responsive, user-friendly interfaces, optimizing application performance, and implementing scalable front-end architectures. Collaborating closely with designers and backend teams to deliver seamless digital experiences.'
    },
    {
      title: 'Web Developer',
      company: 'Security Automation System',
      year: '2022 - 2023',
      location: 'Shyamoli, Dhaka',
      details: 'Designed and developed dynamic websites using WordPress, HTML, CSS, JavaScript, and jQuery. Implemented custom themes, optimized layouts for responsiveness, and integrated various plugins to enhance website functionality and user experience.'
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
