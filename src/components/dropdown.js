import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { ChevronDownIcon } from "@heroicons/react/solid";

export default function Dropdown({ placeholder, dropdownItems }) {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <div className="">
      <Menu as="div" className="hidden sm:block relative">
        <div>
          <Menu.Button className="focus:outline-none inline-flex w-full justify-center rounded-md bg-slate-600 bg-opacity-10 px-4 py-2 text-sm font-medium text-[#24292f] hover:bg-opacity-30 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <span className="sr-only">Open user menu</span>
            {placeholder}
            <ChevronDownIcon
              className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
            {dropdownItems.map((item, index) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <a
                    href="/#"
                    className={classNames(
                      active ? "bg-gray-100" : "",
                      "block px-4 py-2 text-sm text-gray-700"
                    )}
                  >
                    {item.name}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
