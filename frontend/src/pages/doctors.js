import React from "react";
import Doctorcomp from "../components/doctorcomp";
export default function Doctors() {
  return (
    <div className="grid grid-cols-1 gap-6 bg-homebackground p-3 xl:grid xl:grid-cols-3 xl:gap-x-5 xl:p-20">
      <Doctorcomp
        imgurl={require("../assets/doctors/anup.jpg")}
        docname="Dr. Anoop Misra"
        post="EXECUTIVE CHAIRMAN FORTIS C DOC"
        docprofile="https://www.fortishealthcare.com/doctors/dr-anoop-misra-2205"
      />
      <Doctorcomp
        imgurl={require("../assets/doctors/doctor2.jpeg")}
        docname="Dr. Ajay Sharma"
        post="CHAIRMAN CARDIAC SCIENCE | Fortis"
        docprofile="https://www.fortishealthcare.com/doctors/dr-ajay-kaul-6323"
      />
      <Doctorcomp
        imgurl={require("../assets/doctors/doctor1.jpeg")}
        docname="Dr. Pooja Kaul"
        post="CHAIRMAN CARDIAC SCIENCE | Fortis"
        docprofile="https://www.fortishealthcare.com/doctors/dr-ajay-kaul-6323"
      />
      <Doctorcomp
        imgurl={require("../assets/doctors/doctor3.jpeg")}
        docname="Dr. Seema Kataria"
        post="CHAIRMAN CARDIAC SCIENCE | Fortis"
        docprofile="https://www.fortishealthcare.com/doctors/dr-ajay-kaul-6323"
      />
      <Doctorcomp
        imgurl={require("../assets/doctors/doctor4.jpeg")}
        docname="Dr. Deepak Sharma"
        post="CHAIRMAN CARDIAC SCIENCE | Fortis"
        docprofile="https://www.fortishealthcare.com/doctors/dr-ajay-kaul-6323"
      />

      <Doctorcomp
        imgurl={require("../assets/doctors/doctor5.jpeg")}
        docname="Dr. Kartik Jha"
        post="CHAIRMAN CARDIAC SCIENCE | Fortis"
        docprofile="https://www.fortishealthcare.com/doctors/dr-ajay-kaul-6323"
      />
    </div>
  );
}
