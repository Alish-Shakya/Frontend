import axios from "axios";
import React, { useEffect, useState } from "react";

const UpdateProfile = () => {
  const [fullName, setFullName] = useState("");
  const [isMarried, setISMarried] = useState(false);
  const [contactNo, setContactNo] = useState(0);

  const token = localStorage.getItem("token");

  const getData = async () => {
    try {
      const result = await axios({
        url: "http://localhost:3000/webUser/profile",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = result.data.result;

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      fullName: fullName,
      isMarried: isMarried,
      contactNo: contactNo,
    };

    try {
      const result = await axios({
        url: "http://localhost:3000/webUser/update-profile",
        method: "patch",
        headers: {
          Authorization: `Bearer ${token}`, // Fix backtick syntax here
        },
        data: data,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Update Profile</h1>

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

          <div className="flex items-center">
            <input
              type="checkbox"
              name="isMarried"
              id="isMarried"
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
            <label
              htmlFor="contactNo"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Contact No
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
              Update Profile
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
