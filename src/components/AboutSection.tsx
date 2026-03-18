import { motion } from "framer-motion";
import { User, Target, Zap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <span className="mono-tag">About Me</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-12 tracking-tight">
            Designing Solutions, Not Just Visuals
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: User, title: "Who I Am", text: "A Computer Science Engineering student in the 6th semester with a strong interest in software development, data science, and machine learning. I enjoy building practical projects that solve real-world problems." },
            { icon: Target, title: "Career Objective", text: "Seeking internship opportunities to gain real-world experience and contribute to impactful projects. Eager to apply my skills in full-stack development and data science." },
            { icon: Zap, title: "My Strengths", text: "Quick learner with a motivated mindset and strong problem-solving abilities. Continuously improving through hands-on learning and exploring new technologies." },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <item.icon className="text-primary mb-4" size={24} />
              <h3 className="text-lg font-semibold text-foreground mb-3">{item.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16"
        >
          <span className="mono-tag">Education</span>
          <div className="mt-6 glass-card p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h3 className="text-lg font-semibold text-foreground">B.E. in Computer Science</h3>
              <p className="text-sm text-muted-foreground">Sri Krishna College of Engineering And Technology</p>
            </div>
            <div className="mono-tag">Expected 2027</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
