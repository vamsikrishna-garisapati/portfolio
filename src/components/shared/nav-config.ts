/** Shared primary navigation — section anchors resolve on home (`/#id`). */
export const sectionAnchorLinks = [
  { href: "/#work", label: "Work" },
  { href: "/#services", label: "Services" },
  { href: "/#stack", label: "Stack" },
  { href: "/#experience", label: "Experience" },
  { href: "/#contact", label: "Contact" },
] as const;

export const pageNavLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
] as const;
