import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.module.scss';

const Home = () => {

    const [categorie, setCategorie] = useState([])

    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
            .then(res => res.json())
            .then(data => setCategorie(data.categories))
    }, [])

    return (
        <main>
            <h1>Or go through our categories</h1>
            <section>
                {categorie && categorie.map((item) => {
                    return (
                        <Link key={item.idCategory} to={`/dishlist${item.strCategory}`}><article>
                            <h2>{item.strCategory}</h2>
                            <img src={item.strCategoryThumb} alt="" />
                        </article></Link>
                    )
                })}
                <article id='random'>
                    <Link /* key={item.idMeal} */ to='/random'><h2>Random</h2></Link>
                </article>
            </section>
        </main>

    )
}

export default Home

