import { useState } from "react";
import Logo from "../ui/logo";
import { NavLink, useNavigate } from "react-router-dom";
import { GalleryHorizontal, Hash, Image, LogOut, Menu, X } from "lucide-react";
import Cookies from "js-cookie";

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
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-secondary-foreground hover:text-accent"
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
  const navigate = useNavigate();
  const logoutHandler = () => {
    Cookies.remove("authUser");
    //Reloads page
    navigate(0);
  };

  return (
    <div className="sticky top-0">
      {/* Desktop sidebar */}
      <div className="md:flex hidden flex-col w-[200px] min-h-screen py-10 px-4 bg-primary">
        <Logo />
        <NavLinks />
        <LogOut onClick={() => logoutHandler()} />
      </div>

      {/* Mobile sidebar */}
      <div className="md:hidden p-4 flex justify-end">
        {!mobileMenuOpen ? (
          <Menu
            className="w-6 h-6 mr-2 fixed"
            onClick={() => setMobileMenuOpen(true)}
          />
        ) : (
          <X
            className="w-6 h-6 mr-2 fixed"
            onClick={() => setMobileMenuOpen(false)}
          />
        )}
      </div>

      <div
        className={`fixed top-0 h-screen w-2/3 z-10 p-6 md:hidden smooth-transition bg-primary ${
          mobileMenuOpen ? "left-0" : "-left-full"
        }`}
      >
        <Logo />
        <NavLinks handleClick={() => setMobileMenuOpen(false)} />
        <LogOut onClick={() => logoutHandler()} />
      </div>
    </div>
  );
};

export default Sidebar;
