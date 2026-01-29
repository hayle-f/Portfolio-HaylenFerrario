import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
/**
 * Componente Navbar
 * Barra de navegación fija con scroll suave entre secciones,
 * toggle de tema y menú responsive para móviles
 * @param {string} theme - Tema actual ('dark' o 'light')
 * @param {function} toggleTheme - Función para cambiar el tema
 */
const Navbar = ({ theme, toggleTheme }) => {
  // Estado para detectar si el usuario ha hecho scroll
  const [isScrolled, setIsScrolled] = useState(false)
  // Estado para controlar la apertura/cierre del menú móvil
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  /**
   * Detecta el scroll de la página para cambiar el estilo del navbar
   * Si el scroll es mayor a 50px, aplica fondo con blur
   */
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  // Items de navegación
  const navItems = [
    { id: 'hero', label: 'Inicio' },
    { id: 'about', label: 'Sobre mí' },
    { id: 'skills', label: 'Tecnologías' },
    { id: 'projects', label: 'Proyectos' },
    { id: 'contact', label: 'Contacto' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled
          ? 'bg-white/70 dark:bg-neutral-900/80 backdrop-blur-md shadow-lg'
          : 'bg-white/70 dark:bg-neutral-900/60 shadow-md '
      }`}
    >
      <div className="container mx-auto px-2 py-4">
        <div className="flex items-center justify-between">
          {/* Logo con estilo de código HTML */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="sm:text-lg"
          >
            <span className="text-pink-500">&lt; </span>
            Haylén Ferrario
            <span className="text-pink-500"> /&gt;</span>
          </motion.div>

          {/* Navegación Desktop - Oculta en móviles */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }} // Animación escalonada
                className="cursor-pointer hover:text-pink-500 transition-colors duration-300"
              >
                {item.label}
              </motion.a>
            ))}
          </div>

          {/* Botones de Theme Toggle y Menú Móvil */}
          <div className="flex items-center gap-4">
            {/* Botón para cambiar tema claro/oscuro */}
            <button
              onClick={toggleTheme}
              className="p-2 ml-3 rounded-lg border-2 border-neutral-300  cursor-pointer dark:border-neutral-700 hover:border-pink-500 dark:hover:border-pink-500 transition-all duration-300"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
              ) : (
                <Moon className="w-4 h-4 sm:w-5 sm:h-5 text-pink-500" />
              )}
            </button>

            {/* Botón de menú hamburguesa - Solo en móviles */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border-2 border-neutral-300 dark:border-neutral-700"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
              ) : (
                <Menu className="w-4 h-4 sm:w-5 sm:h-5 cursor-pointer" />
              )}
            </button>
          </div>
        </div>

      </div>
        {/* Menú Móvil - Se expande/contrae con animación */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden backdrop-blur-md pt-4 pr-1.5 border-t border-neutral-200 dark:border-neutral-700 flex flex-col"
            >
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-right py-2 cursor-pointer hover:text-pink-500 transition-colors duration-300"
                >
                  {item.label}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
    </nav>
  )
}

export default Navbar