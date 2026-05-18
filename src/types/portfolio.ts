export type ProjectLinks = {
  liveUrl: string;
  liveLabel?: string;
  repoUrl?: string;
};

export type ProjectStar = {
  situation: string;
  task: string;
  action: string[];
  result: string[];
};

export type Project = {
  slug: string;
  name: string;
  featured: boolean;
  /** One-line product/value summary (scannable). */
  oneLiner: string;
  /** Outcome / proof line shown on cards (scannable). */
  resultLine: string;
  roleTitle: string;
  roleScope: string;
  stack: string[];
  status: "Production" | "Public beta" | "Prototype";
  links: ProjectLinks;
  star: ProjectStar;
  highlights: string[];
  metrics: string[];
  media?: {
    src: string;
    alt: string;
  };
  /** Large editorial cover for cards / case studies — optional until screenshots are added. */
  cover?: {
    src: string;
    alt: string;
    width: number;
    height: number;
    caption: string;
  };
};

export type Experience = {
  company: string;
  role: string;
  location: string;
  range: string;
  bullets: string[];
};

export type Education = {
  degree: string;
  school: string;
  location: string;
  range: string;
  gpa?: string;
};

export type SiteConfig = {
  name: string;
  headline: string;
  positioningLine: string;
  /** Short home-page About blurb (distinct from `positioningLine`). */
  aboutTeaser: string;
  /** Roles you want recruiters to match first (ATS + scan). */
  targetRoles: string[];
  /** Bullets describing what the PDF resume emphasizes. */
  resumeHighlights: string[];
  proofMetric: string;
  openTo: string;
  locationLine: string;
  resumePath: string;
  resumeFileName: string;
  email: string;
  emailSubject: string;
  githubUrl: string;
  linkedinUrl: string;
  stackChips: string[];
};

export type Service = {
  title: string;
  summary: string;
  outcomes: string[];
  deliverables: string[];
  keywords: string[];
};

export type CapabilityGroup = {
  id: string;
  eyebrow: string;
  headline: string;
  outcomes: string[];
};
