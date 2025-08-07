'use client'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';

export default function Skills() {

  const [isHovered, setIsHovered] = useState(null);

  const front_end = [
    {
      title: 'HTML',
      picture: '/icons/html.png',
      color: '#DA451D',
    },
    {
      title: 'CSS',
      picture: '/icons/css.png',
      color: '#3776B5',
    },
    {
      title: 'SCSS',
      picture: '/icons/scss.png',
      color: '#BE698F',
    },
    {
      title: 'Bootstrap',
      picture: '',
      color: '',
    },
    {
      title: 'Tailwind CSS',
      picture: '',
      color: '',
    },
    {
      title: 'JavaScript',
      picture: '',
      color: '',
    },
    {
      title: 'jQuery',
      picture: '',
      color: '',
    },
    {
      title: 'React.js',
      picture: '',
      color: '',
    },
    {
      title: 'Next.js',
      picture: '',
      color: '',
    },
    // 'PHP', 'Laravel', 'WordPress',
  ];


  return (
    <section id="skills" className="py-12 px-4 m-3 bg-base-100 rounded-2xl shadow-xl mb-8">
      <div className="flex items-center justify-center mb-8 pt-10 relative z-10">
        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center px-6 uppercase text-3xl font-bold section-title text-primary">
          Skills
        </motion.span>
      </div>
      <div className='my-3'>

      </div>
      <div className='grid lg:grid-cols-6 items-start gap-3'>
        <div className='col-span-1'>
          <h3 className='bg-primary md:text-center rounded-md p-3'>Front End </h3>
        </div>

        <div className='col-span-5'>
          <ul className="grid lg:grid-cols-6 flex-wrap gap-3 justify-center">
            {front_end.map((frontend, idx) => (
              <li key={idx}
              onMouseEnter={() => setIsHovered(idx)}
              onMouseLeave={() => setIsHovered(null)}
                className={`flex flex-col items-center justify-center gap-3 card p-4 shadow-lg border-2 hover:-translate-y-1 hover:scale-105 transition-all duration-300 cursor-pointer select-none`}
                style={{
                   borderColor: frontend.color,
                   backgroundColor: isHovered == idx ? frontend.color : ''
                  }}
              >
                <Image src={frontend.picture} height={50} width={50} className='rounded-2xl' alt={frontend.title} />
                <p className='text-base-content font-bold'>{frontend.title}</p>
              </li>
            ))}
          </ul>
        </div>

      </div>

    </section>
  );
}
