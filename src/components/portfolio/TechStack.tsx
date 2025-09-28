import React, { useState, useEffect, useRef } from 'react';
import { 
  Code2, 
  Database, 
  Server, 
  Globe, 
  Layers3, 
  Cloud,
  GitBranch,
  Smartphone,
  Trophy,
  Target,
  Zap,
  TrendingUp,
  BookOpen,
  Award,
  Sparkles,
  Brain,
  Rocket,
  Timer,
  CheckCircle2,
  Star
} from "lucide-react";

const TechStack = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);
  const [visibleCards, setVisibleCards] = useState(new Set());
  const sectionRef = useRef(null);

  const categories = [
    {
      title: "Frontend Development",
      icon: Globe,
      color: "blue",
      description: "User interface & experience",
      technologies: [
        { name: "React", level: 90, years: "3+", description: "Component-based UI development" },
        { name: "TypeScript", level: 80, years: "2+", description: "Type-safe JavaScript development" },
        { name: "Tailwind CSS", level: 95, years: "2+", description: "Utility-first styling framework" },
        { name: "JavaScript ES6+", level: 95, years: "4+", description: "Modern JavaScript features" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "emerald",
      description: "Server-side architecture",
      technologies: [
        { name: "Node.js", level: 90, years: "3+", description: "JavaScript runtime environment" },
        { name: "Express.js", level: 95, years: "3+", description: "Web application framework" },
        { name: "REST APIs", level: 90, years: "3+", description: "RESTful service design" },
        { name: "Authentication", level: 85, years: "2+", description: "JWT & session management" }
      ]
    },
    {
      title: "Database & Storage",
      icon: Database,
      color: "purple",
      description: "Data management systems",
      technologies: [
        { name: "MySQL", level: 90, years: "3+", description: "Relational database design" },
        { name: "Supabase", level: 80, years: "1+", description: "Backend-as-a-Service platform" },
        { name: "Query Optimization", level: 85, years: "2+", description: "Performance tuning & indexing" },
        { name: "Database Design", level: 88, years: "3+", description: "Schema design & normalization" }
      ]
    },
    {
      title: "DevOps & Deployment",
      icon: Cloud,
      color: "orange",
      description: "Infrastructure & deployment",
      technologies: [
        { name: "Render", level: 85, years: "2+", description: "Cloud application platform" },
        { name: "Netlify", level: 85, years: "2+", description: "Frontend deployment platform" },
        { name: "Git & GitHub", level: 95, years: "4+", description: "Version control & collaboration" },
        { name: "Docker", level: 70, years: "1+", description: "Containerization technology" }
      ]
    }
  ];

  const achievements = [
    {
      title: "HackerRank Certified",
      subtitle: "Problem Solving Expert",
      description: "Algorithms & Data Structures mastery with competitive programming experience",
      icon: Trophy,
      color: "yellow",
      metric: "100+ Problems Solved",
      gradient: "from-yellow-400 to-orange-500"
    },
    {
      title: "IEEEXtreme Participant",
      subtitle: "Global Competition",
      description: "24-hour programming marathon demonstrating endurance and technical skills",
      icon: Zap,
      color: "blue",
      metric: "Top Performer",
      gradient: "from-blue-400 to-purple-500"
    },
    {
      title: "Team Player",
      subtitle: "Collaboration Experience",
      description: "Effectively collaborated across teams to deliver high-impact solutions, fostering communication and teamwork",
      icon: TrendingUp,
      color: "green",
      metric: "Cross-functional Success",
      gradient: "from-emerald-400 to-cyan-500"
    },
    {
      title: "Full-Stack Projects",
      subtitle: "Production Experience",
      description: "Built and deployed multiple applications serving hundreds of users",
      icon: Rocket,
      color: "purple",
      metric: "10+ Projects",
      gradient: "from-purple-400 to-pink-500"
    }
  ];

  const learningGoals = [
    { icon: Brain, text: "Advanced System Architecture", progress: 60 },
    { icon: Cloud, text: "AWS & Cloud Technologies", progress: 40 },
    { icon: Smartphone, text: "Mobile Development (React Native)", progress: 30 },
    { icon: Layers3, text: "Microservices & Scalability", progress: 50 }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    // Card visibility observer
    const cardObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = parseInt(entry.target.dataset.cardId);
            setVisibleCards(prev => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const cards = document.querySelectorAll('[data-card-id]');
    cards.forEach(card => cardObserver.observe(card));

    return () => {
      observer.disconnect();
      cardObserver.disconnect();
    };
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      blue: { 
        bg: "bg-blue-500/10", 
        text: "text-blue-400", 
        border: "border-blue-500/20", 
        hover: "hover:border-blue-400/50",
        gradient: "from-blue-500/20 to-cyan-500/20",
        glow: "hover:shadow-blue-500/25"
      },
      emerald: { 
        bg: "bg-emerald-500/10", 
        text: "text-emerald-400", 
        border: "border-emerald-500/20", 
        hover: "hover:border-emerald-400/50",
        gradient: "from-emerald-500/20 to-green-500/20",
        glow: "hover:shadow-emerald-500/25"
      },
      purple: { 
        bg: "bg-purple-500/10", 
        text: "text-purple-400", 
        border: "border-purple-500/20", 
        hover: "hover:border-purple-400/50",
        gradient: "from-purple-500/20 to-pink-500/20",
        glow: "hover:shadow-purple-500/25"
      },
      orange: { 
        bg: "bg-orange-500/10", 
        text: "text-orange-400", 
        border: "border-orange-500/20", 
        hover: "hover:border-orange-400/50",
        gradient: "from-orange-500/20 to-red-500/20",
        glow: "hover:shadow-orange-500/25"
      },
      yellow: { 
        bg: "bg-yellow-500/10", 
        text: "text-yellow-400", 
        border: "border-yellow-500/20", 
        hover: "hover:border-yellow-400/50",
        gradient: "from-yellow-500/20 to-orange-500/20",
        glow: "hover:shadow-yellow-500/25"
      },
      green: { 
        bg: "bg-green-500/10", 
        text: "text-green-400", 
        border: "border-green-500/20", 
        hover: "hover:border-green-400/50",
        gradient: "from-green-500/20 to-emerald-500/20",
        glow: "hover:shadow-green-500/25"
      }
    };
    return colors[color] || colors.blue;
  };

  const getLevelColor = (level) => {
    if (level >= 90) return 'from-emerald-400 to-green-500';
    if (level >= 80) return 'from-blue-400 to-cyan-500';
    if (level >= 70) return 'from-yellow-400 to-orange-500';
    return 'from-gray-400 to-slate-500';
  };

  const getLevelLabel = (level) => {
    if (level >= 90) return 'Expert';
    if (level >= 80) return 'Advanced';
    if (level >= 70) return 'Intermediate';
    return 'Learning';
  };

  return (
    <section id="techstack" ref={sectionRef} className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-10" />
        
        {/* Floating tech symbols */}
        <div className="absolute top-20 left-10 text-6xl text-blue-500/5 animate-pulse">{`</>`}</div>
        <div className="absolute top-40 right-20 text-4xl text-emerald-500/5 animate-pulse delay-1000">{ }</div>
        <div className="absolute bottom-40 left-20 text-5xl text-purple-500/5 animate-pulse delay-2000">⚡</div>
        <div className="absolute bottom-20 right-10 text-7xl text-orange-500/5 animate-pulse delay-3000">◆</div>
        
        {/* Dynamic orbs */}
        <div className="absolute top-1/3 right-1/3 w-80 h-80 bg-gradient-to-r from-emerald-500/8 to-cyan-500/8 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-purple-500/8 to-pink-500/8 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-20">
            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <Sparkles size={16} className="text-purple-400 animate-pulse" />
              <span className="text-slate-300 text-sm font-medium">Technical Expertise</span>
            </div>
            
            <h2 className={`text-4xl md:text-6xl font-bold mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <span className="text-white">Technologies &</span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Expertise
              </span>
            </h2>
            
            <p className={`text-slate-400 text-xl max-w-3xl mx-auto leading-relaxed transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              From competitive programming fundamentals to production-ready applications, 
              my technical stack is built for <span className="text-emerald-400 font-medium">performance</span>, 
              <span className="text-cyan-400 font-medium"> scalability</span>, and 
              <span className="text-purple-400 font-medium"> innovation</span>.
            </p>
            
            <div className={`w-24 h-1 bg-gradient-to-r from-emerald-400 to-purple-400 mx-auto mt-8 rounded-full transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`} />
          </div>

          {/* Enhanced Tech Categories Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-20">
            {categories.map((category, categoryIndex) => {
              const colors = getColorClasses(category.color);
              const isCardVisible = visibleCards.has(categoryIndex);
              
              return (
                <div
                  key={category.title}
                  data-card-id={categoryIndex}
                  className={`group transition-all duration-1000 ${isCardVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
                  style={{ transitionDelay: `${categoryIndex * 200}ms` }}
                  onMouseEnter={() => setActiveCategory(categoryIndex)}
                  onMouseLeave={() => setActiveCategory(null)}
                >
                  <div className={`p-8 rounded-2xl bg-slate-800/30 backdrop-blur-sm border ${colors.border} ${colors.hover} transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl ${colors.glow} relative overflow-hidden`}>
                    {/* Background gradient on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                    
                    {/* Category Header */}
                    <div className="relative z-10 mb-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`p-4 rounded-xl ${colors.bg} group-hover:scale-110 transition-transform duration-500 relative`}>
                          <category.icon className={`h-8 w-8 ${colors.text} group-hover:rotate-12 transition-transform duration-500`} />
                          
                          {activeCategory === categoryIndex && (
                            <div className="absolute inset-0 rounded-xl bg-white/10 animate-ping" />
                          )}
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold text-white group-hover:text-emerald-400 transition-colors duration-300">
                            {category.title}
                          </h3>
                          <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Technologies */}
                    <div className="relative z-10 space-y-6">
                      {category.technologies.map((tech, techIndex) => (
                        <div key={tech.name} className="group/tech">
                          <div className="flex justify-between items-center mb-3">
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors duration-300">
                                {tech.name}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text}`}>
                                {tech.years}
                              </span>
                            </div>
                            <span className={`text-sm font-bold ${colors.text}`}>
                              {getLevelLabel(tech.level)}
                            </span>
                          </div>
                          
                          <div className="mb-2">
                            <div className="h-2 bg-slate-700/50 rounded-full overflow-hidden">
                              <div 
                                className={`h-full bg-gradient-to-r ${getLevelColor(tech.level)} rounded-full transition-all duration-1000 group-hover:animate-pulse`}
                                style={{ 
                                  width: isCardVisible ? `${tech.level}%` : '0%',
                                  transitionDelay: `${(categoryIndex * 200) + (techIndex * 100)}ms`
                                }}
                              />
                            </div>
                          </div>
                          
                          <p className="text-sm text-slate-500 group-hover/tech:text-slate-400 transition-colors duration-300">
                            {tech.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Enhanced Achievements Section */}
          <div className={`mb-20 transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
                <Award className="text-yellow-400" size={32} />
                Achievements & Recognition
              </h3>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Proven track record of excellence in competitive programming and real-world applications
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => {
                const colors = getColorClasses(achievement.color);
                return (
                  <div
                    key={achievement.title}
                    className={`group p-6 rounded-2xl bg-slate-800/30 backdrop-blur-sm border ${colors.border} ${colors.hover} transition-all duration-500 hover:scale-105 hover:shadow-xl ${colors.glow} relative overflow-hidden text-center`}
                  >
                    {/* Background gradient */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${achievement.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-500`} />
                    
                    <div className="relative z-10">
                      <div className={`inline-flex p-4 rounded-full ${colors.bg} group-hover:scale-110 transition-transform duration-300 mb-4`}>
                        <achievement.icon className={`h-8 w-8 ${colors.text} group-hover:rotate-12 transition-transform duration-300`} />
                      </div>
                      
                      <h4 className="font-bold text-white text-lg mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                        {achievement.title}
                      </h4>
                      
                      <p className={`text-sm font-medium ${colors.text} mb-3`}>
                        {achievement.subtitle}
                      </p>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        {achievement.description}
                      </p>
                      
                      <div className={`inline-block px-3 py-1 rounded-full ${colors.bg} ${colors.text} text-xs font-bold`}>
                        {achievement.metric}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;