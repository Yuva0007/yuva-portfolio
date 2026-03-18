import { motion } from "framer-motion";
import { ArrowRight, Mail } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center dot-grid overflow-hidden">
      {/* Glow effects */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="section-container relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <span className="mono-tag mb-6 inline-block">Software Developer</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-4">
              Hello, I'm{" "}
              <span className="gradient-text">Yuvaraj M</span>
            </h1>
            <p className="text-lg text-muted-foreground font-medium mb-2">
              Aspiring Software Developer | Data Science & ML Enthusiast
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Building practical solutions through code and data. Currently pursuing Computer Science Engineering with a focus on full-stack development and machine learning.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <a href="#projects" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-xl font-medium hover:bg-primary/90 transition-all active:scale-95">
                View Projects <ArrowRight size={16} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 border border-border rounded-xl font-medium text-foreground hover:bg-secondary transition-all active:scale-95">
                <Mail size={16} /> Contact Me
              </a>
            </div>

            <div className="flex gap-6">
              {[
                { label: "Projects", value: "4+" },
                { label: "Technologies", value: "15+" },
                { label: "Semester", value: "6th" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground font-mono uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-72 h-72 sm:w-80 sm:h-80 rounded-2xl overflow-hidden border border-primary/30 glow-border">
                <img src={profileImg} alt="Yuvaraj M" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 glass-card px-4 py-2">
                <span className="font-mono text-xs text-primary">B.E. CSE</span>
                <span className="text-xs text-muted-foreground ml-2">• 2027</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
