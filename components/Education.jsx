'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { education } from '@/lib/dataset';

export default function Education() {

  return (

    <section id="education" className="mb-2 rounded-3xl border border-base-300 bg-base-100 p-6 shadow-xl sm:p-10">


      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-center space-y-4 mt-4 mb-8"
      >
        <span className="inline-block px-4 py-1.5 text-sm font-semibold tracking-widest uppercase rounded-full bg-primary/10 text-primary">
          Academic Background
        </span>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
          My{" "}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-secondary">
            Education
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base md:text-lg text-base-content/60 leading-relaxed">
          Discover my academic journey and educational foundation,
          which shaped my passion for software development,
          programming, and modern technology.
        </p>

        <div className="flex items-center justify-center gap-2 pt-1">
          <span className="w-10 h-1 rounded-full bg-primary"></span>
          <span className="w-3 h-1 rounded-full bg-secondary"></span>
          <span className="w-10 h-1 rounded-full bg-primary/30"></span>
        </div>
      </motion.div>



      <div className="grid gap-4 md:grid-cols-2">
        {education.map((edu, index) =>
          <motion.article key={edu.institution} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .15 }} transition={{ duration: .4, delay: index * .07 }} className="rounded-2xl border border-base-300 bg-base-200/50 p-6">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-xl text-primary">
              <i className="fa-solid fa-graduation-cap" />
            </div>
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="text-xs text-base-content/50">{edu.location}</span>
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-bold text-primary">{edu.year}</span>
            </div>
            <h3 className="mt-4 text-lg font-bold text-base-content">{edu.degree}</h3>
            <p className="mt-1 font-semibold text-primary">{edu.institution}</p>
            <p className="mt-3 text-base-content/65">{edu.details}</p>
          </motion.article>)}
      </div>

    </section>


  );
}
