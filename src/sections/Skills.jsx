import { motion } from 'framer-motion'
import { Code, Database } from 'lucide-react' 
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiTailwindcss, SiNodedotjs, SiExpress, SiRender, SiMongodb, SiGit, SiPostman, SiNetlify } from 'react-icons/si' 
import { VscVscode } from 'react-icons/vsc'
import SectionContainer, { SectionHeader } from '../components/SectionContainer'
import Card from '../components/Card'

/**
 * Componente Skills
 * Sección de habilidades con iconos arriba y nombre abajo
 */
const Skills = () => {
    const skillCategories = [
        {
        title: 'Frontend',
        skills: [
            { name: 'HTML5', icon: SiHtml5, color: 'text-orange-500' },
            { name: 'CSS3', icon: SiCss3, color: 'text-blue-500' },
            { name: 'JavaScript', icon: SiJavascript, color: 'text-yellow-400' },
            { name: 'React', icon: SiReact, color: 'text-blue-400' },
            { name: 'Tailwind', icon: SiTailwindcss, color: 'text-cyan-500' },
            { name: 'Framer Motion', icon: Code, color: 'text-purple-500' }, 
            /* { name: 'React Toastify', icon: SiReact, color: 'text-blue-400' }, */
        ],
        },
        {
        title: 'Backend',
        skills: [
            { name: 'Node.js', icon: SiNodedotjs, color: 'text-green-500' },
            { name: 'Express', icon: SiExpress, color: 'text-gray-600' },
            { name: 'MongoDB', icon: SiMongodb, color: 'text-green-600' },
            { name: 'Mongoose', icon: SiMongodb, color: 'text-green-600' },
            { name: 'APIs REST', icon: Code, color: 'text-indigo-500' },
        ],
        },
        {
        title: 'Herramientas',
        skills: [
            { name: 'Git', icon: SiGit, color: 'text-orange-600' },
            { name: 'VS Code', icon: VscVscode, color: 'text-blue-400' }, 
            { name: 'Postman', icon: SiPostman, color: 'text-orange-500' },
            { name: 'Netlify', icon: SiNetlify, color: 'text-cyan-400' },
            { name: 'Render', icon: SiRender, color: 'text-gray-800 dark:text-gray-600' }, 
        ],
        },
    ]

    return (
        <SectionContainer id="skills" className="dark:bg-neutral-800">
        <SectionHeader
            title={
                <>
                <span className="text-pink-600">Tecnologías</span> principales
                </>
            }
            subtitle="Herramientas y tecnologías que he implementado y explorado en mis proyectos."
        />

        <div className="max-w-5xl mx-auto space-y-12">
            {skillCategories.map((category, categoryIndex) => (
            <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: categoryIndex * 0.2, duration: 0.6 }}
            >
                <Card className="bg-gray-50 dark:bg-neutral-900/60">
                <h3 className="text-xl md:text-2xl mb-6 text-center text-pink-500">{category.title}</h3>

                <div className="flex flex-wrap gap-4 justify-center">
                    {category.skills.map((skill) => (
                    <div
                        key={skill.name}
                        className="flex flex-col items-center gap-2 bg-gray-100 dark:bg-neutral-800 px-2 py-2 sm:px-4 sm:py-3 rounded-lg min-w-20 "
                    >
                        {/* Icono real con colores nativos aproximados */}
                        <skill.icon className={`w-6 h-6 sm:w-10 sm:h-10 ${skill.color}`} aria-label={skill.name} />
                        {/* Nombre */}
                        <span className="text-gray-800 dark:text-gray-200 text-sm text-center">{skill.name}</span>
                    </div>
                    ))}
                </div>
                </Card>
            </motion.div>
            ))}
        </div>
        </SectionContainer>
    )
}

export default Skills
