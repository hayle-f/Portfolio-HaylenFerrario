import { useState } from "react"
import Button from "./Button"


const ContactForm = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)
    const [error, setError] = useState(null)
    const [validErrors, setValidErrors] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()

        setError(null)
        setValidErrors({})

        const form = e.target
        const gotcha = form._gotcha.value
        if (gotcha) return

        const name = form.name.value.trim()
        const email = form.email.value.trim()
        const message = form.message.value.trim()

        // Validaciones
        const newValidErrors = {
            name: !name ? 'El nombre es obligatorio' : '',
            email: !email ? 'El email es obligatorio' : (!/^\S+@\S+\.\S+$/.test(email) ? 'Email no válido' : ''),
            message: !message ? 'El mensaje es obligatorio' : ''
        }

        setValidErrors(newValidErrors)

        // Si hay algún error, cortamos aquí
        if (Object.values(newValidErrors).some(err => err)) return

        // Si pasa las validaciones
        setIsLoading(true)

        try {
            const formData = new FormData(form)
            const response = await fetch('https://formspree.io/f/mykwwqbq', {
            method: 'POST',
            headers: { 'Accept': 'application/json' },
            body: formData
            })

            if (response.ok) {
            setIsSuccess(true)
            form.reset()
            setTimeout(() => setIsSuccess(false), 4000)
            } else {
            setError('Algo salio mal. Intenta nuevamente.')
            }
        } catch {
            setError('Error de conexión. Intenta más tarde.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                <label 
                    htmlFor='name'
                    className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                        Nombre
                </label>
                <input
                    id='name'
                    name='name'
                    type="text"
                    className="w-full p-3 shadow-lg border border-neutral-100 dark:border-neutral-500 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:shadow-neutral-400/60 dark:focus:shadow-neutral-600"
                />
                {validErrors.name && (
                    <p className="text-sm text-red-600 mt-2 mr-2 text-right">
                        {validErrors.name}
                    </p>
                )}
                </div>

                <div>
                <label
                    htmlFor='email'
                    className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                        Email
                </label>
                <input
                    id='email'
                    name='email'
                    type="text"
                    className="w-full p-3 shadow-lg border border-neutral-100 dark:border-neutral-500 rounded-lg bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:shadow-neutral-400/60 dark:focus:shadow-neutral-600"
                />
                {validErrors.email && (
                    <p className="text-sm text-red-600 mt-1.5 mr-2 text-right">
                        {validErrors.email}
                    </p>
                )}
                </div>

                <div>
                <label
                    htmlFor='message'
                    className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                        Mensaje
                </label>
                <textarea
                    id='message'
                    name='message'
                    rows="4"
                    className="w-full p-3 shadow-lg rounded-lg  border border-neutral-100 dark:border-neutral-500 bg-white dark:bg-neutral-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:shadow-neutral-400/60 dark:focus:shadow-neutral-600"
                ></textarea>
                {validErrors.message && (
                    <p className="text-sm text-red-600 mt-1.5 mr-2 text-right">
                        {validErrors.message}
                    </p>
                )}
                </div>

                <input type="text" name="_gotcha" className="hidden" />

                <Button
                type="submit"
                disabled={isLoading}
                className="w-full mt-1.5 sm:text-lg rounded-lg transition-all duration-300 bg-linear-to-r from-pink-500 to-purple-600 text-white"
                >
                {isLoading ? 'Enviando...' : 'Enviar' }
                </Button>

            </form>

            {/* Mensaje dinámico debajo del form */}
            {(isSuccess || error) && (
            <div
                className={`mt-4 p-3 rounded-lg text-sm text-center font-medium transition-all duration-300
                ${isSuccess
                    ? 'bg-green-50 text-green-700 border border-green-300'
                    : 'bg-red-50 text-red-700 border border-red-300'}
                `}
            >
                {isSuccess
                ? '¡Gracias por tu mensaje!. Te respondere a la brevedad.'
                : error}
            </div>
            )}

        </>
    )
}

export default ContactForm