import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AboutMeComponent from '@/components/About';

export const metadata = {
  title: 'About - Your Site Name',
  description: 'Learn more about us and our services',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <AboutMeComponent 
          // You can pass props here if your AboutMe component accepts them
          // For example: title="About Our Company" 
        />
      </main>
      <Footer />
    </>
  );
}
