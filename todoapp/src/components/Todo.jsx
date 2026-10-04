import { useState } from "react";

function Todo() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Complete Assignment 5",
      completed: false,
    },
  ]);

  const [newTask, setNewTask] = useState("");

  // Update input value
  const handleChange = (event) => {
    setNewTask(event.target.value);
  };

  // Add new task
  const handleAdd = () => {
    if (newTask.trim() === "") {
      return;
    }

    const task = {
      id: Date.now(),
      text: newTask,
      completed: false,
    };

    setTasks([...tasks, task]);
    setNewTask("");
  };

  // Mark task complete/incomplete
  const handleCheck = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id
        ? { ...task, completed: !task.completed }
        : task
    );

    setTasks(updatedTasks);
  };

  // Delete task
  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(
      (task) => task.id !== id
    );

    setTasks(updatedTasks);
  };

  return (
    <div style = {{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
    }}>
      <h1>To Do List</h1>
     
     <div style = {{
        display: "flex",
        alignItems: "center",
        gap: "5px",
     }}>
      <input
        type="text"
        placeholder="Enter a task"
        value={newTask}
        onChange={handleChange}
      />

      <button onClick={handleAdd}>
        Add
      </button>
    </div>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleCheck(task.id)}
            />

            <span
              className={task.completed ? "check" : ""}
            >
              {task.text}
            </span>

            <button
              onClick={() => handleDelete(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;