import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.todos.items);

  return (
    <div>
      {items.map((item) => {
        <TodoItem key={item.id} />;
      })}
    </div>
  );
};

export default TodoList;
