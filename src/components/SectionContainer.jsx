import { motion } from 'framer-motion'

/**
 * Componente SectionContainer
 * Contenedor reutilizable para secciones con animación de entrada
 * @param {string} id - ID de la sección para navegación
 * @param {string} children - Contenido de la sección
 * @param {string} className - Clases adicionales de Tailwind
 * @param {object} props - Props adicionales
 */
const SectionContainer = ({ id, children, className = '', ...props }) => {
    return (
        <section id={id} className={`py-20 ${className}`} {...props}>
        <div className="container mx-auto px-6">
            {children}
        </div>
        </section>
    )
    }

/**
 * Componente para el encabezado de una sección
 * Incluye animación de entrada al hacer scroll
 * @param {string} title - Título principal
 * @param {string} subtitle - Subtítulo descriptivo
 * @param {string} highlightText - Texto a resaltar en color rosa
 */
export const SectionHeader = ({ title, subtitle, highlightText }) => {
    return (
        <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12 sm:mb-14"
        >
        <h2 className="text-[clamp(28px,5vw,60px)] mb-4">
            {title} {highlightText && <span className="text-pink-600">{highlightText}</span>}
        </h2>
        {subtitle && (
            <div className="text-base sm:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {subtitle}
            </div>
        )}
        </motion.div>
    )
    }

export default SectionContainer
