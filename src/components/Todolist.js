import React from "react";
import Todo from "./Todo";
import NoTodos from "./NoTodos";

export default function Todolist({ todos, setTodos, filtered }) {
  var work = [<NoTodos key={Math.random() * 1000} />];
  if (todos[0]) {
    var work = filtered.map((todo) => (
      <Todo
        todos={todos}
        key={todo.id}
        usefulId={todo.id}
        setTodos={setTodos}
        todo={todo}
      />
    ));
    console.log(work);
  }
  return (
    <div className="todo-container">
      <ul className="todo-list">{work}</ul>
    </div>
  );
}
