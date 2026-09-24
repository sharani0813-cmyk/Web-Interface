import React, { useEffect, useState } from "react";
import "./todolist.css";

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    const savedTasks = localStorage.getItem("todoTasks");

    if (savedTasks) {
      setTasks(JSON.parse(savedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todoTasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (task.trim() === "") {
      return;
    }

    const newTask = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTasks([...tasks, newTask]);
    setTask("");
  }

  function handleKeyPress(e) {
    if (e.key === "Enter") {
      addTask();
    }
  }

  function toggleTask(id) {
    setTasks(
      tasks.map(function (item) {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        }

        return item;
      })
    );
  }

  function deleteTask(id) {
    setTasks(
      tasks.filter(function (item) {
        return item.id !== id;
      })
    );
  }

  function clearCompleted() {
    setTasks(
      tasks.filter(function (item) {
        return !item.completed;
      })
    );
  }

  const completedCount = tasks.filter(function (item) {
    return item.completed;
  }).length;

  const pendingCount = tasks.length - completedCount;

  const filteredTasks = tasks.filter(function (item) {
    const matchesSearch = item.text
      .toLowerCase()
      .includes(search.toLowerCase());

    if (filter === "completed") {
      return matchesSearch && item.completed;
    }

    if (filter === "pending") {
      return matchesSearch && !item.completed;
    }

    return matchesSearch;
  });

  return (
    <div className="todo-page">

      <header className="header">
        <div className="logo">
          <span>✓</span>
          TaskFlow
        </div>

        <div className="header-text">
          Stay organized. Get things done.
        </div>
      </header>

      <main className="main-container">

        <section className="hero">
          <div>
            <p className="welcome">WELCOME BACK 👋</p>
            <h1>My Todo List</h1>
            <p className="subtitle">
              Organize your tasks and make your day more productive.
            </p>
          </div>
        </section>

        <section className="stats">

          <div className="stat-card">
            <div className="stat-icon">📋</div>
            <div>
              <h2>{tasks.length}</h2>
              <p>Total Tasks</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">⏳</div>
            <div>
              <h2>{pendingCount}</h2>
              <p>Pending</p>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-icon">✓</div>
            <div>
              <h2>{completedCount}</h2>
              <p>Completed</p>
            </div>
          </div>

        </section>

        <section className="todo-card">

          <div className="add-section">

            <input
              type="text"
              placeholder="What do you need to do?"
              value={task}
              onChange={(e) => setTask(e.target.value)}
              onKeyDown={handleKeyPress}
            />

            <button className="add-btn" onClick={addTask}>
              + Add Task
            </button>

          </div>

          <div className="tools">

            <div className="search-box">
              🔍
              <input
                type="text"
                placeholder="Search tasks..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div className="filters">

              <button
                className={filter === "all" ? "active" : ""}
                onClick={() => setFilter("all")}
              >
                All
              </button>

              <button
                className={filter === "pending" ? "active" : ""}
                onClick={() => setFilter("pending")}
              >
                Pending
              </button>

              <button
                className={filter === "completed" ? "active" : ""}
                onClick={() => setFilter("completed")}
              >
                Completed
              </button>

            </div>

          </div>

          <div className="task-header">
            <h2>My Tasks</h2>

            {completedCount > 0 && (
              <button
                className="clear-btn"
                onClick={clearCompleted}
              >
                Clear Completed
              </button>
            )}
          </div>

          <div className="task-list">

            {filteredTasks.length === 0 ? (

              <div className="empty">

                <div className="empty-icon">📝</div>

                <h3>
                  {search
                    ? "No tasks found"
                    : "No tasks yet"}
                </h3>

                <p>
                  {search
                    ? "Try searching for something else."
                    : "Add your first task to get started."}
                </p>

              </div>

            ) : (

              filteredTasks.map(function (item) {

                return (
                  <div
                    className={
                      item.completed
                        ? "task completed"
                        : "task"
                    }
                    key={item.id}
                  >

                    <button
                      className="check-btn"
                      onClick={() => toggleTask(item.id)}
                    >
                      {item.completed ? "✓" : ""}
                    </button>

                    <span className="task-text">
                      {item.text}
                    </span>

                    <button
                      className="delete-btn"
                      onClick={() => deleteTask(item.id)}
                    >
                      🗑
                    </button>

                  </div>
                );

              })

            )}

          </div>

        </section>

      </main>

      <footer>
        <p>TaskFlow • Stay organized, stay productive.</p>
      </footer>

    </div>
  );
}

export default TodoList;