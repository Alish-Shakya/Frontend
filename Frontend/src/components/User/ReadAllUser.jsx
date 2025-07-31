import axios, { Axios } from "axios";
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
          text: "Your file has been deleted.",
          icon: "success",
        });
        handelDelete(id);
      }
    });
  };

  return (
    <div>
      {users.map((value, index) => {
        return (
          <div
            key={index}
            style={{
              border: "2px solid black",
              padding: "20px",
              margin: "20px",
            }}
          >
            <p>Fullname is {value.fullName}</p>
            <p>Age is {value.age}</p>
            <p>Address is {value.address}</p>

            <br />

            <button
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => {
                navigate(`/user/${value._id}`);
              }}
            >
              view
            </button>

            <button
              onClick={() => {
                navigate(`/user/update/${value._id}`);
              }}
              style={{ marginRight: "10px", cursor: "pointer" }}
            >
              Edit
            </button>
            <button
              style={{ marginRight: "10px", cursor: "pointer" }}
              onClick={() => {
                alertFunction(value._id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ReadAllUser;
