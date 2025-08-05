import React from "react";
import { Link } from "react-router";

const StudentForm = () => {
  return (
    <>
      <Link
        to="/student/createStudent"
        className="block p-6 border rounded-xl shadow hover:shadow-lg hover:bg-blue-50 transition"
      >
        <h1 className="text-xl font-semibold">Create Student data</h1>
        <p className="text-gray-600">Add new Student data to list</p>
      </Link>
    </>
  );
};

export default StudentForm;
