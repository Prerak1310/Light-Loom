import React from "react";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi2";
export default function Home() {
  const navigate = useNavigate();
  return (
    <div>
      {/* BANNER */}
      {/* <div className="h-44 w-full bg-opacity-40 bg-banner p-0 text-black ">
    <div className="h-full w-full bg-white bg-opacity-60 text-center text-4xl">
      Beyond Textbooks and Taboos
    </div>
  </div> */}
      {/* BANNER */}
      <div className="grid grid-flow-row gap-y-20 bg-homebackground bg-cover bg-no-repeat px-[5%] pb-10 xl:px-[30%]">
        {/* Our Doctors */}
        <div className="mt-5 grid w-full grid-flow-row items-center justify-center gap-y-6 rounded-3xl border-2 border-black bg-white bg-opacity-40 py-[10%] text-center">
          <div>
            <img
              alt="Doctors"
              src={require("../assets/doctorgif.gif")}
              className="mx-auto w-full max-w-[300px] object-contain" // Ensures responsive image
            />
          </div>
          <button
            className="group grid grid-flow-col items-center justify-center gap-x-2 rounded-2xl bg-gradient-to-tr from-cyan-600 to-lime-400 p-3 hover:ring-2 hover:ring-gray-500 hover:transition-all hover:delay-100"
            onClick={() => navigate("/doctors")}
          >
            <span>Meet our Doctors</span>
            <span className="text-medium transition-all delay-100 group-hover:translate-x-2">
              <HiArrowRight />
            </span>
          </button>
        </div>
        {/* Video Lectures */}
        <div className="grid w-full grid-flow-row items-center justify-center gap-y-6 rounded-3xl border-2 border-black bg-white bg-opacity-40 py-[10%] text-center">
          <div>
            <img
              alt="Video Lectures"
              src={require("../assets/video-icon.png")}
              className="mx-auto w-full max-w-[150px] object-contain" // Responsive and centered
            />
          </div>
          <button
            className="group grid grid-flow-col items-center justify-center gap-x-2 rounded-2xl bg-gradient-to-tr from-cyan-600 to-lime-400 p-3 hover:ring-2 hover:ring-gray-500 hover:transition-all hover:delay-100"
            onClick={() => navigate("/videos")}
          >
            <span>Checkout Video Lectures</span>
            <span className="text-medium transition-all delay-100 group-hover:translate-x-2">
              <HiArrowRight />
            </span>
          </button>
        </div>
        {/* Appointment */}
        <div className="grid w-full grid-flow-row items-center justify-center gap-y-6 rounded-3xl border-2 border-black bg-white bg-opacity-40 px-4 py-4 text-center xl:px-0">
          <img
            alt="Appointment"
            src={require("../assets/appointment.jpg")}
            className="mx-auto w-full max-w-[400px] rounded-xl object-cover" // Keeps image responsive and rounded
          />
          <button
            className="group grid grid-flow-col items-center justify-center gap-x-2 rounded-2xl bg-gradient-to-tr from-cyan-600 to-lime-400 p-2 hover:ring-2 hover:ring-gray-500 hover:transition-all hover:delay-100 xl:p-3"
            onClick={() => navigate("/appointments")}
          >
            <span>Book an Appointment</span>
            <span className="text-medium transition-all delay-100 group-hover:translate-x-2">
              <HiArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
