import React from "react";
import profile from "../assets/profile.png";
const Profile = () => {
  return (
    <>
      <div className=" flex justify-between">
        <div className=" w-5/7 flex flex-col  justify-center  px-4 md:px-8">
          {" "}
          <h1 className="text-[30px] w-50   md:w-full  md:text-7xl font-bold ">
            {" "}
            Kshitij Bhusal
          </h1>
          <p className=" text-start text-[10px] md:mt-4 md:text-xl text-zinc-400 font-semibold ">
            Passionate developer who loves coding and crafting solutions—just me
            and my laptop, and endless possibilities. 🚀
          </p>
        </div>
        <div className=" w-3.5/7 md:w-2/7 flex flex-col justify-center items-center  ">
          <img
            className="w-32 h-26  md:w-48 md:h-48  object-cover border-4 rounded-full dark:border-zinc-700 border-zinc-800 "
            src={profile}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
