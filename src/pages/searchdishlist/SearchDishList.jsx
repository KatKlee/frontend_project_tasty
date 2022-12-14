import { v4 as uuidv4 } from 'uuid';
import { Params, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../dishlist/DishList.scss'
import { useState, useEffect } from 'react';



const SearchDishList = () => {
    const params = useParams()
    const [dish, setDish] = useState([])


    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.inputValue}`)
            .then(res => res.json())
            .then(data => setDish(data.meals))

            
        }, [dish])

        const result =()=>{
            if(!dish){
                return<h1>Sorry, but no recipe was found for "{params.inputValue}" </h1>
            }else{
                return<h1>Everything with "{params.inputValue}"</h1>
            }
        }
        
    return (
        <main className='dishListMain'>
            <div>{result()}</div>
            <section className='dishListSection'>
                {dish && dish.map((item) => {
                    return (
                        <Link className='dishListLink' key={uuidv4()} to={`/dishlist${'_'}/${item.idMeal}`}>
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