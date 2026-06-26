import Link from "next/link";
import { Mail } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/icons";

const socials = [
  {
    href: "mailto:guizani.emna14@gmail.com",
    icon: Mail,
    label: "Email",
  },
  {
    href: "https://github.com/emnaguizani",
    icon: GitHubIcon,
    label: "GitHub",
  },
  {
    href: "https://linkedin.com/in/emna-guizani",
    icon: LinkedInIcon,
    label: "LinkedIn",
  },
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border/60 py-8 px-4">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {year} Emna Guizani. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          {socials.map(({ href, icon: Icon, label }) => (
            <Link
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
