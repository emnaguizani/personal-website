import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Subtle grid background */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.3)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,black_40%,transparent_100%)]"
      />
      <div className="relative mx-auto max-w-5xl px-4 pt-28 pb-24 flex flex-col items-center text-center">
        {/* Status badge */}
        <div className="mb-6 inline-flex items-center rounded-full border border-border/60 bg-muted/50 px-4 py-1.5 text-xs font-medium text-muted-foreground">
          <span className="mr-2 h-1.5 w-1.5 rounded-full bg-emerald-500" />
          Open to opportunities — graduating June 2027
        </div>

        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
          Emna{" "}
          <span className="text-primary">Guizani</span>
        </h1>

        <p className="mt-4 text-xl font-medium text-muted-foreground sm:text-2xl">
          Cloud Computing Student &amp; Aspiring Cloud Engineer
        </p>

        <p className="mt-5 max-w-2xl text-base text-muted-foreground leading-relaxed">
          Passionate about designing reliable, automated, and high-performance cloud
          infrastructures. Currently specialising in cloud computing at Esprit School
          of Engineering, with hands-on experience in OpenStack, Kubernetes, Ansible,
          and more.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg" className="gap-2">
            <Link href="/#projects">
              View Projects <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="gap-2">
            <a href="/resume.pdf" download>
              <Download className="h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button asChild variant="ghost" size="lg" className="gap-2">
            <Link href="/contact">
              <Mail className="h-4 w-4" /> Contact
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
