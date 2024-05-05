import "./App.css";
import TechnologyBackground from "./components/TechnologyBackground";
import zdjecie from "./assets/zdjecie.png";
import IntroductionBox from "./components/IntroductionBox";
import ProfileImage from "./components/ProfileImage";

function App() {
  return (
    <div className="w-full h-screen relative">
      <TechnologyBackground />
      <div className="z-50  absolute top-0 left-0 w-full h-full flex items-center justify-center gap-8">
        <IntroductionBox />
        <ProfileImage
          imageSource={zdjecie}
          altText="Zdjęcie profilowe Kacper Stępień"
        />
      </div>
    </div>
  );
}

export default App;
