import React, { useState } from "react";

function ToDoItem({ task, toggleTaskCompletion, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false); 
  const [newText, setNewText] = useState(task.text); 

  const handleEdit = () => {
    if (isEditing && newText.trim() !== "") {
      editTask(task.id, newText); 
    }
    setIsEditing(!isEditing); 
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <div className="d-flex align-items-center">
        <input
          type="checkbox"
          className="form-check-input me-3"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)} 
        />
        {isEditing ? (
          <input
            type="text"
            value={newText}
            className="form-control me-3"
            onChange={(e) => setNewText(e.target.value)}
          />
        ) : (
          <span
            style={{
              textDecoration: task.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {task.text}
          </span>
        )}
      </div>
      <div>
        <button className={`btn btn-${isEditing ? "success" : "warning"} btn-sm me-2`}
          onClick={handleEdit}>
          <i className={`bi bi-${isEditing ? "check" : "pencil"}`}></i>
        </button>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => deleteTask(task.id)} 
        >
          <i className="bi bi-trash"></i>
        </button>
      </div>
    </li>
  );
}

export default ToDoItem;
