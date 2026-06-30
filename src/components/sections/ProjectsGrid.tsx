"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";
import Image from "next/image";
import type { ProjectWithMedia } from "@/data/projects";
import { ProjectModal } from "@/components/ProjectModal";

const gradients: Record<string, string> = {
  "private-cloud":    "from-indigo-950 via-violet-800 to-purple-600",
  "fitness-web-app":  "from-rose-950 via-fuchsia-800 to-pink-600",
  "elearning-app":    "from-purple-950 via-violet-700 to-fuchsia-500",
  "food-delivery-app":"from-rose-900 via-pink-700 to-amber-600",
};

export function ProjectsGrid({ projects }: { projects: ProjectWithMedia[] }) {
  const [selected, setSelected] = useState<ProjectWithMedia | null>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const inView = useInView(gridRef, { once: true, margin: "-60px" });

  function selectProject(project: ProjectWithMedia) {
    setSelected((prev) => (prev?.id === project.id ? null : project));
  }

  return (
    <>
      <div ref={gridRef} className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => {
          const imgSrc = project.cardImage;
          const gradient = gradients[project.id] ?? "from-indigo-600 to-cyan-500";
          const isSelected = selected?.id === project.id;

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => selectProject(project)}
              className="glass-card rounded-xl overflow-hidden flex flex-col h-full cursor-pointer"
              style={
                isSelected
                  ? {
                      borderColor: "rgba(129, 140, 248, 0.65)",
                      boxShadow:
                        "0 0 0 2px rgba(129, 140, 248, 0.25), 0 0 32px rgba(99, 102, 241, 0.18)",
                    }
                  : undefined
              }
            >
              {/* Visual header */}
              <div className="relative h-36 overflow-hidden">
                {imgSrc ? (
                  <Image
                    src={imgSrc}
                    alt={`${project.title} screenshot`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, 50vw"
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
                <p className="text-xs text-primary/60 font-medium mt-0.5">
                  {isSelected ? "Click to close" : "Click for details →"}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Backdrop — stable key so it stays visible when switching projects */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="backdrop"
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setSelected(null)}
          />
        )}
      </AnimatePresence>

      {/* Modal — key changes on project switch to trigger animation */}
      <AnimatePresence>
        {selected && (
          <motion.div
            key="modal-shell"
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <AnimatePresence mode="wait">
              <ProjectModal
                key={selected.id}
                project={selected}
                onClose={() => setSelected(null)}
              />
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
