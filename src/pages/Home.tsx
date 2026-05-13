import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Monitor, Smartphone, Layout, Palette } from 'lucide-react';

const featuredProjects = [
  {
    id: 1,
    title: 'Brand Vision',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=1280&auto=format&fit=crop',
    size: 'large'
  },
  {
    id: 2,
    title: 'Natura App',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 3,
    title: 'Modern Living',
    category: 'Architecture',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop',
    size: 'small'
  },
  {
    id: 4,
    title: 'Zenith Watches',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1280&auto=format&fit=crop',
    size: 'wide'
  }
];

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-secondary/5 rounded-full blur-[120px] -z-10" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary-container/10 text-secondary text-sm font-bold mb-8">
            <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
            OPEN TO NEW PROJECTS
          </div>

          <h1 className="text-5xl md:text-8xl font-black mb-8 leading-[1.1] tracking-tight text-primary">
            Diseñando experiencias digitales <span className="text-secondary">excepcionales</span>
          </h1>

          <p className="text-xl md:text-2xl text-on-surface-variant mb-12 max-w-2xl mx-auto font-medium">
            Transformamos ideas complejas en interfaces intuitivas y estéticas que conectan con las personas.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-primary text-on-primary px-8 py-4 rounded-full text-lg font-bold flex items-center justify-center gap-2 shadow-xl shadow-primary/20"
            >
              Ver Proyectos
              <ArrowUpRight className="w-5 h-5" />
            </motion.button>
            {/* <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto bg-white border border-surface-container-high text-primary px-8 py-4 rounded-full text-lg font-bold hover:bg-surface-container-low transition-colors"
            >
              Hablemos
            </motion.button> */}
          </div>
        </motion.div>
      </section>

      {/* Featured Work Grid */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Proyectos Destacados</h2>
            <p className="text-xl text-on-surface-variant font-medium">
              Una selección de mis trabajos más recientes en branding, UI/UX y diseño de producto.
            </p>
          </div>
          <button className="text-secondary font-bold flex items-center gap-2 hover:underline">
            Ver todo el portafolio <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl cursor-pointer ${project.size === 'large' ? 'md:row-span-2' : ''
                }`}
            >
              <div className="aspect-[4/5] md:aspect-square lg:aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 opacity-0 group-hover:opacity-100">
                <span className="text-white/70 font-mono text-xs uppercase tracking-widest mb-2">
                  {project.category}
                </span>
                <h3 className="text-white text-3xl font-black">{project.title}</h3>
                <div className="mt-4 flex items-center gap-2 text-white font-bold text-sm">
                  Ver detalle <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-surface-container-low px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Servicios Creativos</h2>
            <p className="text-xl text-on-surface-variant font-medium">
              Ofrezco soluciones integrales de diseño para empresas que buscan destacar en el entorno digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Monitor />, title: 'Web Design', desc: 'Interfaces modernas y responsivas que convierten.' },
              { icon: <Smartphone />, title: 'App Design', desc: 'Experiencias móviles centradas en el usuario.' },
              { icon: <Layout />, title: 'Branding', desc: 'Identidades visuales con propósito y carácter.' },
              { icon: <Palette />, title: 'Prototyping', desc: 'Pruebas de concepto interactivas y funcionales.' }
            ].map((service, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white p-10 rounded-3xl border border-surface-container-high transition-shadow hover:shadow-2xl hover:shadow-black/5"
              >
                <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-secondary mb-6">
                  {React.cloneElement(service.icon as React.ReactElement, { className: 'w-7 h-7' })}
                </div>
                <h3 className="text-xl font-black mb-4">{service.title}</h3>
                <p className="text-on-surface-variant font-medium leading-relaxed">
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto bg-primary rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20 -mr-32 -mt-32" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary rounded-full blur-[100px] opacity-20 -ml-32 -mb-32" />

          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight relative z-10">
            ¿Tienes un proyecto en mente? <br className="hidden md:block" />
            <span className="text-secondary">Hagámoslo realidad.</span>
          </h2>

          <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-medium relative z-10">
            Estoy disponible para nuevos proyectos y colaboraciones interesantes en todo el mundo.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary px-10 py-5 rounded-full text-xl font-black flex items-center gap-3 mx-auto shadow-2xl shadow-black relative z-10"
          >
            Empieza ahora
            <ArrowUpRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};
