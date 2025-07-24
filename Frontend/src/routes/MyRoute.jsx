import { Route, Outlet, Routes } from "react-router";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import ReadAllUser from "../components/User/ReadAllUser";
import CreateUser from "../components/User/CreateUser";
const MyRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<Home />}></Route>
          <Route path="about" element={<About />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="user" element={<Outlet />}>
            <Route index element={<ReadAllUser />}></Route>
            <Route path="create" element={<CreateUser />}></Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default MyRoutes;
