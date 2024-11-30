
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import Button from "@mui/material/Button";

const DashBord = () => {
  let [name, setName] = useState("");
  let ID = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4001/user/${ID.ID}`)
      .then((e) => {
        setName(e.data);
      })
      .catch(() => {
        console.log("Unable to fetch data in Dashboard component.");
      });
  }, [ID]);

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Navigation Bar */}
      <div id="navbar" className="bg-yellow-600 text-white py-4 shadow-lg">
        <ul className="flex justify-between items-center px-10">
          <li className="text-lg font-semibold">
          <Button variant="contained" color="secondary">
            <Link to="/">Home</Link>
            </Button>
          </li>
          <li>
            <Button variant="contained" color="secondary">
              <Link to="/create-employee" className="text-white">
                Create Employee
              </Link>
            </Button>
          </li>
          <li>
            <Button variant="contained" color="secondary">
              <Link to="/employee-list" className="text-white">
                Employee List
              </Link>
            </Button>
          </li>
          <li className="text-red-500 font-bold bg-white px-4 py-2 rounded-lg border border-dashed border-red-400">
            {name}
          </li>
         
        </ul>
      </div>

      {/* Dashboard Content */}
      <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">Dashboard</h1>
        <p className="text-gray-600 text-lg">
          Welcome to the admin panel, <span className="font-semibold">{name}</span>!
        </p>
        <p className="text-gray-500 mt-4">
          Use the navigation bar above to manage employees and view their details.
        </p>
      </div>
    </div>
  );
};

export default DashBord;
