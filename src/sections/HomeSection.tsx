import IntroductionBox from "../components/IntroductionBox";
import ProfileImage from "../components/ProfileImage";
import TechnologyBackground from "../components/TechnologyBackground";
import zdjecie from "../assets/zdjecie.webp";

const HomeSection = () => {
  return (
    <>
      <TechnologyBackground />
      <div className="z-40  absolute top-0 left-0 w-full h-full min-h-screen flex flex-col xl:flex-row items-center justify-center gap-8 ">
        <IntroductionBox />
        <ProfileImage
          imageSource={zdjecie}
          altText="Profile picture Kacper Stępień"
        />
      </div>
    </>
  );
};

export default HomeSection;
