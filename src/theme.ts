export const setTheme = (theme: "light" | "dark") => {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
};

export const getPreferredTheme = (): "light" | "dark" => {
  const local = localStorage.getItem("theme");
  if (local === "light" || local === "dark") return local;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
};