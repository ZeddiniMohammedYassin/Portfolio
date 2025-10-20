import React, { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Users, Workflow, ChevronRight, Star, TrendingUp, Zap, Award, Eye, Code2, ZoomIn } from "lucide-react";
import InTurn0 from "@/assets/InTurn/0.webp";
import InTurn1 from "@/assets/InTurn/1.png";
import InTurn2 from "@/assets/InTurn/2.png";
import InTurn3 from "@/assets/InTurn/3.png";
import InTurn4 from "@/assets/InTurn/4.png";
import InTurn5 from "@/assets/InTurn/5.png";
import InTurn6 from "@/assets/InTurn/6.png";
import InTurn7 from "@/assets/InTurn/7.png";
import InTurn8 from "@/assets/InTurn/8.png";
import InTurn9 from "@/assets/InTurn/9.png";
import Warcha0 from "@/assets/Warcha/0.png";
import Warcha1 from "@/assets/Warcha/1.png";
import Warcha2 from "@/assets/Warcha/2.png";
import Warcha3 from "@/assets/Warcha/3.png";
import Warcha4 from "@/assets/Warcha/4.png";
import Warcha5 from "@/assets/Warcha/5.png";
import Warcha6 from "@/assets/Warcha/6.png";
import Warcha7 from "@/assets/Warcha/7.png";
import Warcha8 from "@/assets/Warcha/8.png";
import Warcha9 from "@/assets/Warcha/9.png";
import Warcha10 from "@/assets/Warcha/10.png";
import Warcha11 from "@/assets/Warcha/11.png";
import Warcha12 from "@/assets/Warcha/12.png";
import Warcha13 from "@/assets/Warcha/13.png";
import Warcha14 from "@/assets/Warcha/14.png";
import useEmblaCarousel from 'embla-carousel-react';

// Small Embla-based carousel for project images
interface ProjectCarouselProps {
  images: { src: string; alt?: string }[];
  onImageClick?: (img: { src: string; alt?: string }, index: number) => void;
}

