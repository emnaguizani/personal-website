import { ContactForm } from "./ContactForm";
import { SectionLayout, SectionHeading } from "@/components/layout/SectionLayout";
import { Mail, MapPin } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Emna Guizani",
  description: "Get in touch with Emna Guizani for opportunities or collaboration.",
};

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "guizani.emna14@gmail.com",
    href: "mailto:guizani.emna14@gmail.com",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    value: "github.com/emnaguizani",
    href: "https://github.com/emnaguizani",
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    value: "linkedin.com/in/emna-guizani",
    href: "https://linkedin.com/in/emna-guizani",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Tunis, Tunisia",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <SectionLayout>
      <SectionHeading
        title="Get in Touch"
        subtitle="Have an opportunity, a question, or just want to connect? I'd love to hear from you."
      />
      <div className="grid gap-12 md:grid-cols-5">
        {/* Contact info */}
        <div className="md:col-span-2 space-y-6">
          <p className="text-muted-foreground leading-relaxed text-sm">
            I'm currently looking for internship and graduate opportunities in cloud
            engineering and DevOps. Feel free to reach out via the form or any of
            the channels below.
          </p>
          <div className="space-y-4">
            {contactLinks.map(({ icon: Icon, label, value, href }) => (
              <div key={label} className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-4 w-4 text-primary" />
                </span>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                    {label}
                  </p>
                  {href ? (
                    <Link
                      href={href}
                      target={href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="text-sm text-foreground hover:text-primary transition-colors"
                    >
                      {value}
                    </Link>
                  ) : (
                    <p className="text-sm text-foreground">{value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="md:col-span-3">
          <ContactForm />
        </div>
      </div>
    </SectionLayout>
  );
}
