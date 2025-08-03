import { useEffect, useRef } from 'react';

const PixelBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let pixels = [];
    const colors = ['#1E1E1E', '#BB86FC20', '#03DAC620'];
    const gap = 14;
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      createPixels();
    };

    class Pixel {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 0;
        this.maxSize = Math.random() * 2 + 0.5;
        this.speed = Math.random() * 0.4;
        this.color = colors[Math.floor(Math.random() * colors.length)];
        this.isShimmering = false;
        this.isReverse = false;
      }

      draw() {
        ctx.fillStyle = this.color;
        const offset = this.maxSize / 2 - this.size / 2;
        ctx.fillRect(this.x + offset, this.y + offset, this.size, this.size);
      }

      update() {
        if (this.size >= this.maxSize) {
          this.isShimmering = true;
        }

        if (this.isShimmering) {
            if (this.size >= this.maxSize) this.isReverse = true;
            if (this.size <= 0.5) this.isReverse = false;
            this.size += this.isReverse ? -this.speed * 0.1 : this.speed * 0.1;
        } else {
            this.size += this.speed * 0.2;
        }
        this.draw();
      }
    }

    const createPixels = () => {
      pixels = [];
      for (let x = 0; x < canvas.width; x += gap) {
        for (let y = 0; y < canvas.height; y += gap) {
          pixels.push(new Pixel(x, y));
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pixels.forEach(p => p.update());
      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener('resize', resizeCanvas);
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return <canvas ref={canvasRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }} />;
};

export default PixelBackground;