import React from "react";

const PermissionTable = ({ permissions, onEdit, onDelete }) => {
  return (
    <table className="w-full border-collapse border border-gray-400">
      <thead>
        <tr className="bg-gray-200">
          <th className="border border-gray-400 py-2">Permission Name</th>
          <th className="border border-gray-400 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {permissions.map((permission, index) => (
          <tr key={index} className="text-center">
            <td className="border border-gray-400 py-2">{permission}</td>
            <td className="border border-gray-400 py-2">
              <button
                className="bg-blue-500 text-white px-3 py-1 rounded mx-1"
                onClick={() => onEdit(permission)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-3 py-1 rounded mx-1"
                onClick={() => onDelete(permission)}
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

export default PermissionTable;
