import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { RiPhoneLine, RiMailLine, RiMapPin2Line, RiTimeLine } from 'react-icons/ri';

const contactInfo = [
  {
    icon: <RiPhoneLine className="text-3xl text-accent" />,
    title: "Teléfono",
    content: "+34 928 123 456",
    link: "tel:+34928123456"
  },
  {
    icon: <RiMailLine className="text-3xl text-accent" />,
    title: "Email",
    content: "contacto@joarte.com",
    link: "mailto:contacto@joarte.com"
  },
  {
    icon: <RiMapPin2Line className="text-3xl text-accent" />,
    title: "Ubicación",
    content: "Calle Primero de Mayo 35, Puerto del Rosario, Fuerteventura",
    link: "https://maps.google.com"
  },
  {
    icon: <RiTimeLine className="text-3xl text-accent" />,
    title: "Horario",
    content: "Lun - Vie: 9:00 - 18:00",
    link: null
  }
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Aquí iría la lógica para enviar el formulario a tu backend
      // Por ahora simulamos un delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contacto" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Contacta con <span className="text-gradient">Nosotros</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-text-secondary text-lg max-w-3xl mx-auto mt-6"
          >
            Estamos aquí para ayudarte. Contáctanos para discutir tu próximo proyecto
            o resolver cualquier duda que tengas.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="glass p-10 rounded-sm h-full">
              <h3 className="text-2xl font-light mb-10 tracking-wide">
                Información de Contacto
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="p-3 glass rounded-sm">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="font-light text-lg mb-2">{info.title}</h4>
                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-text-secondary hover:text-accent transition-colors duration-500"
                          target={info.link.startsWith('http') ? '_blank' : undefined}
                          rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-text-secondary">{info.content}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Mapa */}
              <motion.div 
                className="mt-10 rounded-sm overflow-hidden h-64 relative glass"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.9612263076525!2d-13.863955024529631!3d28.500281075577837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xc47c5c039c2fd8d%3A0x9eb6663e09e2320e!2sPuerto%20del%20Rosario%2C%20Las%20Palmas%2C%20Spain!5e0!3m2!1sen!2sus!4v1709445297247!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </motion.div>
            </div>
          </motion.div>

          {/* Formulario */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass p-10 rounded-sm">
              <h3 className="text-2xl font-light mb-10 tracking-wide">
                Envíanos un Mensaje
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="form-input"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Servicio de Interés
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="form-select"
                    required
                  >
                    <option value="">Seleccionar servicio</option>
                    <option value="comercial">Construcción Comercial</option>
                    <option value="residencial">Construcción Residencial</option>
                    <option value="industrial">Proyectos Industriales</option>
                    <option value="diseno">Diseño Arquitectónico</option>
                    <option value="remodelacion">Remodelaciones</option>
                    <option value="sostenible">Construcción Sostenible</option>
                  </select>
                </div>
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="form-textarea"
                  required
                ></textarea>
              </div>

              {submitStatus === 'success' && (
                <div className="mb-6 p-4 bg-green-500/10 border border-green-500/20 rounded-sm text-green-500">
                  Mensaje enviado correctamente. Nos pondremos en contacto contigo pronto.
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-sm text-red-500">
                  Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.
                </div>
              )}

              <motion.button
                type="submit"
                className="button w-full justify-center"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {isSubmitting ? 'Enviando...' : 'Enviar Mensaje'}
              </motion.button>
            </form>
          </motion.div>
        </div>
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

export default Contact;
