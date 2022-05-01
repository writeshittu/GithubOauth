import React from "react";
import NavBar from "../components/NavBar";
import Tabs from "../components/tabs";
import RepoSearchInput from "../components/SearchInput";
import RepositoryCard from "../components/RepositoryCard";
import UserProfile from "../components/UserProfile";
import Footer from "../components/footer";
const UserPage = () => {
  return (
    <div>
      <NavBar />
      <div className="hidden md:block">
        <Tabs />
      </div>
      <div className="px-6 md:flex w-full md:px-24">
        <div className="md:w-1/4">
          <UserProfile />
        </div>
        <div className=" md:hidden">
          <Tabs />
        </div>
        <div className="w-full">
          <div className=" w-full self-center">
            <RepoSearchInput />
            <RepositoryCard />
            <div className="text-center my-4">
              <button className="bg-[#f6f8fa] hover:bg-[#0969da] text-[#0969da] border hover:text-[#fff] py-1 px-2 rounded-l ">
                Previous
              </button>
              <button className="bg-[#f6f8fa] hover:bg-[#0969da] text-[#0969da] border hover:text-[#fff] py-1 px-2 rounded-r">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="px-24 w-full border-t"> */}
      <Footer />
      {/* </div> */}
    </div>
  );
};

export default UserPage;
