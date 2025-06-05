import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Download, User, Github, Send, Instagram, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import cv from "../../assets/Resume-Farrukh-Ruzmetov.pdf";
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
    <section className="section container flex items-center" id="home">
      <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col justify-center"
        >
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl">
            Hi, I'm{" "}
            <span className="text-gradient">Farrukh</span>
          </h1>
          <h2 className="mb-6 text-2xl font-semibold text-muted-foreground">
            I build things for the web.
          </h2>
          <p className="mb-8 text-lg text-muted-foreground">
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
          </p>

          {/* CTA Buttons */}
          <div className="mb-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              onClick={() => {
                const a = document.createElement("a");
                a.href = cv;
                a.download = "Farrukh-Ruzmetov.pdf";
                a.click();
              }}
            >
              <Download className="mr-2 h-4 w-4" />
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
          </div>

          {/* Social Links */}
          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <Button
                key={link.label}
                variant="ghost"
                size="icon"
                className="rounded-full"
                onClick={() => window.open(link.href, "_blank")}
                aria-label={link.label}
              >
                <link.icon className="h-5 w-5" />
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Skills Grid */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 gap-4 lg:grid-cols-3"
        >
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              whileHover={{ scale: 1.05 }}
              className="group"
            >
              <Card className="relative h-32 overflow-hidden transition-all hover:shadow-lg">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 transition-opacity group-hover:opacity-10`}
                />
                <div className="flex h-full flex-col items-center justify-center p-4">
                  <span className="mb-2 text-3xl">{skill.icon}</span>
                  <h4 className="text-center text-sm font-medium">
                    {skill.name}
                  </h4>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
