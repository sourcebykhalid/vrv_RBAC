import React from "react";
import { Link } from "react-router-dom";
import { MdDashboard, MdPeople, MdSecurity, MdSettings } from "react-icons/md";

const Sidebar = () => {
  return (
    <aside className="sm:w-64 w-fit bg-gray-900 text-white h-full fixed shadow-lg">
      <div className="p-4 text-center border-b border-gray-700">
        <h2 className="text-xl font-bold">Admin Panel</h2>
      </div>
      <ul className="p-4 space-y-12">
        <li>
          <Link
            to="/"
            className="flex items-center space-x-3 hover:text-blue-500 transition-colors duration-200"
          >
            <MdDashboard size={20} />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            to="/users"
            className="flex items-center space-x-3 hover:text-blue-500 transition-colors duration-200"
          >
            <MdPeople size={20} />
            <span>Users</span>
          </Link>
        </li>
        <li>
          <Link
            to="/roles"
            className="flex items-center space-x-3 hover:text-blue-500 transition-colors duration-200"
          >
            <MdSecurity size={20} />
            <span>Roles</span>
          </Link>
        </li>
        <li>
          <Link
            to="/permissions"
            className="flex items-center space-x-3 hover:text-blue-500 transition-colors duration-200"
          >
            <MdSettings size={20} />
            <span>Permissions</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
