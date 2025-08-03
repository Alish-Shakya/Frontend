import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UpdateTeacher = () => {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  const getTeacher = async () => {
    try {
      const result = await axios.get(
        `http://localhost:3000/teacher/getSingleTeacher/${params.id}`
      );

      const user = result.data.data;

      setFullName(user.fullName);
      setSubject(user.subject);
      setAge(user.age);
      setDOB(user.dob);
      setAddress(user.address);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeacher();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullName: fullName,
      subject: subject,
      age: age,
      dob: dob,
      address: address,
    };

    try {
      let result = await axios({
        url: `http://localhost:3000/teacher/updateTeacher/${params.id}`,
        method: "patch",
        data: data,
      });
      console.log(result.data.data);
      navigate(`/teacher/${params.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full"
      >
        <h1 className="font-bold m-5 text-2xl text-center text-gray-800">
          Update Teacher
        </h1>
        <div>
          <label
            htmlFor="fullName"
            className="block text-gray-700 font-medium mb-2"
          >
            {" "}
            FullName:{" "}
          </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            className="w-full mb-4 px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="block text-gray-700 font-medium mb-2"
          >
            Subject:
          </label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full mb-4 px-2 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="age" className="block text-gray-700 font-medium mb-2">
            Age:
          </label>
          <input
            type="number"
            name="age"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="w-full mb-4 px-2 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>
        <div>
          <label htmlFor="dob" className="block text-gray-700 font-medium mb-2">
            Date of birth:
          </label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
            className="w-full mb-4 px-2 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <label
            htmlFor="address"
            className="block text-gray-700 font-medium mb-2"
          >
            Address:
          </label>
          <input
            type="text"
            name="address"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="w-full mb-4 px-2 py-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateTeacher;
