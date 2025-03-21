import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Header from './components/Header';
import Background3D from './components/Background3D';
import Footer from './components/Footer';
import DemoNotice from './components/DemoNotice';
import LoadingScreen from './components/LoadingScreen';

// Preload strategy for components
const preloadComponent = (importFn: () => Promise<any>) => {
  const Component = lazy(() => {
    const componentPromise = importFn();
    // Start loading the next component after 1 second
    setTimeout(() => {
      preloadQueue.next();
    }, 1000);
    return componentPromise;
  });
  return Component;
};

// Queue for preloading components
const preloadQueue = {
  components: [
    () => import('./components/Hero'),
    () => import('./components/Architecture'),
    () => import('./components/Deployment'),
    () => import('./components/Team'),
    () => import('./components/FAQ'),
    () => import('./components/Contact')
  ],
  currentIndex: 0,
  next() {
    if (this.currentIndex < this.components.length) {
      this.components[this.currentIndex]();
      this.currentIndex++;
    }
  }
};

const Hero = preloadComponent(() => import('./components/Hero'));
const Architecture = preloadComponent(() => import('./components/Architecture'));
const Deployment = preloadComponent(() => import('./components/Deployment'));
const Team = preloadComponent(() => import('./components/Team'));
const FAQ = preloadComponent(() => import('./components/FAQ'));
const Contact = preloadComponent(() => import('./components/Contact'));

// Start preloading the first component
preloadQueue.next();

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setCursorPosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).tagName === 'BUTTON' || 
          (e.target as HTMLElement).tagName === 'A') {
        setIsHovering(true);
      }
    };

    const handleMouseOut = () => {
      setIsHovering(false);
    };

    document.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseout', handleMouseOut, { passive: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseout', handleMouseOut);
    };
  }, []);

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    } else if (section === 'home') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  if (isLoading) {
    return <LoadingScreen onLoadingComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      <div
        className={`custom-cursor ${isHovering ? 'hover' : ''}`}
        style={{
          transform: `translate(${cursorPosition.x}px, ${cursorPosition.y}px)`,
        }}
      />
      <Background3D section={activeSection} />
      <div className="relative z-10">
        <Header activeSection={activeSection} onSectionChange={handleSectionChange} />
        <DemoNotice />
        
        <Suspense fallback={
          <div className="flex items-center justify-center min-h-screen">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full"
            />
          </div>
        }>
          {renderSection()}
        </Suspense>

        <Footer />
      </div>
    </div>
  );

  function renderSection() {
    switch (activeSection) {
      case 'home':
        return <Hero />;
      case 'architecture':
        return <Architecture />;
      case 'deployment':
        return <Deployment />;
      case 'team':
        return <Team />;
      case 'faq':
        return <FAQ />;
      case 'contact':
        return <Contact />;
      default:
        return <Hero />;
    }
  }
}

export default App;