export const toKebabCase = (str) => {
  return str
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .replace(/\s+/g, "-")
    .toLowerCase();
};

export const formatCurrency = (num) => {
  return `₹ ${num.toLocaleString("en-IN")}`;
};
