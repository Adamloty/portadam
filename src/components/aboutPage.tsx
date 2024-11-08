'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import styles from './AboutMe.module.css';

const AboutMe: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className={styles.aboutMe}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src="/011.png"
            alt="About Me"
            width={500}
            height={508}
            layout="responsive"
          />
        </div>
        <div className={styles.contentContainer}>
          <h2 className={styles.subtitle}>About Me</h2>
          <h1 className={styles.heading}>I'm Creative Web Developer</h1>
          <p className={styles.description}>
            <i>Sed pretium arcu rhoncus risus aliquet, at scelerisque diam commodo. Nam nec egestas ante. Duis pulvinar tincidunt sem et aliquam. Vivamus ut vehicula erat. Duis hendrerit velit non malesuada posuere.</i>
          </p>
          
          <div ref={ref} className={styles.countersContainer}>
            <Counter number={100} title="PROJECTS DONE" inView={inView} />
            <Counter number={110} title="Total Buyer" inView={inView} />
            <Counter number={200} title="Buyer Review" inView={inView} />
          </div>
          
          <div className={styles.ctaContainer}>
            <button className={styles.hireButton}>Hire me</button>
            <div className={styles.socialIconsWrapper}>
              <SocialIcon href="#" name="Dribbble" />
              <SocialIcon href="#" name="Whatsapp" />
              <SocialIcon href="#" name="Pinterest" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


interface CounterProps {
  number: number;
  title: string;
  inView: boolean;
}

const Counter: React.FC<CounterProps> = ({ number, title, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const interval = 50;
      const increment = (number / (duration / interval));
      const timer = setInterval(() => {
        start += increment;
        if (start > number) {
          setCount(number);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, interval);
      return () => clearInterval(timer);
    }
  }, [inView, number]);

  return (
    <div className={styles.counterWrapper}>
      <div className={styles.counterNumber}>
        <span>{count}</span>
        <span>+</span>
      </div>
      <div className={styles.counterTitle}>{title}</div>
    </div>
  );
};

const SocialIcon: React.FC<{ href: string; name: string }> = ({ href, name }) => (
  <a href={href} className={styles.socialIcon}>
    <span className={styles.srOnly}>{name}</span>
  </a>
);

export default AboutMe;
