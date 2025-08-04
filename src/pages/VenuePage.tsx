import React from 'react';
import { MapPin, Car, Train, Plane, Wifi, Coffee, Users, Shield } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const VenuePage: React.FC = () => {
  const { isDark } = useTheme();

  const facilities = [
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary high-speed internet throughout the venue"
    },
    {
      icon: Coffee,
      title: "Catering Services",
      description: "Full catering with magical themed refreshments"
    },
    {
      icon: Users,
      title: "Breakout Rooms",
      description: "Multiple spaces for workshops and networking"
    },
    {
      icon: Shield,
      title: "Security & Safety",
      description: "24/7 security and comprehensive safety measures"
    }
  ];

  const transportation = [
    {
      icon: Car,
      title: "By Car",
      description: "Free parking available on campus. GPS coordinates: 51.7520° N, 1.2577° W",
      details: "Parking permits will be provided with registration confirmation"
    },
    {
      icon: Train,
      title: "By Train",
      description: "Oxford Railway Station is 15 minutes away by taxi or bus",
      details: "Regular services from London Paddington (1 hour journey)"
    },
    {
      icon: Plane,
      title: "By Air",
      description: "Heathrow Airport is 1 hour away, with direct bus connections",
      details: "Oxford Bus Company operates regular services from all London airports"
    }
  ];

  return (
    <div className={`min-h-screen ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-100'
    } transition-all duration-300`}>
      <div className="container mx-auto px-6 py-12">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl font-bold ${
            isDark ? 'text-blue-100' : 'text-blue-900'
          } font-serif mb-6 drop-shadow-lg`}>
            Venue Information
          </h1>
          <p className={`text-xl ${
            isDark ? 'text-blue-200' : 'text-blue-700'
          } max-w-4xl mx-auto leading-relaxed`}>
            Join us at the magnificent Great Hall, a perfect setting for our 
            magical academic gathering in the heart of Oxford.
          </p>
        </div>

        {/* Main Venue Info */}
        <div className={`${
          isDark 
            ? 'bg-slate-800/50 border border-blue-400' 
            : 'bg-white/80 border border-blue-200'
        } backdrop-blur-sm rounded-xl p-8 mb-12 shadow-xl`}>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className={`text-3xl font-bold ${
                isDark ? 'text-blue-100' : 'text-blue-900'
              } font-serif mb-4`}>
                The Great Hall
              </h2>
              <div className="flex items-start space-x-3 mb-4">
                <MapPin className={`w-6 h-6 ${
                  isDark ? 'text-blue-400' : 'text-blue-600'
                } mt-1 flex-shrink-0`} />
                <div>
                  <p className={`${
                    isDark ? 'text-blue-200' : 'text-blue-700'
                  } font-semibold mb-1`}>
                    University of Oxford
                  </p>
                  <p className={`${
                    isDark ? 'text-blue-300' : 'text-blue-600'
                  } text-sm`}>
                    Christ Church College<br />
                    St Aldate's, Oxford OX1 1DP<br />
                    United Kingdom
                  </p>
                </div>
              </div>
              <p className={`${
                isDark ? 'text-blue-200' : 'text-blue-700'
              } leading-relaxed mb-6`}>
                The iconic Great Hall at Christ Church College, Oxford, served as 
                inspiration for Hogwarts' Great Hall in the Harry Potter films. 
                This magnificent medieval dining hall provides the perfect 
                atmosphere for our academic symposium, combining historical 
                grandeur with modern conference facilities.
              </p>
              <div className={`${
                isDark ? 'bg-slate-700/50' : 'bg-blue-50'
              } rounded-lg p-4`}>
                <h3 className={`font-semibold ${
                  isDark ? 'text-blue-100' : 'text-blue-900'
                } mb-2`}>
                  Venue Highlights:
                </h3>
                <ul className={`${
                  isDark ? 'text-blue-200' : 'text-blue-700'
                } text-sm space-y-1`}>
                  <li>• Capacity for 400+ attendees</li>
                  <li>• Historic architecture dating back to 1529</li>
                  <li>• State-of-the-art AV equipment</li>
                  <li>• Climate controlled environment</li>
                  <li>• Accessible facilities throughout</li>
                </ul>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1319854/pexels-photo-1319854.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop" 
                alt="Great Hall Interior" 
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
            </div>
          </div>
        </div>

        {/* Facilities */}
        <div className="mb-12">
          <h2 className={`text-4xl font-bold ${
            isDark ? 'text-blue-100' : 'text-blue-900'
          } font-serif text-center mb-12`}>
            Venue Facilities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, index) => (
              <div
                key={index}
                className={`${
                  isDark 
                    ? 'bg-slate-800/50 border border-blue-400' 
                    : 'bg-white/80 border border-blue-200'
                } backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-center`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${
                  isDark ? 'from-blue-500 to-indigo-500' : 'from-blue-600 to-indigo-600'
                } rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <facility.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className={`text-lg font-semibold ${
                  isDark ? 'text-blue-100' : 'text-blue-900'
                } mb-2 font-serif`}>
                  {facility.title}
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-blue-200' : 'text-blue-700'
                } leading-relaxed`}>
                  {facility.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Transportation */}
        <div className="mb-12">
          <h2 className={`text-4xl font-bold ${
            isDark ? 'text-blue-100' : 'text-blue-900'
          } font-serif text-center mb-12`}>
            Getting There
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {transportation.map((transport, index) => (
              <div
                key={index}
                className={`${
                  isDark 
                    ? 'bg-slate-800/50 border border-blue-400' 
                    : 'bg-white/80 border border-blue-200'
                } backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${
                  isDark ? 'from-blue-500 to-indigo-500' : 'from-blue-600 to-indigo-600'
                } rounded-full flex items-center justify-center mb-4`}>
                  <transport.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className={`text-xl font-semibold ${
                  isDark ? 'text-blue-100' : 'text-blue-900'
                } mb-3 font-serif`}>
                  {transport.title}
                </h3>
                <p className={`${
                  isDark ? 'text-blue-200' : 'text-blue-700'
                } mb-3 leading-relaxed`}>
                  {transport.description}
                </p>
                <p className={`text-sm ${
                  isDark ? 'text-blue-300' : 'text-blue-600'
                } italic`}>
                  {transport.details}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Map Section */}
        <div className={`${
          isDark 
            ? 'bg-slate-800/50 border border-blue-400' 
            : 'bg-white/80 border border-blue-200'
        } backdrop-blur-sm rounded-xl p-8 shadow-xl`}>
          <h3 className={`text-2xl font-bold ${
            isDark ? 'text-blue-100' : 'text-blue-900'
          } font-serif mb-6 text-center`}>
            Campus Map & Directions
          </h3>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className={`text-lg font-semibold ${
                isDark ? 'text-blue-100' : 'text-blue-900'
              } mb-3`}>
                Detailed Directions:
              </h4>
              <ul className={`space-y-2 ${
                isDark ? 'text-blue-200' : 'text-blue-700'
              } text-sm`}>
                <li>• Enter through the main Christ Church entrance on St Aldate's</li>
                <li>• Registration desk will be clearly marked in Tom Quad</li>
                <li>• The Great Hall is accessible via the main staircase</li>
                <li>• Signage will guide you to breakout rooms and facilities</li>
                <li>• Accessibility entrance available on the south side</li>
              </ul>
              
              <div className={`mt-6 p-4 ${
                isDark ? 'bg-slate-700/50' : 'bg-blue-50'
              } rounded-lg`}>
                <h4 className={`font-semibold ${
                  isDark ? 'text-blue-100' : 'text-blue-900'
                } mb-2`}>
                  Contact Information:
                </h4>
                <p className={`text-sm ${
                  isDark ? 'text-blue-200' : 'text-blue-700'
                }`}>
                  Phone: +44 1865 276150<br />
                  Email: symposium@hogwarts-oxford.ac.uk<br />
                  Emergency: +44 1865 276999
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className={`w-full h-64 ${
                isDark ? 'bg-slate-700' : 'bg-blue-100'
              } rounded-lg flex items-center justify-center`}>
                <div className="text-center">
                  <MapPin className={`w-12 h-12 ${
                    isDark ? 'text-blue-400' : 'text-blue-600'
                  } mx-auto mb-2`} />
                  <p className={`${
                    isDark ? 'text-blue-200' : 'text-blue-700'
                  } font-semibold`}>
                    Interactive Map
                  </p>
                  <p className={`text-sm ${
                    isDark ? 'text-blue-300' : 'text-blue-600'
                  }`}>
                    Detailed campus map will be provided<br />
                    with registration materials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VenuePage;