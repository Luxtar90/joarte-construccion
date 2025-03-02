import React from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight } from 'react-icons/fa';
import Image from 'next/image';

const Hero = () => {
  const handleClick = (href: string) => {
    const element = document.getElementById(href.replace('#', ''));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/images/pointing-sketch.jpg"
          alt="Modern architecture"
          fill
          className="object-cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent opacity-30" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 z-20">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <h2 className="text-lg md:text-xl text-accent mb-4 tracking-wider font-semibold">JOARTE CONSTRUCCIÓN</h2>
            <h1 className="text-5xl md:text-7xl font-medium text-white">
              Construyendo el{' '}
              <span className="text-gradient font-semibold bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
                Futuro
              </span>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl font-medium drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]"
          >
            Más de 15 años transformando ideas en realidad con los más altos estándares de calidad y compromiso en Fuerteventura.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-6"
          >
            <a
              href="#contacto"
              onClick={(e) => {
                e.preventDefault();
                handleClick('#contacto');
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 bg-accent hover:bg-accent/90 text-white rounded-sm transition-all duration-500 hover:shadow-glow relative overflow-hidden"
            >
              <span className="relative z-10 text-lg tracking-wider">CONTÁCTANOS</span>
              <FaArrowRight className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </a>

            <a
              href="#proyectos"
              onClick={(e) => {
                e.preventDefault();
                handleClick('#proyectos');
              }}
              className="group inline-flex items-center gap-3 px-8 py-4 border border-white/30 hover:border-accent text-white rounded-sm transition-all duration-500 hover:bg-accent/10"
            >
              <span className="text-lg tracking-wider">VER PROYECTOS</span>
              <FaArrowRight className="transform group-hover:translate-x-1 transition-transform duration-300" />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center hover:border-accent/60 transition-colors duration-300">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 hover:bg-accent/60 transition-colors duration-300" />
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
