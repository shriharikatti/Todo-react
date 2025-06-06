import React from "react";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="mt-4 space-y-3">
      {todos.map((item, index) => (
        <li
          key={item.id}
          className={`
                        flex items-center justify-between p-3 rounded-lg shadow-sm border border-gray-200 bg-white
                        cursor-pointer
                        ${item.completed ? "opacity-60 text-gray-500 line-through italic" : "text-gray-800"}
                        transition-all duration-300 ease-in-out
                    `}
        >
          <div
            className="flex items-center gap-2 flex-grow"
            onClick={() => toggleTodo(item.id)}
          >
            <div
              className={`
                                w-5 h-5 rounded-full border-2 border-gray-400 flex items-center justify-center
                                ${item.completed ? "bg-blue-500" : "bg-white"}
                                transition-colors duration-200 ease-in-out
                            `}
            >
              {item.completed && (
                <svg
                  className="w-4 h-4 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
              )}
            </div>
            <span>{item.text}</span>
          </div>
          <button
            onClick={() => deleteTodo(item.id)}
            className="text-red-500 hover:text-red-700 ml-4 focus:outline-none transition-colors duration-200 ease-in-out"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </li>
      ))}
    </ul>
  );
}
