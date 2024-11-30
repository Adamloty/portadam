import React from "react";
import dynamic from "next/dynamic";

// import Header from '@/components/Header'

import Hero from "@/components/Hero";
// import About from '@/components/AboutMe'
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Blogme from "@/components/Blogme";
import Contact from "@/components/Contact";
// import Footer from '@/components/Footer'
import "@/app/main.css";
import AboutMe from "@/components/AboutMe";
// import Header from '@/components/Header';

const FloatingButton = dynamic(() => import("../components/FloatingButton"), {
	ssr: false,
});

export default function Home() {
	return (
		<>
			{/* <Header /> */}
			<main>
				<FloatingButton />
				<section id="home">
					<Hero />
				</section>
				<section id="aboutMe">
					<AboutMe />
				</section>
				<section id="services">
					<Services />
				</section>
				<section id="portfolio">
					<Portfolio />
				</section>
				<section id="blogme">
					<Blogme />
				</section>
				<section id="contact">
					<Contact />
				</section>
			</main>
		</>
	);
}
