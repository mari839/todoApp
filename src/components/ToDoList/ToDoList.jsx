import React from "react";
import ToDoItem from "../ToDoItem/ToDoItem";

function ToDoList({ tasks, toggleTaskCompletion, deleteTask, editTask }) {
  return (
    <div>
      {tasks.length === 0 ? (
        <p className="text-center text-muted">No notes available</p>  
      ) : (
        <ul className="list-group">
          {tasks.map((task) => (
            <ToDoItem
              key={task.id}
              task={task}
              toggleTaskCompletion={toggleTaskCompletion}
              deleteTask={deleteTask}
              editTask={editTask}
            />
          ))}
        </ul>
      )}
    </div>
  );
}

export default ToDoList;
