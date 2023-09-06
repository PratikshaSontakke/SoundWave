import React from "react";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return  <React.Suspense> <Outlet /> </React.Suspense>;
};

export default RootLayout;
