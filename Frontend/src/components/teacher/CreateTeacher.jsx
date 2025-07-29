import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const CreateTeacher = () => {
  const [fullName, setFullName] = useState("");
  const [subject, setSubject] = useState("");
  const [age, setAge] = useState("");
  const [dob, setDOB] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { fullName, subject, age, dob, address };

    try {
      const result = await axios.post(
        "http://localhost:3000/teacher/createTeacher",
        data
      );
      console.log(result);
      toast.success(result.data.mesage);
      setFullName("");
      setSubject("");
      setAge("");
      setDOB("");
      setAddress("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <h1>Create Teacher Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="fullName">Full Name: </label>
          <input
            type="text"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor="subject">Subject: </label>
          <input
            type="text"
            id="subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor="dob">Date of Birth:</label>
          <input
            type="date"
            id="dob"
            value={dob}
            onChange={(e) => setDOB(e.target.value)}
          />
        </div>
        <br />

        <div>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default CreateTeacher;
