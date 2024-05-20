/* eslint-disable react/prop-types */

const Todo = ({ text, todos, setTodos, id, todo }) => {
  const trashBtnHandler = () => {
    setTodos(todos.filter((el) => el.id !== id));
  };
  const checkBtnHandler = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }
        return item;
      })
    );
  };
  return (
    <div className="todo">
      <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {text}
      </li>
      <button className="complete-btn" onClick={checkBtnHandler}>
        <i className="fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={trashBtnHandler}>
        <i className="fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
