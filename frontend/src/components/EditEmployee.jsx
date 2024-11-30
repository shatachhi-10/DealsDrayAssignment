// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'

// const EditEmployee = () => {
//   let [name, setName] = useState("")
//   let [email, setEmail] = useState('')
//   let [phone, setPhone] = useState()
//   let [designation, setDesignation] = useState()
//   let [gender, setGender] = useState()
//   let [courses, setCourses] = useState([])
//   let [image, setImage] = useState()

//   let idObj = useParams()
//   let navigate = useNavigate()
//   useEffect(() => {
//     axios.get(`http://localhost:4001/employee-list/${idObj.ID}`)
//       .then((e) => {
//         setName(e.data.name);
//         setEmail(e.data.email);
//         setPhone(e.data.phone)
//         setDesignation(e.data.designation)
//         setGender(e.data.gender)
//         setCourses(e.data.course)
//       })
//       .catch(() => { console.log("erro"); })
//   }, [])

//   // checkBox handling
//   const handleCheckboxChange = (event) => {
//     const { value, checked } = event.target;
//     if (checked) {
//       setCourses([...courses, value]);
//     } else {
//       setCourses(courses.filter(course => course !== value));
//     }
//   };

//   let formHandle = (e) => {
//     e.preventDefault()
//     let payload = {
//       name: name,
//       email: email,
//       phone: phone,
//       image: image,
//       designation: designation,
//       gender: gender,
//       course: courses
//     }
//     axios.put(`http://localhost:4001/employee-list/${idObj.ID}`, payload, {
//       headers: {
//         'Content-Type': 'multipart/form-data'
//       }
//     })
//       .then((e) => { alert(e.data); })
//       .catch(() => { console.log("err "); })

//     navigate("/employee-list")

//   }

//   return (
//     <div className=' max-w-[940px]  h-[600px] border-4 border-blue-900 mx-auto relative top-[-90px] shadow-xl scale-75 p-[30px]'>
//       <h1 className='text-center font-bold text-2xl my-3'>Update Employee Data</h1>
//       <div className='border border-red-600 max-w-[300px] mx-auto my-5 p-10'>
//         <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Enter Full Name' type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
//         <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Enter Email' type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
//         <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Enter Phone Number' type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} />

//         {/* designation dropdown */}

//         <label htmlFor="">Designation</label>
//         <select name="gender" value={designation} onChange={(e) => setDesignation(e.target.value)} className="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
//           <option value="HR">HR</option>
//           <option value="Manager">Manager</option>
//           <option value="Sales">Sales</option>
//         </select>

//         {/* Gender radio button */}

//         <label htmlFor="">Gender : </label><br />
//         <input type="radio" id="male" name="gender" value="Male" checked={gender == 'Male'} onChange={(e) => setGender(e.target.value)} />
//         <label htmlFor="male"> Male </label>
//         <input type="radio" id="female" name="gender" value="Female" checked={gender == 'Female'} onChange={(e) => setGender(e.target.value)} />
//         <label htmlFor="female"> Female </label><br />

//         {/* Courses check boxes */}

//         <label>Course :</label><br />
//         <input type="checkbox" id="MCA" name="course" value="MCA" checked={courses.includes('MCA')} onChange={handleCheckboxChange} />
//         <label htmlFor="MCA"> MCA </label>
//         <input type="checkbox" id="BCA" name="course" value="BCA" checked={courses.includes('BCA')} onChange={handleCheckboxChange} />
//         <label htmlFor="BCA"> BCA </label>
//         <input type="checkbox" id="BSC" name="course" value="BSC" checked={courses.includes('BSC')} onChange={handleCheckboxChange} />
//         <label htmlFor="BSC"> BSC </label>

//         <label htmlFor="">Upload your photo</label><br />
//         <input className="" type="file" name='image' onChange={(e) => { setImage(e.target.files[0]) }} /><br />
//         <button className='bg-red-300 ml-5 rounded-lg p-1' onClick={formHandle}> Update Changes</button>
//       </div>

//     </div>
//   )
// }

// export default EditEmployee

import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [phone, setPhone] = useState();
  let [designation, setDesignation] = useState();
  let [gender, setGender] = useState();
  let [courses, setCourses] = useState([]);
  let [image, setImage] = useState();

  let idObj = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`http://localhost:4001/employee-list/${idObj.ID}`)
      .then((e) => {
        setName(e.data.name);
        setEmail(e.data.email);
        setPhone(e.data.phone);
        setDesignation(e.data.designation);
        setGender(e.data.gender);
        setCourses(e.data.course);
      })
      .catch(() => {
        console.log("Error fetching data.");
      });
  }, [idObj]);

  // CheckBox handling
  const handleCheckboxChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setCourses([...courses, value]);
    } else {
      setCourses(courses.filter((course) => course !== value));
    }
  };

  const formHandle = (e) => {
    e.preventDefault();
    let payload = {
      name,
      email,
      phone,
      image,
      designation,
      gender,
      course: courses,
    };
    axios
      .put(`http://localhost:4001/employee-list/${idObj.ID}`, payload, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((e) => {
        alert(e.data);
      })
      .catch(() => {
        console.log("Error updating data.");
      });

    navigate("/employee-list");
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="w-full max-w-2xl bg-white shadow-lg rounded-lg p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Update Employee Data
        </h1>
        <form onSubmit={formHandle}>
          <div className="space-y-4">
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Full Name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Phone Number"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />

            <label className="block font-semibold">Designation</label>
            <select
              name="designation"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="HR">HR</option>
              <option value="Manager">Manager</option>
              <option value="Sales">Sales</option>
            </select>

            <label className="block font-semibold">Gender</label>
            <div className="flex gap-4">
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Male"
                  checked={gender === "Male"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Male
              </label>
              <label>
                <input
                  type="radio"
                  name="gender"
                  value="Female"
                  checked={gender === "Female"}
                  onChange={(e) => setGender(e.target.value)}
                  className="mr-2"
                />
                Female
              </label>
            </div>

            <label className="block font-semibold">Courses</label>
            <div className="flex gap-4">
              {["MCA", "BCA", "BSC"].map((course) => (
                <label key={course}>
                  <input
                    type="checkbox"
                    value={course}
                    checked={courses.includes(course)}
                    onChange={handleCheckboxChange}
                    className="mr-2"
                  />
                  {course}
                </label>
              ))}
            </div>

            <label className="block font-semibold">Upload Photo</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
              type="submit"
              className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
            >
              Update Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
