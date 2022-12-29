import React from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import { TodoProvider } from "./TodoContext";

const App = () => {
  return (
    <TodoProvider>
      <div>
        <TodoForm />
        <Todo />
      </div>
    </TodoProvider>
  );
};

export default App;
