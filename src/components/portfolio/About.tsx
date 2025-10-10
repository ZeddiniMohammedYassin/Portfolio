import React, { useState, useEffect, useRef } from 'react';
import { Code2, Trophy, Users, Zap, Target, Brain, Rocket, Award, BookOpen, Coffee, Calendar, MapPin } from "lucide-react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCard, setActiveCard] = useState(null);
  const sectionRef = useRef(null);

  const highlights = [
    {
      icon: Code2,
      title: "Backend Developement",
      description: "Hands-on experience in Node.js, Express, and database optimization with focus on scalable architecture",
      color: "blue",
      
    },
    {
      icon: Trophy,
      title: "Problem Solver",
      description: "HackerRank certified, IEEEXtreme participant with algorithmic thinking approach",
      color: "yellow",
      stats: "100+ Problems"
    },
    {
      icon: Users,
      title: "Team Player",
      description: "Collaborative mindset with experience in agile development and code reviews",
      color: "green",
      stats: "5+ Projects"
    },
    
  ];

  const quickFacts = [
    { icon: MapPin, label: "Location", value: "Tunis, Tunisia" },
    { icon: Calendar, label: "Availability", value: "Immediate" },
    { icon: Coffee, label: "Preferred Stack", value: "Node.js + React" },
    { icon: BookOpen, label: "Currently Learning", value: "DevOps & Cloud" }
  ];

  const skills = {
    "Backend": ["Node.js", "Express.js", "MySQL", "REST APIs", "Authentication"],
    "Frontend": ["React", "TypeScript", "Tailwind CSS", "Responsive Design"],
    "Tools": ["Git", "Docker", "Postman", "VS Code", "Linux"],
    "Concepts": ["MVC Architecture", "Database Design", "API Development", "Testing"]
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      blue: { bg: "bg-blue-500/10", text: "text-blue-400", border: "border-blue-500/20", hover: "hover:border-blue-400/50" },
      yellow: { bg: "bg-yellow-500/10", text: "text-yellow-400", border: "border-yellow-500/20", hover: "hover:border-yellow-400/50" },
      green: { bg: "bg-emerald-500/10", text: "text-emerald-400", border: "border-emerald-500/20", hover: "hover:border-emerald-400/50" },
      purple: { bg: "bg-purple-500/10", text: "text-purple-400", border: "border-purple-500/20", hover: "hover:border-purple-400/50" }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-10" />
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-gradient-to-r from-emerald-500/5 to-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-16">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Target size={16} className="text-emerald-400" />
              <span className="text-slate-300 text-sm font-medium">About Me</span>
            </div>
            
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-white">Ready to </span>
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Contribute & Learn
              </span>
            </h2>
            
            <p className={`text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              Backend-focused developer with competitive programming mindset, 
              seeking internship opportunities to apply my skills in 
              <span className="text-emerald-400 font-medium"> real-world projects</span> and 
              <span className="text-cyan-400 font-medium"> contribute to innovative teams</span>.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Story & Quick Facts */}
            <div className={`space-y-8 transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
              {/* Professional Summary */}
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-cyan-400" />
                
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Brain className="text-emerald-400" size={24} />
                  Professional Summary
                </h3>
                
                <div className="space-y-4 text-slate-300">
                  <p className="leading-relaxed">
                    I am a  
                    <span className="text-emerald-400 font-semibold"> third-year Computer Science student
                      </span> with a strong interest in software development and problem solving.<br /> <br /> My background in  
                    <span className="text-cyan-400 font-semibold"> competitive programming </span>
                    has taught me how to design 
                    <span className="text-cyan-400 font-semibold"> effective solutions </span>
                    , and my academic and personal projects have given me the chance to apply these skills in real scenarios.
<br /> <br /> I have worked on full-stack applications, with a focus on 
                    <span className="text-cyan-400 font-semibold"> backend performance </span>
                    and the design of robust database systems. Through these projects, I have developed proficiency in
                    <span className="text-white font-medium"> Node.js, Express, and relational databases.</span> <br /> <br /> I am looking forward to an internship where I can work on meaningful projects and continue to grow my technical and professional skills.
                  </p>
                  {/* Back */}
                  <p className="leading-relaxed">
                    <span className="text-white font-medium"></span>  
                    <span className="text-purple-400 font-semibold"></span> 
                  </p>
                  
                  <div className="flex items-center gap-2 mt-6 p-4 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 rounded-lg border border-emerald-500/20">
                    <Rocket className="text-emerald-400" size={20} />
                    <span className="text-emerald-400 font-medium text-sm">
                      Aiming to contribute to innovative projects and grow alongside experienced developers.
                    </span>
                  </div>
                </div>
              </div>

              
            </div>

            {/* Highlights & Skills */}
            <div className={`space-y-8 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
              {/* Core Strengths */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                  <Zap className="text-purple-400" size={24} />
                  Core Strengths
                </h3>
                <div className="grid gap-4">
                  {highlights.map((item, index) => {
                    const colors = getColorClasses(item.color);
                    return (
                      <div
                        key={index}
                        className={`group p-6 rounded-xl bg-slate-800/30 backdrop-blur-sm border ${colors.border} ${colors.hover} transition-all duration-300 hover:scale-[1.02] hover:shadow-lg cursor-pointer`}
                        onMouseEnter={() => setActiveCard(index)}
                        onMouseLeave={() => setActiveCard(null)}
                      >
                        <div className="flex items-start gap-4">
                          <div className={`p-3 rounded-lg ${colors.bg} group-hover:scale-110 transition-transform duration-300`}>
                            <item.icon className={`h-6 w-6 ${colors.text}`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                {item.title}
                              </h4>
                              {/* Remove blue placeholder/dot for Backend Developement */}
                              {item.stats && (
                                <span className={`text-xs font-bold px-2 py-1 rounded-full ${colors.bg} ${colors.text}`}>
                                  {item.stats}
                                </span>
                              )}
                            </div>
                            <p className="text-slate-400 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </div>
                        </div>
                        
                        {activeCard === index && (
                          <div className="mt-4 pt-4 border-t border-slate-700/50">
                            <div className="text-xs text-slate-500">
                              Ready for internship challenges! 🚀
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Technical Skills */}
              <div className="bg-slate-800/20 backdrop-blur-sm border border-slate-700/30 rounded-2xl p-6">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                  <Code2 className="text-blue-400" size={20} />
                  Technical Skills
                </h4>
                <div className="space-y-4">
                  {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category}>
                      <h5 className="text-sm font-medium text-slate-300 mb-2">{category}</h5>
                      <div className="flex flex-wrap gap-2">
                        {skillList.map((skill, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 text-xs rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50 hover:border-emerald-400/50 hover:text-emerald-400 hover:bg-emerald-500/10 transition-all duration-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;