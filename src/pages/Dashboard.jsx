import React from "react";
import { MdDashboard } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-100  h-fit">
      <div className="flex items-center space-x-4 bg-blue-600 text-white p-6 rounded-lg shadow-md">
        <MdDashboard size={40} />
        <h1 className="text-3xl font-bold">RBAC Admin Dashboard</h1>
      </div>
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-blue-500">
          <h3 className="text-xl font-bold mb-2">Users</h3>
          <p className="text-gray-600">
            Manage all registered users in the system.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-green-500">
          <h3 className="text-xl font-bold mb-2">Roles</h3>
          <p className="text-gray-600">Define and assign roles to users.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-yellow-500">
          <h3 className="text-xl font-bold mb-2">Permissions</h3>
          <p className="text-gray-600">
            Set permissions for each role and user.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
