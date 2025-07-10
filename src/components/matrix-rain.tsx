"use client";

import React, { useRef, useEffect } from 'react';

const MatrixRain = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    const setCanvasDimensions = () => {
      canvas.width = canvas.parentElement?.clientWidth || 400;
      canvas.height = canvas.parentElement?.clientHeight || 400;
    };

    setCanvasDimensions();
    
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const alphabet = katakana + latin + nums;

    const fontSize = 16;
    const columns = Math.floor(canvas.width / fontSize);

    const rainDrops: number[] = [];
    for (let x = 0; x < columns; x++) {
      rainDrops[x] = 1;
    }

    let frameCount = 0;

    const draw = () => {
      if (!context) return;

      if (frameCount % 4 === 0) { // Slow down the animation
        context.fillStyle = 'rgba(0, 0, 0, 0.05)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        context.fillStyle = '#0F0'; // green text
        context.font = fontSize + 'px monospace';

        for (let i = 0; i < rainDrops.length; i++) {
          const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
          context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

          if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
            rainDrops[i] = 0;
          }
          rainDrops[i]++;
        }
      }
      frameCount++;
    };

    const interval = setInterval(draw, 30);
    
    const handleResize = () => {
      setCanvasDimensions();
    };
    
    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    }
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default MatrixRain;
