// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Login from "./components/Login";
// import Registration from "./components/Registration";
// import DashBord from "./components/DashBord";
// import CreateEmployee from "./components/CreateEmployee";
// import EmployeeList from "./components/EmployeeList";
// import EditEmployee from "./components/EditEmployee";
// import { Link } from "react-router-dom";

// function App() {
//   return (
//     <div className="bg-gray-100 min-h-screen w-full">
//       {/* Header Section */}
//       <header className="bg-blue-600 text-white py-4 shadow-md">
//         <div className="container mx-auto px-6 flex items-center justify-between">
//           <h1 className="text-3xl font-bold">
//            LOGO HERE
//           </h1>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="container mx-auto px-6 py-10">
//         <BrowserRouter>
//           <Routes>
//             <Route element={<Login />} path="/" />
//             <Route element={<Registration />} path="/register" />
//             <Route element={<DashBord />} path="/dashbord/:ID" />
//             <Route element={<CreateEmployee />} path="create-employee" />
//             <Route element={<EmployeeList />} path="/employee-list" />
//             <Route element={<EditEmployee />} path="/edit-employee/:ID" />
//           </Routes>
//         </BrowserRouter>
//       </main>

//       {/* Footer Section */}
//       <footer className="bg-blue-600 text-white text-center py-4 mt-10">
//         <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// }

// export default App;



import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Registration from "./components/Registration";
import DashBord from "./components/DashBord";
import CreateEmployee from "./components/CreateEmployee";
import EmployeeList from "./components/EmployeeList";
import EditEmployee from "./components/EditEmployee";

function Header() {
  const navigate = useNavigate();

  return (
    <header className="bg-blue-600 text-white py-4 shadow-md">
      <div className="container mx-auto px-6 flex items-center justify-between">
        <button
          onClick={() => navigate(-1)} // Navigate to the previous page
          className="bg-white text-blue-600 px-4 py-2 rounded font-bold shadow hover:bg-gray-100 transition"
        >
          Back
        </button>
      </div>
    </header>
  );
}

function App() {
  return (
    <div className="bg-gray-100 min-h-screen w-full">
      <BrowserRouter>
        {/* Header Section */}
        <Header />

        {/* Main Content */}
        <main className="container mx-auto px-6 py-10">
          <Routes>
            <Route element={<Login />} path="/" />
            <Route element={<Registration />} path="/register" />
            <Route element={<DashBord />} path="/dashbord/:ID" />
            <Route element={<CreateEmployee />} path="/create-employee" />
            <Route element={<EmployeeList />} path="/employee-list" />
            <Route element={<EditEmployee />} path="/edit-employee/:ID" />
          </Routes>
        </main>

        {/* Footer Section */}
        <footer className="bg-blue-600 text-white text-center py-4 mt-10">
          <p className="text-sm">© 2024 Your Company. All rights reserved.</p>
        </footer>
      </BrowserRouter>
    </div>
  );
}

export default App;

