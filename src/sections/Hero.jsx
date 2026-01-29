import { motion } from 'framer-motion'
import MatrixRain from '../components/animations/MatrixRain'
import Button from '../components/Button'
import { ArrowDown } from 'lucide-react'

/**
 * Componente Hero
 * Sección principal del portfolio con animación Matrix de fondo
 * y presentación personal con CTAs
 * @param {string} theme - Tema actual para pasarlo a MatrixRain
 */
const Hero = ({ theme }) => {
  /**
   * Realiza scroll suave a una sección específica
   * @param {string} id - ID del elemento al que hacer scroll
   */
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animación Matrix de fondo */}
      <MatrixRain theme={theme} />
      
      {/* Contenido principal centrado */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        {/* Wrapper con animación de entrada */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Título principal con animación */}
          <motion.h1 
            className="text-[clamp(28px,6vw,72px)] text-pink-600 mb-6 max-w-4xl mx-auto leading-tight wrap-break-word"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            DESARROLLADORA
            <br />
            FRONTEND
          </motion.h1>
          
          {/* Subtítulo descriptivo */}
          <motion.p 
            className="text-base sm:text-lg md:text-2xl text-gray-500 dark:text-gray-400 sm:max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Con base en backend y en constante aprendizaje.
            Apasionada por aprender y crear experiencias digitales limpias y funcionales.
          </motion.p>

          {/* Botones de Call To Action */}
          <motion.div
            className="flex gap-4 justify-center flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            {/* Botón principal - Ver Proyectos */}
            <Button
              onClick={() => scrollToSection('projects')}
              className="bg-linear-to-r from-pink-500 to-purple-600 text-white"
            >
              Ver Proyectos
            </Button>
            
            {/* Botón secundario - Contacto */}
            <Button
              onClick={() => scrollToSection('contact')}
              className="border-2 border-pink-500 text-pink-500"
            >
              Contacto
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Indicador de scroll animado - Flecha que rebota */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }} // Animación de rebote vertical
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <ArrowDown className="w-6 h-6 text-pink-500" />
      </motion.div>
    </section>
  )
}

export default Hero