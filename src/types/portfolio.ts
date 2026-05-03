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
  oneLiner: string;
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

