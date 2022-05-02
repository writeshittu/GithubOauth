import {
  LocationMarkerIcon,
  MailIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { useDispatch, useSelector } from "react-redux";
import { LinkIcon, ShieldExclamationIcon } from "@heroicons/react/solid";
import React, { useEffect } from "react";
import { getUsers } from "../Slices/userSlice";

const UserProfile = () => {
  const dispatch = useDispatch();
  const userDetails = useSelector((state) => state.userProfile);
  // const status = useSelector(selectAllState);
  // console.log(userDetails, "dffdf");
  useEffect(() => {
    if (userDetails.status === "idle") {
      dispatch(getUsers());
    }
  }, [userDetails.status, dispatch]);

  if (!userDetails.data) return <div>loading</div>;

  return (
    <>
      <div className="relative md:mx-6 md:-top-6 ">
        <div className="w-8 my-4 md:my-0 md:w-full flex">
          <img
            className=" rounded-full object-fill"
            src={userDetails.data.avatar_url}
            width="100%"
            height="100%"
            alt="user profile"
          />
          <div className=" md:hidden mx-3 md:mx-0">
            <p className=" whitespace-nowrap text-[1.2rem] my">
              {userDetails.data.name}
            </p>
            <p className="text-[#24292f]"> {userDetails.data.login}</p>
          </div>
        </div>
        <div className=" w-full md:w-fit rounded border md:rounded-full p-1 md:top-3/4 md:-right-4 md:absolute">
          <span>emoji</span>
        </div>
      </div>
      <div className="hidden md:block">
        <p className="text-[1.2rem] my">{userDetails.data.name}</p>
        <p className="text-[#24292f] text-[.9rem]">{userDetails.data.login}</p>
        <p className="text-[#24292f] text-[.9rem]">{userDetails.data.bio}</p>
      </div>
      {/* <div> */}
      <button className="bg-gray-600 w-full py-1 rounded-md my-3 border px-4 text-[#24292f]  bg-opacity-10">
        follow
      </button>
      {/* </div> */}
      <div className="mb-2 md:mb-2">
        {userDetails.data.email && (
          <p className="mb-4 text-[.8rem] md:hidden">
            <MailIcon width={17} className="inline" /> {userDetails.data.email}{" "}
          </p>
        )}
        <p className="text-[#343a41] text-[.8rem]">
          <UserGroupIcon className="inline" width={14} />{" "}
          <strong>{userDetails.data.followers}</strong> followers .{" "}
          <strong>{userDetails.data.following}</strong> following
        </p>
      </div>
      <div className="border-b ">
        {userDetails.data.location && (
          <p className="hidden md:block my-4 text-[.8rem] ">
            <LocationMarkerIcon width={17} className="inline" />{" "}
            {userDetails.data.location}
          </p>
        )}
        {userDetails.data.blog && (
          <p className="hidden md:block mb-4 text-[.8rem]">
            <LinkIcon width={17} className="inline" /> {userDetails.data.blog}
          </p>
        )}
        {userDetails.data.email && (
          <p className="hidden md:block mb-4 text-[.8rem]">
            <MailIcon width={17} className="inline" /> {userDetails.data.email}
          </p>
        )}
      </div>
      {/* <div className="border-b ">
        <p className="my-4 text-[.9rem] text-[#24292f] font-bold">
          Achievements
        </p>
        <div className="mb-4 text-[.8rem]">
          <ShieldExclamationIcon width={100} className="inline" />
        </div>
      </div> */}
      {/* <div className="hidden md:block ">
        <p className="my-4 text-[.9rem] text-[#24292f] font-bold">
          Organizations
        </p>
        <div className="mb-4 text-[.8rem]">
          <ShieldExclamationIcon width={100} className="inline" />
        </div>
      </div> */}
    </>
  );
};

export default UserProfile;
