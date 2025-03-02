import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const socialLinks = [
  { icon: <FaFacebook />, href: 'https://facebook.com', label: 'Facebook' },
  { icon: <FaTwitter />, href: 'https://twitter.com', label: 'Twitter' },
  { icon: <FaInstagram />, href: 'https://instagram.com', label: 'Instagram' },
  { icon: <FaLinkedin />, href: 'https://linkedin.com', label: 'LinkedIn' }
];

const contactInfo = [
  { icon: <FaPhone />, text: '+34 928 123 456', href: 'tel:+34928123456' },
  { icon: <FaEnvelope />, text: 'contacto@joarte.com', href: 'mailto:contacto@joarte.com' },
  { icon: <FaMapMarkerAlt />, text: 'Puerto del Rosario, Fuerteventura, España', href: 'https://maps.google.com' }
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface/50 pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Columna 1 - Información de la empresa */}
          <div>
            <h3 className="text-2xl font-bold text-gradient mb-6">JOARTE</h3>
            <p className="text-text-secondary mb-6">
              Transformando ideas en realidad con los más altos estándares de calidad en construcción y diseño.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary hover:text-accent transition-colors duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2 - Enlaces rápidos */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-3">
              {['Inicio', 'Servicios', 'Proyectos', 'Nosotros', 'Contacto'].map((item, index) => (
                <li key={index}>
                  <Link
                    href={`#${item.toLowerCase()}`}
                    className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 - Servicios */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Nuestros Servicios</h4>
            <ul className="space-y-3">
              {[
                'Construcción Residencial',
                'Proyectos Comerciales',
                'Remodelaciones',
                'Diseño Arquitectónico',
                'Consultoría'
              ].map((service, index) => (
                <li key={index}>
                  <Link
                    href="#servicios"
                    className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <span className="mr-2">→</span>
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 - Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              {contactInfo.map((info, index) => (
                <li key={index}>
                  <a
                    href={info.href}
                    className="text-text-secondary hover:text-accent transition-colors duration-300 flex items-center"
                  >
                    <span className="text-accent mr-3">{info.icon}</span>
                    {info.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Línea divisoria con gradiente */}
        <div className="h-px bg-gradient-to-r from-transparent via-accent/30 to-transparent mb-8" />

        {/* Copyright y enlaces legales */}
        <div className="flex flex-col md:flex-row justify-between items-center text-text-secondary text-sm">
          <p> {currentYear} Joarte Construcción. Todos los derechos reservados.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacidad" className="hover:text-accent transition-colors duration-300">
              Política de Privacidad
            </Link>
            <Link href="/terminos" className="hover:text-accent transition-colors duration-300">
              Términos y Condiciones
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
