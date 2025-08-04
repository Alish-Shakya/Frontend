import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ReadAllSubject = () => {
  const [subjects, setSubjects] = useState([]);

  const navigate = useNavigate();

  const getSubjects = async () => {
    try {
      let result = await axios.get(
        "http://localhost:3000/subject/readAllSubject"
      );
      // console.log(result);
      setSubjects(result.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubjects();
  }, []);

  return (
    <div className="max-w-5xl mx-auto py-10 px-4">
      <h1 className="text-4xl font-semibold text-center mb-10">All Teachers</h1>
      <div className="grid gap-6">
        {subjects.map((value) => (
          <div
            key={value._id}
            className="border-2 border-gray-300 rounded-xl p-6 shadow hover:shadow-lg transition"
          >
            <p>
              <span className="font-semibold">Full Name:</span>{" "}
              {value.subjectName}
            </p>
            <p>
              <span className="font-semibold">Subject:</span> {value.code}
            </p>
            <p>
              <span className="font-semibold">Age:</span> {value.creditHrs}
            </p>

            <div className="mt-4 flex gap-4 flex-wrap">
              <button
                onClick={() => navigate(`/teacher/${value._id}`)}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                View
              </button>

              {/* <button
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
              </button> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadAllSubject;
