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
     <h2 className={styles.logo}>Rxcreative</h2>
    </div>
    <nav className={styles.nav}>
     <ul className={`${styles.navList} ${styles.poppins}`}>
      <li className={styles.navItem}>
       <Link href="/" className={styles.navLink}>HOME</Link>
      </li>
      <li className={styles.navItem}>
       <Link href="/about" className={styles.navLink}>ABOUT</Link>
      </li>
      <li className={styles.navItem}>
       <Link href="/services" className={styles.navLink}>SERVICES</Link>
      </li>
      <li className={styles.navItem}>
       <Link href="/portfolio" className={styles.navLink}>PORTFOLIO</Link>
      </li>
      <li className={styles.navItem}>
       <Link href="/contact" className={styles.navLink}>CONTACT</Link>
      </li>
      <li className={styles.navItem}>
       <Link href="/blog" className={styles.navLink}>BLOG</Link>
      </li>
     </ul>
    </nav>
   </div>
  </motion.header>
 );
};

export default Header;