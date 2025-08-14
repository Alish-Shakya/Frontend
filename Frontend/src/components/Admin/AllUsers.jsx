import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

const AllUsers = () => {
  let [users, setUsers] = useState([]);
  let navigate = useNavigate();

  let token = localStorage.getItem("token");
  const getUsers = async () => {
    try {
      let data = await axios({
        url: "http://localhost:3000/webUser/all-webUser",
        method: "get",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // console.log(data);
      setUsers(data.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const handeleDelete = async (id) => {
    try {
      let result = await axios.delete(
        `http://localhost:3000/webUser/delete-web/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(result);
      getUsers();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>View all users</h1>

      {users.map((value) => (
        <div
          key={value._id}
          style={{
            border: "1px solid black",
            margin: "10px",
            padding: "10px",
          }}
        >
          <p>full Name is {value.fullName}</p>
          <p>Contact No. is {value.contactNo}</p>
          <p>Email is {value.email}</p>
          <p>Gender is {value.gender}</p>
          <p>is Married is {value.isMarried}</p>
          <p>date of birth is {value.dob}</p>
          <p>your role is {value.role}</p>

          <button
            style={{
              marginRight: "20px",
              cursor: "pointer",
              border: "1px solid red",
              padding: "5px",
            }}
          >
            View
          </button>

          <button
            style={{
              marginRight: "20px",
              cursor: "pointer",
              border: "1px solid red",
              padding: "5px",
            }}
          >
            Edit
          </button>

          <button
            onClick={() => handeleDelete(value._id)}
            style={{
              marginRight: "20px",
              cursor: "pointer",
              border: "1px solid red",
              padding: "5px",
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default AllUsers;
