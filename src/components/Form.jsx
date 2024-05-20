/* eslint-disable react/prop-types */
const Form = ({ inputText, setInputText, setTodos, todos, setStatus }) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };

  const addListHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      { text: inputText, completed: false, id: Math.random() * 1000 },
    ]);
    setInputText("");
  };

  const statusEventHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        type="text"
        className="todo-input"
        onChange={inputTextHandler}
        value={inputText}
      />
      <button className="todo-button" type="submit" onClick={addListHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select
          name="todos"
          className="filter-todo"
          onChange={statusEventHandler}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
