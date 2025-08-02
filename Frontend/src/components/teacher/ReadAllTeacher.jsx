import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Swal from "sweetalert2";

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

  const handleDelete = async (id) => {
    try {
      let data = await axios.delete(
        `http://localhost:3000/teacher/deleteTeacher/${id}`
      );
      console.log(data);
      getTeachers();
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
        Swal.fire("Deleted!", "Your file has been deleted.", "success");
        handleDelete(id);
      }
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-extralight justify-center m-10">
        All Teachers
      </h1>
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

          <div className="">
            <button
              onClick={() => nagivate(`/teacher/${value._id}`)}
              className="border rounded-2xl px-3 mr-5 mt-3 hover:bg-amber-50 cursor-pointer"
            >
              View
            </button>

            <button className="border rounded-2xl px-3 mr-5 mt-3 hover:bg-amber-50 cursor-pointer">
              Edit
            </button>

            <button
              className="border rounded-2xl px-3 mr-5 mt-3 hover:bg-amber-50 cursor-pointer"
              onClick={() => alertDelete(value._id)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ReadAllTeacher;
