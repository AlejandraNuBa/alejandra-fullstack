import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
import heroProfile from "@/assets/hero-profile.jpeg";

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Gradient Background */}
      <div className="absolute inset-0 mesh-gradient opacity-50" />
      <motion.div
        className="absolute inset-0 opacity-30"
        animate={{
          backgroundPosition: ["0% 0%", "100% 100%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{
          backgroundImage: "linear-gradient(135deg, hsl(262 83% 58% / 0.1), hsl(189 94% 43% / 0.1), hsl(217 91% 60% / 0.1))",
          backgroundSize: "200% 200%",
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-muted-foreground mb-4 mt-4"
            >
              Hola, soy
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-5xl md:text-7xl font-bold mb-4"
            >
              Daniela Alejandra
              <br />
              <span className="gradient-text">Nuñez Bautista</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-2xl md:text-3xl text-primary font-semibold mb-6"
            >
              Full-Stack Developer & Automated QA
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg text-muted-foreground mb-8 max-w-xl"
            >
              Desarrollo soluciones end-to-end con enfoque en rendimiento, escalabilidad y calidad. 
              Combino una mentalidad QA con habilidades full-stack para entregar productos robustos.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 mb-8"
            >
              <Button asChild size="lg" className="group">
                <a href="#projects">
                  Ver Proyectos
                  <motion.span
                    className="ml-2"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 1.5 }}
                  >
                    →
                  </motion.span>
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">Contactar</a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4"
            >
              <motion.a
                href="https://www.linkedin.com/in/developer-qa-fullstack-alejandra"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <Linkedin className="w-5 h-5 text-primary" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <Github className="w-5 h-5 text-primary" />
              </motion.a>
              <motion.a
                href="https://wa.me/573004919996"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:shadow-lg transition-shadow"
              >
                <MessageCircle className="w-5 h-5 text-primary" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-accent rounded-full blur-3xl opacity-20"
            />
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative glass-card rounded-3xl overflow-hidden animate-glow"
            >
              <img
                src={heroProfile}
                alt="Daniela Alejandra Nuñez Bautista"
                className="w-full h-auto"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, repeat: Infinity, duration: 1.5, repeatType: "reverse" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <ArrowDown className="w-6 h-6 text-primary" />
      </motion.a>
    </section>
  );
};
