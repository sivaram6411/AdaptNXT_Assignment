import { RxCross2 } from "react-icons/rx";
import { IoSettingsOutline } from "react-icons/io5";
import { LuArrowLeftSquare } from "react-icons/lu";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { FiPrinter } from "react-icons/fi";
import { RiRefreshLine } from "react-icons/ri";

const ViewPage = () => {
  return (
    <div className="bg-gray-200 w-[100%]">
      <div className="m-2 flex justify-between">
        <button className="bg-white flex items-center h-9 w-28 pl-4 font-medium text-sky-500 ">
          Orders <RxCross2 className="bg-white ml-5 text-gray-300" />
        </button>
        <IoSettingsOutline />
      </div>
      <div className="bg-white h-[300px] m-2">
        <div className="flex items-center justify-between">
          <div className="m-2 flex">
            <button className="flex mt-3 mr-3 px-2 items-center border border-gray-400 bg-white">
              <LuArrowLeftSquare className="m-3" />
              Import Orders
            </button>
            <button className="flex mt-3 mr-3 px-2 items-center border border-gray-300 bg-gray-200 text-gray-400">
              <RiArrowRightDoubleFill className="m-3" />
              Accept
            </button>
            <button className="flex mt-3 px-2 items-center border border-gray-300 bg-gray-200 text-gray-400">
              <FiPrinter className="m-3" />
              Print
            </button>
          </div>
          <button className="flex mr-3 mt-3 px-2 items-center border border-gray-300 bg-blue-500 text-white">
            <RiRefreshLine className="m-3" />
            Refresh
          </button>
        </div>
        
      </div>
    </div>
  );
};

export default ViewPage;
