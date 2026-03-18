import { motion } from "framer-motion";
import { Globe, Server, Database, BarChart3 } from "lucide-react";

const services = [
  { icon: Globe, title: "Web Development", desc: "Build responsive, user-friendly web applications using modern frontend technologies like React.js." },
  { icon: Server, title: "Backend Development", desc: "Develop scalable backend systems using Spring Boot and REST APIs for robust application architecture." },
  { icon: Database, title: "Database Management", desc: "Design and manage efficient MySQL databases with optimized queries and proper schema design." },
  { icon: BarChart3, title: "Data Analysis & Visualization", desc: "Analyze data using Python, Excel, and Power BI to deliver actionable business insights." },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <span className="mono-tag">Services</span>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mt-4 mb-4 tracking-tight">What I Can Do</h2>
          <p className="text-muted-foreground mb-12 max-w-2xl">Expertise across the full development lifecycle, from frontend design to backend architecture and data analysis.</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="glass-card-hover p-8"
            >
              <svc.icon className="text-primary mb-4" size={28} />
              <h3 className="text-lg font-semibold text-foreground mb-3">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
