export const setStorage = (key, value) => {
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const getStorage = (key) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedItems = window.localStorage.getItem(key);

  return storedItems
    ? Object.keys(JSON.parse(storedItems)).length
      ? JSON.parse(storedItems)
      : []
    : [];
};

export const removeStorage = (key) => {
  if (typeof window === 'undefined') {
    return null;
  }
  window.localStorage.removeItem(key);
};

export const setSStorage = (key, value) => {
  window.sessionStorage.setItem(key, JSON.stringify(value));
};

export const getSStorage = (key) => {
  if (typeof window === 'undefined') {
    return null;
  }

  const storedItems = window.sessionStorage.getItem(key);

  return storedItems ? JSON.parse(storedItems) : [];
};

export const removeSStorage = (key) => {
  if (typeof window === 'undefined') {
    return null;
  }
  window.sessionStorage.removeItem(key);
};
