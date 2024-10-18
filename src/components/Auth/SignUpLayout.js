import React, { useState } from "react";
import axios from "axios";

const SignUpLayout = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword(!showPassword);
  const toggleConfirmPasswordVisibility = () =>
    setShowConfirmPassword(!showConfirmPassword);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("username", username);
    await axios
      .post("e", {
        username,
        email,
        password,
      })
      .then((res) => {
        console.log(res);
      });
  };

  return (
    <div className="w-full h-full flex justify-center items-start mt-[2rem]  bg-gray-100">
      <div className=" w-[750px] h-[500px] flex flex-row justify-end  rounded-[20px] overflow-hidden shadow-2xl ">
        <div className=" flex-1 w-full h-full  overflow-hidden ">
          <img
            src={
              "https://images.unsplash.com/photo-1605001062746-4548791acc99?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            className="w-full h-full object-cover"
          />
        </div>
        <div className="bg-white shadow-md rounded-lg p-8 w-96">
          {/* Title */}
          <h2 className="text-2xl font-semibold text-center text-blue-600 mb-6">
            SIGN UP
          </h2>

          {/* First Name Input */}
          <div className="mb-4">
            <input
              type="text"
              id="username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          {/* Last Name Input
          <div className="mb-4">
            <input
              type="text"
              id="lastName"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Last name"
            />
          </div> */}

          {/* Email Input */}
          <div className="mb-4">
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          {/* Phone Input */}
          {/* <div className="mb-4">
            <input
              type="tel"
              id="phone"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Phone"
            />
          </div> */}

          {/* Password Instruction */}
          <p className="text-gray-500 text-sm mb-2">
            Your password is 8-20 characters, includes one letter and one
            number.
          </p>

          {/* Confirm Password Input */}
          <div className="mb-4 relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              onChange={(e) => setPassword(e.target.value)}
              id="confirmPassword"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="password"
            />
            <span
              className="absolute right-4 top-9 text-gray-500 cursor-pointer"
              onClick={toggleConfirmPasswordVisibility}
            >
              <i className="fas fa-eye"></i>
            </span>
          </div>

          {/* Terms of Service Checkbox */}
          <div className="mb-6">
            <input type="checkbox" id="terms" className="mr-2" />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Terms of Service & Privacy Policy
              </a>
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-blue-400 to-blue-600 text-white py-2 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300"
          >
            CREATE AN ACCOUNT
          </button>
        </div>
      </div>
    </div>
  );
};
export default SignUpLayout;
