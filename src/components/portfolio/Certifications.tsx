import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificationGalleryProps {
  certifications?: {
    id: string;
    title: string;
    image: string;
  }[];
}

const Certifications = ({ certifications = [] }: CertificationGalleryProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback(
    (index: number) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi]
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section id="certifications" className="py-20 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:6rem_6rem] opacity-10" />
        <div className="absolute top-1/4 left-1/6 w-72 h-72 bg-gradient-to-r from-blue-500/5 to-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/6 w-72 h-72 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 mb-4">
            <Award className="w-4 h-4 text-emerald-400" />
            <span className="text-slate-300 text-sm font-medium">Professional Credentials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              My Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-400 to-cyan-400 mx-auto rounded-full" />
        </div>

        <div className={`relative transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Main Gallery Frame */}
          <div
            className="overflow-hidden rounded-2xl border border-slate-700/30 bg-slate-800/20 backdrop-blur-sm shadow-2xl shadow-emerald-500/8 hover:shadow-emerald-500/20 transition-all duration-500"
            ref={emblaRef}
          >
            <div className="flex">
              {certifications.map((cert) => (
                <div key={cert.id} className="flex-[0_0_100%] min-w-0">
                  <div className="relative aspect-[16/10] bg-gradient-to-br from-slate-900/40 to-slate-800/10 p-4 md:p-8">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-contain rounded-xl transition-transform duration-700 group-hover:scale-105"
                    />

                    {/* subtle overlay for depth */}
                    <div className="absolute inset-0 rounded-xl pointer-events-none bg-gradient-to-b from-transparent to-slate-900/30" />

                    {/* Floating label */}
                    <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-slate-100 text-xs font-medium">
                      {cert.title}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <Button
            variant="outline"
            size="icon"
            onClick={scrollPrev}
            className="absolute left-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:bg-emerald-500/90 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            onClick={scrollNext}
            className="absolute right-3 top-1/2 -translate-y-1/2 h-12 w-12 rounded-full bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 text-slate-300 hover:bg-cyan-500/90 hover:text-white transition-all duration-300 hover:scale-105"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>

        {/* Dot Indicators */}
        <div className={`flex justify-center gap-3 mt-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {certifications.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollTo(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "w-14 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-lg shadow-emerald-500/40"
                  : "w-2 bg-slate-700 hover:bg-slate-600 hover:scale-125"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Current Certification Title */}
        <div className={`text-center mt-6 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="text-2xl font-semibold text-slate-200 mb-2">
            {certifications[selectedIndex]?.title}
          </h3>
          <p className="text-slate-400 text-sm">Certificate {selectedIndex + 1} of {certifications.length}</p>
        </div>
      </div>
    </section>
  );
};

export default Certifications;