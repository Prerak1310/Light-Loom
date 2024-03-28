import React from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
export default function Appointments() {
  const navigate = useNavigate();
  const [appointmentInfo, setAppointmentInfo] = useState({
    name: "",
    email: "",
    doctor: "",
    date: new Date(),
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setAppointmentInfo({ ...appointmentInfo, [name]: value });
  };

  const handleDateChange = (date) => {
    setAppointmentInfo({ ...appointmentInfo, date });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
    console.log(appointmentInfo);
    // Integration with backend API could go here
  };

  return (
    <div className="h-full bg-homebackground py-10">
      <div className="mx-auto  max-w-md rounded-lg border border-gray-200 bg-white bg-opacity-15 p-8 shadow">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-center text-2xl font-bold text-gray-900">
            Schedule Your Appointment
          </h2>
          <div>
            <label className="text-sm font-medium text-gray-700">Name:</label>
            <input
              type="text"
              name="name"
              value={appointmentInfo.name}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Email:</label>
            <input
              type="email"
              name="email"
              value={appointmentInfo.email}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Doctor:</label>
            <select
              name="doctor"
              value={appointmentInfo.doctor}
              onChange={handleInputChange}
              required
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
            >
              <option value="">Select a Doctor</option>
              <option value="Dr. Smith">Dr. Anoop Misra</option>
              <option value="Dr. Smith">Dr. Ajay Sharma</option>
              <option value="Dr. Smith">Dr. Pooja Kaul</option>
              <option value="Dr. Smith">Dr. Seema Kataria</option>
              <option value="Dr. Johnson">Dr. Deepak Sharma</option>
              <option value="Dr. Smith">Dr. Kartik Jha</option>
              {/* Add more doctors as needed */}
            </select>
          </div>
          <div>
            <label className="text-sm font-medium text-gray-700">Date:</label>
            <DatePicker
              selected={appointmentInfo.date}
              onChange={handleDateChange}
              className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
              wrapperClassName="w-full"
            />
          </div>
          <button
            type="submit"
            // onClick={() => navigate("/")}
            className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
