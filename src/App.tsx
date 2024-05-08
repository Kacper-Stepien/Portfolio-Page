import AppLayout from "./sections/AppLayout";
import { useRef } from "react";
import Navigation from "./components/Navigation/Navigation";
import HomeSection from "./sections/HomeSection";
import SectionLayout from "./sections/SectionLayout";
import TechnologiesSection from "./sections/TechnologiesSection";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const technologiesRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppLayout>
      <SectionLayout sectionRef={homeRef}>
        <HomeSection />
      </SectionLayout>
      <SectionLayout sectionRef={technologiesRef}>
        <TechnologiesSection />
      </SectionLayout>
      <Navigation
        links={[
          { name: "Home", elementRef: homeRef },
          { name: "About", elementRef: aboutRef },
          { name: "Technologies", elementRef: technologiesRef },
        ]}
      />
    </AppLayout>
  );
}

export default App;
