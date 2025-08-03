import { Route, Outlet, Routes } from "react-router";
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
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>

          <Route path="verify-email" element={<AdminVerify />}></Route>

          {/* Admin Route */}
          <Route path="admin" element={<Outlet />}>
            <Route index element={<div> Admin DashBoard</div>}></Route>
            <Route path="register" element={<AdminRegister />}></Route>
          </Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>

          {/* User Route */}
          <Route path="user" element={<Outlet />}>
            <Route index element={<ReadAllUser />}></Route>
            <Route path="create" element={<CreateUser />}></Route>
            <Route path=":id" element={<ReadSpecificUser />}></Route>
            <Route path="update" element={<Outlet />}>
              <Route index element={<div> Update </div>}></Route>
              <Route path=":id" element={<UpdateUser />}></Route>
            </Route>
          </Route>

          {/* teacher Route */}
          <Route path="teacher" element={<Outlet />}>
            <Route index element={<ReadAllTeacher />}></Route>
            <Route path="createTeacher" element={<CreateTeacher />}></Route>
            <Route path=":id" element={<ReadSpecificTeacher />}></Route>
            <Route path="update" element={<Outlet />}>
              <Route index element={<div> Update </div>}></Route>
              <Route path=":id" element={<UpdateTeacher />}></Route>
            </Route>
          </Route>

          {/* Subject Route */}
          <Route path="subject" element={<Outlet />}>
            <Route path="createSubject" element={<CreateSubject />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
