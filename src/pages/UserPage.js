import React, { useEffect } from "react";
import NavBar from "../components/NavBar";
import Tabs from "../components/tabs";
import RepoSearchInput from "../components/SearchInput";
import RepositoryCard from "../components/RepositoryCard";
import UserProfile from "../components/UserProfile";
import Footer from "../components/footer";
import { useDispatch, useSelector } from "react-redux";
import { getRepos } from "../Slices/repoSlice";
const UserPage = () => {
  const dispatch = useDispatch();
  const userRepos = useSelector((state) => state.userRepository);
  const userDetails = useSelector((state) => state.userProfile);
  console.log("repos", userRepos);

  useEffect(() => {
    if (userRepos.status === "idle") {
      dispatch(getRepos());
    }
  }, [dispatch, userRepos.status]);
  if (userDetails.status === "loading")
    return <div className="flex items-center justify-center">Loding</div>;
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
            {userRepos?.repos?.map((repo) => (
              <RepositoryCard repoDetail={repo} />
            ))}
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
