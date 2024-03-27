import React from "react";
import Doctorcomp from "../components/doctorcomp";
export default function Doctors() {
  return (
    <div className="grid grid-cols-3 bg-homebackground p-20">
      <Doctorcomp />
      <Doctorcomp />
      <Doctorcomp />
    </div>
  );
}
