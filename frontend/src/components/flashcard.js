import React from "react";
import { useNavigate } from "react-router-dom";

export default function Flashcard({ title, desc }) {
  const navigate = useNavigate();
  return (
    <div className="group grid grid-flow-row items-center justify-center rounded-3xl border-4 border-black bg-white p-4 text-center">
      <div className="text-3xl">{title}</div>
      <div>
        <p>{desc}</p>
      </div>
      <div>
        <button
          onClick={() => navigate("/videos")}
          className="rounded-md bg-gradient-to-r from-amber-300 to-amber-500 p-3 hover:bg-gradient-to-r hover:from-amber-400 hover:to-amber-600"
        >
          Learn More
        </button>
      </div>
    </div>
  );
}
