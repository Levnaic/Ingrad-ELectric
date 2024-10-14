import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.headerBody}>
      <ul className={styles.headerListContainer}>
        <li className={styles.hederListElement}>
          <a href="/">Pocetna</a>
        </li>
        <li className={styles.hederListElement}>
          <a href="/o_nama">O nama</a>
        </li>
        <li className={styles.hederListElement}>
          <a href="/usluge">Usluge</a>
        </li>
        <li className={styles.hederListElement}>
          <a href="/proizvodi">Proizvodi</a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