const ProjectCarousel: React.FC<ProjectCarouselProps> = ({ images, onImageClick }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: 'center' });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div className="h-80 lg:h-full relative">
      {/* Framed gallery similar to Certifications.tsx */}
      <div className="overflow-hidden rounded-2xl border border-slate-700/30 bg-slate-800/20 backdrop-blur-sm shadow-2xl shadow-emerald-500/8" ref={emblaRef}>
        <div className="flex">
          {images.map((img, idx) => (
            <div key={idx} className="flex-[0_0_100%] min-w-0 cursor-pointer p-4 md:p-8" onClick={() => onImageClick?.(img, idx)}>
              <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-900/40 to-slate-800/10 rounded-xl overflow-hidden">
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-105"
                />

                {/* subtle overlay for depth */}
                <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-b from-transparent to-slate-900/30" />

                {/* Floating label (optional on project images) */}
                {img.alt && (
                  <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-slate-100 text-xs font-medium">
                    {img.alt}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <button 
        aria-label="Previous" 
        onClick={scrollPrev} 
        className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors z-10"
      >
        <ChevronRight className="-scale-x-100 h-4 w-4" />
      </button>
      <button 
        aria-label="Next" 
        onClick={scrollNext} 
        className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center transition-colors z-10"
      >
        <ChevronRight className="h-4 w-4" />
      </button>

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="flex justify-center gap-2 absolute bottom-3 left-1/2 -translate-x-1/2 z-10">
          {images.map((_, idx) => (
            <button 
              key={idx} 
              onClick={() => scrollTo(idx)} 
              className={`${idx === selectedIndex ? 'w-8 bg-white' : 'w-2 bg-white/40'} h-2 rounded-full transition-all`} 
              aria-label={`Go to slide ${idx + 1}`} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const [activeProject, setActiveProject] = useState(null);
  const [zoomedImage, setZoomedImage] = useState(null); // {src, alt, projectIndex, imageIndex}
  const projectRefs = useRef([]);
  const sectionRef = useRef(null);
  const projects = useMemo(() => [
    {
      id: 2,
      title: "Warcha SaaS",
      subtitle: "Smart Repair Shop Platform",
      description: "Revolutionary SaaS platform for repair shops featuring drag-and-drop workflow editor, QR tracking system, automated invoicing, and backend process automation with Supabase integration.",
      longDescription: "Led backend development for a multi-tenant SaaS platform serving 100+ repair shops. Implemented complex workflow automation, integrated payment processing, and built a sophisticated QR-based tracking system that reduced service time by 40%.",
      tags: ["SaaS", "Automation", "Fullstack"],
      techStack: ["React", "TypeScript", "Supabase", "Node.js", "QR Integration"],
      features: [
        "Drag-and-drop workflow builder",
        "QR code tracking for repair items",
        "Automated invoice generation",
        "Multi-tenant architecture",
        "Real-time collaboration tools"
      ],
      metrics: {
        clients: "Capstone Project",
        efficiency: "Built End-to-End",
        automation: "Production Ready"
      },
      metricLabels: {
        clients: "Built During Internship",
        efficiency: "Full SaaS",
        automation: "Stable and Hosted for Use"
      },
      icon: Workflow,
      primaryColor: "from-emerald-500 to-teal-600",
      accentColor: "emerald",
      github: "https://github.com",
      live: "https://warcha.redig.io",
      status: "Live",
      year: "2025",
      images: [
        { src: Warcha0, alt: "Warcha Platform 1" },
        { src: Warcha1, alt: "Warcha Platform 2" },
        { src: Warcha2, alt: "Warcha Platform 3" },
        { src: Warcha3, alt: "Warcha Platform 4" },
        { src: Warcha4, alt: "Warcha Platform 5" },
        { src: Warcha5, alt: "Warcha Platform 6" },
        { src: Warcha6, alt: "Warcha Platform 7" },
        { src: Warcha7, alt: "Warcha Platform 8" },
        { src: Warcha8, alt: "Warcha Platform 9" },
        { src: Warcha9, alt: "Warcha Platform 10" },
        { src: Warcha10, alt: "Warcha Platform 11" },
        { src: Warcha11, alt: "Warcha Platform 12" },
        { src: Warcha12, alt: "Warcha Platform 13" },
        { src: Warcha13, alt: "Warcha Platform 14" },
        { src: Warcha14, alt: "Warcha Platform 15" },
      ]
    },
    {
      id: 1,
      title: "Inturn Platform",
      subtitle: "Enterprise Internship Management",
      description: "Comprehensive platform for managing internship programs with REST API backend, MVC architecture, and MySQL optimization. Features include application tracking, mentor assignment, and performance evaluation.",
      longDescription: "Built a full-scale internship management system serving 500+ students and 50+ mentors. Implemented complex database relationships, optimized queries for 60% faster load times, and created a robust REST API with proper authentication and authorization.",
      tags: ["Backend", "Fullstack", "Database"],
      techStack: ["Node.js", "Express.js", "MySQL", "React", "REST API"],
      features: [
        "Student application portal with document upload",
        "Mentor dashboard for intern evaluation",
        "Admin panel for program management",
        "Real-time notifications and updates",
        "Advanced reporting and analytics"
      ],
      metrics: {
        users: "2 Months",
        performance: "3+",
        uptime: "100%"
      },
      metricLabels: {
        users: "Development Timeline",
        performance: "Internship Programs Simulated",
        uptime: "Functional Prototype"
      },
      icon: Users,
      primaryColor: "from-blue-500 to-purple-600",
      accentColor: "blue",
      github: "https://github.com/ZeddiniMohammedYassin/InTurn-Internship-Matching-Website",
      live: "https://demo.com",
      status: "Production",
      year: "2024",
      images: [
        { src: InTurn0, alt: "Inturn Platform 1" },
        { src: InTurn1, alt: "Inturn Platform 2" },
        { src: InTurn2, alt: "Inturn Platform 3" },
        { src: InTurn3, alt: "Inturn Platform 4" },
        { src: InTurn4, alt: "Inturn Platform 5" },
        { src: InTurn5, alt: "Inturn Platform 6" },
        { src: InTurn6, alt: "Inturn Platform 7" },
        { src: InTurn7, alt: "Inturn Platform 8" },
        { src: InTurn8, alt: "Inturn Platform 9" },
        { src: InTurn9, alt: "Inturn Platform 10" },
      ]
    }
  ], []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        if (zoomedImage.imageIndex > 0) {
          const prevImg = projects[zoomedImage.projectIndex].images[zoomedImage.imageIndex - 1];
          setZoomedImage({ ...prevImg, projectIndex: zoomedImage.projectIndex, imageIndex: zoomedImage.imageIndex - 1 });
        }
      } else if (e.key === 'ArrowRight') {
        if (zoomedImage.imageIndex < projects[zoomedImage.projectIndex].images.length - 1) {
          const nextImg = projects[zoomedImage.projectIndex].images[zoomedImage.imageIndex + 1];
          setZoomedImage({ ...nextImg, projectIndex: zoomedImage.projectIndex, imageIndex: zoomedImage.imageIndex + 1 });
        }
      } else if (e.key === 'Escape') {
        setZoomedImage(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [zoomedImage, projects]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: '50px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const pid = target.dataset?.projectId;
          if (pid) {
            const projectId = parseInt(pid);
            setVisibleProjects(prev => new Set([...prev, projectId]));
          }
        }
      });
    }, observerOptions);

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const getColorClasses = (color) => {
    const colors = {
      blue: {
        text: 'text-blue-400',
        bg: 'bg-blue-500/10',
        border: 'border-blue-500/20',
        hover: 'hover:border-blue-400/50 hover:bg-blue-500/20',
        gradient: 'from-blue-500/20 to-purple-500/20'
      },
      emerald: {
        text: 'text-emerald-400',
        bg: 'bg-emerald-500/10',
        border: 'border-emerald-500/20',
        hover: 'hover:border-emerald-400/50 hover:bg-emerald-500/20',
        gradient: 'from-emerald-500/20 to-teal-500/20'
      }
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="projects" ref={sectionRef} className="py-12 md:py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Image Zoom Modal with navigation */}
      {zoomedImage && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4" onClick={() => setZoomedImage(null)}>
          <div className="relative flex items-center" onClick={e => e.stopPropagation()}>
            {/* Left Arrow: only show if not first image */}
            {zoomedImage.imageIndex > 0 && (
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/60 rounded-full p-2 md:p-3 hover:bg-black/80 transition z-10 -ml-8 md:-ml-12"
                onClick={() => {
                  const { projectIndex, imageIndex } = zoomedImage;
                  if (projectIndex !== undefined && imageIndex > 0) {
                    const prevImg = projects[projectIndex].images[imageIndex - 1];
                    setZoomedImage({ ...prevImg, projectIndex, imageIndex: imageIndex - 1 });
                  }
                }}
                aria-label="Previous image"
              >
                <span className="text-white text-2xl md:text-3xl">&#8592;</span>
              </button>
            )}
            {/* Image */}
            <img src={zoomedImage.src} alt={zoomedImage.alt} className="max-w-[90vw] max-h-[90vh] rounded-xl md:rounded-2xl shadow-2xl border-2 md:border-4 border-white" />
            {/* Right Arrow: only show if not last image */}
            {zoomedImage.imageIndex < projects[zoomedImage.projectIndex].images.length - 1 && (
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/60 rounded-full p-2 md:p-3 hover:bg-black/80 transition z-10 -mr-8 md:-mr-12"
                onClick={() => {
                  const { projectIndex, imageIndex } = zoomedImage;
                  if (projectIndex !== undefined && imageIndex < projects[projectIndex].images.length - 1) {
                    const nextImg = projects[projectIndex].images[imageIndex + 1];
                    setZoomedImage({ ...nextImg, projectIndex, imageIndex: imageIndex + 1 });
                  }
                }}
                aria-label="Next image"
              >
                <span className="text-white text-2xl md:text-3xl">&#8594;</span>
              </button>
            )}
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 bg-black/60 text-white rounded-full p-2 hover:bg-black/80 transition"
              onClick={() => setZoomedImage(null)}
              aria-label="Close"
            >
              &#10005;
            </button>
          </div>
        </div>
      )}
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-10" />
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Section Header */}
          <div className="text-center mb-12 md:mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-6">
              <Star size={16} className="text-yellow-400" />
              <span className="text-slate-300 text-sm font-medium">Featured Projects</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4 md:mb-6 px-4">
              <span className="text-white">Building </span>
              <br />
              <span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Real Applications
              </span>
            </h2>

            <p className="text-slate-400 text-base sm:text-lg md:text-xl max-w-3xl mx-auto leading-relaxed px-4">
              From enterprise platforms to SaaS solutions, each project showcases
              my commitment to <span className="text-emerald-400 font-medium">performance</span>,
              <span className="text-cyan-400 font-medium"> scalability</span>, and
              <span className="text-blue-400 font-medium"> user experience</span>.
            </p>

            <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto mt-6 md:mt-8 rounded-full" />
          </div>

          {/* Enhanced Projects Grid */}
          <div className="space-y-12 md:space-y-20">
            {projects.map((project, index) => {
              const isVisible = visibleProjects.has(project.id);
              const isReversed = index % 2 === 1;
              const colors = getColorClasses(project.accentColor);

              return (
                <div
                  key={project.id}
                  ref={(el) => (projectRefs.current[index] = el)}
                  data-project-id={project.id}
                  className={`group relative transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                    }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                  onMouseEnter={() => setActiveProject(project.id)}
                  onMouseLeave={() => setActiveProject(null)}
                >
                  {/* Project Card */}
                  <div className={`bg-slate-800/30 backdrop-blur-sm border border-slate-700/30 rounded-2xl overflow-hidden hover:border-slate-600/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:shadow-${project.accentColor}-500/10 ${isReversed ? 'lg:flex-row-reverse' : ''
                    } lg:flex`}>

                    {/* Visual Section */}
                    <div className="lg:w-1/2 relative flex items-center">
                      {project.images && project.images.length > 0 ? (
                        /* Use Embla carousel for projects with images */
                        <div className="w-full mt-6 lg:mt-0">
                          <ProjectCarousel
                            images={project.images}
                            onImageClick={(img, imageIndex) => setZoomedImage({ ...img, projectIndex: index, imageIndex })}
                          />
                        </div>
                      ) : (
                        /* Other Projects with Original Design */
                        <div className={`h-80 lg:h-full bg-gradient-to-br ${project.primaryColor} relative overflow-hidden`}>
                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-20">
                            <div className="grid grid-cols-12 grid-rows-12 h-full w-full gap-1 p-4">
                              {Array.from({ length: 144 }).map((_, i) => (
                                <div
                                  key={i}
                                  className="bg-white rounded-sm opacity-30 animate-pulse"
                                  style={{
                                    animationDelay: `${i * 20}ms`,
                                    animationDuration: '3s'
                                  }}
                                />
                              ))}
                            </div>
                          </div>

                          {/* Floating Elements */}
                          <div className="absolute top-4 right-4 flex gap-2">
                            <div className={`px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium ${colors.text}`}>
                              {project.status}
                            </div>
                            <div className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-sm text-white text-xs font-medium">
                              {project.year}
                            </div>
                          </div>

                          {/* Main Icon */}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="text-center">
                              <div className="relative">
                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-8 mb-6 inline-flex group-hover:scale-110 transition-transform duration-500">
                                  <project.icon className="h-20 w-20 text-white group-hover:rotate-12 transition-transform duration-500" />
                                </div>
                                {activeProject === project.id && (
                                  <div className="absolute inset-0 bg-white/10 rounded-full animate-ping" />
                                )}
                              </div>
                              <h3 className="text-white font-bold text-2xl mb-2">{project.title}</h3>
                              <p className="text-white/80 text-lg">{project.subtitle}</p>
                            </div>
                          </div>

                          {/* Corner Decoration */}
                          <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 transform rotate-45 -translate-x-10 translate-y-10" />
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="lg:w-1/2 p-6 sm:p-8 lg:p-12">
                      <div className="space-y-6 md:space-y-8">
                        {/* Header */}
                        <div>
                          <div className="flex flex-col sm:flex-row items-start justify-between mb-4 gap-3">
                            <div className="flex-1">
                              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors duration-300">
                                {project.title}
                              </h3>
                              <p className="text-slate-300 text-base sm:text-lg">{project.subtitle}</p>
                            </div>
                            <div className="flex gap-2 flex-wrap">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className={`px-3 py-1 rounded-full text-xs font-medium ${colors.bg} ${colors.text} ${colors.border} border`}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                          <p className="text-slate-400 leading-relaxed text-base sm:text-lg">
                            {project.description}
                          </p>
                        </div>

                        {/* Enhanced Metrics */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
                          {Object.entries(project.metrics).map(([key, value]) => (
                            <div key={key} className={`flex flex-col items-center justify-center text-center p-3 sm:p-4 lg:p-3 rounded-lg min-h-[90px] lg:min-h-[80px] min-w-[10rem] lg:min-w-[10rem] ${colors.bg} ${colors.border} border group-hover:scale-105 transition-transform duration-300`}>
                              <div className={`font-semibold text-sm sm:text-base lg:text-sm mb-1 ${colors.text} leading-tight`} style={{wordBreak: 'normal', hyphens: 'none'}}>{value}</div>
                              <div className="text-slate-400 text-xs sm:text-sm lg:text-xs leading-normal" style={{wordBreak: 'normal', whiteSpace: 'normal'}}>{project.metricLabels[key]}</div>
                            </div>
                          ))}
                        </div>

                        {/* Tech Stack with Icons */}
                        <div>
                          <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                            <Code2 size={16} className="text-emerald-400" />
                            Tech Stack
                          </h4>
                          <div className="flex flex-wrap gap-2 sm:gap-3">
                            {project.techStack.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 text-slate-300 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-300 hover:scale-105 text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h4 className="font-semibold text-white mb-3 sm:mb-4 text-sm uppercase tracking-wider flex items-center gap-2">
                            <Zap size={16} className="text-cyan-400" />
                            Key Features
                          </h4>
                          <div className="grid grid-cols-1 gap-2">
                            {project.features.slice(0, 3).map((feature, idx) => (
                              <div key={idx} className="flex items-center gap-3 text-slate-400">
                                <div className="w-1.5 h-1.5 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full flex-shrink-0" />
                                <span className="text-sm">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Enhanced Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                          {/* Show View Live only for project 02 (index === 0) */}
                          {index === 0 && (
                            <Button
                              size="lg"
                              className="group bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 text-white border-0 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25 flex-1 w-full sm:w-auto"
                              asChild
                            >
                              <a href={project.live} target="_blank" rel="noopener noreferrer">
                                <Eye className="h-4 w-4 mr-2" />
                                View Live
                                <ChevronRight className="h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                              </a>
                            </Button>
                          )}
                          {/* Show Source only for project 01 (index === 1) */}
                          {index === 1 && (
                            <Button
                              variant="outline"
                              size="lg"
                              className="group bg-slate-800/50 backdrop-blur-sm border-slate-600/50 text-slate-300 hover:bg-slate-800/70 hover:border-emerald-400/50 hover:text-emerald-400 transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                              asChild
                            >
                              <a href={project.github} target="_blank" rel="noopener noreferrer">
                                <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                                Source
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Number */}
                  <div className={`absolute -top-4 ${isReversed ? 'left-4 sm:left-8' : 'right-4 sm:right-8'} text-6xl sm:text-8xl font-bold ${colors.text} opacity-10 select-none`}>
                    0{index + 1}
                  </div>
                </div>
              );
            })}
          </div>


        </div>
      </div>
    </section>
  );
};

export default Projects;