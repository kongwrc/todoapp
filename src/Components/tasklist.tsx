import React from "react";
import Picture from "../img/file.png";
import Delete from "../img/delete.png";
import { useState } from "react";
import "../Styles/tasklist.css";

interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}

function TaskList() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [error, setError] = useState("");

  function handleCreateNewTask() {
    if (!newTaskTitle) {
      showError("Task title is required!");
      return;
    }

    const newTask = {
      id: Math.random(),
      title: newTaskTitle,
      isComplete: false,
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  }

  function showError(message: string) {
    setError(message);
    setTimeout(() => {
      setError("");
    }, 2500);
  }

  function handleRemoveTask(id: number) {
    const taskIndex = tasks.findIndex((task) => task.id === id);

    tasks.splice(taskIndex, 1);
    setTasks((tasks) => [...tasks]);
  }

  return (
    <section>
      <header className="flex-container">
        <div className="newtask">
          <input
            type="text"
            placeholder="Add New Task..."
            onChange={(e) => setNewTaskTitle(e.target.value)}
            value={newTaskTitle}
          />
          <button type="submit" onClick={handleCreateNewTask}>
            <img src={Picture} style={{ width: "2em" }} />
          </button>
        </div>
      </header>

      <main>
        <ul>
          {tasks.map((task) => (
            <li style={{ listStyle: "none" }} key={task.id}>
              <div className="flex-container-2">
                <p style={{ marginLeft: "3%", fontSize: "20px" }}>
                  {" "}
                  {task.title}
                </p>
                <div>
                  <button
                    type="button"
                    onClick={() => handleRemoveTask(task.id)}
                  >
                    <img src={Delete} style={{ width: "2em" }} />
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </main>
    </section>
  );
}
export default TaskList;
