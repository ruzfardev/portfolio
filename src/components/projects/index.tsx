import React, { useState, useMemo } from "react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithLoading } from "@/components/ui/image-with-loading";
import { Github, ExternalLink, Filter } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import projects from "../../data/projects.json";
import { fadeIn, staggerContainer } from "@/lib/animations";
import "./style.css";

export const Projects = () => {
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);

  // Extract unique tags from projects
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    tags.add("All");
    projects.forEach(project => {
      project.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags);
  }, []);

  // Filter projects based on selected tag
  const filteredProjects = useMemo(() => {
    if (selectedFilter === "All") return projects;
    return projects.filter(project => 
      project.tags.includes(selectedFilter)
    );
  }, [selectedFilter]);

  return (
    <section className="section container" id="projects">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-12 text-center"
      >
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          My Projects
        </h2>
        <p className="mt-4 text-muted-foreground">
          Check out some of my recent work
        </p>
      </motion.div>

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        <div className="flex items-center gap-2 mb-2 w-full justify-center">
          <Filter className="h-4 w-4 text-muted-foreground" />
          <span className="text-sm text-muted-foreground">Filter by technology:</span>
        </div>
        {allTags.map((tag) => (
          <motion.div
            key={tag}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant={selectedFilter === tag ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedFilter(tag)}
              className="transition-all"
            >
              {tag}
              {tag !== "All" && (
                <span className="ml-2 text-xs opacity-60">
                  ({projects.filter(p => p.tags.includes(tag)).length})
                </span>
              )}
            </Button>
          </motion.div>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
      >
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
              className="group"
            >
              <Card className="h-full overflow-hidden transition-all hover:shadow-xl">
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden">
                    <ImageWithLoading
                      src={project.image}
                      alt={project.name}
                      className="transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay on hover */}
                    <AnimatePresence>
                      {hoveredProject === project.id && (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex items-end p-4"
                        >
                          <div className="text-white">
                            <h3 className="font-bold text-lg">{project.name}</h3>
                            <p className="text-sm opacity-90">Click to view details</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2 text-lg">{project.name}</CardTitle>
                  <p className="mb-4 text-sm text-muted-foreground line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <Badge 
                        key={tag} 
                        variant="secondary"
                        className="text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                    {project.tags.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.tags.length - 3} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="flex gap-2 p-6 pt-0">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full group/btn"
                      onClick={() => window.open(project.source, "_blank")}
                    >
                      <Github className="mr-2 h-4 w-4 transition-transform group-hover/btn:rotate-12" />
                      Source
                    </Button>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1"
                  >
                    <Button
                      size="sm"
                      className="w-full group/btn"
                      onClick={() => window.open(project.url, "_blank")}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                      Demo
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* No projects message */}
      <AnimatePresence>
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <p className="text-muted-foreground">
              No projects found with the selected filter.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
