import { useNavigate } from "react-router-dom";
import { Power } from "lucide-react";
import Cookies from "js-cookie";
import Banner from "../assets/Images/Sound Wave-logos_black.png";
import { Button } from "./ui/Button";

const Sidebar = () => {
  const navigate = useNavigate();
  const logoutHandler = () => {
    Cookies.remove("authUser");
    //Reloads page
    navigate(0);
  };

  return (
    <header className="sticky top-0 md:flex hidden flex-col min-h-screen py-5 px-4 bg-card justify-between items-center">
      <img src={Banner} alt="SoundWave" className="md:w-36 sm:w-7" />

      <Button
        variant={"outline"}
        className="flex gap-2 w-[80%]"
        onClick={() => logoutHandler()}
      >
        <Power size={20} />
        <span>Logout</span>
      </Button>
    </header>
  );
};

export default Sidebar;
