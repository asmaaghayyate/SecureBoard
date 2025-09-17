import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import "./Sidebar.css";

function Sidebar() {
  const { user } = useContext(AuthContext);
  if(!user) return null;

  const menuItems = [];
  if(user.role === "admin") menuItems.push({name:"Dashboard", path:"/dashboard"}, {name:"Users", path:"/dashboard/users"}, {name:"Tasks", path:"/dashboard/tasks"});
  if(user.role === "manager") menuItems.push({name:"Dashboard", path:"/dashboard"}, {name:"Tasks", path:"/dashboard/tasks"});
  if(user.role === "user") menuItems.push({name:"Tasks", path:"/dashboard/tasks"});

  return (
    <div className="sidebar">
      <h2>SecureBoard</h2>
      <ul>
        {menuItems.map(item => <li key={item.path}><Link to={item.path}>{item.name}</Link></li>)}
      </ul>
    </div>
  );
}

export default Sidebar;
