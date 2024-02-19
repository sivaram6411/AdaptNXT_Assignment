import { RxBorderWidth } from "react-icons/rx";
import { IoMoonOutline } from "react-icons/io5";
import { PiBellRingingLight } from "react-icons/pi";
import { RiFilePpt2Fill } from "react-icons/ri";

const Header = ({ toggleSidebar }) => {
  return (
    <div className="bg-white shadow-lg shadow-slate-300 flex h-16 justify-between">
      <div className="flex items-center">
        <img src="" alt="logo" className="p-10" />
        <button onClick={toggleSidebar}>
          <RxBorderWidth className="ml-16 text-xl" />
        </button>
      </div>
      <div className="flex items-center">
        <IoMoonOutline className="text-xl" />
        <PiBellRingingLight className="ml-5 text-xl" />
        <RiFilePpt2Fill className="ml-5 text-xl" />
        <img src="" alt="avator" className="m-5" />
      </div>
    </div>
  );
};

export default Header;
