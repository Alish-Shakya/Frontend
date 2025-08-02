import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ReadSpecificUser = () => {
  let [user, setUsers] = useState({});
  let params = useParams();

  let getData = async () => {
    try {
      let data = await axios({
        url: `http://localhost:3000/user/single/${params.id}`,
        method: "get",
      });
      setUsers(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">
          User Details
        </h1>

        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Full Name:</span> {user.fullName}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Age:</span> {user.age}
        </p>
        <p className="text-lg text-gray-700 mb-2">
          <span className="font-semibold">Address:</span> {user.address}
        </p>
      </div>
    </div>
  );
};

export default ReadSpecificUser;
