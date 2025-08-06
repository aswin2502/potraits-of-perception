import React from 'react';
import { Clock, MapPin, Users, Star } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const SchedulePage: React.FC = () => {
  const { isDark } = useTheme();

  const schedule = [
    {
      day: "Round 1: AI or Artist?",
      theme: "Visual Turing Test",
      events: [
        {
          time: "30 seconds total",
          title: "Challenge Overview",
          location: "All team members participate",
          type: "challenge",
          speaker: "In this lightning-fast challenge, all four team members will participate together."
        },
        {
          time: "10 images",
          title: "Image Analysis Task",
          location: "Mix of AI and human art",
          type: "task",
          speaker: "You'll be shown 10 images – a mix of AI-generated art and real artist-created works."
        },
        {
          time: "3 seconds per image",
          title: "Your Mission",
          location: "Determine origin of each image",
          type: "mission",
          speaker: "Your task: Determine the origin of each image — is it created by a human artist or by an AI model?"
        },
        {
          time: "⏱ Time Constraint",
          title: "30 seconds total",
          location: "3 seconds per image approx.",
          type: "time",
          speaker: "30 seconds total (3 seconds per image approx.)"
        },
        {
          time: "Goal",
          title: "Test Visual Instinct",
          location: "Differentiate AI vs Human",
          type: "goal",
          speaker: "The goal is to test your visual instinct, familiarity with art styles, and ability to differentiate between machine learning outputs and human touch."
        }
      ]
    },
    {
      day: "Round 2: The Perception Chain",
      theme: "Team Collaboration Challenge",
      events: [
        {
          time: "1 member (Creator) + 1 member (Interpreter)",
          title: "Team Split",
          location: "2-person team division",
          type: "team",
          speaker: "This round tests your team's imagination, interpretation, and synergy."
        },
        {
          time: "2 minutes",
          title: "Prompt Analysis (First Pair)",
          location: "Text prompt to image creation",
          type: "analysis",
          speaker: "The first member receives a text prompt related to a theme, idea, or abstract concept."
        },
        {
          time: "AI Image Generation",
          title: "Create Representative Image",
          location: "One image per prompt",
          type: "creation",
          speaker: "They use an AI image generator to create one image that represents the prompt."
        },
        {
          time: "5-7 minutes",
          title: "Image Interpretation & Reconstruction",
          location: "Second member analysis",
          type: "interpretation",
          speaker: "The second member must analyze the image and try to reconstruct the original prompt by generating a new image based on their interpretation."
        },
        {
          time: "Success Criteria",
          title: "Mirror Original Essence",
          location: "Image similarity assessment",
          type: "success",
          speaker: "If the second image closely mirrors the essence and meaning of the original prompt, the team moves ahead."
        }
      ]
    },

  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'keynote': return Star;
      case 'panel': return Users;
      case 'workshop': return Clock;
      case 'challenge': return Star;
      case 'task': return Users;
      case 'mission': return Clock;
      case 'time': return Clock;
      case 'goal': return Star;
      case 'team': return Users;
      case 'analysis': return Clock;
      case 'creation': return Star;
      case 'interpretation': return Users;
      case 'success': return Star;
      default: return MapPin;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'keynote': return isDark ? 'from-yellow-500 to-amber-500' : 'from-yellow-600 to-amber-600';
      case 'panel': return isDark ? 'from-blue-500 to-indigo-500' : 'from-blue-600 to-indigo-600';
      case 'workshop': return isDark ? 'from-green-500 to-emerald-500' : 'from-green-600 to-emerald-600';
      case 'special': return isDark ? 'from-purple-500 to-pink-500' : 'from-purple-600 to-pink-600';
      case 'challenge': return isDark ? 'from-blue-500 to-indigo-500' : 'from-blue-600 to-indigo-600';
      case 'task': return isDark ? 'from-green-500 to-emerald-500' : 'from-green-600 to-emerald-600';
      case 'mission': return isDark ? 'from-purple-500 to-pink-500' : 'from-purple-600 to-pink-600';
      case 'time': return isDark ? 'from-red-500 to-pink-500' : 'from-red-600 to-pink-600';
      case 'goal': return isDark ? 'from-yellow-500 to-amber-500' : 'from-yellow-600 to-amber-600';
      case 'team': return isDark ? 'from-blue-500 to-indigo-500' : 'from-blue-600 to-indigo-600';
      case 'analysis': return isDark ? 'from-green-500 to-emerald-500' : 'from-green-600 to-emerald-600';
      case 'creation': return isDark ? 'from-purple-500 to-pink-500' : 'from-purple-600 to-pink-600';
      case 'interpretation': return isDark ? 'from-yellow-500 to-amber-500' : 'from-yellow-600 to-amber-600';
      case 'success': return isDark ? 'from-green-500 to-emerald-500' : 'from-green-600 to-emerald-600';
      default: return isDark ? 'from-gray-500 to-slate-500' : 'from-gray-600 to-slate-600';
    }
  };

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
            Event Overview
          </h1>
          <p className={`text-xl ${
            isDark ? 'text-blue-200' : 'text-blue-700'
          } max-w-4xl mx-auto leading-relaxed`}>
            Portraits of Perception is a two-round visual reasoning showdown that challenges your team’s creativity, tech understanding, and perceptive instincts. From decoding digital art origins to crafting impactful ideas from pixels, this event is where artistic instinct meets artificial intelligence and innovation.


          </p>
        </div>

        {/* Schedule */}
        <div className="space-y-12">
          {schedule.map((day, dayIndex) => (
            <div key={dayIndex} className={`${
              isDark 
                ? 'bg-slate-800/50 border border-blue-400' 
                : 'bg-white/80 border border-blue-200'
            } backdrop-blur-sm rounded-xl p-8 shadow-xl`}>
              
              {/* Day Header */}
              <div className="text-center mb-8">
                <h2 className={`text-3xl font-bold ${
                  isDark ? 'text-blue-100' : 'text-blue-900'
                } font-serif mb-2`}>
                  {day.day}
                </h2>
                <p className={`text-lg ${
                  isDark ? 'text-blue-300' : 'text-blue-600'
                } italic`}>
                  Theme: {day.theme}
                </p>
              </div>

              {/* Events */}
              <div className="space-y-4">
                {day.events.map((event, eventIndex) => {
                  const IconComponent = getEventIcon(event.type);
                  return (
                    <div
                      key={eventIndex}
                      className={`${
                        isDark 
                          ? 'bg-slate-700/50 hover:bg-slate-700/70' 
                          : 'bg-blue-50/50 hover:bg-blue-50/70'
                      } rounded-lg p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className={`w-12 h-12 bg-gradient-to-r ${getEventColor(event.type)} rounded-full flex items-center justify-center flex-shrink-0`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        
                        <div className="flex-1">
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                            <h3 className={`text-lg font-semibold ${
                              isDark ? 'text-blue-100' : 'text-blue-900'
                            } mb-1 md:mb-0`}>
                              {event.title}
                            </h3>
                            <span className={`text-sm ${
                              isDark ? 'text-blue-300' : 'text-blue-600'
                            } font-medium`}>
                              {event.time}
                            </span>
                          </div>
                          
                          <div className="flex flex-col md:flex-row md:items-center md:space-x-6 space-y-1 md:space-y-0">
                            <div className="flex items-center space-x-2">
                              <MapPin className={`w-4 h-4 ${
                                isDark ? 'text-blue-400' : 'text-blue-500'
                              }`} />
                              <span className={`text-sm ${
                                isDark ? 'text-blue-200' : 'text-blue-700'
                              }`}>
                                {event.location}
                              </span>
                            </div>
                            
                            {event.speaker && (
                              <div className="flex items-center space-x-2">
                                <Users className={`w-4 h-4 ${
                                  isDark ? 'text-blue-400' : 'text-blue-500'
                                }`} />
                                <span className={`text-sm ${
                                  isDark ? 'text-blue-200' : 'text-blue-700'
                                } italic`}>
                                  {event.speaker}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Important Notes */}
        <div className={`${
          isDark 
            ? 'bg-slate-800/50 border border-blue-400' 
            : 'bg-white/80 border border-blue-200'
        } backdrop-blur-sm rounded-xl p-8 mt-12 shadow-xl`}>
          <h3 className={`text-2xl font-bold ${
            isDark ? 'text-blue-100' : 'text-blue-900'
          } font-serif mb-4`}>
            Important Notes
          </h3>
          <ul className={`space-y-2 ${
            isDark ? 'text-blue-200' : 'text-blue-700'
          }`}>
            <li>• Each team must consist of 2 members only – no solo entries allowed.</li>
            <li>• Laptop is mandatory for participation; ensure it's fully charged.</li>
            <li>• Participants must report by 9:00A.M sharp for briefing.</li>
            <li>• Time constraints must be strictly followed .</li>
            <li>• No use of mobile phones or external assistance during the event.</li>
            <li>• Internet access should only be through the provided tools – no external browsing.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SchedulePage;