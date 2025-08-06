import React, { useState } from "react";
import axios from "axios"; // Don't forget to import axios

const ForgotPassword = () => {
  let [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault(); // Typo fixed
    let data = {
      email: email,
    };
    try {
      let result = await axios({
        url: "http://localhost:3000/webUser/forgot-password",
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
      <p>Enter your email to reset your password</p>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Added onSubmit */}
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
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
