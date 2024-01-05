import Card from "./Card/Card";
import Button from "./Button/Button";
import styles from "./ErrorModal.module.css";

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
  return <>{}</>;
};

export default ErrorModal;
