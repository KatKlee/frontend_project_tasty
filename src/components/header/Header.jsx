import logo from './img/tasty_logo.svg'
import Searchbar from '../searchbar/Searchbar'
import './Header.module.scss'
import { Link } from 'react-router-dom'


const Header = () => {
    return (
        <header>
            <Link to='/'><img src={logo} alt="logo" /></Link>
            <h1>Find a recipe, an idea, an inspiration...</h1>
            <Searchbar />
        </header>


    )
}

export default Header