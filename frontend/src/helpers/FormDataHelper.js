import { PROJECT_ITEM } from "../constants/app";

export const getFormData = (event, fields) => {
  let data = {};
  const formData = new FormData(event.currentTarget);

  fields.forEach((item) => {
    data = { ...data, [item]: formData.get(item) };
  });

  return data;
};

export const collectFormData = (arr, moduleName, key, value = "") => {
  return arr.map((item) => {
    if (item.name === moduleName && key === "languageId") {
      return { ...item, [key]: value, frameworkId: "" };
    } else if (item.name === moduleName && value === false) {
      return { ...PROJECT_ITEM, name: moduleName };
    } else if (item.name === moduleName) {
      return { ...item, [key]: value };
    } else {
      return item;
    }
  });
};
