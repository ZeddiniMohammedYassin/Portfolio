import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Projects from "@/components/portfolio/Projects";
import TechStack from "@/components/portfolio/TechStack";
import Contact from "@/components/portfolio/Contact";
import Certifications from "@/components/portfolio/Certifications";

// Import certificate images from Certifications folder
import Cert0 from "@/assets/Certifications/0.jpg";
import Cert1 from "@/assets/Certifications/1.png";
import Cert2 from "@/assets/Certifications/2.png";
import Cert3 from "@/assets/Certifications/3.jpg";
import Cert4 from "@/assets/Certifications/4.png";

const certificationsData = [
  { id: "cert-0", title: "Redig Internship Certificate", image: Cert0 },
  { id: "cert-1", title: "CodeAlpha Internship Certificate", image: Cert1 },
  { id: "cert-2", title: "Ieeextreme Participation Certificate", image: Cert2 },
  { id: "cert-3", title: "Winter Cup Participation Certificate", image: Cert3 },
  { id: "cert-4", title: "Frontend Masters JS Certificate", image: Cert4 },
];

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Projects />
      <TechStack />
  <Certifications certifications={certificationsData} />
      <Contact />
    </main>
  );
};

export default Index;
