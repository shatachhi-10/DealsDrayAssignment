
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
