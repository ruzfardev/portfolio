import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, School, Briefcase } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideIn, slideInRight } from "@/lib/animations";
import "./style.css";

const timelineItems = [
  {
    icon: GraduationCap,
    title: "Westminster International University in Tashkent",
    description:
      "Currently, I am full time student at Westminster International University in Tashkent. I am studying Computer Science and Software Engineering. This year I am going to graduate from university. I am looking for a job as a front-end developer. I have a passion for web development and love to create for web and mobile devices.",
    period: "2020 - Present",
    color: "primary",
  },
  {
    icon: School,
    title: "Secondary School №37 in Khorezm",
    description:
      "I graduated from Secondary School №37 in Khorezm. I was a student of this school for 11 years. I was a good student and always tried to be the best in my class. I was a member of the school's football team. I was a captain of the team.",
    period: "2009 - 2020",
    color: "secondary",
  },
  {
    icon: Briefcase,
    title: "Work Experience",
    description: (
      <>
        I have been working as a front-end developer for 2 years at Datamicron.
        I have been working on different projects. I have worked on projects
        such as{" "}
        <a
          className="text-gradient font-semibold hover:underline"
          href="https://datamicron.com/neura-chat.php"
          target="_blank"
          rel="noreferrer"
        >
          Falcon
        </a>
        ,{" "}
        <a
          className="text-gradient font-semibold hover:underline"
          href="https://datamicron.com/eagle-eye.php"
          target="_blank"
          rel="noreferrer"
        >
          Eagle Eye
        </a>
        . Right now I am working on a project called Eagle Eye. This is very
        big project and I am working on it as a front-end developer.
      </>
    ),
    period: "2021 - Present (Datamicron)",
    color: "default",
  },
  {
    icon: Briefcase,
    title: "Work Experience - QA Engineer",
    description: (
      <>
        I have worked as a QA Engineer for 1 year at Datamicron. I have tested
        different projects. I have tested projects such as{" "}
        <a
          className="text-gradient font-semibold hover:underline"
          href="https://datamicron.com/neura-chat.php"
          target="_blank"
          rel="noreferrer"
        >
          Falcon
        </a>
        . I was responsible for all platforms of the project: Web, Android, iOS.
      </>
    ),
    period: "2020 - 2021 (Datamicron)",
    color: "outline",
  },
];

export const About = () => {
  return (
    <section className="section container" id="about">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          About Me
        </h2>
        <p className="mt-4 text-muted-foreground">
          My journey in education and professional experience
        </p>
      </motion.div>

      <div className="mx-auto max-w-3xl">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 h-full w-0.5 bg-border md:-translate-x-1/2 hidden sm:block" />

          {/* Timeline items */}
          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className={`relative mb-8 flex items-center ${
                index % 2 === 0 ? "md:justify-start" : "md:justify-end"
              }`}
            >
              <div
                className={`flex w-full items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="absolute left-0 sm:left-8 md:left-1/2 z-10 flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-background border-4 border-primary md:-translate-x-1/2"
                >
                  <item.icon className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </motion.div>

                {/* Content */}
                <motion.div
                  variants={index % 2 === 0 ? slideIn : slideInRight}
                  className="ml-16 sm:ml-24 md:ml-0 w-full md:w-5/12"
                >
                  <Card className="hover:shadow-lg transition-all duration-300 group">
                    <CardContent className="p-4 sm:p-6">
                      <Badge 
                        variant={item.color as any} 
                        className="mb-2 transition-transform group-hover:scale-105"
                      >
                        {item.title}
                      </Badge>
                      <p className="mb-2 text-xs sm:text-sm text-muted-foreground">
                        {typeof item.description === "string"
                          ? item.description
                          : item.description}
                      </p>
                      <p className="text-xs font-semibold text-primary">
                        {item.period}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
