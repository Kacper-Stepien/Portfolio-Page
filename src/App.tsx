// import "./App.css";
import TechnologyBackground from "./components/TechnologyBackground";
import zdjecie from "./assets/zdjecie.png";
import IntroductionBox from "./components/IntroductionBox";
import ProfileImage from "./components/ProfileImage";
import AppLayout from "./sections/AppLayout";
import { useRef } from "react";
import Navigation from "./components/Navigation/Navigation";

function App() {
  const homeRef = useRef<HTMLDivElement | null>(null);
  const aboutRef = useRef<HTMLDivElement | null>(null);

  return (
    <AppLayout>
      <div className="w-full h-screen relative" ref={homeRef}>
        <TechnologyBackground />
        <div className="z-40  absolute top-0 left-0 w-full h-full flex items-center justify-center gap-8">
          <IntroductionBox />
          <ProfileImage
            imageSource={zdjecie}
            altText="Zdjęcie profilowe Kacper Stępień"
          />
        </div>
        <div id="xd" ref={aboutRef}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est magnam
          saepe optio! Voluptatem repudiandae aliquid totam quis suscipit nam
          corrupti ipsum consequatur deserunt amet doloribus eius odio
          doloremque, dolores impedit.
        </div>
      </div>
      <Navigation
        links={[
          { name: "Home", elementRef: homeRef },
          { name: "About", elementRef: aboutRef },
        ]}
      />
    </AppLayout>
  );
}

export default App;
