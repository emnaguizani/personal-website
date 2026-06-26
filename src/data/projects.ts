export interface Project {
  id: string;
  title: string;
  dateRange: string;
  description: string;
  techStack: string[];
  highlights: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: "private-cloud",
    title: "Private Cloud Project",
    dateRange: "Nov 2025 – Present",
    description:
      "Deployed and configured core OpenStack services (Keystone, Horizon, Neutron, Glance, Placement, Heat, Cinder, Swift); created Ubuntu instances with networking and volumes; automated a Kubernetes cluster deployment using structured Ansible roles; integrated Prometheus and Grafana for monitoring and observability.",
    highlights: [
      "Deployed full OpenStack stack (Keystone, Neutron, Glance, Cinder, Swift)",
      "Automated Kubernetes cluster deployment with structured Ansible roles",
      "Integrated Prometheus & Grafana for monitoring and alerting",
    ],
    techStack: ["OpenStack", "Kubernetes", "Ansible", "Prometheus", "Grafana"],
    featured: true,
  },
  {
    id: "fitness-web-app",
    title: "Fitness Web App",
    dateRange: "Nov 2025 – Present",
    description:
      "Full-stack platform combining fitness, nutrition, gym management and booking in one app. Scalable REST APIs and responsive UI with role-based access. Integrated machine learning for smart recommendations (workouts, meals, gyms) and booking optimization.",
    highlights: [
      "Unified fitness, nutrition, and gym management in one platform",
      "Scalable REST APIs with role-based access control",
      "ML-powered workout, meal, and gym recommendations",
    ],
    techStack: ["Spring Boot", "Angular", "Machine Learning"],
    featured: true,
  },
  {
    id: "elearning-app",
    title: "E-learning Web & Desktop App",
    dateRange: "Jan – May 2025",
    description:
      "Web and desktop e-learning platform designed for people with hearing disabilities. Features to learn sign language, take quizzes, and schedule meetings with a sign-language professor.",
    highlights: [
      "Inclusive design for users with hearing disabilities",
      "Interactive sign-language learning modules and quizzes",
      "Meeting scheduler with sign-language professors",
    ],
    techStack: ["Symfony", "JavaFX"],
    featured: false,
  },
  {
    id: "food-delivery-app",
    title: "Food Delivery App",
    dateRange: "Nov – Dec 2024",
    description:
      "Food delivery app letting users order food for delivery, built with low-code development techniques using FlutterFlow.",
    highlights: [
      "End-to-end food ordering and delivery flow",
      "Built with low-code techniques for rapid development",
    ],
    techStack: ["FlutterFlow"],
    featured: false,
  },
  {
    id: "traveling-app",
    title: "Traveling App",
    dateRange: "Jan – May 2023",
    description:
      "Travel web app to find hotels, trips and transportation. Built full-stack from scratch with a team using native PHP.",
    highlights: [
      "Full-stack travel booking platform built from scratch",
      "Hotel, trip, and transportation search and booking",
      "Team-based collaborative development",
    ],
    techStack: ["Native PHP"],
    featured: false,
  },
];
