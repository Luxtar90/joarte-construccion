import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { RiSearchLine, RiFullscreenLine, RiCloseLine, RiMapPinLine, RiRulerLine, RiTimeLine, RiCalendarLine } from 'react-icons/ri';

interface ProjectDetails {
  location: string;
  area: string;
  duration: string;
  year: string;
}

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  details: ProjectDetails;
}

const projects: Project[] = [
  {
    title: "Centro Comercial Moderno",
    category: "Comercial",
    image: "/images/free-photo-of-la-torre-en-al-amanecer-en-la-vista-del-horizonte-de-toronto.jpeg",
    description: "Diseño y construcción de un centro comercial de 50,000 m² con certificación LEED.",
    details: {
      location: "Puerto del Rosario, Fuerteventura",
      area: "50,000 m²",
      duration: "24 meses",
      year: "2024"
    }
  },
  {
    title: "Residencial Los Álamos",
    category: "Residencial",
    image: "/images/pexels-photo-5244002.jpeg",
    description: "Complejo residencial de lujo con 120 departamentos y áreas comunes.",
    details: {
      location: "Corralejo, Fuerteventura",
      area: "30,000 m²",
      duration: "18 meses",
      year: "2023"
    }
  },
  {
    title: "Parque Industrial Tecnológico",
    category: "Industrial",
    image: "/images/pexels-photo-5203593.webp",
    description: "Centro logístico con tecnología de última generación y eficiencia energética.",
    details: {
      location: "Gran Tarajal, Fuerteventura",
      area: "75,000 m²",
      duration: "30 meses",
      year: "2024"
    }
  },
  {
    title: "Torre Empresarial Infinity",
    category: "Comercial",
    image: "/images/pexels-photo-1216589.jpeg",
    description: "Edificio de oficinas premium con tecnología smart building.",
    details: {
      location: "Costa Calma, Fuerteventura",
      area: "45,000 m²",
      duration: "28 meses",
      year: "2023"
    }
  },
  {
    title: "Condominio Eco-friendly",
    category: "Residencial",
    image: "/images/pexels-photo-1109541.webp",
    description: "Proyecto residencial sostenible con paneles solares y tratamiento de aguas.",
    details: {
      location: "Morro Jable, Fuerteventura",
      area: "25,000 m²",
      duration: "20 meses",
      year: "2024"
    }
  },
  {
    title: "Centro de Distribución Logístico",
    category: "Industrial",
    image: "/images/pexels-photo-5584052.jpeg",
    description: "Almacén automatizado con sistemas de última generación.",
    details: {
      location: "La Oliva, Fuerteventura",
      area: "60,000 m²",
      duration: "22 meses",
      year: "2023"
    }
  }
];

const categories = ["Todos", "Comercial", "Residencial", "Industrial"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isImageFullscreen, setIsImageFullscreen] = useState(false);

  const filteredProjects = activeCategory === "Todos"
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <section id="proyectos" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nuestros <span className="text-gradient">Proyectos</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-lg max-w-3xl mx-auto mt-6"
          >
            Descubre nuestra trayectoria a través de proyectos innovadores que
            transforman el paisaje urbano y mejoran la calidad de vida.
          </motion.p>
        </div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {categories.map((category, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-3 rounded-sm transition-all duration-500 text-lg tracking-wide
                ${activeCategory === category
                  ? 'bg-accent text-background shadow-blue'
                  : 'bg-surface/50 text-text-secondary hover:bg-surface hover:text-accent'}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Grid de proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-sm hover-lift"
            >
              <div className="relative aspect-video">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-8">
                    <h3 className="text-2xl font-light mb-3 tracking-wide text-white">{project.title}</h3>
                    <p className="text-gray-200 text-lg mb-6">{project.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-accent font-medium text-lg tracking-wide">{project.category}</span>
                      <div className="flex gap-6">
                        <motion.button
                          onClick={() => setSelectedProject(project)}
                          className="text-white hover:text-accent transition-colors duration-500 text-xl bg-black/20 p-2 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Ver detalles"
                        >
                          <RiSearchLine />
                        </motion.button>
                        <motion.button
                          onClick={() => {
                            setSelectedProject(project);
                            setIsImageFullscreen(true);
                          }}
                          className="text-white hover:text-accent transition-colors duration-500 text-xl bg-black/20 p-2 rounded-full"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          aria-label="Ver imagen completa"
                        >
                          <RiFullscreenLine />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal de detalles del proyecto */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-4xl w-full bg-surface p-8 rounded-sm shadow-blue"
                onClick={e => e.stopPropagation()}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 text-text-secondary hover:text-accent transition-colors duration-300 text-2xl"
                >
                  <RiCloseLine />
                </button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="relative aspect-video rounded-sm overflow-hidden">
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-3xl font-light mb-4 tracking-wide">
                      {selectedProject.title}
                    </h3>
                    <p className="text-text-secondary text-lg mb-6">
                      {selectedProject.description}
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-lg">
                        <RiMapPinLine className="text-accent" />
                        <span className="text-text-secondary">{selectedProject.details.location}</span>
                      </div>
                      <div className="flex items-center gap-3 text-lg">
                        <RiRulerLine className="text-accent" />
                        <span className="text-text-secondary">{selectedProject.details.area}</span>
                      </div>
                      <div className="flex items-center gap-3 text-lg">
                        <RiTimeLine className="text-accent" />
                        <span className="text-text-secondary">{selectedProject.details.duration}</span>
                      </div>
                      <div className="flex items-center gap-3 text-lg">
                        <RiCalendarLine className="text-accent" />
                        <span className="text-text-secondary">{selectedProject.details.year}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Modal de imagen completa */}
        <AnimatePresence>
          {isImageFullscreen && selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md"
              onClick={() => {
                setIsImageFullscreen(false);
                setSelectedProject(null);
              }}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="relative max-w-7xl w-full h-[80vh] rounded-sm overflow-hidden"
                onClick={e => e.stopPropagation()}
              >
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
                  priority
                />
                <button
                  onClick={() => {
                    setIsImageFullscreen(false);
                    setSelectedProject(null);
                  }}
                  className="absolute top-4 right-4 text-white hover:text-accent transition-colors duration-300 text-3xl bg-black/20 p-2 rounded-full"
                >
                  <RiCloseLine />
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Elementos decorativos */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-7xl">
          <div className="absolute inset-0 bg-gradient-radial from-accent/5 to-transparent opacity-30" />
        </div>
      </div>
    </section>
  );
};

export default Projects;
