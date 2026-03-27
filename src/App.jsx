import React from 'react';
import { ThemeProvider } from './theme/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import WhyChooseMe from './components/WhyChooseMe';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-[#09090b] text-gray-900 dark:text-white transition-colors duration-300 font-sans antialiased selection:bg-rose-500/30 selection:text-rose-900 dark:selection:text-rose-100">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <Projects />
          <WhyChooseMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
