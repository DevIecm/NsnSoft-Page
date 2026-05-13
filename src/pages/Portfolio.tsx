import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Minimalist Architecture',
    category: 'Architecture',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1280&auto=format&fit=crop'
  },
  {
    id: 2,
    title: 'Brand Identity System',
    category: 'Branding',
    year: '2023',
    image: 'https://images.unsplash.com/photo-1549421263-5ec394a5ad4c?q=80&w=1280&auto=format&fit=crop'
  },
  {
    id: 3,
    title: 'Eco-Friendly Product',
    category: 'Product Design',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1280&auto=format&fit=crop'
  },
  {
    id: 4,
    title: 'Mobile Banking App',
    category: 'UI/UX Design',
    year: '2022',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1280&auto=format&fit=crop'
  },
  {
    id: 5,
    title: 'Urban Garden App',
    category: 'Mobile Dev',
    year: '2021',
    image: 'https://images.unsplash.com/photo-1416870230247-d04e44a21822?q=80&w=1280&auto=format&fit=crop'
  },
  {
    id: 6,
    title: 'Coffee Roasters Web',
    category: 'Web Design',
    year: '2024',
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?q=80&w=1280&auto=format&fit=crop'
  }
];

export const Portfolio = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-2xl mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-primary"
          >
            Nuestros <span className="text-secondary">Proyectos</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-on-surface-variant font-medium"
          >
            Explora una selección de trabajos creados meticulosamente, donde la funcionalidad se encuentra con la belleza.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-20">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 2) * 0.2 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] mb-8">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/60 to-transparent flex justify-between items-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                  <div className="bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-white text-xs font-mono uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-black group-hover:text-secondary transition-colors mb-2">{project.title}</h3>
                  <div className="flex items-center gap-4 text-on-surface-variant font-medium">
                    <span>{project.category}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-surface-container-highest" />
                    <span>{project.year}</span>
                  </div>
                </div>
                <div className="w-12 h-12 rounded-full border border-surface-container flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all transform group-hover:rotate-45">
                  <ArrowUpRight className="w-6 h-6" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
