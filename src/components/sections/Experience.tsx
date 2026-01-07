import { Briefcase, GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import ShinyText from "@/components/react-bits/ShinyText";
import { experiences } from "@/data/experience";

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-muted/30">
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
              text="Experience"
              speed={3}
              color="#a1a1aa"
              shineColor="#ffffff"
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and education
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 pb-12 last:pb-0"
            >
              {/* Timeline Line */}
              {index !== experiences.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-border" />
              )}

              {/* Timeline Dot */}
              <div className="absolute left-0 top-1 w-6 h-6 rounded-full bg-primary flex items-center justify-center">
                {exp.type === "work" ? (
                  <Briefcase size={12} className="text-primary-foreground" />
                ) : (
                  <GraduationCap size={12} className="text-primary-foreground" />
                )}
              </div>

              {/* Content Card */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                className="bg-card border border-border rounded-xl p-6 ml-4 hover:shadow-lg transition-all"
              >
                <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {exp.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {exp.startDate} - {exp.endDate || "Present"}
                  </span>
                </div>

                <p className="text-primary font-medium mb-2">
                  {exp.organization}
                  {exp.location && (
                    <span className="text-muted-foreground font-normal">
                      {" "}
                      &middot; {exp.location}
                    </span>
                  )}
                </p>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                {/* Highlights */}
                {exp.highlights && exp.highlights.length > 0 && (
                  <ul className="space-y-1">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-muted-foreground flex items-start gap-2"
                      >
                        <span className="text-primary mt-1.5">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
