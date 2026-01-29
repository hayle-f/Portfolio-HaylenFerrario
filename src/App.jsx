import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';

/**
 * Componente principal de la aplicación
 * Gestiona el tema (claro/oscuro) y renderiza todas las secciones del portfolio
 */
function App() {
  // Estado para controlar el tema actual (dark o light)
  const [theme, setTheme] = useState('dark');

  /**
   * Hook que se ejecuta al montar el componente
   * Recupera la preferencia de tema guardada en localStorage
   * Si no existe, usa 'dark' por defecto
   */
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
    document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  }, []);

  /**
   * Función para alternar entre tema claro y oscuro
   * Guarda la preferencia en localStorage y actualiza la clase 'dark' en el HTML
   */
  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-white dark:bg-gray-950 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Barra de navegación con toggle de tema */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      {/* Contenido principal del portfolio */}
      <main>
        {/* Sección Hero con animación Matrix */}
        <Hero theme={theme} />
        
        {/* Sección Sobre Mí */}
        <About />
        
        {/* Sección de Habilidades */}
        <Skills />
        
        {/* Sección de Proyectos */}
        <Projects />
        
        {/* Sección de Contacto */}
        <Contact />
      </main>
      
      {/* Pie de página */}
      <Footer />
    </div>
  );
}

export default App;
