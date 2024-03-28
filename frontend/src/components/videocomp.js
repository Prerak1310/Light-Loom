import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Videocomp({ title, desc, vidurl, isAdult }) {
  const navigate = useNavigate();
  const [ageConfirmed, setAgeConfirmed] = useState(false);
  const confirmAge = () => setAgeConfirmed(true);
  return (
    <div className="m-5 flex flex-col items-center justify-center rounded-3xl border-black bg-white bg-opacity-40 p-3 text-center shadow-sm shadow-black xl:m-0 xl:flex xl:flex-row xl:justify-center xl:border-4 xl:p-10 xl:shadow-md">
      {isAdult && !ageConfirmed ? (
        // Display a simple confirmation button if the video is for adults
        <div>
          <div className="mb-2">
            You must be 18 or older to view this video. Please confirm your age.
          </div>
          <div className="flex flex-row justify-center gap-x-4">
            <button
              onClick={confirmAge}
              className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
            >
              I am 18 or older
            </button>
            <button
              onClick={() => navigate("/")}
              className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              I am under 18
            </button>
          </div>
        </div>
      ) : (
        <>
          <video
            className="mb-3 rounded-3xl border-2 border-black shadow-md shadow-black xl:w-[60%]"
            controls
            autoPlay
            muted
          >
            <source src={vidurl} type="video/mp4" />
          </video>
          <div className="mb-2 grid grid-flow-row rounded-xl border-2 border-black p-2 text-center shadow-md shadow-black xl:m-10 xl:p-10">
            <div className="text-xl xl:text-3xl">{title}</div>
            <div>{desc}</div>
          </div>
        </>
      )}
    </div>
  );
}
