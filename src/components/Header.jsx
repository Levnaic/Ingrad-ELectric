import React from "react";
import styles from "../styles/Header.module.css";

function Header() {
  return (
    <header className={styles.headerBody}>
      <ul className={styles.headerListContainer}>
        <li className={styles.hederListElement}>Pocetna</li>
        <li className={styles.hederListElement}>O nama</li>
        <li className={styles.hederListElement}>Usluge</li>
        <li className={styles.hederListElement}>Proizvodi</li>
      </ul>
    </header>
  );
}

export default Header;
