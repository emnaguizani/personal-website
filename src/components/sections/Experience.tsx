import { SectionLayout, SectionHeading } from "@/components/layout/SectionLayout";
import { Badge } from "@/components/ui/badge";
import { FadeIn } from "@/components/FadeIn";
import { experiences } from "@/data/experience";
import { Briefcase, Users, Calendar } from "lucide-react";
import { cn } from "@/lib/utils";

const typeConfig = {
  internship: {
    icon: Briefcase,
    label: "Internship",
    dot: "bg-indigo-500 shadow-[0_0_10px_2px_rgba(99,102,241,0.5)]",
    badge: "text-indigo-700 dark:text-indigo-300 bg-indigo-500/10 border-indigo-500/20",
  },
  volunteer: {
    icon: Users,
    label: "Volunteer",
    dot: "bg-emerald-500 shadow-[0_0_10px_2px_rgba(52,211,153,0.5)]",
    badge: "text-emerald-700 dark:text-emerald-300 bg-emerald-500/10 border-emerald-500/20",
  },
  fulltime: {
    icon: Briefcase,
    label: "Full-time",
    dot: "bg-violet-500 shadow-[0_0_10px_2px_rgba(139,92,246,0.5)]",
    badge: "text-violet-700 dark:text-violet-300 bg-violet-500/10 border-violet-500/20",
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
        {/* Timeline rail */}
        <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-cyan-400/30 to-transparent hidden sm:block" />

        <ol className="space-y-6 sm:pl-12">
          {experiences.map((exp, idx) => {
            const config = typeConfig[exp.type];
            const Icon = config.icon;

            return (
              <FadeIn key={exp.id} delay={idx * 0.12} direction="left">
                <li className="relative">
                  {/* Glowing timeline dot */}
                  <span
                    aria-hidden
                    className={cn(
                      "absolute -left-[52px] hidden sm:block h-4 w-4 rounded-full border-2 border-background top-5",
                      config.dot
                    )}
                  />

                  <div className="glass-card rounded-xl p-6">
                    <div className="flex flex-wrap items-start gap-3 justify-between">
                      <div className="flex items-start gap-3">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 mt-0.5">
                          <Icon className="h-4 w-4 text-primary" />
                        </span>
                        <div>
                          <h3 className="font-semibold text-foreground leading-tight">{exp.role}</h3>
                          <p className="text-sm text-muted-foreground mt-0.5">{exp.company}</p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2 flex-wrap">
                        <span className={cn("inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold", config.badge)}>
                          {config.label}
                        </span>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {exp.dateRange}
                        </div>
                      </div>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.bullets.map((bullet, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-primary/70" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </FadeIn>
            );
          })}
        </ol>
      </div>
    </SectionLayout>
  );
}
