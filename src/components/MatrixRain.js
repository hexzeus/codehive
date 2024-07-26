import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 10;  // Increase this value
`;

const MatrixRain = () => {
    const canvasRef = useRef(null);
    const dropsRef = useRef([]);
    const animationRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*()_+';
        const fontSize = 14;
        let columns = 0;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            columns = Math.floor(canvas.width / fontSize);
            dropsRef.current = Array(columns).fill(1);
        };

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < columns; i++) {
                const text = characters[Math.floor(Math.random() * characters.length)];
                ctx.fillText(text, i * fontSize, dropsRef.current[i] * fontSize);

                if (dropsRef.current[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    dropsRef.current[i] = 0;
                }

                dropsRef.current[i]++;
            }

            animationRef.current = requestAnimationFrame(draw);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);
        draw();

        return () => {
            cancelAnimationFrame(animationRef.current);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    return <Canvas ref={canvasRef} />;
};

export default MatrixRain;