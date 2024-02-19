import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Inventory from "./components/Inventory";
import Orders from "./components/Orders";
import Shhipping from "./components/Shipping";
import Channel from "./components/Channel";
import ViewPage from "./components/ViewPage";

const AppLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <div className="">
        <Header toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <ViewPage />
      </div>
      <Outlet />
    </div>
  );
};

const appRoter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/inventory", element: <Inventory /> },
      { path: "/orders", element: <Orders /> },
      { path: "/shipping", element: <Shhipping /> },
      { path: "/channel", element: <Channel /> },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRoter} />);
