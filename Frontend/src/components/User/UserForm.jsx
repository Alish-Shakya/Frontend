import React from "react";
import { Link } from "react-router";

const UserForm = () => {
  return (
    <div>
      <Link
        to="/user/create"
        className="block p-6 border rounded-xl shadow hover:shadow-lg hover:bg-blue-50 transition"
      >
        <h2 className="text-xl font-semibold">Create User</h2>
        <p className="text-gray-600">Add a new user to the system</p>
      </Link>
    </div>
  );
};

export default UserForm;
