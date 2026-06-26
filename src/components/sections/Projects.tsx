import { SectionLayout, SectionHeading } from "@/components/layout/SectionLayout";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/projects";
import { Calendar } from "lucide-react";

export function Projects() {
  return (
    <SectionLayout id="projects">
      <SectionHeading
        title="Projects"
        subtitle="A selection of hands-on projects from university and personal exploration."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project) => (
          <Card
            key={project.id}
            className="flex flex-col transition-shadow hover:shadow-md"
          >
            <CardHeader className="pb-3">
              <div className="flex items-start justify-between gap-2">
                <CardTitle className="text-base font-semibold leading-tight">
                  {project.title}
                </CardTitle>
                {project.featured && (
                  <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                    Featured
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1 text-xs text-muted-foreground pt-1">
                <Calendar className="h-3 w-3" />
                {project.dateRange}
              </div>
              <CardDescription className="pt-2 leading-relaxed text-sm">
                {project.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="pt-0 mt-auto">
              <div className="flex flex-wrap gap-1.5">
                {project.techStack.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionLayout>
  );
}
