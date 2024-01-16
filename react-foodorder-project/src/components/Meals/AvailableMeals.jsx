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

    useEffect(() => {
        const fetchMeal = async () => {
            //useeffect should not return a function but the cleanup fn can
            const res = await fetch(`https://react-http-e4524-default-rtdb.firebaseio.com/meals.json`)
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
        }

        fetchMeal()
    }, [])

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