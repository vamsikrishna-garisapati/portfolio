export type Project = {
  slug: string;
  name: string;
  role: string;
  stack: string;
  details: string[];
  status: string;
  media: {
    src: string;
    alt: string;
  };
};

export const projects: Project[] = [
  {
    slug: "mockarch",
    name: "MockArch",
    role: "AI-Powered System Design Simulator",
    stack:
      "React 19, TypeScript, TanStack Start, FastAPI, Python, Supabase, Google Gemini, Razorpay, Cloudflare Pages",
    status: "In Development",
    media: {
      src: "/projects/mockarch.svg",
      alt: "Abstract technical composition representing MockArch",
    },
    details: [
      "Built an AI-powered SaaS for system design interview practice end-to-end.",
      "Created a drag-and-drop canvas for distributed system design.",
      "Implemented a real-time analysis engine running 20 architectural checks.",
      "Built a traffic simulation layer to model request flow and detect bottlenecks.",
      "Integrated Google Gemini for architecture feedback and iteration.",
      "Built Free / Pro subscription flows using Razorpay and secure gating.",
      "Used Supabase Row-Level Security for strict multi-user data isolation.",
    ],
  },
  {
    slug: "ek-gold-and-silver",
    name: "EK Gold & Silver",
    role: "E-Commerce Web Application",
    stack:
      "Next.js, React.js, Razorpay, Firebase, Zustand, TanStack Query, Tailwind CSS, Vercel",
    status: "Production Ready",
    media: {
      src: "/projects/ek-gold.svg",
      alt: "Luxury monochrome composition representing EK Gold and Silver",
    },
    details: [
      "Built a production-ready precious metals e-commerce platform.",
      "Designed responsive UI and SEO-friendly pricing and product pages.",
      "Created a modular frontend architecture to reduce future UI effort.",
      "Integrated Razorpay payment flows and order lifecycle handling.",
      "Used Firebase for authentication and backend services.",
      "Deployed on Vercel with CI/CD and release-safe workflows.",
      "Structured the frontend for future real-time price integration.",
    ],
  },
];

export const skills: Record<string, string[]> = {
  Languages: [
    "JavaScript (ES6+)",
    "Python",
    "TypeScript",
    "HTML5",
    "CSS3",
    "SQL",
  ],
  Frontend: [
    "Next.js (React 19)",
    "Tailwind CSS",
    "Zustand",
    "TanStack Query",
  ],
  Backend: [
    "Django REST Framework",
    "FastAPI",
    "RESTful API Design",
    "JWT",
    "RBAC",
  ],
  "Databases / Storage / Infra": [
    "PostgreSQL",
    "MySQL",
    "Supabase",
    "Redis",
    "AWS S3",
    "Firebase",
    "Docker",
    "Vercel",
    "Cloudflare Pages",
    "CI/CD",
    "Postman",
  ],
};

export const experience = {
  company: "10000 Coders",
  role: "Full Stack Developer",
  location: "Hyderabad, India",
  range: "Oct 2024 - Present",
  bullets: [
    "Built and maintained core platform modules including Student Onboarding Flow, Learning Resources, Certificate Generation, Feedback & Ratings, and Placement Tracking.",
    "Developed and supported a live platform serving 5,000+ students and 100+ mentors.",
    "Designed and implemented RESTful APIs across platform modules using Django REST Framework.",
    "Engineered JWT-based authentication and RBAC for student, mentor, and admin roles.",
    "Reduced database load by around 40% using Redis caching on high-traffic endpoints.",
    "Improved frontend performance through code splitting, lazy loading, and image optimization, achieving 95+ Lighthouse scores.",
    "Identified and resolved 25+ production bugs across Student UI and Mentor UI.",
    "Worked within Agile sprint cycles including standups, planning, code reviews, and production releases.",
  ],
};
