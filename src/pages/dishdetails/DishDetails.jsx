import './DishDetails.scss'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { v4 as uuidv4 } from 'uuid';


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
                    <main key={uuidv4()} className='detailsMain'>
                        <img src={item.strMealThumb} alt="food" />
                        <section className='detailsSection'>
                            <article className='a'>
                                <h2>Ingredients</h2>
                                <p>{item.strMeasure1} {item.strIngredient1}</p>
                                <p>{item.strMeasure2} {item.strIngredient2}</p>
                                <p>{item.strMeasure3} {item.strIngredient3}</p>
                                <p>{item.strMeasure4} {item.strIngredient4}</p>
                                <p>{item.strMeasure5} {item.strIngredient5}</p>
                                <p>{item.strMeasure6} {item.strIngredient6}</p>
                                <p>{item.strMeasure7} {item.strIngredient7}</p>
                                <p>{item.strMeasure8} {item.strIngredient8}</p>
                                <p>{item.strMeasure9} {item.strIngredient9}</p>
                                <p>{item.strMeasure10} {item.strIngredient10}</p>
                                <p>{item.strMeasure11} {item.strIngredient11}</p>
                                <p>{item.strMeasure12} {item.strIngredient12}</p>
                                <p>{item.strMeasure13} {item.strIngredient13}</p>
                                <p>{item.strMeasure14} {item.strIngredient14}</p>
                                <p>{item.strMeasure15} {item.strIngredient15}</p>
                                <p>{item.strMeasure16} {item.strIngredient16}</p>
                                <p>{item.strMeasure17} {item.strIngredient17}</p>
                                <p>{item.strMeasure18} {item.strIngredient18}</p>
                                <p>{item.strMeasure19} {item.strIngredient19}</p>
                                <p>{item.strMeasure20} {item.strIngredient20}</p>
                                <a href={item.strYoutube} target='_blank'><button className='youTubeBtn'>Watch on YouTube</button></a>
                            </article>
                            <article className='b'>
                                <h2>{item.strMeal}</h2>
                                <ul className='detailinstruction'>{item.strInstructions.split(['\r\n\r']).map(haus => <li key={uuidv4()}><span>{haus}</span></li>)}</ul>
                            </article>
                        </section>

                    </main>
                )
            })}
        </>
    )
}

export default DishDetails