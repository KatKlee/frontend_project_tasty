import { v4 as uuidv4 } from 'uuid';
import { Params, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../dishlist/DishList.scss'
import { useState, useEffect } from 'react';
import Searchbar from '../../components/searchbar/Searchbar'


const SearchDishList = () => {
    const params = useParams()
    const [dish, setDish] = useState([])

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
            .then(res => res.json())
            .then(data => setDish(data.meals))
    }, [])

    return (
        <main className='dishListMain'>
            <h1>Everything {inputValue}</h1>
            <section className='dishListSection'>
                {dish && dish.map((item) => {
                    return (
                        <Link className='dishListLink' key={uuidv4()} to={`/dishlist${inputValue}/${item.idMeal}`}>
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

export default SearchDishList






/* 
const SearchDishList = (props) => {
    const params = useParams()

    return (
        <section className='dishListSection'>
            <Link className='dishListLink' key={uuidv4()} to={`/dishlist${params.categoryid}/${props.idMeal}`}>
                <article className='articleFlex'>
                    <div className='paddingDiv'>
                        <h2>{props.mealname}</h2>
                        <img src={props.image} alt="" />
                    </div>
                </article>
            </Link>
        </section>

    )
}

export default SearchDishList */