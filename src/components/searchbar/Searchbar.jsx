import { useState } from 'react';
import SearchDishList from '../../pages/searchdishlist/SearchDishList';
import './Searchbar.scss'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Searchbar = () => {

    const MouseOver = (event) => {
        event.target.style.background = '#FFAC61';
    }
    const MouseOut = (event) => {
        event.target.style.background = '#FF6E86';
    }

    const [inputValue, setInputValue] = useState('')
    const [resultDish, setResultDish] = useState([])
    const [headline, setHeadline] = useState('')

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSearch = (searchTerm) => {
        console.log('search', searchTerm);
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
            .then(res => res.json())
            .then(data => {
                console.log(data.meals)
                setResultDish(data.meals)
            })
        setHeadline(`Everything ${inputValue}`)
    }


    return (
        <div className="Searchbar">
            <input type="text" value={inputValue} onChange={onChange} placeholder="Type something to search" />
            <Link to={`/dishlist${inputValue}`}><button onClick={() => onSearch(inputValue)} className="searchBtn" onMouseOver={MouseOver} onMouseOut={MouseOut}>Search</button></Link>
            <main key={uuidv4()} className='dishListMain'>
                <h1>{headline}</h1>
                {resultDish && resultDish.map((item) => {
                    return (
                        <SearchDishList

                            inputValue={inputValue}
                            mealname={item.strMeal}
                            image={item.strMealThumb}
                            idMeal={item.idMeal}
                        />
                    )
                })}
            </main>
        </div >

    )
}

export default Searchbar 