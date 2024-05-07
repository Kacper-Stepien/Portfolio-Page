import { FaGithub, FaYoutube } from "react-icons/fa";
import { FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import ContactLink from "./ContactLink";

const ContactSidebar = () => {
  return (
    <div className="absolute bottom-0 left-10 z-50 flex h-screen flex-col gap-5 items-center bg-dark/[.8] px-2">
      <div className="h-full w-[1px] bg-light "></div>
      <ul className="flex flex-col gap-4 text-4xl text-light z-60 ">
        <ContactLink
          icon={<FaGithub />}
          link="https://github.com/Kacper-Stepien"
        />
        <ContactLink
          icon={<FaLinkedinIn />}
          link="https://www.linkedin.com/in/kacper-st%C4%99pie%C5%84/"
        />
        <ContactLink
          icon={<FaYoutube />}
          link="https://www.youtube.com/@KacperKoduje-ki4bb"
        />
        <ContactLink
          icon={<FaXTwitter />}
          link="https://twitter.com/kacper_2076"
        />
        <ContactLink
          icon={<SiGmail />}
          link="mailto: kacper2007x48@gmail.com"
        />
      </ul>
      <div className="h-36 w-[1px] bg-light"></div>
    </div>
  );
};

export default ContactSidebar;
