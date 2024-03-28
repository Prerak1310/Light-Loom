import React from "react";
import { useNavigate } from "react-router-dom";
export default function Doctorcomp({ imgurl, docname, post, docprofile }) {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center rounded-3xl border-2 border-black bg-white bg-opacity-40 p-3 shadow-lg shadow-black ">
      {/* about the doctors */}

      <div>
        <img
          alt="alt text"
          className="h-[100px] w-[100px] rounded-full"
          src={imgurl}
        />
      </div>
      <div className="font-bold text-black">{docname}</div>
      <div className="mb-3">{post}</div>

      {/* buttons */}
      <div className="flex w-full flex-row gap-x-4">
        <button className="w-full rounded-md bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 p-2 text-center hover:bg-gradient-to-r hover:from-amber-500 hover:via-amber-600 hover:to-amber-500">
          <a href="https://www.fortishealthcare.com/doctors/dr-ajay-kaul-6323">
            View Profile
          </a>
        </button>
        <button
          onClick={() => navigate("/appointments")}
          className="w-full rounded-md bg-gradient-to-r from-amber-400 via-amber-500 to-amber-400 p-2 text-center hover:bg-gradient-to-r hover:from-amber-500 hover:via-amber-600 hover:to-amber-500"
        >
          Book an appointment
        </button>
      </div>
    </div>
  );
}
