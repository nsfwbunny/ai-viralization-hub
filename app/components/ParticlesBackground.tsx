'use client';

import { useEffect, useRef } from 'react';

export default function ParticlesBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Partículas 3D com conexões
    interface Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      size: number;
      color: string;
    }

    const particles: Particle[] = [];
    const particleCount = 150;

    // Cores com gradiente dourado (como no exemplo)
    const colors = ['#d4af37', '#f0e68c', '#ffd700', '#ffed4e'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        z: Math.random() * 1000,
        vx: (Math.random() - 0.5) * 3,
        vy: (Math.random() - 0.5) * 3,
        vz: (Math.random() - 0.5) * 8,
        size: Math.random() * 4 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    let rotation = 0;

    function animate() {
      // Fundo semi-transparente para efeito de trilha
      ctx.fillStyle = 'rgba(10, 10, 10, 0.15)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      rotation += 0.002;

      particles.forEach((particle, index) => {
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.z += particle.vz;

        // Envolver ao redor
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;
        if (particle.z < 0) particle.z = 1000;
        if (particle.z > 1000) particle.z = 0;

        // Efeito de perspectiva 3D
        const scale = particle.z / 1000;
        const size = particle.size * scale * 2;
        const opacity = 0.3 + scale * 0.7;

        // Desenhar partícula com shimmer
        const shimmer = Math.sin(rotation * 5 + index) * 0.5 + 0.5;
        ctx.fillStyle = `rgba(212, 175, 55, ${opacity * (0.5 + shimmer * 0.5)})`;
        ctx.shadowColor = `rgba(212, 175, 55, ${opacity * shimmer})`;
        ctx.shadowBlur = 10 + shimmer * 10;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Desenhar linhas conectando partículas próximas (efeito de rede)
        particles.forEach((otherParticle, otherIndex) => {
          if (index >= otherIndex) return;

          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const alpha = (1 - distance / 200) * 0.3;
            ctx.strokeStyle = `rgba(212, 175, 55, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });

      // Desenhar esfera 3D wireframe no centro (como no exemplo)
      drawWireframeSphere(ctx, canvas.width / 2, canvas.height / 2, 80, rotation);

      ctx.shadowColor = 'transparent';
      requestAnimationFrame(animate);
    }

    function drawWireframeSphere(
      ctx: CanvasRenderingContext2D,
      centerX: number,
      centerY: number,
      radius: number,
      rotation: number
    ) {
      const segments = 12;
      const rings = 8;

      for (let i = 0; i < segments; i++) {
        ctx.beginPath();
        for (let j = 0; j <= rings; j++) {
          const lat = (j / rings) * Math.PI;
          const lon = (i / segments) * Math.PI * 2;

          const x = Math.sin(lat) * Math.cos(lon + rotation);
          const y = Math.sin(lat) * Math.sin(lon + rotation);
          const z = Math.cos(lat);

          const screenX = centerX + x * radius;
          const screenY = centerY + y * radius;
          const opacity = (z + 1) / 2 * 0.4;

          ctx.strokeStyle = `rgba(212, 175, 55, ${opacity})`;
          ctx.lineWidth = 0.5;

          if (j === 0) {
            ctx.moveTo(screenX, screenY);
          } else {
            ctx.lineTo(screenX, screenY);
          }
        }
        ctx.stroke();
      }
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: -1,
        opacity: 0.7,
      }}
    />
  );
}
