import type { Metadata, Viewport } from "next";
import { Fraunces, Inter_Tight, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteConfig } from "@/lib/data";
import { SITE_URL } from "@/lib/constants";
import { ScrollProgress } from "@/components/shared/ScrollProgress";
import { FloatingCTA } from "@/components/shared/FloatingCTA";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const sans = Inter_Tight({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const ogDescription =
  "Full Stack Engineer — I architect and ship robust production systems, from complex data layers and REST APIs (Python, FastAPI, Postgres) to high-performance Next.js frontends.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${siteConfig.name} — Full Stack Engineer`,
  description: ogDescription,
  keywords: [
    "Hire Next.js Developer India",
    "Freelance Full Stack Engineer",
    "Frontend Architect",
    "React Developer",
    "Full Stack Developer",
    "Backend Developer",
    "API Development",
    "Python",
    "Frontend Developer",
    "Next.js",
    "App Router",
    "TypeScript",
    "React",
    "JavaScript",
    "Tailwind CSS",
    "FastAPI",
    "Django REST Framework",
    "REST API",
    "PostgreSQL",
    "Supabase",
    "Redis",
    "Razorpay",
    "Core Web Vitals",
    "SEO",
    "Accessibility",
    "UI/UX",
    "Responsive Design",
    "Component Architecture",
    "Clean Code",
    "Git",
    "GitHub",
    "Deployment",
    "Vercel",
    "Web Applications",
    "Landing Pages",
    "Dashboard UI",
    "SaaS UI",
    "Client Websites",
    "React Server Components",
  ],
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: `${siteConfig.name} — Full Stack Engineer (APIs, Postgres & Next.js)`,
    description: ogDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Full Stack Engineer (APIs, Postgres & Next.js)`,
    description: ogDescription,
    creator: "@vamsi_krishna15",
  },
  verification: {
    google: "QezjcHzQW4aBzue9j-sH9G_bKJetF6bvyfAJKWrhBrw",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const fontVars = `${display.variable} ${sans.variable} ${mono.variable}`;
  return (
    <html lang="en" className={`h-full antialiased ${fontVars}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col overflow-x-hidden bg-[var(--background)] text-[var(--foreground)]">
        <a href="#main-content" className="skip-to-content focus-ring">
          Skip to content
        </a>
        <StructuredData />
        <ThemeProvider>
          <ScrollProgress />
          {children}
          <FloatingCTA />
        </ThemeProvider>
      </body>
    </html>
  );
}
