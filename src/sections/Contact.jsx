import { motion } from 'framer-motion'
import { Github, Linkedin, Download } from 'lucide-react'
import SectionContainer, { SectionHeader } from '../components/SectionContainer'
import Card from '../components/Card'
import ContactForm from '../components/ContactForm'

/**
 * Componente Contact
 * Sección de contacto con formulario y redes sociales
 */
const Contact = () => {  

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/hayle-f' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/hayl%C3%A9n-ferrario-9a334048/' }
  ]

  return (
    <SectionContainer id="contact" className="dark:bg-neutral-800 shadow-md">
      <SectionHeader
        title=""
        highlightText="Contáctame"
        subtitle={
          <>
            Abierta a oportunidades laborales, propuestas y nuevos desafíos.<br />
            Podés escribirme por el formulario o por mis otros medios de contacto.
          </>
        }
      />

      <div className="max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Formulario de contacto */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="dark:bg-neutral-900/60">
            <h3 className="text-xl mb-4 text-pink-500">Envíame un mensaje</h3>

            <ContactForm></ContactForm>

          </Card>
        </motion.div>

        {/* Redes sociales y descarga CV */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="dark:bg-neutral-900/60">
            <h3 className="text-xl mb-4 text-pink-500">Conéctate conmigo</h3>
            <div className="flex flex-col gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-5 h-5" />
                  {social.name}
                </a>
              ))}
              {/* Descarga CV */}
              <a
                href="/cv-HaylenFerrario-Developer2026.pdf" // Cambia a la ruta real de tu CV
                download
                className="flex items-center gap-3 text-gray-700 dark:text-gray-300 hover:text-pink-500 transition-colors"
              >
                <Download className="w-5 h-5" />
                Descargar CV
              </a>
            </div>
          </Card>
        </motion.div>

      </div>
    </SectionContainer>
  )
}

export default Contact