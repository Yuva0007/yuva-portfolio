import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
  {
    title: "Alumni Management System",
    category: "Full Stack",
    desc: "Full-stack application with authentication, alumni profiles, and messaging system for institutional use.",
    tech: ["Java", "Spring Boot", "React", "Firebase"],
    github: "https://github.com/Yuva0007",
    live: "",
  },
  {
    title: "AI Plant Disease Detection",
    category: "Machine Learning",
    desc: "ML-based system for detecting plant leaf diseases from images and suggesting remedies to farmers.",
    tech: ["Python", "TensorFlow", "Flask"],
    github: "https://github.com/Yuva0007",
    live: "",
  },
  {
    title: "Online Code Compiler",
    category: "Full Stack",
    desc: "Web application with automatic language detection and code execution supporting multiple programming languages.",
    tech: ["Java", "Python", "React"],
    github: "https://github.com/Yuva0007",
    live: "https://compiler-front-end.vercel.app/",
  },
  {
    title: "Sales Dashboard",
    category: "Data Analytics",
    desc: "Interactive dashboard with revenue, profit, and trend analysis using advanced visualization techniques.",
    tech: ["Excel", "Power BI", "DAX"],
    github: "https://github.com/Yuva0007",
    live: "",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="section-label">Portfolio</span>
          <h2 className="section-title">Digital Product Showcases</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group card-elevated p-6 relative overflow-hidden"
            >
              {/* Category badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary bg-primary/5 px-3 py-1 rounded-full">{project.category}</span>
                <div className="flex gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                    <Github size={15} />
                  </a>
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                      <ArrowUpRight size={15} />
                    </a>
                  )}
                </div>
              </div>

              <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5">{project.desc}</p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="skill-tag text-[10px]">{t}</span>
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
