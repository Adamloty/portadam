import React from 'react';
import Image from 'next/image';
import styles from './Portfolio.module.css';

const Portfolio: React.FC = () => {
  const portfolioItems = [
    { src: 'https://exwpcoder.com/rxcreative/wp-content/uploads/2023/11/1.jpg', alt: 'Portfolio item 1' },
    { src: 'https://exwpcoder.com/rxcreative/wp-content/uploads/2023/11/2.jpg', alt: 'Portfolio item 2' },
    { src: 'https://exwpcoder.com/rxcreative/wp-content/uploads/2023/11/91.png', alt: 'Portfolio item 3' },
    { src: 'https://exwpcoder.com/rxcreative/wp-content/uploads/2023/11/94.png', alt: 'Portfolio item 4' },
    { src: 'https://exwpcoder.com/rxcreative/wp-content/uploads/2023/11/34.png', alt: 'Portfolio item 5' },
    { src: 'https://exwpcoder.com/rxcreative/wp-content/uploads/2023/11/werw.png', alt: 'Portfolio item 6' },
    { src: 'https://exwpcoder.com/rxcreative/wp-content/uploads/2023/11/94-1.png', alt: 'Portfolio item 7' },
    { src: 'https://exwpcoder.com/rxcreative/wp-content/uploads/2023/11/werw-1.png', alt: 'Portfolio item 8' },
  ];

  return (
    <div className={styles.portfolio}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.header}>
            <h2 className={styles.subtitle}>Portfolio</h2>
            <h1 className={styles.title}>Our Featured Works</h1>
          </div>
          <div className={styles.gallery}>
            {portfolioItems.map((item, index) => (
              <figure key={index} className={styles.galleryItem}>
                <div className={styles.imageWrapper}>
                  <a href={item.src}>
                    <Image src={item.src} alt={item.alt} width={640} height={427} layout="responsive" />
                  </a>
                </div>
              </figure>
            ))}
          </div>
          <div className={styles.viewMore}>
            <a href="#" className={styles.viewMoreButton}>
              <span>View More</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
