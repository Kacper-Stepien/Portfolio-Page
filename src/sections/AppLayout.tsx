import { FC, ReactNode } from "react";
import ContactSidebar from "../components/ContactSidebar/ContactSidebar";

interface AppLayoutProps {
  children: ReactNode;
}

const AppLayout: FC<AppLayoutProps> = ({ children }) => {
  return (
    <div className="relative w-full min-h-screen">
      <ContactSidebar />
      {children}
    </div>
  );
};

export default AppLayout;
