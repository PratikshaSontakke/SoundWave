import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Player from "@/components/player/Player";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  const { currentSong } = useAppSelector((state: RootState) => state.song);
  return (
    <main className="md:flex">
      <div className="basis-1/6 hidden sm:block">
        <Sidebar />
      </div>

      <div className="basis-5/6 grid grid-rows-[auto,1fr,auto] min-h-[100vh]">
        <Navbar />

        <div className="flex items-center justify-center">
          <Outlet />
        </div>

        {currentSong ? <Player /> : null}
      </div>
    </main>
  );
};

export default ProtectedLayout;
