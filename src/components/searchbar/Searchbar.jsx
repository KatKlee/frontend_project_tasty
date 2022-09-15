import { useState } from 'react';
import { Params, useNavigate, useParams } from 'react-router-dom';
import './Searchbar.scss'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

const Searchbar = () => {
    const params = useParams()
    const navigate = useNavigate()

    const MouseOver = (event) => {
        event.target.style.background = '#FFAC61';
    }
    const MouseOut = (event) => {
        event.target.style.background = '#FF6E86';
    }

    const [inputValue, setInputValue] = useState('')
        

    const onChange = (e) => {
        setInputValue(e.target.value);
    }

    const onSearch = (searchTerm) => {
        console.log('search', searchTerm);
        navigate(`/searchdishlist/${searchTerm}`)
        setInputValue('')
        
    }



    return (
        <div className="Searchbar">
            <input type="text" value={inputValue} onChange={onChange} placeholder="Type something to search" />
            <button onClick={() => onSearch(inputValue)} className="searchBtn" onMouseOver={MouseOver} onMouseOut={MouseOut}>Search</button>
        </div >

    )
}

export default Searchbar 