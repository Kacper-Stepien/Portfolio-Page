import NavigationLink from "./NavigationLink";
import { FC, RefObject, useState } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

interface NavigationProps {
  links: {
    name: string;
    elementRef: RefObject<HTMLDivElement> | RefObject<null>;
  }[];
}

const Navigation: FC<NavigationProps> = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="hidden md:flex justify-between items-center py-4 fixed text-light z-50 top-0 right-0 p-6 text-2xl bg-dark/[.8]">
        <ul className="flex gap-12">
          {links.map((link) => (
            <NavigationLink
              key={link.name}
              name={link.name}
              elementRef={link.elementRef}
            />
          ))}
        </ul>
      </nav>

      <button
        onClick={() => setIsOpen((prev: boolean) => !prev)}
        className="md:hidden z-50 fixed top-4 left-4"
        aria-label="Toggle navigation menu"
      >
        {isOpen ? (
          <IoClose className="text-white text-5xl bg-dark/[.9] rouned-xl" />
        ) : (
          <IoMenu className="text-white text-5xl bg-dark/[.9] rouned-xl" />
        )}
      </button>

      <nav
        className={`md:hidden fixed left-0 z-40 bg-dark/[.9]  w-full h-screen px-16  flex justify-center items-center transition-all duration-500 ease-in  ${
          isOpen ? "top-0" : "top-[-120%]"
        }`}
      >
        <ul className=" text-2xl text-center flex flex-col gap-6">
          {links.map((link) => (
            <NavigationLink
              key={link.name}
              name={link.name}
              elementRef={link.elementRef}
              setIsOpen={setIsOpen}
              color="text-light"
            />
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
