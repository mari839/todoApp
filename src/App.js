import React,{ useState, useEffect } from "react";
import TodoInput from "./components/ToDoInput/ToDoInput";
import TodoList from "./components/ToDoList/ToDoList";


function App() {
  const [tasks, setTasks] = useState([]); // State to store all tasks
  const [filter, setFilter] = useState("all"); // Filter state: 'all', 'complete', 'incomplete'
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to add a new task
  const handleAddNote = () => {
    const newNote = prompt("Enter your new note:");
    if (newNote) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newNote, completed: false },
      ]);
    }
  };

  // Function to toggle completion status of a task
  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Function to delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const editTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  // Function to filter tasks based on the selected filter
  const getFilteredTasks = () => {
    let filteredTasks = tasks;

    // Apply filter
    if (filter === "complete") {
      filteredTasks = tasks.filter((task) => task.completed);
    } else if (filter === "incomplete") {
      filteredTasks = tasks.filter((task) => !task.completed);
    }

    // Apply search term filter
    if (searchTerm.trim() !== "") {
      filteredTasks = filteredTasks.filter((task) =>
        task.text.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return filteredTasks;
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Apply the dark mode class to the body
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">TODO LIST</h1>

      <TodoInput setFilter={setFilter} darkMode={darkMode} toggleDarkMode={toggleDarkMode} setSearchTerm={setSearchTerm}/>

      {/* Render filtered tasks */}
      <TodoList
        tasks={getFilteredTasks()}
        toggleTaskCompletion={toggleTaskCompletion}
        deleteTask={deleteTask}
        editTask={editTask}
      />

      {/* Floating Action Button to add a new note */}
      <button
        className="btn btn-primary rounded-circle position-fixed"
        style={{
          bottom: "20px",
          right: "20px",
          width: "60px",
          height: "60px",
          fontSize: "24px",
        }}
        onClick={handleAddNote}
      >
        +
      </button>
    </div>
  );
}

export default App;