// import React, { useState } from "react";

// const Login = () => {
//   const [email, setEmail] = useState(null);
//   const [password, setPassword] = useState(null);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Email:", email, "Password:", password);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-semibold text-center text-gray-700">Sign in</h2>
//         <p className="text-center text-gray-500 mb-6">Continue to Gmail</p>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-gray-600">Email</label>
//             <input
//               type="email"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//           </div>
//           <div>
//             <label className="block text-gray-600">Password</label>
//             <input
//               type="password"
//               className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring-blue-500 focus:border-blue-500"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
//           >
//             Sign In
//           </button>
//         </form>
//         <p className="mt-4 text-sm text-gray-500 text-center">
//           Not your computer? Use guest mode to sign in privately.{" "}
//           <a href="#" className="text-blue-600 hover:underline">
//             Learn More
//           </a>
//         </p>
//         <p className="mt-4 text-center">
//           <a href="#" className="text-blue-600 hover:underline">Create Account</a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from "react";

const errorInitialValue = { state: false, msg: "" };

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [passwordError, setPasswordError] = useState(errorInitialValue);
  const [emailError, setEmailError] = useState(errorInitialValue);

  const toggleSignup = () => {
    setShowSignup(true);
  };

  const signIn = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      setEmailError(errorInitialValue);
      setPasswordError(errorInitialValue);
      alert("Login successful!"); // Replace with proper state management
    } catch (error) {
      if (error.message.toLowerCase().includes("password")) {
        setPasswordError({ state: true, msg: error.message });
      } else {
        setEmailError({ state: true, msg: error.message });
      }
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
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                emailError.state
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError.state && (
              <p className="text-red-500 text-xs mt-1">{emailError.msg}</p>
            )}
          </div>
          <div>
            <label className="block text-gray-600 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              className={`w-full px-4 py-2 border rounded-lg focus:ring-2 ${
                passwordError.state
                  ? "border-red-500 focus:ring-red-300"
                  : "border-gray-300 focus:ring-blue-300"
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {passwordError.state && (
              <p className="text-red-500 text-xs mt-1">{passwordError.msg}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            disabled={loading}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
        <button
          onClick={toggleSignup}
          className="mt-4 w-full text-sm text-blue-600 hover:underline"
        >
          Don't have an account? Sign Up
        </button>
        {showSignup && <p className="text-sm text-gray-600 mt-2">Signup feature coming soon...</p>}
      </div>
    </div>
  );
};

export default Login;
