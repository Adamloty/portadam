import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutMe from '@/components/About';

export const metadata = {
  title: 'About - Your Site Name',
  description: 'Learn more about us and our services',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutMe />
      </main>
      <Footer />
    </>
  );
}
