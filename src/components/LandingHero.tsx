import React, { useEffect, useState } from 'react';
import { MapPin, Sparkles, ArrowRight, Zap, Globe, Clock, Star, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface LandingHeroProps {
  onStartPlanning: () => void;
}

const LandingHero: React.FC<LandingHeroProps> = ({ onStartPlanning }) => {
  const [currentWord, setCurrentWord] = useState(0);
  const words = ['Dream Trip', 'Perfect Plan', 'Adventure', 'Journey'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [words.length]);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "AI-Powered Planning",
      description: "Generate personalized itineraries in seconds using advanced AI"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Interactive Maps",
      description: "Visualize your journey with beautiful, interactive map views"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Time Optimized",
      description: "Smart routing to maximize your time and minimize travel"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Travel Blogger",
      content: "PlanMyTrip saved me hours of research. The AI suggestions were spot-on!",
      rating: 5
    },
    {
      name: "Mike Rodriguez",
      role: "Adventure Seeker",
      content: "Found hidden gems I never would have discovered on my own.",
      rating: 5
    },
    {
      name: "Emma Watson",
      role: "Family Traveler",
      content: "Perfect for planning family trips with activities everyone enjoys.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-coral-50">
      {/* Hero Section */}
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-sky-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-coral-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-amber-200/15 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>

        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-sky-400 to-coral-400 rounded-full blur-lg opacity-40 animate-pulse"></div>
              <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-full shadow-2xl border border-white/50">
                <MapPin className="w-20 h-20 text-sky-500" />
              </div>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-sky-600 via-coral-500 to-amber-500 bg-clip-text text-transparent leading-tight">
            Your{' '}
            <span className="inline-block min-w-[280px] md:min-w-[400px] text-left">
              {words[currentWord]}
            </span>
            <br />
            <span className="text-slate-700 text-4xl md:text-6xl lg:text-7xl">Mapped in Seconds</span>
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl text-slate-600 mb-16 max-w-4xl mx-auto leading-relaxed font-medium">
            AI-powered travel planning that creates personalized itineraries tailored to your interests, 
            visualized on beautiful interactive maps.
          </p>

          <div className="space-y-8">
            <div className="flex justify-center">
              <Button
                onClick={onStartPlanning}
                size="lg"
                className="bg-gradient-to-r from-sky-500 to-coral-500 hover:from-sky-600 hover:to-coral-600 text-white px-16 py-8 text-xl font-semibold rounded-full shadow-2xl transform transition-all duration-300 hover:scale-105 hover:shadow-3xl border-0"
              >
                <Sparkles className="w-7 h-7 mr-4" />
                Start Planning Your Trip
                <ArrowRight className="w-7 h-7 ml-4" />
              </Button>
            </div>

            <div className="flex justify-center items-center space-x-12 pt-8">
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="w-3 h-3 bg-sky-400 rounded-full shadow-lg"></div>
                <span className="text-base font-medium">AI-Powered</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="w-3 h-3 bg-coral-400 rounded-full shadow-lg"></div>
                <span className="text-base font-medium">Personalized</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-600">
                <div className="w-3 h-3 bg-amber-400 rounded-full shadow-lg"></div>
                <span className="text-base font-medium">Interactive Maps</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 to-coral-500 bg-clip-text text-transparent mb-6">
              Why Choose PlanMyTrip?
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto">
              Experience the future of travel planning with our intelligent features designed to make your journey unforgettable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <div className="bg-gradient-to-r from-sky-500 to-coral-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-4">{feature.title}</h3>
                <p className="text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 px-6 bg-white/50 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-coral-500 bg-clip-text text-transparent mb-2">10K+</div>
              <div className="text-slate-600 font-medium">Trips Planned</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-coral-500 bg-clip-text text-transparent mb-2">150+</div>
              <div className="text-slate-600 font-medium">Countries</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-coral-500 bg-clip-text text-transparent mb-2">98%</div>
              <div className="text-slate-600 font-medium">Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-sky-600 to-coral-500 bg-clip-text text-transparent mb-2">5min</div>
              <div className="text-slate-600 font-medium">Avg Planning Time</div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-sky-600 to-coral-500 bg-clip-text text-transparent mb-6">
              Loved by Travelers
            </h2>
            <p className="text-xl text-slate-600">
              See what our users are saying about their PlanMyTrip experience.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/50">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-amber-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 italic">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-sky-400 to-coral-400 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">{testimonial.name}</div>
                    <div className="text-slate-600 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-24 px-6 bg-gradient-to-r from-sky-500 to-coral-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready for Your Next Adventure?
          </h2>
          <p className="text-xl text-sky-100 mb-12 max-w-2xl mx-auto">
            Join thousands of travelers who trust PlanMyTrip to create their perfect itineraries.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              onClick={onStartPlanning}
              size="lg"
              className="bg-white text-sky-600 hover:bg-sky-50 px-12 py-6 text-lg font-semibold rounded-full shadow-xl transform transition-all duration-300 hover:scale-105"
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Start Planning Now
              <ArrowRight className="w-6 h-6 ml-3" />
            </Button>
            
            <div className="flex items-center text-white">
              <Users className="w-5 h-5 mr-2" />
              <span className="text-sm">Join 10,000+ happy travelers</span>
            </div>
          </div>

          <div className="mt-12 flex justify-center items-center space-x-8 text-sky-100">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Free to use</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>No signup required</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 mr-2" />
              <span>Instant results</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHero;
