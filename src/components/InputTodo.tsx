import { useState } from "react";
import { InputTodoProps } from "../types";

export const InputTodo = ({
  onTodoCreate,
  onToggleAllTodos,
}: InputTodoProps) => {
  const [inputVal, setInputVal] = useState("");

  return (
    <form
      className="bg-slate-50 flex justify-between border-b border-gray-300 shadow-gray-300 shadow-inner"
      onSubmit={(event) => {
        event.preventDefault();
        if (inputVal.trim().length < 1) return false;
        onTodoCreate(inputVal);
        setInputVal("");
      }}
    >
      <button
        type="button"
        className="p-1 m-2"
        onClick={onToggleAllTodos}
        aria-label="Toggle all todos"
      >
        <span aria-hidden="true">✓</span>
      </button>
      <input
        type="text"
        className="p-3 flex-grow placeholder:italic placeholder:text-slate-400 shadow-gray-300 shadow-inner"
        placeholder="What needs to be done?"
        value={inputVal}
        onChange={(event) => setInputVal(event.currentTarget.value)}
      ></input>
    </form>
  );
};
