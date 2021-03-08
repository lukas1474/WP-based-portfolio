import React from 'react';
import styles from './Header.module.scss';

const Header = () => (
  <header className={styles.header}>
    <p>PORTFOLIO</p>
    <a
      className={styles.link}
      href='https://www.duraj-wnetrza.pl/'
      target='_blank'
      rel='noopener noreferrer'
    >
      Strona główna
    </a>
  </header>
);

export default Header;
