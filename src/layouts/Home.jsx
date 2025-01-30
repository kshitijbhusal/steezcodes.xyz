import React from "react";
import Profile from "../components/Profile";
import Work from "../components/Work";
import Experience from "../components/Experience";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <>
      <div className="bg-[#18181B]  text-white px-80 py-1">
        <div className="bg-[#18181B] h-full  dark:border-zinc-800 border-zinc-200 border-2 px-4 py-4 flex flex-col gap-10">
          <Profile />
          <Work />
          <Experience />

          <Footer />
        </div>
      </div>
    </>
  );
};

export default Home;
