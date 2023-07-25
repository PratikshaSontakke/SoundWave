import { debounce } from "lodash";
import Searchbar from "./ui/Searchbar";
import { setOffsetParam, setSearchParam } from "@/features/songSlice";
import { useAppDispatch } from "@/app/hooks";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTrigger,
} from "./ui/Sheet";
import Logo from "@/assets/Logo/Logo";
import { Menu, Power } from "lucide-react";
import { Button } from "./ui/Button";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const searchDebounce = debounce((searchValue: string) => {
    dispatch(setSearchParam(searchValue));
    dispatch(setOffsetParam(1));
  }, 400);

  const handleSearchSong = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    searchDebounce(searchValue);
  };
  const navigate = useNavigate();
  const logoutHandler = () => {
    Cookies.remove("authUser");
    //Reloads page
    navigate(0);
  };

  return (
    <div className="h-16 bg-card sticky z-10 flex container top-0">
      <Searchbar onSearch={handleSearchSong} />

      <Sheet>
        <div className="py-4 md:hidden">
          <SheetTrigger>
            <Menu className="ml-[20rem]" />
          </SheetTrigger>
        </div>
        <SheetContent side={"bottom"}>
          <SheetHeader>
            <SheetDescription className="flex justify-center items-center flex-col">
              <Logo />
              <Button
                variant={"outline"}
                className="w-20"
                onClick={() => logoutHandler()}
              >
                <Power size={20} />
                <span>Logout</span>
              </Button>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
