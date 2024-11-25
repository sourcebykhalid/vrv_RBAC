import React, { useState } from "react";
import PermissionTable from "../components/PermissionTable";
import { mockPermissions } from "../mock/mockApi";
import Modal from "../components/Modal";

const Permissions = () => {
  const [permissions, setPermissions] = useState(mockPermissions);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPermission, setSelectedPermission] = useState(null);

  const handleEdit = (permission) => {
    setSelectedPermission(permission);
    setIsModalOpen(true);
  };

  const handleDelete = (permission) => {
    setPermissions(permissions.filter((perm) => perm !== permission));
  };

  const handleModalSubmit = (updatedPermission) => {
    if (selectedPermission) {
      setPermissions(
        permissions.map((perm) =>
          perm === selectedPermission ? updatedPermission : perm
        )
      );
    } else {
      setPermissions([...permissions, updatedPermission]);
    }
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="sm:text-3xl font-bold text-gray-800">
          Manage Permissions
        </h2>
        <button
          onClick={() => {
            setSelectedPermission(null);
            setIsModalOpen(true);
          }}
          className="bg-blue-600 text-white px-2 sm:px-6 py-2 rounded-md hover:bg-blue-700 shadow-lg"
        >
          Add Permission
        </button>
      </div>
      <PermissionTable
        permissions={permissions}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      {isModalOpen && (
        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleModalSubmit}
          type="Permission"
          initialData={selectedPermission}
        />
      )}
    </div>
  );
};

export default Permissions;
