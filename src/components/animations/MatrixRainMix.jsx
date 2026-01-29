import { useEffect, useRef } from 'react';

const MatrixRain = ({ theme = 'dark' }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    
    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Matrix rain configuration - columnas más juntas
    const fontSize = 12;
    const columns = Math.floor(canvas.width / fontSize);
    const drops = Array(columns).fill(1);
    
    // Asignar un color a cada columna
    const columnColors = Array(columns).fill(null).map(() => {
      const colors = theme === 'dark' 
        ? [
            '#ff69b4', // Rosa
            '#87ceeb', // Azul cielo
            '#98fb98', // Verde menta
            '#dda0dd', // Violeta
            '#f0e68c', // Amarillo
            '#ffa07a', // Salmon
          ]
        : [
            '#ffb6c1', // Rosa claro
            '#add8e6', // Azul claro
            '#90ee90', // Verde claro
            '#dda0dd', // Violeta claro
            '#fffacd', // Amarillo claro
            '#ffdab9', // Durazno
          ];
      return colors[Math.floor(Math.random() * colors.length)];
    });
    
    // Binary characters: 0 and 1
    const binary = ['0', '1'];

    const draw = () => {
      // Fade effect suave
      ctx.fillStyle = 'rgba(0, 0, 0, 0.03)';
      if (theme === 'light') {
        ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
      }
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw binary characters
      ctx.font = `300 ${fontSize}px monospace`;
      
      for (let i = 0; i < drops.length; i++) {
        // Random binary character
        const text = binary[Math.floor(Math.random() * binary.length)];
        
        // Usar el color asignado a esta columna
        const baseColor = columnColors[i];
        
        // Los números más recientes (cerca de la punta) son más opacos
        const opacity = Math.random() > 0.7 ? 1 : 0.3;
        ctx.fillStyle = baseColor + Math.floor(opacity * 255).toString(16).padStart(2, '0');
        
        // Draw character
        const x = i * fontSize;
        const y = drops[i] * fontSize;
        ctx.fillText(text, x, y);

        // Reset drop to top randomly
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        // Increment Y coordinate
        drops[i]++;
      }
    };

    // Animation
    const interval = setInterval(draw, 80);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [theme]);

  // Degradado de fondo de arriba a abajo
  const backgroundGradient = theme === 'dark'
    ? 'linear-gradient(to bottom, #000000 0%, #1a0a2e 50%, #0f0520 100%)'
    : 'linear-gradient(to bottom, #ffffff 0%, #fff5f7 50%, #ffe8f0 100%)';

  return (
    <div className="absolute inset-0 w-full h-full" style={{ background: backgroundGradient }}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
      />
      {/* Blur/Gradient oval desde el centro */}
      <div 
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 60% 50% at 50% 50%, 
            ${theme === 'dark' ? 'rgba(0, 0, 0, 1)' : 'rgba(255, 255, 255, 1)'} 0%, 
            ${theme === 'dark' ? 'rgba(0, 0, 0, 0.95)' : 'rgba(255, 255, 255, 0.95)'} 15%, 
            ${theme === 'dark' ? 'rgba(0, 0, 0, 0.7)' : 'rgba(255, 255, 255, 0.7)'} 30%, 
            ${theme === 'dark' ? 'rgba(0, 0, 0, 0.3)' : 'rgba(255, 255, 255, 0.3)'} 50%, 
            transparent 80%)`
        }}
      />
    </div>
  );
};

export default MatrixRain;
