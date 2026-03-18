import { motion } from "framer-motion";
import { Globe, Server, Database, BarChart3, Code, Brain } from "lucide-react";

const services = [
  { icon: Code, title: "Web Development", desc: "Build responsive, user-friendly web applications using modern frontend technologies like React.js.", color: "bg-emerald-50 text-emerald-600" },
  { icon: Server, title: "Backend Development", desc: "Develop scalable backend systems using Spring Boot and REST APIs for robust architecture.", color: "bg-amber-50 text-amber-600" },
  { icon: Database, title: "Database Management", desc: "Design and manage efficient MySQL databases with optimized queries and proper schema.", color: "bg-blue-50 text-blue-600" },
  { icon: BarChart3, title: "Data Analysis", desc: "Analyze data using Python, Excel, and Power BI to deliver actionable business insights.", color: "bg-purple-50 text-purple-600" },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <span className="section-label">Services</span>
          <h2 className="section-title mx-auto">What I Can Do</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Expertise across the full development lifecycle, from frontend design to backend architecture and data analysis.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, i) => (
            <motion.div
              key={svc.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="card-elevated p-6 text-center group"
            >
              <div className={`w-14 h-14 rounded-2xl ${svc.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform`}>
                <svc.icon size={24} />
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2">{svc.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
