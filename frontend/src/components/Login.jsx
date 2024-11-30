// import React, {useState} from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import axios from 'axios'
// import Button from '@mui/material/Button';

// const Login = () => {
//     let [email, setEmail] = useState('')
//     let [password, setPassword] = useState('')
//     let navigate = useNavigate()

//     let login=()=>{
//         let payload = {email, password}
//         axios.post('http://localhost:4001/login', payload)
//         .then((e)=>{
//             if(e.data.status == "success"){
//                 navigate(`/dashbord/${e.data.id}`)
//             }
//             else if(e.data.status == "fail"){
//                 alert("wrong password")
//             }
//             else if(e.data.status == "noUser"){
//                 alert("Invalid Email")
//             }
//         })
//     }

//     return (
//         <div>
//             <div className=' max-w-[940px]  h-[450px] border-4 border-blue-900 mx-auto shadow-xl scale-75 p-[30px]'>
//                 <h1 className='text-center font-bold text-2xl my-3'>Login Form</h1>
//                 <div className='border border-red-600 max-w-[300px] mx-auto my-5 p-10'> 
//                 <input className='bg-yellow-200 border-2 border-violet-400 text-black my-3 placeholder-black ' placeholder='Email' type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} />
//                 <br />
//                 <input className='bg-yellow-200 border-2 border-violet-400 text-black my-3 placeholder-black' placeholder='Password' type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
//                 <button className='bg-red-300 ml-5 rounded-lg p-1' onClick={login}>LOGIN</button>
//                 <br />
//                 <p>do not have Account? <Button variant="outlined"><Link to='/register'> Sign Up</Link></Button> </p>
//                 </div>
//             </div>


//         </div>
//     )
// }

// export default Login




import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';

const Login = () => {
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let navigate = useNavigate();

    let login = () => {
        let payload = { email, password };
        axios.post('http://localhost:4001/login', payload).then((e) => {
            if (e.data.status === 'success') {
                navigate(`/dashbord/${e.data.id}`);
            } else if (e.data.status === 'fail') {
                alert('Wrong password');
            } else if (e.data.status === 'noUser') {
                alert('Invalid Email');
            }
        });
    };

    return (
        <div className="min-h-screen flex items-center justify-center ">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h1 className="text-3xl font-semibold text-center text-blue-800">Login Form</h1>
                <div className="mt-6">
                    <input
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 my-2"
                        placeholder="Email"
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <input
                        className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-500 my-2"
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                        className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300"
                        onClick={login}
                    >
                        LOGIN
                    </button>
                </div>
                <p className="text-center text-gray-600 mt-4">
                    Don't have an account?{' '}
                    <Link to="/register">
                        <Button variant="outlined" className="text-blue-700 border-blue-600">
                            Sign Up
                        </Button>
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Login;
