import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Briefcase, 
  Code2, 
  Palette, 
  Rocket, 
  Target,
  Sparkles,
  Calendar,
  MapPin,
  Award
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { fadeIn, slideIn, textVariant } from "@/lib/animations";
import "./style.css";

const skills = [
  { name: "Frontend Development", level: 90, color: "from-blue-500 to-cyan-500" },
  { name: "React & Next.js", level: 85, color: "from-purple-500 to-pink-500" },
  { name: "TypeScript", level: 80, color: "from-orange-500 to-red-500" },
  { name: "UI/UX Design", level: 75, color: "from-green-500 to-emerald-500" },
  { name: "Node.js", level: 70, color: "from-yellow-500 to-orange-500" },
  { name: "Testing & QA", level: 85, color: "from-indigo-500 to-purple-500" },
];

const experiences = [
  {
    role: "Frontend Developer",
    company: "Datamicron",
    period: "2021 - Present",
    location: "Tashkent, UZ",
    highlights: [
      "Developed Eagle Eye - enterprise monitoring solution",
      "Built Falcon - AI-powered chat application",
      "Led frontend architecture decisions",
      "Mentored junior developers"
    ],
    icon: Code2,
    color: "from-blue-500 to-purple-500"
  },
  {
    role: "QA Engineer",
    company: "Datamicron",
    period: "2020 - 2021",
    location: "Tashkent, UZ",
    highlights: [
      "Tested across Web, Android, and iOS platforms",
      "Automated testing workflows",
      "Improved product quality by 40%",
      "Created comprehensive test documentation"
    ],
    icon: Target,
    color: "from-green-500 to-teal-500"
  }
];

const achievements = [
  { number: "2+", label: "Years Experience" },
  { number: "15+", label: "Projects Completed" },
  { number: "100%", label: "Client Satisfaction" },
  { number: "5+", label: "Technologies Mastered" },
];

export const About = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <section className="section container relative overflow-hidden" id="about">
      {/* Background decoration */}
      <motion.div
        style={{ y }}
        className="absolute -top-20 -right-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, 50]) }}
        className="absolute -bottom-20 -left-20 h-96 w-96 rounded-full bg-purple-500/5 blur-3xl"
      />

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", duration: 0.6 }}
          className="inline-block mb-4"
        >
          <div className="p-3 bg-primary/10 rounded-full">
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
        </motion.div>
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl mb-4">
          About Me
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Passionate frontend developer crafting digital experiences with modern technologies
        </p>
      </motion.div>

      {/* Hero Introduction */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="mb-20 text-center max-w-4xl mx-auto"
      >
        <Card className="p-8 sm:p-12 bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/10">
          <motion.h3
            variants={textVariant(0.1)}
            className="text-2xl sm:text-3xl font-bold mb-6"
          >
            Hi, I'm <span className="text-gradient">Farrukh Ruzmetov</span> 👋
          </motion.h3>
          <motion.p
            variants={textVariant(0.2)}
            className="text-lg text-muted-foreground leading-relaxed mb-6"
          >
            A creative frontend developer with a passion for building beautiful, functional, and user-centered digital experiences. 
            Currently pursuing my degree at Westminster International University while working full-time at Datamicron.
          </motion.p>
          <motion.div
            variants={textVariant(0.3)}
            className="flex flex-wrap gap-3 justify-center"
          >
            <Badge variant="outline" className="px-4 py-1">
              <MapPin className="h-3 w-3 mr-1" />
              Tashkent, Uzbekistan
            </Badge>
            <Badge variant="outline" className="px-4 py-1">
              <GraduationCap className="h-3 w-3 mr-1" />
              CS Student
            </Badge>
            <Badge variant="outline" className="px-4 py-1">
              <Briefcase className="h-3 w-3 mr-1" />
              Open to Opportunities
            </Badge>
          </motion.div>
        </Card>
      </motion.div>

      {/* Skills Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h3 className="text-2xl font-bold text-center mb-8">
          Technical Skills
        </h3>
        <div className="grid gap-6 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium">{skill.name}</span>
                <span className="text-sm text-muted-foreground">{skill.level}%</span>
              </div>
              <div className="h-3 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.1 }}
                  className={`h-full bg-gradient-to-r ${skill.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Experience Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <h3 className="text-2xl font-bold text-center mb-8">
          Professional Experience
        </h3>
        <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              variants={slideIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
            >
              <Card className="h-full group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className={`h-2 bg-gradient-to-r ${exp.color}`} />
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-1">{exp.role}</h4>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                      className="p-3 bg-primary/10 rounded-full"
                    >
                      <exp.icon className="h-5 w-5 text-primary" />
                    </motion.div>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-2">
                    {exp.highlights.map((highlight, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                        {highlight}
                      </motion.li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-20"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {achievements.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring" }}
              whileHover={{ scale: 1.05 }}
              className="text-center"
            >
              <Card className="p-6 bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/10">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="text-3xl sm:text-4xl font-bold text-gradient mb-2"
                >
                  {stat.number}
                </motion.div>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Education Section */}
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        <Card className="p-6 sm:p-8 bg-gradient-to-br from-primary/5 to-purple-500/5 border-primary/10">
          <div className="flex items-start gap-4">
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="p-3 bg-primary/10 rounded-full flex-shrink-0"
            >
              <GraduationCap className="h-6 w-6 text-primary" />
            </motion.div>
            <div className="flex-1">
              <h4 className="text-xl font-bold mb-2">Education</h4>
              <p className="font-medium text-primary mb-1">
                Westminster International University in Tashkent
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                BSc Computer Science & Software Engineering • 2020 - Present
              </p>
              <p className="text-sm text-muted-foreground">
                Final year student with a strong foundation in computer science, algorithms, 
                and software development. Active in university projects and hackathons.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <Button
          size="lg"
          onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          className="group"
        >
          <Rocket className="mr-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          Let's Work Together
        </Button>
      </motion.div>
    </section>
  );
};
