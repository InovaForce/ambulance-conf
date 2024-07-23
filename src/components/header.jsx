import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styles from '@/styles/components/header.module.scss';
import { Nav } from 'react-bootstrap';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src="/images/ıcu.png" alt="logo" width={120} height={40} />
      </div>
      <Nav className={styles.nav}>
        <ul className={styles.nav_link}>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/configuration">Configurator</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </Nav>
    </header>
  );
};

export default Header;