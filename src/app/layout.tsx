import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export const metadata: Metadata = {
  // TODO: update metadataBase to your final deployed URL before going live
  metadataBase: new URL("https://vamsikrishna-garisapati.vercel.app"),
  title: "Vamsi Krishna - Full Stack Software Engineer",
  description:
    "Premium developer portfolio of Vamsi Krishna Garisapati featuring full stack systems, product engineering, and production impact.",
  alternates: {
    canonical: "/",
  },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "/",
    title: "Vamsi Krishna - Full Stack Software Engineer",
    description:
      "Premium developer portfolio of Vamsi Krishna Garisapati featuring full stack systems, product engineering, and production impact.",
    siteName: "Vamsi Krishna",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vamsi Krishna - Full Stack Software Engineer",
    description:
      "Premium developer portfolio of Vamsi Krishna Garisapati featuring full stack systems, product engineering, and production impact.",
    creator: "@vamsi_krishna15",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="flex min-h-dvh flex-col overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
