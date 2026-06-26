import { SectionLayout, SectionHeading } from "@/components/layout/SectionLayout";
import { Badge } from "@/components/ui/badge";
import { StaggerChildren, StaggerItem } from "@/components/FadeIn";
import { projects } from "@/data/projects";
import { Calendar } from "lucide-react";
import Image from "next/image";
import { existsSync } from "fs";
import path from "path";

/** Map project id → gradient for the visual header when no screenshot is present */
const gradients: Record<string, string> = {
  "private-cloud":  "from-indigo-600 via-violet-600 to-cyan-500",
  "fitness-web-app":"from-emerald-600 via-teal-500 to-cyan-400",
  "elearning-app":  "from-violet-600 via-purple-500 to-pink-500",
  "food-delivery-app":"from-orange-500 via-rose-500 to-pink-500",
  "traveling-app":  "from-sky-500 via-blue-600 to-indigo-600",
};

/** Returns the path to a project screenshot if it exists, otherwise null */
function getProjectImage(id: string): string | null {
  const exts = ["jpg", "jpeg", "png", "webp"];
  for (const ext of exts) {
    if (existsSync(path.join(process.cwd(), `public/projects/${id}.${ext}`)))
      return `/projects/${id}.${ext}`;
  }
  return null;
}

export function Projects() {
  return (
    <SectionLayout id="projects">
      <SectionHeading
        title="Projects"
        subtitle="Hands-on projects from university and personal exploration."
      />

      {/* NOTE for screenshots: drop images to public/projects/<id>.jpg
          e.g. public/projects/private-cloud.jpg — they auto-appear in each card */}

      <StaggerChildren className="grid gap-6 sm:grid-cols-2" stagger={0.1} delay={0.05}>
        {projects.map((project) => {
          const imgSrc = getProjectImage(project.id);
          const gradient = gradients[project.id] ?? "from-indigo-600 to-cyan-500";

          return (
            <StaggerItem key={project.id}>
              <div className="glass-card rounded-xl overflow-hidden flex flex-col h-full">

                {/* Visual header — screenshot OR gradient fallback */}
                <div className="relative h-36 overflow-hidden">
                  {imgSrc ? (
                    <Image
                      src={imgSrc}
                      alt={`${project.title} screenshot`}
                      fill
                      className="object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${gradient} flex items-end p-4`}>
                      <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
                        {project.techStack[0]}
                      </span>
                    </div>
                  )}
                  {project.featured && (
                    <span className="absolute top-3 right-3 rounded-full bg-white/15 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
                      Featured
                    </span>
                  )}
                  {/* Gradient fade to card background */}
                  <div className="absolute bottom-0 inset-x-0 h-8 bg-gradient-to-t from-card/80 to-transparent" />
                </div>

                {/* Card body */}
                <div className="p-5 flex flex-col flex-1 gap-3">
                  <div>
                    <h3 className="font-semibold text-foreground leading-tight">{project.title}</h3>
                    <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                      <Calendar className="h-3 w-3" />
                      {project.dateRange}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </StaggerChildren>
    </SectionLayout>
  );
}
