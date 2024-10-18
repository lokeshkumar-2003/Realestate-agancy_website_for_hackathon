import React, { useState } from "react";
import axios from "axios";

const SignInLayout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
    axios.post("http://localhost:2012/api/auth/login", {
      email,
      password,
    });
  };

  return (
    <div className="w-full h-full flex justify-center items-center  bg-gray-100">
      <div className=" w-[750px] h-[450px] flex flex-row justify-end  rounded-[20px] overflow-hidden shadow-2xl ">
        <div className=" flex-1 w-full h-full  overflow-hidden ">
          <img
            src={
              "https://images.unsplash.com/photo-1605001062746-4548791acc99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white shadow-lg rounded-lg p-8 w-96">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
            SIGN IN
          </h2>

          {/* Email Input */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm mb-2" htmlFor="email">
              <i className="far fa-envelope"></i> E-mail
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E-mail"
            />
          </div>

          {/* Password Input */}
          <div className="mb-4 relative">
            <label
              className="block text-gray-700 text-sm mb-2"
              htmlFor="password"
            >
              <i className="fas fa-lock"></i> Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Password"
            />
            <span className="absolute right-4 top-9 text-gray-500 cursor-pointer">
              <i className="fas fa-eye"></i>
            </span>
          </div>

          {/* Remember me and forgot password */}
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm text-gray-700">
                Remember
              </label>
            </div>
            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot your password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            SIGN IN
          </button>

          {/* Create Account */}
          <p className="text-center text-gray-700 text-sm mt-6">
            New member?{" "}
            <a href="#" className="text-blue-500 hover:underline">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignInLayout;
