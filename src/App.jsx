import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div className="h-screen w-full flex items-center flex-col gap-2">
      <Header />
      <Hero />
      <Carousel id="memories" />
      <Footer />
    </div>
  );
}

export default App;
