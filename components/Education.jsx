'use client'
import React from 'react';
import { motion } from 'framer-motion';


export default function Education() {

  const educationData = [
    {
      degree: 'Diploma in Computer Technology',
      institution: 'Kustia Polytechnic Institute',
      location: 'Kushtia',
      year: '2019 - 2023',
      details: `I completed my Diploma in Computer Technology from Kushtia Polytechnic Institute, where I built a strong foundation in IT.
      The program covered programming, web development, networking, database management, and hardware.
      I gained hands-on experience through labs, projects, and technical workshops.
      Languages like HTML, CSS,Python, Javascipt, PHP, C# and Java were key parts of my training.
      This diploma equipped me with practical skills for real-world tech challenges.
      `
    },
    {
      degree: 'Secondary School Certificate (SSc)',
      institution: 'Bheramara Pilot High School',
      location: "Bheramara, Kushtia",
      year: '2017 - 2018',
      details: `Successfully completed the Secondary School Certificate under the
      Dhaka Education Board, focusing on core subjects including Mathematics, English, and Computer Tech. Developed a strong academic foundation, discipline,
      and teamwork skills through both curricular and extracurricular activities.`
    },
    // Add more education items as needed
  ];

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
          <motion.div key={idx} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.02 }} transition={{ type: 'spring', damping: 15, stiffness: 200 }} className="card bg-base-200 hover:ring-1 ring-primary shadow-lg">
            <div className="card-body">
              <h3 className="card-title text-xl text-secondary">{edu.degree}</h3>
              <div className="flex items-center justify-between gap-2 mb-1">
                <span className="badge badge-outline badge-primary">{edu.institution}</span>
                <span className="badge badge-ghost">{edu.year}</span>
              </div>
              <small>{edu.location}</small>
              <p className="text-base-content/80">{edu.details}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
