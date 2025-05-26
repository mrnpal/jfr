import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Gallery from '../components/Gallery';

import Footer from '../components/Footer';
import PriceList from '../components/PriceList';

const Home = () => (
  <>
    <HeroSection />
    <Services />
    <Gallery />
    <PriceList/>
    <Footer />
  </>
);

export default Home;
