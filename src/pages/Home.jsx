import React from 'react';
import HeroSection from '../components/HeroSection';
import Services from '../components/Services';
import Gallery from '../components/Gallery';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import PriceList from '../components/PriceList';

const Home = () => (
  <>
    <HeroSection />
    <Services />
    <Gallery />
    <PriceList/>
    <ContactForm />
    <Footer />
  </>
);

export default Home;
