import React from "react";
import Profile from "../components/Profile";

const Home = () => {
  return (
    <>
      <div className="bg-[#18181B] h-screen text-white px-80 py-1">
        <div className="bg-[#18181B] h-full  dark:border-zinc-800 border-zinc-200 border-2 px-4 py-4  ">
          <Profile />
        </div>
      </div>
    </>
  );
};

export default Home;
