import type { Metadata, Viewport } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/shared/ThemeProvider";
import { siteConfig } from "@/lib/data";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const ogDescription =
  "Full Stack Developer — Next.js App Router, TypeScript, APIs, Postgres/Supabase, Redis. Shipped MockArch (mockarch.in) and ProHire Networks (prohirenetworks.com).";

export const metadata: Metadata = {
  metadataBase: new URL("https://vamsikrishna-garisapati.vercel.app"),
  title: `${siteConfig.name} — Full Stack Developer`,
  description: ogDescription,
  keywords: [
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js",
    "App Router",
    "TypeScript",
    "React",
    "FastAPI",
    "Django REST Framework",
    "PostgreSQL",
    "Supabase",
    "Redis",
    "Razorpay",
    "Core Web Vitals",
    "SEO",
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
    title: `${siteConfig.name} — Full Stack Developer`,
    description: ogDescription,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — Full Stack Developer`,
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
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body className="flex min-h-dvh flex-col overflow-x-hidden">
        <a href="#main-content" className="skip-to-content focus-ring">
          Skip to content
        </a>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
