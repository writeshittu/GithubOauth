import {
  LocationMarkerIcon,
  MailIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { ShieldExclamationIcon } from "@heroicons/react/solid";
import React from "react";

const UserProfile = () => {
  return (
    <>
      <div className="relative md:mx-6 md:-top-6 ">
        <div className="w-8 my-4 md:my-0 md:w-full flex">
          <img
            className=" rounded-full object-fill"
            src="./akmmm.png"
            width="100%"
            height="100%"
            alt="user profile"
          />
          <div className=" md:hidden mx-3 md:mx-0">
            <p className=" whitespace-nowrap text-[1.2rem] my">Akeem Shittu</p>
            <p className="text-[#24292f]">writeshittu</p>
          </div>
        </div>
        <div className=" w-full md:w-fit rounded border md:rounded-full p-1 md:top-3/4 md:-right-4 md:absolute">
          <span>emoji</span>
        </div>
      </div>
      <div className="hidden md:block">
        <p className="text-[1.2rem] my">Akeem Shittu</p>
        <p className="text-[#24292f]">writeshittu</p>
      </div>
      {/* <div> */}
      <button className="bg-gray-600 w-full py-1 rounded-md my-3 border px-4 text-[#24292f]  bg-opacity-10">
        Edit profile
      </button>
      {/* </div> */}
      <div className="mb-2 md:mb-2">
        <p className="mb-4 text-[.8rem] md:hidden">
          <MailIcon width={17} className="inline" /> writeshittu@gmail.com
        </p>
        <p className="text-[#343a41] text-[.8rem]">
          <UserGroupIcon className="inline" width={14} /> <strong>3</strong>{" "}
          followers . <strong>4</strong> following
        </p>
      </div>
      <div className="border-b ">
        <p className="hidden md:block my-4 text-[.8rem] ">
          <LocationMarkerIcon width={17} className="inline" /> Lagos
        </p>
        <p className="hidden md:block mb-4 text-[.8rem]">
          <MailIcon width={17} className="inline" /> writeshittu@gmail.com
        </p>
      </div>
      <div className="border-b ">
        <p className="my-4 text-[.9rem] text-[#24292f] font-bold">
          Achievements
        </p>
        <div className="mb-4 text-[.8rem]">
          <ShieldExclamationIcon width={100} className="inline" />
        </div>
      </div>
      <div className="hidden md:block ">
        <p className="my-4 text-[.9rem] text-[#24292f] font-bold">
          Organizations
        </p>
        <div className="mb-4 text-[.8rem]">
          <ShieldExclamationIcon width={100} className="inline" />
        </div>
      </div>
    </>
  );
};

export default UserProfile;
