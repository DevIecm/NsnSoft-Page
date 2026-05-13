import React from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column: Info */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter text-primary">
                Hablemos de <br />
                <span className="text-secondary">tu proyecto</span>
              </h1>
              <p className="text-xl text-on-surface-variant font-medium mb-12 max-w-md">
                ¿Tienes una idea innovadora o necesitas ayuda con el diseño de tu producto? Estoy aquí para ayudarte.
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                    <Mail className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-on-surface-variant mb-1">Email</h3>
                    <p className="text-xl font-bold text-primary">hello@creative.dir</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                    <Phone className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-on-surface-variant mb-1">Teléfono</h3>
                    <p className="text-xl font-bold text-primary">+1 (555) 000-0000</p>
                  </div>
                </div>

                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-secondary shadow-sm">
                    <MapPin className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-sm font-mono uppercase tracking-widest text-on-surface-variant mb-1">Ubicación</h3>
                    <p className="text-xl font-bold text-primary">San Francisco, California</p>
                  </div>
                </div>
              </div>

              <div className="mt-16">
                <h3 className="text-lg font-bold mb-6">Sígueme</h3>
                <div className="flex gap-4">
                  {['Instagram', 'Dribbble', 'LinkedIn', 'Twitter'].map((social) => (
                    <a key={social} href="#" className="px-5 py-2.5 bg-white rounded-full text-sm font-bold border border-surface-container hover:bg-primary hover:text-white transition-all shadow-sm">
                      {social}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl shadow-black/5"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold mb-3 text-primary">Nombre completo</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full px-6 py-4 rounded-2xl bg-surface-container-low border border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold mb-3 text-primary">Email</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full px-6 py-4 rounded-2xl bg-surface-container-low border border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-medium"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-primary">Asunto</label>
                <select className="w-full px-6 py-4 rounded-2xl bg-surface-container-low border border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-medium appearance-none">
                  <option>Diseño Web</option>
                  <option>UI/UX Design</option>
                  <option>Branding</option>
                  <option>Otro</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold mb-3 text-primary">Mensaje</label>
                <textarea 
                  rows={6}
                  placeholder="Cuéntame sobre tu proyecto..."
                  className="w-full px-6 py-4 rounded-2xl bg-surface-container-low border border-transparent focus:border-secondary focus:bg-white outline-none transition-all font-medium resize-none"
                ></textarea>
              </div>

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-primary text-on-primary py-5 rounded-2xl text-lg font-black flex items-center justify-center gap-3 shadow-xl shadow-primary/20"
              >
                Enviar Mensaje
                <Send className="w-5 h-5" />
              </motion.button>
            </form>

            <div className="mt-12 pt-8 border-t border-surface-container">
              <div className="flex items-center gap-4 text-on-surface-variant font-medium">
                <MessageCircle className="w-6 h-6 text-secondary" />
                <span>¿Prefieres un chat rápido? Escríbeme por WhatsApp</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
