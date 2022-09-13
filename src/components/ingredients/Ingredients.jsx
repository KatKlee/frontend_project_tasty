import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Ingredients = () => {
    const [ing, setIng] = useState([])
    const params = useParams()

    const getIng =()=>{

        
    }

    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.dishid}`)
            .then(res => res.json())
            .then(data => setIng(data.meals))
    }, [])
    
    
    return (
        <>
        
        </>
    )
}
export default Ingredients