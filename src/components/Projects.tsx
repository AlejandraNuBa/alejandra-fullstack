import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "CRM Empresarial B2B",
    description: "Sistema CRM completo con gestión de clientes, pipeline de ventas y reportes en tiempo real.",
    stack: ["Vue", "Laravel", "MySQL", "Redis"],
    highlights: ["Dashboard interactivo", "Roles y permisos", "API REST", "Integración Zoho"],
    category: "fullstack",
    demo: "#contact",
    repo: "#contact"
  },
  {
    title: "E-commerce B2B",
    description: "Plataforma de comercio electrónico con catálogo dinámico, carrito y checkout optimizado.",
    stack: ["React", "Redux", "Node.js", "PostgreSQL"],
    highlights: ["SSR con Next.js", "Pagos Stripe", "Inventario real-time", "Admin dashboard"],
    category: "fullstack",
    demo: "#contact",
    repo: "#contact"
  },
  {
    title: "Portal de Campañas Marketing",
    description: "Sistema de gestión de campañas publicitarias con analytics y segmentación de audiencias.",
    stack: ["Angular", "TypeScript", "PHP", "CodeIgniter"],
    highlights: ["Analytics avanzado", "Segmentación IA", "A/B Testing", "Reportes PDF"],
    category: "fullstack",
    demo: "#contact",
    repo: "#contact"
  },
  {
    title: "Framework QA Automatizado",
    description: "Framework de testing automatizado para aplicaciones web con reporte de cobertura.",
    stack: ["Selenium", "Cypress", "Python", "CI/CD"],
    highlights: ["Cross-browser", "Integración Jenkins", "Reportes HTML", "Screenshots automáticos"],
    category: "qa",
    demo: "#contact",
    repo: "#contact"
  },
  {
    title: "API Microservicios",
    description: "Arquitectura de microservicios con autenticación JWT y documentación Swagger.",
    stack: ["Node.js", "Express", "MongoDB", "Docker"],
    highlights: ["Dockerizado", "API Gateway", "Rate limiting", "Swagger docs"],
    category: "backend",
    demo: "#contact",
    repo: "#contact"
  },
  {
    title: "Dashboard Analytics",
    description: "Dashboard interactivo con gráficos D3.js y visualización de datos en tiempo real.",
    stack: ["React", "D3.js", "WebSocket", "GraphQL"],
    highlights: ["Real-time updates", "Gráficos interactivos", "Export CSV/PDF", "Filtros avanzados"],
    category: "frontend",
    demo: "#contact",
    repo: "#contact"
  }
];

const categories = [
  { id: "all", label: "Todos" },
  { id: "fullstack", label: "Full-Stack" },
  { id: "frontend", label: "Frontend" },
  { id: "backend", label: "Backend" },
  { id: "qa", label: "QA/Testing" }
];

export const Projects = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" ref={ref} className="py-20 md:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Proyectos <span className="gradient-text">Destacados</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto"
          >
            Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack y QA automatizado
          </motion.p>

          {/* Category Filters */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.id)}
                className="rounded-full"
              >
                {cat.label}
              </Button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card p-6 rounded-2xl group"
              >
                <div className="mb-4">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {project.description}
                  </p>

                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li key={i} className="text-xs text-muted-foreground flex items-start gap-2">
                          <span className="text-primary">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button size="sm" variant="outline" className="flex-1" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                    </a>
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
