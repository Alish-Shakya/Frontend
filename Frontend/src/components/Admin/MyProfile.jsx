import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const MyProfile = () => {
  const [profile, setProfile] = useState({});
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const getProfile = async () => {
    try {
      const result = await axios({
        url: "http://localhost:3000/webUser/profile",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setProfile(result.data.result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProfile();
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">My Profile</h1>

        <div className="space-y-4 text-gray-700 text-lg">
          <p>
            <span className="font-semibold">Full Name:</span> {profile.fullName}
          </p>
          <p>
            <span className="font-semibold">Email:</span> {profile.email}
          </p>
          <p>
            <span className="font-semibold">Contact No:</span>{" "}
            {profile.contactNo}
          </p>
          <p>
            <span className="font-semibold">Gender:</span> {profile.gender}
          </p>
          <p>
            <span className="font-semibold">Date of Birth:</span> {profile.dob}
          </p>
          <p>
            <span className="font-semibold">Married:</span>{" "}
            {profile.isMarried === true ? "Yes" : "No"}
          </p>
        </div>

        <div className="mt-8">
          <button
            className="w-full py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            onClick={() => navigate("/admin/profile-update")}
          >
            Update Profile
          </button>

          <button>reset password </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
