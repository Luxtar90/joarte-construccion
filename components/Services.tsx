import React from 'react';
import { motion } from 'framer-motion';
import { FaBuilding, FaHome, FaPaintRoller, FaTools } from 'react-icons/fa';
import { FaHardHat, FaPencilRuler } from 'react-icons/fa';

const services = [
  {
    icon: <FaHome className="w-12 h-12" />,
    title: "Construcción Residencial",
    description: "Transformamos sus sueños en hogares excepcionales, combinando diseño innovador con la más alta calidad constructiva."
  },
  {
    icon: <FaHardHat className="w-12 h-12" />,
    title: "Proyectos Comerciales",
    description: "Espacios comerciales que impulsan el éxito de su negocio, diseñados para maximizar funcionalidad y estética."
  },
  {
    icon: <FaPencilRuler className="w-12 h-12" />,
    title: "Diseño y Planificación",
    description: "Servicios integrales de diseño arquitectónico y planificación estratégica para proyectos de cualquier escala."
  },
  {
    icon: <FaTools className="w-12 h-12" />,
    title: "Remodelación",
    description: "Renovamos espacios existentes con un enfoque moderno, respetando la esencia original de la estructura."
  }
];

const stats = [
  { number: '15+', label: 'Años de Experiencia' },
  { number: '200+', label: 'Proyectos Completados' },
  { number: '50+', label: 'Profesionales' },
  { number: '98%', label: 'Clientes Satisfechos' }
];

const Services = () => {
  return (
    <div className="relative py-24 bg-gradient-to-b from-background to-surface">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center p-6 bg-accent/5 rounded-sm hover:bg-accent/10 transition-colors duration-300"
            >
              <div className="text-3xl md:text-4xl font-light text-accent mb-2">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-semibold mb-4"
          >
            Nuestros Servicios
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-lg md:text-xl font-medium max-w-2xl mx-auto"
          >
            Ofrecemos soluciones integrales en construcción y diseño, respaldados por años de experiencia y un compromiso inquebrantable con la excelencia.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="group relative p-8 rounded-lg bg-surface hover:bg-accent/5 border border-accent/10 hover:border-accent/20 transition-all duration-500 hover-lift"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 text-accent group-hover:text-accent-light transition-colors duration-500">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-text-primary">
                  {service.title}
                </h3>
                <p className="text-text-secondary">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
