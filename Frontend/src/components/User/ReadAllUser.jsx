import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const ReadAllUser = () => {
  let [users, setUsers] = useState([]);
  let navigate = useNavigate();

  let getUsers = async () => {
    try {
      let data = await axios({
        url: "http://localhost:3000/user/get-all",
        method: "get",
      });
      setUsers(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handelDelete = async (id) => {
    try {
      let data = await axios({
        url: `http://localhost:3000/user/delete/${id}`,
        method: "delete",
      });
      console.log(data);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };

  const alertFunction = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed === true) {
        Swal.fire({
          title: "Deleted!",
          text: "User has been deleted.",
          icon: "success",
        });
        handelDelete(id);
      }
    });
  };

  return (
    <div className="max-w-6xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">
        All Users
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {users.map((value, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg p-6 shadow-md bg-white"
          >
            <p className="text-lg font-semibold text-gray-700">
              Full Name: <span className="font-normal">{value.fullName}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Age: <span className="font-normal">{value.age}</span>
            </p>
            <p className="text-lg font-semibold text-gray-700">
              Address: <span className="font-normal">{value.address}</span>
            </p>

            <div className="mt-4 flex flex-wrap gap-3">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
                onClick={() => navigate(`/user/${value._id}`)}
              >
                View
              </button>

              <button
                className="bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
                onClick={() => navigate(`/user/update/${value._id}`)}
              >
                Edit
              </button>

              <button
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition"
                onClick={() => alertFunction(value._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadAllUser;
