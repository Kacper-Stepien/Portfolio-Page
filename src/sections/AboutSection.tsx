import { PiStudentFill } from "react-icons/pi";
import { FaCode, FaDumbbell, FaBookOpen } from "react-icons/fa6";
import { FaMotorcycle } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import DetailCard from "../components/DetailCard";

const AboutSection = () => {
  return (
    <>
      <SectionTitle title="About me" />
      <div className="flex flex-col gap-16 items-start">
        <DetailCard
          content={<PiStudentFill className="text-6xl" />}
          description="I'm graduated with a degree in Computer Science, specializing in Software Engineering from the Lublin University of Technology."
          bgColor="bg-primary"
          textColor="dark"
        />

        <DetailCard
          content={<FaCode className="text-6xl" />}
          description="I'm an enthusiastic learner exploring the realms of frontend and backend development in the captivating world of JavaScript."
          bgColor="bg-secondary"
          textColor="light"
          alignSelf="self-end"
        />

        <DetailCard
          content={
            <div className="flex gap-4">
              <FaDumbbell className="text-6xl" />
              <FaBookOpen className="text-6xl" />
              <FaMotorcycle className="text-6xl" />
            </div>
          }
          description="When not coding, I stay active at the gym, unwind with a good book, and enjoy hitting the open road on my motorcycle during the summer months."
          bgColor="bg-light"
          textColor="dark"
        />
      </div>
    </>
  );
};

export default AboutSection;
