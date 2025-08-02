import React from "react";
import { Link } from "react-router";

const TeacherForm = () => {
  return (
    <div>
      <Link
        to="/teacher/createTeacher"
        className="block p-6 border rounded-xl shadow hover:shadow-lg hover:bg-green-50 transition"
      >
        <h2 className="text-xl font-semibold">Create Teacher</h2>
        <p className="text-gray-600">Register a new teacher profile</p>
      </Link>
    </div>
  );
};

export default TeacherForm;
