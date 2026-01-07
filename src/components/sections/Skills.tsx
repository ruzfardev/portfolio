import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import ShinyText from "@/components/react-bits/ShinyText";
import MagicBento, { BentoCardProps } from "@/components/react-bits/MagicBento";
import { skillCategories, getProficiencyColor } from "@/data/skills";
import { useTheme } from "@/hooks/useTheme";

// Simple Icons CDN URL helper - uses theme-aware colors
const getIconUrl = (slug: string, isDark: boolean) =>
  `https://cdn.simpleicons.org/${slug}/${isDark ? 'white' : '000000'}`;

// Skill badge component with tooltip
function SkillBadge({
  skill,
  isDark,
  proficiencyLabel
}: {
  skill: { name: string; icon: string; proficiency: string; yearsOfExperience: number };
  isDark: boolean;
  proficiencyLabel: string;
}) {
  const proficiencyColor = getProficiencyColor(skill.proficiency as "beginner" | "intermediate" | "advanced" | "expert");

  return (
    <div className="group relative">
      <div
        className="flex items-center gap-2 px-2 py-1.5 rounded-lg bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-default"
        style={{ borderLeft: `2px solid ${proficiencyColor}` }}
      >
        <img
          src={getIconUrl(skill.icon, isDark)}
          alt={skill.name}
          className="w-4 h-4"
          loading="lazy"
        />
        <span className="text-xs text-foreground/80">{skill.name}</span>
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
function SkillsGrid({
  skills,
  isDark,
  t
}: {
  skills: typeof skillCategories[0]["skills"];
  isDark: boolean;
  t: (key: string) => string;
}) {
  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {skills.map((skill) => (
        <SkillBadge
          key={skill.name}
          skill={skill}
          isDark={isDark}
          proficiencyLabel={t(`skills.proficiency.${skill.proficiency}`)}
        />
      ))}
    </div>
  );
}

// Map category ID to translation key
const categoryKeyMap: Record<string, string> = {
  state: "state",
  tools: "tools",
  frontend: "frontend",
  backend: "backend",
  testing: "testing",
  other: "other",
};

export function Skills() {
  const { theme } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === "dark";

  // Transform skill categories to bento cards with translations
  const bentoCards: BentoCardProps[] = skillCategories.map((category) => {
    const categoryKey = categoryKeyMap[category.id] || category.id;
    return {
      color: category.color,
      title: t(`skills.categories.${categoryKey}.title`),
      description: t(`skills.categories.${categoryKey}.description`),
      label: t(`skills.categories.${categoryKey}.label`),
      customContent: <SkillsGrid skills={category.skills} isDark={isDark} t={t} />,
    };
  });

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
              text={t("skills.title")}
              speed={3}
              color="#a1a1aa"
              shineColor="#ffffff"
            />
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t("skills.description")}
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
