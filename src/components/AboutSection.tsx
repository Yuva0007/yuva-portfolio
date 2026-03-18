import { motion } from "framer-motion";
import { Briefcase, User, Target, Zap, GraduationCap } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="section-padding bg-secondary/50">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Experience highlight */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="relative">
              {/* Big experience card */}
              <div className="bg-accent text-accent-foreground rounded-2xl p-8 inline-block">
                <div className="text-5xl font-bold mb-1">3+</div>
                <div className="text-sm font-medium opacity-90">Years<br />Learning &<br />Building</div>
              </div>

              {/* About cards */}
              <div className="mt-8 space-y-4">
                {[
                  { icon: User, title: "Who I Am", text: "A Computer Science Engineering student in the 6th semester passionate about building real-world solutions." },
                  { icon: Target, title: "Objective", text: "Seeking internship opportunities to gain hands-on experience and contribute to impactful projects." },
                  { icon: Zap, title: "Strengths", text: "Quick learner, strong problem-solving mindset, and motivated to continuously grow through practical work." },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon size={18} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right - Bio + Education */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <span className="section-label">About Me</span>
            <h2 className="section-title">
              Designing Solutions,<br />Not Just Visuals
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Yuvaraj M is a Computer Science Engineering student with a strong interest in software development, 
              data science, and machine learning. He enjoys building practical projects that solve real-world 
              problems and continuously improves his skills through hands-on learning.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="card-elevated p-5 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-primary" />
                <div>
                  <div className="text-sm font-bold text-foreground">4+ Complete Projects</div>
                  <p className="text-xs text-muted-foreground">Full-stack & ML projects</p>
                </div>
              </div>
              <div className="card-elevated p-5 flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-accent" />
                <div>
                  <div className="text-sm font-bold text-foreground">6th Semester</div>
                  <p className="text-xs text-muted-foreground">B.E. CSE • Expected 2027</p>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="card-elevated p-5 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                <GraduationCap size={22} className="text-accent" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-foreground">B.E. in Computer Science</h4>
                <p className="text-xs text-muted-foreground">Sri Krishna College of Engineering And Technology</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
