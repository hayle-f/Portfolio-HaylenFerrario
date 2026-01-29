import { motion } from 'framer-motion'
import { ExternalLink, Github } from 'lucide-react'
import SectionContainer, { SectionHeader } from '../components/SectionContainer'

/**
 * Componente Projects
 * Sección que muestra una galería de proyectos destacados
 * con imágenes, descripciones, tags y enlaces a GitHub y demo
 */
const Projects = () => {
  // Array de Proyectos
  const projects = [
    {
      title: 'SoulBeat (Full Stack)',
      description: (
        <>
          Proyecto full stack personal de e-commerce de auriculares. El frontend está construido en React con Tailwind CSS, ofreciendo un diseño moderno, animaciones suaves y un panel de administración completo. El backend utiliza Node.js, Express y MongoDB, manejando autenticación, roles, permisos, CRUD de productos, variantes, validaciones y subida de imágenes. Incluye funcionalidades como favoritos, carrito de compras, filtros dinámicos, notificaciones personalizadas y persistencia de tema claro/oscuro. Deploy: frontend en Netlify, backend en Render.<br />
          <small className="text-gray-400 block mt-2 tracking-wider">
            Nota: Este proyecto fue el trabajo final de la diplomatura Full Stack, con mejoras pendientes para futuras implementaciones.
          </small>
        </>
      ),
      image: 'URL-de-imagen-del-proyecto', // puede ser captura de la app
      tags: ['React', 'Tailwind CSS', 'Node.js', 'Express', 'MongoDB', 'Framer Motion', 'JWT', 'Axios', 'React Toastify'],
      github: {
        frontend: 'https://github.com/hayle-f/Soulbeat-Frontend.git',
        backend: 'https://github.com/hayle-f/Soulbeat-Backend.git'
      },
      demo: 'URL-del-frontend-en-Netlify',
      isMain: true 
    },
    {
      title: 'Dashboard de países',
      description: 'Proyecto backend en Node.js y MongoDB, con dashboard interactivo renderizado en EJS. Permite explorar, filtrar y administrar información de países, incluyendo CRUD completo, validaciones robustas y consumo de datos desde la API RESTCountries.',
      image: 'URL_DE_IMAGEN_API', 
      tags: ['Node.js', 'Express', 'MongoDB', 'Mongoose', 'Axios', 'EJS', 'Express Validator']
,
      github: 'https://github.com/hayle-f/Dashboard-Paises.git',
      demo: '#', 
    },
    {
      title: 'Portfolio personal',
      description: '', 
      tags: ['React', 'Tailwind CSS', 'Framer Motion' ],
      github: '#', 
      demo: '',
    },
    {
      title: 'Mandala Cakes',
      description: 'E-commerce desarrollado en Bubble.io. Caso de estudio orientado a producto, UX y validación de una idea real.',
      image: 'URL_DE_IMAGEN_MANDALA', 
      tags: ['Bubble.io', 'UX', 'Producto digital'],
      github: '#', 
      demo: 'https://landingpagecoder.bubbleapps.io/version-test/',
    },
  ]

  return (
    <SectionContainer id="projects" className="bg-gray-50 dark:bg-neutral-900">
      {/* Encabezado de la sección */}
      <SectionHeader
        title="Mis"
        highlightText="Proyectos"
        subtitle="Una selección de proyectos en los que he trabajado, demostrando mis habilidades y pasión por el desarrollo."
      />

      {/* Layout personalizado: primer proyecto full width, otros dos en fila */}
      <div className="space-y-14">
        {/* Primer proyecto destacado */}
        <motion.div
          key={projects[0].title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="group bg-white dark:bg-neutral-800/60 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-700/20 transition-all duration-300 h-full flex flex-col"
        >
          {/* Imagen del proyecto con overlay de botones al hover */}
          <div className="relative overflow-hidden h-120 shrink-0">
            <img
              src={projects[0].image}
              alt={projects[0].title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay con botones de GitHub y Demo que aparecen al hover */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
              {/* Botón de GitHub (usa frontend si es objeto) */}
              <a
                href={typeof projects[0].github === 'object' ? projects[0].github.frontend : projects[0].github}
                className="p-2 rounded-full hover:bg-pink-600/60 text-white transition-colors duration-300"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              
              {/* Botón de Demo */}
              <a
                href={projects[0].demo}
                className="p-2 rounded-full hover:bg-pink-600/60 text-white transition-colors duration-300"
                aria-label="Demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contenido del proyecto */}
          <div className="p-6 shrink-0">
            {/* Título del proyecto */}
            <h3 className="text-xl mb-3 group-hover:text-pink-600 transition-colors duration-300">
              {projects[0].title}
            </h3>
            
            {/* Descripción del proyecto */}
            <p 
              className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4"
            >
              {projects[0].description}
            </p>
          </div>
          
          {/* Tags alineados abajo */}
          <div className="px-6 pb-6 flex grow items-end">
            <div className="flex flex-wrap gap-2">
              {projects[0].tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 text-xs tracking-wider bg-pink-100 dark:bg-pink-300/20 text-pink-700 dark:text-pink-500 rounded-md"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Grid para los otros dos proyectos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.slice(1).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1, duration: 0.6 }}
              className="group bg-white dark:bg-neutral-800/60 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-pink-700/20 transition-all duration-300 h-full flex flex-col"
            >
              {/* Imagen del proyecto con overlay de botones al hover */}
              <div className="relative overflow-hidden h-72 shrink-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                
                {/* Overlay con botones de GitHub y Demo que aparecen al hover */}
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent opacity-30 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4 gap-4">
                  {/* Botón de GitHub */}
                  <a
                    href={project.github}
                    className="p-2 rounded-full hover:bg-pink-600/60 text-white transition-colors duration-300"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  
                  {/* Botón de Demo */}
                  <a
                    href={project.demo}
                    className="p-2 rounded-full hover:bg-pink-600/60 text-white transition-colors duration-300"
                    aria-label="Demo"
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </div>

              {/* Contenido del proyecto */}
              <div className="p-6 shrink-0">
                {/* Título del proyecto */}
                <h3 className="text-xl mb-3 group-hover:text-pink-600 transition-colors duration-300">
                  {project.title}
                </h3>
                
                {/* Descripción del proyecto */}
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-4">
                  {project.description}
                </p>
              </div>
              
              {/* Tags alineados abajo */}
              <div className="px-6 pb-6 flex grow items-end">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs tracking-wider bg-pink-100 dark:bg-pink-300/20 text-pink-700 dark:text-pink-500 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionContainer>
  )
}

export default Projects
