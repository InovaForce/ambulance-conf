"use client"
import React from "react";
import Link from "next/link";

const languages = [
  { code: "en", name: "English", flag: "/images/flags/gb.png" },
  { code: "es", name: "Español", flag: "/images/flags/es.png" },
  { code: "fr", name: "Français", flag: "/images/flags/fr.png" },
  { code: "ru", name: "Русский", flag: "/images/flags/ru.png" },
  { code: "ar", name: "العربية", flag: "/images/flags/sa.png" },
];

const ChooseLanguage = () => {
  

  return (
    <div >
      <h1>Please select your language</h1>
      <div >
        {languages.map((lang) => (
          <Link href={`/${lang.code}`} key={lang.code}>
            <img width={160} height={100} src={lang.flag} alt={lang.name}  />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ChooseLanguage;
