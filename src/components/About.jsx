// components/About.jsx - Updated with accent color classes
export default function About() {
  const technologies = [
    'JavaScript (ES6+)', 'TypeScript', 'React.js', 'Node.js', 
    'Express.js', 'MongoDB', 'PostgreSQL', 'TailwindCSS',
    'Material-UI', 'Git & GitHub', 'RESTful APIs', 'GraphQL'
  ]

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-accent-gradient">
              About Me
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I'm a passionate Full Stack Developer with expertise in modern web technologies. 
                I love creating digital experiences that are not only functional but also beautiful 
                and user-friendly.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
                Currently working on building scalable web applications and always eager to learn 
                new technologies. I believe in writing clean, maintainable code and following 
                best practices in software development.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-accent">
                  Technologies I work with:
                </h3>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-slate-800 text-slate-300 rounded-full text-sm hover:bg-accent hover:text-white transition-colors cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-80 h-80 mx-auto relative">
                <div className="absolute inset-0 bg-accent-gradient rounded-full opacity-20 animate-pulse"></div>
                <div className="absolute inset-4 bg-slate-800 rounded-full flex items-center justify-center">
                  <div className="text-6xl">👨‍💻</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}