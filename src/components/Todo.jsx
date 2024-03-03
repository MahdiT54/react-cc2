import "./Todo.css";

function Todo({ title, onTodoDelete }) {
  // from props.title
  return (
    <div className="todo">
      <p>{title}</p>
      <button onClick={onTodoDelete}>Delete</button>
    </div>
  );
}

export default Todo;
