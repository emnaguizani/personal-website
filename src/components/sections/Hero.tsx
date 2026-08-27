"use client";

import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ParticleCanvas } from "@/components/ParticleCanvas";
import { motion } from "framer-motion";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function item(delay: number) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease },
  };
}

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-background">
      {/* ── Particle constellation ── */}
      <ParticleCanvas />

      {/* ── Aurora gradient blobs ── */}
      <div aria-hidden className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
        <div className="blob blob-4" />
        {/* Radial vignette so text stays readable */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_50%,transparent_20%,hsl(var(--background)/0.6)_100%)]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-28 flex flex-col items-center text-center">

        {/* Status badge */}
        <motion.div {...item(0.1)}>
          <div className="mb-7 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-white/10">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_2px_rgba(52,211,153,0.6)]" />
            Open to opportunities — graduating June 2027
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          {...item(0.2)}
          className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          <span className="text-foreground">Emna </span>
          <span className="gradient-text">Guizani</span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          {...item(0.35)}
          className="mt-5 text-xl font-medium text-muted-foreground sm:text-2xl"
        >
          Cloud Computing Student &amp; Aspiring Cloud Engineer
        </motion.p>

        {/* Summary */}
        <motion.p
          {...item(0.48)}
          className="mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed"
        >
          Passionate about designing{" "}
          <span className="text-foreground font-medium">
            reliable, automated, high-performance
          </span>{" "}
          cloud infrastructures. Specialising in cloud computing at Esprit School of
          Engineering with hands-on experience in OpenStack, Kubernetes, and Ansible.
        </motion.p>

        {/* CTAs */}
        <motion.div
          {...item(0.6)}
          className="mt-10 flex flex-wrap justify-center items-center gap-4"
        >
          <Button asChild size="lg" className="gap-2 shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow">
            <Link href="/#projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="ghost" size="lg" className="gap-2 hover:bg-white/10">
            <Link href="/contact">
              <Mail className="h-4 w-4" /> Contact
            </Link>
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-muted-foreground/50"
        >
          <span className="text-[10px] uppercase tracking-widest font-medium">Scroll</span>
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="h-5 w-px bg-gradient-to-b from-muted-foreground/40 to-transparent"
          />
        </motion.div>
      </div>
    </section>
  );
}
