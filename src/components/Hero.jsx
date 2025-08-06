// components/Hero.jsx - Updated with proper accent color usage
import { useEffect, useRef } from "react";

export default function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const particles = [];
    const particleCount = 100;

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.size = Math.random() * 2 + 1;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        // Use CSS custom property for particle color
        const accentColor = getComputedStyle(
          document.documentElement
        ).getPropertyValue("--accent-color-rgb");
        ctx.fillStyle = `rgba(${accentColor}, 0.3)`;
        ctx.fill();
      }
    }

    const initParticles = () => {
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
        style={{ zIndex: 1 }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div className="mb-8 opacity-0 animate-fadeInUp">
          <span className="text-lg text-slate-400 font-mono">Hello, I'm</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 opacity-0 animate-fadeInUp animation-delay-200">
          <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
            Kamlesh Pal
          </span>
        </h1>

        <h2 className="text-2xl md:text-4xl mb-8 opacity-0 animate-fadeInUp animation-delay-400">
          <span className="text-accent font-semibold">
            Full Stack Developer
          </span>
        </h2>

        <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fadeInUp animation-delay-600">
          I craft modern web applications using the MERN stack, creating
          seamless user experiences with clean code and innovative solutions.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fadeInUp animation-delay-800">
          <button
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-accent text-white rounded-full hover:bg-accent/80 transition-all duration-300 font-semibold transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            View My Work
          </button>
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 border-2 border-accent text-accent rounded-full hover:bg-accent hover:!text-white transition-all duration-300 font-semibold transform hover:scale-105"
          >
            Get In Touch
          </button>
        </div>

        <div className="mt-16 opacity-0 animate-fadeInUp animation-delay-1000">
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 mx-auto text-accent"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
