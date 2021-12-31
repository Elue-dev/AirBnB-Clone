import { Link } from 'react-router-dom'
import './City.css'

export default function City({ city }) {

    const { cityName, image, price, id } = city

    return (
        <Link to={`/city/${id}`}>
            <div className='cities-wrapperr'>
                <div className='image'>
                    <img src={image} alt={cityName} />
                </div>
                <div className='city-name'>{cityName}</div>
                <div className='price'>${price}/Night Average</div>
            </div>
        </Link>
    )
}
