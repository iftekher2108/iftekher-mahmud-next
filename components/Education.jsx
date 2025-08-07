'use client'
import React from 'react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Diploma in Computer Technology',
    institution: 'Kustia Polytechnic Institute',
    year: '2019 - 2023',
    details: 'Graduated with honors, specialized in web development and Application development.'
  },
  {
    degree: 'Secondary School Certificate (SSc)',
    institution: 'Bheramara Pilot High School',
    year: '2020 - 2024',
    details: 'Graduated with honors, specialized in web development and UI/UX.'
  },
  // Add more education items as needed
];

export default function Education() {
  return (
    <div id="education" className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl">
      <div className="flex items-center justify-center mb-8 pt-10 relative z-10">
        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="text-center px-6 uppercase text-3xl font-bold section-title text-primary">
          Education
        </motion.span>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {educationData.map((edu, idx) => (
          <motion.div key={idx} initial={{opacity:0, x:-40}} animate={{opacity:1, x:0}} transition={{delay:idx*0.2}} className="card bg-base-200 shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-secondary">{edu.degree}</h3>
              <div className="flex items-center gap-2 mb-2">
                <span className="badge badge-outline badge-primary">{edu.institution}</span>
                <span className="badge badge-ghost">{edu.year}</span>
              </div>
              <p className="text-base-content/80">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
