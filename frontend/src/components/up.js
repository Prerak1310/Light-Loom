import React from "react";
import { FaArrowUp } from "react-icons/fa6";
export default function Top() {
  return (
    <button
      className="fixed bottom-4 right-4 z-20 rounded-full bg-black p-4 text-2xl text-white"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      <FaArrowUp />
    </button>
  );
}
