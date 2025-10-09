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
        { name: "React", level: 80, years: "3+", description: "Component-based UI development" },
        { name: "TypeScript", level: 80, years: "2+", description: "Type-safe JavaScript development" },
        { name: "Tailwind CSS", level: 80, years: "2+", description: "Utility-first styling framework" },
        { name: "JavaScript ES6+", level: 80, years: "4+", description: "Modern JavaScript features" }
      ]
    },
    {
      title: "Backend Development",
      icon: Server,
      color: "emerald",
      description: "Server-side architecture",
      technologies: [
        { name: "Node.js", level: 80, years: "3+", description: "JavaScript runtime environment" },
        { name: "Express.js", level: 80, years: "3+", description: "Web application framework" },
        { name: "REST APIs", level: 80, years: "3+", description: "RESTful service design" },
        { name: "Authentication", level: 80, years: "2+", description: "JWT & session management" }
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

  // Removed learningGoals and progress bar requirements

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
            const cardId = parseInt((entry.target as HTMLElement).dataset.cardId!);
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

};

export default TechStack;