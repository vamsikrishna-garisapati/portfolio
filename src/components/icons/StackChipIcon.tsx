import type { LucideIcon } from "lucide-react";
import {
  Accessibility,
  Atom,
  Binary,
  Bolt,
  Boxes,
  Bot,
  Brackets,
  Cloud,
  CodeXml,
  Container,
  CreditCard,
  Database,
  FileCode2,
  FileJson,
  Gauge,
  GitBranch,
  HardDrive,
  LayoutTemplate,
  Layers,
  Palette,
  Plug,
  Search,
  Send,
  Server,
  Shield,
  Smartphone,
  Sparkles,
  Triangle,
  Wind,
  Workflow,
  Zap,
} from "lucide-react";
import { IconGithub } from "@/components/icons/BrandIcons";

const chipCls = "h-3.5 w-3.5 shrink-0 text-muted";

type StackIconKind =
  | "github"
  | "react"
  | "typescript"
  | "javascript"
  | "nextjs"
  | "fastapi"
  | "python"
  | "django"
  | "supabase"
  | "postgres"
  | "tailwind"
  | "tanstack"
  | "zustand"
  | "gemini"
  | "ai"
  | "razorpay"
  | "redis"
  | "docker"
  | "git"
  | "vercel"
  | "cloudflare"
  | "html"
  | "css"
  | "cicd"
  | "postman"
  | "api"
  | "auth"
  | "payment"
  | "seo"
  | "vitals"
  | "responsive"
  | "a11y"
  | "generic";

function stackIconKind(label: string): StackIconKind {
  const raw = label.toLowerCase();
  const n = raw.split("(")[0].trim();

  if (n.includes("github")) return "github";
  if (n.includes("react")) return "react";
  if (n.includes("typescript")) return "typescript";
  if (n.includes("javascript")) return "javascript";
  if (n.includes("next.js") || n.startsWith("next")) return "nextjs";
  if (n.includes("fastapi")) return "fastapi";
  if (n.includes("python")) return "python";
  if (n.includes("django")) return "django";
  if (n.includes("supabase")) return "supabase";
  if (n.includes("postgres") || n === "sql") return "postgres";
  if (n.includes("tailwind")) return "tailwind";
  if (n.includes("tanstack")) return "tanstack";
  if (n.includes("zustand")) return "zustand";
  if (n.includes("gemini")) return "gemini";
  if (n.includes("razorpay")) return "razorpay";
  if (n.includes("redis")) return "redis";
  if (n.includes("docker")) return "docker";
  if (n.includes("git")) return "git";
  if (n.includes("vercel")) return "vercel";
  if (n.includes("cloudflare")) return "cloudflare";
  if (n.includes("html")) return "html";
  if (n.includes("css")) return "css";
  if (n.includes("ci/cd") || n.includes("ci cd")) return "cicd";
  if (n.includes("postman")) return "postman";
  if (n.includes("rest api") || n.includes("api integration")) return "api";
  if (n.includes("rbac") || n.includes("auth")) return "auth";
  if (n.includes("payment")) return "payment";
  if (n.includes("ai")) return "ai";
  if (n.includes("seo")) return "seo";
  if (n.includes("web vitals") || n.includes("lighthouse")) return "vitals";
  if (n.includes("responsive")) return "responsive";
  if (n.includes("accessible") || n.includes("aria")) return "a11y";
  return "generic";
}

const LUCIDE_BY_KIND: Record<Exclude<StackIconKind, "github">, LucideIcon> = {
  react: Atom,
  typescript: FileCode2,
  javascript: FileJson,
  nextjs: LayoutTemplate,
  fastapi: Bolt,
  python: Binary,
  django: Server,
  supabase: Zap,
  postgres: Database,
  tailwind: Wind,
  tanstack: Layers,
  zustand: Boxes,
  gemini: Sparkles,
  ai: Bot,
  razorpay: CreditCard,
  redis: HardDrive,
  docker: Container,
  git: GitBranch,
  vercel: Triangle,
  cloudflare: Cloud,
  html: CodeXml,
  css: Palette,
  cicd: Workflow,
  postman: Send,
  api: Plug,
  auth: Shield,
  payment: CreditCard,
  seo: Search,
  vitals: Gauge,
  responsive: Smartphone,
  a11y: Accessibility,
  generic: Brackets,
};

export function StackChipIcon({ label }: { label: string }) {
  const kind = stackIconKind(label);
  if (kind === "github") {
    return <IconGithub className={chipCls} aria-hidden />;
  }
  const Icon = LUCIDE_BY_KIND[kind];
  return <Icon className={chipCls} strokeWidth={1.5} aria-hidden />;
}
