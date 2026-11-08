'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { front_end, back_end, tools } from '@/lib/dataset';


export default function Skills() {

  const [isHovered, setIsHovered] = useState(null);

  return (
    <div id="skills" className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl">
      <div className="mb-10 pt-4 relative z-10">
        <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="glass px-6 py-3 uppercase text-xl text-center font-bold section-title">
          Skills
        </motion.p>
      </div>

      <h3 className=' font-semibold text-xl'> Frontend development </h3>
      <p className='text-sm mb-4'>Building responsive, accessible interfaces and interactive user experiences.</p>
      <ul className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 flex-wrap gap-3 justify-center mb-6">
        {front_end.map((frontend, idx) => (
          <li key={idx}
            onMouseEnter={() => setIsHovered(frontend.title)}
            onMouseLeave={() => setIsHovered(null)}
            className={`flex flex-row items-center gap-3 card p-4 shadow-lg border-2 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer select-none`}
            style={{
              borderColor: frontend.color,
              backgroundColor: isHovered == frontend.title ? frontend.color : ''
            }}
          >
            <Image src={frontend.picture} height={50} width={50} className='h-10 w-auto rounded-2xl' alt={frontend.title} />
            <p className='text-base-content font-bold'>{frontend.title}</p>
          </li>
        ))}
      </ul>

      {/* <div className='px-32 py-10'>
        <hr className='text-primary border-2 rounded' />
      </div> */}


      <h3 className=' font-semibold text-xl'> Backend development </h3>
      <p className='text-sm mb-4'>Developing application logic, APIs, authentication, and server-side features.</p>
      <ul className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 flex-wrap gap-3 justify-center mb-6">
        {back_end.map((backend, idx) => (
          <li key={idx}
            onMouseEnter={() => setIsHovered(backend.title)}
            onMouseLeave={() => setIsHovered(null)}
            className={`flex flex-row items-center gap-3 card p-4 shadow-lg border-2 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer select-none`}
            style={{
              borderColor: backend.color,
              backgroundColor: isHovered == backend.title ? backend.color : ''
            }}
          >
            <Image src={backend.picture} height={50} width={50} className='h-10 w-auto rounded-2xl' alt={backend.title} />
            <p className='text-base-content font-bold'>{backend.title}</p>
          </li>
        ))}
      </ul>

      {/* <div className='px-32 py-10'>
        <hr className='text-primary border-2 rounded' />
      </div> */}

      <h3 className=' font-semibold text-xl'> Tools & workflow </h3>
      <p className='text-sm mb-4'>Using development tools for version control, API testing, and daily delivery.</p>
      <ul className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 flex-wrap gap-3 justify-center mb-6">
        {tools.map((tool, idx) => (
          <li key={idx}
            onMouseEnter={() => setIsHovered(tool.title)}
            onMouseLeave={() => setIsHovered(null)}
            className={`flex flex-row items-center gap-3 card p-4 shadow-lg border-2 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer select-none`}
            style={{
              borderColor: tool.color,
              backgroundColor: isHovered == tool.title ? tool.color : ''
            }}
          >
            <Image src={tool.picture} height={50} width={50} className=' h-10 w-auto rounded-2xl' alt={tool.title} />
            <p className='text-base-content font-bold'>{tool.title}</p>
          </li>
        ))}
      </ul>

    </div>

  );
}
