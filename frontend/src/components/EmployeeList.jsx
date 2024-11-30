

import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const EmployeeList = () => {
  let [infoFromDB, setInfoFromDB] = useState([]);
  let [reload, setReload] = useState(0);

  // Fetching data from backend
  useEffect(() => {
    axios
      .get("http://localhost:4001/employee-list")
      .then((e) => {
        setInfoFromDB(e.data);
      })
      .catch((e) => {
        console.log("Error fetching data in EmployeeList useEffect");
      });
    setReload(1);
  }, [reload]);

  const deleteUser = (id) => {
    axios.delete(`http://localhost:4001/employee-list/${id}`).then(() => {
      setReload((prev) => prev + 1); // Force reloading after deletion
    });
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Employee List</h1>
        <p className="text-lg font-semibold text-gray-600">
          Total Count: {infoFromDB.length}
        </p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse bg-white shadow-lg rounded-lg">
          <thead>
            <tr className="bg-blue-500 text-white text-left">
              <th className="px-6 py-3 border">Unique ID</th>
              <th className="px-6 py-3 border">Image</th>
              <th className="px-6 py-3 border">Name</th>
              <th className="px-6 py-3 border">Email</th>
              <th className="px-6 py-3 border">Phone</th>
              <th className="px-6 py-3 border">Designation</th>
              <th className="px-6 py-3 border">Gender</th>
              <th className="px-6 py-3 border">Course</th>
              <th className="px-6 py-3 border">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700 text-sm">
            {infoFromDB.map((item, i) => (
              <tr
                key={item._id}
                className={`border ${
                  i % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-blue-50 transition`}
              >
                <td className="px-6 py-3 border text-center">{i + 1}</td>
                <td className="px-6 py-3 border text-center">
                  {console.log(item.image)}
                  <img
                    src={`http://localhost:4001/images/${item.image}`}
                    alt={item.name}
                    className="h-16 w-16 rounded-full object-cover mx-auto"
                  />
                </td>
                <td className="px-6 py-3 border">{item.name}</td>
                <td className="px-6 py-3 border">{item.email}</td>
                <td className="px-6 py-3 border">{item.phone}</td>
                <td className="px-6 py-3 border">{item.designation}</td>
                <td className="px-6 py-3 border">{item.gender}</td>
                <td className="px-6 py-3 border">{item.course.join(", ")}</td>
                <td className="px-6 py-3 border flex justify-center gap-2">
                  <Link
                    to={`/edit-employee/${item._id}`}
                    className="bg-blue-500 text-white px-3 py-1 rounded-lg hover:bg-blue-600 transition"
                  >
                    Edit
                  </Link>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => deleteUser(item._id)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
