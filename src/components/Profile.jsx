import React from "react";

const Profile = () => {
  return (
    <>
      <div className=" flex justify-between">
        <div className=" w-2.5/4 flex flex-col justify-center px-10">
          {" "}
          <h1 className="text-6xl font-bold"> Kshitij Bhusal</h1>
          <p className="mt-2 text-xl text-zinc-400 ">
            I tinker around with my beloved laptop
          </p>
        </div>
        <div className="  w-1.5/4 flex flex-col justify-center items-center  ">
          <img
            className="w-48 h-48  object-cover rounded-full border-4 dark:border-zinc-800 border-zinc-900 "
            src="https://media.istockphoto.com/id/2027624666/photo/headshot-close-up-portrait-of-indian-or-latin-confident-mature-good-looking-middle-age-leader.jpg?s=1024x1024&w=is&k=20&c=kbwcGK-KUyUzmnbhXXedtYwH9rXB1OjgpAkFT90BKgo="
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Profile;
