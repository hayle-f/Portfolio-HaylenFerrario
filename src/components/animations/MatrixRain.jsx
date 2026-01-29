import { useEffect, useRef } from 'react'

const MatrixRain = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const container = canvas.parentElement
    if (!container) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId;
    let lastTime = 0
    const interval = 100 // milliseconds

    const characters = '01'
    const fontSize = 18
    let columns
    let drops

    const initRain = () => {
      columns = Math.floor(canvas.width / fontSize)
      drops = []
      for (let x = 0; x < columns; x++) {
        drops[x] = Math.floor(Math.random() * (canvas.height / fontSize))
      }
    }

    const resizeCanvas = () => {
      canvas.width = container.clientWidth
      canvas.height = container.clientHeight
      initRain() // Reinicializar columns y drops al cambiar tamaño
    }

    resizeCanvas() // Inicializar al cargar

    const draw = () => {
      ctx.fillStyle = theme === 'dark' ? 'rgba(0, 0, 0, 0.035)' : 'rgba(245, 245, 245, 0.03)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < drops.length; i++) {
        const text = characters.charAt(
          Math.floor(Math.random() * characters.length)
        )
        const y = drops[i] * fontSize
        const hue = (y / canvas.height) * 360

        ctx.fillStyle = `hsla(${hue}, 70%, 70%, 1)`
        ctx.fillText(text, i * fontSize, y)

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }

        drops[i]++
      }
    }

    const animate = (timestamp) => {
      if (timestamp - lastTime > interval) {
        draw()
        lastTime = timestamp
      }
      animationFrameId = window.requestAnimationFrame(animate)
    }

    animate(0)

    window.addEventListener('resize', resizeCanvas)

    return () => {
      window.cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [theme])

  return (
    <div className="absolute top-0 left-0 w-full h-full">
      <canvas
        ref={canvasRef}
        className="absolute top-0 left-0 w-full h-full"
      />
      {/* Blur/Gradient oval desde el centro */}
      <div 
        className="absolute top-0 left-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 55% 60% at 50% 45%, 
            ${theme === 'dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(230, 230, 230, 1)'} 0%, 
            ${theme === 'dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(230, 230, 230, 1)'} 30%, 
            ${theme === 'dark' ? 'rgba(0, 0, 0, 0.85)' : 'rgba(230, 230, 230, 0.85)'} 50%, 
            ${theme === 'dark' ? 'rgba(0, 0, 0, 0.4)' : 'rgba(230, 230, 230, 0.4)'} 70%, 
            transparent 90%)`
        }}
      />
    </div>
  )
}

export default MatrixRain