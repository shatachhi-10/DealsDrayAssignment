
import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

const Registration = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [cnfPassword, setCnfPassword] = useState("");
  let navigate = useNavigate();

  let submitForm = () => {
    let payload = {
      name,
      email,
      cnfPassword,
    };
    if (!name || !email || !cnfPassword) {
      alert("To register, fill all the fields..!");
    } else {
      if (password === cnfPassword) {
        axios
          .post("http://localhost:4001/register", payload)
          .then((e) => {
            alert(e.data);
            navigate("/");
          })
          .catch((e) => {
            alert("Problem in sending data to the Backend.!");
          });
      } else {
        alert("Both passwords should match.");
      }
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 text-center mb-6">
          Admin Registration
        </h1>
        <div>
          <input
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Full Name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <input
            className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Retype Password"
            type="password"
            value={cnfPassword}
            onChange={(e) => setCnfPassword(e.target.value)}
            required
          />
          <button
            className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            onClick={submitForm}
          >
            Register Me
          </button>
          <p className="text-center text-gray-600 mt-4">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Registration;
