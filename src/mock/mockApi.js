export const mockUsers = [
  { id: 1, name: "Alice", role: "Admin", active: true },
  { id: 2, name: "Bob", role: "Editor", active: false },
  { id: 3, name: "Charlie", role: "Viewer", active: true },
];

export const mockRoles = [
  { id: 1, name: "Admin", permissions: ["Read", "Write", "Delete"] },
  { id: 2, name: "Editor", permissions: ["Read", "Write"] },
  { id: 3, name: "Viewer", permissions: ["Read"] },
];

export const mockPermissions = ["Read", "Write", "Delete"];
