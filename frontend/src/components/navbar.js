import React from "react";
import { useNavigate } from "react-router-dom";
export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div className=" grid grid-flow-row items-center gap-y-2 bg-[#2c2929] p-4 text-white  xl:grid xl:grid-flow-col xl:justify-between">
        <div
          className="grid grid-flow-row items-center justify-center gap-y-2 text-center"
          onClick={() => navigate("/")}
        >
          <div className="text-center text-4xl font-bold hover:cursor-pointer xl:text-5xl xl:hover:text-yellow-400">
            Light Loom<span className="text-red-600">.</span>
          </div>
          <div className="font-bold italic">Beyond textbook and taboos</div>
        </div>
        <div className="grid grid-flow-col  justify-center gap-x-3 xl:grid xl:grid-flow-col xl:gap-x-4">
          <button
            className="hover:text-yellow-500 xl:text-xl"
            onClick={() => navigate("/doctors")}
          >
            Experts
          </button>
          <button
            className="hover:text-yellow-500 xl:text-xl"
            onClick={() => navigate("/appointments")}
          >
            Appointment
          </button>
          <button
            className="hover:text-yellow-500 xl:text-xl"
            onClick={() => navigate("/education")}
          >
            Education
          </button>
          <button
            className="hover:text-yellow-500 xl:text-xl"
            onClick={() =>
              window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              })
            }
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}
