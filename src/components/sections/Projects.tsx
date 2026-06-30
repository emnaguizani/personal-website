import { SectionLayout, SectionHeading } from "@/components/layout/SectionLayout";
import { projects } from "@/data/projects";
import type { ProjectWithMedia } from "@/data/projects";
import { existsSync } from "node:fs";
import path from "node:path";
import { ProjectsGrid } from "./ProjectsGrid";

function getCardImage(id: string): string | null {
  const exts = ["jpg", "jpeg", "png", "webp"];
  for (const ext of exts) {
    if (existsSync(path.join(process.cwd(), `public/projects/${id}.${ext}`)))
      return `/projects/${id}.${ext}`;
  }
  return null;
}

function getGalleryImages(id: string): string[] {
  const exts = ["jpg", "jpeg", "png", "webp"];
  const images: string[] = [];
  let i = 1;
  while (true) {
    let found = false;
    for (const ext of exts) {
      if (existsSync(path.join(process.cwd(), `public/projects/${id}/${i}.${ext}`))) {
        images.push(`/projects/${id}/${i}.${ext}`);
        found = true;
        break;
      }
    }
    if (!found) break;
    i++;
  }
  return images;
}

function getVideoSrc(id: string): string | null {
  const exts = ["mp4", "webm", "mov"];
  for (const ext of exts) {
    if (existsSync(path.join(process.cwd(), `public/projects/${id}/demo.${ext}`)))
      return `/projects/${id}/demo.${ext}`;
  }
  return null;
}

export function Projects() {
  const projectsWithMedia: ProjectWithMedia[] = projects.map((p) => ({
    ...p,
    cardImage: getCardImage(p.id),
    galleryImages: getGalleryImages(p.id),
    videoSrc: getVideoSrc(p.id),
  }));

  return (
    <SectionLayout id="projects">
      <SectionHeading
        title="Projects"
        subtitle="Hands-on projects from university and personal exploration."
      />
      <ProjectsGrid projects={projectsWithMedia} />
    </SectionLayout>
  );
}
