import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router";
const AdminLogin = () => {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let data = {
      email: email,
      password: password,
    };
    try {
      let result = await axios({
        url: "http://localhost:3000/webUser/login",
        method: "post",
        data: data,
      });
      let token = result.data.token;
      localStorage.setItem("token", token);
      navigate("/home");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center items-center h-screen gap-10 md:gap-[150px] px-4 bg-gray-100">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
            Code with Alish
          </h1>
          <p className="text-gray-600 font-medium mt-4">
            Connecting your business to seamless growth and success.
          </p>
        </div>

        {/* Right Section - Admin Login Form */}
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg w-full max-w-sm">
          <form onSubmit={handleSubmit}>
            {/* <h1 className="text-2xl font-semibold mb-6 text-center">
              Admin Login
            </h1> */}

            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Login
              </button>
            </div>

            <div className="flex justify-between items-center mt-4 text-sm">
              <button type="button" className="text-blue-600 hover:underline">
                Forgot Password?
              </button>
              <button type="button" className="text-blue-600 hover:underline">
                <Link to={"/admin/register"}> Create Account</Link>
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;
