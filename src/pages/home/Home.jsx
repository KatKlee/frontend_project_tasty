import { useEffect, useState } from 'react';
import './Home.module.scss';

const Home =()=>{

    const [klohaus, setKlohaus] = useState([])
    
    useEffect(()=>{
        fetch('www.themealdb.com/api/json/v1/1/categories.php')
        .then(res => res.json())
        .then(data => console.log(data.categories[0]))
    },[])
    
    return(
        <main>
            <h1>Or go through our categories</h1>
            {klohaus && klohaus.map((item)=>{
                return(
                    <article>
                        <h1>{item.strCategory}</h1>
                        <img src={item.strCategoryThumb} alt="" />
                    </article>
                )
            })}
        </main>
    
    )
}

export default Home

