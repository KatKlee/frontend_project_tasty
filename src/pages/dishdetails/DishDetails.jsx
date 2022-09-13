import './DishDetails.module.scss'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

// instractions hat Unterteilungen  --> dynamisch Listenpunkte erstellen 
const DishDetails = () => {
    const params = useParams()
    const [dishdetails, setDishdetails] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.dishid}`)
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

export default DishDetails