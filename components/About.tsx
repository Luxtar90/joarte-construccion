import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaUsers, FaLightbulb, FaHandshake } from 'react-icons/fa';

const features = [
  {
    icon: <FaUsers className="text-3xl text-accent" />,
    title: "Equipo Experto",
    description: "Profesionales altamente calificados con años de experiencia en el sector construcción."
  },
  {
    icon: <FaLightbulb className="text-3xl text-accent" />,
    title: "Innovación Constante",
    description: "Utilizamos las últimas tecnologías y métodos de construcción sostenible."
  },
  {
    icon: <FaHandshake className="text-3xl text-accent" />,
    title: "Compromiso Total",
    description: "Nos comprometemos con la calidad y satisfacción de nuestros clientes en cada proyecto."
  }
];

const values = [
  "Excelencia en cada detalle",
  "Sostenibilidad ambiental",
  "Innovación tecnológica",
  "Transparencia y honestidad",
  "Compromiso con el cliente",
  "Trabajo en equipo"
];

const About = () => {
  return (
    <section id="nosotros" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-bold mb-6"
          >
            Sobre <span className="text-gradient">Nosotros</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-lg max-w-3xl mx-auto"
          >
            Con más de 15 años de experiencia, nos hemos consolidado como una empresa líder
            en el sector de la construcción, destacando por nuestra excelencia y compromiso.
          </motion.p>
        </div>

        {/* Características principales */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass p-8 rounded-xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex justify-center mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                {feature.title}
              </h3>
              <p className="text-text-secondary text-center">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>

        {/* Valores y Visión */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-6">
              Nuestros Valores
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 text-text-secondary"
                >
                  <FaCheckCircle className="text-accent" />
                  <span>{value}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="glass p-8 rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-6">
              Nuestra Visión
            </h3>
            <p className="text-text-secondary mb-6">
              Aspiramos a ser la empresa líder en construcción y diseño arquitectónico,
              reconocida por nuestra innovación, calidad y compromiso con la sostenibilidad.
            </p>
            <div className="flex justify-center">
              <a
                href="#contacto"
                className="button"
              >
                Trabaja con Nosotros
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>
    </section>
  );
};

export default About;
