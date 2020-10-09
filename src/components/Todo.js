import React, { useEffect } from "react";
// import AOS from "aos";
// import "aos/dist/aos.css";

export default function Todo({ todo, todos, setTodos, usefulId }) {
  const deleteHandler = (e) => {
    setTodos(todos.filter((element) => element.id !== todo.id));
  };
  const completeHandler = (e) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          // console.log("I was clicked");
          return {
            ...item,
            completed: !item.completed,
          };
        }
        // console.log("i wasn't clicked");
        return item;
      })
    );
  };

  // useEffect(() => {
  // AOS.init();
  // AOS.refresh();
  // }, []);
  // const todoId = document.getElementById(usefulId);
  // if (todoId) {
  //   todoId.setAttribute("data-aos", "zoom-in-up");
  //   todoId.setAttribute("data-aos-mirror", "true");
  // }

  return (
    <div
      className={`todo todoId ${todo.completed ? "completed" : ""}`}
      style={{ marginBottom: 20, borderRadius: 3 }}
      id={usefulId}
      // data-aos="zoom-in-up"
      // data-aos-mirror="true"
      // data-aos-offset="10"
    >
      <li className="todo-item">{todo.text}</li>
      <button
        className={`complete-btn ${todo.completed ? "completed-right" : ""}`}
        onClick={completeHandler}
      >
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
}
