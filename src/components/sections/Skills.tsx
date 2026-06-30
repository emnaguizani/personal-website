import { SectionLayout, SectionHeading } from "@/components/layout/SectionLayout";
import { StaggerChildren, StaggerItem, FadeIn } from "@/components/FadeIn";
import { skillGroups } from "@/data/skills";
import { Cloud, Code2, Globe, Users } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  cloud: Cloud,
  code: Code2,
  globe: Globe,
  users: Users,
};

const categoryColors: Record<string, { bg: string; text: string }> = {
  "Cloud & DevOps": { bg: "bg-violet-500/10",  text: "text-violet-600 dark:text-violet-300" },
  "Programming":    { bg: "bg-fuchsia-500/10", text: "text-fuchsia-600 dark:text-fuchsia-300" },
  "Languages":      { bg: "bg-purple-500/10",  text: "text-purple-600 dark:text-purple-300" },
  "Soft Skills":    { bg: "bg-pink-500/10",    text: "text-pink-600 dark:text-pink-300" },
};

export function Skills() {
  return (
    <SectionLayout id="skills" alt>
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with, along with the languages I speak."
      />
      <div className="grid gap-5 sm:grid-cols-2">
        {skillGroups.map((group, gi) => {
          const Icon = iconMap[group.icon] ?? Code2;
          const color = categoryColors[group.category] ?? { bg: "bg-primary/10", text: "text-primary" };

          return (
            <FadeIn key={group.category} delay={gi * 0.1} direction="up">
              <div className="glass-card rounded-xl p-6 h-full">
                <div className="flex items-center gap-3 mb-5">
                  <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${color.bg}`}>
                    <Icon className={`h-4 w-4 ${color.text}`} />
                  </span>
                  <h3 className="font-semibold text-foreground">{group.category}</h3>
                </div>

                <StaggerChildren className="flex flex-wrap gap-2" stagger={0.05} delay={0.1 + gi * 0.05}>
                  {group.skills.map((skill) => (
                    <StaggerItem key={skill} direction="none">
                      <span
                        className={`
                          inline-flex items-center rounded-md border border-border
                          px-2.5 py-1 text-xs font-medium
                          text-foreground bg-background/60
                          hover:border-primary/50 hover:text-primary
                          hover:bg-primary/5
                          transition-all duration-200 cursor-default
                          hover:scale-105
                        `}
                      >
                        {skill}
                      </span>
                    </StaggerItem>
                  ))}
                </StaggerChildren>
              </div>
            </FadeIn>
          );
        })}
      </div>
    </SectionLayout>
  );
}
