import SearchButton from "../buttonsearch/ButtonSearch"
import './Searchbar.scss'

const Searchbar = () => {
    return (
        <div className="Searchbar">
            <input type="text" placeholder="Type something to search" />
            <SearchButton />
            {/* <Link key={props.id} to={/all_beers/${props.id}}><Button>Details</Button></Link> */}
        </div>
    )
}

export default Searchbar