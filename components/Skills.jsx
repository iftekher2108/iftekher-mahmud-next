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
      picture: '/icons/bootstrap.png',
      color: '#6428DB',
    },
    {
      title: 'Tailwind CSS',
      picture: '/icons/tailwindcss.png',
      color: '#00A7BB',
    },
    {
      title: 'JavaScript',
      picture: '/icons/javascript.png',
      color: '#F0DB4F',
    },
    {
      title: 'jQuery',
      picture: '/icons/jquery.png',
      color: '#196BAC',
    },
    {
      title: 'Vue.js',
      picture: '/icons/vue.png',
      color: '#41b883',
    },
    {
      title: 'React.js',
      picture: '/icons/react.png',
      color: '#61DBFB',
    },
    {
      title: 'Daisy UI',
      picture: '/icons/daisy-ui.png',
      color: '#FFC841',
    },
    {
      title: 'Mui',
      picture: '/icons/mui.png',
      color: '#0883FF',
    },
    {
      title: 'Next.js',
      picture: '/icons/nextjs.png',
      color: '#000000',
    },
    {
      title: 'WordPress',
      picture: '/icons/wordpress.png',
      color: ' #21759b ',
    },
  ];

  // backend
    const back_end = [
    {
      title: 'PHP',
      picture: '/icons/php.png',
      color: '#7178AA',
    },
    {
      title: 'Inertia.js',
      picture: '/icons/inertia.jpeg',
      color: '#9659EA',
    },
    {
      title: 'Laravel',
      picture: '/icons/laravel.png',
      color: '#fb503b',
    },
    {
      title: 'Node.js',
      picture: '/icons/nodejs.png',
      color: '#68a063',
    },
    {
      title: 'Express.js',
      picture: '/icons/express-js.png',
      color: '#080808',
    },
    {
      title: 'Python',
      picture: '/icons/python.png',
      color: '#FFD43B',
    },
    {
      title: 'Next',
      picture: '/icons/nextjs.png',
      color: '#000000',
    },
    {
      title: 'MySQL',
      picture: '/icons/mysql.png',
      color: '#00758f',
    },
  ];


    // Tools
    const tools = [
    {
      title: 'Git',
      picture: '/icons/Git.png',
      color: '#f1502f',
    },
    {
      title: 'Github',
      picture: '/icons/github.png',
      color: '#24292e',
    },
    {
      title: 'Postman',
      picture: '/icons/postman.png',
      color: '#EF5B25',
    },
    {
      title: 'Linux',
      picture: '/icons/Linux.png',
      color: '#000000',
    },
    {
      title: 'Windows',
      picture: '/icons/windows.png',
      color: '#00AEEE',
    },
    {
      title: 'pnpm',
      picture: '/icons/npm.png',
      color: '#CC3534',
    },
    // {
    //   title: 'Next',
    //   picture: '/icons/nextjs.png',
    //   color: '#000000',
    // },
    // {
    //   title: 'MySQL',
    //   picture: '/icons/mysql.png',
    //   color: '#00758f',
    // },
  ];


  return (
    <div id="skills" className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl">
      <div className="flex items-center justify-center mb-8 pt-10 relative z-10">
        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center px-6 uppercase text-3xl font-bold section-title text-primary">
          Skills
        </motion.span>
      </div>

      <h3 className=' border-primary border-s border-b-4 font-bold uppercase text-xl border-e text-center rounded-md p-3 mb-4'> Front - End </h3>
      <ul className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 flex-wrap gap-3 justify-center">
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

        <div className='px-32 py-10'>
          <hr className='text-primary border-2 rounded' />
        </div>
      

      <h3 className=' border-primary border-s border-b-4 font-bold uppercase text-xl border-e text-center rounded-md p-3 mb-4'> Back - End </h3>
      <ul className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 flex-wrap gap-3 justify-center">
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

       <div className='px-32 py-10'>
          <hr className='text-primary border-2 rounded' />
        </div>

      <h3 className=' border-primary border-s border-b-4 font-bold uppercase text-xl border-e text-center rounded-md p-3 mb-4'> Tools </h3>
      <ul className="grid lg:grid-cols-6 md:grid-cols-3 grid-cols-2 flex-wrap gap-3 justify-center">
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
