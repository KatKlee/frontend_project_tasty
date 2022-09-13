import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.scss';
import { v4 as uuidv4 } from 'uuid';


const Home = () => {

    const [categorie, setCategorie] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setCategorie(data.categories))
    }, [])

    return (
        <main className='homeMain'>
            <h1>Or go through our categories</h1>
            <section className='homeSection'>
                {categorie && categorie.map((item) => {
                    return (
                        <Link className='homeLink' key={uuidv4()} to={`/dishlist${item.strCategory}`}><article>
                            <div className='peddingDiv'>
                                <h2>{item.strCategory}</h2>
                                <img src={item.strCategoryThumb} alt="" />
                            </div>
                        </article></Link>
                    )
                })}
                <article className='random homeLink'>
                    <Link /* key={item.idMeal} */ to='/random'><h2>Random</h2></Link>
                </article>
            </section>
        </main>

    )
}

export default Home

