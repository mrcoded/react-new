import styles from './Modal.module.css'
import { createPortal } from 'react-dom'

const Backdrop = props => {
    return <div className={styles.backdrop}></div>
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
            {ReactDOM.createPortal(<Backdrop />, portaElement)}
            {ReactDOM.createPortal(<ModalOverlay />, portaElement)}

        </>
    )
}

export default Modal