/* import "server-only"; */

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  es: () => import("../dictionaries/es.json").then((module) => module.default),
  fr: () => import("../dictionaries/fr.json").then((module) => module.default),
  ru: () => import("../dictionaries/ru.json").then((module) => module.default),
  ar: () => import("../dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale = "en") => {
  const loadDictionary = dictionaries[locale] || dictionaries["en"];
  try {
    return await loadDictionary();
  } catch (error) {
    console.error(`Error loading dictionary for locale "${locale}":`, error);
    return dictionaries["en"](); // Varsayılan olarak İngilizce sözlüğü döndür
  }
};






/* import "server-only";

const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  es: () => import("../dictionaries/es.json").then((module) => module.default),
  fr: () => import("../dictionaries/fr.json").then((module) => module.default),
  ru: () => import("../dictionaries/ru.json").then((module) => module.default),
  ar: () => import("../dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale = "en") => {
  const loadDictionary = dictionaries[locale] || dictionaries["en"];
  return loadDictionary();
};
 */