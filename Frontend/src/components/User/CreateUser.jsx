import React, { useState } from "react";
import axios from "axios";

const CreateUser = () => {
  let [fullName, setFullName] = useState("");
  let [age, setAge] = useState();
  let [address, setAddress] = useState("");

  const handelSubmit = async (e) => {
    e.preventDefault();
    let data = {
      fullName: fullName,
      age: age,
      address: address,
    };
    try {
      let result = await axios({
        url: "http://localhost:3000/user/create",
        method: "post",
        data: data,
      });
      console.log(result.data.data);
      setFullName("");
      setAge("");
      setAddress("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div>
        <h2>Create User Form</h2>
        <form onSubmit={handelSubmit}>
          <div>
            <label htmlFor="fullName">FullName:</label>
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
          <br />

          <div>
            <label htmlFor="age">Age:</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e) => {
                setAge(e.target.value);
              }}
            ></input>
          </div>
          <br />
          <br />

          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              name="address"
              id="address"
              value={address}
              onChange={(e) => {
                setAddress(e.target.value);
              }}
            ></input>
          </div>
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default CreateUser;
