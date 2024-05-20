import { useState, useEffect } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import Todo from "./components/Todo";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  useEffect(() => {
    if (localStorage.getItem("todos") === null) {
      setTodos([]);
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      return setTodos(localTodos);
    }
  }, []);

  useEffect(() => {
    switch (status) {
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos, status]);
  return (
    <>
      <header>
        <h1>Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        setInputText={setInputText}
        setTodos={setTodos}
        todos={todos}
        status={status}
        setStatus={setStatus}
      />
      <TodoList>
        {filteredTodos.map((todo) => {
          return (
            <Todo
              key={todo.id}
              text={todo.text}
              todos={todos}
              setTodos={setTodos}
              id={todo.id}
              todo={todo}
            />
          );
        })}
      </TodoList>
    </>
  );
}

export default App;
