/** Shared primary navigation — section anchors resolve on home (`/#id`). */
export const sectionAnchorLinks = [
  { href: "/#skills", label: "Skills" },
  { href: "/#services", label: "Services" },
  { href: "/#projects", label: "Featured" },
] as const;

export const pageNavLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;
