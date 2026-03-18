import { Linkedin, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border py-10 bg-background">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>
        <span className="text-lg font-bold text-foreground">Yuvaraj<span className="accent-dot ml-0.5" /></span>
        <p className="text-xs text-muted-foreground mt-1">© 2025 All rights reserved.</p>
      </div>
      <div className="flex items-center gap-3">
        <a href="https://www.linkedin.com/in/yuvaraj-m-bb42ab354/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
          <Linkedin size={16} />
        </a>
        <a href="https://github.com/Yuva0007" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
          <Github size={16} />
        </a>
        <a href="mailto:yuvaraj.m.7891@gmail.com" className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
          <Mail size={16} />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
