// import { Route, Outlet, Routes } from "react-router";
// import Home from "../components/Home";
// import About from "../components/About";
// import Contact from "../components/Contact";
// import ReadAllUser from "../components/User/ReadAllUser";
// import CreateUser from "../components/User/CreateUser";
// import CreateTeacher from "../components/teacher/CreateTeacher";
// import CreateSubject from "../components/subject/CreateSubject";
// import ReadSpecificUser from "../components/User/ReadSpecificUser";
// import UpdateUser from "../components/User/UpdateUser";
// import AdminRegister from "../components/Admin/AdminRegister";
// import ReadAllTeacher from "../components/teacher/ReadAllTeacher";
// import ReadSpecificTeacher from "../components/teacher/ReadSpecificTeacher";
// import UpdateTeacher from "../components/teacher/UpdateTeacher";
// import AdminVerify from "../components/Admin/AdminVerify";
// import ReadAllSubject from "../components/subject/ReadAllSubject";
// import AdminLogin from "../components/Admin/AdminLogin";
// import CreateStudent from "../components/student/CreateStudent";
// import MyProfile from "../components/Admin/MyProfile";
// import AdminLogout from "../components/Admin/AdminLogout";
// import UpdateProfile from "../components/Admin/UpdateProfile";
// const MyRoutes = () => {
//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<AdminLogin />} />
//         <Route path="/verify-email" element={<AdminVerify />} />

//         <Route path="/" element={<Outlet />}>
//           <Route index element={<Home />}></Route>
//           <Route path="verify-email" element={<AdminVerify />}></Route>

//           {/* Admin Route */}
//           <Route path="admin" element={<Outlet />}>
//             <Route index element={<div> Admin DashBoard</div>}></Route>
//             <Route path="register" element={<AdminRegister />}></Route>
//             <Route path="login" element={<AdminLogin />}></Route>
//             <Route path="my-profile" element={<MyProfile />}></Route>
//             <Route path="logout" element={<AdminLogout />}></Route>
//             <Route path="profile-update" element={<UpdateProfile />}></Route>
//           </Route>
//           <Route path="about" element={<About />}></Route>
//           <Route path="contact" element={<Contact />}></Route>

//           {/* User Route */}
//           <Route path="user" element={<Outlet />}>
//             <Route index element={<ReadAllUser />}></Route>
//             <Route path="create" element={<CreateUser />}></Route>
//             <Route path=":id" element={<ReadSpecificUser />}></Route>
//             <Route path="update" element={<Outlet />}>
//               <Route index element={<div> Update </div>}></Route>
//               <Route path=":id" element={<UpdateUser />}></Route>
//             </Route>
//           </Route>

//           {/* teacher Route */}
//           <Route path="teacher" element={<Outlet />}>
//             <Route index element={<ReadAllTeacher />}></Route>
//             <Route path="createTeacher" element={<CreateTeacher />}></Route>
//             <Route path=":id" element={<ReadSpecificTeacher />}></Route>
//             <Route path="update" element={<Outlet />}>
//               <Route index element={<div> Update </div>}></Route>
//               <Route path=":id" element={<UpdateTeacher />}></Route>
//             </Route>
//           </Route>

//           {/* Subject Route */}
//           <Route path="subject" element={<Outlet />}>
//             <Route index element={<ReadAllSubject />}></Route>
//             <Route path="createSubject" element={<CreateSubject />}></Route>
//           </Route>

//           {/* Student Route */}
//           <Route path="student" element={<Outlet />}>
//             <Route index element={<ReadAllTeacher />}></Route>
//             <Route path="createSutdent" element={<CreateStudent />}></Route>
//           </Route>
//         </Route>
//       </Routes>
//     </>
//   );
// };

// export default MyRoutes;

import { Route, Outlet, useNavigate, Routes } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import ReadAllUser from "../components/User/ReadAllUser";
import CreateUser from "../components/User/CreateUser";
import CreateTeacher from "../components/teacher/CreateTeacher";
import CreateSubject from "../components/subject/CreateSubject";
import ReadSpecificUser from "../components/User/ReadSpecificUser";
import UpdateUser from "../components/User/UpdateUser";
import AdminRegister from "../components/Admin/AdminRegister";
import ReadAllTeacher from "../components/teacher/ReadAllTeacher";
import ReadSpecificTeacher from "../components/teacher/ReadSpecificTeacher";
import UpdateTeacher from "../components/teacher/UpdateTeacher";
import AdminVerify from "../components/Admin/AdminVerify";
import ReadAllSubject from "../components/subject/ReadAllSubject";
import AdminLogin from "../components/Admin/AdminLogin";
import CreateStudent from "../components/student/CreateStudent";
import MyProfile from "../components/Admin/MyProfile";
import AdminLogout from "../components/Admin/AdminLogout";
import UpdateProfile from "../components/Admin/UpdateProfile";
import ForgotPassword from "../components/Admin/ForgotPassword";

const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/verify-email" element={<AdminVerify />} />
        <Route path="/home" element={<Home />} />

        {/* Admin Routes */}
        <Route path="admin" element={<Outlet />}>
          <Route index element={<div> Admin Dashboard </div>} />
          <Route path="register" element={<AdminRegister />} />
          <Route path="login" element={<AdminLogin />} />
          <Route path="my-profile" element={<MyProfile />} />
          <Route path="logout" element={<AdminLogout />} />
          <Route path="profile-update" element={<UpdateProfile />} />
          <Route path="forgot-password" element={<ForgotPassword />} />
        </Route>

        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />

        {/* User Routes */}
        <Route path="user" element={<Outlet />}>
          <Route index element={<ReadAllUser />} />
          <Route path="create" element={<CreateUser />} />
          <Route path=":id" element={<ReadSpecificUser />} />
          <Route path="update" element={<Outlet />}>
            <Route index element={<div> Update </div>} />
            <Route path=":id" element={<UpdateUser />} />
          </Route>
        </Route>

        {/* Teacher Routes */}
        <Route path="teacher" element={<Outlet />}>
          <Route index element={<ReadAllTeacher />} />
          <Route path="createTeacher" element={<CreateTeacher />} />
          <Route path=":id" element={<ReadSpecificTeacher />} />
          <Route path="update" element={<Outlet />}>
            <Route index element={<div> Update </div>} />
            <Route path=":id" element={<UpdateTeacher />} />
          </Route>
        </Route>

        {/* Subject Routes */}
        <Route path="subject" element={<Outlet />}>
          <Route index element={<ReadAllSubject />} />
          <Route path="createSubject" element={<CreateSubject />} />
        </Route>

        {/* Student Routes */}
        <Route path="student" element={<Outlet />}>
          <Route index element={<ReadAllTeacher />} />
          <Route path="createSutdent" element={<CreateStudent />} />
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
