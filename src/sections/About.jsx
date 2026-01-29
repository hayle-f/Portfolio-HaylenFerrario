import { motion } from 'framer-motion'
import { Code2, Database, Sparkles, Rocket } from 'lucide-react'
import SectionContainer, { SectionHeader } from '../components/SectionContainer'
import Card from '../components/Card'
import { useState } from 'react'

const About = () => {
  const [showMore, setShowMore] = useState(false)

  const services = [
    {
      icon: Code2,
      title: 'Desarrollo Frontend',
      description: 'Desarrollo de interfaces interactivas con foco en la funcionalidad, la lógica de interacción y la coherencia con principios de UI/UX',
    },
    {
      icon: Database,
      title: 'Conocimientos Backend',
      description: 'Desarrollo de lógica backend y APIs REST para el manejo de datos y la comunicación entre sistemas.',
    },
    {
      icon: Sparkles,
      title: 'Diseño UI/UX',
      description: 'Diseño de interfaces centradas en la experiencia del usuario, priorizando claridad, usabilidad y coherencia visual.',
    },
    {
      icon: Rocket,
      title: 'Aprendizaje continuo',
      description: 'Aprendizaje constante, reforzando conocimientos y explorando nuevas tecnologías para seguir creciendo como desarrolladora.',
    },
  ]

  return (
    <SectionContainer id="about" className="bg-gray-50 dark:bg-neutral-900">
      {/* Encabezado de la sección */}
      <SectionHeader
        title="Sobre"
        highlightText="mí"
        subtitle={
          <>
            {/* Párrafo principal */}
            <p className="text-base sm:text-lg text-gray-800 dark:text-gray-300">
              Soy desarrolladora frontend con base en backend, enfocada en crear interfaces claras, funcionales y bien estructuradas.
              Me interesa construir soluciones donde la experiencia del usuario, la lógica y el diseño trabajen en conjunto.
              Me caracterizo por ser responsable, comprometida y con muchas ganas de aprender y seguir creciendo en el desarrollo web.
            </p>

            {/* Párrafo secundario animado */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: showMore ? 1 : 0, height: showMore ? "auto" : 0 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden text-center max-w-2xl mx-auto mt-2"
            >
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 my-2">
                Desde 2024 estudio desarrollo web, empezando con los fundamentos y avanzando de forma constante sin detener el proceso de aprendizaje. A lo largo de este recorrido combiné cursos formales y autodidactas, avanzando desde fundamentos de desarrollo web hasta una diplomatura full stack.

                He trabajado con tecnologías como React, Node.js y Tailwind CSS, desarrollando proyectos prácticos donde pude aplicar tanto frontend como conceptos básicos de backend. Me motiva aprender, perfeccionar lo que ya sé y enfrentar nuevos desafíos, creciendo como desarrolladora en cada proyecto.
              </p>
            </motion.div>

            {/* Botón / texto clickeable */}
            <span
              onClick={() => setShowMore(!showMore)}
              className="text-pink-600 dark:text-pink-500 cursor-pointer hover:underline mt-1 block"
            >
              {showMore ? "Ver menos" : "Ver más"}
            </span>
          </>
        }
      />

      {/* Grid de tarjetas de servicios */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {services.map((service, index) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Card className="text-center hover:shadow-2xl hover:shadow-pink-700/20 transition-all duration-300 h-full">
              <div className="w-12 h-12 sm:w-14 sm:h-14 mb-4 mx-auto bg-linear-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg sm:text-xl mb-3">{service.title}</h3>

              <p className="text-base sm:text-md text-gray-600 dark:text-gray-400">
                {service.description}
              </p>
            </Card>
          </motion.div>
        ))}
      </div>
    </SectionContainer>
  )
}

export default About
