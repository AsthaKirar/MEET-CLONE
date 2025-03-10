import React, { useState } from "react";
import axiosInstance from "../config/axiosInstance";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const { username, email, password } = formData;
  console.log(username, email, password);
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axiosInstance.post("/users/register", {
        username,
        email,
        password,
      });
      console.log(res);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-[600px]">
        {/* Google Logo */}
        <div className="flex justify-center">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWJpwUvZMFKp_kXyJA2yd8zulrzNfK4ZIOgQ&s"
            alt=""
            className="w-30 h-14"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center mt-2">
          Create your Google Account
        </h2>

        <form onSubmit={onSubmit} className="mt-4">
          <div className="flex space-x-2">
            <input
              type="text"
              name="username"
              placeholder="username"
              value={formData.username}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded-md"
            />
            {/* <input
              type="text"
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
              className="w-1/2 p-2 border border-gray-300 rounded-md"
            /> */}
          </div>

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full mt-3 p-2 border border-gray-300 rounded-md"
          />

          <input
            type={formData.showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full mt-3 p-2 border border-gray-300 rounded-md"
          />

          {/* <input
            type={formData.showPassword ? "text" : "password"}
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full mt-3 p-2 border border-gray-300 rounded-md"
          /> */}

          <label className="flex items-center mt-2 text-sm">
            <input
              type="checkbox"
              onChange={() =>
                setFormData({
                  ...formData,
                  showPassword: !formData.showPassword,
                })
              }
              className="mr-2"
            />
            Show Password
          </label>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 mt-4 rounded-md hover:bg-blue-700"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-gray-600 mt-4 text-center">
          One account. All of Google working for you.
        </p>

        <Link
          to={"/login"}
          className="text-blue-500 text-center mt-2 cursor-pointer"
        >
          Sign In Instead
        </Link>
      </div>
    </div>
  );
};

export default Signup;
