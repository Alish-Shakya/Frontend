import { Link } from "react-router";

export default function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-gray-100 px-6 py-4 shadow-md">
      {/* Left Links */}
      <div className="flex space-x-6 mb-2 md:mb-0">
        <Link
          to="/home"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Home
        </Link>

        <Link
          to="/about"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          About
        </Link>

        <Link
          to="/contact"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Contact
        </Link>
      </div>

      {/* Right Links */}
      <div className="flex space-x-6">
        <Link
          to="/admin/my-profile"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          My Profile
        </Link>
        <Link
          to="/admin/logout"
          className="text-gray-700 hover:text-blue-600 font-medium"
        >
          Logout
        </Link>

        <Link to={"/read-all"}> Read All Users</Link>
      </div>
    </div>
  );
}
