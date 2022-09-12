import logo from './img/tasty_logo.svg'
import Searchbar from '../searchbar/Searchbar'


const Header = () => {
    return (
        <header>
            <img src={logo} alt="logo" />
            <h1>Find a recipe, an idea, an inspiration...</h1>
            <Searchbar />
        </header>


    )
}

export default Header