import axios from "axios";
import React, { useEffect, useState } from "react";
import { data } from "react-router";

const UpdateProfile = () => {
  let [fullName, setFullName] = useState("");
  let [isMarried, setISMarried] = useState(false);
  let [contactNo, setContactNo] = useState(0);

  let token = localStorage.getItem("token");

  let getData = async () => {
    try {
      let result = await axios({
        url: "http://localhost:3000/webUser/profile",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      let data = result.data.result;

      setFullName(data.fullName);
      setISMarried(data.isMarried);
      setContactNo(data.contactNo);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const handleSumbit = async (e) => {
    e.preventDefault();
    let data = {
      fullName: fullName,
      isMarried: isMarried,
      contactNo: contactNo,
    };

    try {
      let result = await axios({
        url: "http://localhost:3000/webUser/update-profile",
        method: "patch",

        headers: {
          Authorization: "Bearer ${token}",
        },
        data: data,
      });
      console.log(result);
    } catch (error) {}
  };

  return (
    <div>
      <form onSubmit={handleSumbit}>
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
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
