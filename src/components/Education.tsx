import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { GraduationCap, Award } from "lucide-react";
import { Badge } from "./ui/badge";

const education = {
  degree: {
    title: "Tecnóloga en Desarrollo de Software y Aplicaciones Móviles",
    institution: "Institución Educativa",
    period: "2018 – 2021",
    description: "Formación integral en desarrollo de software, bases de datos, arquitectura de aplicaciones y metodologías ágiles."
  },
  certifications: [
    {
      title: "Unit Testing con JUnit y Mockito",
      platform: "Platzi",
      topics: ["Testing", "Java", "TDD"]
    },
    {
      title: "Full-Stack con React y Node.js",
      platform: "Platzi",
      topics: ["React", "Node.js", "REST API"]
    },
    {
      title: "Desarrollo Web con PHP y Laravel",
      platform: "Udemy",
      topics: ["PHP", "Laravel", "MVC"]
    },
    {
      title: "Frontend Avanzado con Vue y TypeScript",
      platform: "Platzi",
      topics: ["Vue", "TypeScript", "Composition API"]
    }
  ]
};

export const Education = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="education" ref={ref} className="py-20 md:py-32 relative bg-muted/30">
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
            Educación & <span className="gradient-text">Certificaciones</span>
          </motion.h2>

          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-8">
            {/* Degree */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.3 }}
              whileHover={{ y: -5 }}
              className="glass-card p-8 rounded-2xl h-fit"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{education.degree.title}</h3>
                  <p className="text-primary font-semibold">{education.degree.institution}</p>
                  <p className="text-sm text-muted-foreground mt-1">{education.degree.period}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {education.degree.description}
              </p>
            </motion.div>

            {/* Certifications */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center">
                  <Award className="w-7 h-7 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">Certificaciones</h3>
              </div>

              {education.certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="glass-card p-5 rounded-xl"
                >
                  <h4 className="font-bold mb-1">{cert.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{cert.platform}</p>
                  <div className="flex flex-wrap gap-2">
                    {cert.topics.map((topic) => (
                      <Badge key={topic} variant="secondary" className="text-xs">
                        {topic}
                      </Badge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Additional Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.9 }}
            className="mt-12 text-center glass-card p-6 rounded-2xl max-w-3xl mx-auto"
          >
            <p className="text-muted-foreground">
              <span className="font-semibold text-foreground">Aprendizaje continuo:</span> Constantemente 
              actualizándome con las últimas tecnologías y mejores prácticas en desarrollo y testing.
              Participación activa en comunidades tech y mentoría a otros desarrolladores.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
