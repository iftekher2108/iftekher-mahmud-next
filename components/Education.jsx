'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { education } from '@/lib/dataset';

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
        {education.map((edu, idx) => (
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
