import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ReadSpecificTeacher = () => {
  let [teacher, setTeacher] = useState({});
  let params = useParams();
  console.log(params);

  let getData = async () => {
    try {
      let data = await axios({
        url: `http://localhost:3000/teacher/getSingleTeacher/${params.id}`,
        method: "get",
      });
      setTeacher(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="min-h-screen flex justify-center items-center p-4 bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="font-bold text-3xl justify-center mb-4">User Details</h1>

        <p className="text-lg text-gray-500 ">
          <span className="font-semibold">Full name:</span>
          {teacher.fullName}
        </p>

        <p className="text-lg text-gray-500 ">
          <span className="font-semibold">Subject:</span>
          {teacher.subject}
        </p>

        <p className="text-lg text-gray-500 ">
          <span className="font-semibold">Date of Birth:</span>
          {teacher.dob}
        </p>

        <p className="text-lg text-gray-500 ">
          <span className="font-semibold">Age:</span>
          {teacher.age}
        </p>

        <p className="text-lg text-gray-500 ">
          <span className="font-semibold">Address: </span>
          {teacher.address}
        </p>
      </div>
    </div>
  );
};

export default ReadSpecificTeacher;
