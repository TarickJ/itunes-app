import './Modal.css';

function Modal(props) {
  return (
    <div className="modal-background">
      <div className="modal">
        <button onClick={props.onClose} className="modal-close">
          X
        </button>
        {props.children}
      </div>
    </div>
  );
}

export default Modal;
