import React from "react";

export default function Form({
  setInputText,
  setTodos,
  todos,
  inputText,
  setStatus,
  setFiltered,
}) {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    e.preventDefault();
    if (inputText !== "" && isNaN(inputText)) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: `id-${Math.round(Math.random() * 1000)}`,
        },
      ]);
      setInputText("");
    }
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
  const deleteAll = () => {
    setFiltered([]);
    setTodos([]);
  };

  const checkScreen = (imp, size) => {
    return window.matchMedia(`(${imp}-width: ${size}px)`).matches;
  };

  var selectWork = null;

  if (checkScreen("min", 650)) {
    selectWork = [
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>,
    ];
  }

  return (
    <div>
      <form>
        <input
          onChange={inputTextHandler}
          type="text"
          className="todo-input"
          value={inputText}
        />
        <button
          className="todo-button"
          type="submit"
          onClick={submitTodoHandler}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button className="todo-button" type="submit" onClick={deleteAll}>
          <i className="fas fa-minus-circle"></i>
        </button>
        {selectWork}
      </form>
    </div>
  );
}
