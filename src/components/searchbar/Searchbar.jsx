import SearchButton from "../buttonsearch/ButtonSearch"
import './Searchbar.scss'

const Searchbar = () => {
    return (
        <div className="Searchbar">
            <input type="text" placeholder="Type something to search" />
            <SearchButton />
        </div>
    )
}

export default Searchbar