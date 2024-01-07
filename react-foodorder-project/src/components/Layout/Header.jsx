import meals from '../../assets/meals.jpg'
import styles from './Header.module.css'

const Header = (props) => {
    return (
        <>
            <header className={styles['.main-image']}>
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div>
                <img src={meals} />
            </div>
        </>
    )
}

export default Header