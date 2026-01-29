import { Heart } from 'lucide-react';

/**
 * Componente Footer
 * Pie de página simple con créditos y año actual
 */
const Footer = () => {
  // Obtener el año actual dinámicamente
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-4 bg-white/60 dark:bg-neutral-900 shadow-md">
      <div className="container mx-auto px-6 text-center">
        {/* Mensaje con icono de corazón */}
        <p className="flex items-center justify-center gap-2 text-gray-600 dark:text-gray-400">
          Dev:
          <span className="text-pink-600">Haylén Ferrario</span>
        </p>
        
        {/* Copyright con año dinámico */}
        <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">
          © {currentYear} Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}

export default Footer
