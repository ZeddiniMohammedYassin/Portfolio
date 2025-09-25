import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown, Code, Database, Globe, ArrowRight, Download } from "lucide-react";

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const skills = [
    { icon: Code, label: "Frontend", delay: "0ms" },
    { icon: Database, label: "Backend", delay: "100ms" },
    { icon: Globe, label: "Full Stack", delay: "200ms" }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
        
        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Interactive Cursor Glow */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl pointer-events-none transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x - 192}px, ${mousePosition.y - 192}px)`
          }}
        />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-5xl mx-auto">
          {/* Animated Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
            <span className="text-slate-300 text-sm font-medium">Available for new opportunities</span>
          </div>
          
          {/* Main Heading with Stagger Animation */}
          <div className="mb-6">
            <div className={`transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-emerald-400 font-medium text-lg mb-2 block">Hello, I'm</span>
            </div>
            
            <h1 className={`text-5xl md:text-7xl font-bold mb-4 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
                Zeddini Mohamed
              </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Yessin
              </span>
            </h1>
          </div>
          
          {/* Role with Enhanced Typography */}
          <div className={`mb-6 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <h2 className="text-2xl md:text-4xl text-slate-300 font-light mb-2">
              Fullstack Web Developer
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
          </div>
          
          {/* Enhanced Description */}
          <p className={`text-xl text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            Backend-focused developer passionate about building scalable web applications. 
            <span className="text-emerald-400 font-medium"> Competitive programming enthusiast</span> with 
            expertise in transforming complex business requirements into efficient, maintainable solutions.
          </p>
          
          {/* Skills Pills */}
          <div className={`flex justify-center gap-4 mb-12 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {skills.map(({ icon: Icon, label, delay }, index) => (
              <div 
                key={label}
                className="group flex items-center gap-2 px-4 py-2 bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-full hover:border-emerald-400/50 hover:bg-slate-800/50 transition-all duration-300 hover:scale-105"
                style={{ animationDelay: delay }}
              >
                <Icon size={16} className="text-emerald-400 group-hover:rotate-12 transition-transform duration-300" />
                <span className="text-slate-300 text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
          
          {/* Enhanced CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <Button 
              size="lg" 
              className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 px-8"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group bg-slate-800/30 backdrop-blur-sm border-slate-600/50 text-slate-300 hover:bg-slate-800/50 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-300 hover:scale-105 px-8"
              onClick={() => scrollToSection('contact')}
            >
              Get In Touch
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="group bg-slate-800/30 backdrop-blur-sm border-slate-600/50 text-slate-300 hover:bg-slate-800/50 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300 hover:scale-105 px-8"
            >
              <Download size={16} className="mr-2 group-hover:translate-y-1 transition-transform duration-300" />
              Resume
            </Button>
          </div>
          
          {/* Enhanced Social Links */}
          <div className={`flex justify-center gap-4 mb-16 transition-all duration-1000 delay-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {[
              { icon: Github, href: "https://github.com", color: "hover:text-white hover:bg-gray-800" },
              { icon: Linkedin, href: "https://linkedin.com", color: "hover:text-blue-400 hover:bg-blue-500/10" },
              { icon: Mail, href: "mailto:your.email@example.com", color: "hover:text-emerald-400 hover:bg-emerald-500/10" }
            ].map(({ icon: Icon, href, color }, index) => (
              <a 
                key={index}
                href={href}
                target={href.startsWith('http') ? "_blank" : undefined}
                rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                className={`group relative p-4 rounded-full bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 text-slate-400 transition-all duration-300 hover:scale-110 hover:shadow-lg ${color} hover:border-transparent`}
              >
                <Icon size={20} className="group-hover:scale-110 transition-transform duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/0 to-cyan-500/0 group-hover:from-emerald-500/10 group-hover:to-cyan-500/10 transition-all duration-300" />
              </a>
            ))}
          </div>
        </div>
        
        {/* Enhanced Scroll Indicator */}
        <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <button 
            onClick={() => scrollToSection('about')}
            className="group flex flex-col items-center gap-2 text-slate-400 hover:text-emerald-400 transition-all duration-300"
          >
            <span className="text-xs font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">Scroll Down</span>
            <div className="p-2 rounded-full border border-slate-600/50 group-hover:border-emerald-400/50 transition-all duration-300 group-hover:scale-110">
              <ChevronDown size={20} className="animate-bounce group-hover:animate-pulse" />
            </div>
          </button>
        </div>
        
        {/* Floating Stats Cards */}
        <div className="absolute top-1/2 left-8 transform -translate-y-1/2 hidden xl:block">
          <div className={`bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-lg p-4 transition-all duration-1000 delay-1600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="text-emerald-400 text-2xl font-bold">3+</div>
            <div className="text-slate-400 text-sm">Years Experience</div>
          </div>
        </div>
        
        <div className="absolute top-1/2 right-8 transform -translate-y-1/2 hidden xl:block">
          <div className={`bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-lg p-4 transition-all duration-1000 delay-1800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="text-cyan-400 text-2xl font-bold">50+</div>
            <div className="text-slate-400 text-sm">Projects Built</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;