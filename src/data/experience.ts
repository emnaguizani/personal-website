export interface Experience {
  id: string;
  role: string;
  company: string;
  dateRange: string;
  type: "internship" | "volunteer" | "fulltime";
  description: string;
  bullets: string[];
}

export const experiences: Experience[] = [
  {
    id: "bh-bank",
    role: "Network & Security Intern",
    company: "BH Bank",
    dateRange: "Jun – Aug 2025",
    type: "internship",
    description:
      "Hands-on experience in the network and security department with real-world infrastructure and security measures.",
    bullets: [
      "Worked in the network and security department",
      "Gained hands-on experience with enterprise network infrastructure",
      "Assisted in implementing and auditing security measures",
    ],
  },
  {
    id: "gads-marketing",
    role: "WordPress Developer Intern",
    company: "Gads Marketing Agency",
    dateRange: "Aug 2024",
    type: "internship",
    description:
      "Learned professional-level WordPress development; built and maintained websites for the agency and its clients.",
    bullets: [
      "Built and maintained client websites using WordPress",
      "Developed custom themes and plugins for agency projects",
      "Delivered responsive, SEO-ready web solutions",
    ],
  },
  {
    id: "enactus",
    role: "Member – ICT Committee",
    company: "Enactus Esprit",
    dateRange: "Sep 2022 – Present",
    type: "volunteer",
    description:
      "Active member of the ICT committee, guiding new members through brainstorming and ideation, and helping with decision-making during project selection.",
    bullets: [
      "Guided new members through brainstorming and ideation sessions",
      "Supported decision-making during project selection",
      "Contributed to community impact through technology initiatives",
    ],
  },
];
