import Channel from "./Channel";
import Dashboard from "./Dashboard";
import Inventory from "./Inventory";
import Orders from "./Orders";
import Shhipping from "./Shipping";

//import icons
import { AiOutlineDashboard } from "react-icons/ai";
import { IoPricetagOutline, IoShareSocialOutline } from "react-icons/io5";
import { IoMdReorder } from "react-icons/io";
import { MdOutlineLocalShipping } from "react-icons/md";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, toggleSidebar }) => {
  return isOpen ? (
    <div className="w-5 bg-slate-400 border border-gray-500 h-screen"></div>
  ) : (
    <div className="w-48 border border-gray-500 h-screen">
      <h1>sidebar</h1>
      <div className="flex items-center m-3 text-lg font-medium">
        <button onClick={toggleSidebar}>
          <AiOutlineDashboard className="mr-3 text-xl" />
        </button>
        <Link to="/dashboard">
          <h3>Dashboard</h3>
        </Link>
      </div>
      <div className="flex items-center m-3 text-lg font-medium">
        <IoPricetagOutline className="mr-3 text-xl" />
        <Link to="/inventory">
          <h3>Inventory</h3>
        </Link>
      </div>
      <div className="flex items-center  text-lg font-medium bg-sky-200 h-12 border-r-4 border-sky-600">
        <IoMdReorder className="m-3 mr-3 text-xl" />
        <Link to="/orders">
          <h3>Orders</h3>
        </Link>
      </div>
      <div className="flex items-center m-3 text-lg font-medium">
        <MdOutlineLocalShipping className="mr-3 text-xl" />
        <Link to="/shipping">
          <h3>Shipping</h3>
        </Link>
      </div>
      <div className="flex items-center m-3 text-lg font-medium">
        <IoShareSocialOutline className="mr-3 text-xl" />
        <Link to="channel">
          <h3>Channel</h3>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
