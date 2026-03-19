import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";
import profileImg from "@/assets/profile-light.png";

const HeroSection = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden bg-background pt-20">
      {/* Decorative dots pattern top-right */}
      <div className="absolute top-32 right-12 hidden lg:grid grid-cols-5 gap-2 opacity-30">
        {Array.from({ length: 25 }).map((_, i) => (
          <div key={i} className="w-1.5 h-1.5 rounded-full bg-primary/40" />
        ))}
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left - Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.8, 0.2, 1] }}
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-foreground leading-[1.1] mb-6 tracking-tight">
              Hy! I Am<br />
              <span className="text-foreground">Yuvaraj M</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed mb-8 max-w-md text-base">
              Aspiring Software Developer and Data Science enthusiast, 
              building practical solutions through code and data with a focus on 
              full-stack development and machine learning.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <a href="#projects" className="inline-flex items-center gap-2 px-7 py-3.5 bg-primary text-primary-foreground rounded-lg font-semibold text-sm hover:bg-primary/90 transition-all active:scale-95 shadow-lg shadow-primary/25">
                View Projects
              </a>
              <a href="#about" className="inline-flex items-center gap-2 px-7 py-3.5 border-2 border-foreground text-foreground rounded-lg font-semibold text-sm hover:bg-foreground hover:text-background transition-all active:scale-95">
                Know More
              </a>
            </div>

            {/* Role badge */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                <ChevronRight size={18} className="text-primary" />
              </div>
              <p className="text-sm text-muted-foreground">
                Computer Science Engineering Student<br />
                <span className="text-foreground font-medium">specialized in Full-Stack & ML.</span>
              </p>
            </div>
          </motion.div>

          {/* Right - Profile with geometric shape */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Red geometric background shape */}
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-80 h-96 sm:w-96 sm:h-[28rem] bg-gradient-to-br from-primary to-primary/80 rounded-3xl -rotate-6 z-0" />
              <div className="absolute -top-2 -right-2 w-80 h-96 sm:w-96 sm:h-[28rem] bg-gradient-to-br from-primary/60 to-primary/40 rounded-3xl -rotate-3 z-0" />
              
              {/* Profile image */}
              <div className="relative z-10 w-80 h-96 sm:w-96 sm:h-[28rem] rounded-3xl overflow-hidden">
                <img src={profileImg} alt="Yuvaraj M" className="w-full h-full object-contain object-bottom" />
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-8 bottom-24 z-20 bg-card rounded-xl shadow-xl px-5 py-3 border border-border"
              >
                <div className="text-3xl font-bold text-primary">4+</div>
                <div className="text-xs text-muted-foreground font-medium">Completed<br />projects</div>
              </motion.div>

              {/* Experience badge */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-4 top-12 z-20 bg-card rounded-xl shadow-xl px-4 py-3 border border-border flex items-center gap-2"
              >
                <span className="text-2xl">🎓</span>
                <div>
                  <div className="text-xs font-bold text-foreground">B.E. CSE</div>
                  <div className="text-[10px] text-muted-foreground">6th Semester</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
