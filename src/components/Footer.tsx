import { motion } from "framer-motion";
import { Heart, Download, Linkedin, Github, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const navigationLinks = [
  { label: "Inicio", href: "#hero" },
  { label: "Sobre mí", href: "#about" },
  { label: "Habilidades", href: "#skills" },
  { label: "Experiencia", href: "#experience" },
  { label: "Proyectos", href: "#projects" },
  { label: "Contacto", href: "#contact" }
];

const mainStack = ["React", "Vue", "Angular", "Node.js", "Laravel", "PostgreSQL", "Docker", "AWS"];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-gradient-to-b from-background to-muted/50">
      {/* Wave Separator */}
      <div className="absolute top-0 left-0 right-0">
        <svg
          className="w-full h-12 text-background"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          fill="currentColor"
        >
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" />
        </svg>
      </div>

      <div className="container mx-auto px-4 pt-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">Alejandra Nuñez</h3>
            <p className="text-muted-foreground mb-4">
              Full-Stack Developer & Automated QA
            </p>
            <p className="text-sm text-muted-foreground">
              Construyendo software de calidad con pasión por la excelencia técnica.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-bold mb-4">Navegación Rápida</h4>
            <ul className="space-y-2">
              {navigationLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-bold mb-4">Stack Principal</h4>
            <div className="flex flex-wrap gap-2">
              {mainStack.map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs cursor-default hover:scale-105 transition-transform"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </motion.div>

          {/* Contact & Social */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <h4 className="font-bold mb-4">Conecta Conmigo</h4>
            <div className="flex gap-3 mb-6">
              <motion.a
                href="https://www.linkedin.com/in/developer-qa-fullstack-alejandra"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <Linkedin className="w-5 h-5 text-[#0077B5]" />
              </motion.a>
              <motion.a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                href="https://wa.me/573004919996"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-lg glass-card flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <MessageCircle className="w-5 h-5 text-[#25D366]" />
              </motion.a>
            </div>
            <div className="text-sm text-muted-foreground mb-2">
              <strong>Ubicación:</strong> Colombia
            </div>
            <Button variant="outline" size="sm" className="w-full" asChild>
              <a href="#" download>
                <Download className="w-4 h-4 mr-2" />
                Descargar CV
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {currentYear} Daniela Alejandra Nuñez Bautista. Todos los derechos reservados.
          </p>
          <p className="text-sm text-muted-foreground flex items-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-red-500 fill-red-500 animate-pulse" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
