import type { Education, Experience, Project, SiteConfig } from "@/types/portfolio";

export const siteConfig: SiteConfig = {
  name: "Vamsi Krishna Garisapati",
  headline: "Full Stack Developer (Next.js â€¢ APIs â€¢ Postgres)",
  positioningLine:
    "I ship production web apps end-to-end: Next.js App Router, APIs, auth, payments, Postgres/Supabase, and performance work (Core Web Vitals).",
  proofMetric: "Edtech platform reach: 5,000+ students and 100+ mentors. Plus 2 public products live.",
  openTo: "Open to full-time roles (Full Stack / Frontend) and selective freelance.",
  locationLine: "Hyderabad, India (IST)",
  resumePath: "/Vamsi_Krishna_Garisapati_Resume.pdf",
  resumeFileName: "Vamsi_Krishna_Garisapati_Resume.pdf",
  email: "vamsikrishna.garisapati@gmail.com",
  emailSubject: "Portfolio — Vamsi Krishna Garisapati",
  githubUrl: "https://github.com/vamsikrishna-garisapati",
  linkedinUrl: "https://www.linkedin.com/in/vamsikrishna-garisapati",
  stackChips: ["Next.js", "TypeScript", "React", "FastAPI", "Django REST", "PostgreSQL", "Supabase", "Redis"],
};

export const projects: Project[] = [
  {
    slug: "mockarch",
    name: "MockArch",
    featured: true,
    oneLiner:
      "AI-assisted system design interview practice: architecture canvas, automated checks, traffic simulation, and subscriptions (live at mockarch.in).",
    roleTitle: "Founder / Full Stack Engineer",
    roleScope:
      "Owned UI, APIs, AI integration, payments, Supabase RLS, and deployment. Built the product as a multi-tenant SaaS.",
    stack: ["React 19", "TypeScript", "FastAPI", "Python", "Supabase (Postgres + RLS)", "Google Gemini", "Razorpay"],
    status: "Public beta",
    links: {
      liveUrl: "https://mockarch.in",
      liveLabel: "mockarch.in",
    },
    star: {
      situation:
        "System design prep is usually static prompts and generic feedback, which makes it hard to practice repeatedly and improve quickly.",
      task: "Build a repeatable practice environment with actionable feedback while keeping user data isolated and usage costs controlled.",
      action: [
        "Built a drag-and-drop architecture canvas with reusable components and persistence.",
        "Implemented 20+ automated architecture checks (SPOFs, redundancy gaps, queue misconfigurations).",
        "Added traffic simulation to visualize request flow and bottlenecks.",
        "Integrated Gemini for feedback with server-side usage limits and cost-aware prompts.",
        "Shipped subscriptions with Razorpay; enforced multi-tenant isolation using Supabase RLS policies.",
      ],
      result: [
        "Live product with core flows production-ready and iterating in public beta.",
        "Clear, scannable feedback loop: checks + simulation + AI review to accelerate practice quality.",
      ],
    },
    highlights: [
      "Multi-tenant isolation with Supabase RLS",
      "Cost-aware AI feedback loop",
      "Architecture checks + simulation",
    ],
    metrics: [
      "20+ automated checks covering SPOFs, redundancy gaps, and queue misconfigurations.",
      "Traffic simulation with color-coded bottleneck diagnostics.",
    ],
    media: {
      src: "/projects/mockarch.svg",
      alt: "Abstract system diagram composition for MockArch",
    },
  },
  {
    slug: "prohire-networks",
    name: "ProHire Networks",
    featured: false,
    oneLiner:
      "Placement platform with auth, dashboards, job applications, onboarding, profiles, and paid flows (live at prohirenetworks.com).",
    roleTitle: "Full Stack Developer",
    roleScope:
      "Delivered App Router UI, Supabase Auth, protected routing, data access boundaries, and Razorpay payment flows.",
    stack: ["Next.js App Router", "TypeScript", "Supabase Auth", "Postgres", "Tailwind CSS", "TanStack Query", "Zustand"],
    status: "Production",
    links: {
      liveUrl: "https://www.prohirenetworks.com",
      liveLabel: "prohirenetworks.com",
    },
    star: {
      situation:
        "Placement workflows span multiple authenticated roles and data visibility rules, plus payment steps that must reconcile reliably.",
      task: "Ship a secure, role-safe product quickly with predictable client/server state and clean UX.",
      action: [
        "Implemented Supabase Auth and protected routing with user-scoped queries.",
        "Designed UI flows for jobs, applications, onboarding, profiles, and booking.",
        "Integrated Razorpay for paid flows and mapped payment state to user records.",
        "Used TanStack Query + Zustand for consistent async state and UI responsiveness.",
      ],
      result: ["Production deployment with public URL and live usage.", "Secure auth boundaries and predictable state flows."],
    },
    highlights: ["Supabase Auth + protected routing", "Razorpay integration", "Client/server state correctness"],
    metrics: ["Supabase Auth with protected routing and user-scoped data.", "Razorpay integrated for paid flows."],
    media: {
      src: "/projects/prohire.svg",
      alt: "Abstract network and placement workflow motif for ProHire Networks",
    },
  },
];

export const skills: Record<string, string[]> = {
  Languages: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "HTML5", "CSS3"],
  Frontend: [
    "Next.js (App Router)",
    "React",
    "Tailwind CSS",
    "Accessible UI (ARIA)",
    "Responsive UI",
    "SEO",
    "Core Web Vitals",
  ],
  Backend: ["FastAPI", "Django REST Framework", "REST APIs", "Auth", "RBAC", "API Integration"],
  "Databases & Infra": ["PostgreSQL", "Supabase", "Redis", "Docker"],
  "Payments & AI": ["Razorpay", "AI Integration (Gemini API)"],
  "DevOps & Tools": ["Git", "GitHub", "CI/CD", "Vercel", "Cloudflare Pages", "Postman"],
};

export const experience: Experience = {
  company: "10000 Coders",
  role: "Full Stack Developer",
  location: "Hyderabad, India",
  range: "July 2025 — Present",
  bullets: [
    "Shipped production modules for onboarding, learning resources, certificates, feedback, ratings, and placement tracking using Next.js and Django REST Framework.",
    "Built secure REST APIs with role-based access for student, mentor, and admin workflows.",
    "Cut database load ~40% with Redis on high-traffic APIs; improved backend response times under concurrent load.",
    "Hit 95+ Lighthouse scores on student-facing surfaces by improving Core Web Vitals (code splitting, lazy loading, Next.js Image).",
    "Implemented storage workflows for profile media and certificates with cleanup logic to reduce orphaned files and wasted storage.",
  ],
};

export const education: Education = {
  degree: "B.Tech in Computer Science Engineering",
  school: "PBR Visvodaya Institute of Technology & Science",
  location: "Nellore, AP",
  range: "2020 — 2024",
  gpa: "7.76/10",
};

