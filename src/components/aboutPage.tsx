'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useInView } from 'react-intersection-observer';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Separator } from './ui/separator';
import styles from './AboutMe.module.css';

// Simple icon components
const DribbbleIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M8.56 2.75c4.37 6.03 6.02 9.42 8.03 17.72m2.54-15.38c-3.72 4.35-8.94 5.66-16.88 5.85m19.5 1.9c-3.5-.93-6.63-.82-8.94 0-2.58.92-5.01 2.86-7.44 6.32"></path>
  </svg>
);

const WhatsappIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const PinterestIcon = () => (
  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0z"></path>
    <path d="M12 2v2"></path>
    <path d="M12 20v2"></path>
    <path d="M20 12h2"></path>
    <path d="M2 12h2"></path>
  </svg>
);

const AboutMe: React.FC = () => {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true
  });

  return (
    <div className={`${styles.aboutMe} container mx-auto px-4 py-8`}>
      <h1 className="text-4xl font-bold text-center mb-8">About</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/011.png"
              alt="About Me"
              width={600}
              height={610}
              className="rounded-lg"
            />
          </div>
        </div>
        
        <div className={styles.contentContainer}>
          <div className={styles.content}>
            <h2 className={`${styles.subtitle} text-3xl font-semibold mb-4`}>About Me</h2>
            <h3 className={`${styles.heading} text-2xl font-bold mb-4`}>I'm Creative Web Developer</h3>
            <p className={`${styles.description} text-gray-600 mb-6`}>
              <i>Sed pretium arcu rhoncus risus aliquet, at scelerisque diam commodo. Nam nec egestas ante. Duis pulvinar tincidunt sem et aliquam. Vivamus ut vehicula erat. Duis hendrerit velit non malesuada posuere.</i>
            </p>
            
            <section ref={ref} className={`${styles.countersSection} grid grid-cols-3 gap-4 mb-8`}>
              <Counter number={100} title="PROJECTS DONE" inView={inView} />
              <Counter number={110} title="Total Buyer" inView={inView} />
              <Counter number={200} title="Buyer Review" inView={inView} />
            </section>
            
            <div className={styles.spacer}></div>
            
            <section className={`${styles.ctaSection} flex items-center space-x-4`}>
              <Button className={styles.hireButton}>Hire me</Button>
              <Separator orientation="vertical" className="h-8" />
              <div className={`${styles.socialIconsWrapper} flex space-x-2`}>
                <SocialIcon href="#" name="Dribbble" Icon={DribbbleIcon} />
                <SocialIcon href="#" name="Whatsapp" Icon={WhatsappIcon} />
                <SocialIcon href="#" name="Pinterest" Icon={PinterestIcon} />
              </div>
            </section>
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
      const duration = 2000; // 2 seconds
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
    <Card className={styles.counterWrapper}>
      <CardContent className={`${styles.counterInner} p-4 text-center`}>
        <div className={`${styles.counterNumber} text-3xl font-bold`}>
          <span>{count}</span>
          <span>+</span>
        </div>
        <div className={`${styles.counterTitle} text-sm text-gray-500`}>{title}</div>
      </CardContent>
    </Card>
  );
};

interface SocialIconProps {
  href: string;
  name: string;
  Icon: React.ElementType;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, name, Icon }) => (
  <Link href={href} className={`${styles.socialIconWrapper} text-gray-600 hover:text-gray-900`}>
    <Icon size={24} />
    <span className={styles.srOnly}>{name}</span>
  </Link>
);

export default AboutMe;
