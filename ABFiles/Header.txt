'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import styles from './Header.module.css';

const Header: React.FC = () => {
 return (
  <motion.header 
    className={styles.header}
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    transition={{ type: 'spring', stiffness: 120, damping: 20 }}
  >
   <div className={styles.container}>
    <div className={styles.logoContainer}>
     <h2 className={styles.logo}>Adam_dev</h2>
    </div>
    <nav className={styles.nav}>
     <ul className={styles.navList}>
      <li className={styles.navItem}>
       <Link href="/" className={styles.navLink}>Home</Link>
      </li>
      <li className={styles.navItem}>
       <Link href="/about" className={styles.navLink}>About</Link>
      </li>
      <li className={styles.navItem}>
       <Link href="/#services" className={styles.navLink}>Services</Link>
      </li>
      <li className={styles.navItem}>
       <Link href="/#portfolio" className={styles.navLink}>Portfolio</Link>
      </li>
      <li className={styles.navItem}>
       <Link href="/#contact" className={styles.navLink}>Contact</Link>
      </li>
      <li className={styles.navItem}>
       <Link href="/#blog" className={styles.navLink}>Blog</Link>
      </li>
     </ul>
    </nav>
   </div>
  </motion.header>
 );
};

export default Header;