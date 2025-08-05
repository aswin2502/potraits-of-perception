import React, { useState, useEffect } from 'react';
import { Sparkles, Calendar, MapPin, Users } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import qrCodeImage from '../assets/sympo qr.jpg';

const HeroSection: React.FC = () => {
  const { isDark } = useTheme();
  const [showQRCode, setShowQRCode] = useState(false);
  const [mouseTrail, setMouseTrail] = useState<Array<{x: number, y: number, id: number}>>([]);
  const [trailId, setTrailId] = useState(0);
  const [showMouseTrail, setShowMouseTrail] = useState(true);

  const handleQRCodeClick = () => {
    setShowQRCode(!showQRCode);
  };

  const handleClick = () => {
    setShowMouseTrail(false);
    setMouseTrail([]);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!showMouseTrail) return;
      const newPoint = { x: e.clientX, y: e.clientY, id: trailId };
      setMouseTrail(prev => [...prev.slice(-35), newPoint]);
      setTrailId(prev => prev + 1);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (!showMouseTrail) return;
      e.preventDefault();
      const touch = e.touches[0];
      const newPoint = { x: touch.clientX, y: touch.clientY, id: trailId };
      setMouseTrail(prev => [...prev.slice(-35), newPoint]);
      setTrailId(prev => prev + 1);
    };

    const handleClick = () => {
      setShowMouseTrail(false);
      setMouseTrail([]);
    };

    const handleTouchEnd = () => {
      setShowMouseTrail(false);
      setMouseTrail([]);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove, { passive: false });
    window.addEventListener('click', handleClick);
    window.addEventListener('touchend', handleTouchEnd);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('click', handleClick);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [trailId, showMouseTrail]);

  return (
    <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 py-20 overflow-hidden transition-all duration-300">
      
      {/* Blue Mouse Trail */}
      {showMouseTrail && mouseTrail.map((point, index) => (
        <div
          key={point.id}
          className="fixed pointer-events-none z-50 rounded-full animate-pulse"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            width: `${Math.max(3, 10 - index * 0.2)}px`,
            height: `${Math.max(3, 10 - index * 0.2)}px`,
            backgroundColor: `rgba(59, 130, 246, ${Math.max(0.1, 0.9 - index * 0.02)})`,
            boxShadow: `0 0 ${Math.max(3, 8 - index * 0.15)}px rgba(59, 130, 246, ${Math.max(0.4, 1 - index * 0.015)})`,
            opacity: Math.max(0.1, 1 - index * 0.025),
            animationDelay: `${index * 0.08}s`
          }}
        />
      ))}

      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 via-transparent to-blue-400/20"></div>
      </div>

      {/* Static Glitter Effect */}
      <div className="absolute inset-0">
        {[...Array(80)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: Math.random() * 0.6 + 0.2,
              animation: 'none',
              transition: 'none'
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Title */}
          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <Sparkles className="w-8 h-8 text-blue-400 mr-3" />
              <h2 className="text-5xl md:text-6xl font-bold text-blue-100 font-serif tracking-wide drop-shadow-lg">
                Welcome to Pensieve
              </h2>
              <Sparkles className="w-8 h-8 text-blue-400 ml-3" />
            </div>
            <h3 className="text-3xl md:text-4xl text-blue-300 font-serif italic mb-6">
              GENAISIS 2K25
            </h3>
            <p className="text-xl text-blue-200 leading-relaxed max-w-3xl mx-auto">
            Join us for a thought-provoking journey through the intersection of imagination, visual reasoning, and technology. Witness how the line blurs between artistic intuition and artificial intelligence from decoding artworks to crafting innovation from images.

            </p>
          </div>

          {/* Event Details Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/80 border-2 border-blue-400 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-blue-100 mb-2">When</h4>
              <p className="text-blue-200">August 30, 2025</p>
              <p className="text-blue-300 text-sm">A Day of Magic</p>
            </div>

            <div className="bg-slate-800/80 border-2 border-blue-400 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-blue-100 mb-2">Where</h4>
              <p className="text-blue-200">12th block ,Third Floor</p>
              <p className="text-blue-300 text-sm">College Campus</p>
            </div>

            <div className="bg-slate-800/80 border-2 border-blue-400 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <Users className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-blue-100 mb-2">Who</h4>
              <p className="text-blue-200">Scholars & Students</p>
              <p className="text-blue-300 text-sm">All Houses Welcome</p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => window.open('https://forms.gle/W15XosJ5qzrWvwKG8', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
              >
                Register for the Symposium
              </button>
              <div className="flex items-center justify-start gap-8">
                <button 
                  onClick={handleQRCodeClick}
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                >
                  Open QR Code
                </button>
                {showQRCode && (
                  <div className="w-28 h-28 md:w-36 md:h-36 rounded-lg overflow-hidden border-2 border-blue-400 shadow-lg animate-fade-in">
                    <img 
                      src={qrCodeImage} 
                      alt="QR Code" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
            <p className="text-blue-300 italic font-serif">
            "It's not just about what you see… it's about how you think."


            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;