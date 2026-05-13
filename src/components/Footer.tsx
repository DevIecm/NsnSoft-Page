import React from 'react';
import { NavLink } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github, Mail } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-surface-container">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center text-on-primary font-bold text-xl">
                C
              </div>
              <span className="font-hanken font-bold text-2xl tracking-tighter text-primary">
                NsnSoft México
              </span>
            </div>
            <p className="text-on-surface-variant text-lg max-w-md mb-8">
              Designing exceptional digital experiences that bridge the gap between human needs and technology.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full border border-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-surface-container flex items-center justify-center text-on-surface-variant hover:bg-primary hover:text-white hover:border-primary transition-all">
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              <li><NavLink to="/" className="text-on-surface-variant hover:text-secondary transition-colors">Inicio</NavLink></li>
              <li><NavLink to="/portfolio" className="text-on-surface-variant hover:text-secondary transition-colors">Portafolio</NavLink></li>
              <li><NavLink to="/about" className="text-on-surface-variant hover:text-secondary transition-colors">Acerca de </NavLink></li>
              <li><NavLink to="/contact" className="text-on-surface-variant hover:text-secondary transition-colors">Contacto</NavLink></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-on-surface-variant">
                <Mail className="w-5 h-5" />
                hello@creative.dir
              </li>
              <li className="text-on-surface-variant">
                Monte Illimani Mz 33 Lt 10, Cuautitlan México<br />
                Ciudad de México.s
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-surface-container gap-6">
          <p className="text-sm text-on-surface-variant">
            © {new Date().getFullYear()} NsnSoft México. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary">Politicas de Privacidad</a>
            <a href="#" className="text-sm text-on-surface-variant hover:text-primary">Términos de Servicio</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
