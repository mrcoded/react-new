import { useContext } from "react"
import CartIcon from "../Cart/CartIcon"
import styles from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context"

const HeaderCartButton = (props) => {
    const cardCtx = useContext(CartContext)

    const numberOfCartItems = cardCtx.items.reduce((curNum, item) => {
        return curNum + item.amount
    }, 0)
    return (
        <button className={styles.button} onClick={props.onClick} >
            <span className={styles.icon}><CartIcon /></span>
            <span>Your Cart</span>
            <span className={styles.badge}>{numberOfCartItems}</span>
        </button >
    )
}

export default HeaderCartButton