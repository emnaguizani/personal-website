import Image from "next/image";
import { SectionLayout, SectionHeading } from "@/components/layout/SectionLayout";
import { FadeIn } from "@/components/FadeIn";
import { GraduationCap, MapPin, Calendar } from "lucide-react";
import { existsSync } from "fs";
import path from "path";

function hasProfilePhoto() {
  try {
    return existsSync(path.join(process.cwd(), "public/profile.jpg")) ||
           existsSync(path.join(process.cwd(), "public/profile.png")) ||
           existsSync(path.join(process.cwd(), "public/profile.webp"));
  } catch {
    return false;
  }
}

function getProfileSrc(): string | null {
  try {
    if (existsSync(path.join(process.cwd(), "public/profile.jpg")))  return "/profile.jpg";
    if (existsSync(path.join(process.cwd(), "public/profile.png")))  return "/profile.png";
    if (existsSync(path.join(process.cwd(), "public/profile.webp"))) return "/profile.webp";
    return null;
  } catch { return null; }
}

export function About() {
  const profileSrc = getProfileSrc();

  return (
    <SectionLayout id="about">
      <SectionHeading
        title="About Me"
        subtitle="A brief introduction to who I am and what drives me."
      />
      <div className="grid gap-12 md:grid-cols-5 items-start">

        {/* ── Profile photo ── */}
        <FadeIn direction="right" className="md:col-span-2 flex justify-center md:justify-start">
          <div className="relative w-56 h-56 md:w-64 md:h-64 shrink-0">
            {/* Animated gradient ring */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 via-cyan-400 to-teal-400 opacity-70 blur-sm profile-ring"
            />
            <div className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl">
              {profileSrc ? (
                <Image
                  src={profileSrc}
                  alt="Emna Guizani"
                  fill
                  className="object-cover"
                  priority
                />
              ) : (
                /* Placeholder — drop public/profile.jpg to replace */
                <div className="w-full h-full bg-gradient-to-br from-indigo-600 via-violet-600 to-cyan-600 flex flex-col items-center justify-center gap-3">
                  <span className="text-5xl font-bold text-white/90 tracking-tight select-none">EG</span>
                  <span className="text-xs text-white/50 font-medium uppercase tracking-widest select-none">
                    Add profile.jpg
                  </span>
                </div>
              )}
            </div>
          </div>
        </FadeIn>

        {/* ── Bio + quick facts ── */}
        <div className="md:col-span-3 space-y-8">
          <FadeIn delay={0.1}>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                I'm a fourth-year Software Engineering student at Esprit School of
                Engineering, specialising in{" "}
                <strong className="text-foreground">cloud computing</strong>. My
                programme is highly project-based, giving me the opportunity to work
                on real-world infrastructure challenges rather than just theoretical
                coursework.
              </p>
              <p>
                I'm passionate about designing{" "}
                <strong className="text-foreground">
                  reliable, automated, and high-performance
                </strong>{" "}
                cloud infrastructures. From deploying private clouds with OpenStack
                to orchestrating containerised workloads with Kubernetes, I enjoy
                the full DevOps lifecycle — provisioning, automation, monitoring,
                and observability.
              </p>
              <p>
                Beyond the technical side, I value teamwork and clear communication.
                As a member of Enactus Esprit's ICT committee, I've helped guide new
                members and contributed to decision-making on impactful projects.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} className="grid gap-3 sm:grid-cols-2">
            {/* Education card */}
            <div className="glass-card rounded-xl p-5 space-y-3">
              <h3 className="font-semibold text-foreground text-xs uppercase tracking-widest">
                Education
              </h3>
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <GraduationCap className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Esprit School of Engineering
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    Software Engineering — Cloud Computing
                  </p>
                  <div className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    Sep 2022 – Jun 2027 · 4th year
                  </div>
                </div>
              </div>
            </div>

            {/* Location card */}
            <div className="glass-card rounded-xl p-5 space-y-3">
              <h3 className="font-semibold text-foreground text-xs uppercase tracking-widest">
                Location
              </h3>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <MapPin className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <p className="text-sm font-medium text-foreground">Tunis, Tunisia</p>
                  <p className="text-xs text-muted-foreground mt-0.5">UTC+1</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </SectionLayout>
  );
}
