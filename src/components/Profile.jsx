import React from "react";
import profile from "../assets/profile.png";
const Profile = () => {
  return (
    <>
      <div className=" flex justify-between">
        <div className=" w-5/7 flex flex-col justify-center px-8">
          {" "}
          <h1 className="text-6xl font-bold"> Kshitij Bhusal</h1>
          <p className="mt-2 text-lg text-zinc-400 font-semibold ">
            I tinker around with my beloved laptop
          </p>
        </div>
        <div className="  w-2/7 flex flex-col justify-center items-center  ">
          <img
            className="w-48 h-48  object-cover rounded-full border-4 dark:border-zinc-800 border-zinc-900 "
            src={profile}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
