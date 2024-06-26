import AppLayout from "./sections/AppLayout";
import { useRef } from "react";
import Navigation from "./components/Navigation/Navigation";
import HomeSection from "./sections/HomeSection";
import SectionLayout from "./sections/SectionLayout";
import TechnologiesSection from "./sections/TechnologiesSection";
import ProjectsSection from "./sections/ProjectsSection";
import AboutSection from "./sections/AboutSection";
import ContactSection from "./sections/ContactSection";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const technologiesRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppLayout>
      <div ref={homeRef} className="h-screen w-full relative">
        {" "}
        <HomeSection />
      </div>
      <SectionLayout sectionRef={aboutRef}>
        <AboutSection />
      </SectionLayout>
      <SectionLayout sectionRef={technologiesRef}>
        <TechnologiesSection />
      </SectionLayout>
      <SectionLayout sectionRef={projectsRef}>
        <ProjectsSection />
      </SectionLayout>
      <SectionLayout sectionRef={contactRef}>
        <ContactSection />
      </SectionLayout>

      <Navigation
        links={[
          { name: "Home", elementRef: homeRef },
          { name: "About", elementRef: aboutRef },
          { name: "Technologies", elementRef: technologiesRef },
          { name: "Projects", elementRef: projectsRef },
          { name: "Contact", elementRef: contactRef },
        ]}
      />
    </AppLayout>
  );
}

export default App;
