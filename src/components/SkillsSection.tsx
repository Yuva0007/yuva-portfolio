import { motion } from "framer-motion";

const skillCategories = [
  { title: "Programming", skills: ["Java", "Python", "JavaScript"] },
  { title: "Web Development", skills: ["HTML", "CSS", "React.js"] },
  { title: "Backend", skills: ["Spring Boot", "REST APIs"] },
  { title: "Database & Tools", skills: ["MySQL", "Git", "GitHub"] },
  { title: "Data & Analytics", skills: ["NumPy", "Pandas", "Excel", "Power BI"] },
  { title: "Core Concepts", skills: ["DSA", "OS", "Computer Networks"] },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-secondary/50">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="section-label">Skills</span>
          <h2 className="section-title">Technical Arsenal</h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="card-elevated p-6"
            >
              <h3 className="text-xs font-semibold uppercase tracking-[0.15em] text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="skill-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
