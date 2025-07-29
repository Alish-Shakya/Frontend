import axios from "axios";
import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const CreateSubject = () => {
  let [subjectName, setSubjectName] = useState("");
  let [code, setCode] = useState("");
  let [creditHrs, setCreditHrs] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();

    let data = {
      subjectName: subjectName,
      code: code,
      creditHrs: creditHrs,
    };
    try {
      let result = await axios({
        url: "http://localhost:3000/subject/createSubject",
        method: "POST",
        data: data,
      });
      console.log(result);
      toast.success(result.data.message);
      setSubjectName("");
      setCode("");
      setCreditHrs("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <h1>Create subject Form </h1>

      <form onSubmit={handelSubmit}>
        <div>
          <label htmlFor="subjectName">Subject:</label>
          <input
            type="text"
            name="subject"
            id="subject"
            value={subjectName}
            onChange={(e) => {
              setSubjectName(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <br />

        <div>
          <label htmlFor="code">Code:</label>
          <input
            type="number"
            name="code"
            id="code"
            value={code}
            onChange={(e) => {
              setCode(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <br />

        <div>
          <label htmlFor="creditHrs">Credit hours:</label>
          <input
            type="number"
            name="credit"
            id="Credit"
            value={creditHrs}
            onChange={(e) => {
              setCreditHrs(e.target.value);
            }}
          ></input>
        </div>
        <br />
        <button type="submit"> Submit </button>
      </form>
    </>
  );
};

export default CreateSubject;
