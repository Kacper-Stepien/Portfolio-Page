import SectionTitle from "../ui/SectionTitle";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import ContactForm from "../components/ContactForm";
import ContactLinks from "../components/ContactLinks";

const ContactSection = () => {
  return (
    <>
      <SectionTitle title="Contact" />
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
        <div>
          <p className="text-gray-500 text-2xl text-justify mb-8">
            Drop me a line, give me a call, or send me a message by submitting
            the form.
          </p>
          <div>
            <div className="flex  flex-col gap-4 text-light mb-12">
              <a
                href="mailto:kacper2007x48@gmail.com"
                className="text-xl sm:text-2xl hover:text-primary transition-all"
              >
                <div className="flex gap-1 sm:gap-4 flex-col sm:flex-row">
                  <MdEmail className="text-3xl sm:text-4xl" />
                  kacper2007x48@gmail.com
                </div>
              </a>
              <a
                href="tel:+48602123456"
                className="text-xl sm:text-2xl hover:text-primary transition-all"
              >
                <div className="flex gap-1 sm:gap-4 flex-col sm:flex-row">
                  <FaPhoneAlt className="text-2xl sm:text-3xl" />
                  +48 782 748 757
                </div>
              </a>
            </div>
            <ContactLinks />
          </div>
        </div>
        <ContactForm />
      </div>
    </>
  );
};

export default ContactSection;
