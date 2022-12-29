import React, { useState } from "react";
import styled from "./Todolist.module.scss";
import {useTodo } from "./TodoContext";

const TodoForm = () => {
  //  輸入匡狀態
  const { addTodo } = useTodo();
  const [todoContent, setTodoContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(todoContent);
    setTodoContent("");
  };

  return (
    <form onSubmit={handleSubmit} className={styled.TodoPage}>
      <input
        type="text"
        value={todoContent}
        onChange={(e) => {
          setTodoContent(e.target.value);
        }}
        placeholder="輸入待辦事項..."
      />
    </form>
  );
};

export default TodoForm;
