import React from "react";
import { IoCall } from "react-icons/io5";
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
export default function Contact() {
  return (
    <div>
      <div className="hidden justify-start gap-[50%] bg-[#2c2929] p-10 pl-28 text-white xl:grid xl:grid-flow-col">
        <div className>
          <div className="mb-2 text-xl">Connect</div>
          <div className="grid grid-flow-col gap-x-2">
            <button className="text-2xl">
              <FaInstagram />
            </button>
            <button className="text-2xl">
              <FaDiscord />
            </button>
            <button className="text-2xl">
              <FaTwitter />
            </button>
            <button className="text-2xl">
              <FaFacebook />
            </button>
          </div>
        </div>
        <div className="gap-2 text-center xl:grid xl:grid-flow-row">
          <div className="text-center text-xl">Contact</div>
          <div className="grid grid-flow-col items-center gap-1">
            <span>
              <IoCall />
            </span>
            <span>Call us: +91- 8871231090 | +129-137-342</span>
          </div>
          <div className="grid grid-flow-col items-center justify-center gap-x-1">
            <span>
              <MdOutlineEmail />
            </span>
            <span>Email: light.loom@yahoo.com</span>
          </div>
        </div>
      </div>
      <div className="grid-flow-row gap-3 bg-[#2c2929]  p-10 text-center text-white xl:hidden">
        <div className="mb-3 text-xl">Connect</div>
        <div className="mb-2 grid grid-flow-col justify-center gap-x-4">
          <button className="text-2xl">
            <FaInstagram />
          </button>
          <button className="text-2xl">
            <FaDiscord />
          </button>
          <button className="text-2xl">
            <FaTwitter />
          </button>
          <button className="text-2xl">
            <FaFacebook />
          </button>
        </div>
        <div className="grid grid-flow-row gap-2 text-center">
          <div className="mt-2 text-center text-xl">Contact</div>
          <div className="grid grid-flow-row items-center gap-1">
            <div className="grid grid-flow-col items-center justify-center gap-x-1 text-center">
              <span>
                <IoCall />
              </span>
              <div>Call Us:</div>
            </div>
            <span>+91- 8871231090 | +129-137-342</span>
          </div>
          <div className="grid grid-flow-col items-center justify-center gap-x-1">
            <span>
              <MdOutlineEmail />
            </span>
            <span>Email: light.loom@yahoo.com</span>
          </div>
        </div>{" "}
      </div>
    </div>
  );
}
