import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import LoadingScreen from './components/LoadingScreen';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import SchedulePage from './pages/SchedulePage';
import VenuePage from './pages/VenuePage';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState('home');

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'about':
        return <SchedulePage />;
      case 'venue':
        return <VenuePage />;
              default:
          return (
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 transition-all duration-300">
              <main>
                <HeroSection />
              </main>
              
              {/* Footer */}
              <footer className="bg-slate-900 text-blue-200 py-8 transition-all duration-300">
                <div className="container mx-auto px-6">
                  <p className="text-xl font-sans font-bold mb-6 text-center">
                   EVENT COORDINATORS
                  </p>
                  <div className="flex justify-center items-center space-x-32">
                    <div className="text-center">
                      <p className="text-blue-300 text-base mb-1 font-mono">
                        DHANYASRI R
                      </p>
                      <p className="text-blue-400 text-sm mb-2 font-mono">
                        CONTACT: 8220818979
                      </p>
                      <p className="text-blue-400 text-sm font-mono">
                        Mail: dhanyasri262@gmail.com
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-blue-300 text-base mb-1 font-mono">
                           BEVIN SANCIA VR
                      </p>
                      <p className="text-blue-400 text-sm mb-2 font-mono">
                           CONTACT: 7200449502
                      </p>
                      <p className="text-blue-400 text-sm font-mono">
                           Mail: bevinsancia.6169@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </footer>
            </div>
          );
    }
  };

  if (isLoading) {
    return (
      <ThemeProvider>
        <LoadingScreen onLoadingComplete={handleLoadingComplete} />
      </ThemeProvider>
    );
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-all duration-300">
        <Header currentPage={currentPage} onNavigate={handleNavigate} />
        {renderCurrentPage()}
      </div>
    </ThemeProvider>
  );
}

export default App;