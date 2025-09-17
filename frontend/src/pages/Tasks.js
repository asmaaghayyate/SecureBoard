// src/pages/Tasks.js
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { fakeTasks, addTask, updateTask, deleteTask } from "../services/fakeData";
import Modal from "../components/Modal";
import "./Tasks.css";

function Tasks() {
  const { user } = useContext(AuthContext);
  const [tasks, setTasks] = useState(fakeTasks);
  const [modalOpen,setModalOpen] = useState(false);
  const [editTask,setEditTask] = useState(null);
  const [title,setTitle] = useState("");
  const [status,setStatus] = useState("Pending");

  const openModal = (task=null) => {
    setEditTask(task);
    if(task){ setTitle(task.title); setStatus(task.status);}
    setModalOpen(true);
  }

  const handleSave = () => {
    if(editTask){
      updateTask(editTask.id, {title,status});
      setTasks([...fakeTasks]);
    } else {
      const newTask = {id:Date.now(), title, status, userId:user.id};
      addTask(newTask);
      setTasks([...fakeTasks]);
    }
    setModalOpen(false);
    setTitle(""); setStatus("Pending"); setEditTask(null);
  }

  const handleDelete = (id) => {
    if(window.confirm("Are you sure to delete?")){
      deleteTask(id);
      setTasks([...fakeTasks]);
    }
  }

  const filteredTasks = user.role==="admin"?tasks:tasks.filter(t=>t.userId===user.id);

  return (
    <div className="tasks-page">
      <h2>Tasks</h2>
      <button className="add-btn" onClick={()=>openModal()}>Add Task</button>
      <table>
        <thead><tr><th>Title</th><th>Status</th><th>Actions</th></tr></thead>
        <tbody>
          {filteredTasks.map(t=>(
            <tr key={t.id}>
              <td>{t.title}</td>
              <td>{t.status}</td>
              <td>
                <button className="edit-btn" onClick={()=>openModal(t)}>Edit</button>
                <button className="delete-btn" onClick={()=>handleDelete(t.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal isOpen={modalOpen} onClose={()=>setModalOpen(false)}>
        <h3>{editTask?"Edit Task":"Add Task"}</h3>
        <input placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
        <select value={status} onChange={e=>setStatus(e.target.value)}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>
        <button onClick={handleSave}>Save</button>
      </Modal>
    </div>
  )
}

export default Tasks;
