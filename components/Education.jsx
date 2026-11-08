'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { education } from '@/lib/dataset';

export default function Education() {

  return (

    <section id="education" className="mb-2 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl sm:p-10">
      <div className="mx-auto mb-10 max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[.22em] text-primary">Academic background</p>
        <h2 className="mt-3 text-3xl font-black text-base-content sm:text-4xl">Education</h2>
        <p className="mt-3 leading-7 text-base-content/65">The academic foundation behind my interest in software, programming, and technology.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {education.map((edu, index) =>
          <motion.article key={edu.institution} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .4, delay: index * .07 }} className="rounded-2xl border border-base-300 bg-base-200/50 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary">
              <i className="fa-solid fa-graduation-cap" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{edu.year}</span>
              <span className="text-xs text-base-content/50">{edu.location}</span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-base-content">{edu.degree}</h3>
            <p className="mt-1 font-semibold text-secondary">{edu.institution}</p>
            <p className="mt-3 text-sm leading-6 text-base-content/65">{edu.details}</p>
          </motion.article>)}
      </div>
    </section>

    // <div id="education" className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl">
    //   <div className="mb-10 pt-3 relative z-10">
    //     <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
    //       className="glass px-6 py-3 rounded shadow-xl text-3xl text-center font-bold">
    //       Education
    //     </motion.p>
    //   </div>

    //   <div className="grid md:grid-cols-2 gap-6">
    //     {education.map((edu, idx) => (
    //       <motion.div key={idx} initial={{ opacity: 0, x: -40 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.02 }} transition={{ type: 'spring', damping: 15, stiffness: 200 }} className="card bg-base-200 hover:ring-1 ring-primary shadow-lg">
    //         <div className="card-body">
    //           <h3 className="card-title text-xl text-secondary">{edu.degree}</h3>
    //           <div className="flex items-center justify-between gap-2 mb-1">
    //             <span className="badge badge-outline badge-primary">{edu.institution}</span>
    //             <span className="badge badge-ghost">{edu.year}</span>
    //           </div>
    //           <small>{edu.location}</small>
    //           <p className="text-base-content/80">{edu.details}</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>
  );
}
