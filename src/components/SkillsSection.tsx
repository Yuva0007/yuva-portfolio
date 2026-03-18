import { motion } from "framer-motion";

const skillCategories = [
  { title: "Programming", skills: ["Java", "Python", "JavaScript"] },
  { title: "Web Development", skills: ["HTML", "CSS", "React.js"] },
  { title: "Backend", skills: ["Spring Boot", "REST APIs"] },
  { title: "Database & Tools", skills: ["MySQL", "Git", "GitHub"] },
  { title: "Data & Analytics", skills: ["NumPy", "Pandas", "Excel", "Power BI"] },
  { title: "Core Concepts", skills: ["DSA", "OS", "Computer Networks"] },
];

const container = { hidden: { opacity: 0 }, show: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } } };
const item = { hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.2, 0.8, 0.2, 1] } } };

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="mono-tag">Skills</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-12 tracking-tight">Technical Arsenal</h2>
        </motion.div>

        <motion.div variants={container} initial="hidden" whileInView="show" viewport={{ once: true }} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat) => (
            <motion.div key={cat.title} variants={item} className="glass-card p-6">
              <h3 className="font-mono text-xs uppercase tracking-widest text-primary mb-4">{cat.title}</h3>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="mono-tag">{skill}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
