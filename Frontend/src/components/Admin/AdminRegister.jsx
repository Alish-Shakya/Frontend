import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

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
      setEmail("");
      setPassword("");
      setDOB("");
      setGender("");
      setISMarried("");
      setContactNo("");

      console.log(result);
      toast.success(result.data.message);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
        <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
          <h1 className="text-xl md:text-3xl font-bold text-center mb-6">
            Create a new Account
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="dob"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Date of Birth
              </label>
              <input
                type="date"
                name="dob"
                id="dob"
                value={dob}
                onChange={(e) => setDOB(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                name="isMarried"
                id="isMarried"
                value={isMarried}
                checked={isMarried === true}
                onChange={(e) => setISMarried(e.target.checked)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <label
                htmlFor="isMarried"
                className="ml-2 block text-sm text-gray-700"
              >
                Married
              </label>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Gender
              </label>
              <div className="flex items-center gap-4">
                {Genders.map((item, i) => (
                  <div key={i} className="flex items-center">
                    <input
                      type="radio"
                      name="gender"
                      id={item.value}
                      value={item.value}
                      checked={gender === item.value}
                      onChange={(e) => setGender(e.target.value)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <label
                      htmlFor={item.value}
                      className="ml-2 text-sm text-gray-700"
                    >
                      {item.value}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <label
                htmlFor="contactNo"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Contact
              </label>
              <input
                type="number"
                name="contact"
                id="contact"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminRegister;
