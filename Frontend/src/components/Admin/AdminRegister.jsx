import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminRegister = () => {
  let [fullName, setFullName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [dob, setDOB] = useState("");
  let [isMarried, setISMarried] = useState(false);
  let [contactNo, setContactNo] = useState("");
  let [gender, setGender] = useState("male");

  let Genders = [
    { value: "male", label: "Male" },
    { value: "female", label: "Femail" },
    { value: "other", label: "Other" },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    let data = {
      fullName: fullName,
      email: email,
      password: password,
      dob: dob,
      isMarried: isMarried,
      contactNo: contactNo,
      gender: gender,
    };
    try {
      let result = await axios({
        url: "http://localhost:3000/webUser/register",
        method: "post",
        data: data,
      });
      setFullName("");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <h1>Account Registration page</h1>

      <form action="">
        <div>
          <label htmlFor="fullName">FullName: </label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          ></input>
        </div>
        <br />

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>
        <br />

        <div>
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>
        <br />

        <div>
          <label htmlFor="dob">Date of Birth: </label>
          <input
            type="date"
            name="dob"
            id="dob"
            value={dob}
            onChange={(e) => {
              setDOB(e.target.value);
            }}
          ></input>
        </div>
        <br />

        <div>
          <label htmlFor="married">IsMarried: </label>
          <input
            type="checkbox"
            name="isMarried"
            id="isMarried"
            value={isMarried}
            checked={isMarried === true}
            onChange={(e) => {
              setISMarried(e.target.checked);
            }}
          ></input>
        </div>
        <br />

        <div>
          <label>Gender: </label>
          {Genders.map((item, i) => {
            return (
              <span key={i}>
                <label htmlFor={item.value}>{item.value}</label>
                <input
                  type="radio"
                  name={item.value}
                  id={item.value}
                  checked={gender === item.value}
                  value={item.value}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                ></input>
              </span>
            );
          })}
        </div>
        <br />
        <div>
          <label htmlFor="contactNo"> Contact: </label>
          <input
            type="number"
            name="contact"
            id="contact"
            value={contactNo}
            onChange={(e) => {
              setContactNo(e.target.value);
            }}
          ></input>
        </div>
        <br />

        <div>
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default AdminRegister;
