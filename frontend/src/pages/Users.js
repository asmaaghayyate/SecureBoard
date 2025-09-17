// src/pages/Users.js
import React, { useState } from "react";
import { fakeUsers, addUser, updateUser, deleteUser } from "../services/fakeData";
import Modal from "../components/Modal";
import "./Users.css";

function Users() {
  const [users, setUsers] = useState(fakeUsers);
  const [modalOpen, setModalOpen] = useState(false);
  const [editUser, setEditUser] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("user");

  const openModal = (user=null) => {
    setEditUser(user);
    if(user){ setName(user.name); setEmail(user.email); setRole(user.role);}
    setModalOpen(true);
  }

  const handleSave = () => {
    if(editUser){
      updateUser(editUser.id, {name,email,role});
      setUsers([...fakeUsers]);
    } else {
      const newUser = {id:Date.now(), name, email, role};
      addUser(newUser);
      setUsers([...fakeUsers]);
    }
    setModalOpen(false);
    setName(""); setEmail(""); setRole("user"); setEditUser(null);
  }

  const handleDelete = (id) => {
    if(window.confirm("Are you sure to delete?")){
      deleteUser(id);
      setUsers([...fakeUsers]);
    }
  }

  return (
    <div className="users-page">
      <h2>Users Management</h2>
      <button className="add-btn" onClick={()=>openModal()}>Add User</button>
      <table>
        <thead>
          <tr><th>Name</th><th>Email</th><th>Role</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {users.map(u=>(
            <tr key={u.id}>
              <td>{u.name}</td>
              <td>{u.email}</td>
              <td>{u.role}</td>
              <td>
                <button className="edit-btn" onClick={()=>openModal(u)}>Edit</button>
                <button className="delete-btn" onClick={()=>handleDelete(u.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Modal isOpen={modalOpen} onClose={()=>setModalOpen(false)}>
        <h3>{editUser?"Edit User":"Add User"}</h3>
        <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <select value={role} onChange={e=>setRole(e.target.value)}>
          <option value="user">User</option>
          <option value="manager">Manager</option>
          <option value="admin">Admin</option>
        </select>
        <button onClick={handleSave}>Save</button>
      </Modal>
    </div>
  )
}

export default Users;
