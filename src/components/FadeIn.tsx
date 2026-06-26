"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

type Direction = "up" | "down" | "left" | "right" | "none";

interface FadeInProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  className?: string;
  once?: boolean;
}

const dirOffset: Record<Direction, { x: number; y: number }> = {
  up:    { y: 28, x: 0 },
  down:  { y: -28, x: 0 },
  left:  { y: 0, x: 28 },
  right: { y: 0, x: -28 },
  none:  { y: 0, x: 0 },
};

export function FadeIn({
  children,
  delay = 0,
  duration = 0.55,
  direction = "up",
  className,
  once = true,
}: FadeInProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once, margin: "-60px" });
  const { x, y } = dirOffset[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, x, y }}
      animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{ duration, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger children with sequential delays */
export function StaggerChildren({
  children,
  className,
  stagger = 0.08,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  delay?: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={{
        visible: { transition: { staggerChildren: stagger, delayChildren: delay } },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  );
}

/** Child item for StaggerChildren */
export function StaggerItem({
  children,
  className,
  direction = "up",
}: {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
}) {
  const { x, y } = dirOffset[direction];
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, x, y },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.5, ease: [0.21, 0.47, 0.32, 0.98] } },
      }}
    >
      {children}
    </motion.div>
  );
}
