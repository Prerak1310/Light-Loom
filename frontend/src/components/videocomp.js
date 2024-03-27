import React from "react";

export default function Videocomp({ title, desc, vidurl }) {
  return (
    <div className="m-5 flex flex-col items-center justify-center rounded-3xl border-black bg-white bg-opacity-40 p-3 shadow-sm shadow-black xl:m-0 xl:flex xl:flex-row xl:justify-between xl:border-4 xl:p-10 xl:shadow-md">
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
    </div>
  );
}
