export const easeCurve: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const revealUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-10% 0px" },
};

export const revealTransition = {
  duration: 0.7,
  ease: easeCurve,
};
