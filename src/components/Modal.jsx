import "./Modal.css";

function Modal({ title, cancelModal }) {
  function Cancel() {
    console.log("Cancel");
  }
  function Confirm() {
    console.log("Confirm");
  }
  return (
    <>
      <div className="modal">
        <p className="modal__title">{title}</p>
        <div className="modal__buttons">
          <button onClick={cancelModal} className="btn btn__cancel">Cancel</button>
          <button onClick={cancelModal} className="btn">Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
