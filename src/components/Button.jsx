/**
 * Componente Button simple
 * Botón reutilizable sin sistema de variantes complejo
 * @param {string} children - Contenido del botón
 * @param {string} className - Clases adicionales de Tailwind
 * @param {function} onClick - Función a ejecutar al hacer click
 * @param {string} type - Tipo de botón (button, submit, etc.)
 * @param {object} props - Props adicionales
 */
const Button = ({ children, className = '', onClick, type = 'button', ...props }) => {
    return (
        <button
        type={type}
        onClick={onClick}
        className={`px-4 py-1.5 sm:px-6 sm:py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-pink-600/40 cursor-pointer ${className}`}
        {...props}
        >
        {children}
        </button>
    );
    };

export default Button;
