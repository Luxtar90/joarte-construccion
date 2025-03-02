import React from 'react';
import Head from 'next/head';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import About from '../components/About';
import Contact from '../components/Contact';

export default function Home() {
  return (
    <>
      <Head>
        <title>Joarte Construcción | Construyendo el Futuro con Excelencia</title>
        <meta name="description" content="Empresa líder en construcción con más de 15 años de experiencia transformando ideas en realidad con los más altos estándares de calidad." />
        <meta name="keywords" content="construcción, proyectos, arquitectura, diseño, calidad, Perú" />
        <meta property="og:title" content="Joarte Construcción | Excelencia en Construcción" />
        <meta property="og:description" content="Más de 15 años transformando ideas en realidad con los más altos estándares de calidad" />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <main className="relative">
        {/* Hero Section */}
        <section id="inicio" className="min-h-screen">
          <Hero />
        </section>

        {/* Secciones animadas */}
        <section id="servicios">
          <Services />
        </section>

        <section id="proyectos">
          <Projects />
        </section>

        <section id="nosotros">
          <About />
        </section>

        <section id="contacto">
          <Contact />
        </section>
      </main>
    </>
  );
}
