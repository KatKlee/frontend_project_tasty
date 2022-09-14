import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import './DishList.scss'
import { v4 as uuidv4 } from 'uuid'

const DishList = () => {
    const params = useParams()
    const [dish, setDish] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params.categoryid}`)
            .then(res => res.json())
            .then(data => setDish(data.meals))
    }, [])

    return (
        <main className='dishListMain'>
            <h1>Everything {`${params.categoryid}`}</h1>
            <section className='dishListSection'>
                {dish && dish.map((item) => {
                    return (
                        <Link className='dishListLink' key={uuidv4()} to={`/dishlist${params.categoryid}/${item.idMeal}`}>
                            <article className='articleFlex'>
                                <div className='paddingDiv'>
                                    <h2>{item.strMeal}</h2>
                                    <img src={item.strMealThumb} alt="" />
                                </div>
                            </article>
                        </Link>
                    )
                })}
            </section>

        </main>
    )
}

export default DishList