// Fake Users
// Fake Users
export let fakeUsers = [
  // Admins
  { id: 1, name: "Admin1", email: "admin1@test.com", password: "admin123", role: "admin" },
  { id: 2, name: "Admin2", email: "admin2@test.com", password: "admin123", role: "admin" },
  { id: 3, name: "Admin3", email: "admin3@test.com", password: "admin123", role: "admin" },

  // Managers
  { id: 4, name: "Manager1", email: "manager1@test.com", password: "manager123", role: "manager" },
  { id: 5, name: "Manager2", email: "manager2@test.com", password: "manager123", role: "manager" },
  { id: 6, name: "Manager3", email: "manager3@test.com", password: "manager123", role: "manager" },
  { id: 7, name: "Manager4", email: "manager4@test.com", password: "manager123", role: "manager" },

  // Users
  { id: 8, name: "User1", email: "user1@test.com", password: "user123", role: "user" },
  { id: 9, name: "User2", email: "user2@test.com", password: "user123", role: "user" },
  { id: 10, name: "User3", email: "user3@test.com", password: "user123", role: "user" },
  { id: 11, name: "User4", email: "user4@test.com", password: "user123", role: "user" },
  { id: 12, name: "User5", email: "user5@test.com", password: "user123", role: "user" },
  { id: 13, name: "User6", email: "user6@test.com", password: "user123", role: "user" },
  { id: 14, name: "User7", email: "user7@test.com", password: "user123", role: "user" },
  { id: 15, name: "User8", email: "user8@test.com", password: "user123", role: "user" },
  { id: 16, name: "User9", email: "user9@test.com", password: "user123", role: "user" },
  { id: 17, name: "User10", email: "user10@test.com", password: "user123", role: "user" },
  { id: 18, name: "User11", email: "user11@test.com", password: "user123", role: "user" },
  { id: 19, name: "User12", email: "user12@test.com", password: "user123", role: "user" },
  { id: 20, name: "User13", email: "user13@test.com", password: "user123", role: "user" }
];

// Fake Tasks (30 tasks)
export let fakeTasks = [
  { id: 1, title: "SecureBoard App", status: "In Progress", userId: 8 },
  { id: 2, title: "React Dashboard", status: "Completed", userId: 9 },
  { id: 3, title: "Backend Laravel", status: "Pending", userId: 4 },
  { id: 4, title: "UI Design", status: "In Progress", userId: 10 },
  { id: 5, title: "Database Optimization", status: "Pending", userId: 5 },
  { id: 6, title: "Authentication Module", status: "Completed", userId: 11 },
  { id: 7, title: "API Integration", status: "In Progress", userId: 6 },
  { id: 8, title: "Unit Testing", status: "Pending", userId: 12 },
  { id: 9, title: "Deployment Setup", status: "Completed", userId: 1 },
  { id: 10, title: "Bug Fixing", status: "In Progress", userId: 13 },
  { id: 11, title: "Notifications System", status: "Pending", userId: 7 },
  { id: 12, title: "User Roles Management", status: "Completed", userId: 2 },
  { id: 13, title: "Performance Review", status: "In Progress", userId: 14 },
  { id: 14, title: "Documentation", status: "Pending", userId: 15 },
  { id: 15, title: "Error Logging", status: "Completed", userId: 3 },
  { id: 16, title: "Analytics Dashboard", status: "In Progress", userId: 16 },
  { id: 17, title: "Frontend Refactoring", status: "Pending", userId: 17 },
  { id: 18, title: "Security Audit", status: "Completed", userId: 1 },
  { id: 19, title: "Email Service Setup", status: "In Progress", userId: 18 },
  { id: 20, title: "Project Handover", status: "Pending", userId: 19 },
  { id: 21, title: "Client Meeting", status: "In Progress", userId: 20 },
  { id: 22, title: "Server Maintenance", status: "Completed", userId: 4 },
  { id: 23, title: "Design Update", status: "In Progress", userId: 5 },
  { id: 24, title: "Testing Automation", status: "Pending", userId: 6 },
  { id: 25, title: "Bug Tracking", status: "Completed", userId: 7 },
  { id: 26, title: "Feature Planning", status: "In Progress", userId: 8 },
  { id: 27, title: "Code Review", status: "Pending", userId: 9 },
  { id: 28, title: "Sprint Retrospective", status: "Completed", userId: 10 },
  { id: 29, title: "UI Improvement", status: "In Progress", userId: 11 },
  { id: 30, title: "Final Deployment", status: "Pending", userId: 12 }
];



// Users CRUD
export const addUser = (user) => fakeUsers.push(user);
export const updateUser = (id, data) => {
  const index = fakeUsers.findIndex(u => u.id === id);
  if(index !== -1) fakeUsers[index] = { ...fakeUsers[index], ...data };
};
export const deleteUser = (id) => { fakeUsers = fakeUsers.filter(u => u.id !== id); };

// Tasks CRUD
export const addTask = (task) => fakeTasks.push(task);
export const updateTask = (id, data) => {
  const index = fakeTasks.findIndex(t => t.id === id);
  if(index !== -1) fakeTasks[index] = { ...fakeTasks[index], ...data };
};
export const deleteTask = (id) => { fakeTasks = fakeTasks.filter(t => t.id !== id); };
