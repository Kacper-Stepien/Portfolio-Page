import AppLayout from "./sections/AppLayout";
import { useRef } from "react";
import Navigation from "./components/Navigation/Navigation";
import HomeSection from "./sections/HomeSection";
import SectionLayout from "./sections/SectionLayout";
import TechnologiesSection from "./sections/TechnologiesSection";
import ProjectsSection from "./sections/ProjectsSection";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const technologiesRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppLayout>
      <div ref={homeRef} className="h-screen w-full relative">
        {" "}
        <HomeSection />
      </div>
      <SectionLayout sectionRef={technologiesRef}>
        <TechnologiesSection />
      </SectionLayout>
      <SectionLayout sectionRef={projectsRef}>
        <ProjectsSection />
      </SectionLayout>
      <Navigation
        links={[
          { name: "Home", elementRef: homeRef },
          { name: "About", elementRef: aboutRef },
          { name: "Technologies", elementRef: technologiesRef },
          { name: "Projects", elementRef: projectsRef },
        ]}
      />
    </AppLayout>
  );
}

export default App;
