import { DesktopComputerIcon } from "@heroicons/react/outline";
import DropDown from "./dropdown";

const language = [
  { name: "Pull requests", href: "#", current: false },
  { name: "Issues", href: "#", current: false },
  { name: "Marketplace", href: "#", current: false },
  { name: "Explore", href: "#", current: false },
];
const SortedItem = [
  { name: " requests", href: "#", current: false },
  { name: "Issues", href: "#", current: false },
  { name: "place", href: "#", current: false },
  { name: "Explore", href: "#", current: false },
];
const types = [
  { name: "Pull ", href: "#", current: false },
  { name: "Issues", href: "#", current: false },
  { name: "qwerty", href: "#", current: false },
  { name: "Explore", href: "#", current: false },
];

const SearchInput = () => {
  return (
    <div className=" border-b py-6">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between">
        <div className="flex items-center flex-1 ">
          <input
            className=" py-1 px-2 w-full border rounded-xl active:border-blue-300 outline-blue-300 outline-[.7rem]"
            type="search"
            placeholder="Find a repository..."
          />
          <div className="ml-2">
            <DropDown placeholder="Type" dropdownItems={types} />
          </div>
          <div className="ml-2">
            <DropDown placeholder="Language" dropdownItems={language} />
          </div>
          <div className="ml-2">
            <DropDown placeholder="Sort" dropdownItems={SortedItem} />
          </div>
        </div>
        <div className="ml-4">
          <button className=" bg-blue-500 text-[#fff] flex items-center mx-1 px-4 py-[.335rem] rounded">
            <DesktopComputerIcon width={17} className="mx-1" /> New
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchInput;
