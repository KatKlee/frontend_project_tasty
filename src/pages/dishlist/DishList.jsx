import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './DishList.module.scss'

const DishList = () => {
    const params = useParams()
    const [dish, setDish] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryid}`)
            .then(res => res.json())
            .then(data => setDish(data.meals))
    }, [])

    return (
        <main>
            <h1>Everything {`${params.categoryid}`}</h1>
            <section>
                {dish && dish.map((item) => {
                    return (
                        <Link key={item.idMeal} to={`/dishlist${params.categoryid}/dishdetails${item.strMeal}`}>
                            <article>
                                <h2>{item.strMeal}</h2>
                                <img src={item.strMealThumb} alt="" />
                            </article>
                        </Link>
                    )
                })}
            </section>

        </main>
    )
}

export default DishList