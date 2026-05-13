import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-20">
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-on-primary font-bold text-lg transition-transform group-hover:scale-105">
            C
          </div>
          <span className="font-hanken font-bold text-xl tracking-tighter text-primary">
            NsnSoft México
          </span>
        </NavLink>

        <div className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className={({ isActive }) => `text-sm font-medium transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-on-surface-variant'}`}
          >
            Inicio
          </NavLink>
          <NavLink
            to="/portfolio"
            className={({ isActive }) => `text-sm font-medium transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-on-surface-variant'}`}
          >
            Portafolio
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => `text-sm font-medium transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-on-surface-variant'}`}
          >
            Acerca de
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => `text-sm font-medium transition-colors hover:text-secondary ${isActive ? 'text-secondary' : 'text-on-surface-variant'}`}
          >
            Contacto
          </NavLink>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-primary text-on-primary px-6 py-2.5 rounded-full text-sm font-semibold flex items-center gap-2 group shadow-lg shadow-primary/10 transition-shadow hover:shadow-primary/20"
        >
          Hire Me
          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </motion.button>
      </div>
    </nav>
  );
};
