const breakpoint = (device) => `@media (max-width:${device})`;

const device = {
  sm: "576px",
  md: "768px",
  lg: "992px",
};

export { breakpoint, device };