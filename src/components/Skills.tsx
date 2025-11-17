import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import { Badge } from "./ui/badge";

const skillsData = {
  frontend: [
    "HTML", "CSS/SCSS", "React", "Next.js", "Vue", "Angular", "TypeScript", 
    "Redux", "D3.js", "Tailwind CSS", "Material-UI"
  ],
  backend: [
    "Node.js", "Express", "NestJS", "PHP", "Laravel", "Symfony", "CodeIgniter",
    "Python", "Flask", "Django", "REST API", "GraphQL", "Microservicios"
  ],
  database: [
    "PostgreSQL", "MySQL", "MongoDB", "Redis", "Prisma", "Sequelize"
  ],
  qa: [
    "Selenium", "Cypress", "Playwright", "Appium", "Postman", "Newman",
    "JMeter", "PyTest", "JUnit", "Jest", "PHPUnit", "CI/CD"
  ],
  devops: [
    "Docker", "Kubernetes", "AWS", "GitHub Actions", "Bitbucket Pipelines",
    "Swagger", "Jira", "Azure DevOps", "Nginx"
  ],
  other: [
    "WordPress", "Elementor", "Brizy", "Zoho", "Pipedrive", "Salesforce",
    "Scrum", "Kanban", "Git", "Linux"
  ]
};

const tabLabels = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Base de Datos",
  qa: "QA & Testing",
  devops: "DevOps & Tools",
  other: "CRM/CMS & Otros"
};

export const Skills = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeTab, setActiveTab] = useState("frontend");

  return (
    <section id="skills" ref={ref} className="py-20 md:py-32 relative bg-muted/30">
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
            className="text-4xl md:text-5xl font-bold mb-12 text-center"
          >
            Habilidades <span className="gradient-text">Técnicas</span>
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="max-w-5xl mx-auto"
          >
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 h-auto p-2 glass-card mb-8">
                {Object.entries(tabLabels).map(([key, label]) => (
                  <TabsTrigger
                    key={key}
                    value={key}
                    className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    {label}
                  </TabsTrigger>
                ))}
              </TabsList>

              {Object.entries(skillsData).map(([category, skills]) => (
                <TabsContent key={category} value={category}>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4 }}
                    className="glass-card p-8 rounded-3xl"
                  >
                    <div className="flex flex-wrap gap-3">
                      {skills.map((skill, index) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.1, y: -2 }}
                        >
                          <Badge
                            variant="secondary"
                            className="text-base py-2 px-4 bg-primary/10 hover:bg-primary/20 border-primary/30 cursor-default"
                          >
                            {skill}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
