import { cn } from "@/lib/utils";

interface SectionLayoutProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  /** adds a subtle alternate background for visual rhythm */
  alt?: boolean;
}

export function SectionLayout({
  id,
  className,
  children,
  alt = false,
}: SectionLayoutProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 px-4",
        alt ? "bg-muted/40" : "bg-background",
        className
      )}
    >
      <div className="mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

export function SectionHeading({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl font-bold tracking-tight text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-2 text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-3 h-1 w-12 rounded-full bg-primary" />
    </div>
  );
}
