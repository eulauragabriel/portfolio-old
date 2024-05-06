import Link from 'next/link';
import { useState } from 'react';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.logoStrip}>
        <div className={styles.navbarBrand}>
          <Link href="/" passHref legacyBehavior>
            <div className={styles.navBrandLink}>
              <img src="/images/cupid.png" alt="" className={styles.sideImage} /> 
              <a>Laura's Portfolio</a> 
              <div className={styles.emptySpace}></div> 
            </div>
          </Link>
        </div>
      </div>
      <nav className={styles.navbar}>
      <div className={`${styles.hamburgerMenu} ${isOpen ? styles.active : ''}`} onClick={toggleMenu}>
        <div className={styles.hamburger}></div>
        <div className={styles.hamburger}></div>
        <div className={styles.hamburger}></div>
      </div>

      <div className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
        <ul className={styles.navList}>
          <li className={styles.navItem}>
            <Link href="/home" passHref legacyBehavior>
              <a className={styles.navLink}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/sobremim" passHref legacyBehavior>
              <a className={styles.navLink}>Sobre mim</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/hobbies" passHref legacyBehavior>
              <a className={styles.navLink}>Hobbies</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/projetos" passHref legacyBehavior>
              <a className={styles.navLink}>Projetos</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/tecnologias" passHref legacyBehavior>
              <a className={styles.navLink}>Tecnologias</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    </>
  );
};

export default Navbar;