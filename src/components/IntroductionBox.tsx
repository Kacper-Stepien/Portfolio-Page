import { useEffect, useState } from "react";
import { IoLogoJavascript } from "react-icons/io5";
import { TypeAnimation } from "react-type-animation";

const IntroductionBox = () => {
  const [textAnimationFinished, setTextAnimationFinished] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setTextAnimationFinished(true);
    }, 4000);
  }, []);

  return (
    <div className="bg-dark/[.8]  p-4 rounded-md w-[40rem]">
      <h3 className="text-6xl text-secondary font-bold">Hello There</h3>
      <h2 className="text-7xl text-light font-bold">I'm Kacper</h2>

      <div className="flex items-center gap-4">
        {textAnimationFinished && (
          <IoLogoJavascript className="text-8xl text-primary transition-all" />
        )}
        <TypeAnimation
          className="text-8xl text-primary font-bold"
          sequence={["Backend", 1000, "Frontend", 1000, "Developer", 1000]}
          wrapper="span"
          speed={50}
          repeat={0}
        />
      </div>
    </div>
  );
};

export default IntroductionBox;
