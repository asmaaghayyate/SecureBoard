// src/pages/Dashboard.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Users from "./Users";
import Tasks from "./Tasks";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-content">
        <Routes>
          <Route path="users" element={<Users />} />
          <Route path="tasks" element={<Tasks />} />
          <Route path="" element={<h2>Welcome to Dashboard</h2>} />
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;
