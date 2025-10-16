'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { front_end, back_end, tools } from '@/lib/dataset';


export default function Skills() {

  const [isHovered, setIsHovered] = useState(null);

  return (
    <div id="skills" className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl">
      <div className="flex items-center justify-center mb-8 pt-10 relative z-10">
        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center px-6 uppercase text-3xl font-bold section-title text-primary">
          Skills
        </motion.span>
      </div>

      <h3 className=' border-primary border-s border-b-4 font-bold uppercase text-xl border-e text-center rounded-md p-3 mb-4'> Front - End </h3>
      <ul className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 flex-wrap gap-3 justify-center mb-6">
        {front_end.map((frontend, idx) => (
          <li key={idx}
            onMouseEnter={() => setIsHovered(frontend.title)}
            onMouseLeave={() => setIsHovered(null)}
            className={`flex flex-col items-center justify-center gap-3 card p-4 shadow-lg border-2 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer select-none`}
            style={{
              borderColor: frontend.color,
              backgroundColor: isHovered == frontend.title ? frontend.color : ''
            }}
          >
            <Image src={frontend.picture} height={50} width={50} className='rounded-2xl' alt={frontend.title} />
            <p className='text-base-content font-bold'>{frontend.title}</p>
          </li>
        ))}
      </ul>

      {/* <div className='px-32 py-10'>
        <hr className='text-primary border-2 rounded' />
      </div> */}


      <h3 className=' border-primary border-s border-b-4 font-bold uppercase text-xl border-e text-center rounded-md p-3 mb-4'> Back - End </h3>
      <ul className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 flex-wrap gap-3 justify-center mb-6">
        {back_end.map((backend, idx) => (
          <li key={idx}
            onMouseEnter={() => setIsHovered(backend.title)}
            onMouseLeave={() => setIsHovered(null)}
            className={`flex flex-col items-center justify-center gap-3 card p-4 shadow-lg border-2 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer select-none`}
            style={{
              borderColor: backend.color,
              backgroundColor: isHovered == backend.title ? backend.color : ''
            }}
          >
            <Image src={backend.picture} height={50} width={50} className='rounded-2xl' alt={backend.title} />
            <p className='text-base-content font-bold'>{backend.title}</p>
          </li>
        ))}
      </ul>

      {/* <div className='px-32 py-10'>
        <hr className='text-primary border-2 rounded' />
      </div> */}

      <h3 className=' border-primary border-s border-b-4 font-bold uppercase text-xl border-e text-center rounded-md p-3 mb-4'> Tools </h3>
      <ul className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 flex-wrap gap-3 justify-center mb-6">
        {tools.map((tool, idx) => (
          <li key={idx}
            onMouseEnter={() => setIsHovered(tool.title)}
            onMouseLeave={() => setIsHovered(null)}
            className={`flex flex-col items-center justify-center gap-3 card p-4 shadow-lg border-2 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer select-none`}
            style={{
              borderColor: tool.color,
              backgroundColor: isHovered == tool.title ? tool.color : ''
            }}
          >
            <Image src={tool.picture} height={50} width={50} className='rounded-2xl' alt={tool.title} />
            <p className='text-base-content font-bold'>{tool.title}</p>
          </li>
        ))}
      </ul>

    </div>

  );
}
