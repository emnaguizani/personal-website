"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import type { ProjectWithMedia } from "@/data/projects";
import { Badge } from "@/components/ui/badge";

interface Props {
  project: ProjectWithMedia;
  allProjects: ProjectWithMedia[];
  onClose: () => void;
  onNavigate: (project: ProjectWithMedia) => void;
}

const gradients: Record<string, string> = {
  "private-cloud":    "from-indigo-950 via-violet-800 to-purple-600",
  "fitness-web-app":  "from-rose-950 via-fuchsia-800 to-pink-600",
  "elearning-app":    "from-purple-950 via-violet-700 to-fuchsia-500",
  "food-delivery-app":"from-rose-900 via-pink-700 to-amber-600",
};

export function ProjectModal({ project, allProjects, onClose, onNavigate }: Props) {
  const currentIdx = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = currentIdx > 0 ? allProjects[currentIdx - 1] : null;
  const nextProject = currentIdx < allProjects.length - 1 ? allProjects[currentIdx + 1] : null;
  const images =
    project.galleryImages.length > 0
      ? project.galleryImages
      : project.cardImage
      ? [project.cardImage]
      : [];

  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") advance(1);
      if (e.key === "ArrowLeft") advance(-1);
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  });

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, []);

  function advance(delta: number) {
    const next = idx + delta;
    if (next >= 0 && next < images.length) {
      setDir(delta);
      setIdx(next);
    }
  }

  const gradient = gradients[project.id] ?? "from-indigo-600 to-cyan-500";

  return (
    <motion.div
      role="dialog"
      aria-modal="true"
      aria-label={project.title}
      className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto glass-modal rounded-2xl pointer-events-auto"
      initial={{ opacity: 0, scale: 0.91, y: 28 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: -10, transition: { duration: 0.13, ease: "easeIn" } }}
      transition={{ type: "spring", stiffness: 300, damping: 28, mass: 0.8 }}
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        className="absolute top-3 right-3 z-20 rounded-full p-1.5 bg-black/30 backdrop-blur-sm hover:bg-black/50 transition-colors"
        aria-label="Close"
      >
        <X className="h-4 w-4 text-white" />
      </button>

      {/* Image gallery */}
      {images.length > 0 ? (
        <div className="relative h-64 overflow-hidden rounded-t-2xl shrink-0">
          <AnimatePresence initial={false} custom={dir}>
            <motion.div
              key={idx}
              custom={dir}
              className="absolute inset-0"
              initial={{ opacity: 0, x: dir * 56 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: dir * -56 }}
              transition={{ duration: 0.27, ease: [0.21, 0.47, 0.32, 0.98] }}
            >
              <Image
                src={images[idx]}
                alt={`${project.title} screenshot ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </motion.div>
          </AnimatePresence>

          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); advance(-1); }}
                disabled={idx === 0}
                className="absolute left-3 top-1/2 -translate-y-1/2 z-10 rounded-full p-1.5 bg-black/30 backdrop-blur-sm hover:bg-black/55 disabled:opacity-25 transition-all"
                aria-label="Previous image"
              >
                <ChevronLeft className="h-4 w-4 text-white" />
              </button>
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); advance(1); }}
                disabled={idx === images.length - 1}
                className="absolute right-3 top-1/2 -translate-y-1/2 z-10 rounded-full p-1.5 bg-black/30 backdrop-blur-sm hover:bg-black/55 disabled:opacity-25 transition-all"
                aria-label="Next image"
              >
                <ChevronRight className="h-4 w-4 text-white" />
              </button>

              {/* Dot indicators */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-1.5">
                {images.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setDir(i > idx ? 1 : -1);
                      setIdx(i);
                    }}
                    aria-label={`Go to image ${i + 1}`}
                    className={`rounded-full transition-all duration-200 ${
                      i === idx
                        ? "w-4 h-1.5 bg-white"
                        : "w-1.5 h-1.5 bg-white/45 hover:bg-white/75"
                    }`}
                  />
                ))}
              </div>
            </>
          )}

          {project.featured && (
            <span className="absolute top-3 left-3 z-10 rounded-full bg-white/15 backdrop-blur px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest text-white">
              Featured
            </span>
          )}

          <div className="absolute bottom-0 inset-x-0 h-20 bg-gradient-to-t from-card/90 to-transparent pointer-events-none" />
        </div>
      ) : (
        <div className={`h-28 rounded-t-2xl bg-gradient-to-br ${gradient} flex items-end p-4`}>
          <span className="text-[11px] font-semibold uppercase tracking-widest text-white/60">
            {project.techStack[0]}
          </span>
        </div>
      )}

      {/* Video */}
      {project.videoSrc && (
        <div className="px-6 pt-5">
          <p className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground mb-2">
            Demo
          </p>
          {/* eslint-disable-next-line jsx-a11y/media-has-caption */}
          <video
            src={project.videoSrc}
            controls
            className="w-full rounded-xl bg-black max-h-72"
            preload="metadata"
          />
        </div>
      )}

      {/* Text content */}
      <div className="p-6 flex flex-col gap-5">
        {/* Header */}
        <div>
          <h2 className="text-xl font-bold text-foreground leading-tight">{project.title}</h2>
          <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-1">
            <Calendar className="h-3.5 w-3.5" />
            {project.dateRange}
          </div>
        </div>

        {/* What I Built */}
        {project.whatIDid && (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2.5 flex items-center gap-2">
              <span className="inline-block w-1 h-4 rounded-full bg-gradient-to-b from-primary to-cyan-400 shrink-0" />
              What I Built
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed whitespace-pre-line">
              {project.whatIDid}
            </p>
          </div>
        )}

        {/* What I Learned */}
        {project.whatILearned && project.whatILearned.length > 0 && (
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-2.5 flex items-center gap-2">
              <span className="inline-block w-1 h-4 rounded-full bg-gradient-to-b from-emerald-400 to-teal-400 shrink-0" />
              What I Learned
            </h3>
            <ul className="flex flex-col gap-1.5">
              {project.whatILearned.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-primary/50 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Tech stack */}
        <div>
          <h3 className="text-sm font-semibold text-foreground mb-2.5 flex items-center gap-2">
            <span className="inline-block w-1 h-4 rounded-full bg-gradient-to-b from-violet-400 to-purple-400 shrink-0" />
            Tech Stack
          </h3>
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </div>

        {/* Links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex gap-4 pt-1 border-t border-border/50">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/75 transition-colors font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                GitHub →
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:text-primary/75 transition-colors font-medium"
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo →
              </a>
            )}
          </div>
        )}

        {/* Project navigation */}
        {(prevProject || nextProject) && (
          <div className="flex items-center justify-between pt-3 border-t border-border/50">
            {prevProject ? (
              <button
                type="button"
                onClick={() => onNavigate(prevProject)}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ChevronLeft className="h-3.5 w-3.5 group-hover:-translate-x-0.5 transition-transform" />
                <span>
                  <span className="block text-[10px] uppercase tracking-widest mb-0.5 opacity-60">Previous</span>
                  {prevProject.title}
                </span>
              </button>
            ) : <span />}

            {nextProject && (
              <button
                type="button"
                onClick={() => onNavigate(nextProject)}
                className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors group text-right ml-auto"
              >
                <span>
                  <span className="block text-[10px] uppercase tracking-widest mb-0.5 opacity-60">Next</span>
                  {nextProject.title}
                </span>
                <ChevronRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}
