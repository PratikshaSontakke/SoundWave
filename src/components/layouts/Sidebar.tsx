import { useState } from "react";
import Logo from "../ui/logo";
import { NavLink } from "react-router-dom";
import { GalleryHorizontal, Hash, Image, Menu, X } from "lucide-react";

const links = [
  { name: "Around You", to: "/around-you", icon: <Image /> },
  { name: "Top Artists", to: "/top-artists", icon: <GalleryHorizontal /> },
  { name: "Top Charts", to: "/top-charts", icon: <Hash /> },
];

const NavLinks = ({ handleClick }: any) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-secondary hover:text-accent"
        onClick={() => handleClick && handleClick()}
      >
        <div className="w-6 h-6 mr-2"> {item.icon} </div>
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop sidebar */}
      <div className="md:flex hidden flex-col w-[200px] min-h-screen py-10 px-4 bg-foreground">
        <Logo />
        <NavLinks />
      </div>

      {/* Mobile sidebar */}
      <div className="md:hidden p-4 flex justify-end">
        {!mobileMenuOpen ? (
          <Menu
            className="w-6 h-6 mr-2"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <X
            className="w-6 h-6 mr-2"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      <div
        className={`absolute top-0 h-screen w-2/3 z-10 p-6 md:hidden smooth-transition bg-foreground ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <Logo />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
