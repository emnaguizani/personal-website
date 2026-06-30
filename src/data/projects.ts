export interface Project {
  id: string;
  title: string;
  dateRange: string;
  description: string;
  techStack: string[];
  highlights: string[];
  whatIDid?: string;
  whatILearned?: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface ProjectWithMedia extends Project {
  cardImage: string | null;
  galleryImages: string[];
  videoSrc: string | null;
}

export const projects: Project[] = [
  {
    id: "private-cloud",
    title: "Private Cloud Project",
    dateRange: "Nov 2025 – Present",
    description:
      "Deployed core OpenStack services for IaaS, then automated a Kubernetes cluster with Ansible roles for PaaS. Integrated Prometheus & Grafana for monitoring and Prophet for AI-driven resource forecasting.",
    whatIDid: `Phase 1 — Infrastructure as a Service (IaaS)\n\nDesigned and deployed the core infrastructure required to run virtual machines in a private cloud environment. This involved configuring key OpenStack services — Keystone, Horizon, Neutron, Glance, Placement, Heat, Cinder, and Swift. We created Ubuntu instances, attached and managed storage volumes, configured networking and internet connectivity, automated instance deployment using Heat templates, and integrated monitoring with Zabbix.\n\nPhase 2 — Platform as a Service (PaaS) & Automation\n\nUsed structured Ansible roles to modularize and automate the deployment of a Kubernetes cluster. We configured master node components (API server, etcd, scheduler, controller manager) and worker node components (kubelet, kube-proxy, container runtime), then automated pod creation and cluster operations.\n\nFor observability, we integrated Prometheus and Grafana to monitor nodes and pods in real time and implemented alerting scenarios for incident detection. We also explored predictive resource analysis using Prophet to forecast future workload trends — demonstrating how AI-driven forecasting can support proactive infrastructure management. Finally, we exposed workloads through Kubernetes Ingress for production-like routing.`,
    whatILearned: [
      "How core OpenStack services interact to form a fully functional IaaS environment",
      "Automating VM deployment at scale using Heat templates and Zabbix monitoring",
      "Structuring reusable, modular infrastructure configs with Ansible roles",
      "Kubernetes cluster internals: API server, etcd, scheduler, controller manager, kubelet",
      "Real-time monitoring, dashboarding, and alerting with Prometheus & Grafana",
      "AI-driven resource forecasting with the Prophet time-series library",
      "Kubernetes Ingress configuration for production-ready traffic routing",
    ],
    highlights: [
      "Deployed full OpenStack stack (Keystone, Neutron, Glance, Cinder, Swift)",
      "Automated Kubernetes cluster deployment with structured Ansible roles",
      "Integrated Prometheus & Grafana for monitoring and alerting",
    ],
    techStack: ["OpenStack", "Kubernetes", "Ansible", "Prometheus", "Grafana", "Prophet", "Zabbix"],
    featured: true,
  },
  {
    id: "fitness-web-app",
    title: "Fitness Web App — Grinta",
    dateRange: "Nov 2025 – Present",
    description:
      "Full-stack sports and fitness community platform built with Angular and Spring Boot. Features AI-generated workouts, a real-time Pose Coach, smart nutrition tracking, community challenges, and ML-powered recommendations.",
    whatIDid: `Grinta is a full-stack sports and fitness community platform built with Angular on the frontend and Spring Boot on the backend. Our goal was to design a platform serving distinct types of users — athletes, coaches, and gym managers — each with a tailored portal and a rich, dedicated feature set.\n\nGrinta covers the full fitness experience: AI-generated workout programs, a real-time Pose Coach that tracks and corrects your movements, smart nutrition tracking, community challenges with leaderboards and badges, sports field bookings, and event registrations with QR-code tickets. On the management side, the platform handles session scheduling, coach job applications, subscription plan management, and performance analytics.\n\nBehind the scenes, we integrated Machine Learning microservices to power predictive coach matching, calorie estimation, and intelligent meal scanning — adding a layer of AI that transforms Grinta into a truly intelligent fitness companion.\n\nBuilding a project of this scale pushed us to apply real-world software engineering practices: clean architecture, separation of concerns, role-based access control, third-party integrations, and building production-ready features end to end.`,
    whatILearned: [
      "Designing multi-portal platforms with distinct feature sets per user role",
      "Clean architecture and separation of concerns at production scale",
      "Integrating ML microservices for calorie estimation, pose detection, and coach matching",
      "Role-based access control with complex, multi-tier permission models",
      "Building real-time features: live pose correction, leaderboards, QR-code ticket generation",
      "End-to-end ownership of full-stack features from database schema to polished UI",
    ],
    highlights: [
      "Unified fitness, nutrition, and gym management in one platform",
      "Scalable REST APIs with role-based access control",
      "ML-powered workout, meal, and gym recommendations",
    ],
    techStack: ["Spring Boot", "Angular", "Machine Learning", "REST API"],
    featured: true,
  },
  {
    id: "elearning-app",
    title: "E-learning Web & Desktop App",
    dateRange: "Jan – May 2025",
    description:
      "Web and desktop e-learning platform for people with hearing disabilities. Features sign language lessons, quizzes, community forums, and meeting scheduling with sign-language professors.",
    whatIDid: `A full-featured Java and web application designed to make e-learning accessible for people with hearing disabilities. The platform gives users the opportunity to learn sign language in a supportive and interactive environment.\n\nBuilt using JavaFX for the desktop application and Symfony for the web platform, the app includes: user authentication with role-based access, sign language lessons and assessments, community forums and feedback tools, meeting scheduling with sign-language professors, and SMS/Email password recovery powered by Twilio and Infobip integrations.\n\nThe project followed MVC architecture consistently across both the JavaFX desktop and Symfony web stacks, and was developed collaboratively using GitHub.`,
    whatILearned: [
      "Building cross-platform apps: JavaFX desktop and Symfony web in the same project",
      "Designing accessible, inclusive interfaces for users with hearing disabilities",
      "Integrating third-party communication services: Twilio (SMS) and Infobip (email)",
      "Applying MVC architecture consistently across two different tech stacks",
      "Collaborative development workflows using Git and GitHub",
    ],
    highlights: [
      "Inclusive design for users with hearing disabilities",
      "Interactive sign-language learning modules and quizzes",
      "Meeting scheduler with sign-language professors",
    ],
    techStack: ["Symfony", "JavaFX", "MySQL", "Twilio", "Infobip"],
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
];
