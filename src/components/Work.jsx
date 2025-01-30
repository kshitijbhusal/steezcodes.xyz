import React from "react";
import GitHubCalendar from "react-github-calendar";

const Work = () => {
  return (
    <>
      <div className="p-8 bg-zinc-800 rounded-lg shadow-lg flex flex-col gap-8">
        <div className="">
          <h1 className="text-4xl font-bold mb-2">Proof of Work</h1>
          <p className="text-lg text-zinc-400 ">
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

function ProofOfWork() {
  return (
    <>
      <div className="p-2 bg-zinc-800 rounded-lg border-2 border-zinc-700 cursor-pointer text-base font-medium">
        Lorem ipsum dolor sit amet.
      </div>
      <div className="p-2 bg-zinc-800 rounded-lg border-2 border-zinc-700 cursor-pointer text-base font-medium">
        Lorem ipsum dolor sit amet.
      </div>
    </>
  );
}
