import { v4 as uuidv4 } from 'uuid';
import { Params, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../dishlist/DishList.scss'

const SearchDishList = (props) => {
    const params = useParams()

    return (
        <section className='dishListSection'>
            <Link className='dishListLink' key={uuidv4()} to={`/dishlist${params.categoryid}/${props.idMeal}`}>
                <article className='articleFlex'>
                    <div className='paddingDiv'>
                        <h2>{props.mealname}</h2>
                        <img src={props.image} alt="" />
                    </div>
                </article>
            </Link>
        </section>

    )
}

export default SearchDishList