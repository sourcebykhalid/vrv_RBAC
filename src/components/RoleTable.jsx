import React from "react";

const RoleTable = ({ roles, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 py-2">Role Name</th>
          <th className="border border-gray-400 py-2">Permissions</th>
          <th className="border border-gray-400 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {roles.map((role) => (
          <tr key={role.id} className="text-center">
            <td
              className={`border border-gray-400 font-bold py-2 ${
                role.name === "Admin"
                  ? "text-blue-500"
                  : role.name === "Editor"
                  ? "text-green-500"
                  : "text-black"
              }`}
            >
              {role.name}
            </td>
            <td className="border border-gray-400 py-2">
              {role.permissions.join(", ")}
            </td>
            <td className="border border-gray-400 py-2">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded mx-1"
                onClick={() => onEdit(role)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded mx-1"
                onClick={() => onDelete(role.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default RoleTable;
