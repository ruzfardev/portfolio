import { motion } from "framer-motion";
import ShinyText from "@/components/react-bits/ShinyText";
import ChromaGrid, { ChromaItem } from "@/components/react-bits/ChromaGrid";
import { projects } from "@/data/projects";

// Color mapping for each project (matches icon gradients)
const projectColors: Record<string, string> = {
  "prava-olamiz": "#F59E0B",
  "safehisob": "#10B981",
  "react-tube": "#EF4444",
  "react-player": "#8B5CF6",
  "natours": "#22C55E",
  "fast-pay": "#3B82F6",
  "memory-match": "#F97316",
  "pig-game": "#EC4899",
  "number-guess": "#6366F1",
};

const getProjectColor = (id: string): string => {
  return projectColors[id] || "#6366F1";
};

// Transform projects data to ChromaGrid format
const chromaItems: ChromaItem[] = projects.map((project) => ({
  image: project.image || "",
  title: project.title,
  subtitle: project.tags.slice(0, 3).join(" • "),
  borderColor: getProjectColor(project.id),
  gradient: `linear-gradient(145deg, ${getProjectColor(project.id)}, #000)`,
  url: project.liveUrl,
}));

export function Projects() {
  return (
    <section id="projects" className="py-20">
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
              text="Featured Projects"
              speed={3}
              color="#a1a1aa"
              shineColor="#ffffff"
            />
          </h2>
        </motion.div>

        {/* ChromaGrid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <ChromaGrid
            items={chromaItems}
            radius={350}
            damping={0.4}
            fadeOut={0.5}
          />
        </motion.div>
      </div>
    </section>
  );
}
