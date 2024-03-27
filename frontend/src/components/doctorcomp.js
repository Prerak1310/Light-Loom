import React from "react";
// { imgurl, name, post, fees }
export default function Doctorcomp() {
  return (
    <div className="flex flex-col justify-center rounded-full bg-red-600">
      {/* about the doctors */}
      <div className="flex flex-col gap-y-3">
        <div className="rounded-full">
          <img
            alt="alt text"
            className="w-[10px]"
            src={require("../assets/doctors/anup.jpg")}
          />
        </div>
        <div>Dr.Anoop Sharma</div>
        <div>Executive Chairman Fortis</div>
      </div>
      {/* buttons */}
      <div></div>
    </div>
  );
}
