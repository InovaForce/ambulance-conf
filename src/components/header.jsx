import Link from 'next/link';
import React from 'react';


const Header = () => {
  return (
    <header>
      <h1>Cretae your own Ambulance</h1>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/configurator">Configurator</Link></li>
          <li><Link href="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
