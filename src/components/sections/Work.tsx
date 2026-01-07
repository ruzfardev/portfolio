import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useTranslation } from "react-i18next";
import ShinyText from "@/components/react-bits/ShinyText";
import { workProjects } from "@/data/work";

export function Work() {
  const { t } = useTranslation();

  return (
    <section id="work" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            <ShinyText
              text={t("work.title")}
              speed={3}
              color="#a1a1aa"
              shineColor="#ffffff"
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("work.description", { company: "" })}
            <a
              href="https://datamicron.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              DataMicron
            </a>
          </p>
        </motion.div>

        {/* Project Rows */}
        <div className="max-w-5xl mx-auto space-y-8">
          {workProjects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-6 md:gap-10 p-6 md:p-8
                bg-card/50 backdrop-blur-sm border border-border rounded-2xl
                hover:bg-card/80 hover:border-primary/30 hover:shadow-xl
                transition-all duration-300 cursor-pointer
                flex-col md:flex-row"
            >
              {/* Logo - Always on Left */}
              <motion.div
                className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.logo}
                  alt={`${project.name} logo`}
                  className="max-w-full max-h-full object-contain"
                />
              </motion.div>

              {/* Content - Always on Right */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center gap-2 justify-center md:justify-start mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {t(`work.projects.${project.id}.name`, { defaultValue: project.name })}
                  </h3>
                  <ExternalLink
                    size={18}
                    className="text-muted-foreground group-hover:text-primary transition-colors"
                  />
                </div>
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                  {t(`work.projects.${project.id}.description`, { defaultValue: project.description })}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}