export const vh = (value = 100) => `calc(var(--vh, 1vh) * ${value})`;

export const vw = (value = 100) => `calc(var(--vw, 1vw) * ${value})`;

export const initViewportSize = () => {
  document.documentElement.style.setProperty(
    "--vh",
    `${window.innerHeight * 0.01}px`
  );
  document.documentElement.style.setProperty(
    "--vw",
    `${window.innerWidth * 0.01}px`
  );
};
