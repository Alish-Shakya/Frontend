import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

const ReadAllTeacher = () => {
  const [teachers, setTeachers] = useState([]);
  const navigate = useNavigate(); // fixed typo

  const getTeachers = async () => {
    try {
      const data = await axios.get(
        "http://localhost:3000/teacher/getAllTeacher"
      );
      setTeachers(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeachers();
  }, []);

  const handleDelete = async (id) => {
    try {
      const data = await axios.delete(
        `http://localhost:3000/teacher/deleteTeacher/${id}`
      );
      console.log(data);
      getTeachers(); // refresh list after deletion
    } catch (error) {
      console.log(error);
    }
  };

  const alertDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "The teacher has been deleted.", "success");
        handleDelete(id);
      }
    });
  };

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-semibold text-center mb-10">All Teachers</h1>
      <div className="grid gap-6">
        {teachers.map((value) => (
          <div
            key={value._id}
            className="border-2 border-gray-300 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <p>
              <span className="font-semibold">Full Name:</span> {value.fullName}
            </p>
            <p>
              <span className="font-semibold">Subject:</span> {value.subject}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {value.age}
            </p>
            <p>
              <span className="font-semibold">DOB:</span> {value.dob}
            </p>
            <p>
              <span className="font-semibold">Address:</span> {value.address}
            </p>

            <div className="mt-4 flex gap-4 flex-wrap">
              <button
                onClick={() => navigate(`/teacher/${value._id}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View
              </button>

              <button
                onClick={() => navigate(`/teacher/update/${value._id}`)}
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
              >
                Edit
              </button>

              <button
                onClick={() => alertDelete(value._id)}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      e
    </div>
  );
};

export default ReadAllTeacher;
