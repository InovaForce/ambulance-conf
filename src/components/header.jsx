import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/components/header.module.scss';
import { Nav } from 'react-bootstrap';
import ChooseLanguage from './ChooseLanguage';

const Header = ({ lang }) => {
  const Language = {
    es: "Español",
    en: "English",
    fr: "Français",
    ar: "العربية",
    ru: "Русский",
  };

  const Home = {
    es: "Inicio",
    en: "Home",
    fr: "Accueil",
    ar: "الرئيسية",
    ru: "Главная",
  };

  const Configurator = {
    es: "Configurador",
    en: "Configurator",
    fr: "Configurateur",
    ar: "الضبط",
    ru: "Конфигуратор",
  };

  const Contact = {
    es: "Contacto",
    en: "Contact",
    fr: "Contact",
    ar: "اتصال",
    ru: "Контакт",
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/ıcu.png" alt="logo" width={120} height={40} />
      </div>
      <Nav className={styles.nav}>
        <ul className={styles.nav_link}>
          <li>
            <Link href="/">{Language[lang]}</Link>
          </li>
          <li>
            <Link href={`${lang}`}>{Home[lang]}</Link>
          </li>
          <li>
            <Link href={`${lang}/configuration`}>{Configurator[lang]}</Link>
          </li>
          <li>
            <Link href={`${lang}/contact`}>{Contact[lang]}</Link>
          </li>
        </ul>
      </Nav>
      <div className={styles.languageSelector}>
        <ChooseLanguage />
      </div>
    </header>
  );
};

export default Header;

/* import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/components/header.module.scss';
import { Nav } from 'react-bootstrap';

const Header = ({lang}) => {
  const Language = {
    es: "Español",
    en: "English",
    fr: "Français",
    ar: "العربية",
    ru: "Русский",
  };

  const Home = {
    es: "Inicio",
    en: "Home",
    fr: "Accueil",
    ar: "الرئيسية",
    ru: "Главная",
  };

  const Configurator = {
    es: "Configurador",
    en: "Configurator",
    fr: "Configurateur",
    ar: "الضبط",
    ru: "Конфигуратор",
  };

  const Contact = {
    es: "Contacto",
    en: "Contact",
    fr: "Contact",
    ar: "اتصال",
    ru: "Контакт",
  };

  



  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/ıcu.png" alt="logo" width={120} height={40} />
      </div>
      <Nav className={styles.nav}>
        <ul className={styles.nav_link}>
          <li>
            <Link href="/">{Language[lang]}</Link>
          </li>
          <li>
            <Link href={`${lang}`}>{Home[lang]}</Link>
          </li>
          <li>
            <Link href={`${lang}/configuration`}>{Configurator[lang]}</Link>
          </li>
          <li>
            <Link href={`${lang}/contact`}>{Contact[lang]}</Link>
          </li>
        </ul>
      </Nav>
    </header>
  );
};

export default Header; */