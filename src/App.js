import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todolist from "./components/Todolist";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    (function () {
      if (localStorage.getItem("todos") === null) {
        localStorage.setItem("todos", JSON.stringify([]));
      } else {
        setTodos(JSON.parse(localStorage.getItem("todos")));
      }
    })();
  }, []);

  useEffect(() => {
    (function () {
      localStorage.setItem("todos", JSON.stringify(todos));
    })();
    (function () {
      switch (status) {
        case "completed":
          setFiltered(todos.filter((todo) => todo.completed === true));
          break;
        case "uncompleted":
          setFiltered(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFiltered(todos);
          break;
      }
    })();
  }, [todos, status]);
  const filterHandler = () => {};
  return (
    <div className="App">
      <header>
        <h1 style={{ marginTop: "130px", marginBottom: "10px" }}>TodoX</h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
        setFiltered={setFiltered}
      />
      <Todolist
        inputText={inputText}
        setTodos={setTodos}
        todos={todos}
        filtered={filtered}
      />
    </div>
  );
}

export default App;
