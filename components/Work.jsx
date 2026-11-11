'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { works } from '@/lib/dataset';


export default function Work() {

  return (

    <section id="work" className="mb-2 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl sm:p-10">


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-4 mt-4 mb-8"
      >
        <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary">
          Career Journey
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          Professional{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            Experience
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-base-content/60 leading-relaxed">
          Explore my professional journey, showcasing my experience
          in developing and maintaining modern websites and software
          solutions across business and client projects.
        </p>

        <div className="flex items-center justify-center gap-2 pt-1">
          <span className="w-10 h-1 rounded-full bg-primary"></span>
          <span className="w-3 h-1 rounded-full bg-secondary"></span>
          <span className="w-10 h-1 rounded-full bg-primary/30"></span>
        </div>
      </motion.div>


      <div className="relative mx-auto max-w-4xl space-y-5 before:absolute before:bottom-8 before:left-3.75 before:top-8 before:w-px before:bg-base-300 sm:before:left-4.75">
        {works.map((work, index) =>
          <motion.article key={`${work.company}-${work.year}`} initial={{ opacity: 0, x: 16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .4, delay: index * .08 }} className="relative pl-11 sm:pl-14">
            <span className="absolute left-0 top-6 flex h-8 w-8 items-center justify-center rounded-full border-4 border-base-100 bg-primary text-xs text-primary-content shadow sm:h-10 sm:w-10">
              <i className="fa-solid fa-briefcase" />
            </span>
            <div className="rounded-2xl border border-base-300 bg-base-200/50 p-5 sm:p-6">
              <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                <div>
                  <h3 className="text-xl font-bold text-base-content">
                    {work.title}
                  </h3>
                  <p className="mt-1 font-semibold text-primary">{work.company}</p>
                </div>
                <span className="w-fit rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">{work.year}</span>
              </div>
              <p className="mt-2 text-xs text-base-content/50">
                <i className="fa-solid fa-location-dot mr-2" />{work.location}</p>
              <p className="mt-4 text-base-content/70">{work.details}</p>
              {work.highlights?.length > 0 &&
                <ul className="mt-4 space-y-2">
                  {work.highlights.map(item =>
                    <li key={item} className="flex gap-2 text-sm leading-6 text-base-content/70">
                      <i className="fa-solid fa-check mt-1 text-success" />
                      {item}
                    </li>)}
                </ul>}
            </div>
          </motion.article>)}
      </div>

    </section>

  );
}
