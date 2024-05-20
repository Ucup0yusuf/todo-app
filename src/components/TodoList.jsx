/* eslint-disable react/prop-types */
const TodoList = ({ children }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">{children}</ul>
    </div>
  );
};

export default TodoList;
