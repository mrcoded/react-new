import styles from './Modal.module.css'
import { createPortal } from 'react-dom'

const Backdrop = props => {
    return <div className={styles.backdrop} onClick={props.onClose}></div>
}

const ModalOverlay = props => {
    return <div className={styles.modal}>
        <div className={styles.content}>
            {props.children}
        </div>
    </div>
}

const portaElement = document.getElementById("overlays")

const Modal = (props) => {
    return (
        <>
            {createPortal(<Backdrop onClose={props.onClose} />, portaElement)}
            {createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portaElement)}

        </>
    )
}

export default Modal