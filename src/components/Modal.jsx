import React, { useState } from "react";

const Modal = ({ isOpen, onClose, onSubmit, type, initialData }) => {
  const [name, setName] = useState(initialData?.name || "");
  const [permissions, setPermissions] = useState(
    initialData?.permissions || ""
  );

  const handleSubmit = () => {
    onSubmit({ name, permissions });
    onClose();
  };

  return (
    isOpen && (
      <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-6 rounded-md w-96">
          <h3 className="text-xl mb-4">
            {type} {type === "Role" ? "Details" : "User Details"}
          </h3>
          <div>
            <label className="block mb-2">Name:</label>
            <input
              type="text"
              className="border border-gray-300 p-2 mb-4 w-full"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          {type === "Role" && (
            <div>
              <label className="block mb-2">
                Permissions (comma separated):
              </label>
              <input
                type="text"
                className="border border-gray-300 p-2 mb-4 w-full"
                value={permissions}
                onChange={(e) => setPermissions(e.target.value)}
              />
            </div>
          )}
          <div className="flex justify-end">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
              onClick={onClose}
            >
              Cancel
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    )
  );
};

export default Modal;
