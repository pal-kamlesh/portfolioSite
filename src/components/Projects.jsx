// components/Projects.jsx - Updated with accent color classes
const projects = [
  {
    title: "Cineplex",
    description:
      "A dynamic React web app leveraging TailwindCSS and custom hooks, providing a feature-rich movie browsing experience with MovieDB API integration.",
    tech: ["React", "TailwindCSS", "API Integration", "Vite"],
    image:
      "https://res.cloudinary.com/did98arnv/image/upload/v1754671727/Screenshot_from_2025-08-08_22-14-00_mijta7.png",
    github: "https://github.com/pal-kamlesh",
    live: "https://cineplex-kjbg.onrender.com/",
    category: "Web App",
  },
  {
    title: "TicketNest",
    description: `TicketNest is a centralized complaint management portal designed
                to streamline the process of registering, scheduling, and
                rescheduling complaints. Built to enhance service efficiency,
                TicketNest ensures that every complaint is systematically logged
                and tracked until resolution. The platform automatically
                triggers email notifications to clients, keeping them informed
                about the status of their complaints. With its structured
                workflow, TicketNest improves response times, enhances customer
                satisfaction, and helps businesses maintain seamless
                communication with their clients.
              `,
    tech: [
      "React",
      "TailwindCSS",
      "Express.js",
      "MongoDB",
      "bcrypt",
      "cloudinary",
      "reduxjs/toolkit",
    ],
    image:
      "https://res.cloudinary.com/did98arnv/image/upload/v1754750807/ticketnest_ty92s4.png",
    github: "#",
    live: "https://www.ticketnest.sat9.in/",
    category: "Full Stack",
  },
  {
    title: "ATT Project ERP",
    description: `ATT is an integrated process designed to direct work processes
                towards automation and lean data management in the sector of
                pre-construction anti-termite work. It is an integrated system
                that binds enquiries, quotations, contracts, and execution,
                allowing a dashboard view for each dimension. Ultimately, it
                provides a cumulative report that enhances the management of
                projects and deliverables.`,
    tech: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "reduxjs/toolkit",
      "Multer",
      "Morgan",
      "bcrypt",
      "cloudinary",
    ],
    image:
      "https://res.cloudinary.com/did98arnv/image/upload/v1754751710/att_lobsos.png",
    github: "#",
    live: "https://att-quotation.onrender.com/",
    category: "Full Stack",
  },
  {
    title: "MERN Blog Platform",
    description: `MERN Blog Platform is a comprehensive content management system designed
              to deliver a seamless blogging experience for both administrators and readers.
              Built with modern web technologies, this platform empowers administrators to
              create, edit, and manage blog posts with rich text editing capabilities and
              image upload functionality. The system features user authentication with Google
              OAuth integration, ensuring secure access and streamlined user onboarding.
              With its robust comment system, readers can engage with content through likes
              and discussions. The platform includes comprehensive admin dashboards for
              managing users, posts, and comments, while providing search functionality
              and categorized content organization to enhance user experience and content
              discoverability.`,
    tech: [
      "React",
      "TailwindCSS",
      "Express.js",
      "MongoDB",
      "JWT",
      "Firebase",
      "Redux Toolkit",
      "Flowbite React",
      "React Quill",
      "bcryptjs",
    ],
    image:
      "https://res.cloudinary.com/did98arnv/image/upload/v1754882935/Screenshot_from_2025-08-11_08-54-00_jorkir.png",
    github: "https://github.com/pal-kamlesh/mern-blog.git",
    live: "#",
    category: "Full Stack",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900/50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            <span className="text-accent-gradient">Featured Projects</span>
          </h2>
          <p className="text-xl text-slate-400 text-center mb-16">
            Here are some projects I'm proud of
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-slate-800/50 rounded-xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-white text-sm rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-slate-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-slate-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {project.github !== "#" && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-slate-700 text-white rounded-lg hover:bg-accent transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                        Code
                      </a>
                    )}
                    {project.live !== "#" && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-accent text-white rounded-lg hover:bg-accent/80 transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
