import {
  BookOpenIcon,
  StarIcon,
  DesktopComputerIcon,
  CubeIcon,
  FolderIcon,
} from "@heroicons/react/outline";
import React from "react";

const Tabs = () => {
  return (
    <div className="border-b flex justify-center ">
      <div className="h-16 text-[#24292f] flex justify-center items-center overflow-x-auto">
        <div className="flex items-center px-3 py-2 hover:bg-slate-200 cursor-pointer hover:rounded">
          <BookOpenIcon width={17} className="mx-1" />
          Overview
        </div>
        <div className="flex items-center px-3 py-2 hover:bg-slate-200 cursor-pointer hover:rounded">
          <DesktopComputerIcon width={18} className="mx-1" />
          Repositories{" "}
          <span className="bg-gray-200 rounded-full px-1 ml-2"> 46</span>
        </div>
        <div className="flex items-center px-3 py-2 hover:bg-slate-200 cursor-pointer hover:rounded">
          <FolderIcon width={17} className="mx-1" />
          Projects
        </div>
        <div className="flex items-center px-3 py-2 hover:bg-slate-200 cursor-pointer hover:rounded">
          <CubeIcon width={17} className="mx-1" />
          Packages
        </div>
        <div className="flex items-center px-3 py-2 hover:bg-slate-200 cursor-pointer hover:rounded">
          <StarIcon width={17} className="mx-1" />
          Stars
        </div>
      </div>
    </div>
  );
};

export default Tabs;
