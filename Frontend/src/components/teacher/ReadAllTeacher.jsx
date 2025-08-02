import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const ReadAllTeacher = () => {
  let [teachers, setTeachers] = useState([]);
  const nagivate = useNavigate();

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

  return (
    <div>
      <h1>All Teachers</h1>
      {teachers.map((value) => (
        <div
          key={value._id}
          style={{
            border: "2px solid black",
            padding: "20px",
            margin: "20px",
          }}
        >
          <p>Fullname is {value.fullName}</p>
          <p>subject is {value.subject}</p>
          <p>Age is {value.age}</p>
          <p>dob is {value.dob}</p>
          <p>address is {value.address}</p>
        </div>
      ))}
    </div>
  );
};

export default ReadAllTeacher;
