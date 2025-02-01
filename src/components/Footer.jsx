import React from "react";
import { FaGithub, FaLinkedin, FaSquareXTwitter, IoMdMail } from "../data/icon";

const Footer = () => {
  return (
    <>
      <hr className="opacity-40" />
      <div className="p-8 bg-zinc-800 rounded-lg   flex flex-col gap-8 items-center">
        <footer className="flex flex-col gap-4 items-center text-zinc-300">
          <ul className="flex gap-6">
            <li>
              <a
                target="_blank"
                className="hover:text-zinc-200"
                href="https://github.com/kshitijbhusal"
              >
                <FaGithub className="w-8 h-8" />{" "}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="hover:text-white"
                href="https://www.linkedin.com/in/kshitij-bhusal-7778a5328/"
              >
                <FaLinkedin className="w-8 h-8" />{" "}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="hover:text-zinc-200"
                href="https://x.com/steezcodes"
              >
                <FaSquareXTwitter className="w-8 h-8" />{" "}
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="hover:text-zinc-200"
                href="mailto:kshitijbhusal64@gmail.com"
              >
                <IoMdMail className="w-8 h-8" />{" "}
              </a>
            </li>
          </ul>

          <div>
            <p className="text-xs md:text-lg">
              {" "}
              © {new Date().getFullYear()} Kshitij Bhusal. All right reserved.{" "}
            </p>
          </div>
          <div>
            {" "}
            <p className="text-xs md:text-lg">kshitijbhusal64@gmail.com</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
