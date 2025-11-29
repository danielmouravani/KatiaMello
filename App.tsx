import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Specialties from './components/Specialties';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import Gallery from './components/Gallery';
import Partners from './components/Partners';
import Footer from './components/Footer';
import CataractPage from './components/CataractPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'cataract'>('home');

  const navigateTo = (page: 'home' | 'cataract') => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar onNavigate={navigateTo} />
      <main className="flex-grow">
        {currentPage === 'home' ? (
          <>
            <Hero />
            <Stats />
            <Specialties onNavigate={navigateTo} />
            <Partners />
            <Team />
            <Gallery />
            <Testimonials />
          </>
        ) : (
          <CataractPage onNavigate={navigateTo} />
        )}
      </main>
      <Footer onNavigate={navigateTo} />
    </div>
  );
};

export default App;