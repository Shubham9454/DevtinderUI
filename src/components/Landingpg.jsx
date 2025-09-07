import React, { useState, useEffect } from 'react';

const LandingPage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [codeAnimation, setCodeAnimation] = useState(0);

  const testimonials = [
    {
      name: "Sarah & Mike",
      role: "Frontend Dev & Backend Dev",
      story: "We matched on devTinder and built an amazing startup together!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=300&fit=crop&crop=face",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      name: "Alex Chen",
      role: "Full Stack Developer", 
      story: "Found my co-founder and best coding buddy through devTinder.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop&crop=face",
      tech: ["Python", "Django", "AWS"]
    },
    {
      name: "Jessica & David",
      role: "DevOps & Mobile Dev",
      story: "Three years of pair programming! Thanks devTinder for the perfect match.",
      image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=400&h=300&fit=crop",
      tech: ["Docker", "React Native", "GCP"]
    }
  ];

  const techStack = ["JavaScript", "Python", "React", "Node.js", "Docker", "AWS", "MongoDB"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const codeTimer = setInterval(() => {
      setCodeAnimation((prev) => (prev + 1) % techStack.length);
    }, 1500);
    return () => clearInterval(codeTimer);
  }, [techStack.length]);

  const handleSwipeDemo = () => {
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      

      {/* Hero Section */}
      <section className="pt-16 min-h-screen bg-gradient-to-br from-gray-900 via-blue-900/20 to-cyan-900/20 flex items-center relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <span className="text-cyan-400 text-sm font-mono bg-cyan-400/10 px-3 py-1 rounded-full border border-cyan-400/20">
                  &gt; git clone relationships
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  Code
                </span>
                <br />
                <span className="text-white">Together</span>
                <br />
                <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  Build Better
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Connect with fellow developers, find your coding partner, or discover your next co-founder. 
                Where passion for code meets meaningful connections.
              </p>
              <div className="mb-8">
                <div className="bg-gray-800 rounded-lg p-4 border border-gray-700 font-mono text-sm">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-gray-400 ml-2">terminal</span>
                  </div>
                  <div className="text-cyan-400">
                    $ npm install <span className="text-white animate-pulse">{techStack[codeAnimation]}</span>-connections
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all transform hover:scale-105 font-semibold text-lg shadow-xl">
                  Start Coding Together
                </button>
                <button className="border-2 border-gray-600 text-gray-300 px-8 py-4 rounded-lg hover:border-cyan-500 hover:text-cyan-400 transition-all font-semibold text-lg">
                  Explore Features
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative mx-auto w-72 h-96 bg-gray-800 rounded-3xl p-2 shadow-2xl border border-gray-700">
                <div className="w-full h-full bg-gray-900 rounded-2xl overflow-hidden relative border border-gray-800">
                  <div 
                    className={`absolute inset-2 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl border border-gray-700 transition-all duration-1000 ${
                      isAnimating ? 'transform translate-x-full rotate-12 opacity-0' : ''
                    }`}
                  >
                    <div className="relative h-2/5">
                      <img 
                        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=200&fit=crop&crop=face" 
                        alt="Developer profile"
                        className="w-full h-full object-cover rounded-t-xl"
                      />
                      <div className="absolute top-2 right-2 bg-green-500 w-3 h-3 rounded-full border-2 border-white"></div>
                    </div>
                    
                    <div className="p-4 space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-white">Alex Chen, 28</h3>
                        <p className="text-cyan-400 text-sm">Full Stack Developer</p>
                      </div>
                      
                      <div className="flex flex-wrap gap-1">
                        <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded border border-cyan-500/30">React</span>
                        <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded border border-cyan-500/30">Node.js</span>
                        <span className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded border border-cyan-500/30">TypeScript</span>
                      </div>
                      
                      <div className="text-gray-300 text-xs">
                        <div className="flex items-center space-x-1 mb-1">
                          <span>📊</span>
                          <span>500+ contributions this year</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <span>☕</span>
                          <span>Looking for startup co-founder</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4">
                    <button 
                      onClick={handleSwipeDemo}
                      className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg hover:bg-red-700 transition-colors"
                    >
                      <span className="text-white text-lg">×</span>
                    </button>
                    <button 
                      onClick={handleSwipeDemo}
                      className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center shadow-lg hover:bg-cyan-700 transition-colors"
                    >
                      <span className="text-white">💻</span>
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-10 -right-10 w-20 h-20 bg-cyan-500/20 rounded-lg flex items-center justify-center animate-pulse border border-cyan-500/30">
                <span className="text-cyan-400 text-3xl">⌨️</span>
              </div>
              <div className="absolute -bottom-10 -left-10 w-16 h-16 bg-blue-500/20 rounded-lg flex items-center justify-center animate-pulse border border-blue-500/30">
                <span className="text-blue-400 text-2xl">🔗</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Find Your Perfect Dev Match</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connect with developers based on tech stack, experience level, project interests, and coding philosophy.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-2xl bg-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white text-3xl">⚡</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Smart Tech Matching</h3>
              <p className="text-gray-400 leading-relaxed">
                Our algorithm matches you with developers who complement your skills and share your tech interests.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white text-3xl">💬</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Code & Chat</h3>
              <p className="text-gray-400 leading-relaxed">
                Share code snippets, discuss projects, and collaborate in real-time with integrated chat features.
              </p>
            </div>
            
            <div className="text-center p-8 rounded-2xl bg-gray-900 border border-gray-700 hover:border-cyan-500/50 transition-all group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                <span className="text-white text-3xl">🛡️</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">GitHub Verified</h3>
              <p className="text-gray-400 leading-relaxed">
                Connect GitHub profiles to verify coding experience and showcase your best repositories and contributions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section id="stories" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Developer Success Stories</h2>
            <p className="text-xl text-gray-300">Real connections leading to amazing collaborations and startups</p>
          </div>
          
          <div className="relative">
            <div className="bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-4xl mx-auto border border-gray-700">
              <img 
                src={testimonials[currentSlide].image}
                alt={testimonials[currentSlide].name}
                className="w-24 h-24 rounded-full mx-auto mb-6 object-cover border-4 border-cyan-500/50"
              />
              <div className="flex justify-center space-x-2 mb-4">
                {testimonials[currentSlide].tech.map((tech) => (
                  <span key={tech} className="text-xs bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full border border-cyan-500/30">
                    {tech}
                  </span>
                ))}
              </div>
              <blockquote className="text-2xl text-white mb-6 italic">
                "{testimonials[currentSlide].story}"
              </blockquote>
              <p className="text-lg font-semibold text-cyan-400">
                — {testimonials[currentSlide].name}
              </p>
              <p className="text-sm text-gray-400 mt-1">
                {testimonials[currentSlide].role}
              </p>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? 'bg-cyan-500' : 'bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-700 relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Ready to Find Your Coding Partner?
          </h2>
          <p className="text-xl mb-8 text-cyan-100">
            Join 50,000+ developers worldwide and start building amazing things together today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-semibold text-lg shadow-lg transform hover:scale-105">
              Start Matching Now
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-cyan-600 transition-all font-semibold text-lg">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <span className="text-cyan-500 mr-2 text-3xl">⌨️</span>
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  devTinder
                </div>
              </div>
              <p className="text-gray-400">
                Where developers connect, collaborate, and build the future together.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Matching</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Community</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Success Stories</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Events</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Help Center</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">API Docs</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 devTinder. All rights reserved. Made with 💙 by developers, for developers.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;