import "./App.css";
import Todo from "./components/Todo";
import Title from "./components/Title";
import Modal from "./components/Modal";

function App() {
  return (
    <div>
      <Title />
      <div className="todo__wrapper">
        <Todo title="Finish FES"/>
        <Todo title="Finish interview section"/>
        <Todo title="Land $100k job"/>
      </div>
      {/* <Modal /> */}
    </div>
  );
}

export default App;
