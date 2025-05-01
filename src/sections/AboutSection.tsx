import { PiStudentFill } from "react-icons/pi";
import { FaCode } from "react-icons/fa6";
import { FaMotorcycle } from "react-icons/fa";
import SectionTitle from "../ui/SectionTitle";
import DetailCard from "../components/DetailCard";

const AboutSection = () => {
  return (
    <>
      <SectionTitle title="About me" />
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <DetailCard
          icon={<PiStudentFill />}
          description="I graduated with a degree in Computer Science, specializing in Software Engineering from the Lublin University of Technology."
          gradient="from-yellow-300 to-yellow-400"
          iconColor="text-yellow-700"
        />

        <DetailCard
          icon={<FaCode />}
          description="I'm an enthusiastic learner exploring the realms of frontend and backend development in the captivating world of JavaScript."
          gradient="from-cyan-400 to-cyan-500"
          iconColor="text-cyan-700"
        />

        <div className="md:col-span-2 lg:col-span-1 md:justify-self-center">
          <DetailCard
            icon={<FaMotorcycle />}
            description="When not coding, I stay active at the gym, unwind with a good book, and enjoy hitting the open road on my motorcycle during the summer months."
            gradient="from-gray-200 to-gray-300"
            iconColor="text-gray-700"
          />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
