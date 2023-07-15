import { Outlet } from "react-router-dom";
import Sidebar from "../components/layouts/Sidebar";

const ProtectedLayout = () => {
  return (
    <main className="h-screen ">
      <div className="md:flex">
        <div className="md:basis-1/6 z-10 relative">
          <Sidebar />
        </div>
        <div className="basis-full mt-4 z-1">
          <Outlet />
        </div>
      </div>
    </main>
  );
};

export default ProtectedLayout;
