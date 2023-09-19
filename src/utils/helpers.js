export const toKebabCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

export const toTitleCase = (str) => {
  return str
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const formatCurrency = (num) => {
  return `₹ ${num.toLocaleString("en-IN")}`;
};
