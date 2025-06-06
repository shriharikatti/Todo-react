import React, { useState } from "react";
import Form from "./Form.jsx";
import TodoList from "./TodoList.jsx";
import Header from "./Header.jsx";

function Todo() {
  const [todos, setTodos] = useState([]);

  function addTodo(todoText) {
    setTodos((prevTodos) => [
      ...prevTodos,
      { id: Date.now(), text: todoText, completed: false },
    ]);
  }

  function toggleTodo(id) {
    setTodos((prevTodos) =>
      prevTodos.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  }

  function deleteTodo(id) {
    setTodos((prevTodos) => prevTodos.filter((item) => item.id !== id));
  }
  return (
    <div>
      <Header />
      <Form todos={todos} setTodos={setTodos} addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default Todo;
