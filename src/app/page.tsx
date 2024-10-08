import React from 'react';
import dynamic from 'next/dynamic';
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Services from '@/components/Services'
import Portfolio from '@/components/Portfolio'
import Blog from '@/components/Blog'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

const FloatingButton = dynamic(() => import('../components/FloatingButton'), {
 ssr: false,
});

export default function Home() {
 return (
 <>
  <Header />
  <main>
   <FloatingButton />
   <section id="home">
    <Hero />
   </section>
   <section id="about">
    <About />
   </section>
   <section id="services">
    <Services />
   </section>
   <section id="portfolio">
    <Portfolio />
   </section>
   <section id="blog">
    <Blog />
   </section>
   <section id="contact">
    <Contact />
   </section>
  </main>
  <Footer />
 </>
 )
}

