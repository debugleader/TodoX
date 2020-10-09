import React from "react";

export default function NoTodos() {
  return (
    <div
      className="todo"
      style={{ borderRadius: 2, padding: 8, textAlign: "center" }}
    >
      <li className="todo-item">Sorry, there are no items!</li>
    </div>
  );
}
