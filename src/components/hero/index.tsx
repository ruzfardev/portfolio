import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, User, Github, Send, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import cv from "../../assets/Resume-Farrukh-Ruzmetov.pdf";
import { textVariant, fadeIn, floatingAnimation, staggerContainer } from "@/lib/animations";
import "./style.css";

// Icons for skills
const skills = [
  { name: "HTML & CSS", icon: "🎨", color: "from-orange-500 to-pink-500" },
  { name: "JavaScript", icon: "⚡", color: "from-yellow-400 to-orange-500" },
  { name: "React.js", icon: "⚛️", color: "from-blue-400 to-cyan-500" },
  { name: "Node.js", icon: "🚀", color: "from-green-400 to-emerald-500" },
  { name: "Git", icon: "📦", color: "from-orange-600 to-red-500" },
  { name: "Figma", icon: "🎯", color: "from-purple-500 to-pink-500" },
];

export const Hero = () => {
  const handleHref = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/ruzfardev", label: "Github" },
    { icon: Send, href: "https://t.me/fm_ruzmetov", label: "Telegram" },
    { icon: Instagram, href: "https://www.instagram.com/fm_ruzmetov/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/farrukh-ruzmetov-298761203", label: "LinkedIn" },
  ];

  return (
    <section className="section container flex items-center min-h-screen" id="home">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
        className="grid gap-8 lg:grid-cols-2 lg:gap-12 w-full"
      >
        {/* Left Content */}
        <motion.div
          variants={fadeIn}
          className="flex flex-col justify-center order-2 lg:order-1"
        >
          <motion.h1
            variants={textVariant(0.1)}
            className="mb-4 text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold tracking-tight"
          >
            Hi, I'm{" "}
            <span className="text-gradient inline-block">Farrukh</span>
          </motion.h1>
          
          <motion.h2
            variants={textVariant(0.2)}
            className="mb-6 text-xl sm:text-2xl font-semibold text-muted-foreground"
          >
            I build things for the web.
          </motion.h2>
          
          <motion.p
            variants={textVariant(0.3)}
            className="mb-8 text-base sm:text-lg text-muted-foreground"
          >
            I'm a web developer based in Uzbekistan. I have a passion for web
            development and love to create for web and mobile devices.
            Currently, I am working as front-end developer at{" "}
            <a
              className="text-gradient font-semibold hover:underline"
              href="https://www.datamicron.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datamicron
            </a>
            .
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={textVariant(0.4)}
            className="mb-8 flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              onClick={() => {
                const a = document.createElement("a");
                a.href = cv;
                a.download = "Farrukh-Ruzmetov.pdf";
                a.click();
              }}
              className="group"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download CV
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => handleHref("about")}
            >
              <User className="mr-2 h-4 w-4" />
              About me
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={textVariant(0.5)}
            className="flex gap-3"
          >
            {socialLinks.map((link, index) => (
              <motion.div
                key={link.label}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full hover:bg-primary/10 hover:text-primary"
                  onClick={() => window.open(link.href, "_blank")}
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </Button>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Content - Skills Grid */}
        <motion.div
          variants={staggerContainer}
          className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3 order-1 lg:order-2"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={fadeIn}
              custom={index}
              whileHover={{ scale: 1.05, rotate: [0, -1, 1, 0] }}
              whileTap={{ scale: 0.95 }}
              className="group"
            >
              <motion.div
                variants={floatingAnimation}
                animate="animate"
                transition={{ delay: index * 0.2 }}
              >
                <Card className="relative h-24 sm:h-32 overflow-hidden transition-all hover:shadow-lg cursor-pointer">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition-opacity duration-300 group-hover:opacity-10`}
                  />
                  <div className="flex h-full flex-col items-center justify-center p-2 sm:p-4">
                    <motion.span
                      className="mb-1 sm:mb-2 text-2xl sm:text-3xl"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      {skill.icon}
                    </motion.span>
                    <h4 className="text-center text-xs sm:text-sm font-medium">
                      {skill.name}
                    </h4>
                  </div>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Animated background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-purple-500/5 blur-3xl"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </section>
  );
};
