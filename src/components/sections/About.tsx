import { SectionLayout, SectionHeading } from "@/components/layout/SectionLayout";
import { GraduationCap, MapPin, Calendar } from "lucide-react";

export function About() {
  return (
    <SectionLayout id="about">
      <SectionHeading
        title="About Me"
        subtitle="A brief introduction to who I am and what drives me."
      />
      <div className="grid gap-10 md:grid-cols-5">
        {/* Bio */}
        <div className="md:col-span-3 space-y-4 text-muted-foreground leading-relaxed">
          <p>
            I'm a fourth-year Software Engineering student at Esprit School of
            Engineering, specialising in <strong className="text-foreground">cloud computing</strong>.
            My programme is highly project-based, giving me the opportunity to
            work on real-world infrastructure challenges rather than just
            theoretical coursework.
          </p>
          <p>
            I'm passionate about designing{" "}
            <strong className="text-foreground">reliable, automated, and high-performance</strong>{" "}
            cloud infrastructures. From deploying private clouds with OpenStack to
            orchestrating containerised workloads with Kubernetes, I enjoy the full
            DevOps lifecycle — provisioning, automation, monitoring, and observability.
          </p>
          <p>
            Beyond the technical side, I value teamwork and clear communication.
            As a member of Enactus Esprit's ICT committee, I've helped guide new
            members and contributed to decision-making on impactful projects.
          </p>
        </div>

        {/* Quick facts */}
        <div className="md:col-span-2 space-y-5">
          <div className="rounded-xl border border-border bg-muted/30 p-5 space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">
              Education
            </h3>
            <div className="flex items-start gap-3">
              <GraduationCap className="h-5 w-5 text-primary mt-0.5 shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground">
                  Esprit School of Engineering
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Software Engineering — Cloud Computing Specialty
                </p>
                <div className="mt-1.5 flex items-center gap-1 text-xs text-muted-foreground">
                  <Calendar className="h-3 w-3" />
                  Sep 2022 – Jun 2027 · 4th year
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-xl border border-border bg-muted/30 p-5 space-y-4">
            <h3 className="font-semibold text-foreground text-sm uppercase tracking-wide">
              Location
            </h3>
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <p className="text-sm text-muted-foreground">Tunis, Tunisia</p>
            </div>
          </div>
        </div>
      </div>
    </SectionLayout>
  );
}
