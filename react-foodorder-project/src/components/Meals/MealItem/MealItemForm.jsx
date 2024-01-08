import Input from '../../Ui/Input'
import styles from './MealItemForm.module.css'

const MealItemForm = (props) => {
    return (
        <form className={styles.form}>
            {/* <Input label="Amount" input={{}}> */}
            <button>+ Add</button>
        </form>
    )
}

export default MealItemForm