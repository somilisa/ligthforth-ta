import { useState } from "react";
import styles from "./styles.module.scss";
import logo from "/public/assets/logo.svg";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logoContainer}>
          <img src={logo} alt="ExcelMind Logo" className={styles.logo} />
          <span className={styles.brand}>
            Excel<span>Mind</span>
          </span>
        </div>

        <nav className={`${styles.nav} ${menuOpen ? styles.active : ""}`}>
          <ul>
            <li>
              <a href="#" className={styles.active}>
                Home
              </a>
            </li>
            <li>
              <a href="#">About us</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
            <li>
              <a href="#">For schools</a>
            </li>
          </ul>
        </nav>

        <div className={styles.actions}>
          <a href="#" className={styles.ambassador}>
            Become Ambassador
          </a>
          <button className={styles.getStarted}>Get Started</button>
        </div>

        <div className={styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
};

export default Header;
