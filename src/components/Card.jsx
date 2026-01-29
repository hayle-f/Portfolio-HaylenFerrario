/**
 * Componente Card simple
 * Tarjeta reutilizable para contenido
 * @param {string} children - Contenido de la tarjeta
 * @param {string} className - Clases adicionales de Tailwind
 * @param {object} props - Props adicionales
 */
const Card = ({ children, className = '', ...props }) => {

    return (
        <div
        className={`p-6 dark:bg-neutral-800 rounded-xl [box-shadow:0px_4px_10px_#0000000c,0px_-4px_15px_#00000022] ${className}`} //shadow-lg
        {...props}
        >
        {children}
        </div>
    )
    }

export default Card
