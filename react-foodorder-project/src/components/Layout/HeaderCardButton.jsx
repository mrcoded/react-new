import CartIcon from "../Cart/CartIcon"
import styles from './HeaderCartButton.module.css'

const HeaderCardButton = (props) => {
    return (
        <button>
            <span><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>3</span>
        </button>
    )
}

export default HeaderCardButton