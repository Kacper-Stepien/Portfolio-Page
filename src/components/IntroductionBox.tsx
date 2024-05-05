import { IoLogoJavascript } from "react-icons/io5";

const IntroductionBox = () => {
  return (
    <div className="bg-dark/[.8] w-min p-4 rounded-md">
      <h3 className="text-6xl text-secondary font-bold">Hello There</h3>
      <h2 className="text-7xl text-light font-bold">I'm Kacper</h2>
      <div className="flex items-center gap-4">
        <IoLogoJavascript className="text-8xl text-primary" />
        <h1 className="text-8xl text-primary font-bold">Developer</h1>
      </div>
    </div>
  );
};

export default IntroductionBox;
