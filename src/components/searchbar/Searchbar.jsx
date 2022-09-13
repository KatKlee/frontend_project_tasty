const Searchbar = () => {
    return
}

export default Searchbar


/* 

import { Link } from "react-router-dom"

const searchItem = () => {

    const params = useParams()
    const [country, setCountry] = useState([])
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
        fetch(`www.themealdb.com/api/json/v1/1/filter.php?a=${params.strArea}`)
            .then(res => res.json())
            .then(data => setCountry(data.meals))
    }, [])

    return (
        <div>
            <input type="text" placeholder="Type a country" onChange={(e) => setSearchTerm(e.target.value)} />

            {country && country.filter((item) => {
                if (searchTerm == '') {
                    (item.strArea)
                }
            }).map((item) => {
                return


            })}

            <button>Search</button>

        </div>
    )
}


export default Searchbar  */