import axios from "axios";
import React, { useState } from "react";

const AdminLogin = () => {
  let [email, setEmail] = useState("");
  let [passsword, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      email: email,
      password: passsword,
    };
    try {
      let result = await axios({
        url: "http://localhost:3000/webUser/login",
        method: "post",
        data: data,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Admin login Page</h1>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="passsword"
            name="password"
            id="passsword"
            value={passsword}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
        </div>

        <div>
          <button> login </button>
        </div>
      </form>
    </div>
  );
};

export default AdminLogin;
