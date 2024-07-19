"use client";

import React, { useState } from "react";

export default function Todos() {
  const [todos, setTodos] = useState<string[]>([]);
  const [addTodoFieldValue, setAddTodoFieldValue] = useState("");

  const onChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    setAddTodoFieldValue(value);
  };

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    if (!addTodoFieldValue || todos.includes(addTodoFieldValue)) return;

    setTodos((prev) => [...prev, addTodoFieldValue]);
    setAddTodoFieldValue("");
  };

  const onDeleteHandler = (todoItem: string) => {
    setTodos((previousState) =>
      previousState.filter((item) => item !== todoItem)
    );
  };

  return (
    <div className="max-w-screen-sm mx-auto p-4 flex flex-col gap-4">
      <h4 className="text-xl font-semibold">Todo list</h4>

      <form className="flex items-end gap-4" onSubmit={onSubmitHandler}>
        <input
          name="addTodoField"
          className="block grow basis-auto rounded-md border-0 py-1.5 px-4 text-gray-900 mt-2 ring-1 ring-inset ring-gray-700 placeholder:text-gray-600 focus:ring-2 focus:ring-inset focus:ring-orange-600 focus:outline-none text-sm leading-6"
          placeholder="ex: Buy a coffee"
          type="text"
          value={addTodoFieldValue}
          onChange={onChangeHandler}
        />

        <button className="text-sm font-bold leading-6 uppercase grow-0 basis-auto border-0 py-1.5 px-6 bg-orange-500 rounded-md text-white hover:bg-orange-700 transition-colors ease-in-out duration-300">
          Add
        </button>
      </form>

      <div className="bg-gray-900 px-4 rounded-md">
        {todos.length === 0 && (
          <p className="w-full text-center px-4 py-8 font-semibold">
            No tasks todo 😎
          </p>
        )}

        <ul data-testid="todo-list">
          {todos.map((todo) => (
            <li
              key={todo}
              className="flex items-center justify-between gap-4 py-3 [&:not(:first-child)]:border-t border-gray-700"
            >
              <span>{todo}</span>

              <button
                className="text-sm font-bold leading-6 uppercase border-0 py-1.5 px-2 bg-gray-400 rounded-md text-gray-900 hover:bg-gray-300 transition-colors ease-in-out duration-300"
                onClick={() => onDeleteHandler(todo)}
              >
                Delete ❌
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
