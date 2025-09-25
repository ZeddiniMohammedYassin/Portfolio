import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import TechStack from "@/components/portfolio/TechStack";
import Contact from "@/components/portfolio/Contact";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Contact />
    </main>
  );
};

export default Index;
