import { useContext, useState } from 'react'
import styles from './Cart.module.css'
import Modal from '../Ui/Modal'
import CartContext from '../../store/cart-context'
import CartItem from '../Cart/CartItem'
import Checkout from './Checkout'

const Cart = (props) => {
    const [isCheckout, setIsCheckout] = useState(false)

    const [isSubmitting, setIsSubmitting] = useState(false)

    const [didSubmit, setDidSubmit] = useState(false)

    const cartCtx = useContext(CartContext)

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`

    const hasItems = cartCtx.items.length > 0

    const cartItemRemoveHandler = id => {
        cartCtx.removeItem(id)

    }

    const cartItemAddHandler = item => {
        cartCtx.addItem({ ...item, amount: 1 })
    }

    const orderHandler = () => {
        setIsCheckout(true)
    }

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch(`https://reacthttpv2-default-rtdb.firebaseio.com/orders.json`, {
            method: 'POST',
            body: JSON.stringify({
                user: userData,
                orderItems: cartCtx.items
            })
        })
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart()
    }

    const cartItems = <ul className={styles['cart-items']}      >
        {cartCtx.items.map(item => (
            <CartItem
                key={item.id}
                name={item.name}
                amount={item.amount}
                price={item.price}
                onRemove={cartItemRemoveHandler.bind(null, item.id)}
                onAdd={cartItemAddHandler.bind(null, item)}
            />
        ))}
    </ul>

    const modalActions = (
        <div className={styles.actions}>
            <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
            {hasItems && <button className={styles.button} onClick={orderHandler}>Order</button>}
        </div>
    );

    const cartModalContent = (
        <>
            {cartItems}
            < div className={styles.total} >
                <span>Total Amount</span>
                <span>{totalAmount}</span>
            </div >
            {isCheckout && <Checkout onSubmit={submitOrderHandler} onCancel={props.onClose} />}
            {!isCheckout && modalActions}
        </>
    )

    const isSubmittingModalContent = <p>Sending order data...</p>

    const didSubmitModalContent = <p>Sucessfully sent the order!</p>

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {!isSubmitting && didSubmit && didSubmitModalContent}
        </Modal>

    )
}

export default Cart