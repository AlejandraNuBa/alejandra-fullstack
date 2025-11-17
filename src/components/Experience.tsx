import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Briefcase } from "lucide-react";
import { Badge } from "./ui/badge";

const experiences = [
  {
    company: "Wookky",
    role: "Full-Stack Developer",
    period: "Dic 2023 – Presente",
    location: "Colombia",
    description: "Desarrollo de CRM con Vue + Laravel + Symfony + MySQL y microservicios REST. B2B e-commerce con React/Redux + Node/Express + PostgreSQL. Portal de campañas con Angular/TS + PHP/CodeIgniter.",
    stack: ["Vue", "React", "Angular", "Laravel", "Node.js", "PostgreSQL", "Docker", "AWS"],
    highlights: [
      "Despliegues en Docker/Kubernetes/AWS",
      "Tests con PyTest/Jest/PHPUnit",
      "Orquestación con Jira/AioTest/Redmine"
    ]
  },
  {
    company: "Overfuel",
    role: "Full-Stack Developer",
    period: "Jul 2023 – Dic 2023",
    location: "Indiana, US",
    description: "Migración a CMS dinámicos con Next.js/React/PHP/Symfony/TypeScript. Integración REST/microservicios. Optimización con GraphQL.",
    stack: ["Next.js", "React", "PHP", "Symfony", "TypeScript", "GraphQL", "REST"],
    highlights: [
      "Migración exitosa de arquitecturas legacy",
      "Optimización de rendimiento con GraphQL",
      "Integración de microservicios"
    ]
  },
  {
    company: "321ignition",
    role: "Full-Stack Developer",
    period: "Sep 2020 – Jul 2023",
    location: "Bellevue, US",
    description: "Desarrollo de sitios para concesionarios con PHP/Laravel/Symfony, Angular/Vue/TypeScript/Next.js, GraphQL/REST, SSR con Next.js, PostgreSQL/MySQL/MongoDB.",
    stack: ["Laravel", "Angular", "Vue", "Next.js", "PostgreSQL", "MongoDB", "GraphQL"],
    highlights: [
      "Inventario en tiempo real",
      "Módulos promocionales avanzados",
      "Liderazgo de onboarding técnico"
    ]
  },
  {
    company: "Meridian",
    role: "Automated QA / Frontend Developer",
    period: "2019 – Sep 2020",
    location: "Colombia",
    description: "Automatización con Selenium/Python, Cypress/JS, Appium/Java. Transición a frontend con WordPress/PHP/Laravel/Angular/React.",
    stack: ["Selenium", "Cypress", "Appium", "Python", "WordPress", "Laravel", "React"],
    highlights: [
      "Frameworks de automatización robustos",
      "Integración CI/CD",
      "Transición exitosa a frontend"
    ]
  },
  {
    company: "Freelance",
    role: "Full-Stack Developer & QA Mentor",
    period: "2022 – Presente",
    location: "Remoto",
    description: "Mentoría QA, frameworks de automatización web/móvil/API, desarrollo full-stack a medida.",
    stack: ["Diversos según proyecto"],
    highlights: [
      "Mentoría técnica especializada",
      "Frameworks personalizados",
      "Consultoría en automatización"
    ]
  }
];

export const Experience = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="experience" ref={ref} className="py-20 md:py-32 relative">
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
            className="text-4xl md:text-5xl font-bold mb-16 text-center"
          >
            Experiencia <span className="gradient-text">Profesional</span>
          </motion.h2>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: index * 0.2 }}
                  className={`relative mb-12 ${
                    index % 2 === 0 ? "md:pr-1/2" : "md:pl-1/2 md:ml-auto"
                  }`}
                >
                  {/* Timeline Dot */}
                  <motion.div
                    whileHover={{ scale: 1.5 }}
                    className="absolute left-8 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background transform md:-translate-x-1/2 z-10"
                  />

                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className={`glass-card p-6 md:p-8 rounded-2xl ml-16 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-12" : "md:ml-12"
                    }`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Briefcase className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                        <p className="text-primary font-semibold mb-2">{exp.company}</p>
                        <p className="text-sm text-muted-foreground">
                          {exp.period} • {exp.location}
                        </p>
                      </div>
                    </div>

                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {exp.description}
                    </p>

                    <div className="mb-4">
                      <h4 className="font-semibold mb-2 text-sm">Highlights:</h4>
                      <ul className="space-y-1">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                            <span className="text-primary mt-1">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {exp.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
