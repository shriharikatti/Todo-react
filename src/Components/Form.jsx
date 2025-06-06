import { useState } from "react";

export default function Form({ addTodo }) {
  const [todo, setTodo] = useState("");

  function handleSubmit(e){
    e.preventDefault();
    if(todo.trim()===""){
      return;
    }
    addTodo(todo);
    setTodo("");
  }

  return (
    <div className="mb-6 bg-white bg-opacity-70 backdrop-blur-sm rounded-xl shadow-xl p-6 max-w-md w-full mx-auto">
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          placeholder="Add a new task"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          className="w-250 p-3 rounded lg border-2 border-gray-300 focus:outline-none focus:border-blue-500 text-gray-700 placeholder-gray-500 shadow-sm"
        />
        <button type="submit"
        className="px-6 py-3 rounded-lg bg-blue-600 text-white font-bold shadow-md hover:bg-blue-700 focus:outline:none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out "
        >Add</button>
      </form>
    </div>
  );
}
