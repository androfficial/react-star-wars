export const getLocalStorage = (key) => {
  const data = localStorage.getItem(key);

  if (data) {
    return JSON.parse(data);
  }

  return {
    items: [],
  };
};

export const setLocalStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};
