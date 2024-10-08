import { useEffect } from 'react';
import Card from '../Ui/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';
import { useState } from 'react';

// const DUMMY_MEALS = [
//     {
//         id: 'm1',
//         name: 'Sushi',
//         description: 'Finest fish and veggies',
//         price: 22.99,
//     },
//     {
//         id: 'm2',
//         name: 'Schnitzel',
//         description: 'A german specialty!',
//         price: 16.5,
//     },
//     {
//         id: 'm3',
//         name: 'Barbecue Burger',
//         description: 'American, raw, meaty',
//         price: 12.99,
//     },
//     {
//         id: 'm4',
//         name: 'Green Bowl',
//         description: 'Healthy...and green...',
//         price: 18.99,
//     },
// ];

const AvailableMeals = () => {
    const [meals, setMeals] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [httpError, setHttpError] = useState()

    useEffect(() => {
        const fetchMeal = async () => {
            //useeffect should not return a function but the cleanup fn can
            const res = await fetch(`https://reacthttpv2-default-rtdb.firebaseio.com/meals.json`)

            if (!res.ok) {
                throw new Error('Something went wrong')
            }

            const data = await res.json()
            console.log(data);

            //convert data to arrays from default object
            const loadedMeals = []

            for (const key in data) {
                loadedMeals.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                })
            }
            console.log(loadedMeals);
            setMeals(loadedMeals)
            setIsLoading(false)
        }

        fetchMeal().catch((error) => {
            setIsLoading(false)
            setHttpError(error.message)
        })
    }, [])

    if (isLoading) {
        return (
            <section className={classes.MealsLoading}>
                <p> Loading...</p>
            </section>
        )
    }

    if (httpError) {
        return (
            <section className={classes.MealsError}>
                <p>{httpError}</p>
            </section>
        )
    }

    const mealsList = meals.map((meal) => (
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        />
    ));

    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;