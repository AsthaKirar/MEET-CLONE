import React, { useContext, useState } from "react";
import axiosInstance from "../config/axiosInstance";
import { Link, useNavigate } from "react-router-dom";
import { useAppContext } from "../../context/ContextApp";

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const { currentUser, setCurrentUser } = useAppContext();
  // console.log(currentUser, setCurrentUser, "LOgin");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstance.post("/users/login", {
        email,
        password,
      });
      // console.log(response.data.user);
      setCurrentUser(response.data.user);

      navigate("/");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-sm w-full">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Sign In
        </h2>
        <form onSubmit={signIn} className="space-y-4">
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 `}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <Link
          to={"/register"}
          className="mt-4 w-full text-sm text-blue-600 hover:underline"
        >
          Don't have an account? Sign Up
        </Link>
        {showSignup && (
          <p className="text-sm text-gray-600 mt-2">
            Signup feature coming soon...
          </p>
        )}
      </div>
    </div>
  );
};

export default Login;
