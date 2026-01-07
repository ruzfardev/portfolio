import { motion } from "framer-motion";
import ShinyText from "@/components/react-bits/ShinyText";
import MagicBento, { BentoCardProps } from "@/components/react-bits/MagicBento";
import { skillCategories, getProficiencyColor, getProficiencyLabel } from "@/data/skills";

// Simple Icons CDN URL helper
const getIconUrl = (slug: string) =>
  `https://cdn.simpleicons.org/${slug}/white`;

// Skill badge component with tooltip
function SkillBadge({ skill }: { skill: { name: string; icon: string; proficiency: string; yearsOfExperience: number } }) {
  const proficiencyColor = getProficiencyColor(skill.proficiency as "beginner" | "intermediate" | "advanced" | "expert");
  const proficiencyLabel = getProficiencyLabel(skill.proficiency as "beginner" | "intermediate" | "advanced" | "expert");

  return (
    <div className="group relative">
      <div
        className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-default"
        style={{ borderLeft: `2px solid ${proficiencyColor}` }}
      >
        <img
          src={getIconUrl(skill.icon)}
          alt={skill.name}
          className="w-4 h-4"
          loading="lazy"
        />
        <span className="text-xs text-white/80">{skill.name}</span>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-black/90 rounded text-xs text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50">
        {proficiencyLabel} · {skill.yearsOfExperience}yr
        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-black/90" />
      </div>
    </div>
  );
}

// Skills grid for each card
function SkillsGrid({ skills }: { skills: typeof skillCategories[0]["skills"] }) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {skills.map((skill) => (
        <SkillBadge key={skill.name} skill={skill} />
      ))}
    </div>
  );
}

export function Skills() {
  // Transform skill categories to bento cards
  const bentoCards: BentoCardProps[] = skillCategories.map((category) => ({
    color: category.color,
    title: category.title,
    description: category.description,
    label: category.label,
    customContent: <SkillsGrid skills={category.skills} />,
  }));

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4">
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
              text="Skills & Technologies"
              speed={3}
              color="#a1a1aa"
              shineColor="#ffffff"
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* MagicBento Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <MagicBento
            cards={bentoCards}
            enableStars={true}
            enableSpotlight={true}
            enableBorderGlow={true}
            enableTilt={true}
            enableMagnetism={false}
            clickEffect={true}
            glowColor="99, 102, 241"
            particleCount={8}
            textAutoHide={false}
          />
        </motion.div>
      </div>
    </section>
  );
}
