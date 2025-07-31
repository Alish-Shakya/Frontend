import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";

const UpdateUser = () => {
  let [fullName, setFullName] = useState();
  let [age, setAge] = useState();
  let [address, setAddress] = useState();

  let params = useParams();

  let navigate = useNavigate();

  const getUser = async () => {
    try {
      let result = await axios({
        url: `http://localhost:3000/user/single/${params.id}`,
        method: "get",
      });
      let user = result.data.data;
      setFullName(user.fullName);
      setAge(user.age);
      setAddress(user.address);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      fullName: fullName,
      age: age,
      address: address,
    };

    try {
      let result = await axios({
        url: `http://localhost:3000/user/update/${params.id}`,
        method: "patch",
        data: data,
      });
      //       console.log(result);
      navigate(`/user/${params.id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>User upadate form</h1>
        <div>
          <label htmlFor="fullname">FullName:</label>
          <input
            type="text"
            name="fullName"
            id="fullName"
            value={fullName}
            onChange={(e) => {
              setFullName(e.target.value);
            }}
          />
        </div>
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
          />
        </div>
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
          />
        </div>
        <br />
        <div>
          <button type="submit"> Update </button>
        </div>
      </form>
    </>
  );
};

export default UpdateUser;
