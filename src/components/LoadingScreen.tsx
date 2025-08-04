import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showFootsteps, setShowFootsteps] = useState(false);
  const [showSpells, setShowSpells] = useState(false);
  const { isDark } = useTheme();

  const loadingTexts = [
    "I solemnly swear that I am up to no good...",
    "Revealing the secrets of Hogwarts...",
    "Mapping the corridors of knowledge...",
    "Summoning symposium magic...",
    "Casting illumination charms...",
    "Opening the Chamber of Secrets...",
    "Mischief managed!"
  ];

  const spells = [
    "Lumos", "Accio", "Expelliarmus", "Protego", "Expecto Patronum"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = Math.min(prev + 0.8, 100);
        
        // Update text based on progress
        const textIndex = Math.floor((newProgress / 100) * loadingTexts.length);
        if (textIndex < loadingTexts.length) {
          setCurrentText(loadingTexts[textIndex]);
        }
        
        // Show footsteps animation
        if (newProgress > 15) {
          setShowFootsteps(true);
        }

        // Show spell effects
        if (newProgress > 30) {
          setShowSpells(true);
        }
        
        // Complete loading
        if (newProgress >= 100) {
          setTimeout(() => onLoadingComplete(), 1500);
          clearInterval(interval);
        }
        
        return newProgress;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onLoadingComplete]);

  return (
    <div className={`fixed inset-0 ${isDark 
      ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900' 
      : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100'
    } flex items-center justify-center overflow-hidden transition-all duration-1000`}>
      
      {/* Animated Background Stars */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 ${isDark ? 'bg-blue-300' : 'bg-blue-400'} rounded-full animate-pulse`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
      </div>

      {/* Floating Spell Effects */}
      {showSpells && (
        <div className="absolute inset-0 pointer-events-none">
          {spells.map((spell, i) => (
            <div
              key={i}
              className={`absolute text-sm font-serif italic ${
                isDark ? 'text-blue-300' : 'text-blue-600'
              } animate-bounce opacity-70`}
              style={{
                left: `${10 + i * 18}%`,
                top: `${20 + Math.sin(i) * 15}%`,
                animationDelay: `${i * 0.5}s`,
                animationDuration: '3s'
              }}
            >
              {spell}
            </div>
          ))}
        </div>
      )}

      {/* Map Container */}
      <div className="relative w-full max-w-5xl mx-auto p-4 md:p-8">
        {/* Map Border with Glow Effect */}
        <div className={`relative ${
          isDark 
            ? 'bg-slate-800 border-2 md:border-4 border-blue-400 shadow-2xl shadow-blue-500/50' 
            : 'bg-blue-50 border-2 md:border-4 border-blue-600 shadow-2xl shadow-blue-600/30'
        } rounded-lg p-4 md:p-8 transform rotate-1 transition-all duration-1000`}>
          <div className={`${
            isDark 
              ? 'bg-slate-700 border-2 border-blue-300' 
              : 'bg-blue-25 border-2 border-blue-500'
          } rounded p-4 md:p-8 transform -rotate-1 transition-all duration-1000`}>
            
            {/* Map Title with Glow */}
            <div className="text-center mb-6 md:mb-10">
              <h1 className={`text-2xl md:text-5xl font-bold ${
                isDark ? 'text-blue-100' : 'text-blue-900'
              } mb-2 md:mb-3 font-serif tracking-wide drop-shadow-lg`}>
                The Marauder's Map
              </h1>
              <p className={`${
                isDark ? 'text-blue-300' : 'text-blue-700'
              } text-sm md:text-xl italic font-serif`}>
                Harry Potter Symposium Portal
              </p>
            </div>

            {/* Enhanced Hogwarts Castle */}
            <div className="relative mb-6 md:mb-10 h-48 md:h-80 flex items-center justify-center">
              <svg viewBox="0 0 500 250" className="w-full h-full">
                {/* Castle Base */}
                <path
                  d="M50 220 L50 160 L90 160 L90 140 L130 140 L130 120 L170 120 L170 100 L210 100 L210 80 L250 80 L250 100 L290 100 L290 120 L330 120 L330 140 L370 140 L370 160 L410 160 L410 220 L450 220"
                  fill="none"
                  stroke={isDark ? '#93c5fd' : '#1d4ed8'}
                  strokeWidth="3"
                  className="animate-pulse"
                  style={{ filter: isDark ? 'drop-shadow(0 0 10px #3b82f6)' : 'drop-shadow(0 0 5px #1e40af)' }}
                />
                
                {/* Towers with Glow */}
                {[
                  { cx: 110, cy: 130, r: 12 },
                  { cx: 180, cy: 110, r: 10 },
                  { cx: 250, cy: 70, r: 15 },
                  { cx: 320, cy: 110, r: 10 },
                  { cx: 390, cy: 130, r: 12 }
                ].map((tower, i) => (
                  <circle
                    key={i}
                    cx={tower.cx}
                    cy={tower.cy}
                    r={tower.r}
                    fill={isDark ? '#3b82f6' : '#1e40af'}
                    className="animate-pulse"
                    style={{ 
                      filter: isDark ? 'drop-shadow(0 0 15px #60a5fa)' : 'drop-shadow(0 0 8px #2563eb)',
                      animationDelay: `${i * 0.3}s`
                    }}
                  />
                ))}

                {/* Magical Aura */}
                <circle
                  cx="250"
                  cy="150"
                  r="120"
                  fill="none"
                  stroke={isDark ? '#60a5fa' : '#3b82f6'}
                  strokeWidth="1"
                  opacity="0.3"
                  className="animate-ping"
                  style={{ animationDuration: '4s' }}
                />
              </svg>

              {/* Enhanced Animated Footsteps */}
              {showFootsteps && (
                <div className="absolute inset-0">
                  {[...Array(10)].map((_, i) => (
                    <div
                      key={i}
                      className={`absolute w-2 h-3 md:w-3 md:h-4 ${
                        isDark ? 'bg-blue-400' : 'bg-blue-600'
                      } rounded-full animate-ping`}
                      style={{
                        left: `${15 + i * 8}%`,
                        top: `${65 + Math.sin(i * 0.5) * 15}%`,
                        animationDelay: `${i * 0.2}s`,
                        animationDuration: '2s',
                        filter: isDark ? 'drop-shadow(0 0 8px #60a5fa)' : 'drop-shadow(0 0 4px #2563eb)'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Enhanced Loading Text */}
            <div className="text-center mb-6 md:mb-8">
              <p className={`text-lg md:text-2xl ${
                isDark ? 'text-blue-200' : 'text-blue-800'
              } font-serif italic min-h-[2rem] md:min-h-[3rem] drop-shadow-md transition-all duration-500 px-2`}>
                {currentText}
              </p>
            </div>

            {/* Enhanced Progress Bar */}
            <div className="relative mb-4">
              <div className={`w-full h-3 md:h-4 ${
                isDark ? 'bg-slate-600' : 'bg-blue-200'
              } rounded-full border-2 ${
                isDark ? 'border-blue-400' : 'border-blue-600'
              } overflow-hidden`}>
                <div 
                  className={`h-full bg-gradient-to-r ${
                    isDark 
                      ? 'from-blue-500 via-blue-400 to-blue-300' 
                      : 'from-blue-600 via-blue-500 to-blue-400'
                  } rounded-full transition-all duration-300 ease-out relative overflow-hidden`}
                  style={{ width: `${progress}%` }}
                >
                  <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${
                    isDark ? 'via-blue-200/50' : 'via-blue-300/50'
                  } to-transparent animate-pulse`}></div>
                  
                  {/* Sparkle Effect */}
                  <div className="absolute inset-0">
                    {[...Array(3)].map((_, i) => (
                      <div
                        key={i}
                        className={`absolute w-1 h-1 md:w-2 md:h-2 ${
                          isDark ? 'bg-blue-100' : 'bg-blue-200'
                        } rounded-full animate-ping`}
                        style={{
                          left: `${20 + i * 30}%`,
                          top: '25%',
                          animationDelay: `${i * 0.5}s`
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-center mt-2 md:mt-3">
                <span className={`${
                  isDark ? 'text-blue-300' : 'text-blue-700'
                } font-bold text-base md:text-lg`}>
                  {Math.round(progress)}%
                </span>
              </div>
            </div>

            {/* Magical Sparkles */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(20)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 md:w-2 md:h-2 ${
                    isDark ? 'bg-blue-300' : 'bg-blue-500'
                  } rounded-full animate-ping`}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    animationDelay: `${Math.random() * 4}s`,
                    animationDuration: `${2 + Math.random() * 3}s`,
                    filter: isDark ? 'drop-shadow(0 0 6px #60a5fa)' : 'drop-shadow(0 0 3px #2563eb)'
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;