'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import styles from './AboutMe.module.css';
import Header from './Header';

const AboutMe: React.FC = () => {
 const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
 });

 return (<>  <Header />
  <div className={styles.aboutMe}>
   <div className={styles.imageContainer}>
    <div className={styles.imageWrapper}>
     <Image
      src="/011.png"
      alt="About Me"
      width={600}
      height={610}
     />
    </div>
   </div>
   <div className={styles.contentContainer}>
    <div className={styles.content}>
     <div className={styles.titleWrapper}>
      <h2 className={styles.subtitle}>About Me</h2>
     </div>
     <div className={styles.headingWrapper}>
      <h1 className={styles.heading}>I'm Creative Web Developer</h1>
     </div>
     <div className={styles.descriptionWrapper}>
      <p className={styles.description}>
       <i>Sed pretium arcu rhoncus risus aliquet, at scelerisque diam commodo. Nam nec egestas ante. Duis pulvinar tincidunt sem et aliquam. Vivamus ut vehicula erat. Duis hendrerit velit non malesuada posuere.</i>
      </p>
     </div>
     <section ref={ref} className={styles.countersSection}>
      <div className={styles.countersContainer}>
       <Counter number={100} title="PROJECTS DONE" inView={inView} />
       <Counter number={110} title="Total Buyer" inView={inView} />
       <Counter number={200} title="Buyer Review" inView={inView} />
      </div>
     </section>
     <div className={styles.spacer}></div>
     <section className={styles.ctaSection}>
      <div className={styles.ctaContainer}>
       <div className={styles.hireButtonWrapper}>
        <a href="#" className={styles.hireButton}>
         <span><span>Hire me</span></span>
        </a>
       </div>
       <div className={styles.socialIconsWrapper}>
        <SocialIcon href="#" name="Dribbble" />
        <SocialIcon href="#" name="Whatsapp" />
        <SocialIcon href="#" name="Pinterest" />
       </div>
      </div>
     </section>
    </div>
   </div>
  </div></>

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
     const duration = 2000; // 1 seconds
     const interval = 50; // Update every 50ms
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
   <div className={styles.counterInner}>
    <div className={styles.counterNumber}>
     <span>{count}</span>
     <span>+</span>
    </div>
    <div className={styles.counterTitle}>{title}</div>
   </div>
  </div>
 );
};

const SocialIcon: React.FC<{ href: string; name: string }> = ({ href, name }) => (
 <span className={styles.socialIconWrapper}>
  <a href={href} className={styles.socialLink}>
   <span className={styles.srOnly}>{name}</span>
  </a>
 </span>
);

export default AboutMe;
