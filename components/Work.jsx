'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { works } from '@/lib/dataset';


export default function Work() {

  return (

    <section id="work" className="mb-2 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl sm:p-10">
      <div className="mx-auto mb-10 max-w-2xl text-center"><p className="text-sm font-bold uppercase tracking-[.22em] text-primary">Career journey</p><h2 className="mt-3 text-3xl font-black text-base-content sm:text-4xl">Professional experience</h2><p className="mt-3 leading-7 text-base-content/65">Experience developing and maintaining websites and software solutions across business and client projects.</p></div>
      <div className="relative mx-auto max-w-4xl space-y-5 before:absolute before:bottom-8 before:left-[15px] before:top-8 before:w-px before:bg-base-300 sm:before:left-[19px]">{works.map((work, index) => <motion.article key={`${work.company}-${work.year}`} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .4, delay: index * .08 }} className="relative pl-11 sm:pl-14"><span className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border-4 border-base-100 bg-primary text-xs text-primary-content shadow sm:h-10 sm:w-10"><i className="fa-solid fa-briefcase" /></span><div className="rounded-2xl border border-base-300 bg-base-200/50 p-5 sm:p-6"><div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start"><div><h3 className="text-xl font-bold text-base-content">{work.title}</h3><p className="mt-1 font-semibold text-primary">{work.company}</p></div><span className="w-fit rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{work.year}</span></div><p className="mt-2 text-xs text-base-content/50"><i className="fa-solid fa-location-dot mr-2" />{work.location}</p><p className="mt-4 leading-7 text-base-content/70">{work.details}</p>{work.highlights?.length > 0 && <ul className="mt-4 space-y-2">{work.highlights.map(item => <li key={item} className="flex gap-2 text-sm leading-6 text-base-content/70"><i className="fa-solid fa-check mt-1 text-success" />{item}</li>)}</ul>}</div></motion.article>)}</div>
    </section>

    // <div id="work" className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl">
    //   <div className="mb-10 pt-3 relative z-10">
    //     <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
    //       className="glass px-6 py-3 uppercase text-xl font-bold text-center section-title">
    //       Work
    //     </motion.p>
    //   </div>
    //   <div className="grid md:grid-cols-2 gap-6">
    //     {works.map((work, idx) => (
    //       <motion.div key={idx} initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }} whileHover={{ scale: 1.02 }} transition={{ type: 'spring', damping: 15, stiffness: 200 }} className="card bg-base-200 hover:ring-1 ring-primary shadow-lg">
    //         <div className="card-body">
    //           <h3 className="card-title text-xl text-secondary">{work.title}</h3>
    //           <div className="flex items-center justify-between gap-2 mb-2">
    //             <span className="badge badge-outline badge-primary">{work.company}</span>
    //             <span className="badge badge-ghost">{work.year}</span>
    //           </div>
    //           <small>{work.location}</small>
    //           <p className="text-base-content/80">{work.details}</p>
    //         </div>
    //       </motion.div>
    //     ))}
    //   </div>
    // </div>
  );
}
