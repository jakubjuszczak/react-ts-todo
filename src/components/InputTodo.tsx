import { useState } from "react";
import { Todo } from "../types";

interface InputTodoProps {
  onTodoCreate: (text: Todo["text"]) => void;
}

export const InputTodo = ({ onTodoCreate }: InputTodoProps) => {
  const [inputVal, setInputVal] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onTodoCreate(inputVal);
      }}
    >
      <input
        type="text"
        value={inputVal}
        onChange={(event) => setInputVal(event.target.value)}
      ></input>
      <button>go</button>
    </form>
  );
};
