import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Shield, Code, Zap, Target } from "lucide-react";

const qaFeatures = [
  {
    icon: Shield,
    title: "Calidad Integral",
    description: "Enfoque holístico de QA que cubre pruebas funcionales, de regresión, carga y seguridad."
  },
  {
    icon: Code,
    title: "Automatización Avanzada",
    description: "Frameworks personalizados para web, móvil y APIs con integración CI/CD completa."
  },
  {
    icon: Zap,
    title: "Testing Ágil",
    description: "Metodologías ágiles integradas en sprints, con cobertura continua y feedback rápido."
  },
  {
    icon: Target,
    title: "Ventaja Competitiva",
    description: "La calidad como diferenciador: productos robustos que generan confianza del usuario."
  }
];

export const QASection = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="qa" ref={ref} className="py-20 md:py-32 relative">
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
            QA & <span className="gradient-text">Testing</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="text-center text-muted-foreground mb-16 max-w-3xl mx-auto text-lg"
          >
            Mi experiencia en QA automatizado no es solo sobre escribir tests, es sobre construir 
            <span className="text-primary font-semibold"> confianza en el software</span>. Implemento 
            estrategias completas que garantizan calidad desde el primer commit hasta producción.
          </motion.p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
            {qaFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card p-6 rounded-2xl text-center"
              >
                <motion.div
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.6 }}
                  className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4"
                >
                  <feature.icon className="w-8 h-8 text-primary" />
                </motion.div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.8 }}
            className="glass-card p-8 md:p-12 rounded-3xl max-w-4xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-6 text-center">Mi Enfoque de Testing</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-3 text-primary">Tipos de Pruebas</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Funcionales (Black Box & White Box)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Integración y E2E</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Regresión Automatizada</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Carga y Estrés (JMeter)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>API Testing (Postman/Newman)</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-3 text-secondary">CI/CD & DevOps</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Integración con Jenkins/GitHub Actions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Tests paralelos en múltiples browsers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Reportes automáticos con screenshots</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Cobertura de código y métricas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-secondary mt-1">•</span>
                    <span>Notificaciones a Slack/Teams</span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
