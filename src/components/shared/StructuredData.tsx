import { siteConfig, skills } from "@/lib/data";
import { SITE_URL } from "@/lib/constants";
import Script from "next/script";

export function StructuredData() {
  const skillKeywords = Array.from(new Set(Object.values(skills).flat()));

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: siteConfig.name,
    email: siteConfig.email,
    url: SITE_URL,
    sameAs: [siteConfig.githubUrl, siteConfig.linkedinUrl],
    jobTitle: siteConfig.targetRoles.join(" · "),
    knowsAbout: skillKeywords,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Hyderabad",
      addressCountry: "IN",
    },
  };

  return (
    <Script
      id="structured-data-person"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
