import Card from "./Card/Card";
import Button from "./Button/Button";
import styles from "./ErrorModal.module.css";
import ReactDom from "react-dom";

const Backdrop = (props) => {
  <div className={styles.backdrop} onClick={props.onConfirm} />;
};

const ModalOverlay = (props) => {
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={styles.content}>
      <p>{props.message}</p>
    </div>
    <footer className={styles.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>;
};

const ErrorModal = (props) => {
  //React Portal - to position a component in the dom
  return (
    <>
      {ReactDom.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop")
      )}
      {ReactDom.createPortal(
        <ModalOverlay
          title={props.title}
          message={props.message}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay")
      )}
    </>
  );
};

export default ErrorModal;
