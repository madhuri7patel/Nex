export const getLocalStorageData = async () => {
  const data = JSON.parse(localStorage.getItem("data"));

  if (data && Array.isArray(data)) {
    return data;
  } else {
    const response = await fetch("./staticData.json");
    const staticData = await response.json();

    if (staticData && staticData.data && Array.isArray(staticData.data)) {
      localStorage.setItem("data", JSON.stringify(staticData.data));
      return staticData.data;
    }
    return [];
  }
};

export const setLocalStorageData = (data) => {
  localStorage.setItem("data", JSON.stringify(data));
};
