import React from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithLoading } from "@/components/ui/image-with-loading";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import projects from "../../data/projects.json";
import "./style.css";

export const Projects = () => {
  return (
    <section className="section container" id="projects">
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          My Projects
        </h2>
        <p className="mt-4 text-muted-foreground">
          Check out some of my recent work
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <Card className="group h-full overflow-hidden transition-all hover:shadow-lg">
              <CardHeader className="p-0">
                <div className="overflow-hidden">
                  <ImageWithLoading
                    src={project.image}
                    alt={project.name}
                    className="transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle className="mb-2">{project.name}</CardTitle>
                <p className="mb-4 text-sm text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex gap-2 p-6 pt-0">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open(project.source, "_blank")}
                >
                  <Github className="mr-2 h-4 w-4" />
                  Source
                </Button>
                <Button
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open(project.url, "_blank")}
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Demo
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
