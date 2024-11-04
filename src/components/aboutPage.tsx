import Head from 'next/head';
import Image from 'next/image';
import { FaDribbble, FaWhatsapp, FaPinterest } from 'react-icons/fa';
import styles from './AboutMe.module.css';

export default function About() {
  return (
    <>
      <Head>
        <title>About - Rxcreative</title>
        <meta name="description" content="About Rxcreative" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <section className={styles.heroSection}>
          <div className={styles.container}>
            <h1 className={styles.heroTitle}>About</h1>
          </div>
        </section>

        <section className={styles.aboutContent}>
          <div className={styles.container}>
            <div className={styles.imageContainer}>
              <Image src="/images/about-image.png" alt="About Me" width={600} height={610} />
            </div>
            <div className={styles.contentContainer}>
              <h2 className={styles.aboutTitle}>About Me</h2>
              <h3 className={styles.aboutSubtitle}>I'm Creative Web Developer</h3>
              <p className={styles.aboutDescription}>
                Sed pretium arcu rhoncus risus aliquet, at scelerisque diam commodo. Nam nec egestas ante. Duis pulvinar tincidunt sem et aliquam. Vivamus ut vehicula erat. Duis hendrerit velit non malesuada posuere.
              </p>
              
              <div className={styles.statsContainer}>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>100+</div>
                  <p className={styles.statLabel}>PROJECTS DONE</p>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>110+</div>
                  <p className={styles.statLabel}>Total Buyer</p>
                </div>
                <div className={styles.statItem}>
                  <div className={styles.statNumber}>200+</div>
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
      </main>
    </>
  );
}
