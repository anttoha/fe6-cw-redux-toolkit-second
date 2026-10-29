import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/slices/todoSlice";

const TodoInput = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value.trim()) return;
    dispatch(addTodo(value.trim()));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="flex-1 px-4 py-2.5 border border-blue-600 bg-slate-50 rounded-xl text-slate-400 transition focus:ring-2 focus:ring-indigo-500 focus:bg-white"
        placeholder="Що мені зробити?"
      />
      <button
        type="submit"
        className="px-5 py-2.5 bg-slate-600 text-white rounded-xl shadow-lg shadow-indigo-300 cursor-pointer font-medium"
      >
        Додати
      </button>
    </form>
  );
};

export default TodoInput;
