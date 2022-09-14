import { useEffect, useState } from 'react';
import './Searchbar.scss'

const Searchbar = () => {

    const MouseOver = (event) => {
        event.target.style.background = '#FFAC61';
    }
    const MouseOut = (event) => {
        event.target.style.background = '#FF6E86';
    }

    const [inputValue, setInputValue] = useState('')
    const [resultDish, setResultDish] = useState([])

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
    }


    return (
        <div className="Searchbar">
            <input type="text" value={inputValue} onChange={onChange} placeholder="Type something to search" />
            <button onClick={() => onSearch(inputValue)} className="searchBtn" onMouseOver={MouseOver} onMouseOut={MouseOut}>Search</button>
        </div>
    )
}

export default Searchbar 