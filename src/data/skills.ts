export interface SkillGroup {
  category: string;
  icon: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Cloud & DevOps",
    icon: "cloud",
    skills: [
      "OpenStack",
      "Kubernetes",
      "Ansible",
      "Terraform",
      "Prometheus",
      "Grafana",
    ],
  },
  {
    category: "Programming",
    icon: "code",
    skills: ["HTML", "CSS", "JavaScript", "PHP", "Java", "SQL", "C", "C++"],
  },
  {
    category: "Languages",
    icon: "globe",
    skills: [
      "Arabic (Native)",
      "English (Fluent)",
      "French (Intermediate)",
      "German (Beginner)",
    ],
  },
  {
    category: "Soft Skills",
    icon: "users",
    skills: ["Communication", "Leadership", "Teamwork"],
  },
];
