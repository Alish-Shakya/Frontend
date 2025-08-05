import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const MyProfile = () => {
  let [profile, setProfile] = useState({});

  let navigate = useNavigate();

  let token = localStorage.getItem("token");

  let getProfile = async () => {
    try {
      let result = await axios({
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
    <div className="text-xl">
      <h1>My Profile</h1>
      <div className="p-10">
        <p>FullName is {profile.fullName}</p>
        <p>Email is {profile.email}</p>
        <p>Contact no is {profile.contactNo}</p>
        <p>gender is {profile.gender}</p>
        <p>Date of birth is {profile.dob}</p>
        <p>isMarried {profile.isMarried === true ? "yes" : "No"}</p>
      </div>

      <div>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          onClick={() => {
            navigate("/admin/profile-update");
          }}
        >
          Update Profile
        </button>
      </div>
    </div>
  );
};

export default MyProfile;
