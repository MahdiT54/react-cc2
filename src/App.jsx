import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";
import React, { useState, useEffect } from "react";
import Counter from "./components/Counter";

function App() {
  const [showModal, setShowModal] = useState(false);

  function onTodoDelete() {
    setShowModal(true);
  }

  function cancelModal() {
    setShowModal(false);
  }

  useEffect(() => {
    console.log("on mount")
  }, [showModal])

  return (
    <div>
      <Title />
      <div>
        <input
          type="text"
          onChange={(event) => {
            console.log(event.target.value);
          }}
        />
        <button onClick={() => setShowModal(true)}>Add todo</button>
      </div>
      <div className="todo__wrapper">
        <Todo onTodoDelete={onTodoDelete} title="Finish FES" />
        <Todo onTodoDelete={onTodoDelete} title="Finish interview section" />
        <Todo onTodoDelete={onTodoDelete} title="Land $100k job" />
      </div>
      <Counter />
      {showModal && (
        <Modal cancelModal={cancelModal} title="Confirm Delete?" />
      )}
    </div>
  );
}

export default App;
