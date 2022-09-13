import '../dishdetails/DishDetails.module.scss'
import { useEffect, useState } from 'react'


// instractions hat Unterteilungen  --> dynamisch Listenpunkte erstellen 
const DishDetailsRandom = () => {

    const [dishdetails, setDishdetails] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/random.php')
            .then(res => res.json())
            .then(data => setDishdetails(data.meals))
    }, [])

    return (
        <>
            {dishdetails && dishdetails.map((item) => {
                return (
                    <main>
                        <img src={item.strMealThumb} alt="" />
                        <section>
                            <article>
                                <h2>{item.strMeal}</h2>
                                <p>{item.strInstructions}</p>
                            </article>
                            <article>
                                <h2>Hier stehen Ingredients</h2>
                                <p>{item.strMeasure1} {item.strIngredient1}</p>
                            </article>
                        </section>

                    </main>
                )
            })}
        </>
    )
}

export default DishDetailsRandom