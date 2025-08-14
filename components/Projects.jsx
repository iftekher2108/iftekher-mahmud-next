'use client'
import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';



export default function Projects({ showFilter = true, limit }) {

  const projects = [
    {
      title: 'Material Calculation Software',
      picture: '/projects/material-calculation-software.jpg',
      description: 'Matel Calculation is a simple online tool to quickly find the weight of metal shapes like round bars, tubes, sheets, and more. Enter your dimensions, choose the shape, and get results instantly. Designed by Iftekher Mahmud for fast, accurate, and hassle-free metal weight calculations.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Daisy UI'],
      git_link: '',
      link: 'https://matel-calculation-next.vercel.app'
    },
    {
      title: 'Image Edit Software',
      picture: '/projects/image-editing-software.jpg',
      description: 'Image Edit Software is a free, easy-to-use online tool for editing photos. You can quickly adjust brightness, contrast, saturation, hue, grayscale, invert, sepia, blur, and more. It also lets you rotate images, reset filters, and save your edits instantly. This tool has a clean interface so anyone can edit images without hassle.',
      technologies: ['React.js', 'Next.js', 'Tailwind CSS', 'Daisy UI'],
      git_link: '',
      link: 'https://image-edit-software.vercel.app'
    },
    {
      title: 'Restaurant Website',
      picture: "/projects/restuarent-Project.jpg",
      description: 'Restaurant Template is a sleek, responsive website design tailored for food businesses. It features sections like About Us, Menu, Offers, Gallery, and Contact, all crafted with modern aesthetics and user-friendly navigation. Perfect for showcasing your culinary delights online.',
      technologies: ['HTML', 'CSS', 'SCSS', 'BOOTSTRAP', 'JAVASCRIPT', 'JQUERY'],
      git_link: '',
      link: 'https://iftekher2108.github.io/restaurent-templete'
    },
    {
      title: 'Happiness Website',
      picture: "/projects/happiness-project.jpg",
      description: 'Happiness Template is a vibrant, modern consultancy landing page offering sections like How Happy Are You?, Who We Are, Client Relationships, Our Team, and a newsletter. Clean layout, engaging visuals—just explore and connect.',
      technologies: ['HTML', 'CSS', 'SCSS', 'BOOTSTRAP', 'JAVASCRIPT', 'JQUERY'],
      git_link: '',
      link: 'https://iftekher2108.github.io/happiness-template'
    },
    {
      title: 'Pet Consultancy Website',
      picture: "/projects/pet-consultency-Project-Presentation.jpg",
      description: 'Pet Consultancy Template is a cozy, modern landing page for pet care services. With sections like Home, About, Services (vet care, dental care, vaccination), team intros, blog posts, and pet adoption promos, it\'s pawsitively perfect for vet businesses.',
      technologies: ['HTML', 'CSS', 'SCSS', 'BOOTSTRAP', 'JAVASCRIPT', 'JQUERY', 'PLUGINS'],
      git_link: '',
      link: 'https://iftekher2108.github.io/pet-consultency-templete'
    },
    {
      title: 'TATA Website Clone',
      picture: "/projects/tata-web-clone.png",
      description: 'This is a front-end clone of the official Tata website recreated. The goal was to replicate Tata’s clean, corporate design with responsive layouts, smooth navigation, and accurate section structure, including Business, Community, Careers, and more. It’s built purely for learning and practice—no official affiliation with Tata.',
      technologies: ['HTML', 'CSS', 'SCSS', 'BOOTSTRAP', 'JAVASCRIPT', 'JQUERY', 'PLUGINS'],
      git_link: '',
      link: 'https://iftekher2108.github.io/tata-web'
    },
    {
      title: 'US Whole Sale Clone',
      picture: "/projects/us-whole-sale.png",
      description: 'UK Wholesale Template is a clean, professional B2B e-commerce template. It showcases bulk products across categories like toys, kitchenware, health & beauty, and homeware. Designed for easy customization, it’s perfect for creating a wholesale website with intuitive browsing, product listings, and pricing layouts.',
      technologies: ['HTML', 'CSS', 'SCSS', 'BOOTSTRAP', 'JAVASCRIPT', 'JQUERY', 'PLUGINS'],
      git_link: '',
      link: 'https://iftekher2108.github.io/uk-whole-sale'
    },
    {
      title: 'Currency Converter',
      picture: "/projects/currency-converter.jpg",
      description: 'Currency Converter is a sleek, responsive web app that lets you instantly convert over 100 currencies. With a clean interface and real-time exchange rates, it\'s perfect for travelers, freelancers, or anyone needing quick, accurate conversions.',
      technologies: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'Axios', 'JQUERY', 'PLUGINS'],
      git_link: '',
      link: 'https://iftekher2108.github.io/currency-converter'
    },
    {
      title: 'Simple Calculator',
      picture: "/projects/calculator-Project-Presentation.png",
      description: 'Calculator Project is a sleek, responsive web calculator built with HTML, CSS, and JavaScript. It features all the essentials—addition, subtraction, multiplication, division, percentage, and clear/reset functions. Designed for both desktop and mobile use, it\'s a clean and functional tool for everyday calculations.',
      technologies: ['HTML', 'CSS', 'JAVASCRIPT'],
      git_link: '',
      link: 'https://iftekher2108.github.io/calculator-project'
    },
    {
      title: 'Vue Currency Coverter',
      picture: "/projects/vue-currency-coverter.jpg",
      description: 'Vue Currency Converter is a sleek, real-time web app built with Vue 3, Vite. It lets you effortlessly convert between multiple currencies With a clean interface and live exchange rates, it\'s perfect for travelers, freelancers, or anyone needing quick, accurate conversions.',
      technologies: ['HTML', 'CSS', 'BOOTSTRAP', 'JAVASCRIPT', 'Vue JS','Axios'],
      git_link: '',
      link: 'https://vue-currency-convert.netlify.app'
    },
    // Add more projects as needed
  ];


  const allTech = Array.from(new Set(projects.flatMap(p => p.technologies)));

  const [filter, setFilter] = useState('All');
  let filteredProjects = filter === 'All' ? projects : projects.filter(p => p.technologies.includes(filter));
  if (limit && typeof limit === 'number') {
    filteredProjects = filteredProjects.slice(0, limit);
  }

  return (
    <div id="projects" className="card md:p-6 p-2 mb-2 bg-base-100 shadow-xl">
      <div className="flex items-center justify-center mb-8 pt-10 relative z-10">
        <motion.span initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
          className="text-center px-6 uppercase text-3xl font-bold section-title text-primary">
          Projects
        </motion.span>
      </div>
      {showFilter && (
        <>
          <div className="flex gap-1 mb-8 justify-center items-center">
            <form className="filter flex flex-wrap justify-center items-center gap-1">
              <input className={`btn btn-square ${filter === 'All' ? 'btn-primary' : ''}`} onClick={() => setFilter("All")} type="reset" value="×" />
              {allTech.map(tech => (
                <input key={tech} className={`btn ${filter === tech ? 'btn-primary' : ''}`} type="radio" onClick={() => setFilter(tech)} name={{ tech }} aria-label={tech} />
              ))}
            </form>
          </div>
        </>

      )}
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
        {filteredProjects.map((project, idx) => (
          <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} whileHover={{ y: -10 }} transition={{ type: 'spring', stiffness: 200, damping: 18 }} className="card bg-base-200 border border-primary overflow-hidden shadow-lg hover:shadow-xl">
            <div className="flex justify-center items-center p-3 w-full">
              <Image src={project.picture.trim() !== '' ? project.picture : '/avater.png'} height={400} width={400} className='object-cover grow rounded-lg' alt={project.title} />
            </div>
            <div className="card-body">
              <h3 className="card-title text-primary mb-2">{project.title}</h3>
              <p className="text-base-content/100 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.technologies.map(tech => (
                  <span key={tech} className="badge badge-outline badge-secondary  shadow text-xs font-medium hover:scale-105 transition-all duration-300 ease-in-out">{tech}</span>
                ))}
              </div>
              <div className='flex gap-3 py-3 px-10'>
                {project.git_link && <Link href={project.git_link} target='_blank' className="btn btn-sm grow btn-accent hover:scale-105 btn-outline transition-all duration-300 ease-in-out">Github</Link>}
                {project.link && <Link href={project.link} target='_blank' className="btn btn-sm grow btn-success hover:scale-105 btn-outline transition-all duration-300 ease-in-out">View Project</Link>}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {limit && <Link href={'/project'} className="btn btn-outline btn-primary my-5 mx-6" >View More</Link>}
    </div>
  );
}
