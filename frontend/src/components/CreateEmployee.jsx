// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
// import axios from "axios"
// const CreateEmployee = () => {
//     let navigate = useNavigate();
//     let [name, setName] = useState("")
//     let [email, setEmail] = useState('')
//     let [phone, setPhone] = useState()
//     let [designation, setDesignation] = useState()
//     let [gender, setGender] = useState("")
//     let [course, setCourse] = useState([])
//     let [image, setImage] = useState()

//     let formHandle = (e) => {
//         e.preventDefault()
//         let payload = {
//             name: name,
//             email: email,
//             phone: phone,
//             image: image,
//             designation: designation,
//             gender: gender,
//             course: course
//         }

//         if (!name || !email || !phone || !designation || !gender || !course || !image) {
//             alert("To Create Employee Fill all the fields..!")
//         }
//         else {
//             axios.post("http://localhost:4001/employees", payload, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data'
//                 }
//             })
//                 .then((e) => { alert(e.data) })
//                 .catch(() => { console.log("can not register"); })

//             navigate("/employee-list")
//         }}

//         let handleCourseChange = (e) => {
//             const course1 = e.target.value;
//             const isChecked = e.target.checked;
//             if (isChecked) {
//                 setCourse(course.concat(course1));
//             }
//             else {
//                 setCourse(course.filter(item => item !== course1));
//             }
//         };

//         return (
//             <div className=' max-w-[940px]  h-[600px] border-4 border-blue-900 mx-auto relative top-[-80px] shadow-xl scale-75 p-[30px]'>
//                 <h1 className='text-center font-bold text-2xl my-3'>Create Employee</h1>
//                 <div className='border border-red-600 max-w-[300px] mx-auto my-5 p-8'>
//                     <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Enter Full Name' type="text" value={name} onChange={(e) => { setName(e.target.value) }} />
//                     <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Enter Email' type="text" value={email} onChange={(e) => { setEmail(e.target.value) }} />
//                     <input className='bg-white border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Enter Phone Number' type="text" value={phone} onChange={(e) => { setPhone(e.target.value) }} />

//                     {/* designation dropdown */}
//                     <label htmlFor="">Designation</label>
//                     <select onChange={(e) => { setDesignation(e.target.value); }} name='designation' required class="block appearance-auto w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
//                         <option value="HR">HR</option>
//                         <option value="Manager">Manager</option>
//                         <option value="Sales">Sales</option>
//                     </select>

//                     {/* Gender radio button */}
//                     <label htmlFor="">Geneder : </label><br />
//                     <input type="radio" id="male" name="gender" value={gender} onChange={(e) => { setGender("Male") }} />
//                     <label for="male"> Male </label>
//                     <input type="radio" id="female" name="gender" value={gender} onChange={(e) => { setGender("Female") }} />
//                     <label for="female"> Female </label><br></br>

//                     {/* Courses check boxes */}
//                     <label>Course :</label><br />
//                     <input type="checkbox" id="MCA" name="course" value="MCA" checked={course.includes('MCA')} onChange={handleCourseChange} />
//                     <label for="MCA"> MCA </label>
//                     <input type="checkbox" id="BCA" name="course" value="BCA" checked={course.includes('BCA')} onChange={handleCourseChange} />
//                     <label for="BCA"> BCA </label>
//                     <input type="checkbox" id="BSC" name="course" value="BSC" checked={course.includes('BSC')} onChange={handleCourseChange} />
//                     <label for="BSC"> BSC </label><br />

//                     {/* file upload */}
//                     <label htmlFor="">Upload your photo</label><br />
//                     <input accept="image/jpeg, image/png" type="file" name='image' onChange={(e) => { setImage(e.target.files[0]) }} /><br />

//                     <button className='bg-red-300 ml-5 rounded-lg p-1' onClick={formHandle}>Register Me</button>
//                 </div>

//             </div>
//         )
//     }

//     export default CreateEmployee






import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const CreateEmployee = () => {
    let navigate = useNavigate();
    let [name, setName] = useState('');
    let [email, setEmail] = useState('');
    let [phone, setPhone] = useState();
    let [designation, setDesignation] = useState();
    let [gender, setGender] = useState('');
    let [course, setCourse] = useState([]);
    let [image, setImage] = useState();

    let formHandle = (e) => {
        e.preventDefault();
        let payload = { name, email, phone, image, designation, gender, course };

        if (!name || !email || !phone || !designation || !gender || !course || !image) {
            alert('To Create Employee Fill all the fields..!');
        } else {
            axios
                .post('http://localhost:4001/employees', payload, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                })
                .then((e) => {
                    alert(e.data);
                })
                .catch(() => {
                    console.log('Cannot register');
                });

            navigate('/employee-list');
        }
    };

    let handleCourseChange = (e) => {
        const course1 = e.target.value;
        const isChecked = e.target.checked;
        if (isChecked) {
            setCourse(course.concat(course1));
        } else {
            setCourse(course.filter((item) => item !== course1));
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-green-200">
            <div className="w-full max-w-lg bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-semibold text-center text-green-800 mb-6">Create Employee</h1>
                <form onSubmit={formHandle} className="space-y-6">
                    {/* Full Name */}
                    <input
                        type="text"
                        placeholder="Enter Full Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Enter Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
                    />

                    {/* Phone */}
                    <input
                        type="tel"
                        placeholder="Enter Phone Number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 placeholder-gray-500"
                    />

                    {/* Designation */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-1">Designation</label>
                        <select
                            onChange={(e) => setDesignation(e.target.value)}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        >
                            <option value="" disabled selected>
                                Select Designation
                            </option>
                            <option value="HR">HR</option>
                            <option value="Manager">Manager</option>
                            <option value="Sales">Sales</option>
                        </select>
                    </div>

                    {/* Gender */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Gender</label>
                        <div className="flex items-center space-x-4">
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Male"
                                    onChange={(e) => setGender('Male')}
                                    className="mr-2"
                                />
                                Male
                            </label>
                            <label className="flex items-center">
                                <input
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                    onChange={(e) => setGender('Female')}
                                    className="mr-2"
                                />
                                Female
                            </label>
                        </div>
                    </div>

                    {/* Courses */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Courses</label>
                        <div className="flex items-center space-x-4">
                            {['MCA', 'BCA', 'BSC'].map((courseName) => (
                                <label key={courseName} className="flex items-center">
                                    <input
                                        type="checkbox"
                                        value={courseName}
                                        checked={course.includes(courseName)}
                                        onChange={handleCourseChange}
                                        className="mr-2"
                                    />
                                    {courseName}
                                </label>
                            ))}
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className="block text-gray-700 font-medium mb-2">Upload Your Photo</label>
                        <input
                            type="file"
                            accept="image/jpeg, image/png"
                            onChange={(e) => setImage(e.target.files[0])}
                            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition duration-300"
                    >
                        Register Me
                    </button>
                </form>
            </div>
        </div>
    );
};

export default CreateEmployee;
