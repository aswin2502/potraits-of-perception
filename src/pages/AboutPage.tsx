import React from 'react';
import { Users, BookOpen, Award, Heart } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const AboutPage: React.FC = () => {
  const { isDark } = useTheme();

  const organizers = [
    {
      name: "Prof. Minerva McGonagall",
      role: "Conference Chair",
      department: "Transfiguration Studies",
      bio: "Leading expert in magical transformation theory and educational methodology."
    },
    {
      name: "Dr. Remus Lupin",
      role: "Program Director",
      department: "Defense Against Dark Arts",
      bio: "Specialist in protective magic and psychological aspects of wizarding literature."
    },
    {
      name: "Prof. Filius Flitwick",
      role: "Academic Coordinator",
      department: "Charms & Linguistics",
      bio: "Renowned scholar in magical linguistics and literary charm analysis."
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
            About the Symposium
          </h1>
          <p className={`text-xl ${
            isDark ? 'text-blue-200' : 'text-blue-700'
          } max-w-4xl mx-auto leading-relaxed`}>
            Discover the magic behind the most comprehensive academic gathering 
            dedicated to Harry Potter studies and wizarding world scholarship.
          </p>
        </div>

        {/* Mission Section */}
        <div className={`${
          isDark 
            ? 'bg-slate-800/50 border border-blue-400' 
            : 'bg-white/80 border border-blue-200'
        } backdrop-blur-sm rounded-xl p-8 mb-12 shadow-xl`}>
          <div className="flex items-center mb-6">
            <Heart className={`w-8 h-8 ${
              isDark ? 'text-blue-400' : 'text-blue-600'
            } mr-4`} />
            <h2 className={`text-3xl font-bold ${
              isDark ? 'text-blue-100' : 'text-blue-900'
            } font-serif`}>
              Our Mission
            </h2>
          </div>
          <p className={`text-lg ${
            isDark ? 'text-blue-200' : 'text-blue-700'
          } leading-relaxed mb-6`}>
            The Harry Potter Academic Symposium serves as a premier platform for scholars, 
            researchers, and enthusiasts to explore the profound literary, cultural, and 
            educational impact of J.K. Rowling's wizarding world. We believe that the 
            Harry Potter series transcends entertainment, offering rich material for 
            academic discourse across multiple disciplines.
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <BookOpen className={`w-12 h-12 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              } mx-auto mb-3`} />
              <h3 className={`text-lg font-semibold ${
                isDark ? 'text-blue-100' : 'text-blue-900'
              } mb-2`}>
                Literary Analysis
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-blue-300' : 'text-blue-600'
              }`}>
                Deep exploration of themes, symbolism, and narrative techniques
              </p>
            </div>
            <div className="text-center">
              <Users className={`w-12 h-12 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              } mx-auto mb-3`} />
              <h3 className={`text-lg font-semibold ${
                isDark ? 'text-blue-100' : 'text-blue-900'
              } mb-2`}>
                Cultural Impact
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-blue-300' : 'text-blue-600'
              }`}>
                Examining the series' influence on society and popular culture
              </p>
            </div>
            <div className="text-center">
              <Award className={`w-12 h-12 ${
                isDark ? 'text-blue-400' : 'text-blue-600'
              } mx-auto mb-3`} />
              <h3 className={`text-lg font-semibold ${
                isDark ? 'text-blue-100' : 'text-blue-900'
              } mb-2`}>
                Educational Value
              </h3>
              <p className={`text-sm ${
                isDark ? 'text-blue-300' : 'text-blue-600'
              }`}>
                Utilizing Harry Potter in pedagogical and learning contexts
              </p>
            </div>
          </div>
        </div>

        {/* Organizers Section */}
        <div className="mb-12">
          <h2 className={`text-4xl font-bold ${
            isDark ? 'text-blue-100' : 'text-blue-900'
          } font-serif text-center mb-12`}>
            Meet Our Organizers
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {organizers.map((organizer, index) => (
              <div
                key={index}
                className={`${
                  isDark 
                    ? 'bg-slate-800/50 border border-blue-400' 
                    : 'bg-white/80 border border-blue-200'
                } backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                <div className={`w-20 h-20 ${
                  isDark ? 'bg-blue-600' : 'bg-blue-600'
                } rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className={`text-xl font-bold ${
                  isDark ? 'text-blue-100' : 'text-blue-900'
                } text-center mb-2 font-serif`}>
                  {organizer.name}
                </h3>
                <p className={`text-center ${
                  isDark ? 'text-blue-300' : 'text-blue-600'
                } font-semibold mb-1`}>
                  {organizer.role}
                </p>
                <p className={`text-center ${
                  isDark ? 'text-blue-400' : 'text-blue-500'
                } text-sm mb-4 italic`}>
                  {organizer.department}
                </p>
                <p className={`text-sm ${
                  isDark ? 'text-blue-200' : 'text-blue-700'
                } text-center leading-relaxed`}>
                  {organizer.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className={`${
          isDark 
            ? 'bg-slate-800/50 border border-blue-400' 
            : 'bg-white/80 border border-blue-200'
        } backdrop-blur-sm rounded-xl p-8 text-center shadow-xl`}>
          <blockquote className={`text-2xl ${
            isDark ? 'text-blue-200' : 'text-blue-800'
          } font-serif italic mb-4`}>
            "We are only as strong as we are united, as weak as we are divided."
          </blockquote>
          <cite className={`${
            isDark ? 'text-blue-400' : 'text-blue-600'
          } font-semibold`}>
            — Albus Dumbledore
          </cite>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;