import type { CapabilityGroup, Education, Experience, Project, SiteConfig, Service } from "@/types/portfolio";

export const siteConfig: SiteConfig = {
  name: "Vamsi Krishna Garisapati",
  headline: "Full Stack Engineer & Freelance Developer",
  positioningLine: "I architect and ship robust production systems. Building scalable APIs, high-performance frontends, and everything in between.",
  aboutTeaser:
    "Full stack engineer: I own features across the stack — from API design, validation, and database access (including RLS-aware patterns) to polished React/Next.js UI. Comfortable leading backend-heavy work or pairing with design for frontend polish.",
  targetRoles: [
    "Full Stack Engineer",
    "Backend / API Engineer (Python, REST, Postgres)",
    "Frontend Engineer (Next.js / React)",
  ],
  resumeHighlights: [
    "Production experience: edtech at scale (5,000+ students) plus two live public products.",
    "Stack depth: Next.js App Router, TypeScript, Python (FastAPI), Django REST, REST APIs, Postgres/Supabase, auth, payments, Redis-backed performance work.",
    "Quality bar: clear API contracts and data boundaries, accessible UI where it ships, recruiter-friendly project write-ups, and performance-minded delivery.",
  ],
  proofMetric: "Edtech platform reach: 5,000+ students and 100+ mentors. Plus 2 public products live.",
  openTo: "Open to full-time roles, contract work, and remote opportunities.",
  locationLine: "Hyderabad, India (IST)",
  resumePath: "/Vamsi_Krishna_Garisapati_Resume.pdf",
  resumeFileName: "Vamsi_Krishna_Garisapati_Resume.pdf",
  email: "vamsikrishna.garisapati@gmail.com",
  emailSubject: "Portfolio — Vamsi Krishna Garisapati",
  githubUrl: "https://github.com/vamsikrishna-garisapati",
  linkedinUrl: "https://www.linkedin.com/in/vamsikrishna-garisapati",
  stackChips: ["Next.js", "TypeScript", "React", "FastAPI", "Django REST", "PostgreSQL", "Supabase", "Redis"],
};

export const services: Service[] = [
  {
    title: "Landing pages that convert",
    summary: "Premium, fast landing pages for products, startups, and personal brands.",
    outcomes: [
      "Stronger first impression in under 30 seconds.",
      "Better Core Web Vitals (LCP/CLS/INP) and Lighthouse scores.",
      "SEO-ready structure: headings, metadata, and internal linking.",
    ],
    deliverables: ["Responsive UI", "SEO metadata", "Performance pass", "Accessible components"],
    keywords: ["Next.js", "React", "Tailwind CSS", "SEO", "Core Web Vitals", "Accessibility"],
  },
  {
    title: "Business websites & redesigns",
    summary: "Modernize an existing site or ship a new one with clean UI, content structure, and trust signals.",
    outcomes: [
      "Clear service/value messaging and scan-friendly sections.",
      "Improved mobile UX and consistent visual system.",
      "Faster pages via image/layout optimization.",
    ],
    deliverables: ["Design refresh", "Component system", "Content structure", "Deployment"],
    keywords: ["Responsive Design", "UI/UX", "Next.js App Router", "Performance", "Vercel"],
  },
  {
    title: "SaaS UI & dashboards",
    summary: "Build product UI with scalable component architecture, predictable state, and role-safe UX.",
    outcomes: [
      "Faster feature delivery via reusable components and patterns.",
      "Clean, maintainable TypeScript and layout conventions.",
      "Accessible, keyboard-friendly navigation and controls.",
    ],
    deliverables: ["UI screens", "Tables/forms", "State patterns", "A11y pass"],
    keywords: ["TypeScript", "Component Architecture", "Dashboard UI", "Accessibility", "React"],
  },
  {
    title: "Performance + SEO cleanup",
    summary: "Targeted improvements to speed, stability, and search/social previews without a full rewrite.",
    outcomes: [
      "Reduced layout shift and improved loading experience.",
      "Smaller bundles and fewer long tasks.",
      "More consistent metadata + OpenGraph/Twitter cards.",
    ],
    deliverables: ["Perf audit", "Image optimization", "Metadata fixes", "A11y fixes"],
    keywords: ["Web Performance", "Core Web Vitals", "SEO", "next/image", "Lighthouse"],
  },
  {
    title: "APIs & backend work",
    summary:
      "REST APIs and service-layer work in Python (FastAPI, Django REST) with Postgres/Supabase — auth-aware endpoints, validation, and pragmatic data access.",
    outcomes: [
      "Predictable contracts between client and server (errors, validation, consistent patterns).",
      "Safer multi-tenant flows with RBAC/RLS-aware access where it matters.",
      "Easier handoff: documented endpoints and maintainable structure.",
    ],
    deliverables: ["Endpoint design", "Integration support", "Query tuning", "Auth/RBAC guidance"],
    keywords: ["REST API", "FastAPI", "Django REST Framework", "PostgreSQL", "Supabase", "Python", "Backend Development"],
  },
];

/** Regrouped from `services` — no copy rewrite, only rearrangement. */
export const capabilityGroups: CapabilityGroup[] = [
  {
    id: "fullstack",
    eyebrow: "Full-stack delivery",
    headline: "Ship end-to-end with clear ownership.",
    outcomes: [
      services[1].outcomes[0],
      services[2].outcomes[0],
      services[1].outcomes[1],
    ],
  },
  {
    id: "apis",
    eyebrow: "APIs & backend",
    headline: "Python, Postgres, and safe multi-tenant access.",
    outcomes: services[4].outcomes.slice(0, 3),
  },
  {
    id: "frontend",
    eyebrow: "Frontend & performance",
    headline: "Next.js, Core Web Vitals, and accessible UI.",
    outcomes: [services[0].outcomes[0], services[0].outcomes[1], services[3].outcomes[0]],
  },
];

export const projects: Project[] = [
  {
    slug: "mockarch",
    name: "MockArch",
    featured: true,
    oneLiner:
      "AI-assisted system design interview practice: architecture canvas, automated checks, traffic simulation, and subscriptions (live at mockarch.in).",
    resultLine: "Live at mockarch.in · 20+ automated checks · Traffic simulation · Razorpay subscriptions",
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
    resultLine: "Live at prohirenetworks.com · Role-safe dashboards · Razorpay paid flows · Secure auth boundaries",
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
