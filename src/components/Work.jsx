import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import links from "../data/worklist";
import {
  FaGithub,
  IoGitPullRequestSharp,
  FaLinkedin,
  FaSquareXTwitter,
  IoMdMail,
} from "../data/icon";

const Work = () => {
  return (
    <>
      <div className="p-8 bg-zinc-800 rounded-lg   flex flex-col gap-8">
        <div className="">
          <h1 className="text-2xl md:text-4xl font-bold mb-2">Proof of Work</h1>
          <p className="text-xs font-semibold :text-lg text-zinc-400 ">
            All the work I have done so far in public && people's appreciation
          </p>
        </div>

        {/* ------------------------GitHub Contribution Heatmap-------------------------------- */}
        <div className="">
          <GitHubCalendar username="kshitijbhusal" />
        </div>

        {/* ------------------------Proof-of-work -------------------------------- */}
        <div className="">
          <ProofOfWork />
        </div>
      </div>
    </>
  );
};

export default Work;

function getIcon(icon) {
  switch (icon) {
    case "github-project":
      return <FaGithub className="inline-block" size={24} />;
    case "pull-request":
      return <IoGitPullRequestSharp className="inline-block" size={24} />;
  }
}

function ProofOfWork() {
  return (
    <>
      <div>
        {links.map((el, i) => {
          const [icon, setIcon] = useState(getIcon(el.icon));
          return (
            <a
              target="_blank"
              rel="noreferrer"
              key={i}
              className="p-2 bg-zinc-800 rounded-lg border-2 border-zinc-700 cursor-pointer text-xs md:text-base font-medium items-center flex gap-3 mb-2 hover:bg-zinc-700 hover:border-zinc-500 hover:mr-10"
              href={el.href}
            >
              <div>{icon}</div>
              {el.name}{" "}
            </a>
          );
        })}
      </div>
    </>
  );
}
