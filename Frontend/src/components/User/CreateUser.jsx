import React, { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router";

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
      console.log(result);
      toast.success(result.data.message); // waringi, info
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
        <ToastContainer theme="dark" />
        <h2 className=" text-3xl text-center font-bold mt-20">
          Create User Form
        </h2>
        <form
          onSubmit={handelSubmit}
          className="max-w-md mx-auto p-6 bg-white rounded-lg shadow-md mt-10"
        >
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-medium mb-2"
            >
              Full Name:
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-gray-700 font-medium mb-2"
            >
              Age:
            </label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <div className="mb-6">
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
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-300"
          >
            Submit
          </button>
        </form>

        <Link to={"/user"} className="border rounded-md px-5 py-3 m-10">
          View Users
        </Link>
      </div>
    </>
  );
};

export default CreateUser;
