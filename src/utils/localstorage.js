export const storageGet = (key) => {
  if (typeof window === "undefined") {
    return null;
  }

  const item = window.localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
};

export const storageSet = (key, value) => {
  if (typeof window === "undefined") {
    return null;
  }

  localStorage.setItem(key, JSON.stringify(value));
};

export const storageRemove = (key) => {
  if (typeof window === "undefined") {
    return null;
  }

  localStorage.removeItem(key);
};
