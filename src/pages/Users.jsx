import React, { useState, useEffect } from "react";
import UserTable from "../components/UserTable";
import { mockUsers } from "../mock/mockApi";

const Users = () => {
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem("users");
    return storedUsers ? JSON.parse(storedUsers) : mockUsers;
  });

  const [currentUser, setCurrentUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const handleEdit = (user) => {
    setCurrentUser(user);
    setIsModalOpen(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCurrentUser((prevUser) => ({
      ...prevUser,
      [name]: name === "active" ? value === "true" : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentUser.id) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === currentUser.id ? currentUser : user
        )
      );
    } else {
      const newUser = { id: Date.now(), ...currentUser };
      setUsers([...users, newUser]);
    }

    setCurrentUser(null);
    setIsModalOpen(false);
  };

  return (
    <div className="sm:p-6 bg-gray-100 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-gray-800">Users</h2>
        <button
          onClick={() => {
            setCurrentUser({ name: "", role: "", active: true });
            setIsModalOpen(true);
          }}
          className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 shadow-lg"
        >
          Add User
        </button>
      </div>
      <UserTable users={users} onEdit={handleEdit} onDelete={handleDelete} />

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center">
          <div className="bg-white p-6 rounded-md w-full sm:w-96 shadow-xl">
            <h3 className="text-2xl mb-4">
              {currentUser?.id ? "Edit User" : "Add New User"}
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2">Name:</label>
                <input
                  type="text"
                  name="name"
                  value={currentUser.name}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Role:</label>
                <input
                  type="text"
                  name="role"
                  value={currentUser.role}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2">Status:</label>
                <select
                  name="active"
                  value={currentUser.active}
                  onChange={handleChange}
                  className="border border-gray-300 p-2 w-full rounded-md"
                >
                  <option value={true}>Active</option>
                  <option value={false}>Inactive</option>
                </select>
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md mr-2"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-6 py-2 rounded-md"
                >
                  {currentUser?.id ? "Save Changes" : "Add User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Users;
