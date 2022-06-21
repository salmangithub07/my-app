import React from 'react'
import Calltoaction from './components/Calltoaction';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import Recentposts from './components/Recentposts';
import Servicelist from './components/Servicelist';
import Whyus from './components/Whyus';



function Frontpage() {
  return (
<>
<Hero />
  <main id="main">
    <Whyus />
    <Servicelist />
    <Calltoaction />
    <Features />
    <Recentposts />
  </main>
  </>
  );
}

export default Frontpage