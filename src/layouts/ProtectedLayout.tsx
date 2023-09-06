import { useAppSelector } from "@/app/hooks";
import { RootState } from "@/app/store";
import Player from "@/components/player/Player";
import React, { lazy } from "react";
import { Outlet } from "react-router-dom";

const Sidebar = lazy(() => import('@/components/Sidebar'));
const Navbar = lazy(() => import('@/components/Navbar'));

const ProtectedLayout = () => {
  const { currentSong } = useAppSelector((state: RootState) => state.song);
  return (
    <main className="md:flex">
      <div className="basis-1/6 hidden sm:block">
      <React.Suspense fallback={<>...</>}>
      <Sidebar /></React.Suspense>
      </div>

      <div className="basis-5/6 grid grid-rows-[auto,1fr,auto] min-h-[100vh]">
      <React.Suspense fallback={<>...</>}><Navbar /></React.Suspense>
        <div className="flex items-center justify-center">
        <React.Suspense> <Outlet /></React.Suspense>
        </div>

        {currentSong ? <React.Suspense><Player /> </React.Suspense> : null}
      </div>
    </main>
  );
};

export default ProtectedLayout;
