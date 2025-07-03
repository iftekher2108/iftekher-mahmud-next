'use client'
import React from 'react';
import { motion } from 'framer-motion';

const skills = [
  'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'Node.js', 'PHP', 'Laravel', 'WordPress', 'SCSS', 'jQuery'
];

export default function Skills() {
  return (
    <section id="skills" className="py-12 px-4 m-3 bg-base-100 rounded-2xl shadow-xl mb-8">
      <motion.h2 initial={{opacity:0, y:40}} animate={{opacity:1, y:0}} transition={{duration:0.4}} className="text-3xl font-bold mb-8 text-primary">Skills</motion.h2>
      <motion.ul className="flex flex-wrap gap-6 justify-center">
        {skills.map((skill, idx) => (
          <motion.li
            key={skill}
            initial={{opacity:0, scale:0.7, y:40}}
            animate={{opacity:1, scale:1, y:0}}
            whileHover={{
              y: -6,
              backgroundColor: "#6366f1",
              color: "#fff"
            }}
            transition={{type:'tween', ease:'easeInOut'}}
            className="flex items-center justify-center w-44 h-28 bg-primary/80 rounded-2xl shadow-lg border-2 border-primary/20 text-xl font-bold text-white hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer select-none"
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
    </section>
  );
}
