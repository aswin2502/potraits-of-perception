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
                  <div className="flex flex-col lg:flex-row justify-between items-start space-y-8 lg:space-y-0">
                    {/* Event Coordinators - Left Side */}
                    <div className="w-full lg:w-1/2">
                      <p className="text-lg md:text-xl font-sans font-bold mb-6 text-left">
                       EVENT COORDINATORS
                      </p>
                      <div className="flex flex-col md:flex-row justify-start items-start space-y-6 md:space-y-0 md:space-x-8 lg:space-x-32">
                        <div className="text-left">
                          <p className="text-blue-300 text-sm md:text-base mb-1 font-mono">
                            DHANYASRI R
                          </p>
                          <p className="text-blue-400 text-xs md:text-sm mb-2 font-mono">
                            CONTACT: 8220818979
                          </p>
                          <p className="text-blue-400 text-xs md:text-sm font-mono">
                            Mail: 22am120@stjosephs.ac.in
                          </p>
                        </div>
                        <div className="text-left">
                          <p className="text-blue-300 text-sm md:text-base mb-1 font-mono">
                               BEVIN SANCIA VR
                          </p>
                          <p className="text-blue-400 text-xs md:text-sm mb-2 font-mono">
                               CONTACT: 7200449502
                          </p>
                          <p className="text-blue-400 text-xs md:text-sm font-mono">
                               Mail: 22am134@stjosephs.ac.in
                          </p>
                        </div>
                        <div className="text-left">
                          <p className="text-blue-300 text-sm md:text-base mb-1 font-mono">
                               DHARANI THARAN M
                          </p>
                          <p className="text-blue-400 text-xs md:text-sm mb-2 font-mono">
                               CONTACT: 9003343936
                          </p>
                          <p className="text-blue-400 text-xs md:text-sm font-mono">
                               Mail: 22am144@stjosephs.ac.in
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Faculty - Right Side */}
                    <div className="w-full lg:w-1/2 lg:pl-96">
                      <p className="text-lg md:text-xl font-sans font-bold mb-6 text-left">
                       FACULTY
                      </p>
                      <div className="space-y-3">
                        <div className="text-left">
                          <p className="text-blue-300 text-sm md:text-base font-mono">
                            DR.RAMAN C J
                          </p>
                        </div>
                        <div className="text-left">
                          <p className="text-blue-300 text-sm md:text-base font-mono">
                            MS.PRIYADHARSHINI SP
                          </p>
                        </div>
                        <div className="text-left">
                          <p className="text-blue-300 text-sm md:text-base font-mono">
                            MS.DIVYA P
                          </p>
                        </div>
                      </div>
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