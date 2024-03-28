import React from "react";
import Doctorcomp from "../components/doctorcomp";
export default function Doctors() {
  return (
    <div className="grid grid-cols-3 gap-x-5 bg-homebackground p-20">
      <Doctorcomp
        imgurl={require("../assets/doctors/anup.jpg")}
        docname="Dr. Anoop Misra"
        post="EXECUTIVE CHAIRMAN FORTIS C DOC"
        docprofile="https://www.fortishealthcare.com/doctors/dr-anoop-misra-2205"
      />
      <Doctorcomp
        imgurl={require("../assets/doctors/anup.jpg")}
        docname="Dr. Ajay Kaul"
        post="CHAIRMAN CARDIAC SCIENCE | Fortis"
        docprofile="https://www.fortishealthcare.com/doctors/dr-ajay-kaul-6323"
      />
      <Doctorcomp />
    </div>
  );
}
