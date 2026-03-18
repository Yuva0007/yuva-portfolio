import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Alumni Management System",
    category: "Full Stack",
    desc: "Full-stack application with authentication, alumni profiles, and messaging system for institutional use.",
    tech: ["Java", "Spring Boot", "React", "Firebase"],
    github: "https://github.com/Yuva0007",
  },
  {
    title: "AI Plant Disease Detection",
    category: "Machine Learning",
    desc: "ML-based system for detecting plant leaf diseases from images and suggesting remedies to farmers.",
    tech: ["Python", "TensorFlow", "Flask"],
    github: "https://github.com/Yuva0007",
  },
  {
    title: "Online Code Compiler",
    category: "Full Stack",
    desc: "Web application with automatic language detection and code execution supporting multiple programming languages.",
    tech: ["Java", "Python", "React"],
    github: "https://github.com/Yuva0007",
  },
  {
    title: "Sales Dashboard",
    category: "Data Analytics",
    desc: "Interactive dashboard with revenue, profit, and trend analysis using advanced visualization techniques.",
    tech: ["Excel", "Power BI", "DAX"],
    github: "https://github.com/Yuva0007",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="mono-tag">Portfolio</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-12 tracking-tight">Featured Projects</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group glass-card-hover p-6"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="font-mono text-[10px] uppercase tracking-widest text-primary">{project.category}</span>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <Github size={18} />
                  </a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </a>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{project.desc}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="mono-tag text-[10px]">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
