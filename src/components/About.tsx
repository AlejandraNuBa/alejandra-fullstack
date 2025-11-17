import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { MapPin, Languages } from "lucide-react";

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" ref={ref} className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-bold mb-6 text-center"
          >
            Sobre <span className="gradient-text">Mí</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="glass-card p-8 md:p-12 rounded-3xl"
          >
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Soy una desarrolladora <span className="text-primary font-semibold">Full-Stack</span> y{" "}
              <span className="text-secondary font-semibold">QA Automatizado</span> apasionada por crear 
              soluciones web robustas y escalables. Con experiencia en todo el ciclo de desarrollo, desde 
              el diseño de arquitectura hasta el deployment, me especializo en construir aplicaciones que 
              no solo funcionan, sino que destacan por su calidad y rendimiento.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Mi enfoque combina desarrollo creativo con una mentalidad rigurosa de QA, asegurando que 
              cada línea de código cumpla con los más altos estándares. He trabajado en proyectos 
              internacionales, liderando equipos y mentorando desarrolladores, siempre buscando la 
              excelencia técnica y la innovación.
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-primary/10 border border-primary/20"
              >
                <MapPin className="w-6 h-6 text-primary" />
                <div>
                  <p className="font-semibold">Ubicación</p>
                  <p className="text-muted-foreground">Colombia</p>
                </div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, x: 10 }}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/10 border border-secondary/20"
              >
                <Languages className="w-6 h-6 text-secondary" />
                <div>
                  <p className="font-semibold">Idiomas</p>
                  <p className="text-muted-foreground">Español (Nativo), Inglés (Intermedio)</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
