import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const ReadSpecificUser = () => {
  let [user, setUsers] = useState({});
  let params = useParams();
  // console.log(params.id);
  //params == route ko paramater

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
    <>
      <h1>read Specific page</h1>
      <p>FullName is {user.fullName}</p>
      <p>Age is {user.age}</p>
      <p>Address is {user.address}</p>
    </>
  );
};

export default ReadSpecificUser;
