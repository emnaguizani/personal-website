import { SectionLayout, SectionHeading } from "@/components/layout/SectionLayout";
import { Badge } from "@/components/ui/badge";
import { skillGroups } from "@/data/skills";
import { Cloud, Code2, Globe, Users } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  cloud: Cloud,
  code: Code2,
  globe: Globe,
  users: Users,
};

export function Skills() {
  return (
    <SectionLayout id="skills" alt>
      <SectionHeading
        title="Skills"
        subtitle="Technologies and tools I work with, along with the languages I speak."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group) => {
          const Icon = iconMap[group.icon] ?? Code2;
          return (
            <div
              key={group.category}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <h3 className="font-semibold text-foreground">{group.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="text-xs">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </SectionLayout>
  );
}
