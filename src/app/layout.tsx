import type { Metadata, Viewport } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { StructuredData } from "@/components/shared/StructuredData";
import { siteConfig } from "@/lib/data";
import { SITE_URL } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const ogDescription =
  "Full Stack Engineer & Frontend Architect — I build production-ready web applications from scalable Node.js/Python backends to premium, high-performance Next.js frontends. Available for full-time roles and freelance.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: `${siteConfig.name} — Full Stack Engineer & Frontend Architect`,
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
    title: `${siteConfig.name} — Full Stack Engineer & Frontend Architect`,
    description: ogDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Full Stack Engineer & Frontend Architect`,
    description: ogDescription,
    creator: "@vamsi_krishna15",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`h-full antialiased ${inter.variable} ${outfit.variable}`} data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col overflow-x-hidden">
        <a href="#main-content" className="skip-to-content focus-ring">
          Skip to content
        </a>
        <StructuredData />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
