import React from 'react';
import { motion } from 'motion/react';
import { Star, Award, Users, Rocket } from 'lucide-react';

export const About = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-32 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-primary leading-none">
              Pasión por el <br />
              <span className="text-secondary">diseño digital</span>
            </h1>
            <p className="text-xl text-on-surface-variant font-medium mb-8 leading-relaxed">
              En Creative.Dir, creemos que el buen diseño no es solo cómo se ve, sino cómo funciona. Nuestra filosofía se centra en la simplicidad, la utilidad y la belleza.
            </p>
            <p className="text-lg text-on-surface-variant font-medium mb-12 opacity-80 leading-relaxed">
              Fundada en 2018, hemos trabajado con startups emergentes y marcas establecidas para elevar su presencia digital a través de soluciones de diseño inteligentes y centradas en el usuario.
            </p>
            
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h4 className="text-4xl font-black text-primary mb-2">50+</h4>
                <p className="text-sm font-mono uppercase tracking-widest text-on-surface-variant">Proyectos Completados</p>
              </div>
              <div>
                <h4 className="text-4xl font-black text-primary mb-2">12+</h4>
                <p className="text-sm font-mono uppercase tracking-widest text-on-surface-variant">Premios de Diseño</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl shadow-black/10">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1280&auto=format&fit=crop" 
                alt="Creative Team"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-10 -right-10 bg-primary text-white p-10 rounded-[2rem] hidden md:block">
              <p className="text-2xl font-black italic">"Design is thinking made visual."</p>
              <p className="mt-4 text-white/60 font-medium">— Saul Bass</p>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="bg-surface-container-low rounded-[4rem] p-12 md:p-20">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tighter">Nuestros Valores</h2>
            <p className="text-xl text-on-surface-variant font-medium">
              Principios que guían cada línea, color y pixel que creamos.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Star />, title: 'Excelencia', desc: 'No nos conformamos con menos de lo extraordinario en cada entregable.' },
              { icon: <Users />, title: 'Empatía', desc: 'Diseñamos pensando siempre en el usuario final y sus necesidades.' },
              { icon: <Award />, title: 'Calidad', desc: 'Mantenemos los más altos estándares de calidad técnica y visual.' },
              { icon: <Rocket />, title: 'Innovación', desc: 'Buscamos constantemente nuevas formas de resolver problemas complejos.' }
            ].map((value, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-secondary mb-6 shadow-sm">
                  {React.cloneElement(value.icon as React.ReactElement, { className: 'w-8 h-8' })}
                </div>
                <h3 className="text-xl font-black mb-4">{value.title}</h3>
                <p className="text-on-surface-variant font-medium opacity-80">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
