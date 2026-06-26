import { SectionLayout, SectionHeading } from "@/components/layout/SectionLayout";
import { Badge } from "@/components/ui/badge";
import { experiences } from "@/data/experience";
import { Briefcase, Users, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const typeConfig = {
  internship: {
    icon: Briefcase,
    label: "Internship",
    color: "text-blue-600 dark:text-blue-400",
    bg: "bg-blue-600/10",
  },
  volunteer: {
    icon: Users,
    label: "Volunteer",
    color: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-600/10",
  },
  fulltime: {
    icon: Briefcase,
    label: "Full-time",
    color: "text-purple-600 dark:text-purple-400",
    bg: "bg-purple-600/10",
  },
};

export function Experience() {
  return (
    <SectionLayout id="experience" alt>
      <SectionHeading
        title="Experience"
        subtitle="Internships and volunteer roles where I've put my skills to work."
      />
      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-border hidden sm:block" />

        <ol className="space-y-8 sm:pl-12">
          {experiences.map((exp, idx) => {
            const config = typeConfig[exp.type];
            const Icon = config.icon;
            return (
              <li key={exp.id} className="relative">
                {/* Dot */}
                <span
                  className={cn(
                    "absolute -left-[52px] hidden sm:flex h-8 w-8 items-center justify-center rounded-full border border-border bg-background shadow-sm",
                    config.bg
                  )}
                >
                  <Icon className={cn("h-4 w-4", config.color)} />
                </span>

                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex flex-wrap items-start gap-2 justify-between">
                    <div>
                      <h3 className="font-semibold text-foreground">{exp.role}</h3>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <Badge
                        variant="secondary"
                        className="text-xs"
                      >
                        {config.label}
                      </Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar className="h-3 w-3" />
                        {exp.dateRange}
                      </div>
                    </div>
                  </div>
                  <ul className="mt-4 space-y-1.5">
                    {exp.bullets.map((bullet, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-muted-foreground"
                      >
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </SectionLayout>
  );
}
