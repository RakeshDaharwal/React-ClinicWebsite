import React from 'react';
import Hero from './Hero/Hero';
import Support from "./Support/Support";
import Service from "./Service/Service";
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Home = () => {
  return (
    <>
    <Hero/>
    <Support/>
    <Service/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default Home;
