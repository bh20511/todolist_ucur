import React from "react";
import styled from "./Todolist.module.scss";
import { useTodo } from "./TodoContext";

const Todo = () => {
  const { todos, toggleTodo, deleteTodo } = useTodo();
  return (
    <>
      {todos.map((todo) => {
        return (
          <div className={`${styled.TodoPage} ${styled.todo}`}>
            <span
              style={{ textDecoration: todo.complete ? "line-through" : null }}
            >
              {todo.todoContent}
            </span>
            <button
              className={styled.toggle}
              onClick={() => {
                toggleTodo(todo.id);
              }}
            >
              {todo.complete ? "Cancel" : "Complete"}
            </button>
            <button
              className={styled.delete}
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </div>
        );
      })}
    </>
  );
};

export default Todo;
