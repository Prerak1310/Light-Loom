import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div className="grid grid-flow-row gap-y-20 px-[15%] py-[5%]">
      {/* appointment */}
      <div className="grid w-full grid-flow-row items-center justify-center gap-y-6 rounded-md bg-red-300 py-[10%] text-center">
        <div className="text-4xl">You are not alone!</div>
        <button
          className="group grid grid-flow-col items-center justify-center gap-x-2 rounded-2xl bg-gradient-to-tr from-cyan-600 to-lime-400 p-3 hover:ring-2 hover:ring-gray-500 hover:transition-all hover:delay-100"
          onClick={() => navigate("/appointments")}
        >
          <span>Book an Appointment</span>
          <span className="text-medium transition-all delay-100 group-hover:translate-x-2">
            <HiArrowRight />
          </span>
        </button>
      </div>
      {/* chat */}
      <div className="grid w-full grid-flow-row items-center justify-center gap-y-6 rounded-md bg-red-300 py-[10%] text-center">
        <div className="text-4xl">You are not alone!</div>
        <button
          className="group grid grid-flow-col items-center justify-center gap-x-2 rounded-2xl bg-gradient-to-tr from-cyan-600 to-lime-400 p-3 hover:ring-2 hover:ring-gray-500 hover:transition-all hover:delay-100"
          onClick={() => navigate("/appointments")}
        >
          <span>Book an Appointment</span>
          <span className="text-medium transition-all delay-100 group-hover:translate-x-2">
            <HiArrowRight />
          </span>
        </button>
      </div>
    </div>
  );
}
