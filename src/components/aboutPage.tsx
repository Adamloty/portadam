import React from 'react';
import Image from 'next/image';
import { FaDribbble, FaWhatsapp, FaPinterest } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import styles from './AboutMe.module.css';

const AboutMe: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <section className={styles.aboutSection}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image 
            src="/images/about-image.png" 
            alt="About Me" 
            width={600} 
            height={610} 
            style={{width: '100%', height: 'auto'}}
          />
        </div>
        <div className={styles.contentContainer}>
          <h2 className={styles.aboutTitle}>About Me</h2>
          <h3 className={styles.aboutSubtitle}>I'm Creative Web Developer</h3>
          <p className={styles.aboutDescription}>
            Sed pretium arcu rhoncus risus aliquet, at scelerisque diam commodo. Nam nec egestas ante. Duis pulvinar tincidunt sem et aliquam. Vivamus ut vehicula erat. Duis hendrerit velit non malesuada posuere.
          </p>
          
          <div ref={ref} className={styles.statsContainer}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{inView ? '100+' : '0'}</div>
              <p className={styles.statLabel}>PROJECTS DONE</p>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{inView ? '110+' : '0'}</div>
              <p className={styles.statLabel}>Total Buyer</p>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>{inView ? '200+' : '0'}</div>
              <p className={styles.statLabel}>Buyer Review</p>
            </div>
          </div>

          <div className={styles.ctaContainer}>
            <button className={styles.hireButton}>Hire me</button>
            <div className={styles.socialIcons}>
              <a href="#" className={styles.socialIcon}><FaDribbble /></a>
              <a href="#" className={styles.socialIcon}><FaWhatsapp /></a>
              <a href="#" className={styles.socialIcon}><FaPinterest /></a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
