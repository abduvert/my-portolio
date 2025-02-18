import React, { useEffect } from "react";

const CursorEffect = () => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.id = "cursorCanvas";

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    canvas.style.position = "fixed";
    canvas.style.top = "0";
    canvas.style.left = "0";
    canvas.style.pointerEvents = "none";
    canvas.style.zIndex = "9999"; // Keeps it on top

    let particles = [];

    class Particle {
      constructor(x, y, size, color) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.color = color;
        this.life = 1; // Used for fading
        this.speedX = Math.random() * 1.5 - 0.75;
        this.speedY = Math.random() * 1.5 - 0.75;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;
        this.size *= 0.92; // Shrinking effect
        this.life -= 0.03; // Gradual fading

        if (this.size < 0.5 || this.life <= 0) {
          particles.splice(particles.indexOf(this), 1);
        }
      }

      draw() {
        ctx.globalAlpha = this.life;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    function handleMouseMove(event) {
      const x = event.clientX;
      const y = event.clientY;

      particles.push(
        new Particle(
          x + (Math.random() - 0.5) * 5,
          y + (Math.random() - 0.5) * 5,
          Math.random() * 4 + 1, // Smaller, more professional effect
          getTechColor()
        )
      );
    }

    function getTechColor() {
      const colors = ["#1F2937", "#4B5563", "#9CA3AF"]; // Muted tech-style colors
      return colors[Math.floor(Math.random() * colors.length)];
    }

    function animateParticles() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });
      requestAnimationFrame(animateParticles);
    }

    window.addEventListener("mousemove", handleMouseMove);
    animateParticles();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(canvas);
    };
  }, []);

  return null;
};

export default CursorEffect;
