import React from "react";

const UserTable = ({ users, onEdit, onDelete }) => (
  <table className="w-full border-collapse border border-gray-400">
    <thead>
      <tr className="bg-gray-200">
        <th className="border border-gray-400 py-2">Name</th>
        <th className="border border-gray-400 py-2">Role</th>
        <th className="border border-gray-400 py-2">Status</th>
        <th className="border border-gray-400 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id} className="text-center">
          <td className="border border-gray-400 py-2 text-neutral-700 font-bold">
            {user.name}
          </td>
          <td
            className={`border border-gray-400 font-bold py-2 ${
              user.role === "Admin"
                ? "text-blue-500"
                : user.role === "Editor"
                ? "text-green-500"
                : "text-black"
            }`}
          >
            {user.role}
          </td>
          <td
            className={`border border-gray-400 py-2 ${
              user.active ? "text-green-500" : "text-red-500"
            }`}
          >
            {user.active ? "Active" : "Inactive"}
          </td>
          <td className="border border-gray-400 py-2">
            <button
              className="bg-blue-500 text-white px-3 py-1 rounded mx-1"
              onClick={() => onEdit(user)}
            >
              Edit
            </button>
            <button
              className="bg-red-500 text-white px-3 py-1 rounded mx-1"
              onClick={() => onDelete(user.id)}
            >
              Delete
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
