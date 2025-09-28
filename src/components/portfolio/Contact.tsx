import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Github, 
  Linkedin, 
  MapPin, 
  Coffee,
  Calendar,
  MessageCircle,
  ExternalLink,
  Send,
  Clock,
  Zap,
  Heart,
  Star,
  CheckCircle,
  ArrowRight,
  Download,
  Phone,
  Globe
} from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "mohamedyassin.zeddini@ieee.org",
      displayValue: "mohamedyassin.zeddini@ieee.org",
      description: "Best for internship applications & detailed discussions",
      action: "mailto:mohamedyassin.zeddini@ieee.org",
      color: "emerald",
      priority: "Primary",
      responseTime: "< 6 hours"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "https://linkedin.com/in/zeddini-mohamed-yassin",
      displayValue: "/in/zeddini-mohamed-yassin",
      description: "Professional networking & career opportunities",
      action: "https://linkedin.com/in/zeddini-mohamed-yassin",
      color: "blue",
      priority: "Professional",
      responseTime: "< 12 hours"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "https://github.com/ZeddiniMohammedYassin",
      displayValue: "/ZeddiniMohammedYassin",
      description: "Code portfolio & open source contributions",
      action: "https://github.com/ZeddiniMohammedYassin",
      color: "slate",
      priority: "Technical",
      responseTime: "Always Open"
    },
    {
      icon: Phone,
      title: "WhatsApp",
      value: "+216 92 945 903",
      displayValue: "+216 92 945 903",
      description: "Quick questions & immediate communication",
      action: "https://wa.me/21692945903",
      color: "green",
      priority: "Urgent",
      responseTime: "< 2 hours"
    }
  ];

  const quickFacts = [
    {
      icon: MapPin,
      title: "Location",
      value: "Tunis, Tunisia",
      description: "Available for remote & on-site",
      color: "red"
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Immediate Start",
      description: "Ready for internship opportunities",
      color: "emerald"
    },
    {
      icon: Coffee,
      title: "Work Style",
      value: "Full-Stack Focus",
      description: "Backend expertise with frontend skills",
      color: "amber"
    },
    {
      icon: Globe,
      title: "Languages",
      value: "English, French, Arabic ",
      description: "Multilingual communication",
      color: "blue"
    }
  ];

  const internshipPreferences = [
    { text: "Backend development & API design", icon: CheckCircle },
    { text: "Database optimization & architecture", icon: CheckCircle },
    { text: "Full-stack web applications", icon: CheckCircle },
    { text: "Performance monitoring & improvements", icon: CheckCircle },
    { text: "Team collaboration & code reviews", icon: CheckCircle },
    { text: "Learning new technologies & frameworks", icon: CheckCircle }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      observer.disconnect();
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      emerald: { 
        bg: "bg-emerald-500/10", 
        text: "text-emerald-400", 
        border: "border-emerald-500/20", 
        hover: "hover:border-emerald-400/50",
        glow: "hover:shadow-emerald-500/25"
      },
      blue: { 
        bg: "bg-blue-500/10", 
        text: "text-blue-400", 
        border: "border-blue-500/20", 
        hover: "hover:border-blue-400/50",
        glow: "hover:shadow-blue-500/25"
      },
      slate: { 
        bg: "bg-slate-500/10", 
        text: "text-slate-300", 
        border: "border-slate-500/20", 
        hover: "hover:border-slate-400/50",
        glow: "hover:shadow-slate-500/25"
      },
      green: { 
        bg: "bg-green-500/10", 
        text: "text-green-400", 
        border: "border-green-500/20", 
        hover: "hover:border-green-400/50",
        glow: "hover:shadow-green-500/25"
      },
      red: { 
        bg: "bg-red-500/10", 
        text: "text-red-400", 
        border: "border-red-500/20", 
        hover: "hover:border-red-400/50",
        glow: "hover:shadow-red-500/25"
      },
      amber: { 
        bg: "bg-amber-500/10", 
        text: "text-amber-400", 
        border: "border-amber-500/20", 
        hover: "hover:border-amber-400/50",
        glow: "hover:shadow-amber-500/25"
      }
    };
    return colors[color] || colors.emerald;
  };

  return (
    <section id="contact" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-800 via-slate-900 to-black relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-10" />
        
        {/* Dynamic floating orbs */}
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Interactive cursor glow */}
        <div 
          className="absolute w-64 h-64 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-2xl pointer-events-none transition-transform duration-300 ease-out"
          style={{
            transform: `translate(${mousePosition.x - 128}px, ${mousePosition.y - 128}px)`
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Heart size={16} className="text-pink-400 animate-pulse" />
              <span className="text-slate-300 text-sm font-medium">Let's Connect</span>
            </div>
            
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-white">Ready to Start My</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Internship Journey?
              </span>
            </h2>
            
            <p className={`text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              I'm actively seeking internship opportunities where I can contribute my technical skills, 
              learn from experienced developers, and help build amazing products. Let's discuss how I can add value to your team!
            </p>
            
            <div className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-8 rounded-full transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Enhanced Contact Methods */}
            <div className={`space-y-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <MessageCircle className="text-emerald-400" size={28} />
                  Get In Touch
                </h3>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const colors = getColorClasses(method.color);
                    return (
                      <div
                        key={method.title}
                        className={`group p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border ${colors.border} ${colors.hover} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${colors.glow} cursor-pointer relative overflow-hidden`}
                        onClick={() => window.open(method.action, '_blank')}
                        onMouseEnter={() => setHoveredCard(index)}
                        onMouseLeave={() => setHoveredCard(null)}
                      >
                        {/* Background gradient on hover */}
                        <div className={`absolute inset-0 bg-gradient-to-r ${method.color === 'emerald' ? 'from-emerald-500/5 to-cyan-500/5' : method.color === 'blue' ? 'from-blue-500/5 to-purple-500/5' : 'from-slate-500/5 to-gray-500/5'} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                        
                        <div className="relative z-10">
                          <div className="flex items-start gap-5">
                            <div className={`p-4 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform duration-500 relative`}>
                              <method.icon className={`h-7 w-7 ${colors.text} group-hover:rotate-12 transition-transform duration-500`} />
                              
                              {hoveredCard === index && (
                                <div className="absolute inset-0 rounded-xl bg-white/10 animate-ping" />
                              )}
                            </div>
                            
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                  <h4 className="font-bold text-xl text-white group-hover:text-emerald-400 transition-colors duration-300">
                                    {method.title}
                                  </h4>
                                  <div className={`px-2 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                                    {method.priority}
                                  </div>
                                </div>
                                <ExternalLink className="h-5 w-5 text-slate-500 group-hover:text-emerald-400 group-hover:scale-110 transition-all duration-300" />
                              </div>
                              
                              <p className={`font-mono text-sm mb-2 ${colors.text} group-hover:text-white transition-colors duration-300`}>
                                {method.displayValue}
                              </p>
                              
                              <p className="text-slate-400 text-sm mb-3 leading-relaxed">
                                {method.description}
                              </p>
                              
                              <div className="flex items-center gap-2">
                                <Clock size={14} className="text-slate-500" />
                                <span className="text-xs text-slate-500">Response time: {method.responseTime}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Action CTA */}
              <div className="relative">
                <div className="bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/20 rounded-2xl p-8 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-transparent to-cyan-500/5" />
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <Zap className="h-7 w-7 text-emerald-400 animate-pulse" />
                      <h4 className="font-bold text-xl text-white">
                        Ready for a Quick Chat?
                      </h4>
                    </div>
                    
                    <p className="text-slate-300 mb-6 leading-relaxed">
                      I'm excited to discuss internship opportunities, share my portfolio, 
                      or answer any questions about my technical background and experience.
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        size="lg"
                        className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex-1"
                        onClick={() => window.open('mailto:zeddini.yessin@example.com?subject=Internship Opportunity', '_blank')}
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Send Email
                        <ArrowRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                      
                      <Button 
                        variant="outline" 
                        size="lg"
                        className="group bg-slate-800/50 backdrop-blur-sm border-slate-600/50 text-slate-300 hover:bg-slate-800/70 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-300 hover:scale-105"
                        onClick={() => window.open('resume.pdf', '_blank')}
                      >
                        <Download className="h-4 w-4 mr-2 group-hover:translate-y-1 transition-transform duration-300" />
                        <a 
                            href="/resume.pdf" 
                            download 
                        >
                            Download CV
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Enhanced Quick Facts & Preferences */}
            <div className={`space-y-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {/* Personal Details */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                  <Star className="text-yellow-400" size={28} />
                  Quick Facts
                </h3>
                <div className="grid gap-6">
                  {quickFacts.map((fact, index) => {
                    const colors = getColorClasses(fact.color);
                    return (
                      <div
                        key={fact.title}
                        className={`group p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border ${colors.border} ${colors.hover} transition-all duration-500 hover:scale-[1.02] hover:shadow-lg`}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform duration-300`}>
                            <fact.icon className={`h-6 w-6 ${colors.text}`} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                              {fact.title}
                            </h4>
                            <p className={`font-medium mb-2 ${colors.text}`}>
                              {fact.value}
                            </p>
                            <p className="text-slate-400 text-sm">
                              {fact.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Internship Preferences */}
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8">
                <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                  <CheckCircle className="text-emerald-400" size={24} />
                  What I'm Looking For
                </h4>
                <div className="space-y-4">
                  {internshipPreferences.map((pref, index) => (
                    <div key={index} className="flex items-start gap-3 group">
                      <pref.icon className="h-5 w-5 text-emerald-400 mt-0.5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-slate-300 group-hover:text-white transition-colors duration-300">
                        {pref.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>  
          </div>

          {/* Enhanced Footer CTA */}
          <div className={`text-center mt-20 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="bg-gradient-to-r from-slate-800/50 to-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-cyan-500/5 to-blue-500/5 animate-pulse" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/20 border border-emerald-500/30 mb-6">
                  <Heart size={16} className="text-emerald-400" />
                  <span className="text-emerald-400 text-sm font-medium">Thank you for your time!</span>
                </div>
                
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Let's Build Something Amazing
                  <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent"> Together</span>
                </h3>
                
                <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
                  I'm excited about the opportunity to contribute to your team, learn from experienced developers, 
                  and help create impactful solutions. Ready to start this journey!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;