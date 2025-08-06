// components/Skills.jsx - Updated with accent color classes
export default function Skills() {
  const skills = [
    { name: 'Frontend Development', level: 90, icon: '🎨' },
    { name: 'Backend Development', level: 85, icon: '⚙️' },
    { name: 'Database Design', level: 80, icon: '🗄️' },
    { name: 'API Development', level: 88, icon: '🔗' },
    { name: 'UI/UX Design', level: 75, icon: '✨' },
    { name: 'DevOps & Deployment', level: 70, icon: '🚀' }
  ]

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
            <span className="text-accent-gradient">
              Skills & Expertise
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-slate-800/50 p-6 rounded-xl hover:bg-slate-800/70 transition-colors">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">{skill.icon}</span>
                  <h3 className="text-xl font-semibold">{skill.name}</h3>
                </div>
                
                <div className="w-full bg-slate-700 rounded-full h-3 mb-2">
                  <div
                    className="bg-accent-gradient h-3 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                
                <div className="text-right text-sm text-slate-400">
                  {skill.level}%
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}